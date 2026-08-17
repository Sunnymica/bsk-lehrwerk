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
