/* Mit dem Hausaufgaben-Editor erzeugt. */
window.BSK_HOMEWORK = [
  {
    "id": "formular-sprachbedarf-2026-08-28",
    "titel": "Formular Sprachbedarf",
    "beschreibung": "Bitte Formular zum Ende der Woche ausfüllen",
    "faellig": "2026-08-28",
    "aufgaben": [
      "Link anklicken, ausfüllen und fertig"
    ],
    "links": [
      {
        "label": "Sprachbedarf",
        "href": "https://docs.google.com/forms/d/e/1FAIpQLSd108ul2rtFjpSbXhFUUzsORhzbUB72HtC3lMnam4v469ldyg/viewform?usp=sharing&ouid=118040984705553612899"
      }
    ]
  }
];

/* KONTOR-Einstieg: lokaler UI-Aufbau für buero/im-unternehmen-ankommen.html.
   Die fachlichen Folgeübungen bleiben unverändert. */
(function () {
  if (!/\/buero\/im-unternehmen-ankommen\.html$/.test(location.pathname)) return;

  const blatt = document.getElementById('blatt-menschen');
  if (!blatt || blatt.dataset.kontorUi === '1') return;
  blatt.dataset.kontorUi = '1';

  const style = document.createElement('style');
  style.textContent = `
    .kontor-einstieg{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(18rem,.95fr);margin:1.2rem 0 2rem;border:1px solid var(--linie);border-radius:18px;overflow:hidden;background:linear-gradient(135deg,#fbf2f3 0%,#fff 72%);box-shadow:0 14px 34px rgba(34,34,43,.07)}
    .kontor-einstieg__text{padding:clamp(1.4rem,3.2vw,2.4rem)}
    .kontor-einstieg__text h2{margin:0 0 .75rem;color:var(--rose-tief);font-size:clamp(1.65rem,3vw,2.35rem)}
    .kontor-einstieg__text p{max-width:35rem}
    .kontor-fakten{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:1.2rem}
    .kontor-fakt{display:inline-flex;align-items:center;gap:.45rem;padding:.48rem .72rem;border:1px solid rgba(34,34,43,.08);border-radius:999px;background:rgba(255,255,255,.82);font-size:.9rem}
    .kontor-einstieg__bild{position:relative;min-height:18rem;display:grid;place-items:center;background:radial-gradient(circle at 80% 18%,rgba(255,255,255,.95) 0 3.4rem,transparent 3.5rem),linear-gradient(145deg,#dfeaec 0%,#eef1ea 48%,#e6d9cd 100%);overflow:hidden}
    .kontor-einstieg__bild:before{content:"";position:absolute;inset:15% 12% 22%;border:2px solid rgba(31,72,87,.22);border-radius:12px;background:linear-gradient(90deg,transparent 49.5%,rgba(31,72,87,.14) 50%,transparent 50.5%),linear-gradient(transparent 49.5%,rgba(31,72,87,.14) 50%,transparent 50.5%),rgba(255,255,255,.34)}
    .kontor-einstieg__bild:after{content:"KONTOR";position:absolute;left:9%;top:12%;font-family:var(--display);font-weight:700;letter-spacing:.08em;color:rgba(31,72,87,.72);font-size:1.15rem}
    .kontor-buerofigur{position:absolute;bottom:15%;width:4.2rem;height:7.8rem}.kontor-buerofigur:before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%);width:2.6rem;height:2.6rem;border-radius:50%;background:#d7b39b}.kontor-buerofigur:after{content:"";position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:4.2rem;height:5.4rem;border-radius:1.6rem 1.6rem .55rem .55rem;background:#31596a}.kontor-buerofigur--1{left:22%;transform:scale(.82);opacity:.8}.kontor-buerofigur--2{left:45%;transform:scale(.95)}.kontor-buerofigur--3{right:18%;transform:scale(.78);opacity:.82}
    .kontor-teamkopf{display:flex;align-items:center;gap:.65rem;margin:2.1rem 0 .45rem}.kontor-teamkopf h2{margin:0}.kontor-teamicon{font-size:1.4rem;color:var(--rose-tief)}
    .kontor-team{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.75rem;margin:1rem 0 1.7rem}
    .kontor-person{display:flex;flex-direction:column;min-width:0;padding:1rem .85rem .85rem;border:1px solid var(--linie);border-radius:14px;background:var(--karte);text-align:center;box-shadow:0 8px 20px rgba(34,34,43,.045)}
    .kontor-avatar{width:5.4rem;height:5.4rem;margin:0 auto .75rem;display:grid;place-items:center;border-radius:50%;font-family:var(--display);font-size:1.55rem;font-weight:700;color:#fff;border:.35rem solid rgba(255,255,255,.82);box-shadow:0 0 0 1px var(--linie)}
    .kontor-avatar--k{background:linear-gradient(145deg,#7f3d4e,#b86b7d)}.kontor-avatar--s{background:linear-gradient(145deg,#2f697a,#5d91a0)}.kontor-avatar--n{background:linear-gradient(145deg,#4e7659,#82a58a)}.kontor-avatar--j{background:linear-gradient(145deg,#334f66,#668097)}.kontor-avatar--p{background:linear-gradient(145deg,#665548,#95806e)}
    .kontor-person strong{font-size:1rem;line-height:1.2}.kontor-person .rolle{margin:.35rem 0 .45rem;color:var(--rose-tief);font-weight:600;font-size:.86rem;line-height:1.35}.kontor-person .kurz{margin:0 0 .8rem;color:var(--tinte-weich);font-size:.82rem;line-height:1.45}.kontor-person .bereich{margin-top:auto;padding:.38rem .45rem;border-radius:999px;background:var(--himmel);color:var(--himmel-tief);font-size:.73rem;font-weight:600}.kontor-person:nth-child(1) .bereich{background:var(--rose);color:var(--rose-tief)}.kontor-person:nth-child(3) .bereich{background:var(--salbei);color:var(--salbei-tief)}.kontor-person:nth-child(4) .bereich{background:var(--sand);color:var(--sand-tief)}
    .kontor-aufgabe{margin:1.4rem 0 2rem;padding:1.25rem 1.35rem;border:1px solid #eadfc7;border-radius:14px;background:linear-gradient(135deg,#fff8e9,#fffdf9)}.kontor-aufgabe h2{margin-top:0}.kontor-organigramm-kopf{margin-top:2.2rem}
    @media(max-width:68rem){.kontor-team{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:48rem){.kontor-einstieg{grid-template-columns:1fr}.kontor-einstieg__bild{min-height:13rem}.kontor-team{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:30rem){.kontor-team{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const stand = blatt.querySelector('.stand-hinweis');
  const alterTitel = stand && stand.nextElementSibling;
  const alterText = alterTitel && alterTitel.nextElementSibling;
  const organigramm = alterText && alterText.nextElementSibling;
  if (!stand || !alterTitel || !alterText || !organigramm || !organigramm.classList.contains('organigramm')) return;

  const hero = document.createElement('section');
  hero.className = 'kontor-einstieg';
  hero.setAttribute('aria-labelledby', 'kontor-willkommen');
  hero.innerHTML = `
    <div class="kontor-einstieg__text">
      <h2 id="kontor-willkommen">Willkommen bei KONTOR</h2>
      <p>KONTOR ist ein Handelsunternehmen für Bürobedarf. Wir arbeiten in verschiedenen Bereichen – und im Team.</p>
      <p>Hier lernen Sie die fünf Personen kennen, die Ihnen in den Modulen immer wieder begegnen werden.</p>
      <div class="kontor-fakten" aria-label="KONTOR auf einen Blick">
        <span class="kontor-fakt">👥 5 Personen</span><span class="kontor-fakt">🏢 4 Bereiche</span><span class="kontor-fakt">◷ ca. 15–20 Min.</span>
      </div>
    </div>
    <div class="kontor-einstieg__bild" role="img" aria-label="Stilisierte Büroszene bei KONTOR"><span class="kontor-buerofigur kontor-buerofigur--1"></span><span class="kontor-buerofigur kontor-buerofigur--2"></span><span class="kontor-buerofigur kontor-buerofigur--3"></span></div>`;

  const teamkopf = document.createElement('div');
  teamkopf.className = 'kontor-teamkopf';
  teamkopf.innerHTML = '<span class="kontor-teamicon" aria-hidden="true">👥</span><h2>Unser Team</h2>';

  const teamIntro = document.createElement('p');
  teamIntro.textContent = 'Diese fünf Personen arbeiten bei KONTOR. Lernen Sie ihre Namen, Funktionen und Bereiche kennen.';

  const team = document.createElement('div');
  team.className = 'kontor-team';
  team.innerHTML = `
    <article class="kontor-person"><div class="kontor-avatar kontor-avatar--k" aria-hidden="true">KM</div><strong>Kateryna Melnyk</strong><p class="rolle">Geschäftsführerin</p><p class="kurz">Sie leitet das Unternehmen und trifft wichtige Entscheidungen.</p><span class="bereich">Geschäftsführung</span></article>
    <article class="kontor-person"><div class="kontor-avatar kontor-avatar--s" aria-hidden="true">SH</div><strong>Samira Haddad</strong><p class="rolle">Leiterin Personal und Verwaltung</p><p class="kurz">Sie ist für das Team, Verträge und viele organisatorische Dinge zuständig.</p><span class="bereich">Personal &amp; Verwaltung</span></article>
    <article class="kontor-person"><div class="kontor-avatar kontor-avatar--n" aria-hidden="true">NS</div><strong>Nora Seidel</strong><p class="rolle">Sachbearbeiterin Einkauf</p><p class="kurz">Sie bestellt Waren und vergleicht Angebote von Lieferanten.</p><span class="bereich">Einkauf</span></article>
    <article class="kontor-person"><div class="kontor-avatar kontor-avatar--j" aria-hidden="true">JB</div><strong>Jonas Becker</strong><p class="rolle">Mitarbeiter Verkauf und Kundenservice</p><p class="kurz">Er berät Kunden, bearbeitet Anfragen und erstellt Angebote.</p><span class="bereich">Verkauf &amp; Kundenservice</span></article>
    <article class="kontor-person"><div class="kontor-avatar kontor-avatar--p" aria-hidden="true">PN</div><strong>Pawel Nowak</strong><p class="rolle">Teamleiter Lager und Versand</p><p class="kurz">Er organisiert das Lager und den Versand der Bestellungen.</p><span class="bereich">Lager &amp; Versand</span></article>`;

  const aufgabe = document.createElement('section');
  aufgabe.className = 'kontor-aufgabe';
  aufgabe.innerHTML = '<h2>1. Wer ist wer?</h2><p>Ordnen Sie die fünf Namen den Funktionen und Bereichen zu.</p><div id="z-team"></div><p class="rueckmeldung" id="z-team-rueck" hidden></p>';

  stand.after(hero, teamkopf, teamIntro, team, aufgabe);
  alterTitel.remove();
  alterText.remove();

  const ogTitel = document.createElement('h2');
  ogTitel.className = 'kontor-organigramm-kopf';
  ogTitel.textContent = 'So arbeitet KONTOR zusammen';
  const ogText = document.createElement('p');
  ogText.textContent = 'Jetzt kennen Sie die Personen. Hier sehen Sie, wie die Zuständigkeiten im Unternehmen angeordnet sind.';
  aufgabe.after(ogTitel, ogText, organigramm);

  let h2 = organigramm.nextElementSibling;
  if (h2 && h2.tagName === 'H2' && h2.textContent.trim() === 'Wer sagt das?') h2.textContent = '2. Wer sagt das?';

  const headings = Array.from(blatt.querySelectorAll('h2'));
  const altesWerIstWer = headings.find(el => el.textContent.trim() === 'Wer ist wer?');
  if (altesWerIstWer) {
    altesWerIstWer.textContent = 'Rollen im Unternehmen';
    const p = altesWerIstWer.nextElementSibling;
    if (p && p.tagName === 'P') p.textContent = 'Ordnen Sie die Bezeichnungen den passenden Erklärungen zu.';
  }

  if (window.Lehrwerk && typeof Lehrwerk.zuordnen === 'function') {
    Lehrwerk.zuordnen('z-team', {
      rueck: 'z-team-rueck',
      paare: [
        { id: 't1', links: 'Kateryna Melnyk', rechts: 'Geschäftsführung – leitet das Unternehmen und trifft wichtige Entscheidungen' },
        { id: 't2', links: 'Samira Haddad', rechts: 'Personal & Verwaltung – organisiert Personalthemen und interne Abläufe' },
        { id: 't3', links: 'Nora Seidel', rechts: 'Einkauf – bestellt Waren und vergleicht Angebote' },
        { id: 't4', links: 'Jonas Becker', rechts: 'Verkauf & Kundenservice – berät Kunden und erstellt Angebote' },
        { id: 't5', links: 'Pawel Nowak', rechts: 'Lager & Versand – organisiert Lager und Auslieferung' }
      ]
    });
  }
})();

/* KONTOR: persönlicher Transfer nach der Rollenübung. */
(function () {
  if (!/\/buero\/im-unternehmen-ankommen\.html$/.test(location.pathname)) return;

  const blatt = document.getElementById('blatt-menschen');
  if (!blatt || document.getElementById('kontor-transfer')) return;

  const rollenTitel = Array.from(blatt.querySelectorAll('h2')).find(el => el.textContent.trim() === 'Rollen im Unternehmen');
  if (!rollenTitel) return;

  const rollenText = rollenTitel.nextElementSibling;
  const rollenUebung = rollenText && rollenText.nextElementSibling;
  const rollenRueck = rollenUebung && rollenUebung.nextElementSibling;
  const anker = rollenRueck && rollenRueck.id === 'z-personen-rueck' ? rollenRueck : rollenUebung;
  if (!anker) return;

  const style = document.createElement('style');
  style.textContent = `
    .kontor-transfer{margin:2rem 0;padding:1.45rem 1.5rem 1.35rem;border:1px solid #cadfda;border-radius:16px;background:linear-gradient(135deg,#edf6f3 0%,#fbfdfc 72%)}
    .kontor-transfer__kopf{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:.5rem}
    .kontor-transfer__kopf h2{margin:0;color:var(--salbei-tief)}
    .kontor-transfer__modus{flex:0 0 auto;padding:.32rem .65rem;border-radius:999px;background:#fff;border:1px solid rgba(34,34,43,.1);font-family:var(--mono);font-size:.66rem;letter-spacing:.04em;color:var(--tinte-weich)}
    .kontor-transfer__hinweis{margin:.4rem 0 1rem;color:var(--tinte-weich)}
    .kontor-transfer__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem 1rem}
    .kontor-transfer__feld{display:grid;gap:.3rem}
    .kontor-transfer__feld label{font-weight:600;font-size:.9rem}
    .kontor-transfer__feld textarea{min-height:3.2rem;resize:vertical;margin:0}
    .kontor-transfer__sprechauftrag{margin:1.1rem 0 0;padding:1rem 1.05rem;border-radius:12px;background:rgba(255,255,255,.72);border-left:4px solid var(--salbei-tief)}
    .kontor-transfer__sprechauftrag strong{display:block;margin-bottom:.3rem}
    @media(max-width:42rem){.kontor-transfer__kopf{display:block}.kontor-transfer__modus{display:inline-block;margin-top:.55rem}.kontor-transfer__grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const transfer = document.createElement('section');
  transfer.className = 'kontor-transfer';
  transfer.id = 'kontor-transfer';
  transfer.innerHTML = `
    <div class="kontor-transfer__kopf">
      <h2>Und bei Ihnen im Betrieb?</h2>
      <span class="kontor-transfer__modus">allein · zu zweit · Kleingruppe</span>
    </div>
    <p class="kontor-transfer__hinweis">Notieren Sie zuerst nur Stichwörter. Wenn Sie gerade nicht arbeiten, wählen Sie einen früheren Betrieb, ein Praktikum oder Ihren Wunscharbeitsplatz.</p>
    <div class="kontor-transfer__grid">
      <div class="kontor-transfer__feld"><label for="transfer-rolle">Meine Rolle / Tätigkeit</label><textarea class="feld" id="transfer-rolle" rows="2" placeholder="z. B. Sachbearbeiterin, Fahrer, Verkäuferin …"></textarea></div>
      <div class="kontor-transfer__feld"><label for="transfer-bereich">Meine Abteilung / mein Bereich</label><textarea class="feld" id="transfer-bereich" rows="2" placeholder="z. B. Einkauf, Lager, Verwaltung …"></textarea></div>
      <div class="kontor-transfer__feld"><label for="transfer-zustaendig">Dafür bin ich zuständig</label><textarea class="feld" id="transfer-zustaendig" rows="2" placeholder="z. B. Bestellungen prüfen, Kunden beraten …"></textarea></div>
      <div class="kontor-transfer__feld"><label for="transfer-ansprechperson">Meine direkte Ansprechperson</label><textarea class="feld" id="transfer-ansprechperson" rows="2" placeholder="Name oder Funktion"></textarea></div>
      <div class="kontor-transfer__feld"><label for="transfer-vorgesetzt">Meine Vorgesetzte / mein Vorgesetzter</label><textarea class="feld" id="transfer-vorgesetzt" rows="2" placeholder="Name oder Funktion"></textarea></div>
      <div class="kontor-transfer__feld"><label for="transfer-kollegen">Mit diesen Kolleginnen und Kollegen arbeite ich oft zusammen</label><textarea class="feld" id="transfer-kollegen" rows="2" placeholder="Personen, Teams oder Abteilungen"></textarea></div>
    </div>
    <div class="kontor-transfer__sprechauftrag">
      <strong>Jetzt sprechen</strong>
      Tauschen Sie sich zu zweit oder in einer kleinen Gruppe aus. Nutzen Sie Ihre Notizen, aber lesen Sie nicht nur vor. Stellen Sie anschließend sich selbst oder eine Person aus Ihrer Gruppe kurz im Kurs vor.
    </div>`;

  anker.after(transfer);

  if (window.Lehrwerk && typeof Lehrwerk.frei === 'function') {
    ['transfer-rolle','transfer-bereich','transfer-zustaendig','transfer-ansprechperson','transfer-vorgesetzt','transfer-kollegen'].forEach(id => Lehrwerk.frei(id));
  }
})();

/* KONTOR: persönlicher Einstieg in Orte und Arbeitsmittel. */
(function () {
  if (!/\/buero\/im-unternehmen-ankommen\.html$/.test(location.pathname)) return;

  const blatt = document.getElementById('blatt-orte');
  if (!blatt || document.getElementById('kontor-orte-einstieg')) return;

  const ersterTitel = Array.from(blatt.querySelectorAll('h2')).find(el => el.textContent.trim() === 'So ist KONTOR aufgeteilt');
  if (!ersterTitel) return;

  const style = document.createElement('style');
  style.textContent = `
    .kontor-orte-einstieg{margin:1.2rem 0 2rem;padding:1.5rem;border:1px solid #d8d1e8;border-radius:16px;background:linear-gradient(135deg,#f4f0fa 0%,#fdfcff 72%)}
    .kontor-orte-einstieg__kopf{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:.55rem}
    .kontor-orte-einstieg__kopf h2{margin:0;color:#62517b}
    .kontor-orte-einstieg__modus{flex:0 0 auto;padding:.32rem .65rem;border-radius:999px;background:#fff;border:1px solid rgba(34,34,43,.1);font-family:var(--mono);font-size:.66rem;letter-spacing:.04em;color:var(--tinte-weich)}
    .kontor-orte-einstieg__hinweis{margin:.35rem 0 1rem;color:var(--tinte-weich)}
    .kontor-orte-einstieg__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem 1rem}
    .kontor-orte-einstieg__feld{display:grid;gap:.3rem}
    .kontor-orte-einstieg__feld label{font-weight:600;font-size:.9rem}
    .kontor-orte-einstieg__feld textarea{min-height:3.2rem;resize:vertical;margin:0}
    .kontor-orte-einstieg__sprechauftrag{margin:1.1rem 0 0;padding:1rem 1.05rem;border-radius:12px;background:rgba(255,255,255,.78);border-left:4px solid #7d6b98}
    .kontor-orte-einstieg__sprechauftrag strong{display:block;margin-bottom:.3rem}
    @media(max-width:42rem){.kontor-orte-einstieg__kopf{display:block}.kontor-orte-einstieg__modus{display:inline-block;margin-top:.55rem}.kontor-orte-einstieg__grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const einstieg = document.createElement('section');
  einstieg.className = 'kontor-orte-einstieg';
  einstieg.id = 'kontor-orte-einstieg';
  einstieg.innerHTML = `
    <div class="kontor-orte-einstieg__kopf">
      <h2>Neu bei der Arbeit – wie war das bei Ihnen?</h2>
      <span class="kontor-orte-einstieg__modus">allein · zu zweit · Kleingruppe</span>
    </div>
    <p class="kontor-orte-einstieg__hinweis">Erinnern Sie sich an Ihren ersten Tag bei einem Arbeitgeber. Notieren Sie nur Stichwörter.</p>
    <div class="kontor-orte-einstieg__grid">
      <div class="kontor-orte-einstieg__feld"><label for="orte-erster-weg">Wohin mussten Sie am ersten Tag zuerst?</label><textarea class="feld" id="orte-erster-weg" rows="2" placeholder="z. B. Personalabteilung, Empfang, Büro …"></textarea></div>
      <div class="kontor-orte-einstieg__feld"><label for="orte-abteilung">Welche Abteilung mussten Sie finden?</label><textarea class="feld" id="orte-abteilung" rows="2" placeholder="Abteilung oder Bereich"></textarea></div>
      <div class="kontor-orte-einstieg__feld"><label for="orte-material">Wo bekamen Sie Arbeitsmaterial oder Unterlagen?</label><textarea class="feld" id="orte-material" rows="2" placeholder="z. B. im Büro, im Lager, bei …"></textarea></div>
      <div class="kontor-orte-einstieg__feld"><label for="orte-fragen">Wen konnten Sie fragen?</label><textarea class="feld" id="orte-fragen" rows="2" placeholder="Person oder Funktion"></textarea></div>
      <div class="kontor-orte-einstieg__feld"><label for="orte-schwierig">Was war am Anfang schwierig?</label><textarea class="feld" id="orte-schwierig" rows="2" placeholder="z. B. Räume finden, Namen merken …"></textarea></div>
      <div class="kontor-orte-einstieg__feld"><label for="orte-hilfe">Was hat Ihnen geholfen?</label><textarea class="feld" id="orte-hilfe" rows="2" placeholder="z. B. Kolleginnen, Plan, Nachfragen …"></textarea></div>
    </div>
    <div class="kontor-orte-einstieg__sprechauftrag">
      <strong>Jetzt sprechen</strong>
      Vergleichen Sie Ihre Erfahrungen zu zweit oder in einer kleinen Gruppe. Stellen Sie anschließend kurz vor, wie der Einstieg bei Ihnen oder bei einer Person aus Ihrer Gruppe war.
    </div>`;

  ersterTitel.before(einstieg);
  ersterTitel.textContent = 'Sie sind neu bei KONTOR. Wo finden Sie wen?';
  const p = ersterTitel.nextElementSibling;
  if (p && p.classList && p.classList.contains('grundriss')) {
    // kein Begleittext vorhanden
  } else if (p && p.tagName === 'P') {
    p.textContent = 'Jetzt wechseln Sie zu KONTOR: Welche Räume und Bereiche brauchen Sie am ersten Arbeitstag?';
  } else {
    const intro = document.createElement('p');
    intro.textContent = 'Jetzt wechseln Sie zu KONTOR: Welche Räume und Bereiche brauchen Sie am ersten Arbeitstag?';
    ersterTitel.after(intro);
  }

  if (window.Lehrwerk && typeof Lehrwerk.frei === 'function') {
    ['orte-erster-weg','orte-abteilung','orte-material','orte-fragen','orte-schwierig','orte-hilfe'].forEach(id => Lehrwerk.frei(id));
  }
})();

/* KONTOR: persönlicher Einstieg in Produkte und Geschäftsbeziehungen. */
(function () {
  if (!/\/buero\/im-unternehmen-ankommen\.html$/.test(location.pathname)) return;

  const blatt = document.getElementById('blatt-produkte');
  if (!blatt || document.getElementById('kontor-produkte-einstieg')) return;

  const ersterTitel = Array.from(blatt.querySelectorAll('h2')).find(el => el.textContent.trim() === 'So läuft ein Auftrag durch KONTOR');
  if (!ersterTitel) return;

  const style = document.createElement('style');
  style.textContent = `
    .kontor-produkte-einstieg{margin:1.2rem 0 2rem;padding:1.5rem;border:1px solid #ead7c2;border-radius:16px;background:linear-gradient(135deg,#fff6e9 0%,#fffdf9 72%)}
    .kontor-produkte-einstieg__kopf{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:.55rem}
    .kontor-produkte-einstieg__kopf h2{margin:0;color:#8a5f38}
    .kontor-produkte-einstieg__modus{flex:0 0 auto;padding:.32rem .65rem;border-radius:999px;background:#fff;border:1px solid rgba(34,34,43,.1);font-family:var(--mono);font-size:.66rem;letter-spacing:.04em;color:var(--tinte-weich)}
    .kontor-produkte-einstieg__hinweis{margin:.35rem 0 1rem;color:var(--tinte-weich)}
    .kontor-produkte-einstieg__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem 1rem}
    .kontor-produkte-einstieg__feld{display:grid;gap:.3rem}
    .kontor-produkte-einstieg__feld label{font-weight:600;font-size:.9rem}
    .kontor-produkte-einstieg__feld textarea{min-height:3.2rem;resize:vertical;margin:0}
    .kontor-produkte-einstieg__sprechauftrag{margin:1.1rem 0 0;padding:1rem 1.05rem;border-radius:12px;background:rgba(255,255,255,.78);border-left:4px solid #b07d4f}
    .kontor-produkte-einstieg__sprechauftrag strong{display:block;margin-bottom:.3rem}
    @media(max-width:42rem){.kontor-produkte-einstieg__kopf{display:block}.kontor-produkte-einstieg__modus{display:inline-block;margin-top:.55rem}.kontor-produkte-einstieg__grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const einstieg = document.createElement('section');
  einstieg.className = 'kontor-produkte-einstieg';
  einstieg.id = 'kontor-produkte-einstieg';
  einstieg.innerHTML = `
    <div class="kontor-produkte-einstieg__kopf">
      <h2>Was passiert in Ihrer Firma, wenn ein Kunde oder ein Geschäftspartner etwas möchte?</h2>
      <span class="kontor-produkte-einstieg__modus">allein · zu zweit · Kleingruppe</span>
    </div>
    <p class="kontor-produkte-einstieg__hinweis">Denken Sie an einen typischen Vorgang in Ihrem Betrieb. Das kann eine Ware oder eine Dienstleistung sein. Notieren Sie nur Stichwörter.</p>
    <div class="kontor-produkte-einstieg__grid">
      <div class="kontor-produkte-einstieg__feld"><label for="produkte-wunsch">Was möchte der Kunde oder Geschäftspartner?</label><textarea class="feld" id="produkte-wunsch" rows="2" placeholder="z. B. Ware kaufen, Geld überweisen, etwas bestellen …"></textarea></div>
      <div class="kontor-produkte-einstieg__feld"><label for="produkte-kontakt">Wer nimmt die Anfrage oder den Wunsch entgegen?</label><textarea class="feld" id="produkte-kontakt" rows="2" placeholder="Person, Team oder Abteilung"></textarea></div>
      <div class="kontor-produkte-einstieg__feld"><label for="produkte-schritt">Was passiert als Nächstes?</label><textarea class="feld" id="produkte-schritt" rows="2" placeholder="z. B. prüfen, beraten, vorbereiten, bestellen …"></textarea></div>
      <div class="kontor-produkte-einstieg__feld"><label for="produkte-bearbeitung">Wer bearbeitet den Vorgang weiter?</label><textarea class="feld" id="produkte-bearbeitung" rows="2" placeholder="Person, Team oder Abteilung"></textarea></div>
      <div class="kontor-produkte-einstieg__feld"><label for="produkte-ergebnis">Was bekommt der Kunde oder Geschäftspartner am Ende?</label><textarea class="feld" id="produkte-ergebnis" rows="2" placeholder="z. B. Ware, Dienstleistung, Auszahlung, Bestätigung …"></textarea></div>
      <div class="kontor-produkte-einstieg__feld"><label for="produkte-beleg">Gibt es eine Rechnung, einen Beleg oder eine Bestätigung?</label><textarea class="feld" id="produkte-beleg" rows="2" placeholder="Was bekommt oder unterschreibt die Person?"></textarea></div>
    </div>
    <div class="kontor-produkte-einstieg__sprechauftrag">
      <strong>Jetzt sprechen</strong>
      Vergleichen Sie Ihre Abläufe zu zweit oder in einer kleinen Gruppe. Was ist ähnlich, was läuft anders? Stellen Sie anschließend einen typischen Ablauf aus Ihrer Gruppe kurz im Kurs vor.
    </div>`;

  ersterTitel.before(einstieg);
  ersterTitel.textContent = 'So läuft ein Auftrag bei KONTOR';
  const intro = document.createElement('p');
  intro.textContent = 'Jetzt schauen Sie sich den Ablauf bei KONTOR an: von der ersten Anfrage bis zur Rechnung.';
  ersterTitel.after(intro);

  if (window.Lehrwerk && typeof Lehrwerk.frei === 'function') {
    ['produkte-wunsch','produkte-kontakt','produkte-schritt','produkte-bearbeitung','produkte-ergebnis','produkte-beleg'].forEach(id => Lehrwerk.frei(id));
  }
})();

/* KONTOR: vierter Reiter Einkauf, Verkauf und Zahlung. */
(function () {
  if (!/\/buero\/im-unternehmen-ankommen\.html$/.test(location.pathname)) return;
  if (document.getElementById('blatt-zahlung')) return;

  const reiter = document.querySelector('.reiter');
  const knopf = reiter && reiter.querySelector('button[disabled]');
  const produkte = document.getElementById('blatt-produkte');
  if (!reiter || !knopf || !produkte) return;

  knopf.disabled = false;
  knopf.dataset.blatt = 'zahlung';
  knopf.setAttribute('aria-controls','blatt-zahlung');
  knopf.innerHTML = 'Einkauf, Verkauf, Zahlung';

  const style = document.createElement('style');
  style.textContent = `
    .kontor-zahlung-einstieg{margin:1.2rem 0 2rem;padding:1.5rem;border:1px solid #cadfda;border-radius:16px;background:linear-gradient(135deg,#edf6f3 0%,#fbfdfc 72%)}
    .kontor-zahlung-einstieg__kopf{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:.55rem}.kontor-zahlung-einstieg__kopf h2{margin:0;color:var(--salbei-tief)}
    .kontor-zahlung-einstieg__modus{flex:0 0 auto;padding:.32rem .65rem;border-radius:999px;background:#fff;border:1px solid rgba(34,34,43,.1);font-family:var(--mono);font-size:.66rem;letter-spacing:.04em;color:var(--tinte-weich)}
    .kontor-zahlung-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem 1rem}.kontor-zahlung-feld{display:grid;gap:.3rem}.kontor-zahlung-feld label{font-weight:600;font-size:.9rem}.kontor-zahlung-feld textarea{min-height:3.2rem;resize:vertical;margin:0}
    .kontor-zahlung-sprechen{margin:1.1rem 0 0;padding:1rem 1.05rem;border-radius:12px;background:rgba(255,255,255,.76);border-left:4px solid var(--salbei-tief)}.kontor-zahlung-sprechen strong{display:block;margin-bottom:.3rem}
    .kontor-fall{margin:1.7rem 0;padding:1.25rem 1.35rem;border:1px solid #d9e1e8;border-radius:14px;background:linear-gradient(135deg,#eef4f8,#fff)}.kontor-fall h3{margin-top:0}.kontor-ablauf{display:flex;flex-wrap:wrap;align-items:center;gap:.35rem;margin:1rem 0}.kontor-ablauf span{flex:1 1 8rem;padding:.7rem .6rem;border:1px solid var(--linie);border-radius:8px;background:#fff;text-align:center;font-size:.9rem}.kontor-ablauf b{color:var(--tinte-weich)}
    .kontor-begriffe{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;margin:1rem 0}.kontor-begriff{padding:.9rem 1rem;border:1px solid var(--linie);border-radius:10px;background:var(--karte)}.kontor-begriff strong{display:block;margin-bottom:.2rem}.kontor-begriff span{color:var(--tinte-weich);font-size:.9rem}
    .kontor-transfer-zahlung{margin:1.7rem 0;padding:1.25rem 1.35rem;border:1px solid #ead7c2;border-radius:14px;background:linear-gradient(135deg,#fff6e9,#fffdf9)}
    @media(max-width:42rem){.kontor-zahlung-einstieg__kopf{display:block}.kontor-zahlung-einstieg__modus{display:inline-block;margin-top:.55rem}.kontor-zahlung-grid,.kontor-begriffe{grid-template-columns:1fr}.kontor-ablauf{flex-direction:column}.kontor-ablauf b{transform:rotate(90deg)}}
  `;
  document.head.appendChild(style);

  const blatt = document.createElement('section');
  blatt.className = 'blatt';
  blatt.id = 'blatt-zahlung';
  blatt.hidden = true;
  blatt.innerHTML = `
    <p class="stand-hinweis">Kernteil etwa 25–30 Minuten · Transfer noch einmal 15–20 Minuten</p>
    <section class="kontor-zahlung-einstieg">
      <div class="kontor-zahlung-einstieg__kopf"><h2>Einkaufen, verkaufen, bezahlen – wie läuft das bei Ihnen?</h2><span class="kontor-zahlung-einstieg__modus">allein · zu zweit · Kleingruppe</span></div>
      <p>Notieren Sie Stichwörter zu einem typischen Vorgang in Ihrem Betrieb.</p>
      <div class="kontor-zahlung-grid">
        <div class="kontor-zahlung-feld"><label for="zahlung-einkauf">Was kauft Ihre Firma ein?</label><textarea class="feld" id="zahlung-einkauf" rows="2" placeholder="Waren, Material oder Dienstleistungen"></textarea></div>
        <div class="kontor-zahlung-feld"><label for="zahlung-verkauf">Was verkauft oder bietet Ihre Firma an?</label><textarea class="feld" id="zahlung-verkauf" rows="2" placeholder="Produkte oder Dienstleistungen"></textarea></div>
        <div class="kontor-zahlung-feld"><label for="zahlung-besteller">Wer darf bestellen oder einen Auftrag auslösen?</label><textarea class="feld" id="zahlung-besteller" rows="2" placeholder="Person, Funktion oder Abteilung"></textarea></div>
        <div class="kontor-zahlung-feld"><label for="zahlung-zahlungsart">Wie wird normalerweise bezahlt?</label><textarea class="feld" id="zahlung-zahlungsart" rows="2" placeholder="z. B. Überweisung, Karte, bar, Rechnung …"></textarea></div>
        <div class="kontor-zahlung-feld"><label for="zahlung-pruefer">Wer prüft Rechnungen oder Zahlungen?</label><textarea class="feld" id="zahlung-pruefer" rows="2" placeholder="Person, Funktion oder Abteilung"></textarea></div>
        <div class="kontor-zahlung-feld"><label for="zahlung-fehlt">Was passiert, wenn eine Zahlung fehlt?</label><textarea class="feld" id="zahlung-fehlt" rows="2" placeholder="z. B. erinnern, nachfragen, mahnen …"></textarea></div>
      </div>
      <div class="kontor-zahlung-sprechen"><strong>Jetzt sprechen</strong>Vergleichen Sie Ihre Abläufe. Wo ähneln sich Einkauf, Verkauf und Zahlung – und wo unterscheiden sie sich? Stellen Sie anschließend einen Ablauf kurz vor.</div>
    </section>

    <h2>Ein Einkauf bei KONTOR</h2>
    <div class="kontor-fall"><h3>40 neue Bürostühle</h3><p>Bei KONTOR werden 40 neue Bürostühle gebraucht. Nora Seidel kümmert sich um den Einkauf. Was passiert von der Bedarfsmeldung bis zur Zahlung?</p><div class="kontor-ablauf"><span><small>1</small><br>Bedarf</span><b>→</b><span><small>2</small><br>Angebote</span><b>→</b><span><small>3</small><br>Bestellung</span><b>→</b><span><small>4</small><br>Lieferung</span><b>→</b><span><small>5</small><br>Rechnung</span><b>→</b><span><small>6</small><br>Zahlung</span></div></div>

    <h2>Was passiert in welcher Reihenfolge?</h2>
    <div id="z-zahlungsablauf"></div><p class="rueckmeldung" id="z-zahlungsablauf-rueck" hidden></p>

    <h2>Wörter, die man auseinanderhalten muss</h2>
    <div class="kontor-begriffe">
      <div class="kontor-begriff"><strong>bestellen ↔ liefern</strong><span>Der Kunde bestellt. Der Lieferant liefert.</span></div>
      <div class="kontor-begriff"><strong>kaufen ↔ verkaufen</strong><span>Dieselbe Ware – aber aus zwei verschiedenen Perspektiven.</span></div>
      <div class="kontor-begriff"><strong>Rechnung ↔ Beleg</strong><span>Die Rechnung fordert eine Zahlung; der Beleg dokumentiert einen Vorgang oder eine Zahlung.</span></div>
      <div class="kontor-begriff"><strong>bezahlen ↔ überweisen</strong><span>Bezahlen ist allgemein; überweisen ist eine konkrete Zahlungsart.</span></div>
      <div class="kontor-begriff"><strong>Preis ↔ Betrag</strong><span>Der Preis gehört zur Ware oder Leistung; der Betrag ist die konkrete Geldsumme.</span></div>
      <div class="kontor-begriff"><strong>Kunde ↔ Lieferant</strong><span>Der Kunde kauft oder beauftragt; der Lieferant liefert Ware oder Leistung.</span></div>
    </div>

    <h2>Welche Formulierung passt?</h2><div id="mc-zahlung"></div>

    <section class="kontor-transfer-zahlung"><h2>Und bei Ihnen?</h2><p>Beschreiben Sie einen echten oder typischen Vorgang in Ihrem Betrieb: vom Bedarf oder Kundenwunsch bis zur Zahlung oder Bestätigung.</p><textarea class="feld" id="zahlung-transfer" rows="6" placeholder="Zuerst … Danach … Anschließend … Zum Schluss …"></textarea><div class="kontor-zahlung-sprechen"><strong>Im Kurs</strong>Erklären Sie den Ablauf mündlich. Die anderen hören zu und stellen anschließend eine Rückfrage.</div></section>`;

  produkte.after(blatt);

  if (window.Lehrwerk) {
    if (typeof Lehrwerk.zuordnen === 'function') Lehrwerk.zuordnen('z-zahlungsablauf',{rueck:'z-zahlungsablauf-rueck',paare:[
      {id:'za1',links:'1 · Bedarf',rechts:'KONTOR stellt fest: 40 neue Bürostühle werden gebraucht.'},
      {id:'za2',links:'2 · Angebote',rechts:'Nora vergleicht Preise, Lieferzeiten und Bedingungen.'},
      {id:'za3',links:'3 · Bestellung',rechts:'KONTOR bestellt verbindlich beim ausgewählten Lieferanten.'},
      {id:'za4',links:'4 · Lieferung',rechts:'Die Stühle kommen an und werden auf Menge und Zustand geprüft.'},
      {id:'za5',links:'5 · Rechnung',rechts:'Der Lieferant fordert den vereinbarten Betrag.'},
      {id:'za6',links:'6 · Zahlung',rechts:'Nach der Prüfung wird der Rechnungsbetrag überwiesen.'}
    ]});
    if (typeof Lehrwerk.auswahl === 'function') Lehrwerk.auswahl('mc-zahlung',[
      {id:'zz1',text:'KONTOR möchte 40 Bürostühle verbindlich kaufen. Welches Verb passt?',optionen:['bestellen','liefern','mahnen'],richtig:['bestellen'],erklaerung:'Der Käufer bestellt; der Lieferant liefert.'},
      {id:'zz2',text:'Der Lieferant schickt die Stühle und später die Rechnung. Was macht KONTOR mit der Rechnung zuerst?',optionen:['prüfen','verkaufen','liefern'],richtig:['prüfen'],erklaerung:'Vor der Zahlung wird geprüft, ob Rechnung und Lieferung zusammenpassen.'},
      {id:'zz3',text:'KONTOR zahlt den Rechnungsbetrag per Bank. Welches Verb ist am genauesten?',optionen:['überweisen','verkaufen','bestellen'],richtig:['überweisen'],erklaerung:'Überweisen bezeichnet die konkrete Zahlungsart.'},
      {id:'zz4',text:'Ein Kunde hat eine fällige Rechnung noch nicht bezahlt. Was passt als erster professioneller Schritt?',optionen:['freundlich erinnern oder nachfragen','sofort die Lieferung zurückholen','die Rechnung löschen'],richtig:['freundlich erinnern oder nachfragen'],erklaerung:'Im Geschäftsalltag beginnt man meist mit einer sachlichen Zahlungserinnerung oder Rückfrage.'},
      {id:'zz5',text:'Auf dem Angebot steht 18,50 € pro Stuhl. Auf der Rechnung stehen insgesamt 740 €. Was ist 18,50 €?',optionen:['der Preis','der Gesamtbetrag','der Beleg'],richtig:['der Preis'],erklaerung:'Preis bezeichnet hier den Preis pro Einheit; 740 € ist der Gesamtbetrag.'}
    ]);
    if (typeof Lehrwerk.frei === 'function') ['zahlung-einkauf','zahlung-verkauf','zahlung-besteller','zahlung-zahlungsart','zahlung-pruefer','zahlung-fehlt','zahlung-transfer'].forEach(id=>Lehrwerk.frei(id));
  }
})();
