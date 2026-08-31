/* Deutsch fürs Büro · Live-Klasse Teams-Adapter
   In Teams: Microsoft Live Share + SharedMap.
   Außerhalb von Teams: bestehender lokaler BroadcastChannel/localStorage-Fallback. */

const CONFIG = {
  roomInput: 'live-room',
  nameInput: 'live-name',
  answerInput: 'live-answer',
  status: 'live-status',
  saved: 'live-saved',
  grid: 'live-grid',
  taskId: 'arbeitsplatz-anrede'
};

function clean(value) {
  return String(value || '').trim();
}

function timeText(ts) {
  return ts
    ? new Date(ts).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    : '';
}

function startLocal(reason) {
  if (window.BSKLiveTeilnehmer) {
    window.BSKLiveTeilnehmer.start(CONFIG);
    if (reason) {
      const status = document.getElementById(CONFIG.status);
      if (status) status.textContent += ' (' + reason + ')';
    }
  }
}

async function startTeamsLiveShare() {
  if (!window.microsoftTeams?.app?.initialize) {
    throw new Error('Teams SDK nicht verfügbar');
  }

  await window.microsoftTeams.app.initialize();
  const context = await window.microsoftTeams.app.getContext();

  const {
    LiveShareClient,
    LiveShareHost,
    SharedMap
  } = await import('./liveshare-bundle.js?v=1');

  if (!LiveShareClient || !LiveShareHost?.create || !SharedMap) {
    throw new Error('Live-Share-Bundle unvollständig');
  }

  const host = LiveShareHost.create();
  const client = new LiveShareClient(host);
  const schema = { initialObjects: { answers: SharedMap } };
  const { container } = await client.joinContainer(schema);
  const answers = container.initialObjects.answers;

  const roomInput = document.getElementById(CONFIG.roomInput);
  const nameInput = document.getElementById(CONFIG.nameInput);
  const answer = document.getElementById(CONFIG.answerInput);
  const status = document.getElementById(CONFIG.status);
  const saved = document.getElementById(CONFIG.saved);
  const grid = document.getElementById(CONFIG.grid);
  const identityRow = document.querySelector('.live-kopf');
  if (!answer || !status || !saved) return;

  const teamsUser = context?.user || {};
  const userId = clean(teamsUser.id || teamsUser.userPrincipalName || teamsUser.loginHint || '');
  const displayName = clean(teamsUser.displayName || teamsUser.userPrincipalName || 'Teilnehmende Person');

  if (!userId) throw new Error('Teams-Nutzer-ID nicht verfügbar');

  if (nameInput) nameInput.value = displayName;
  if (roomInput) roomInput.value = 'Teams-Kanal';
  if (identityRow) identityRow.hidden = true;

  const myKey = CONFIG.taskId + ':' + userId;
  status.textContent = 'Live Share aktiv – verbunden mit diesem Teams-Kanal.';

  let timer = null;
  let applyingRemote = false;

  function rowsForTask() {
    const rows = [];
    answers.forEach((value, key) => {
      if (String(key).startsWith(CONFIG.taskId + ':') && value) rows.push(value);
    });
    return rows.sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'de'));
  }

  function renderGrid() {
    if (!grid) return;
    const rows = rowsForTask();
    grid.innerHTML = '';
    if (!rows.length) {
      const empty = document.createElement('div');
      empty.className = 'live-empty';
      empty.textContent = 'Noch keine Texte eingegangen.';
      grid.appendChild(empty);
      return;
    }
    rows.forEach(row => {
      const card = document.createElement('article');
      card.className = 'live-card';
      const title = document.createElement('h3');
      title.textContent = row.name || 'Ohne Namen';
      const text = document.createElement('div');
      text.className = 'live-answer';
      text.textContent = row.answer || '—';
      const meta = document.createElement('div');
      meta.className = 'live-meta';
      meta.textContent = row.updatedAt ? 'Aktualisiert ' + timeText(row.updatedAt) : '';
      card.append(title, text, meta);
      grid.appendChild(card);
    });
  }

  function restoreMine() {
    const row = answers.get(myKey);
    if (!row) return;
    applyingRemote = true;
    answer.value = row.answer || '';
    applyingRemote = false;
    saved.textContent = row.updatedAt ? 'Zuletzt synchronisiert ' + timeText(row.updatedAt) : '';
  }

  function publish() {
    const row = {
      userId,
      name: displayName,
      answer: answer.value,
      updatedAt: Date.now()
    };
    answers.set(myKey, row);
    saved.textContent = 'Synchronisiert ' + timeText(row.updatedAt);
    status.textContent = 'Live Share aktiv – verbunden mit diesem Teams-Kanal.';
    renderGrid();
  }

  answers.on('valueChanged', changed => {
    if (changed?.key === myKey) restoreMine();
    renderGrid();
  });

  answer.addEventListener('input', () => {
    if (applyingRemote) return;
    clearTimeout(timer);
    timer = setTimeout(publish, 400);
  });

  restoreMine();
  renderGrid();
}

(async () => {
  try {
    await startTeamsLiveShare();
  } catch (error) {
    console.warn('Live Share nicht aktiv; lokaler Fallback wird verwendet.', error);
    startLocal(error?.message || 'Live Share nicht verfügbar');
  }
})();
