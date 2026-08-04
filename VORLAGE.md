# Modulvorlage – verbindliche Grundlage

Jede Modulseite liegt unter `<bereich>/<thema>.html`, also zum Beispiel `grammatik/passiv.html`.
Sie enthält **kein eigenes CSS und keine eigene Schrifteinbindung**. Gemeinsame Funktionen liegen in
`assets/lehrwerk.js`, nicht in der einzelnen Modulseite.

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

<main class="innen modul" style="max-width:52rem">
  <div class="reiter" role="tablist">
    <button role="tab" aria-selected="true" data-blatt="regel">Regel</button>
    <button role="tab" aria-selected="false" data-blatt="uebungen">Übungen</button>
  </div>

  <section class="blatt" id="blatt-regel">…</section>
  <section class="blatt" id="blatt-uebungen" hidden>…</section>
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

Die Reiter-`id` ist immer `blatt-` plus der Wert von `data-blatt`.

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

Eigene Farben, Schriftgrößen oder `<style>`-Blöcke sind nicht vorgesehen. Einzelne
`style="…"`-Angaben für Abstände sind geduldet; Farben laufen über bestehende Variablen.
Wiederverwendbares CSS gehört in das zuständige gemeinsame Stylesheet.

## Funktionen

```js
Lehrwerk.modul('name')        // Speicherschlüssel, immer als Erstes
Lehrwerk.reiter()             // aktiviert die Reiterleiste
Lehrwerk.auswahl(zielId, fragen)
Lehrwerk.luecken(name, config)
Lehrwerk.frei('feld-id')      // Textarea, speichert laufend, wird nicht bewertet
Lehrwerk.abschluss()          // Stand, #kopieren, #zuruecksetzen; immer als Letztes
```

### Neue Aufgabentypen

Die Vorlage unterstützt derzeit `auswahl`, `luecken` und `frei`. Benötigt ein Modul erstmals
einen allgemein wiederverwendbaren Typ wie Zuordnen, Satzbauen oder Hören, gilt:

1. Die Funktion und das Datenformat werden zentral in `assets/lehrwerk.js` entwickelt.
2. Die Darstellung kommt in `assets/aufgaben.css`.
3. Komponentenvariablen stehen am Komponentenselektor, niemals auf `:root`.
4. Globale Design-Tokens stehen in `basis.css`. Responsive Überschreibungen eines bereichseigenen Layout-Tokens dürfen innerhalb der zuständigen Media-Query in `platform.css`, `lehrwerk.css` oder `aufgaben.css` stehen.
5. Funktion, Datenformat und benötigte Klassen werden sofort hier dokumentiert.
6. Eine isolierte JavaScript- oder CSS-Lösung nur in der Modulseite ist nicht zulässig.

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

## Nach dem Bauen

Eintrag in `inhalt.json` ergänzen:

```json
{ "titel": "…", "beschreibung": "…", "pfad": "thema.html",
  "niveau": "B2", "dauer": "60 Min",
  "fertigkeiten": ["Üben", "Lesen", "Schreiben", "Sprechen"],
  "status": "in-arbeit" }
```

`status` ist `in-arbeit` oder `fertig`:

- `in-arbeit` – nicht veröffentlicht, noch nicht vollständig geprüft oder noch nicht freigegeben
- `fertig` – HTML-Datei vorhanden, gegenseitig geprüft und von Regina redaktionell freigegeben

Bei `status: fertig` prüft die Plattform zusätzlich, ob die zugehörige HTML-Datei vorhanden ist.
Fehlt sie eindeutig, bleibt die Karte sichtbar, ist aber nicht anklickbar. Diese technische Sicherung
ersetzt keine korrekte redaktionelle Statuspflege.

**Musterseite:** `grammatik/konnektoren-ueberblick.html`
