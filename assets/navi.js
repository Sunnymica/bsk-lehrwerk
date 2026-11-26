/* =========================================================
   Deutsch fürs Büro – gemeinsame Navigation (Wegenetz, Stufen 1, 3 und 4)

   Eine Datei für alle Seiten:
   - „↑ Zum Seitenanfang“ am Seitenende
   - kleiner Pfeil rechts unten, sobald man etwa eine
     Bildschirmhöhe gescrollt hat
   - schmale Kopfzeile auf Sonderseiten, die nicht im
     Plattformrahmen laufen (Plattformseiten haben ihre
     eigene Kopfzeile, also keine doppelte Leiste)

   Alles steckt in Shadow DOM, damit sich die Stile der
   Sonderseiten und die Navigation nicht gegenseitig stören.
   Der Sprung nach oben ändert nur die Scrollposition,
   der geöffnete Reiter bleibt offen.

   Plattformseiten laden die Datei über platform.js,
   Sonderseiten mit einer eigenen Skriptzeile.
   ========================================================= */
(function () {
  'use strict';
  if (window.__lehrwerkNavi) return;
  window.__lehrwerkNavi = true;

  var skript = document.currentScript;
  var WURZEL = skript && skript.src ? skript.src.replace(/assets\/navi\.js.*$/, '') : '../';

  var FARBE = {
    blau: '#215E78', dunkel: '#173F50', terrakotta: '#B86143',
    papier: '#FFFDF8', grund: '#F4F1EB', linie: '#D9D7D0', tinte: '#22222B'
  };
  var SCHRIFT = '"Aptos", "Segoe UI", system-ui, sans-serif';
  var MONO = '"Cascadia Mono", "SFMono-Regular", Consolas, monospace';

  /* Ordner → Bereich. Die Ordnernamen ändern sich nicht (Adressen bleiben stabil). */
  var BEREICHE = {
    buero:     ['Büro und Verwaltung', 'buero.html'],
    grammatik: ['Grammatik', 'grammatik.html'],
    pauken:    ['Pauken', 'pauken.html'],
    training:  ['Training', 'training.html'],
    referenz:  ['Nachschlagen', 'referenz.html'],
    kurs:      ['Unser Kurs', 'kurs.html']
  };

  function plattformSeite() {
    return !!document.querySelector('script[src*="platform.js"]');
  }

  function pfadTeile() {
    var rel = location.href.split('#')[0].split('?')[0];
    if (rel.indexOf(WURZEL) === 0) rel = rel.slice(WURZEL.length);
    return rel.split('/').filter(Boolean);
  }

  function host(name) {
    var el = document.createElement('lehrwerk-navi');
    el.setAttribute('data-teil', name);
    el.style.display = 'block';
    return { el: el, root: el.attachShadow({ mode: 'open' }) };
  }

  /* ---------- Kopfzeile für Sonderseiten ---------- */
  function kopfzeile() {
    if (plattformSeite()) return;
    var teile = pfadTeile();
    var ordner = teile[0];
    if (!BEREICHE[ordner] || ordner === 'lehrkraft') return;

    var label = BEREICHE[ordner][0], ziel = WURZEL + BEREICHE[ordner][1], art = 'Lernbereich';
    if (ordner === 'kurs' && teile[1] === 'coaching') {
      label = 'Einzelcoaching'; ziel = WURZEL + 'kurs/einzelcoaching.html'; art = 'Unser Kurs';
    }

    var h = host('kopf');
    h.root.innerHTML =
      '<style>' +
      ':host{all:initial;display:block}' +
      '.leiste{box-sizing:border-box;display:flex;align-items:center;gap:14px;min-height:52px;padding:6px clamp(14px,4vw,58px);' +
        'background:' + FARBE.grund + ';border-bottom:1px solid rgba(80,90,95,.10);font-family:' + SCHRIFT + ';color:' + FARBE.tinte + '}' +
      'a{color:inherit;text-decoration:none}' +
      '.marke{display:flex;align-items:center;gap:9px;font-weight:700;font-size:15px}' +
      '.zeichen{width:32px;height:32px;border-radius:10px;display:grid;place-items:center;background:' + FARBE.dunkel + ';color:#F8EEE1;font-size:13px;font-weight:800}' +
      '.trenner{width:1px;align-self:stretch;margin:6px 2px;background:' + FARBE.linie + '}' +
      '.ort{display:grid;line-height:1.2}' +
      '.art{font-family:' + MONO + ';font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:' + FARBE.terrakotta + '}' +
      '.bereich{font-weight:700;font-size:15px}' +
      'a:hover .bereich,a.marke:hover span:last-child{text-decoration:underline}' +
      'a:focus-visible{outline:2px solid ' + FARBE.blau + ';outline-offset:3px;border-radius:6px}' +
      '@media (max-width:560px){.marke span:last-child{display:none}}' +
      '</style>' +
      '<nav class="leiste" aria-label="Lehrwerk">' +
        '<a class="marke" href="' + WURZEL + 'index.html"><span class="zeichen">DB</span><span>Deutsch fürs Büro</span></a>' +
        '<span class="trenner" aria-hidden="true"></span>' +
        '<a class="ort" href="' + ziel + '"><span class="art">' + art + '</span><span class="bereich">' + label + '</span></a>' +
      '</nav>';

    /* Seitenränder des Body ausgleichen, damit die Leiste bündig sitzt. */
    var st = getComputedStyle(document.body);
    var oben = parseFloat(st.marginTop) + parseFloat(st.paddingTop);
    var links = parseFloat(st.marginLeft) + parseFloat(st.paddingLeft);
    var rechts = parseFloat(st.marginRight) + parseFloat(st.paddingRight);
    h.el.style.margin = (-oben) + 'px ' + (-rechts) + 'px ' + oben + 'px ' + (-links) + 'px';
    document.body.insertBefore(h.el, document.body.firstChild);
  }

  /* ---------- Sprung nach oben ---------- */
  function nachOben(ev) {
    if (ev) ev.preventDefault();
    var sanft = !window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: sanft ? 'smooth' : 'auto' });
  }

  function seitenende() {
    var h = host('ende');
    h.root.innerHTML =
      '<style>' +
      ':host{all:initial;display:block}' +
      '.ende{display:flex;justify-content:center;padding:26px 16px 30px;font-family:' + SCHRIFT + '}' +
      'a{font-size:15px;font-weight:600;color:' + FARBE.blau + ';text-decoration:none;padding:8px 14px;border-radius:999px;border:1px solid ' + FARBE.linie + ';background:' + FARBE.papier + '}' +
      'a:hover{background:' + FARBE.blau + ';color:#fff;border-color:' + FARBE.blau + '}' +
      'a:focus-visible{outline:2px solid ' + FARBE.blau + ';outline-offset:3px}' +
      '</style>' +
      '<div class="ende"><a href="#" role="button">↑ Zum Seitenanfang</a></div>';
    h.root.querySelector('a').addEventListener('click', nachOben);

    /* Vor der Fußzeile der Plattform, sonst ans Ende des Hauptinhalts. */
    var fuss = document.querySelector('.fuss, .platform-footer');
    var main = document.querySelector('main');
    if (fuss && fuss.parentNode) fuss.parentNode.insertBefore(h.el, fuss);
    else if (main) main.appendChild(h.el);
    else document.body.appendChild(h.el);
    return h.el;
  }

  function pfeil() {
    var h = host('pfeil');
    h.root.innerHTML =
      '<style>' +
      ':host{all:initial}' +
      'button{position:fixed;right:clamp(12px,2vw,24px);bottom:clamp(14px,2.5vw,26px);z-index:60;width:42px;height:42px;border-radius:50%;' +
        'border:1px solid ' + FARBE.linie + ';background:' + FARBE.papier + ';color:' + FARBE.blau + ';font:700 18px/1 ' + SCHRIFT + ';' +
        'box-shadow:0 6px 18px rgba(42,52,58,.14);cursor:pointer;opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .2s,transform .2s}' +
      'button.da{opacity:.82;transform:none;pointer-events:auto}' +
      'button:hover{opacity:1;background:' + FARBE.blau + ';color:#fff;border-color:' + FARBE.blau + '}' +
      'button:focus-visible{outline:2px solid ' + FARBE.blau + ';outline-offset:3px;opacity:1}' +
      '@media print{button{display:none}}' +
      '</style>' +
      '<button type="button" aria-label="Zum Seitenanfang" title="Zum Seitenanfang" tabindex="-1">↑</button>';
    var knopf = h.root.querySelector('button');
    knopf.addEventListener('click', nachOben);
    document.body.appendChild(h.el);
    return knopf;
  }

  function start() {
    kopfzeile();
    var ende = seitenende();
    var knopf = pfeil();

    var wartet = false;
    function pruefen() {
      wartet = false;
      var lang = document.documentElement.scrollHeight > window.innerHeight * 1.4;
      ende.style.display = lang ? 'block' : 'none';
      var weit = window.scrollY > window.innerHeight * 0.9;
      knopf.classList.toggle('da', weit);
      knopf.tabIndex = weit ? 0 : -1;
    }
    function bald() { if (!wartet) { wartet = true; requestAnimationFrame(pruefen); } }
    window.addEventListener('scroll', bald, { passive: true });
    window.addEventListener('resize', bald);
    /* Reiterwechsel und aufklappende Lösungen verändern die Seitenhöhe. */
    if (window.ResizeObserver) new ResizeObserver(bald).observe(document.body);
    pruefen();
  }

  /* ---------- Wegenetz Stufe 3: stabile Direktlinks ----------
     Der Anker in der Adresse öffnet den Reiter, egal in welcher
     Bauweise die Seite gebaut ist:
       Vorlage:      #blatt-x  → button[data-blatt="x"]
       Sonderseite:  #t3       → button[data-tab="t3"]
     Plattformseiten öffnen den Reiter schon selbst (lehrwerk.js);
     hier wird nur geklickt, wenn der Reiter danach noch zu ist.
     Auf Sonderseiten merkt sich die Adresse beim Klick den Reiter
     (replaceState: kein Eintrag im Verlauf, Pfad bleibt gleich),
     damit Neuladen und Zurück-Taste dort wieder herauskommen. */
  function knoepfe() {
    return [].slice.call(document.querySelectorAll('button[data-tab], button[data-blatt]'));
  }
  function zielVon(b) {
    if (b.hasAttribute('data-tab')) return b.getAttribute('data-tab');
    var w = b.getAttribute('data-blatt');
    return w.indexOf('blatt-') === 0 ? w : 'blatt-' + w;
  }
  function offen(el) {
    return !el.hidden && el.getClientRects().length > 0;
  }
  function reiterAusAdresse() {
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
    if (!id) return;
    var ziel = document.getElementById(id);
    if (!ziel || offen(ziel)) return;
    var knopf = knoepfe().filter(function (b) { return zielVon(b) === id && !b.disabled; })[0];
    if (knopf) knopf.click();
  }
  function reiterMerken() {
    knoepfe().forEach(function (b) {
      if (!b.hasAttribute('data-tab') || !document.getElementById(b.getAttribute('data-tab'))) return;
      b.addEventListener('click', function () {
        var h = '#' + b.getAttribute('data-tab');
        if (location.hash !== h) {
          try { history.replaceState(history.state, '', h); } catch (e) {}
        }
      });
    });
  }
  function direktlinks() {
    reiterMerken();
    /* Erst die Seite ihre eigene Logik ausführen lassen, dann nachsehen. */
    setTimeout(reiterAusAdresse, 0);
    window.addEventListener('hashchange', function () { setTimeout(reiterAusAdresse, 0); });
    window.addEventListener('pageshow', function (e) { if (e.persisted) reiterAusAdresse(); });
  }

  /* ---------- Wegenetz Stufe 4: Ausflüge im eigenen Tab ----------
     Ein Link auf einer Lernseite, der zu einer anderen Lernseite
     führt (z. B. Messe → Modalverben), öffnet einen neuen Tab.
     Der Unterricht bleibt im alten Tab genau so stehen, wie er war:
     Reiter, Scrollposition, Eingaben, Finn-Dialog, offene Kästen.
     Zurück geht es durch Klick auf den Tab (oder Strg + 1).
     Unverändert bleiben: Startseite und Bereichsübersichten,
     Kopfzeile und Menüs (führen zu Übersichten), Anker auf derselben
     Seite, Links mit „←“ (Rückwege) und alles mit eigenem target. */
  var KEINE_LERNORDNER = { assets: 1, data: 1, docs: 1, vorschau: 1, experimente: 1, tools: 1 };
  function lernseite(url) {
    var wurzel = new URL(WURZEL, location.href);
    if (url.href.indexOf(wurzel.href) !== 0) return false;
    var rest = url.pathname.slice(wurzel.pathname.length);
    var teile = rest.split('/');
    return teile.length > 1 && !KEINE_LERNORDNER[teile[0]] && /\.html?$/.test(rest);
  }
  function ausfluege() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (!a || a.hasAttribute('target') || a.hasAttribute('download')) return;
      if (/^\s*←/.test(a.textContent || '')) return;
      var ziel;
      try { ziel = new URL(a.getAttribute('href'), location.href); } catch (x) { return; }
      if (ziel.origin !== location.origin || ziel.pathname === location.pathname) return;
      if (!lernseite(new URL(location.href)) || !lernseite(ziel)) return;
      a.target = '_blank';
    });
  }

  function alles() { start(); direktlinks(); ausfluege(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', alles);
  else alles();
})();
