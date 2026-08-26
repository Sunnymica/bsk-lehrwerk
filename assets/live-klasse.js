/* Deutsch fürs Büro · Live-Klasse Prototyp
   Phase 1: gefahrloser Transport nur innerhalb desselben Browserprofils.
   Später austauschbar gegen einen Remote-Adapter (z. B. Supabase Realtime). */
(function () {
  'use strict';

  const PREFIX = 'bsk-live-class-v1:';

  function kanal(room) {
    const name = PREFIX + room;
    const bc = 'BroadcastChannel' in window ? new BroadcastChannel(name) : null;
    return {
      post(payload) {
        try { localStorage.setItem(name + ':event', JSON.stringify({ ...payload, _ts: Date.now(), _rnd: Math.random() })); } catch (_) {}
        if (bc) bc.postMessage(payload);
      },
      listen(fn) {
        if (bc) bc.addEventListener('message', e => fn(e.data));
        window.addEventListener('storage', e => {
          if (e.key !== name + ':event' || !e.newValue) return;
          try { fn(JSON.parse(e.newValue)); } catch (_) {}
        });
      },
      close() { if (bc) bc.close(); }
    };
  }

  function roomKey(room) { return PREFIX + room + ':state'; }

  function readRoom(room) {
    try { return JSON.parse(localStorage.getItem(roomKey(room))) || {}; } catch (_) { return {}; }
  }

  function writeRoom(room, state) {
    try { localStorage.setItem(roomKey(room), JSON.stringify(state)); } catch (_) {}
  }

  function clean(value) { return String(value || '').trim(); }
  function participantId(name) {
    return clean(name).toLocaleLowerCase('de-DE').replace(/[^a-z0-9äöüß_-]+/g, '-').replace(/^-+|-+$/g, '') || 'anon';
  }
  function timeText(ts) {
    if (!ts) return '';
    return new Date(ts).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  window.BSKLiveTeilnehmer = {
    start(config) {
      const roomInput = document.getElementById(config.roomInput);
      const nameInput = document.getElementById(config.nameInput);
      const answer = document.getElementById(config.answerInput);
      const status = document.getElementById(config.status);
      const saved = document.getElementById(config.saved);
      if (!roomInput || !nameInput || !answer) return;

      let transport = null;
      let timer = null;
      let activeRoom = '';

      function connect() {
        const room = clean(roomInput.value);
        if (!room) { status.textContent = 'Bitte einen Raumcode eintragen.'; return; }
        if (transport) transport.close();
        activeRoom = room;
        transport = kanal(room);
        status.textContent = 'Verbunden mit Raum „' + room + '“ – lokaler Testmodus.';
        restore();
      }

      function restore() {
        const name = clean(nameInput.value);
        if (!activeRoom || !name) return;
        const state = readRoom(activeRoom);
        const row = state[config.taskId] && state[config.taskId][participantId(name)];
        if (row) {
          answer.value = row.answer || '';
          saved.textContent = row.updatedAt ? 'Zuletzt gespeichert ' + timeText(row.updatedAt) : '';
        }
      }

      function publish() {
        const room = clean(roomInput.value);
        const name = clean(nameInput.value);
        if (!room || !name) {
          status.textContent = 'Bitte zuerst Name und Raumcode eintragen.';
          return;
        }
        if (room !== activeRoom) connect();
        const state = readRoom(room);
        if (!state[config.taskId]) state[config.taskId] = {};
        const row = {
          participantId: participantId(name),
          name,
          answer: answer.value,
          updatedAt: Date.now()
        };
        state[config.taskId][row.participantId] = row;
        writeRoom(room, state);
        if (transport) transport.post({ type: 'answer', room, taskId: config.taskId, row });
        saved.textContent = 'Gespeichert ' + timeText(row.updatedAt);
      }

      roomInput.addEventListener('change', connect);
      nameInput.addEventListener('change', restore);
      answer.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(publish, 180);
      });
      connect();
    }
  };

  window.BSKLiveLehrkraft = {
    start(config) {
      const roomInput = document.getElementById(config.roomInput);
      const grid = document.getElementById(config.grid);
      const status = document.getElementById(config.status);
      const clear = document.getElementById(config.clearButton);
      if (!roomInput || !grid) return;

      let transport = null;
      let activeRoom = '';

      function render() {
        const room = clean(roomInput.value);
        const state = readRoom(room);
        const rows = Object.values((state[config.taskId] || {})).sort((a, b) => a.name.localeCompare(b.name, 'de'));
        grid.innerHTML = '';
        if (!rows.length) {
          const empty = document.createElement('div');
          empty.className = 'live-empty';
          empty.textContent = 'Noch keine Texte eingegangen.';
          grid.appendChild(empty);
          status.textContent = 'Raum „' + room + '“: 0 Antworten.';
          return;
        }
        rows.forEach(row => {
          const card = document.createElement('article');
          card.className = 'live-card';
          const title = document.createElement('h3');
          title.textContent = row.name;
          const text = document.createElement('div');
          text.className = 'live-answer';
          text.textContent = row.answer || '—';
          const meta = document.createElement('div');
          meta.className = 'live-meta';
          meta.textContent = 'Aktualisiert ' + timeText(row.updatedAt);
          card.append(title, text, meta);
          grid.appendChild(card);
        });
        status.textContent = 'Raum „' + room + '“: ' + rows.length + (rows.length === 1 ? ' Antwort.' : ' Antworten.');
      }

      function connect() {
        const room = clean(roomInput.value);
        if (!room) return;
        if (transport) transport.close();
        activeRoom = room;
        transport = kanal(room);
        transport.listen(payload => {
          if (payload && payload.room === activeRoom && payload.taskId === config.taskId) render();
        });
        render();
      }

      roomInput.addEventListener('change', connect);
      clear.addEventListener('click', () => {
        const room = clean(roomInput.value);
        if (!room) return;
        if (!confirm('Alle lokalen Testdaten für Raum „' + room + '“ löschen?')) return;
        try { localStorage.removeItem(roomKey(room)); } catch (_) {}
        if (transport) transport.post({ type: 'clear', room, taskId: config.taskId });
        render();
      });
      connect();
    }
  };
})();
