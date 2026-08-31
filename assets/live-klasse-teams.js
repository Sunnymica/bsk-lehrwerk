/* Deutsch fürs Büro · Live-Klasse Teams-Adapter
   In Teams: Microsoft Live Share + SharedMap.
   Außerhalb von Teams: bestehender lokaler BroadcastChannel/localStorage-Fallback. */

const CONFIG = {
  roomInput: 'live-room',
  nameInput: 'live-name',
  answerInput: 'live-answer',
  status: 'live-status',
  saved: 'live-saved',
  taskId: 'arbeitsplatz-anrede'
};

function clean(value) {
  return String(value || '').trim();
}

function participantId(name) {
  return clean(name)
    .toLocaleLowerCase('de-DE')
    .replace(/[^a-z0-9äöüß_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'anon';
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
  if (!window.microsoftTeams?.app) throw new Error('Teams SDK nicht verfügbar');

  await window.microsoftTeams.app.initialize();

  /*
   * Live Share ist ein npm-Paket. Da dieser Prototyp absichtlich ohne
   * Build-Schritt direkt von GitHub Pages läuft, laden wir browserfertig
   * gebündelte ESM-Varianten. Das verhindert CJS/ESM-Probleme in
   * Fluid-Framework-Abhängigkeiten (z. B. debug).
   */
  const [{ LiveShareClient }, { SharedMap }] = await Promise.all([
    import('https://esm.sh/@microsoft/live-share@1.4.2?bundle'),
    import('https://esm.sh/fluid-framework@1.3.6?bundle')
  ]);

  const LiveShareHost = window.microsoftTeams.LiveShareHost;
  if (!LiveShareHost?.create) throw new Error('LiveShareHost ist in Teams nicht verfügbar');

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
  if (!roomInput || !nameInput || !answer || !status || !saved) return;

  roomInput.readOnly = true;
  roomInput.title = 'In Teams wird der gemeinsame Raum automatisch durch den aktuellen Kanal festgelegt.';
  status.textContent = 'Live Share aktiv – verbunden mit diesem Teams-Kanal.';

  let timer = null;
  let applyingRemote = false;

  function keyForCurrentUser() {
    const name = clean(nameInput.value);
    return name ? CONFIG.taskId + ':' + participantId(name) : '';
  }

  function restore() {
    const key = keyForCurrentUser();
    if (!key) return;
    const row = answers.get(key);
    if (!row) return;
    applyingRemote = true;
    answer.value = row.answer || '';
    applyingRemote = false;
    saved.textContent = row.updatedAt ? 'Zuletzt synchronisiert ' + timeText(row.updatedAt) : '';
  }

  function publish() {
    const name = clean(nameInput.value);
    if (!name) {
      status.textContent = 'Live Share aktiv – bitte zuerst Ihren Namen eintragen.';
      return;
    }
    const row = {
      participantId: participantId(name),
      name,
      answer: answer.value,
      updatedAt: Date.now()
    };
    answers.set(CONFIG.taskId + ':' + row.participantId, row);
    saved.textContent = 'Synchronisiert ' + timeText(row.updatedAt);
    status.textContent = 'Live Share aktiv – verbunden mit diesem Teams-Kanal.';
  }

  answers.on('valueChanged', (changed, local) => {
    if (local) return;
    const key = keyForCurrentUser();
    if (!key || changed.key !== key) return;
    const row = answers.get(key);
    if (!row) return;
    applyingRemote = true;
    answer.value = row.answer || '';
    applyingRemote = false;
    saved.textContent = row.updatedAt ? 'Live empfangen ' + timeText(row.updatedAt) : 'Live empfangen';
  });

  nameInput.addEventListener('change', restore);
  answer.addEventListener('input', () => {
    if (applyingRemote) return;
    clearTimeout(timer);
    timer = setTimeout(publish, 180);
  });

  restore();
}

(async () => {
  try {
    await startTeamsLiveShare();
  } catch (error) {
    console.warn('Live Share nicht aktiv; lokaler Fallback wird verwendet.', error);
    startLocal(error?.message || 'Live Share nicht verfügbar');
  }
})();
