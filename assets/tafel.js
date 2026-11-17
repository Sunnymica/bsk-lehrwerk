/* Tafel – Versuch (17.11.2026)
   Zeichenschicht über einer Lehrwerk-Seite, nur im Lehrkraft-Modus (?lehrkraft=1).
   Die Striche hängen an der Seite, nicht am Bildschirm: Sie scrollen mit, bleiben stehen,
   wenn der Stift aus ist, und werden pro Seite und Reiter im Browser der Lehrkraft gespeichert.
   Es wird nichts übertragen. Die TN sehen die Striche über die Bildschirmfreigabe. */
(function () {
  'use strict';
  try { if (localStorage.getItem('lw-lehrkraft') !== '1' && new URLSearchParams(location.search).get('lehrkraft') !== '1') return; } catch (e) { return; }
  if (new URLSearchParams(location.search).get('lehrkraft') === '0') return;

  var flaeche = document.querySelector('main.modul') || document.querySelector('main');
  if (!flaeche) return;
  var SPEICHER = 'lw-tafel-v1';
  var seite = location.pathname.split('/').slice(-2).join('/');
  function blattId() { var b = [].filter.call(document.querySelectorAll('.blatt'), function (s) { return !s.hidden; })[0]; return b ? b.id : 'seite'; }
  function laden() { try { return JSON.parse(localStorage.getItem(SPEICHER) || '{}'); } catch (e) { return {}; } }
  function sichern() { try { var a = laden(); a[seite + '#' + blattId()] = striche; localStorage.setItem(SPEICHER, JSON.stringify(a)); } catch (e) { /* voll oder gesperrt */ } }

  var css = document.createElement('style');
  css.textContent =
    '.tf-flaeche{position:absolute;left:0;top:0;z-index:30;pointer-events:none}' +
    '.tf-flaeche.an{pointer-events:auto;cursor:crosshair;touch-action:none}' +
    '.tf-leiste{position:fixed;left:50%;bottom:.9rem;transform:translateX(-50%);z-index:70;display:flex;align-items:center;gap:.35rem;background:#fff;border:2px solid #31536F;border-radius:999px;padding:.3rem .5rem;box-shadow:0 6px 18px rgba(0,0,0,.18);font:600 .9rem system-ui,sans-serif}' +
    '.tf-leiste button{font:inherit;border:1.5px solid #cfcabd;background:#fff;border-radius:999px;padding:.3rem .75rem;cursor:pointer;color:#22222b}' +
    '.tf-leiste button[aria-pressed="true"]{background:#31536F;border-color:#31536F;color:#fff}' +
    '.tf-leiste .tf-farbe{width:1.7rem;height:1.7rem;padding:0;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1.5px #cfcabd}' +
    '.tf-leiste .tf-farbe[aria-pressed="true"]{box-shadow:0 0 0 3px #22222b}' +
    '.tf-leiste [hidden]{display:none}' +
    '@media print{.tf-leiste{display:none}}';
  document.head.appendChild(css);

  if (getComputedStyle(flaeche).position === 'static') flaeche.style.position = 'relative';
  var canvas = document.createElement('canvas'); canvas.className = 'tf-flaeche'; canvas.setAttribute('aria-hidden', 'true');
  flaeche.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var striche = [], aktuell = null, an = false;
  var werkzeug = { farbe: '#C0392B', marker: false };

  function groesse() {
    var b = flaeche.clientWidth, h = flaeche.scrollHeight, dpr = Math.min(window.devicePixelRatio || 1, 2);
    while (h * dpr > 16000 && dpr > 0.5) dpr -= 0.25;
    if (canvas.width !== Math.round(b * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(b * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = b + 'px'; canvas.style.height = h + 'px';
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    malen();
  }
  function strich(s) {
    if (!s.p.length) return;
    ctx.globalAlpha = s.m ? 0.35 : 1; ctx.strokeStyle = s.f; ctx.lineWidth = s.m ? 20 : 3.5; ctx.lineCap = s.m ? 'butt' : 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(s.p[0][0], s.p[0][1]);
    if (s.p.length === 1) ctx.lineTo(s.p[0][0] + 0.1, s.p[0][1] + 0.1);
    for (var i = 1; i < s.p.length; i++) ctx.lineTo(s.p[i][0], s.p[i][1]);
    ctx.stroke(); ctx.globalAlpha = 1;
  }
  function malen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    striche.forEach(strich); if (aktuell) strich(aktuell);
  }
  function punkt(e) { var r = canvas.getBoundingClientRect(); return [Math.round((e.clientX - r.left) * 10) / 10, Math.round((e.clientY - r.top) * 10) / 10]; }

  canvas.addEventListener('pointerdown', function (e) {
    if (!an || e.button > 0) return;
    canvas.setPointerCapture(e.pointerId);
    aktuell = { f: werkzeug.farbe, m: werkzeug.marker, p: [punkt(e)] }; malen(); e.preventDefault();
  });
  canvas.addEventListener('pointermove', function (e) {
    if (!aktuell) return;
    var p = punkt(e), l = aktuell.p[aktuell.p.length - 1];
    if (Math.abs(p[0] - l[0]) + Math.abs(p[1] - l[1]) < 1.5) return;
    aktuell.p.push(p); malen();
  });
  function fertig() { if (!aktuell) return; striche.push(aktuell); aktuell = null; sichern(); malen(); zeigen(); }
  canvas.addEventListener('pointerup', fertig); canvas.addEventListener('pointercancel', fertig);

  /* Leiste */
  var leiste = document.createElement('div'); leiste.className = 'tf-leiste';
  function knopf(text, titel, aktion, klasse) { var b = document.createElement('button'); b.type = 'button'; b.innerHTML = text; b.title = titel; if (klasse) b.className = klasse; b.addEventListener('click', aktion); leiste.appendChild(b); return b; }
  var stift = knopf('✏️ Tafel', 'Stift ein- und ausschalten (Esc)', function () { schalten(!an); });
  var farben = [['#C0392B', 'Rot'], ['#1F5FAE', 'Blau'], ['#22222B', 'Schwarz']].map(function (f) {
    var b = knopf('', f[1], function () { werkzeug.farbe = f[0]; werkzeug.marker = false; zeigen(); }, 'tf-farbe'); b.style.background = f[0]; b.setAttribute('data-f', f[0]); return b;
  });
  var marker = knopf('Marker', 'Gelb markieren', function () { werkzeug.marker = true; werkzeug.farbe = '#F5C400'; zeigen(); });
  var zurueck = knopf('↶', 'Letzten Strich zurücknehmen', function () { striche.pop(); sichern(); malen(); zeigen(); });
  var leeren = knopf('Leeren', 'Alle Striche in diesem Reiter löschen', function () { striche = []; sichern(); malen(); zeigen(); });
  document.body.appendChild(leiste);

  function schalten(neu) { an = neu; canvas.classList.toggle('an', an); zeigen(); }
  function zeigen() {
    stift.setAttribute('aria-pressed', an ? 'true' : 'false');
    stift.innerHTML = an ? '✏️ Stift an' : '✏️ Tafel';
    farben.forEach(function (b) { b.hidden = !an; b.setAttribute('aria-pressed', !werkzeug.marker && b.getAttribute('data-f') === werkzeug.farbe ? 'true' : 'false'); });
    marker.hidden = !an; marker.setAttribute('aria-pressed', werkzeug.marker ? 'true' : 'false');
    zurueck.hidden = !an || !striche.length; leeren.hidden = !an || !striche.length;
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && an) schalten(false); });

  function wechseln() { striche = laden()[seite + '#' + blattId()] || []; aktuell = null; groesse(); zeigen(); }
  [].forEach.call(document.querySelectorAll('.reiter button'), function (b) { b.addEventListener('click', function () { setTimeout(wechseln, 40); }); });
  if ('ResizeObserver' in window) new ResizeObserver(function () { groesse(); }).observe(flaeche);
  window.addEventListener('resize', groesse);
  setTimeout(wechseln, 60);
})();
