# Befunde aus dem B1→B2→C1-Rundumschlag

Laufende Sammlung. Nur Dokumentation – die hier genannten Punkte werden **nicht**
eigenmächtig gelöst, sondern von Regina entschieden.

## 1 · HTML in `erklaerung`-Strings wird als Text angezeigt

**Stand:** offen, dokumentiert am 2026-08-19 · **Entscheidung:** Regina

`assets/lehrwerk.js` setzt die Rückmeldungen von `auswahl`, `zuordnen` und `satzfolge`
per `textContent`. Steht in einem `erklaerung`-String HTML, sehen die Lernenden die
Tags wörtlich, zum Beispiel `<em>warum</em>`.

Betroffen sind 20 Module:

`buero/arbeitsauftraege-delegieren.html`, `buero/arbeitsauftraege-verstehen.html`,
`buero/beschwerden-konjunktiv.html`, `buero/beschwerden-wortschatz.html`,
`buero/imperativ-spiel.html`, `buero/kundengespraeche-sprechen.html`,
`buero/kundengespraeche-telefon.html`, `buero/sicherheit-grammatik.html`,
`buero/smalltalk-themen.html`, `buero/verb-lassen.html`,
`grammatik/adjektivendungen.html`, `grammatik/bedingung-ausnahme.html`,
`grammatik/informationsstruktur.html`, `grammatik/konjunktiv-2.html`,
`grammatik/modalverben.html`, `grammatik/partizipialattribute.html`,
`grammatik/partizipien.html`, `grammatik/passiv.html`,
`grammatik/relativsaetze.html`, `grammatik/trennbare-verben.html`

Zwei mögliche Wege:

1. Die Tags paketweise durch deutsche Anführungszeichen ersetzen – rein redaktionell,
   keine Architekturänderung.
2. `erklaerung` künftig als HTML rendern – eine Änderung in `assets/lehrwerk.js`, die
   alle Aufgabentypen betrifft und einmalig geprüft werden müsste.

Neu gebaute Module verwenden bis zur Entscheidung ausschließlich Anführungszeichen.

## 2 · Vierter Lernabschnitt in `im-unternehmen-ankommen.html`

**Stand:** geklärt, kein Handlungsbedarf

`data/homework.js` erzeugt zur Laufzeit den Lernabschnitt `#blatt-zahlung` samt
`.kontor-begriffe`; `data/woertersalat.js` hängt dort den Wörtersalat
*senden · schicken · absenden · abschicken · versenden* ein. Der Abschnitt wird also
nicht im HTML gepflegt und darf nicht doppelt gebaut werden. Ergänzungen im Modul
müssen sich inhaltlich davon unterscheiden.

## 3 · Baukasten der B1-Brücken

**Stand:** von Regina freigegeben

Fünf wiederkehrende Elemente, gebaut ausschließlich mit vorhandenen Klassen – kein
neues CSS, kein neues JS, keine Änderung an `VORLAGE.md`:

| Element | Umsetzung |
|---|---|
| Vorentlastung | `.kasten` mit `.marke` „Vorentlastung · 5 Minuten“, Tabelle Wort / einfach gesagt / im Satz |
| Grammatikstütze | `.merker` mit `.marke-merker` „Grammatik in einem Kasten“, Link ins Vertiefungsmodul |
| Verständnischeck | `Lehrwerk.auswahl` mit zwei bis drei Fragen, Ziel-`id` beginnt mit `check-` |
| Satzstarter und Redemittel | `.kasten` mit `.marke` „Satzstarter“, bei Rollenspielen getrennt nach A und B |
| Differenzierung | drei Zeilen **Start / Weiter / Herausforderung** an jeder produktiven Aufgabe |

Vorhandene B2/C1-Inhalte bleiben dabei unverändert; die Brücken kommen davor oder
daneben, nie an ihre Stelle.
