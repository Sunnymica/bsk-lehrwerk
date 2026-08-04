# Deutsch fürs Büro – Job-BSK-Plattform 0.4.2

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

## Änderungen gegenüber 0.4.1

- die frühere `assets/style.css` in vier Zuständigkeitsbereiche aufgeteilt
- alle acht HTML-Seiten auf die neue Ladereihenfolge umgestellt
- vier Module ohne vorhandene HTML-Datei von `fertig` auf `in-arbeit` gesetzt
- Schreib- und Sprechaufgabe im Modul `Konnektoren – die Bedeutungen` als speicherbare Arbeitsfelder ergänzt; die Sprechaufgabe enthält eine Partner- und eine Alleinvariante
- Qualitätsstufen, gegenseitige Prüfung und redaktionelle Freigabe in `VORLAGE.md` festgelegt
- Responsive-Prüfung knapp unter und über den Bruchstellen verbindlich gemacht
- fehlerhafte Schlusszeichen in der Vorlage korrigiert
- den nicht definierten Farbverweis der Trainingskarte auf die zum Trainingsbereich gehörende Farbe `--salbei-tief` korrigiert und die fehlende Akzentfarbe im Trainings-Hero ergänzt

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
