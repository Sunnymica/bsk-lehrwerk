/* Deutsch fürs Büro · gemeinsame Plattformlogik */
(function () {
  'use strict';

  const KEYS = {
    profile: 'bsk-platform-profile',
    notes: 'bsk-platform-notes',
    homework: 'bsk-homework-done',
    activity: 'bsk-platform-activity',
    completed: 'bsk-erledigt'
  };
  const AREA_META = {
    kurs: ['Unser Kurs', '●'],
    buero: ['Büro und Verwaltung', '▤'],
    grammatik: ['Grammatik', 'A'],
    pauken: ['Pauken', '↻'],
    training: ['Training', '▶'],
    referenz: ['Nachschlagen', '?']
  };
  const NON_LEARNING_AREAS = new Set(['kurs']);
  let contentData = null;
  let contentPromise = null;
  let courseData = null;
  let coursePromise = null;

  window.BSKPlatform = {
    getContent: () => loadContent(),
    getCourse: () => loadCourse()
  };

  const root = () => document.body.dataset.root || '';
  const read = (key, fallback) => {
    try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; }
    catch (_) { return fallback; }
  };
  const write = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) {}
  };
  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const uid = prefix => prefix + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const formatDate = iso => {
    if (!iso) return '';
    const date = new Date(iso + (iso.length === 10 ? 'T12:00:00' : ''));
    return Number.isNaN(date.getTime()) ? iso : date.toLocaleDateString('de-DE', { day:'2-digit', month:'2-digit', year:'numeric' });
  };

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('bsk:progress-changed', () => {
    if (document.body.dataset.page === 'home') renderHomeProgress();
    updateSidebarProgress();
  });

  async function init() {
    recordActivity();
    if (document.body.dataset.page === 'home') {
      fillSidebar(document.querySelector('#sidebar'), 'home');
      bindMobileNavigation();
      bindProfile();
      bindNotes();
      bindReset();
      bindSectionNavigation();
      await Promise.all([loadContent(), loadCourse()]);
      renderHome();
    } else {
      buildShell();
      bindMobileNavigation();
      bindProfile();
      addSharedDialogs();
      if (document.body.dataset.page === 'module') setupModuleTools();
      await Promise.all([loadContent(), loadCourse()]);
      updateSidebarProgress();
    }
    setTopbar();
  }

  async function loadContent() {
    if (contentData) return contentData;
    if (contentPromise) return contentPromise;

    contentPromise = (async () => {
      try {
        const response = await fetch(root() + 'inhalt.json', { cache: 'no-store' });
        if (!response.ok) throw new Error('Inhaltsdatei nicht erreichbar');
        const data = await response.json();
        await resolveAvailability(data);
        contentData = data;
        return contentData;
      } catch (error) {
        console.error(error);
        return null;
      } finally {
        contentPromise = null;
      }
    })();

    return contentPromise;
  }

  async function loadCourse() {
    if (courseData) return courseData;
    if (coursePromise) return coursePromise;
    coursePromise = fetch(root() + 'data/kurs.json', { cache: 'no-store' })
      .then(response => {
        if (!response.ok) throw new Error('Kursdatei nicht erreichbar');
        return response.json();
      })
      .then(data => { courseData = data; return courseData; })
      .catch(error => { console.error(error); return null; })
      .finally(() => { coursePromise = null; });
    return coursePromise;
  }

  async function resolveAvailability(data) {
    const checks = [];
    data.bereiche.forEach(area => area.gruppen.forEach(group => group.module.forEach(module => {
      /* teilweise = zugänglich, wächst aber noch. Ein Modul, das nur
         intern auf in-arbeit steht, wäre sonst nicht einmal für die
         Freigabe zu öffnen. */
      module._teilweise = module.status === 'teilweise';
      if (module.status !== 'fertig' && module.status !== 'teilweise') {
        module._available = false;
        return;
      }
      if (area.id === 'referenz' && module.pfad === 'hausaufgaben.html') {
        module._available = true;
        return;
      }
      const url = root() + area.id + '/' + module.pfad;
      checks.push(fetch(url, { method: 'HEAD', cache: 'no-store' })
        .then(response => { module._available = response.status !== 404; })
        .catch(() => { module._available = true; }));
    })));
    await Promise.all(checks);
  }

  function sidebarMarkup(active) {
    const base = root();
    const completed = read(KEYS.completed, []).length;
    return `
      <a class="brand" href="${base}index.html"><span class="brand-mark">DB</span><span><strong>Deutsch fürs Büro</strong><small>Job-BSK B2/C1</small></span></a>
      <nav class="primary-nav">
        <a class="nav-link ${active === 'home' ? 'active' : ''}" href="${base}index.html#heute">Heute</a>
        <a class="nav-link ${document.body.dataset.bereich === 'kurs' ? 'active' : ''}" href="${base}kurs.html">Unser Kurs</a>
        <a class="nav-link ${active === 'areas' && document.body.dataset.bereich !== 'kurs' ? 'active' : ''}" href="${base}index.html#bereiche">Lernbereiche</a>
        <a class="nav-link" href="${base}index.html#hausaufgaben">Hausaufgaben <b class="homework-badge">0</b></a>
        <a class="nav-link" href="${base}index.html#notizbuch">Notizbuch</a>
        <a class="nav-link" href="${base}index.html#fortschritt">Fortschritt</a>
      </nav>
      <div class="sidebar-areas">
        <span class="nav-caption">Direkt zu</span>
        ${Object.entries(AREA_META).filter(([id]) => !NON_LEARNING_AREAS.has(id)).map(([id, meta]) => `<a class="area-nav ${document.body.dataset.bereich === id ? 'active' : ''}" href="${base}${id}.html"><span>${meta[1]}</span>${meta[0]}</a>`).join('')}
      </div>
      <div class="sidebar-foot">
        <strong id="sidebar-progress">${completed} Module</strong>
        <span>als erledigt markiert</span>
        <small>Der Lernstand bleibt lokal in Ihrem Browser.</small>
      </div>`;
  }

  function fillSidebar(target, active) {
    if (!target) return;
    target.innerHTML = sidebarMarkup(active);
    updateHomeworkBadges();
  }

  function buildShell() {
    const body = document.body;
    const page = body.dataset.page;
    const mainTarget = body.querySelector('main');
    if (mainTarget && !mainTarget.id) mainTarget.id = 'main';
    const skip = body.querySelector('.skip-link') || Object.assign(document.createElement('a'), { className:'skip-link', textContent:'Zum Inhalt springen' });
    skip.href = mainTarget ? '#' + mainTarget.id : '#main';
    if (!skip.parentNode) body.prepend(skip);

    const visual = [...body.children].filter(el => !['SCRIPT', 'DIALOG'].includes(el.tagName) && el !== skip && !el.classList.contains('toast'));
    const shell = document.createElement('div'); shell.className = 'app-shell platform-wrapped';
    const sidebar = document.createElement('aside'); sidebar.className = 'sidebar'; sidebar.id = 'sidebar';
    fillSidebar(sidebar, 'areas');
    const frame = document.createElement('div'); frame.className = 'main-frame';
    const topbar = document.createElement('header'); topbar.className = 'topbar';
    const area = AREA_META[body.dataset.bereich] || ['Deutsch fürs Büro', 'DB'];
    topbar.innerHTML = `<button class="icon-btn mobile-only" id="menu-button" aria-label="Navigation öffnen">☰</button><div><span class="eyebrow" id="date-label">${page === 'module' ? 'Lernmodul' : 'Lernbereich'}</span><strong id="welcome">${esc(area[0])}</strong></div><button class="avatar" id="profile-button" aria-label="Profil öffnen">B2</button>`;
    frame.appendChild(topbar);
    const content = document.createElement('div'); content.className = 'page-content';
    visual.forEach(el => content.appendChild(el));
    frame.appendChild(content);
    shell.append(sidebar, frame);
    body.insertBefore(shell, body.querySelector('script'));
  }

  function bindMobileNavigation() {
    const button = document.querySelector('#menu-button');
    const sidebar = document.querySelector('#sidebar');
    if (!button || !sidebar) return;
    let backdrop = document.querySelector('#backdrop');
    if (!backdrop) { backdrop = document.createElement('div'); backdrop.id = 'backdrop'; backdrop.className = 'backdrop'; document.body.appendChild(backdrop); }
    const close = () => { sidebar.classList.remove('open'); backdrop.classList.remove('show'); };
    button.addEventListener('click', () => { sidebar.classList.toggle('open'); backdrop.classList.toggle('show'); });
    backdrop.addEventListener('click', close);
    sidebar.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  }

  function setTopbar() {
    const label = document.querySelector('#date-label');
    if (label && document.body.dataset.page === 'home') label.textContent = new Date().toLocaleDateString('de-DE', { weekday:'long', day:'2-digit', month:'long' });
    const profile = read(KEYS.profile, { name:'', goal:'1' });
    const welcome = document.querySelector('#welcome');
    const avatar = document.querySelector('#profile-button');
    if (document.body.dataset.page === 'home' && welcome) welcome.textContent = profile.name ? `Willkommen, ${profile.name}.` : 'Willkommen im Kurs.';
    if (avatar) avatar.textContent = profile.name ? profile.name.trim().charAt(0).toUpperCase() : 'B2';
  }

  function addSharedDialogs() {
    if (!document.querySelector('#profile-dialog')) {
      document.body.insertAdjacentHTML('beforeend', `<dialog id="profile-dialog"><form method="dialog" id="profile-form" class="dialog-card"><div class="dialog-head"><div><span class="kicker">Einstellungen</span><h2>Ihr Lernprofil</h2></div><button value="cancel" class="icon-btn" aria-label="Schließen">×</button></div><label>Name<input id="profile-name" maxlength="40" placeholder="Vorname"></label><label>Persönliches Lernziel<select id="profile-goal"><option value="1">Ein Modul pro Woche</option><option value="2">Zwei Module pro Woche</option><option value="3">Drei Module pro Woche</option></select></label><div class="button-row right"><button value="cancel" class="button secondary">Abbrechen</button><button type="submit" class="button primary">Speichern</button></div></form></dialog>`);
    }
    if (!document.querySelector('#note-dialog')) {
      document.body.insertAdjacentHTML('beforeend', `<dialog id="note-dialog"><form method="dialog" id="note-form" class="dialog-card"><div class="dialog-head"><div><span class="kicker">Notizbuch</span><h2 id="note-heading">Neue Notiz</h2></div><button value="cancel" class="icon-btn" aria-label="Schließen">×</button></div><input type="hidden" id="note-id"><label>Titel<input id="note-title" maxlength="80"></label><label>Notiz<textarea id="note-text" rows="7" maxlength="1600" required></textarea></label><label class="check"><input id="note-pinned" type="checkbox"> Anheften</label><input type="hidden" id="note-context"><div class="button-row right"><button value="cancel" class="button secondary">Abbrechen</button><button type="submit" class="button primary">Speichern</button></div></form></dialog>`);
    }
    if (!document.querySelector('#toast')) document.body.insertAdjacentHTML('beforeend', '<div class="toast" id="toast" aria-live="polite"></div>');
    bindProfile();
    bindNotes();
  }

  function bindProfile() {
    const button = document.querySelector('#profile-button');
    const dialog = document.querySelector('#profile-dialog');
    const form = document.querySelector('#profile-form');
    if (!button || !dialog || !form || button.dataset.bound) return;
    button.dataset.bound = '1';
    button.addEventListener('click', () => {
      const profile = read(KEYS.profile, { name:'', goal:'1' });
      form.querySelector('#profile-name').value = profile.name || '';
      form.querySelector('#profile-goal').value = profile.goal || '1';
      dialog.showModal();
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      write(KEYS.profile, { name:form.querySelector('#profile-name').value.trim(), goal:form.querySelector('#profile-goal').value });
      dialog.close(); setTopbar(); toast('Lernprofil gespeichert.');
    });
  }

  function renderHome() {
    if (!contentData) {
      document.querySelector('#area-grid').innerHTML = '<p class="empty">Die Inhaltsübersicht konnte nicht geladen werden. Starten Sie die Seite über einen Webserver oder GitHub Pages.</p>';
      return;
    }
    renderNextModule();
    renderCourseArea();
    renderAreas();
    renderHomework();
    renderNotes();
    renderHomeProgress();
    renderSession();
    updateSidebarProgress();
  }

  function availableModules() {
    if (!contentData) return [];
    return contentData.bereiche.filter(area => !NON_LEARNING_AREAS.has(area.id)).flatMap(area => area.gruppen.flatMap(group => group.module.map(module => ({ area, group, module })))).filter(item => item.module._available === true);
  }

  function completedSet() { return new Set(read(KEYS.completed, [])); }

  function renderNextModule() {
    const modules = availableModules();
    const done = completedSet();
    const next = modules.find(item => !done.has(item.area.id + '/' + item.module.pfad)) || modules[0];
    if (!next) {
      document.querySelector('#next-title').textContent = 'Die Plattform ist vorbereitet';
      document.querySelector('#next-description').textContent = 'Neue Module erscheinen hier, sobald die zugehörige Datei veröffentlicht wurde.';
      document.querySelector('#continue-button').href = '#bereiche';
      return;
    }
    document.querySelector('#next-title').textContent = next.module.titel;
    document.querySelector('#next-description').textContent = next.module.beschreibung;
    document.querySelector('#next-meta').innerHTML = `<span>${esc(next.area.label)}</span><span>${esc(next.module.niveau)}</span><span>${esc(next.module.dauer)}</span>`;
    document.querySelector('#continue-button').href = next.area.id + '/' + next.module.pfad;
    document.querySelector('#continue-button').textContent = done.has(next.area.id + '/' + next.module.pfad) ? 'Noch einmal öffnen' : 'Weiterlernen';
  }

  function renderCourseArea() {
    const box = document.querySelector('#course-area');
    if (!box || !contentData) return;
    const area = contentData.bereiche.find(item => item.id === 'kurs');
    if (!area) { box.closest('.course-section')?.remove(); return; }
    const modules = area.gruppen.flatMap(group => group.module);
    const available = modules.filter(module => module._available === true);
    const labels = modules.slice(0, 5).map(module => `<span class="${module._available === true ? '' : 'offen'}">${esc(module.titel)}</span>`).join('');
    box.innerHTML = `<article class="course-card"><div><span class="kicker">Kursauftakt und Organisation</span><h3>${esc(area.label)}</h3><p>${esc(area.kurz)}</p><div class="course-module-list">${labels}</div></div><div class="course-card-actions"><a class="button primary" href="kurs.html">Unser Kurs öffnen</a>${available.length ? `<a class="button secondary" href="kurs/${esc(available[0].pfad)}">Direkt zum Auftakt</a>` : ''}</div></article>`;
  }

  function renderAreas() {
    const grid = document.querySelector('#area-grid');
    const done = completedSet();
    grid.innerHTML = contentData.bereiche.filter(area => !NON_LEARNING_AREAS.has(area.id)).map(area => {
      const all = area.gruppen.flatMap(group => group.module);
      const available = all.filter(module => module._available === true);
      const complete = available.filter(module => done.has(area.id + '/' + module.pfad)).length;
      const meta = AREA_META[area.id] || [area.label, '•'];
      return `<a class="area-card area-${area.id}" href="${area.id}.html"><div class="area-card-top"><span class="area-icon">${meta[1]}</span><span class="pill">${area.gruppen.length} Themen</span></div><h3>${esc(area.label)}</h3><p>${esc(area.kurz)}</p><div class="area-card-foot"><span>${all.length} Module im Plan</span><strong>${available.length ? complete + ' von ' + available.length + ' bearbeitet' : 'im Aufbau'}</strong></div></a>`;
    }).join('');
  }

  function homeworkItems() { return Array.isArray(window.BSK_HOMEWORK) ? window.BSK_HOMEWORK : []; }
  function homeworkDone() { return read(KEYS.homework, {}); }
  function openHomeworkCount() {
    const done = homeworkDone();
    return homeworkItems().reduce((sum, item) => sum + (item.aufgaben || []).filter((_, i) => !done[item.id + ':' + i]).length, 0);
  }

  function renderHomework() {
    const area = document.querySelector('#homework-area');
    if (!area) return;
    const items = homeworkItems();
    const done = homeworkDone();
    if (!items.length) {
      area.innerHTML = '<div class="homework-empty"><span>✓</span><div><h3>Aktuell ist keine Hausaufgabe veröffentlicht.</h3><p>Neue Aufgaben erscheinen dauerhaft an dieser Stelle. Erledigte Schritte können direkt hier abgehakt werden.</p></div></div>';
    } else {
      area.innerHTML = `<div class="homework-list">${items.map(item => {
        const tasks = item.aufgaben || [];
        return `<article class="homework-card"><div class="homework-head"><div><span class="kicker">${item.faellig ? 'Fällig am ' + formatDate(item.faellig) : 'Aktuelle Hausaufgabe'}</span><h3>${esc(item.titel)}</h3></div><span class="pill">${tasks.filter((_, i) => done[item.id + ':' + i]).length}/${tasks.length}</span></div><p>${esc(item.beschreibung || '')}</p><div class="homework-tasks">${tasks.map((task, i) => `<label><input type="checkbox" data-homework="${esc(item.id + ':' + i)}" ${done[item.id + ':' + i] ? 'checked' : ''}> <span>${esc(task)}</span></label>`).join('')}</div>${(item.links || []).length ? `<div class="button-row">${item.links.map(link => `<a class="button secondary small" href="${esc(link.href)}">${esc(link.label)}</a>`).join('')}</div>` : ''}</article>`;
      }).join('')}</div>`;
      area.querySelectorAll('[data-homework]').forEach(input => input.addEventListener('change', () => {
        const state = homeworkDone(); state[input.dataset.homework] = input.checked; write(KEYS.homework, state); renderHomework(); updateHomeworkBadges();
      }));
    }
    const count = openHomeworkCount();
    document.querySelector('#homework-summary').textContent = count ? `${count} offene ${count === 1 ? 'Aufgabe' : 'Aufgaben'}` : 'Keine offenen Aufgaben';
    document.querySelector('#homework-quick').textContent = count;
    updateHomeworkBadges();
  }

  function updateHomeworkBadges() {
    const count = openHomeworkCount();
    document.querySelectorAll('.homework-badge').forEach(el => { el.textContent = count; el.hidden = count === 0; });
  }

  function bindNotes() {
    const dialog = document.querySelector('#note-dialog');
    const form = document.querySelector('#note-form');
    if (!dialog || !form || form.dataset.bound) return;
    form.dataset.bound = '1';
    document.querySelector('#new-note')?.addEventListener('click', () => openNote());
    document.querySelector('#notes-search')?.addEventListener('input', renderNotes);
    document.querySelector('#notes-filter')?.addEventListener('change', renderNotes);
    form.addEventListener('submit', event => {
      event.preventDefault();
      const notes = read(KEYS.notes, []);
      const id = form.querySelector('#note-id').value;
      const note = {
        id: id || uid('note'),
        title: form.querySelector('#note-title').value.trim() || 'Notiz',
        text: form.querySelector('#note-text').value.trim(),
        pinned: form.querySelector('#note-pinned').checked,
        context: form.querySelector('#note-context').value || '',
        updated: new Date().toISOString()
      };
      const index = notes.findIndex(item => item.id === id);
      if (index >= 0) notes[index] = note; else notes.unshift(note);
      write(KEYS.notes, notes); dialog.close(); renderNotes(); toast('Notiz gespeichert.');
    });
  }

  function openNote(note, context) {
    const dialog = document.querySelector('#note-dialog');
    const form = document.querySelector('#note-form');
    if (!dialog || !form) return;
    form.querySelector('#note-heading').textContent = note ? 'Notiz bearbeiten' : 'Neue Notiz';
    form.querySelector('#note-id').value = note?.id || '';
    form.querySelector('#note-title').value = note?.title || (context ? 'Notiz zu ' + context : '');
    form.querySelector('#note-text').value = note?.text || '';
    form.querySelector('#note-pinned').checked = Boolean(note?.pinned);
    form.querySelector('#note-context').value = note?.context || context || '';
    dialog.showModal();
  }

  function renderNotes() {
    const grid = document.querySelector('#notes-grid');
    if (!grid) return;
    const query = (document.querySelector('#notes-search')?.value || '').trim().toLowerCase();
    const filter = document.querySelector('#notes-filter')?.value || 'all';
    let notes = read(KEYS.notes, []);
    notes = notes.filter(note => (!query || (note.title + ' ' + note.text + ' ' + note.context).toLowerCase().includes(query)) && (filter === 'all' || (filter === 'pinned' && note.pinned) || (filter === 'module' && note.context)));
    document.querySelector('#notes-quick') && (document.querySelector('#notes-quick').textContent = read(KEYS.notes, []).length);
    if (!notes.length) { grid.innerHTML = '<div class="empty">Noch keine passende Notiz. Nutzen Sie das Notizbuch für eigene Sätze, Fragen und Formulierungen.</div>'; return; }
    grid.innerHTML = notes.map(note => `<article class="note-card ${note.pinned ? 'pinned' : ''}"><span class="kicker">${note.context ? esc(note.context) : 'Persönliche Notiz'}</span><h3>${esc(note.title)}</h3><p>${esc(note.text)}</p><div class="note-card-foot"><small>${new Date(note.updated).toLocaleDateString('de-DE')}</small><div class="note-actions"><button class="text-button" data-edit-note="${esc(note.id)}">Bearbeiten</button><button class="text-button danger" data-delete-note="${esc(note.id)}">Löschen</button></div></div></article>`).join('');
    grid.querySelectorAll('[data-edit-note]').forEach(button => button.addEventListener('click', () => openNote(read(KEYS.notes, []).find(note => note.id === button.dataset.editNote))));
    grid.querySelectorAll('[data-delete-note]').forEach(button => button.addEventListener('click', () => {
      if (!confirm('Diese Notiz wirklich löschen?')) return;
      write(KEYS.notes, read(KEYS.notes, []).filter(note => note.id !== button.dataset.deleteNote)); renderNotes();
    }));
  }

  function renderHomeProgress() {
    if (!contentData) return;
    const done = completedSet();
    const modules = availableModules();
    const completed = modules.filter(item => done.has(item.area.id + '/' + item.module.pfad)).length;
    const percent = modules.length ? Math.round(completed / modules.length * 100) : 0;
    const ring = document.querySelector('#progress-ring');
    if (ring) ring.style.setProperty('--p', percent);
    document.querySelector('#progress-number').textContent = percent + '%';
    const box = document.querySelector('#area-progress');
    box.innerHTML = contentData.bereiche.filter(area => !NON_LEARNING_AREAS.has(area.id)).map(area => {
      const available = area.gruppen.flatMap(group => group.module).filter(module => module._available === true);
      const count = available.filter(module => done.has(area.id + '/' + module.pfad)).length;
      const value = available.length ? Math.round(count / available.length * 100) : 0;
      return `<div class="skill"><span>${esc(area.label)}</span><div class="skill-bar"><span style="width:${value}%"></span></div><strong>${available.length ? count + '/' + available.length : '–'}</strong></div>`;
    }).join('');
    renderActivity();
    renderNextModule();
    renderAreas();
  }

  function recordActivity() {
    const activity = read(KEYS.activity, []);
    const now = new Date();
    const path = location.pathname.split('/').filter(Boolean).slice(-2).join('/') || 'index.html';
    const last = activity[0];
    if (!last || last.path !== path || now - new Date(last.time) > 30 * 60 * 1000) activity.unshift({ time:now.toISOString(), path, title:document.title });
    write(KEYS.activity, activity.slice(0, 30));
  }

  function renderActivity() {
    const box = document.querySelector('#activity-list');
    if (!box) return;
    const activity = read(KEYS.activity, []).slice(0, 5);
    box.innerHTML = activity.length ? activity.map(item => `<div class="activity-item"><span>${new Date(item.time).toLocaleDateString('de-DE', {day:'2-digit', month:'2-digit'})}</span><div><strong>${esc(item.title.replace(' – Berufssprachkurs',''))}</strong><small>${new Date(item.time).toLocaleTimeString('de-DE', {hour:'2-digit', minute:'2-digit'})} Uhr</small></div></div>`).join('') : '<p class="empty">Noch keine Nutzung gespeichert.</p>';
  }

  function renderSession() {
    const target = document.querySelector('#next-session');
    const config = courseData && courseData.kurs;
    if (!target || !config || !config.von || !Array.isArray(config.tage)) return;
    const now = new Date();
    const begin = config.beginn ? new Date(config.beginn) : now;
    const end = config.ende ? new Date(config.ende) : null;
    const [hours, minutes] = config.von.split(':').map(Number);

    function isoDay(date) {
      return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    }
    function isFree(date) {
      const iso = isoDay(date);
      return (courseData.freie_tage || []).some(item => item.datum === iso || (item.von && item.bis && iso >= item.von && iso <= item.bis));
    }

    let next = null;
    for (let i = 0; i < 180; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() + i);
      date.setHours(hours, minutes, 0, 0);
      if (config.tage.includes(date.getDay()) && date > now && date >= begin && (!end || date <= end) && !isFree(date)) { next = date; break; }
    }
    target.textContent = next
      ? next.toLocaleDateString('de-DE', {weekday:'long', day:'2-digit', month:'2-digit'}) + ', ' + config.von + '–' + config.bis + ' Uhr'
      : 'Kein Termin eingetragen';
  }

  function setupModuleTools() {
    const path = location.pathname.split('/').filter(Boolean).slice(-2).join('/');
    const title = document.querySelector('.hero h1')?.textContent.trim() || document.title.split('–')[0].trim();
    const tools = document.createElement('aside'); tools.className = 'module-tools';
    const courseModule = document.body.dataset.bereich === 'kurs';
    tools.innerHTML = `<button data-tool="note">Notiz</button>${courseModule ? '' : '<button data-tool="done">Erledigt</button>'}<button data-tool="focus">Fokus</button>`;
    document.body.appendChild(tools);
    tools.querySelector('[data-tool="note"]').addEventListener('click', () => openNote(null, title));
    const completeButton = tools.querySelector('[data-tool="done"]');
    if (completeButton) {
      const sync = () => completeButton.classList.toggle('active', completedSet().has(path));
      sync();
      completeButton.addEventListener('click', () => {
        const list = read(KEYS.completed, []); const index = list.indexOf(path);
        if (index >= 0) list.splice(index, 1); else list.push(path);
        write(KEYS.completed, list); sync(); updateSidebarProgress(); toast(index >= 0 ? 'Markierung entfernt.' : 'Modul als erledigt markiert.');
      });
    }
    tools.querySelector('[data-tool="focus"]').addEventListener('click', event => {
      document.body.classList.toggle('focus-mode'); event.currentTarget.classList.toggle('active', document.body.classList.contains('focus-mode'));
    });
  }

  function updateSidebarProgress() {
    const done = completedSet();
    const count = contentData ? availableModules().filter(item => done.has(item.area.id + '/' + item.module.pfad)).length : done.size;
    document.querySelectorAll('#sidebar-progress').forEach(el => el.textContent = `${count} ${count === 1 ? 'Modul' : 'Module'}`);
  }

  function bindSectionNavigation() {
    const links = [...document.querySelectorAll('.primary-nav .nav-link')];
    const sections = [...document.querySelectorAll('.platform-main > section[id]')];
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach(link => link.classList.toggle('active', link.hash === '#' + visible.target.id));
    }, { rootMargin:'-30% 0px -60% 0px', threshold:[0,.2,.5] });
    sections.forEach(section => observer.observe(section));
  }

  function bindReset() {
    const button = document.querySelector('#reset-button');
    if (!button) return;
    button.addEventListener('click', () => {
      if (!confirm('Alle lokal gespeicherten Fortschritte, Hausaufgaben und Notizen löschen?')) return;
      Object.values(KEYS).forEach(key => localStorage.removeItem(key));
      localStorage.removeItem('bsk-erledigt-offen'); localStorage.removeItem('bsk-module');
      location.reload();
    });
  }

  function toast(message) {
    const box = document.querySelector('#toast'); if (!box) return;
    box.textContent = message; box.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => box.classList.remove('show'), 2600);
  }
})();
