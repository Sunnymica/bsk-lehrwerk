# Modulvorlage – verbindliche Grundlage

Jede Modulseite liegt unter `<bereich>/<thema>.html`, also zum Beispiel `grammatik/passiv.html`.
Sie enthält **kein eigenes CSS und keine eigene Schrifteinbindung**. Gemeinsame Funktionen liegen in
`assets/lehrwerk.js`, nicht in der einzelnen Modulseite.

## Begriffe

Diese vier Wörter sind verbindlich und werden nicht vermischt:

| Begriff | Bedeutung |
|---|---|
| **Modul** | große thematische Einheit, eine Seite, eine Karte im Lernbereich |
| **Status** | `in-arbeit` = nicht zugänglich · `teilweise` = zugänglich, wächst noch · `fertig` = vollständig und freigegeben |
| **Lernabschnitt** | ein Reiter innerhalb eines Moduls |
| **Aufgabe** | eine einzelne Übung innerhalb eines Lernabschnitts |
| **UE** | Unterrichtseinheit von 45 Minuten, ausschließlich in der Kursplanung der Lehrkraft |

Ein Modul kann sich über mehrere Kursabende erstrecken. Auf der Modulkarte steht deshalb
keine Minutenangabe. Eine ungefähre Selbstlernzeit gehört an den Anfang eines fertigen
Lernabschnitts, als `<p class="stand-hinweis">`.

Ein Modul darf schrittweise wachsen. Dann gilt:

- Feststehende Lernabschnitte sind als Reiter von Anfang an sichtbar.
- Noch nicht gefüllte Reiter tragen `disabled` und `<span class="folgt">folgt</span>`
  und haben kein zugehöriges `<section class="blatt">`.
- Steht der Ausbau eines Moduls noch gar nicht fest, erscheinen keine Platzhalter.
- Sobald mindestens ein Lernabschnitt freigegeben ist, steht das Modul auf
  `teilweise`. Die Karte ist dann anklickbar und trägt den Hinweis „wächst noch“.
  Auf `fertig` kommt es erst, wenn alle vorgesehenen Lernabschnitte stehen.

## Wohin ein Modul gehört

Die fünf großen Kursmodule stehen im Bereich **Büro und Verwaltung**, Gruppe
**Arbeiten im Unternehmen**. Sie trainieren berufliches Handeln, Register,
Zuständigkeiten, Schreiben und Sprechen.

**Pauken** bleibt kurzen, wiederholbaren Formaten vorbehalten: Wortschatzkarten,
Kollokationen, Zuordnungsdrills, Artikeltraining, Schnelltests.

## Kursdaten

Kursspezifische Angaben stehen ausschließlich in `data/kurs.json`. Kursbeginn, Kursende,
Unterrichtstage und Uhrzeiten werden nicht zusätzlich in `lehrwerk.js` oder HTML-Dateien
geführt. Trägerspezifische Regeln zu Krankmeldung, Fehlzeiten und Kontakten dürfen bis zur
Bestätigung als `BITTE_PRUEFEN` markiert sein, werden dann aber von keiner sichtbaren Seite
ausgegeben.

`data/homework.js` bleibt davon getrennt: Kursdaten und Hausaufgaben haben verschiedene
Aufgaben und werden nicht in einer gemeinsamen Datei gepflegt.

## Die Modellfirma

Geschlossene Aufgaben brauchen einen gemeinsamen Kontext, produktive Aufgaben den
wirklichen Betrieb der Lernenden. Deshalb gilt durchgehend:

> **Geschlossene Aufgaben spielen bei KONTOR. Offene Aufgaben spielen im eigenen
> Betrieb, Praktikum oder Wunscharbeitsplatz.**

**KONTOR Büro & Logistik GmbH** handelt mit Bürobedarf: Einkauf beim Hersteller,
Lager und Versand, Verkauf an Firmen und Behörden. Im Fließtext heißt sie kurz
*KONTOR*, auf Briefköpfen, Rechnungen und Formularen vollständig.

| Person | Funktion | Abteilung |
|---|---|---|
| Kateryna Melnyk | Geschäftsführerin | Geschäftsleitung |
| Samira Haddad | Leiterin | Personal und Verwaltung |
| Nora Seidel | Sachbearbeiterin | Einkauf |
| Jonas Becker | Mitarbeiter | Verkauf und Kundenservice |
| Pawel Nowak | Teamleiter | Lager und Versand |

Diese Besetzung ist verbindlich und wird nicht je Modul neu erfunden. Pawel Nowak
wird mit lateinischem l geschrieben, damit der Name in Lücken und Zuordnungen
abtippbar bleibt. Weitere Figuren – Kundinnen, Lieferanten, Bewerberinnen – dürfen
je Modul hinzukommen und müssen nicht wiederkehren.

## Stylesheets und Zuständigkeiten

Alle Seiten laden die vier Stylesheets in dieser Reihenfolge:

```html
<link rel="stylesheet" href="../assets/basis.css">
<link rel="stylesheet" href="../assets/platform.css">
<link rel="stylesheet" href="../assets/lehrwerk.css">
<link rel="stylesheet" href="../assets/aufgaben.css">
```

- `basis.css` – gemeinsame Design-Tokens, Schriften, Reset und Grundtypografie
- `platform.css` – Navigation, Dashboard, Dialoge, Fortschritt und die kommentierte Brückenschicht zur Einbettung der Lehrwerkseiten
- `lehrwerk.css` – Bereichsseiten, Module, Reiter, Inhaltskästen, Tabellen und Satzanalyse
- `aufgaben.css` – interaktive Aufgabenkomponenten, Bearbeitungszustände und Rückmeldungen

Globale, systemweit geteilte Design-Tokens stehen in `basis.css` und werden nur im Einvernehmen geändert.
Eine Variable, die ausschließlich zu einer Aufgabenkomponente gehört, wird am **Komponentenselektor**
definiert, nicht auf `:root`:

```css
.zuordnung {
  --zuordnung-treffer: #667A4A;
}
```

Nicht zulässig ist eine scheinbar lokale, tatsächlich aber globale Definition:

```css
:root {
  --zuordnung-treffer: #667A4A;
}
```

Wird ein Komponentenwert später systemweit benötigt, kann er nach gemeinsamer Prüfung nach `basis.css` wandern.

## Grundgerüst

```html
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Thema – Berufssprachkurs</title>
<link rel="stylesheet" href="../assets/basis.css">
<link rel="stylesheet" href="../assets/platform.css">
<link rel="stylesheet" href="../assets/lehrwerk.css">
<link rel="stylesheet" href="../assets/aufgaben.css">
<script src="../data/homework.js" defer></script>
<script src="../assets/platform.js"></script>
</head>
<body data-page="module" data-bereich="grammatik" data-root="../">

<header class="hero bereich-kopf">
  <div class="innen">
    <a class="zurueck" href="../grammatik.html">← Grammatik</a>
    <h1><em>Thema</em></h1>
    <p class="anleitung">Ein Satz, worum es geht.</p>
  </div>
</header>

<main class="innen modul">
  <div class="reiter" role="tablist" aria-label="Lernabschnitte">
    <button type="button" id="tab-regel" role="tab" aria-selected="true" data-blatt="regel">Regel</button>
    <button type="button" id="tab-uebungen" role="tab" aria-selected="false" data-blatt="uebungen">Übungen</button>
  </div>

  <section class="blatt" id="blatt-regel" role="tabpanel" aria-labelledby="tab-regel">…</section>
  <section class="blatt" id="blatt-uebungen" role="tabpanel" aria-labelledby="tab-uebungen" hidden>…</section>
</main>

<footer class="fuss">Nur für Kursteilnehmerinnen und Kursteilnehmer</footer>

<script src="../assets/lehrwerk.js"></script>
<script>
Lehrwerk.modul('thema');
Lehrwerk.reiter();
/* Aufgaben … */
Lehrwerk.abschluss();
</script>
</body>
</html>
```

Die Reiter-`id` ist immer `blatt-` plus der Wert von `data-blatt`. Dadurch sind Direktlinks
in einen Lernabschnitt möglich, zum Beispiel `thema.html#blatt-uebungen`. Beim Wechsel eines
Reiters aktualisiert die Plattform die Sprungmarke in der URL.

Die Standardbreite eines Moduls beträgt `52rem` und steht zentral in `lehrwerk.css`. Für Bildraster, breite Tabellen, Zuordnungs- oder Gruppieraufgaben kann das Modul ausdrücklich die Klasse `modul--breit` erhalten:

```html
<main class="innen modul modul--breit">
```

Breiten werden nicht als Inline-Style in einzelne Modulseiten geschrieben. Die Reiterleiste bleibt einzeilig und kann bei wenig Platz horizontal gescrollt werden.

## Erlaubte Klassen

**Satzanalyse** – in allen Modulen gleich:

| Klasse | Bedeutung | Darstellung |
|---|---|---|
| `.kon` | Konnektor, und nur der | rot |
| `.verb` | konjugiertes Verb im Hauptsatz | grün |
| `.subj` | Subjekt | blau |
| `.neb` | konjugiertes Verb im Nebensatz | lila |
| `.pos1` | anderes Element auf Position 1 | unterstrichen |

Beispielsätze stehen in `<p class="satzbau">`.

**Inhalt**

- `.kasten` – Erklärkasten, `h3` als Überschrift, `.formel` für die Stellungsformel, `.marke` für ein Etikett
- `.merker` mit `.marke-merker` – der wiederkehrende Merkkasten
- `.regel` – Regelkasten auf Sandfarbe
- `.satz` – hervorgehobener Beispieltext
- `.legende` – Farblegende
- Tabellen brauchen keine Klasse; `.modul table` greift automatisch

**Aufgaben**

- `.frage` – Kasten um eine Aufgabe
- `.wahl` – Behälter für Auswahlknöpfe; wird vom Skript gefüllt
- `.rueckmeldung` – Absatz für die Rückmeldung, mit `hidden`
- `input.luecke` – Lückentextfeld
- `textarea.feld` – freies Schreibfeld
- `.knopf` und `.knopfreihe` – Schaltflächen
- `.stand` – Absatz mit `id="stand"` für die Standanzeige
- `.auftrag` mit `.auftrag-marke` – Arbeitsauftrag mit Sozialform und Zeitspanne
- `.abstimmung` – Zahlenfelder mit gemeinsamem Ergebnisbalken
- `.raster` / `.raster-feld` – wiederholte Aussage mit Eingabefeld
- `.formular` / `.formular-feld` – beschriftetes Formularraster

Eigene Farben, Schriftgrößen oder `<style>`-Blöcke sind nicht vorgesehen. Einzelne
`style="…"`-Angaben für Abstände sind geduldet; Farben laufen über bestehende Variablen.
Wiederverwendbares CSS gehört in das zuständige gemeinsame Stylesheet.

## Funktionen

```js
Lehrwerk.modul('name')        // Speicherschlüssel, immer als Erstes
Lehrwerk.reiter()             // aktiviert die Reiterleiste
Lehrwerk.auswahl(zielId, fragen)
Lehrwerk.luecken(name, config)
Lehrwerk.wortbank(name, config)     // Lückentext mit sichtbarer Wortbank
Lehrwerk.zuordnen(zielId, config)   // Paare bilden
Lehrwerk.gruppieren(zielId, config) // Wörter in Töpfe sortieren
Lehrwerk.extern(zielId, config)     // Quizlet, Kahoot oder Video, erst nach Klick
Lehrwerk.frei('feld-id')      // Eingabefeld, speichert laufend, wird nicht bewertet
Lehrwerk.abstimmung(config)         // lokale Stimmen der Kursleitung visualisieren
Lehrwerk.ergebnis(config)           // beschriftete Eingaben geordnet kopieren
Lehrwerk.abschluss()          // Stand, #kopieren, #zuruecksetzen; immer als Letztes
```

### Datenformat Abstimmung

Die Abstimmung ist kein geräteübergreifendes Voting. Die Kursleitung sammelt die Stimmen
im Plenum und trägt die Zahlen auf ihrem freigegebenen Bildschirm ein.

```js
Lehrwerk.abstimmung({
  felder: [
    { id: 'stimmen-a', balken: 'balken-a', label: 'Option A' },
    { id: 'stimmen-b', balken: 'balken-b', label: 'Option B' }
  ],
  balken: 'abstimmung-balken',
  ergebnis: 'abstimmung-ergebnis',
  leer: 'Noch keine Stimmen eingetragen.',
  gleichstand: 'Gleichstand.',
  mehrheit: {
    'stimmen-a': 'Option A hat die Mehrheit.',
    'stimmen-b': 'Option B hat die Mehrheit.'
  }
});
```

### Datenformat Ergebnis kopieren

Nur Eingabefelder mit `data-ergebnis-label` werden berücksichtigt. Die Ausgabe folgt der
Reihenfolge im Dokument; leere Felder werden ausgelassen.

```html
<input id="name" data-ergebnis-label="Name">
<textarea id="notiz" data-ergebnis-label="Notiz"></textarea>
<button class="knopf" id="inhalt-kopieren" type="button">Inhalte kopieren</button>
```

```js
Lehrwerk.ergebnis({
  quelle: 'blatt-interview',
  knopf: 'inhalt-kopieren',
  titel: 'Partnerinterview'
});
```

### Neue Aufgabentypen

Die Vorlage unterstützt `auswahl`, `luecken`, `wortbank`, `zuordnen`, `gruppieren` und `frei`.
Benötigt ein Modul erstmals einen weiteren allgemein wiederverwendbaren Typ wie Satzbauen
oder Hören, gilt:

1. Die Funktion und das Datenformat werden zentral in `assets/lehrwerk.js` entwickelt.
2. Die Darstellung kommt in `assets/aufgaben.css`.
3. Komponentenvariablen stehen am Komponentenselektor, niemals auf `:root`.
4. Globale Design-Tokens stehen in `basis.css`. Responsive Überschreibungen eines bereichseigenen Layout-Tokens dürfen innerhalb der zuständigen Media-Query in `platform.css`, `lehrwerk.css` oder `aufgaben.css` stehen.
5. Funktion, Datenformat und benötigte Klassen werden sofort hier dokumentiert.
6. Eine isolierte JavaScript- oder CSS-Lösung nur in der Modulseite ist nicht zulässig.

### Datenformat Zuordnen

```js
Lehrwerk.zuordnen('z-personen', {
  rueck: 'z-personen-rueck',        // optionaler Absatz für die Rückmeldung
  paare: [
    { id: 'p1',
      links:  'die Auszubildende',
      rechts: 'lernt im Unternehmen einen Beruf',
      erklaerung: 'Ein bis zwei Sätze, warum das zusammengehört.' }
  ]
});
```

Im HTML genügt ein leerer Behälter: `<div id="z-personen"></div>`. Die linke Spalte
behält die angegebene Reihenfolge, die rechte wird bei jedem Aufruf gemischt.
Bedient wird mit zwei Klicks – erst links, dann rechts. Ziehen mit der Maus ist
bewusst nicht vorgesehen, weil es auf dem Tablet und mit der Tastatur scheitert.

### Datenformat Wortbank

```js
Lehrwerk.wortbank('wb-zustaendig', {
  ziel: 'wb-zustaendig-bank',       // leerer <div> für die Wortmarken
  bank: ['zuständig', 'weisungsbefugt', 'Verantwortung', 'Kollegin'],
  felder: { wb1: ['zuständig'], wb2: ['weisungsbefugt'] },
  eindeutig: true,                  // nur eine Lösung je Lücke
  pruefen: 'wb-pruefen',
  rueck:   'wb-rueck'
});
```

Alles außer `bank`, `ziel` und `eindeutig` verhält sich wie bei `luecken`. Die Bank darf
mehr Wörter enthalten als Lücken; überzählige Wörter sind Ablenkung und erwünscht.
Ein Klick setzt das Wort in das zuletzt berührte oder in das nächste leere Feld.
Ohne `eindeutig: true` weist die Rückmeldung auf weitere mögliche Lösungen hin –
das darf nur stehen, wenn es auch stimmt.

### Datenformat Gruppieren

```js
Lehrwerk.gruppieren('g-orte', {
  pruefen: 'g-orte-pruefen',
  rueck:   'g-orte-rueck',
  gruppen: [
    { id: 'verwaltung', titel: 'Verwaltung',
      woerter: ['das Großraumbüro', 'die Poststelle'] },
    { id: 'lager', titel: 'Lager und Versand',
      woerter: ['das Warenlager', 'die Laderampe'] }
  ]
});
```

Im HTML genügt `<div id="g-orte"></div>`. Vorrat und Töpfe zeichnet das Skript.
Der Vorrat wird gemischt, sonst steht die Lösung in der Reihenfolge. Ein Wort im
Topf geht mit einem Klick zurück in den Vorrat.

Zwei bis vier Gruppen sind sinnvoll. Bei fünf und mehr wird die Fläche unübersichtlich,
und die Aufgabe misst dann eher Geduld als Sprache.

### Datenformat Externer Lernbaustein

```js
Lehrwerk.extern('x-wortschatz', {
  anbieter: 'quizlet',          // quizlet | kahoot | video
  kennung:  '123456789',        // nur die Set-Nummer, ohne Namensteil
  titel:    'Wortschatz Büro',
  auftrag:  'Zehn Minuten Karteikarten, dann zurück auf diese Seite.',
  dauer:    '10 Min',           // optional
  modus:    'match',            // nur Quizlet: flashcards | learn | match | test
  fallbackUrl: 'https://quizlet.com/123456789/buero-basis/'
});
```

Im HTML genügt `<div id="x-wortschatz"></div>`.

Eingebettet wird bei Quizlet über die reine Set-Nummer: `/123456789/match/embed`.
Der öffentliche Link enthält zusätzlich den Set-Namen und lässt sich daraus nicht
erraten – deshalb gehört er als `fallbackUrl` in die Konfiguration. Bei Kahoot und
Video ist `fallbackUrl` optional.

Die drei Anbieter teilen sich Platzhalter, bewussten Klick und Ausweichlink,
haben aber jeweils eigene Einbettungsadressen. Diese stehen zentral in `ANBIETER`
in `lehrwerk.js` und werden nicht im Modul zusammengesetzt.

**Vor dem Klick entsteht keine Verbindung zum Anbieter.** Das ist keine Kosmetik:
Sonst meldet sich der Browser der Lernenden beim bloßen Öffnen der Seite bei einem
amerikanischen Dienst. Automatisches Laden ist deshalb nicht vorgesehen.

Für Videos zusätzlich möglich: `start: 30` (Sekunden) und `untertitel: true`.
Fremde Transkripte werden nicht übernommen; wer Redemittel aus einem Video braucht,
formuliert eigene Sätze.

Arbeitsteilung: Was reines Benennen ist – Wort zu Bild, Begriff zu Definition,
Artikel, Plural –, gehört zu Quizlet. Auf der Plattform bleibt, was mehr verlangt:
Bedeutungsunterschiede, Register, Zuständigkeit, Schreiben, Sprechen und Aufgaben
mit mehreren vertretbaren Lösungen. Kahoot ist ein Ereignis pro Modul, nicht pro
Lernabschnitt.

### Sichtbare Einstiege

Für den Einstieg eines Lernabschnitts stehen drei Bausteine aus reinem HTML bereit.
Sie wachsen mit dem Aa-Knopf mit, lassen sich vorlesen und brauchen kein Bildmaterial:

- `.organigramm` mit `.og-spitze`, `.og-reihe` und `.og-karte`
- `.grundriss` mit `.raum` und den Zusätzen `.raum-verwaltung`, `.raum-lager`, `.raum-kunden`
- `.kette` mit `.kette-schritt` und `.kette-pfeil`

Eine leere Fläche mit dem Hinweis, dass hier später ein Bild kommt, gibt es nicht.
Entweder der Einstieg steht, oder er wird als Aufgabe gebaut.

### Datenformat Auswahlaufgaben

```js
Lehrwerk.auswahl('quiz', [
  { id: 'f1',
    text: 'Wir verschieben den Termin, ____ die Unterlagen fehlen.',
    optionen: ['weil', 'deshalb', 'denn'],
    richtig: ['weil', 'denn'],          // IMMER eine Liste
    erklaerung: 'Warum das so ist, in einem oder zwei Sätzen.' }
]);
```

`richtig` ist auch bei nur einer Lösung eine Liste. Sind mehrere Antworten
vertretbar, gehören **alle** hinein. Das Skript nennt bei einer richtigen
Antwort automatisch die übrigen Möglichkeiten („Ebenso möglich: denn“).

Eine Aufgabe, bei der zwei Antworten sprachlich korrekt sind, aber nur eine
gewertet wird, gilt als Fehler.

### Datenformat Lückentext

```js
Lehrwerk.luecken('lt', {
  felder: {
    l1: ['folglich', 'infolgedessen', 'somit', 'daher'],
    l2: ['dennoch', 'allerdings', 'trotzdem']
  },
  pruefen: 'lt-pruefen',   // Knopf-id
  rueck:   'lt-rueck',     // Absatz-id für die Rückmeldung
  tipp:    'lt-tipp',      // optional
  hinweis: 'lt-hinweis'    // optional
});
```

Groß- und Kleinschreibung spielt beim Prüfen keine Rolle.

## Aufbau eines Lernabschnitts

Erst handeln, dann erklären. Nicht umgekehrt.

1. **Sehen und einordnen** – Organigramm, Grundriss, Vorgangskette. Wenig Text.
2. **Sofort etwas tun** – zuordnen, auswählen, sortieren.
3. **Den Unterschied entdecken** – ein kurzer Merkkasten, erst *nach* der Aufgabe.
4. **Bei KONTOR anwenden** – geschlossene Aufgabe mit Rückmeldung.
5. **In den eigenen Betrieb übertragen** – Schreiben oder Sprechen.

Pro Bildschirm höchstens eine Anweisung und höchstens ein Erklärkasten. Keine drei
ähnlich aussehenden Textaufgaben hintereinander. Der B2/C1-Anspruch steckt in der
Entscheidung und der Begründung, nicht in der Textmenge – die Lernenden kommen
abends von der Arbeit.

## Speicherschlüssel

Jeder Aufgabentyp legt seinen Stand unter einem Schlüssel ab, der den Namen der
Aufgabe enthält:

| Typ | Schlüssel |
|---|---|
| `auswahl` | `zielId:frageId` |
| `luecken`, `wortbank` | `name:feldId` |
| `zuordnen` | `z:zielId:paarId` |
| `gruppieren` | `g:zielId` |
| Ergebniszahl je Aufgabe | `_name` |

Ein neuer Aufgabentyp muss dieselbe Regel einhalten. Sonst überschreiben sich zwei
Aufgaben desselben Moduls, sobald beide eine `f1` oder `p1` benutzen.

## Qualitätsstufen

### Einsatzfähig

Ein Modul ist einsatzfähig, wenn es enthält:

- eine verständliche Erklärung
- mindestens eine geschlossene Auswahl- oder Lückenaufgabe
- eine Schreibaufgabe
- eine Sprechaufgabe
- beruflich plausible Beispiele
- einen Merkkasten, wenn er fachlich erforderlich ist

### Musterexemplar

Ein Musterexemplar führt vollständig von Erkennen über Anwenden und Umformen bis zum
beruflichen Transfer, nutzt mehrere didaktisch unterschiedliche Aufgabentypen und bietet
klare Rückmeldungen oder Musterlösungen. Hörmaterial ist nur verpflichtend, wenn
Hörverstehen Lernziel ist. Die Zahl der Reiter richtet sich nach dem Thema.

## Didaktische und redaktionelle Vorgaben

- Anrede: Sie, durchgehend.
- Deutsche Anführungszeichen („…“), Halbgeviertstrich mit Leerzeichen (–), niemals der lange amerikanische Gedankenstrich.
- Fachbegriffe nur, wenn sie erklärt werden. „Konjugiertes Verb“ statt „finites Verb“.
- Beispiele aus dem Büroalltag: Fristen, Rechnungen, Besprechungen, Behördenschreiben.
  Einfache Alltagssätze sind erlaubt, wo die Regel sonst unter dem Wortschatz verschwindet –
  aber nicht als Grundton des Moduls.
- Jedes Modul enthält mehr als Ankreuzaufgaben. Die Bewegung lautet:
  **erkennen → ordnen → umformen → selbst formulieren → in einer Bürosituation anwenden.**
  Also mindestens eine Lese-, eine Schreib- und eine Sprechaufgabe.
- Keine Punktestände, keine Streaks, keine Flammensymbole.
- Wo die Verbstellung eine Rolle spielt, kommt der Merkkasten „Position 2 – immer wieder“
  hinein, mit Beispielen aus dem jeweiligen Thema.

## Prüfung und Freigabe

1. Die bauende KI prüft das Modul selbst anhand der folgenden Liste.
2. Die jeweils andere KI prüft Sprache, Didaktik, Eindeutigkeit und Technik.
3. Beanstandungen werden eingearbeitet.
4. Regina übernimmt die fachliche und redaktionelle Endfreigabe.
5. Erst danach wird der Status in `inhalt.json` auf `fertig` gesetzt.

### Prüfliste

- Sind Aufgabenstellung und erwartete Handlung eindeutig?
- Sind mehrere sprachlich richtige Lösungen möglich, und sind alle hinterlegt?
- Stimmen Rückmeldung, Lösung und Bewertung überein?
- Sind Grammatik und Wortschatz fachlich korrekt?
- Ist die Progression nachvollziehbar?
- Enthält das Modul Schreiben und Sprechen?
- Sind die beruflichen Situationen plausibel und sprachlich angemessen?
- Funktionieren Speicherung, Prüfen, Kopieren und Zurücksetzen?
- Wurde kein wiederverwendbarer Code lokal im Modul dupliziert?
- Stimmen deutsche Anführungszeichen und Halbgeviertstriche? In sichtbarem deutschen Fließtext ausschließlich `„…“` verwenden: öffnend U+201E `„`, schließend U+201C `“`; nicht `“…”` und nicht `"..."`.
- Bleibt die Seite per Tastatur bedienbar und sind Fokuszustände sichtbar?
- Wurde das Layout knapp unter und über allen Bruchstellen geprüft: 543/545, 559/561, 819/821 und 1099/1101 Pixel?

## Nicht mitliefern

`data/homework.js` enthält die veröffentlichten Hausaufgaben und wird über den
Editor unter `/lehrkraft/` gepflegt. Diese Datei gehört in **kein** Aktualisierungs-
paket. Wer sie mitliefert, löscht beim Hochladen die laufenden Hausaufgaben.

## Nach dem Bauen

Eintrag in `inhalt.json` ergänzen:

```json
{ "titel": "…", "beschreibung": "…", "pfad": "thema.html",
  "niveau": "B2", "dauer": "60 Min",
  "fertigkeiten": ["Üben", "Lesen", "Schreiben", "Sprechen"],
  "status": "in-arbeit" }
```

`status` ist `in-arbeit`, `teilweise` oder `fertig`:

- `in-arbeit` – nicht veröffentlicht, noch nicht vollständig geprüft oder noch nicht freigegeben
- `teilweise` – zugänglich und unterrichtlich nutzbar, aber noch nicht mit allen vorgesehenen Lernabschnitten vollständig
- `fertig` – HTML-Datei vorhanden, gegenseitig geprüft und von Regina redaktionell freigegeben

Bei `status: fertig` prüft die Plattform zusätzlich, ob die zugehörige HTML-Datei vorhanden ist.
Fehlt sie eindeutig, bleibt die Karte sichtbar, ist aber nicht anklickbar. Diese technische Sicherung
ersetzt keine korrekte redaktionelle Statuspflege.

**Musterseite:** `grammatik/konnektoren-ueberblick.html`
