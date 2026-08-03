# Modulvorlage – verbindliche Grundlage

Jede Modulseite liegt unter `<bereich>/<thema>.html`, also z. B. `grammatik/passiv.html`.
Sie enthält **kein eigenes CSS und keine Schrifteinbindung**. Beides steckt in `assets/style.css`.

## Grundgerüst

```html
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Thema – Berufssprachkurs</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body data-bereich="grammatik">      <!-- buero | grammatik | pauken | training | referenz -->

<header class="hero bereich-kopf">
  <div class="innen">
    <a class="zurueck" href="../grammatik.html">← Grammatik</a>
    <h1><em>Thema</em></h1>
    <p class="anleitung">Ein Satz, worum es geht.</p>
  </div>
</header>

<main class="innen modul" style="max-width:52rem">
  <div class="reiter" role="tablist">
    <button role="tab" aria-selected="true"  data-blatt="regel">Regel</button>
    <button role="tab" aria-selected="false" data-blatt="uebungen">Übungen</button>
  </div>

  <section class="blatt" id="blatt-regel"> … </section>
  <section class="blatt" id="blatt-uebungen" hidden> … </section>
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
- Tabellen brauchen keine Klasse, `.modul table` greift automatisch

**Aufgaben**

- `.frage` – Kasten um eine Aufgabe
- `.wahl` – Behälter für Auswahlknöpfe (wird vom Skript gefüllt)
- `.rueckmeldung` – Absatz für die Rückmeldung, mit `hidden`
- `input.luecke` – Lückentextfeld
- `textarea.feld` – freies Schreibfeld
- `.knopf` und `.knopfreihe` – Schaltflächen
- `.stand` – Absatz mit `id="stand"` für die Standanzeige

Eigene Farben, Schriftgrößen oder `<style>`-Blöcke sind nicht vorgesehen. Einzelne
`style="…"`-Angaben für Abstände sind geduldet, Farben nur über die Variablen
(`var(--rose-tief)`, `var(--tinte-weich)` usw.).

## Funktionen

```js
Lehrwerk.modul('name')        // Speicherschlüssel, immer als Erstes
Lehrwerk.reiter()             // aktiviert die Reiterleiste
Lehrwerk.auswahl(zielId, fragen)
Lehrwerk.luecken(name, config)
Lehrwerk.frei('feld-id')      // Textarea, speichert laufend, wird nicht bewertet
Lehrwerk.abschluss()          // Stand, #kopieren, #zuruecksetzen; immer als Letztes
```

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
Antwort automatisch die übrigen Möglichkeiten („Ebenso möglich: denn").

Eine Aufgabe, bei der zwei Antworten sprachlich korrekt sind, aber nur eine
gewertet wird, gilt als Fehler.

### Datenformat Lückentext

```js
Lehrwerk.luecken('lt', {
  felder: {
    l1: ['folglich', 'infolgedessen', 'somit', 'daher'],   // alle Alternativen
    l2: ['dennoch', 'allerdings', 'trotzdem']
  },
  pruefen: 'lt-pruefen',   // Knopf-id
  rueck:   'lt-rueck',     // Absatz-id für die Rückmeldung
  tipp:    'lt-tipp',      // optional
  hinweis: 'lt-hinweis'    // optional
});
```

Groß- und Kleinschreibung spielt beim Prüfen keine Rolle.

## Didaktische Vorgaben

- Anrede: Sie, durchgehend.
- Deutsche Anführungszeichen („…“), Halbgeviertstrich mit Leerzeichen (–),
  niemals der lange amerikanische Gedankenstrich.
- Fachbegriffe nur, wenn sie erklärt werden. „Konjugiertes Verb" statt „finites Verb".
- Beispiele aus dem Büroalltag: Fristen, Rechnungen, Besprechungen, Behördenschreiben.
  Einfache Alltagssätze sind erlaubt, wo die Regel sonst unter dem Wortschatz verschwindet –
  aber nicht als Grundton des Moduls.
- Jedes Modul enthält mehr als Ankreuzaufgaben. Die Bewegung lautet:
  **erkennen → ordnen → umformen → selbst formulieren → in einer Bürosituation anwenden.**
  Also mindestens eine Lese-, eine Schreib- und eine Sprechaufgabe.
- Keine Punktestände, keine Streaks, keine Flammensymbole.
- Wo die Verbstellung eine Rolle spielt, kommt der Merkkasten „Position 2 – immer wieder"
  hinein, mit Beispielen aus dem jeweiligen Thema.

## Nach dem Bauen

Eintrag in `inhalt.json` ergänzen:

```json
{ "titel": "…", "beschreibung": "…", "pfad": "thema.html",
  "niveau": "B2", "dauer": "60 Min",
  "fertigkeiten": ["Üben", "Lesen", "Schreiben"], "status": "fertig" }
```

`status` ist `fertig` oder `in-arbeit`. Gestrichelte Karten sind nicht anklickbar.

**Musterseite:** `grammatik/konnektoren-ueberblick.html`
