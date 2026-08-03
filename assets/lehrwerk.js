/* =========================================================
   BSK-Lehrwerk – gemeinsames Skript
   Aufschlagseite:  Lehrwerk.aufschlag()
   Bereichsseite:   Lehrwerk.bereich('grammatik')
   ========================================================= */

window.Lehrwerk = (function () {

  /* ====== EINSTELLUNGEN – nur hier ändern ====== */
  const KURS = {
    beginn: '2026-08-25T17:30:00',   // erster Kurstag
    ende:   null,                    // z. B. '2026-12-22T19:45:00' – dann kommt der Fortschrittsbalken
    tage:   [1, 2],                  // 1 = Montag, 2 = Dienstag
    von:    '17:30',
    bis:    '19:45'
  };

  const WOERTER = [
    ['die Frist', 'der letzte Termin, bis zu dem etwas erledigt sein muss'],
    ['in Anspruch nehmen', 'etwas nutzen: Urlaub, Beratung, eine Leistung'],
    ['zeitnah', 'bald – im Büro oft höflicher Ersatz für „sofort"'],
    ['zur Kenntnis nehmen', 'etwas lesen und akzeptieren, ohne zu handeln'],
    ['der Sachverhalt', 'das, worum es geht – die Lage in einer Sache'],
    ['sich beziehen auf', 'sagen, worauf man antwortet'],
    ['die Rückmeldung', 'die Antwort, ob und wie etwas geklappt hat'],
    ['veranlassen', 'dafür sorgen, dass etwas gemacht wird'],
    ['abstimmen mit', 'sich absprechen, bevor man entscheidet'],
    ['der Vorgang', 'ein Fall in der Verwaltung, von Anfang bis Abschluss'],
    ['erforderlich', 'nötig – das Amtswort für „man braucht es"'],
    ['die Zuständigkeit', 'wer für etwas verantwortlich ist'],
    ['nachfassen', 'noch einmal nachfragen, wenn keine Antwort kam'],
    ['der Entwurf', 'die erste Fassung, die noch geändert wird'],
    ['unverzüglich', 'ohne schuldhaftes Zögern – juristisch: sehr schnell']
  ];

  const WOCHENTAG = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  const SCHLUESSEL = 'bsk-erledigt';

  /* ====== Merker ====== */

  function erledigt() {
    try { return JSON.parse(localStorage.getItem(SCHLUESSEL)) || []; } catch (e) { return []; }
  }

  function merken(liste) {
    try { localStorage.setItem(SCHLUESSEL, JSON.stringify(liste)); } catch (e) {}
  }

  function geoeffnet() {
    try { return JSON.parse(localStorage.getItem(SCHLUESSEL + '-offen')) || []; } catch (e) { return []; }
  }

  function merkenOffen(liste) {
    try { localStorage.setItem(SCHLUESSEL + '-offen', JSON.stringify(liste)); } catch (e) {}
  }

  function anzahl(n, eins, viele) {
    return n + ' ' + (n === 1 ? eins : viele);
  }

  /* ====== Countdown ====== */

  function countdown() {
    const uhr = document.getElementById('uhr');
    if (!uhr) return;

    const felder = {};
    uhr.querySelectorAll('.zahl').forEach(el => felder[el.dataset.feld] = el);
    const titel = document.getElementById('band-titel');
    const fuss  = document.getElementById('band-fussnote');

    const beginn = new Date(KURS.beginn);
    const ende   = KURS.ende ? new Date(KURS.ende) : null;
    const [std0, min0] = KURS.von.split(':').map(Number);

    function datumText(d) {
      return WOCHENTAG[d.getDay()] + ', ' +
             d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function naechsteSitzung(jetzt) {
      for (let i = 0; i < 14; i++) {
        const t = new Date(jetzt);
        t.setDate(t.getDate() + i);
        t.setHours(std0, min0, 0, 0);
        if (KURS.tage.includes(t.getDay()) && t > jetzt) return t;
      }
      return null;
    }

    function ticken() {
      const jetzt = new Date();
      let ziel;

      if (jetzt < beginn) {
        ziel = beginn;
        titel.textContent = 'Bis zum Kursbeginn';
        fuss.textContent = 'Erster Kurstag: ' + datumText(beginn) + ', ' + KURS.von + '–' + KURS.bis + ' Uhr';
      } else if (ende && jetzt > ende) {
        titel.textContent = 'Kurs abgeschlossen';
        uhr.hidden = true;
        fuss.textContent = 'Die Module bleiben abrufbar.';
        return;
      } else {
        ziel = naechsteSitzung(jetzt);
        titel.textContent = 'Bis zur nächsten Sitzung';
        fuss.textContent = ziel ? datumText(ziel) + ', ' + KURS.von + '–' + KURS.bis + ' Uhr'
                                : 'Kein Termin gefunden – Einstellungen prüfen.';
      }
      if (!ziel) return;

      let rest = Math.max(0, ziel - jetzt) / 1000;
      const tage = Math.floor(rest / 86400); rest -= tage * 86400;
      const std  = Math.floor(rest / 3600);  rest -= std * 3600;
      const min  = Math.floor(rest / 60);
      const sek  = Math.floor(rest - min * 60);

      felder.tage.textContent     = tage;
      felder.stunden.textContent  = String(std).padStart(2, '0');
      felder.minuten.textContent  = String(min).padStart(2, '0');
      felder.sekunden.textContent = String(sek).padStart(2, '0');
    }

    ticken();
    setInterval(ticken, 1000);

    if (ende) {
      const jetzt = new Date();
      if (jetzt >= beginn) {
        const anteil = Math.min(1, (jetzt - beginn) / (ende - beginn));
        const gesamt = Math.max(1, Math.round((ende - beginn) / (7 * 86400000)));
        const woche  = Math.min(gesamt, Math.floor((jetzt - beginn) / (7 * 86400000)) + 1);
        const box = document.getElementById('fortschritt');
        if (box) {
          box.hidden = false;
          document.getElementById('balken').style.width = (anteil * 100).toFixed(1) + '%';
          document.getElementById('fortschritt-text').textContent = 'Woche ' + woche + ' von ' + gesamt;
        }
      }
    }
  }

  /* ====== Wort des Tages ====== */

  function wortDesTages() {
    const box = document.getElementById('wort-des-tages');
    if (!box) return;
    const tag = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const [wort, erklaerung] = WOERTER[tag % WOERTER.length];
    box.querySelector('.wort').textContent = wort;
    box.querySelector('.erklaerung').textContent = '– ' + erklaerung;
    box.hidden = false;
  }

  /* ====== Unterrichtsansicht ======
     Setzt die Grundschrift hoch. Weil alles in rem gebaut ist,
     wachsen Schrift, Kästen und Spaltenbreite gemeinsam mit. */

  const STUFEN = [
    { wert: '100%', name: 'Normal' },
    { wert: '130%', name: 'Groß' },
    { wert: '160%', name: 'Sehr groß' }
  ];

  function ansicht() {
    let nr = 0;
    try { nr = parseInt(localStorage.getItem('bsk-ansicht')) || 0; } catch (e) {}
    if (nr < 0 || nr >= STUFEN.length) nr = 0;

    function anwenden() {
      document.documentElement.style.fontSize = STUFEN[nr].wert;
      knopf.textContent = 'Aa ' + STUFEN[nr].name;
      knopf.setAttribute('aria-label', 'Schriftgröße: ' + STUFEN[nr].name + '. Klicken zum Wechseln.');
      try { localStorage.setItem('bsk-ansicht', nr); } catch (e) {}
    }

    const knopf = document.createElement('button');
    knopf.type = 'button';
    knopf.className = 'ansicht-knopf';
    knopf.addEventListener('click', () => { nr = (nr + 1) % STUFEN.length; anwenden(); });
    document.body.appendChild(knopf);
    anwenden();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ansicht);
  } else {
    ansicht();
  }

  /* ====== Daten laden ====== */

  function laden(wurzel) {
    if (window.DATEN_INLINE) return Promise.resolve(window.DATEN_INLINE);
    return fetch(wurzel + 'inhalt.json').then(r => {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    });
  }

  function fehler(box) {
    box.hidden = false;
    box.innerHTML = location.protocol === 'file:'
      ? '<p><strong>Lokale Vorschau:</strong> Beim Doppelklick darf der Browser keine Dateien nachladen. ' +
        'Im Ordner ein Terminal öffnen, <code>python3 -m http.server</code> starten und ' +
        '<code>http://localhost:8000</code> aufrufen. Auf GitHub Pages läuft es ohne diesen Schritt.</p>'
      : '<p><code>inhalt.json</code> fehlt oder enthält einen JSON-Fehler. ' +
        'Häufigste Ursache: ein Komma zu viel hinter dem letzten Eintrag.</p>';
  }

  /* ====== Aufschlagseite ====== */

  function aufschlag() {
    countdown();
    wortDesTages();

    const ziel = document.getElementById('bereiche');
    const meldung = document.getElementById('meldung');

    laden('./').then(daten => {
      ziel.innerHTML = '';
      daten.bereiche.forEach(b => {
        const alle = b.gruppen.flatMap(g => g.module);
        const fertig = alle.filter(m => m.status !== 'in-arbeit').length;

        const a = document.createElement('a');
        a.className = 'bereichskarte';
        a.dataset.bereich = b.id;
        a.href = b.id + '.html';
        a.innerHTML = `
          <p class="eyebrow">${anzahl(b.gruppen.length, 'Themengruppe', 'Themengruppen')}</p>
          <h2>${b.label}</h2>
          <p>${b.kurz}</p>
          <div class="bilanz">
            <span>${anzahl(alle.length, 'Modul', 'Module')}</span>
            <span>${fertig} fertig</span>
          </div>`;
        ziel.appendChild(a);
      });
    }).catch(() => fehler(meldung));
  }

  /* ====== Bereichsseite ====== */

  function bereich(id) {
    countdown();

    const ziel = document.getElementById('gruppen');
    const meldung = document.getElementById('meldung');
    document.body.dataset.bereich = id;

    laden('./').then(daten => {
      const b = daten.bereiche.find(x => x.id === id);
      if (!b) throw new Error('Bereich unbekannt');

      const titel = document.getElementById('bereich-titel');
      const text  = document.getElementById('bereich-text');
      if (titel) titel.innerHTML = '<em>' + b.label + '</em>';
      if (text) text.textContent = b.einleitung;
      document.title = b.label + ' – Berufssprachkurs';

      ziel.innerHTML = '';
      const offeneGruppen = geoeffnet();

      b.gruppen.forEach((g, nr) => {
        const sec = document.createElement('details');
        sec.className = 'gruppe';
        const gruppenId = id + '/' + g.titel;
        sec.open = offeneGruppen.includes(gruppenId);
        sec.addEventListener('toggle', () => {
          const liste = geoeffnet();
          const i = liste.indexOf(gruppenId);
          if (sec.open && i === -1) liste.push(gruppenId);
          if (!sec.open && i !== -1) liste.splice(i, 1);
          merkenOffen(liste);
        });

        const zaehlung = {};
        g.module.forEach(m => (m.fertigkeiten || []).forEach(f => zaehlung[f] = (zaehlung[f] || 0) + 1));
        const deckung = ['Sprechen', 'Schreiben', 'Lesen', 'Hören']
          .map(f => f + ' ' + (zaehlung[f] || 0)).join(' · ');

        sec.innerHTML = `
          <summary class="kopfzeile">
            <span class="nummer">${String(nr + 1).padStart(2, '0')}</span>
            <h2>${g.titel}</h2>
            <span class="anzahl">${anzahl(g.module.length, 'Modul', 'Module')}</span>
            <span class="deckung">${deckung}</span>
            <span class="pfeil" aria-hidden="true">▾</span>
          </summary>`;

        const grid = document.createElement('div');
        grid.className = 'kartei';

        g.module.forEach(m => {
          const offen = m.status !== 'in-arbeit';
          const kennung = id + '/' + m.pfad;
          const fertig = erledigt().includes(kennung);

          const el = document.createElement(offen ? 'a' : 'div');
          el.className = 'karte' + (offen ? '' : ' in-arbeit') + (fertig ? ' erledigt' : '');
          if (offen) el.href = id + '/' + m.pfad;

          const fk = (m.fertigkeiten || [])
            .map(f => '<span class="fk-' + f + '">' + f + '</span>').join('');

          el.innerHTML = `
            <h3>${m.titel}</h3>
            <p class="text">${m.beschreibung}</p>
            <div class="meta"><span>${m.niveau}</span><span>${m.dauer}</span>${fk}</div>`;

          if (offen) {
            const haken = document.createElement('button');
            haken.type = 'button';
            haken.className = 'haken';
            haken.textContent = '✓';
            haken.setAttribute('aria-label', 'Modul „' + m.titel + '" als erledigt markieren');
            haken.addEventListener('click', ev => {
              ev.preventDefault(); ev.stopPropagation();
              const liste = erledigt();
              const i = liste.indexOf(kennung);
              if (i === -1) { liste.push(kennung); el.classList.add('erledigt'); }
              else { liste.splice(i, 1); el.classList.remove('erledigt'); }
              merken(liste);
            });
            el.appendChild(haken);
          }
          grid.appendChild(el);
        });

        sec.appendChild(grid);
        ziel.appendChild(sec);
      });

      const knopf = document.getElementById('alle-auf');
      if (knopf) {
        const stand = () => {
          const auf = [...ziel.querySelectorAll('details')].every(d => d.open);
          knopf.textContent = auf ? 'Alle zuklappen' : 'Alle aufklappen';
        };
        knopf.hidden = false;
        stand();
        knopf.addEventListener('click', () => {
          const zu = [...ziel.querySelectorAll('details')].some(d => !d.open);
          ziel.querySelectorAll('details').forEach(d => { d.open = zu; });
          stand();
        });
        ziel.addEventListener('toggle', stand, true);
      }
    }).catch(() => fehler(meldung));
  }

  return { aufschlag, bereich, KURS };
})();
