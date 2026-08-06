# Pilotmigration Satzbau – erste Befunde

## Übernommen

- die klare Progression von Objektfolge über TEKAMOLO zum gesamten Mittelfeld
- 49 Übungsimpulse als Umfangsgerüst
- farbliche Funktionsmarkierung als Lernhilfe
- das vorhandene LearningApps-Paket als optionales Zusatztraining

## Korrigiert

- Weglasstest nicht mehr als absolute Definition von Ergänzung und Angabe
- obligatorische und fakultative Ergänzungen ausdrücklich unterschieden
- `aus Versehen` als modal statt kausal behandelt
- `es handelt sich um` statt `sich handeln um`
- Präpositionalergänzung, Direktivergänzung, Lokalergänzung und freie Ortsangabe getrennt
- TEKAMOLO nur als Grundfolge der Angaben dargestellt
- eine starre Gesamtformel für das Mittelfeld durch eine mehrstufige Orientierung ersetzt

## Technischer Befund

Das alte reine Drag-and-drop war auf Touchgeräten und mit Tastatur nicht belastbar.
Der neue gemeinsame Typ `Lehrwerk.satzfolge()` arbeitet deshalb per Klick: Vorrat → Satz,
Satz → Vorrat. Er speichert Reihenfolge und Bearbeitungsstand lokal und akzeptiert bei Bedarf
mehrere Lösungen. Dieser Typ ist für weitere Satzklammer-, Konnektoren- und Umformungsaufgaben
wiederverwendbar.

## Für die nächsten Migrationen

- Kategorienfarben dürfen unterstützen, aber nicht die einzige Lösungsinformation liefern.
- Bei Wortstellungsaufgaben muss der verlangte Kontext genannt werden.
- Wo mehrere Reihenfolgen korrekt sind, müssen mehrere Lösungen akzeptiert oder die Aufgabe
  ausdrücklich auf eine neutrale Grundfolge begrenzt werden.

## Nachprüfung nach dem ersten Gegenlesen

- Kategorien im gemischten Mittelfeldtraining dürfen keine identischen Farbcodes tragen,
  wenn dadurch verschiedene Funktionen gleich aussehen.
- Der Satzbau-Builder zeigt deshalb ab 0.4.9 neben einer unterscheidbaren Farbfläche immer
  auch die ausgeschriebene Funktionsbezeichnung.
- Direktivergänzung und Präpositionalergänzung haben getrennte Typen (`direktiv`, `praep`).
- Übungsreihen müssen eine Regel zunächst an einem Fall prüfen, der sie tatsächlich von
  einer konkurrierenden Regel unterscheidet.
- Bei Tendenzen wie „bekannt vor neu“ muss sichtbar bleiben, dass Objektart und Belebtheit
  die neutrale Folge mitbestimmen können.

