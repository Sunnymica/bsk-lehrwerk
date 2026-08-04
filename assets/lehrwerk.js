/* =========================================================
   BSK-Lehrwerk – gemeinsame Modul- und Aufgabenlogik
   Bereichsseite: Lehrwerk.bereich('grammatik')
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
    ['zeitnah', 'bald – im Büro oft höflicher Ersatz für „sofort“'],
    ['zur Kenntnis nehmen', 'etwas lesen und akzeptieren, ohne zu handeln'],
    ['der Sachverhalt', 'das, worum es geht – die Lage in einer Sache'],
    ['sich beziehen auf', 'sagen, worauf man antwortet'],
    ['die Rückmeldung', 'die Antwort, ob und wie etwas geklappt hat'],
    ['veranlassen', 'dafür sorgen, dass etwas gemacht wird'],
    ['abstimmen mit', 'sich absprechen, bevor man entscheidet'],
    ['der Vorgang', 'ein Fall in der Verwaltung, von Anfang bis Abschluss'],
    ['erforderlich', 'nötig – das Amtswort für „man braucht es“'],
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
    try {
      localStorage.setItem(SCHLUESSEL, JSON.stringify(liste));
      window.dispatchEvent(new CustomEvent('bsk:progress-changed', { detail: liste }));
    } catch (e) {}
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
      knopf.textContent = 'Aa ' + (nr + 1) + '/' + STUFEN.length;
      knopf.title = 'Schriftgröße: ' + STUFEN[nr].name;
      knopf.setAttribute('aria-label', 'Schriftgröße: ' + STUFEN[nr].name + '. Stufe ' + (nr + 1) + ' von ' + STUFEN.length + '. Klicken zum Wechseln.');
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

  /* =========================================================
     Modul-Bausteine
     Jedes Modul ruft nur noch auf:
       Lehrwerk.modul('konnektoren')      – Speicherschlüssel setzen
       Lehrwerk.reiter()                  – Reiterleiste aktivieren
       Lehrwerk.auswahl('quiz', fragen)   – Auswahlaufgaben bauen
       Lehrwerk.luecken('lt', config)     – Lückentext prüfen
       Lehrwerk.wortbank('wb', config)    – Lückentext mit sichtbarer Wortbank
       Lehrwerk.zuordnen('z1', config)    – Paare bilden
       Lehrwerk.gruppieren('g1', config)  – Wörter in Töpfe sortieren
       Lehrwerk.extern('x1', config)      – Quizlet, Kahoot oder Video, erst nach Klick
       Lehrwerk.frei('schreiben')         – freies Schreibfeld (speichert)
       Lehrwerk.abschluss()               – Stand, Kopieren, Zurücksetzen
     ========================================================= */

  let M = { schluessel: null, stand: {}, teile: [] };

  function modul(name) {
    M = { schluessel: 'bsk-modul-' + name, stand: {}, teile: [] };
    try { M.stand = JSON.parse(localStorage.getItem(M.schluessel)) || {}; } catch (e) {}
    return M;
  }

  function speichern() {
    try { localStorage.setItem(M.schluessel, JSON.stringify(M.stand)); } catch (e) {}
  }

  /* Zu welchem Lernabschnitt gehört eine Aufgabe? Ermittelt über das
     umgebende .blatt. Ohne Reiter gibt es nur einen Abschnitt. */
  function blattVon(id) {
    const el = document.getElementById(id);
    const sec = el && el.closest ? el.closest('.blatt') : null;
    return sec ? sec.id : '';
  }

  function aktivesBlatt() {
    const offen = [...document.querySelectorAll('.blatt')].find(s => !s.hidden);
    return offen ? offen.id : '';
  }

  function reiter() {
    const knoepfe = document.querySelectorAll('.reiter button');
    knoepfe.forEach(b => b.addEventListener('click', () => {
      knoepfe.forEach(x => x.setAttribute('aria-selected', 'false'));
      b.setAttribute('aria-selected', 'true');
      document.querySelectorAll('.blatt').forEach(s => s.hidden = true);
      const ziel = document.getElementById('blatt-' + b.dataset.blatt);
      if (ziel) ziel.hidden = false;
      standZeigen();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }));
  }

  /* fragen: [{ id, text, optionen: [], richtig: [] , erklaerung }]
     richtig ist IMMER eine Liste – auch bei nur einer Lösung. */
  function auswahl(zielId, fragen) {
    const box = document.getElementById(zielId);
    if (!box) return;
    M.teile.push({ art: 'auswahl', name: zielId, fragen: fragen, blatt: blattVon(zielId) });

    fragen.forEach(f => {
      const div = document.createElement('div');
      div.className = 'frage';
      div.innerHTML = '<p>' + f.text + '</p>';

      const wahl = document.createElement('div');
      wahl.className = 'wahl';
      const rueck = document.createElement('p');
      rueck.className = 'rueckmeldung';
      rueck.hidden = true;

      f.optionen.forEach(opt => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = opt;
        b.addEventListener('click', () => {
          const ok = f.richtig.includes(opt);
          wahl.querySelectorAll('button').forEach(x => x.disabled = true);
          b.classList.add(ok ? 'richtig' : 'falsch');
          if (!ok) wahl.querySelectorAll('button').forEach(x => {
            if (f.richtig.includes(x.textContent)) x.classList.add('richtig');
          });
          let text;
          if (ok) {
            const andere = f.richtig.filter(r => r !== opt);
            text = 'Richtig. ' + (andere.length ? 'Ebenso möglich: ' + andere.join(', ') + '. ' : '') + (f.erklaerung || '');
          } else {
            text = 'Noch nicht. Richtig ' + (f.richtig.length > 1 ? 'sind: ' + f.richtig.join(', ') : 'ist: „' + f.richtig[0] + '“') + '. ' + (f.erklaerung || '');
          }
          rueck.hidden = false;
          rueck.textContent = text;
          M.stand[zielId + ':' + f.id] = opt;
          speichern();
          standZeigen();
        });
        wahl.appendChild(b);
      });

      div.appendChild(wahl);
      div.appendChild(rueck);
      box.appendChild(div);

      if (M.stand[zielId + ':' + f.id]) {
        const t = [...wahl.querySelectorAll('button')].find(x => x.textContent === M.stand[zielId + ':' + f.id]);
        if (t) t.click();
      }
    });
  }

  /* config: { felder: { id: [alternativen] }, pruefen: 'knopf-id',
               rueck: 'absatz-id', tipp: 'knopf-id', hinweis: 'absatz-id' } */
  function luecken(name, config) {
    const ids = Object.keys(config.felder);
    M.teile.push({ art: 'luecken', name: name, anzahl: ids.length, blatt: blattVon(ids[0]) });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (M.stand[name + ':' + id]) el.value = M.stand[name + ':' + id];
      el.addEventListener('input', () => { M.stand[name + ':' + id] = el.value; speichern(); });
    });

    const knopf = document.getElementById(config.pruefen);
    const rueck = document.getElementById(config.rueck);
    if (knopf) knopf.addEventListener('click', () => {
      let richtig = 0;
      ids.forEach(id => {
        const el = document.getElementById(id);
        const wert = el.value.trim().toLowerCase();
        const ok = config.felder[id].map(x => x.toLowerCase()).includes(wert);
        el.classList.toggle('richtig', ok);
        el.classList.toggle('falsch', !ok && wert !== '');
        if (ok) richtig++;
      });
      if (rueck) {
        rueck.hidden = false;
        const mehrdeutig = !config.eindeutig;
        rueck.textContent = richtig === ids.length
          ? (mehrdeutig ? 'Alle richtig. Bei jeder Lücke wären auch andere Wörter möglich gewesen.' : 'Alle richtig.')
          : richtig + ' von ' + ids.length + ' richtig.' +
            (mehrdeutig ? ' Es gibt jeweils mehrere Möglichkeiten.' : ' Die falschen Felder sind rot markiert.');
      }
      M.stand['_' + name] = richtig;
      speichern();
      standZeigen();
    });

    const tipp = document.getElementById(config.tipp);
    const hinweis = document.getElementById(config.hinweis);
    if (tipp && hinweis) tipp.addEventListener('click', () => { hinweis.hidden = !hinweis.hidden; });
  }

  /* Freies Schreibfeld: speichert laufend, wird nicht bewertet. */
  function frei(feldId) {
    const el = document.getElementById(feldId);
    if (!el) return;
    if (M.stand[feldId]) el.value = M.stand[feldId];
    el.addEventListener('input', () => { M.stand[feldId] = el.value; speichern(); });
  }

  /* Hilfsfunktion: Reihenfolge mischen, ohne die Vorlage zu verändern. */
  function mischen(liste) {
    const a = liste.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const h = a[i]; a[i] = a[j]; a[j] = h;
    }
    return a;
  }

  /* Zuordnen: Paare bilden.
     config: { paare: [{ id, links, rechts, erklaerung }], rueck: 'absatz-id' }
     Links steht die Vorgabe in fester Reihenfolge, rechts gemischt.
     Erst links wählen, dann rechts. Keine Ziehbewegung, damit es auch
     auf dem Tablet und mit der Tastatur funktioniert. */
  function zuordnen(zielId, config) {
    const box = document.getElementById(zielId);
    if (!box) return;
    const paare = config.paare || [];
    M.teile.push({ art: 'zuordnen', name: zielId, anzahl: paare.length, blatt: blattVon(zielId) });

    const gitter = document.createElement('div');
    gitter.className = 'zuordnung';
    const links = document.createElement('div');
    const rechts = document.createElement('div');
    links.className = 'zuordnung-spalte';
    rechts.className = 'zuordnung-spalte';
    gitter.appendChild(links);
    gitter.appendChild(rechts);

    const rueck = config.rueck ? document.getElementById(config.rueck) : null;
    let aktiv = null;
    let geloest = 0;

    function melden(text) {
      if (!rueck) return;
      rueck.hidden = false;
      rueck.textContent = text;
    }

    function merken() {
      M.stand['_' + zielId] = geloest;
      speichern();
      standZeigen();
    }

    function abwaehlen() {
      if (!aktiv) return;
      aktiv.classList.remove('aktiv');
      aktiv.setAttribute('aria-pressed', 'false');
      aktiv = null;
    }

    paare.forEach(p => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'paarteil paar-links';
      b.dataset.paar = p.id;
      b.textContent = p.links;
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', () => {
        if (aktiv === b) { abwaehlen(); return; }
        abwaehlen();
        aktiv = b;
        b.classList.add('aktiv');
        b.setAttribute('aria-pressed', 'true');
      });
      links.appendChild(b);
    });

    mischen(paare).forEach(p => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'paarteil paar-rechts';
      b.dataset.paar = p.id;
      b.textContent = p.rechts;
      b.addEventListener('click', () => {
        if (!aktiv) { melden('Wählen Sie zuerst links einen Begriff aus.'); return; }
        const id = aktiv.dataset.paar;
        if (id === p.id) {
          const treffer = paare.find(x => x.id === id) || {};
          aktiv.classList.remove('aktiv');
          aktiv.classList.add('richtig');
          aktiv.disabled = true;
          aktiv.setAttribute('aria-pressed', 'false');
          aktiv = null;
          b.classList.add('richtig');
          b.disabled = true;
          geloest++;
          M.stand['z:' + zielId + ':' + id] = true;
          melden(geloest === paare.length
            ? 'Alle Paare gefunden. ' + (treffer.erklaerung || '')
            : 'Richtig. ' + (treffer.erklaerung || ''));
          merken();
        } else {
          b.classList.add('falsch');
          setTimeout(() => b.classList.remove('falsch'), 700);
          melden('Das gehört noch nicht zusammen. Lesen Sie beide Seiten noch einmal.');
        }
      });
      rechts.appendChild(b);
    });

    box.appendChild(gitter);

    paare.forEach(p => {
      if (!M.stand['z:' + zielId + ':' + p.id]) return;
      const l = links.querySelector('[data-paar="' + p.id + '"]');
      const r = rechts.querySelector('[data-paar="' + p.id + '"]');
      if (l) { l.classList.add('richtig'); l.disabled = true; }
      if (r) { r.classList.add('richtig'); r.disabled = true; }
      geloest++;
    });
    if (geloest) merken();
  }

  /* Lückentext mit Wortbank.
     config wie bei luecken(), zusätzlich:
       bank: ['Wort', …]   – die sichtbaren Wörter
       ziel: 'behaelter-id' – wohin die Wortbank gezeichnet wird
     Ein Klick auf ein Wort setzt es in das zuletzt berührte oder in das
     nächste leere Feld. Benutzte Wörter werden blass, bleiben aber klickbar,
     weil ein Wort mehrfach passen kann. */
  function wortbank(name, config) {
    const behaelter = document.getElementById(config.ziel);
    const ids = Object.keys(config.felder);
    let zuletzt = null;

    function feld(id) { return document.getElementById(id); }

    function naechstesLeeres() {
      for (let i = 0; i < ids.length; i++) {
        const el = feld(ids[i]);
        if (el && !el.value.trim()) return el;
      }
      return null;
    }

    function markieren() {
      if (!behaelter) return;
      const drin = ids.map(id => ((feld(id) || {}).value || '').trim().toLowerCase());
      behaelter.querySelectorAll('.wortmarke').forEach(b => {
        b.classList.toggle('benutzt', drin.indexOf(b.textContent.trim().toLowerCase()) !== -1);
      });
    }

    ids.forEach(id => {
      const el = feld(id);
      if (!el) return;
      el.addEventListener('focus', () => { zuletzt = el; });
      el.addEventListener('input', markieren);
    });

    if (behaelter) {
      behaelter.classList.add('wortbank');
      mischen(config.bank || []).forEach(w => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'wortmarke';
        b.textContent = w;
        b.addEventListener('click', () => {
          const ziel = (zuletzt && !zuletzt.value.trim()) ? zuletzt : naechstesLeeres();
          if (!ziel) return;
          ziel.value = w;
          ziel.classList.remove('richtig', 'falsch');
          M.stand[name + ':' + ziel.id] = w;
          speichern();
          markieren();
          ziel.focus();
        });
        behaelter.appendChild(b);
      });
    }

    luecken(name, config);
    markieren();
  }

  /* Gruppieren: Wörter in Töpfe sortieren.
     config: { woerter: [...], gruppen: [{ id, titel, woerter: [...] }],
               ziel: 'behaelter-id', pruefen: 'knopf-id', rueck: 'absatz-id' }
     Wort anklicken, dann Topf anklicken. Ein Wort im Topf geht per Klick
     zurück in den Vorrat. */
  function gruppieren(zielId, config) {
    const box = document.getElementById(zielId);
    if (!box) return;
    const gruppen = config.gruppen || [];
    const woerter = mischen(config.woerter || gruppen.reduce((a, g) => a.concat(g.woerter), []));
    M.teile.push({ art: 'gruppieren', name: zielId, anzahl: woerter.length, blatt: blattVon(zielId) });

    const schluessel = 'g:' + zielId;
    const lage = Object.assign({}, M.stand[schluessel] || {});
    const rueck = config.rueck ? document.getElementById(config.rueck) : null;
    let aktiv = null;

    const vorrat = document.createElement('div');
    vorrat.className = 'gruppier-vorrat';
    vorrat.setAttribute('aria-label', 'Vorrat');
    const toepfe = document.createElement('div');
    toepfe.className = 'gruppier-toepfe';

    function abwaehlen() {
      if (!aktiv) return;
      aktiv.classList.remove('aktiv');
      aktiv.setAttribute('aria-pressed', 'false');
      aktiv = null;
    }

    function marke(w) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'wortmarke';
      b.textContent = w;
      b.dataset.wort = w;
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', () => {
        if (aktiv === b) { abwaehlen(); return; }
        if (lage[w]) { delete lage[w]; zeichnen(); return; }
        abwaehlen();
        aktiv = b;
        b.classList.add('aktiv');
        b.setAttribute('aria-pressed', 'true');
      });
      return b;
    }

    function zeichnen() {
      abwaehlen();
      vorrat.innerHTML = '';
      toepfe.innerHTML = '';

      woerter.filter(w => !lage[w]).forEach(w => vorrat.appendChild(marke(w)));
      if (!vorrat.children.length) {
        const p = document.createElement('p');
        p.className = 'vorrat-leer';
        p.textContent = 'Alle Wörter sind einsortiert.';
        vorrat.appendChild(p);
      }

      gruppen.forEach(g => {
        const topf = document.createElement('div');
        topf.className = 'gruppier-topf';
        const kopf = document.createElement('button');
        kopf.type = 'button';
        kopf.className = 'topf-kopf';
        kopf.textContent = g.titel;
        kopf.addEventListener('click', () => {
          if (!aktiv) {
            if (rueck) { rueck.hidden = false; rueck.textContent = 'Wählen Sie zuerst ein Wort aus dem Vorrat.'; }
            return;
          }
          lage[aktiv.dataset.wort] = g.id;
          M.stand[schluessel] = lage;
          speichern();
          zeichnen();
        });
        const inhalt = document.createElement('div');
        inhalt.className = 'topf-inhalt';
        woerter.filter(w => lage[w] === g.id).forEach(w => inhalt.appendChild(marke(w)));
        topf.appendChild(kopf);
        topf.appendChild(inhalt);
        toepfe.appendChild(topf);
      });
    }

    box.appendChild(vorrat);
    box.appendChild(toepfe);
    zeichnen();

    const knopf = document.getElementById(config.pruefen);
    if (knopf) knopf.addEventListener('click', () => {
      let richtig = 0;
      gruppen.forEach(g => g.woerter.forEach(w => { if (lage[w] === g.id) richtig++; }));
      toepfe.querySelectorAll('.wortmarke').forEach(b => {
        const w = b.dataset.wort;
        const soll = (gruppen.find(g => g.woerter.indexOf(w) !== -1) || {}).id;
        b.classList.toggle('richtig', lage[w] === soll);
        b.classList.toggle('falsch', lage[w] !== soll);
      });
      const offen = woerter.length - Object.keys(lage).length;
      if (rueck) {
        rueck.hidden = false;
        rueck.textContent = richtig === woerter.length
          ? 'Alle Wörter sitzen richtig.'
          : richtig + ' von ' + woerter.length + ' richtig.' +
            (offen ? ' ' + offen + ' Wörter liegen noch im Vorrat.' : ' Die falschen sind rot markiert.');
      }
      M.stand['_' + zielId] = richtig;
      speichern();
      standZeigen();
    });
  }

  /* Externer Lernbaustein: Quizlet, Kahoot oder ein Video.
     Gemeinsam sind Platzhalter, bewusster Klick und Ausweichlink.
     Die Einbettungsadresse baut jeder Anbieter anders, deshalb steht die
     Umrechnung getrennt in ANBIETER.

     config: { anbieter: 'quizlet' | 'kahoot' | 'video',
               kennung:  Set-, Spiel- oder Video-Kennung,
               titel:    Überschrift,
               auftrag:  ein Satz, worauf zu achten ist,
               dauer:    optional, etwa '5 Min',
               modus:    optional, nur Quizlet: 'flashcards' | 'learn' | 'match' | 'test' }

     Vor dem Klick wird keine Verbindung zum Anbieter aufgebaut. */
  function kennung(wert) { return String(wert || '').replace(/[^\w\-]/g, ''); }
  function nurZiffern(wert) { return String(wert || '').replace(/\D/g, ''); }

  const ANBIETER = {
    quizlet: {
      name: 'Quizlet',
      /* Eingebettet wird über die reine Set-Nummer: /123456789/match/embed.
         Der öffentliche Link enthält zusätzlich den Set-Namen und lässt sich
         daraus nicht erraten, deshalb gehört er als fallbackUrl in die Konfiguration. */
      rahmen: c => 'https://quizlet.com/' + nurZiffern(c.kennung) +
                   '/' + (c.modus || 'flashcards') + '/embed?i=1&x=1jj1',
      offen: c => c.fallbackUrl || 'https://quizlet.com/' + nurZiffern(c.kennung),
      hoehe: 500
    },
    kahoot: {
      name: 'Kahoot',
      rahmen: c => 'https://embed.kahoot.it/' + kennung(c.kennung),
      offen: c => c.fallbackUrl || 'https://play.kahoot.it/v2/?quizId=' + kennung(c.kennung),
      hoehe: 560
    },
    video: {
      name: 'YouTube',
      /* youtube-nocookie und rel=0: kein Vorschlagskarussell fremder Kanäle */
      rahmen: c => 'https://www.youtube-nocookie.com/embed/' + kennung(c.kennung) +
                   '?rel=0&modestbranding=1' + (c.start ? '&start=' + Number(c.start) : '') +
                   (c.untertitel ? '&cc_load_policy=1&cc_lang_pref=de' : ''),
      offen: c => c.fallbackUrl || 'https://www.youtube.com/watch?v=' + kennung(c.kennung),
      hoehe: 0   // 0 bedeutet: Seitenverhältnis 16:9 statt fester Höhe
    }
  };

  function extern(zielId, config) {
    const box = document.getElementById(zielId);
    if (!box) return;
    const a = ANBIETER[config.anbieter];
    if (!a) return;

    box.classList.add('extern');
    const kopf = document.createElement('div');
    kopf.className = 'extern-kopf';
    kopf.innerHTML =
      '<span class="marke marke-extern">' + a.name + (config.dauer ? ' · ' + config.dauer : '') + '</span>' +
      '<h3>' + config.titel + '</h3>' +
      (config.auftrag ? '<p>' + config.auftrag + '</p>' : '');

    const flaeche = document.createElement('div');
    flaeche.className = 'extern-flaeche' + (a.hoehe ? '' : ' extern-video');
    if (a.hoehe) flaeche.style.minHeight = a.hoehe + 'px';

    const start = document.createElement('button');
    start.type = 'button';
    start.className = 'knopf';
    start.textContent = 'Bei ' + a.name + ' laden';
    start.addEventListener('click', () => {
      const rahmen = document.createElement('iframe');
      rahmen.src = a.rahmen(config);
      rahmen.title = config.titel + ' (' + a.name + ')';
      rahmen.loading = 'lazy';
      rahmen.setAttribute('allowfullscreen', '');
      rahmen.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      flaeche.innerHTML = '';
      flaeche.appendChild(rahmen);
    });

    const hinweis = document.createElement('p');
    hinweis.className = 'extern-hinweis';
    hinweis.textContent = 'Beim Laden entsteht eine Verbindung zu ' + a.name + '. Vorher passiert nichts.';

    flaeche.appendChild(start);
    flaeche.appendChild(hinweis);

    const fuss = document.createElement('p');
    fuss.className = 'extern-fuss';
    const link = document.createElement('a');
    link.href = a.offen(config);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Stattdessen bei ' + a.name + ' öffnen';
    fuss.appendChild(link);

    box.appendChild(kopf);
    box.appendChild(flaeche);
    box.appendChild(fuss);
  }

  function teilStand(t) {
    if (t.art === 'auswahl') {
      return {
        richtig: t.fragen.filter(f => M.stand[t.name + ':' + f.id] && f.richtig.includes(M.stand[t.name + ':' + f.id])).length,
        gesamt: t.fragen.length
      };
    }
    return { richtig: M.stand['_' + t.name] || 0, gesamt: t.anzahl };
  }

  /* Gezählt wird nur der Lernabschnitt, der gerade offen ist. Eine Zahl über
     das ganze Modul hinweg wäre entmutigend und würde mit jedem neuen
     Abschnitt größer, ohne dass jemand etwas falsch gemacht hätte.
     Bis zu vier Aufgaben werden einzeln aufgeführt, danach nur die Summe. */
  function standText() {
    const jetzt = aktivesBlatt();
    const teile = jetzt ? M.teile.filter(t => t.blatt === jetzt) : M.teile;
    if (!teile.length) return '';
    if (teile.length > 4) {
      const summe = teile.reduce((a, t) => {
        const s = teilStand(t);
        a.richtig += s.richtig; a.gesamt += s.gesamt;
        return a;
      }, { richtig: 0, gesamt: 0 });
      return summe.richtig + ' von ' + summe.gesamt + ' Aufgaben in diesem Lernabschnitt';
    }
    return teile.map(t => {
      const s = teilStand(t);
      return s.richtig + ' von ' + s.gesamt;
    }).join(' · ');
  }

  function standZeigen() {
    const el = document.getElementById('stand');
    if (el && M.teile.length) el.textContent = 'Stand: ' + standText();
  }

  /* Erwartet optional die Knöpfe #zuruecksetzen und #kopieren sowie #stand. */
  function abschluss() {
    standZeigen();

    const zurueck = document.getElementById('zuruecksetzen');
    if (zurueck) zurueck.addEventListener('click', () => {
      M.stand = {};
      speichern();
      location.reload();
    });

    const kopieren = document.getElementById('kopieren');
    if (kopieren) kopieren.addEventListener('click', () => {
      const text = document.title.split(' –')[0] + ', Stand vom ' +
        new Date().toLocaleDateString('de-DE') + '\n' + standText();
      navigator.clipboard.writeText(text).then(
        () => { kopieren.textContent = 'Kopiert'; },
        () => { window.prompt('Zum Kopieren markieren:', text); }
      );
    });
  }

  /* ====== Daten laden ====== */

  function laden(wurzel) {
    if (window.DATEN_INLINE) return Promise.resolve(window.DATEN_INLINE);
    if (window.BSKPlatform && typeof window.BSKPlatform.getContent === 'function') {
      return window.BSKPlatform.getContent().then(data => {
        if (!data) throw new Error('Inhaltsdatei nicht erreichbar');
        return data;
      });
    }
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

  /* ====== Bereichsseite ====== */

  /* Minutenangaben sagen bei mehrteiligen Modulen nichts Verlässliches und
     erscheinen deshalb nicht mehr auf der Karte. Andere Angaben, etwa
     „4 Lernabschnitte“ oder „Nachschlagen“, bleiben stehen. */
  function umfang(wert) {
    if (!wert || /^\s*\d+\s*Min\.?\s*$/i.test(wert)) return '';
    return '<span>' + wert + '</span>';
  }

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

        /* Gezählt wird nur, was auch geöffnet werden kann. Sonst verspricht die
           Zeile Übungen, die es noch nicht gibt. */
        const zaehlung = {};
        g.module
          .filter(m => m._available === true || (id === 'referenz' && m.pfad === 'hausaufgaben.html'))
          .forEach(m => (m.fertigkeiten || []).forEach(f => zaehlung[f] = (zaehlung[f] || 0) + 1));
        const deckung = Object.keys(zaehlung).length
          ? ['Sprechen', 'Schreiben', 'Lesen', 'Hören']
              .filter(f => zaehlung[f]).map(f => f + ' ' + zaehlung[f]).join(' · ')
          : 'noch kein Material';

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
          const hausaufgabenBereich = id === 'referenz' && m.pfad === 'hausaufgaben.html';
          const offen = hausaufgabenBereich || m._available === true;
          const kennung = id + '/' + m.pfad;
          const fertig = erledigt().includes(kennung);

          const el = document.createElement(offen ? 'a' : 'div');
          el.className = 'karte' + (offen ? '' : ' in-arbeit') + (fertig ? ' erledigt' : '');
          if (offen) el.href = hausaufgabenBereich ? 'index.html#hausaufgaben' : id + '/' + m.pfad;

          const fk = (m.fertigkeiten || [])
            .map(f => '<span class="fk-' + f + '">' + f + '</span>').join('');

          el.innerHTML = `
            <h3>${m.titel}</h3>
            <p class="text">${m.beschreibung}</p>
            <div class="meta"><span>${m.niveau}</span>${umfang(m.dauer)}${fk}</div>
            ${offen ? (m._teilweise ? '<span class="status-hinweis">wächst noch</span>' : '') : '<span class="status-hinweis">Material wird ergänzt</span>'}`;

          if (offen && !hausaufgabenBereich) {
            const haken = document.createElement('button');
            haken.type = 'button';
            haken.className = 'haken';
            haken.textContent = '✓';
            haken.title = m._teilweise ? 'Aktuellen Stand als erledigt markieren' : 'Als erledigt markieren';
            haken.setAttribute('aria-label', (m._teilweise ? 'Aktuellen Stand von Modul „' : 'Modul „') + m.titel + '“ als erledigt markieren');
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

  return { bereich, KURS, modul, reiter, auswahl, luecken, wortbank, zuordnen, gruppieren, extern, frei, abschluss };
})();
