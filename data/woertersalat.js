/* Wiederkehrende Rubrik: Wörtersalat – was passt wann? */
(function () {
  function starten() {
    if (!/\/buero\/im-unternehmen-ankommen\.html$/.test(location.pathname)) return;
    const blatt = document.getElementById('blatt-zahlung');
    if (!blatt || document.getElementById('woertersalat-senden')) return;

    const begriffe = blatt.querySelector('.kontor-begriffe');
    if (!begriffe) return;

    const style = document.createElement('style');
    style.textContent = `
      .woertersalat{margin:1.4rem 0 2rem;padding:1.35rem 1.4rem;border:1px solid #d8c9e2;border-radius:16px;background:linear-gradient(135deg,#f7f0fa 0%,#fff 74%)}
      .woertersalat__kopf{display:flex;align-items:center;gap:.7rem;margin-bottom:.55rem}.woertersalat__kopf h3{margin:0;color:#6e4e7b}.woertersalat__icon{font-size:1.35rem}
      .woertersalat__intro{margin:.25rem 0 1rem;color:var(--tinte-weich)}
      .woertersalat__liste{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.7rem;margin:0 0 1rem}
      .woertersalat__wort{padding:.85rem .95rem;border:1px solid rgba(34,34,43,.1);border-radius:11px;background:rgba(255,255,255,.84)}
      .woertersalat__wort strong{display:block;margin-bottom:.18rem;color:#6e4e7b}.woertersalat__wort span{font-size:.9rem;color:var(--tinte-weich)}
      .woertersalat__beispiele{margin-top:.9rem;padding:1rem 1.05rem;border-radius:12px;background:#fff;border-left:4px solid #8d6a99}.woertersalat__beispiele p{margin:.35rem 0}
      @media(max-width:42rem){.woertersalat__liste{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);

    const box = document.createElement('section');
    box.className = 'woertersalat';
    box.id = 'woertersalat-senden';
    box.innerHTML = `
      <div class="woertersalat__kopf"><span class="woertersalat__icon" aria-hidden="true">🥗</span><h3>Wörtersalat – was passt wann?</h3></div>
      <p class="woertersalat__intro"><strong>senden · absenden · versenden · schicken · abschicken</strong> bedeuten Ähnliches – aber sie passen nicht in jeder Situation gleich gut.</p>
      <div class="woertersalat__liste">
        <div class="woertersalat__wort"><strong>senden</strong><span>neutral; oft technisch oder etwas formeller: <em>eine E-Mail senden</em></span></div>
        <div class="woertersalat__wort"><strong>schicken</strong><span>sehr häufig im Alltag und im Büro: <em>Ich schicke Ihnen die Unterlagen.</em></span></div>
        <div class="woertersalat__wort"><strong>absenden</strong><span>betont den Moment, in dem etwas auf den Weg geht: <em>Formular absenden</em></span></div>
        <div class="woertersalat__wort"><strong>abschicken</strong><span>alltagssprachlich; besonders bei Briefen und Paketen: <em>das Paket abschicken</em></span></div>
        <div class="woertersalat__wort"><strong>versenden</strong><span>geschäftlich/logistisch; oft organisierter oder regelmäßiger Versand: <em>Ware, Rechnungen oder Serienmails versenden</em></span></div>
      </div>
      <div class="woertersalat__beispiele">
        <strong>Typische Situationen</strong>
        <p>Onlineformular: <strong>absenden</strong></p>
        <p>„Ich ___ Ihnen die Datei gleich.“ → <strong>schicke</strong></p>
        <p>Das Lager ___ die Ware heute. → <strong>versendet</strong></p>
        <p>Der Brief wird heute noch ___. → <strong>abgeschickt</strong></p>
        <p>Button im Mailprogramm: <strong>Senden</strong></p>
      </div>`;

    begriffe.after(box);
  }

  if (document.readyState === 'complete') starten();
  else window.addEventListener('load', starten, { once: true });
})();
