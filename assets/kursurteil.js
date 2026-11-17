/* Kursurteil – Prototyp (17.11.2026)
   Nur für die Lehrkraft sichtbar. Einschalten: Seite einmal mit ?lehrkraft=1 öffnen,
   ausschalten mit ?lehrkraft=0. Der Schalter und alle Urteile liegen nur im Browser
   der Lehrkraft (localStorage), es wird nichts übertragen.

   Jede Aufgabe (Block .differenzierung mit Überschrift) bekommt vier Knöpfe:
   Sitzt · Üben · Zu schwer · Übersprungen. Danach schlägt die Seite nach festen Regeln
   einen Anschluss vor. Die Etiketten pro Aufgabe stehen in window.KURSURTEIL der Modulseite. */
(function () {
  'use strict';
  var SCHALTER = 'lw-lehrkraft', SPEICHER = 'lw-kursurteil-v1';
  var q = new URLSearchParams(location.search);
  try {
    if (q.get('lehrkraft') === '1') localStorage.setItem(SCHALTER, '1');
    if (q.get('lehrkraft') === '0') localStorage.removeItem(SCHALTER);
    if (localStorage.getItem(SCHALTER) !== '1') return;
  } catch (e) { return; }

  var root = document.body.getAttribute('data-root') || '';
  var seite = location.pathname.split('/').slice(-2).join('/');
  var cfg = window.KURSURTEIL || {};
  var etiketten = cfg.etiketten || {};

  /* Anschlüsse nach Grammatik-Etikett: ueben = verstanden, aber noch wacklig; schwer = noch nicht verstanden */
  var ANSCHLUSS = {
    klammer: {
      ueben: [['Aufwecker · Satzsalat', 'training/aufwecker.html', 'Fünf Minuten Sätze bauen, mit Würfel.']],
      schwer: [['Sprachwerkstatt · Satzbau-Automat', 'grammatik/satzbau-automat.html', 'Die Satzklammer sehen und anfassen.']]
    },
    fragen: {
      ueben: [['Aufwecker · Frage?', 'training/aufwecker.html', 'Die Antwort steht da, die Frage wird gebaut.']],
      schwer: [['Grammatik · Satzbau, Reiter Fragen', 'grammatik/satzbau.html', 'Fragewort, Verb, Rest: noch einmal von vorn.']]
    },
    hoeflich: {
      ueben: [['Der Imperativ · Brettspiel', 'buero/imperativ-spiel.html', '21 Aufträge aus dem Arbeitsalltag.']],
      schwer: [['Die Höflichkeitsleiter in diesem Modul', '', 'Reiter 2: nur die drei Stufen laut lesen und einen Satz umbauen.']]
    },
    imperativ: {
      ueben: [['Der Imperativ · Brettspiel', 'buero/imperativ-spiel.html', '21 Aufträge aus dem Arbeitsalltag.']],
      schwer: [['Der Imperativ · die vier Regeln', 'buero/imperativ-spiel.html', 'Erst die Sie-Form, sie sieht aus wie der Infinitiv.']]
    },
    artikel: {
      ueben: [['Aufwecker · Artikel', 'training/aufwecker.html', 'Artikel-Alarm im Schnelldurchgang.']],
      schwer: [['Sprachwerkstatt · Artikel-Notaufnahme', 'grammatik/artikel-notaufnahme.html', 'Erst die Diagnose, dann die Behandlung.']]
    }
  };
  /* Anschlüsse nach Lernform, wenn kein Grammatik-Etikett passt */
  var FORM = {
    'hören': { ueben: 'Noch einmal hören und dabei mitlesen.', schwer: 'In zwei Hälften hören. Nach jeder Hälfte: Wer spricht? Worum geht es?' },
    'schreiben': { ueben: 'Als Hausaufgabe aufgeben, mit dem Muster daneben.', schwer: 'Erst mündlich: jede Person sagt einen Satz mit vorgegebenem Satzanfang. Geschrieben wird später oder gar nicht.' },
    'rollenspiel': { ueben: 'Rollen tauschen und noch einmal spielen.', schwer: 'Erst den Musterdialog mit verteilten Rollen lesen. Dann nur die erste Hälfte frei.' },
    'sprechen': { ueben: 'Noch eine Runde reihum, diesmal ohne Hilfe.', schwer: 'Mit den Satzanfängen aus dem Kasten: jede Person nur einen Satz.' }
  };

  function laden() { try { return JSON.parse(localStorage.getItem(SPEICHER) || '{}'); } catch (e) { return {}; } }
  function sichern(alles) { try { localStorage.setItem(SPEICHER, JSON.stringify(alles)); } catch (e) { /* egal */ } }
  function kurz(t) { return t.toLowerCase().replace(/[^a-zäöüß0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function el(tag, klasse, html) { var e = document.createElement(tag); if (klasse) e.className = klasse; if (html !== undefined) e.innerHTML = html; return e; }

  var css = el('style');
  css.textContent =
    '.ku-leiste{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem;margin:.6rem 0 0;padding:.45rem .6rem;border:1px dashed #b9b4a8;border-radius:10px;background:#fffdf6;font-size:.9rem}' +
    '.ku-leiste>span{font-family:var(--mono,monospace);font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:#6b6f7a;margin-right:.3rem}' +
    '.ku-leiste button{font:inherit;font-size:.9rem;border:1.5px solid #cfcabd;background:#fff;border-radius:999px;padding:.2rem .75rem;cursor:pointer;color:#22222b}' +
    '.ku-leiste button[aria-pressed="true"]{color:#fff;font-weight:700}' +
    '.ku-leiste button[data-u="sitzt"][aria-pressed="true"]{background:#2E6B4A;border-color:#2E6B4A}' +
    '.ku-leiste button[data-u="ueben"][aria-pressed="true"]{background:#B5651D;border-color:#B5651D}' +
    '.ku-leiste button[data-u="schwer"][aria-pressed="true"]{background:#B03030;border-color:#B03030}' +
    '.ku-leiste button[data-u="skip"][aria-pressed="true"]{background:#657177;border-color:#657177}' +
    '.ku-tipp{flex-basis:100%;margin:.2rem 0 0;padding:.4rem .6rem;border-radius:8px;background:#E3EBF3;color:#22222b}' +
    '.ku-tipp a{font-weight:700}' +
    '.ku-stand{margin:0 0 1rem;padding:.6rem .9rem;border:1px dashed #b9b4a8;border-radius:10px;background:#fffdf6;font-size:.95rem}' +
    '.ku-stand summary{cursor:pointer;font-weight:700}' +
    '.ku-stand ul{margin:.5rem 0;padding-left:1.2rem}.ku-stand li{margin:.15rem 0}' +
    '.ku-stand button{font:inherit;font-size:.85rem;border:1.5px solid #cfcabd;background:#fff;border-radius:999px;padding:.2rem .75rem;cursor:pointer;margin-right:.4rem}' +
    '.ku-zahl{font-family:var(--mono,monospace);font-size:.62rem;margin-left:.35rem;opacity:.75}' +
    '@media print{.ku-leiste,.ku-stand{display:none}}';
  document.head.appendChild(css);

  var NAME = { sitzt: 'Sitzt', ueben: 'Üben', schwer: 'Zu schwer', skip: 'Übersprungen' };
  var aufgaben = [];

  [].forEach.call(document.querySelectorAll('.blatt'), function (blatt) {
    var reiter = document.querySelector('.reiter button[data-blatt="' + blatt.id.replace('blatt-', '') + '"]');
    var reiterName = reiter ? reiter.textContent.trim() : '';
    var kopfListe = [].slice.call(blatt.querySelectorAll('.differenzierung')).filter(function (d) { return d.querySelector('h2, h3'); });
    kopfListe.forEach(function (kopf, i) {
      var titel = kopf.querySelector('h2, h3').textContent.trim();
      var stufe = kopf.querySelector('.differenzierung__stufe');
      var form = stufe ? stufe.textContent.trim().toLowerCase().split(' ')[0] : '';
      var a = { id: blatt.id.replace('blatt-', '') + '/' + kurz(titel), titel: titel, reiter: reiterName, reiterKnopf: reiter, form: form, g: etiketten[titel] || '', naechste: kopfListe[i + 1] ? kopfListe[i + 1].querySelector('h2, h3').textContent.trim() : '' };
      var leiste = el('div', 'ku-leiste');
      leiste.appendChild(el('span', '', 'Kursurteil'));
      ['sitzt', 'ueben', 'schwer', 'skip'].forEach(function (u) {
        var b = el('button', '', NAME[u]); b.type = 'button'; b.setAttribute('data-u', u); b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', function () { urteilen(a, u); });
        leiste.appendChild(b);
      });
      a.tipp = el('div', 'ku-tipp'); a.tipp.hidden = true; leiste.appendChild(a.tipp);
      a.leiste = leiste;
      kopf.appendChild(leiste);
      aufgaben.push(a);
    });
  });
  if (!aufgaben.length) return;

  function stand(a) { var s = (laden()[seite] || {})[a.id]; return s ? s.u : ''; }
  function urteilen(a, u) {
    var alles = laden(); alles[seite] = alles[seite] || {};
    if (alles[seite][a.id] && alles[seite][a.id].u === u) delete alles[seite][a.id];
    else alles[seite][a.id] = { u: u, d: new Date().toISOString().slice(0, 10), t: a.titel, r: a.reiter };
    sichern(alles); zeigen();
  }
  function link(e) { return e[1] ? '<a href="' + root + e[1] + '">' + e[0] + '</a>' : '<strong>' + e[0] + '</strong>'; }
  function tippText(a, u) {
    if (u === 'sitzt') {
      var weiter = a.naechste ? 'Weiter mit „' + a.naechste + '“.' : 'Dieser Reiter ist durch. Weiter mit dem nächsten Reiter.';
      return weiter + (a.g ? ' Zum Anwenden im Team: <a href="' + root + 'training/aufwecker.html">der KONTOR-Aufzug</a>.' : '');
    }
    if (u === 'skip') return 'Steht auf der Liste „Offen geblieben“ oben im Kursstand.';
    var g = ANSCHLUSS[a.g] && ANSCHLUSS[a.g][u];
    if (g) return (u === 'ueben' ? 'Zum Üben passt: ' : 'Einen Schritt zurück: ') + g.map(function (e) { return link(e) + ' – ' + e[2]; }).join(' ');
    var f = FORM[a.form] && FORM[a.form][u];
    if (f) return (u === 'ueben' ? 'Zum Üben: ' : 'Einfacher machen: ') + f;
    return u === 'ueben' ? 'Beim nächsten Mal noch einmal kurz aufgreifen.' : 'Für die Nacharbeit notiert: Diese Aufgabe braucht mehr Gerüst.';
  }

  var kasten = el('details', 'ku-stand');
  var erstesBlatt = document.querySelector('.blatt');
  erstesBlatt.parentNode.insertBefore(kasten, document.querySelector('.reiter') || erstesBlatt);

  function zeigen() {
    var z = { sitzt: 0, ueben: 0, schwer: 0, skip: 0, offen: 0 }, proReiter = {};
    aufgaben.forEach(function (a) {
      var u = stand(a);
      [].forEach.call(a.leiste.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-u') === u ? 'true' : 'false'); });
      a.tipp.hidden = !u; a.tipp.innerHTML = u ? tippText(a, u) : '';
      z[u || 'offen']++;
      var p = proReiter[a.reiter] = proReiter[a.reiter] || { k: a.reiterKnopf, n: 0, fertig: 0 }; p.n++; if (u) p.fertig++;
    });
    Object.keys(proReiter).forEach(function (r) {
      var p = proReiter[r]; if (!p.k) return;
      var m = p.k.querySelector('.ku-zahl') || p.k.appendChild(el('span', 'ku-zahl'));
      m.textContent = p.fertig + '/' + p.n;
    });
    var offenAuf = kasten.open;
    function liste(u, kopf) {
      var l = aufgaben.filter(function (a) { return stand(a) === u; });
      return l.length ? '<p><strong>' + kopf + '</strong></p><ul>' + l.map(function (a) { return '<li>' + a.reiter + ' → ' + a.titel + '</li>'; }).join('') + '</ul>' : '';
    }
    kasten.innerHTML = '<summary>Kursstand dieser Einheit: ' + z.sitzt + ' sitzen · ' + z.ueben + ' üben · ' + z.schwer + ' zu schwer · ' + z.skip + ' übersprungen · ' + z.offen + ' noch nicht gemacht</summary>' +
      liste('ueben', 'Noch einmal üben') + liste('schwer', 'Zu schwer – braucht Nacharbeit am Material') + liste('skip', 'Offen geblieben (übersprungen)') +
      '<p><button type="button" data-ku="kopieren">Liste kopieren</button><button type="button" data-ku="leeren">Urteile dieser Einheit löschen</button></p>';
    kasten.open = offenAuf;
    kasten.querySelector('[data-ku="kopieren"]').addEventListener('click', function () {
      var zeilen = ['Kursstand ' + document.title + ' (' + new Date().toISOString().slice(0, 10) + ')'];
      ['sitzt', 'ueben', 'schwer', 'skip'].forEach(function (u) {
        aufgaben.filter(function (a) { return stand(a) === u; }).forEach(function (a) { zeilen.push(NAME[u] + ': ' + a.reiter + ' → ' + a.titel); });
      });
      aufgaben.filter(function (a) { return !stand(a); }).forEach(function (a) { zeilen.push('Noch nicht gemacht: ' + a.reiter + ' → ' + a.titel); });
      var knopf = this, text = zeilen.join('\n');
      (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () { knopf.textContent = 'Kopiert ✓'; }, function () { window.prompt('Zum Kopieren:', text); });
    });
    kasten.querySelector('[data-ku="leeren"]').addEventListener('click', function () {
      var alles = laden(); delete alles[seite]; sichern(alles); zeigen();
    });
  }
  zeigen();
})();
