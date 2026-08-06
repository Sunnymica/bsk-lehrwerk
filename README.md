# Deutsch fürs Büro – Job-BSK-Plattform 0.4.10

Diese Fassung ist die technische und redaktionelle Produktionsbasis für das neue Job-BSK-Lehrwerk.
Sie trennt Plattform, Lehrwerk und Aufgabenarchitektur, ohne die vorhandenen Inhalte oder lokalen
Lernfunktionen zu verlieren.

## Enthalten

- feste Seitenleiste und responsive Navigation
- Startdashboard mit nächstem verfügbaren Modul
- fünf BSK-Lernbereiche mit sämtlichen Einträgen aus `inhalt.json`
- die vorhandenen Module `Konnektoren – der Überblick` und `Konnektoren – die Bedeutungen`
- lokaler Lernstand und Modulmarkierung
- Notizbuch auf der Startseite und direkt in Modulen
- Fokusmodus für Modulseiten
- fester Hausaufgabenbereich
- keine externen Bibliotheken und keine extern geladenen Schriften

## Stylesheet-Architektur

Alle HTML-Seiten laden vier gemeinsame Dateien in fester Reihenfolge:

1. `assets/basis.css` – globale Design-Tokens, Reset und Grundtypografie
2. `assets/platform.css` – Navigation, Dashboard, Dialoge, Fortschritt und Einbettung
3. `assets/lehrwerk.css` – Bereiche, Module, Reiter und Inhaltsdarstellung
4. `assets/aufgaben.css` – interaktive Aufgaben und Bearbeitungszustände

Neue wiederverwendbare Aufgabentypen werden zentral in `assets/lehrwerk.js` und
`assets/aufgaben.css` entwickelt und anschließend in `VORLAGE.md` dokumentiert.
Komponentenvariablen stehen am jeweiligen Komponentenselektor, nicht auf `:root`. Responsive Überschreibungen bereichseigener Layout-Tokens dürfen in der zuständigen Media-Query stehen.

## Änderungen in 0.4.10

- zentraler Urheberhinweis auf Startseite, Bereichsseiten und Modulseiten
- Trägerkontakt auf der Plattform-FAQ ohne veraltbare Einzeladresse formuliert
- FAQ-Status bleibt bis zur redaktionellen Freigabe durch Regina auf `in-arbeit`
- Kennenlernen bleibt bis zur redaktionellen Freigabe auf `teilweise`

## Änderungen in 0.4.9

- Satzbau-Kategorien farblich und textlich eindeutig markiert
- Direktivergänzung als eigener Typ von Präpositionalergänzung getrennt
- Objekttraining didaktisch neu geordnet
- Kontexte und Rückmeldungen in den Mittelfeldaufgaben präzisiert
- Rückmeldung aus der Pilotprüfung dokumentiert

## Änderungen in 0.4.8

- neue Nachschlagseite „So funktioniert die Plattform“ im Bereich „Unser Kurs“
- FAQ zu Zugang, lokaler Speicherung, Bedienung, Direktlinks und Kontakt
- freiwillige WhatsApp-Abfrage ohne Mehrheitszwang
- technische Aussagen gegen den tatsächlichen Stand von 0.4.7 geprüft und präzisiert
- Seite bleibt bis zur Ergänzung der Träger-Ansprechperson auf `in-arbeit`

## Änderungen in 0.4.7

- Pilotmigration „Satzbau im Mittelfeld“ mit vier Lernabschnitten und 49 Aufgaben
- neuer barrierearmer Aufgabentyp `Lehrwerk.satzfolge()` statt reinem Drag-and-drop
- eigene Bildgrammatik zur Reihenfolge von Dativ und Akkusativ
- fachliche Trennung von Ergänzungen, Angaben, Präpositional- und Direktivergänzungen
- TEKAMOLO ausdrücklich als Grundfolge der Angaben, nicht als starre Mittelfeldregel
- LearningApps als externer Baustein mit Klick-zum-Laden ergänzt

## Änderungen in 0.4.6

- eigener Bereich „Unser Kurs“ oberhalb der fünf Lernbereiche
- `data/kurs.json` als einzige Quelle für Kurszeiten und spätere Organisationsdaten
- erstes Kursmodul „Willkommen im Kurs“ mit vier getrennten Lernabschnitten
- Direktlinks auf Reiter über URL-Sprungmarken
- neue gemeinsame Komponenten für Arbeitsaufträge, Abstimmungen, Eingaberaster und Formularraster
- freie Ergebnisfelder können als geordneter Text kopiert werden
- Kursseiten werden nicht in den fachlichen Lernfortschritt eingerechnet

## Änderungen gegenüber 0.4.2

- die frühere `assets/style.css` in vier Zuständigkeitsbereiche aufgeteilt
- alle acht HTML-Seiten auf die neue Ladereihenfolge umgestellt
- vier Module ohne vorhandene HTML-Datei von `fertig` auf `in-arbeit` gesetzt
- Schreib- und Sprechaufgabe im Modul `Konnektoren – die Bedeutungen` als speicherbare Arbeitsfelder ergänzt; die Sprechaufgabe enthält eine Partner- und eine Alleinvariante
- Qualitätsstufen, gegenseitige Prüfung und redaktionelle Freigabe in `VORLAGE.md` festgelegt
- Responsive-Prüfung knapp unter und über den Bruchstellen verbindlich gemacht
- fehlerhafte Schlusszeichen in der Vorlage korrigiert
- den nicht definierten Farbverweis der Trainingskarte auf die zum Trainingsbereich gehörende Farbe `--salbei-tief` korrigiert und die fehlende Akzentfarbe im Trainings-Hero ergänzt


## Layoutkorrekturen nach der Sichtprüfung

- Modulbreiten zentralisiert: `52rem` als gut lesbare Standardbreite, optional `modul--breit` mit `68rem`
- widersprüchliche Inline-Breiten aus den beiden vorhandenen Modulen und aus `VORLAGE.md` entfernt
- Reiterleisten bleiben grundsätzlich einzeilig und sind bei wenig Platz horizontal scrollbar
- Werkzeugknöpfe erhalten eine inhaltsabhängige Breite; „Erledigt“ bleibt vollständig im weißen Feld
- Unterrichtsansicht kompakt als `Aa 1/3`, `Aa 2/3` oder `Aa 3/3`; der vollständige Stufenname bleibt als Tooltip und für Screenreader erhalten

## Änderungen in 0.4.3 bis 0.4.5

- drei neue Aufgabentypen: `zuordnen`, `wortbank`, `gruppieren`
- externer Lernbaustein für Quizlet, Kahoot und Video, Einbettung erst nach Klick
- sichtbare Einstiege aus HTML: Organigramm, Grundriss, Vorgangskette
- neue Gruppe „Arbeiten im Unternehmen“ im Bereich Büro und Verwaltung
- neues Modul „Im Unternehmen ankommen“ mit drei von vier Lernabschnitten
- Speicherschlüssel aller Aufgabentypen tragen den Namen der Aufgabe
- dritter Modulstatus `teilweise`: zugänglich, wächst noch
- Fertigkeitszähler zählen nur erreichbare Module
- Minutenangaben verschwinden von den Modulkarten
- Fortschritt wird je Lernabschnitt gezählt, nicht über das ganze Modul

## Nicht im Paket

`data/homework.js` wird über den Editor unter `/lehrkraft/` gepflegt und gehört
in kein Aktualisierungspaket. Wer sie mitliefert, löscht die laufenden Hausaufgaben.

## Hausaufgaben veröffentlichen

Die Datei `data/homework.js` enthält die zentrale Hausaufgabenliste. Dort können Aufgaben,
Fälligkeit, Teilschritte und Links eingetragen werden. Die Schülerinnen und Schüler haken ihre
Teilschritte lokal im Browser ab.

## Verfügbarkeit von Modulen

Alle bisherigen Einträge bleiben in `inhalt.json` erhalten. `status: fertig` ist die redaktionelle
Freigabe und setzt eine vorhandene Datei, die gegenseitige Prüfung und Reginas Endfreigabe voraus.
Die Plattform prüft beim Laden zusätzlich, ob die HTML-Datei vorhanden ist. Fehlt sie eindeutig
(HTTP 404), erscheint die Karte gestrichelt statt als kaputter Link. Netzwerkfehler werden nicht als
fehlende Datei gewertet.

## Lokal testen

```bash
python -m http.server 8000
```

Dann `http://localhost:8000` öffnen. Für `fetch()` und die Inhaltsdaten ist ein Webserver
zuverlässiger als das direkte Öffnen der HTML-Datei.

## GitHub Pages

Den vollständigen Inhalt dieses Ordners in das Job-BSK-Repository kopieren, committen und pushen.
Unter **Settings → Pages** den Branch `main` und den Ordner `/ (root)` auswählen.

## Datenschutz

Lernstand, Notizen und abgehakte Hausaufgaben werden ausschließlich über `localStorage` im
jeweiligen Browser gespeichert. Es werden keine Schülerdateien hochgeladen und keine Daten an
einen Server gesendet.
Aktueller Plattformstand: Version 0.4.10.
