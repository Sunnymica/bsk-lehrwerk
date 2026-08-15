Auftrag: Matrix-Module ausbauen und erweitern
Ausgangslage. Drei Altmodule wurden als didaktisch stark bewertet: Adjektiv-Suffixe, Präfix-Landkarte, Wortfamilien-Explorer. Gemeinsames Prinzip: eine Matrix aus endlichem Inventar (Suffixe, Präfixe, Wortarten) × Basiselementen, bei der auch die Leerstellen Information tragen. Sie sind derzeit reine Nachschlagewerke ohne produktiven Teil.
Teil 1 — Übungsteil aus vorhandenen Daten (Priorität). Für alle drei Module einen Reiter „Üben" neben „Nachschlagen" ergänzen. Zwingend: Der bestehende Datensatz bleibt unverändert und ist die einzige Quelle; Items werden daraus erzeugt, nicht doppelt gepflegt.
•	Stufe 1: Basis vorgegeben, Zielform gesucht (Lücke). Alternativ der Beispielsatz mit getilgtem Zielwort.
•	Stufe 2: Kontrastaufgaben aus den bereits vorhandenen contrasts-Einträgen — Kontext zeigen, zwischen den beiden Formen entscheiden lassen. Didaktisch die wertvollste Stufe, hier wird tatsächlich entschieden statt abgerufen.
•	Stufe 3 (Wortfamilien-Explorer): drei Wörter aus verschiedenen Kategorien ziehen, Aufgabe ist eine kurze Situation, die alle drei enthält. Partnerarbeit, Breakout, zwei Minuten.
Bekannte Grenze, bitte nicht überversprechen: Formbildung deckt der Datensatz ab, Verwendungsunterschiede nicht (mangelhaft gegen fehlerhaft). Dafür wären eigens geschriebene Kontexte nötig — das ist ein späterer, separater Schritt.
Teil 2 — Neue Matrix-Module, nach Eignung geprüft. Kriterien für diesen Modultyp: endliches Inventar, zwei kreuzbare Achsen, Ertrag liegt im Vergleichen.

1. Nomen-Suffixe (-ung, -heit, -keit, -schaft, -tum, -nis, -ling, -ei). Zusatzertrag: Das Suffix bestimmt das Genus.
2. Verben mit Präpositionen: Verb × Präposition × Kasus, dritte Spalte Pronominaladverb (worauf/darauf). Für Bürodeutsch der ergiebigste Kandidat.
3. Nomen-Verb-Verbindungen: Nomen × Funktionsverb, Zustand gegen Handlung (in Kraft treten / setzen). C1-Register, Sprache von Bescheiden und Verträgen.
4. Verbstellung nach Konnektortyp: ADUSO / Subjunktoren / Konjunktionaladverbien × dieselbe Aussage. Terminologie verbindlich: „konjugiertes Verb", nicht „finites Verb"; ADUSO als Kürzel.
Nicht als Matrix umsetzen: Präfixe bei Verben (existiert bereits als Präfix-Landkarte), Nominalisierung (Umformungsverfahren, keine Matrix — anderer Modultyp).
Teil 3 — TEKAMOLO-Satzbaukasten, nur nach Rücksprache. Keine Matrix, sondern ein Schiebemodell fürs Mittelfeld. Umsetzung erst nach ausdrücklicher Freigabe, weil eine fachliche Vorgabe zwingend mitgedacht werden muss: TEKAMOLO ordnet ausschließlich Angaben, nicht Ergänzungen, und wird von stärkeren Prinzipien geschlagen (Pronomen vor Nomen, Bekanntes vor Neuem). Ein Modul, das TEKAMOLO als starre Regel darstellt, wäre schädlicher als keins. Abgleich mit grammatik/tekamolo.html im Repo ist Voraussetzung.
Rahmen für alles.
•	Aufwand realistisch schätzen: Der Datenaufwand ist der Preis dieses Modultyps, nicht der Code. Der Wortfamilien-Explorer trägt über zwanzig Verben mit je rund vierzig Einträgen samt Beispielsatz.
•	Diese Module gehören in den Bereich „Nachschlagen", nicht „Pauken" — auch mit Übungsteil. Zwei bis drei weitere sind sinnvoll, ein Dutzend wäre Bibliothek statt Unterricht.
•	Deutsche Anführungszeichen „…", keine gemischten Formen.
•	Zwei Korrekturen im Adjektiv-Suffix-Modul: Zweig → zweifelhaft ist falsch, die Basis ist Zweifel. Der Ausnahmeeintrag Volk → völkisch wird gestrichen — inhaltlich richtig, aber in einem Berufssprachkurs fehl am Platz.

Technische Vorgabe: Übungsteile nutzen die Plattform-Systematik
5. 
6. Die Übungsteile aus Teil 1 werden nicht als eigene Logik im jeweiligen Modul programmiert, sondern über die vorhandenen Aufgabentypen der Plattform umgesetzt. Andernfalls entstehen drei Module mit je eigener Übungsmechanik, die bei der späteren Migration ins Lehrwerk nochmals umgebaut werden müssten.
7. 
8. Vorgehen:
9. 
10. Vor Beginn assets/lehrwerk.js im Repo lesen und die tatsächlichen Signaturen der Aufgabentypen daraus übernehmen — nicht aus dem Gedächtnis rekonstruieren. Maßgeblich ist der Stand im Repo, nicht diese Beschreibung.
11. Stufe 1 (Basis → Zielform, Lücke im Beispielsatz) als Lückenaufgabe umsetzen, Stufe 2 (Kontrastentscheidung) als Auswahlaufgabe.
12. Storage-Keys namespacen, wie im Repo durchgängig üblich. Die drei Module teilen sich Feld-IDs wie ex1; ohne Namespace kollidieren die gespeicherten Eingaben.
13. Die vorhandene Übungslogik der Altmodule (eigene checkAnswers()-Funktion mit hartkodiertem Lösungsobjekt) wird dabei abgelöst, nicht ergänzt.
14. Falls ein benötigter Aufgabentyp in lehrwerk.js fehlt oder nicht passt: nicht improvisieren, sondern melden. Eine Ergänzung von lehrwerk.js ist möglich, aber eine Entscheidung von Regina.
15. 
16. Die Datenhaltung bleibt davon unberührt: Der bestehende Datensatz ist weiterhin die einzige Quelle, die Aufgabenitems werden daraus erzeugt.

Datensatzqualität und Aufgabenpool



Beim Erzeugen der Übungsitems fallen Einträge auf, die als Nachschlageeintrag unauffällig sind, als Aufgabenlösung aber falsches Wissen trainieren. Deshalb gilt:



a) Eignungsfilter im Datensatz, nicht im Code. Nicht übungstaugliche Einträge werden am Eintrag selbst markiert (z. B. uebung: false), nicht über eine Filterfunktion im Übungsgenerator. Eine Heuristik „Ziel enthält Basis nicht" ist untauglich: Sie sortiert reguläre Umlautungen aus (Vernunft → vernünftig, Glaube → gläubig, Wasser → wässrig), die gerade Lerninhalt sind. Maßstab ist nicht die Zeichenfolge, sondern ob sich das Ziel aus der Basis ableiten lässt. Fuß → leichtfüßig besteht diesen Test nicht.



b) Ausnahmen und Regelbeispiele gehören nie in denselben Pool. Die exceptions sind didaktisch das Wertvollste am Modul, als Lückenaufgabe im Regelpool aber eine Falle: Wer die Regel anwendet, liegt zwangsläufig falsch. Sie bekommen eine eigene Aufgabengruppe mit eigenem Auftrag, etwa „Hier gilt die Regel nicht. Welche Form ist richtig?" Besonders kritisch: verstehen → verständlich steht unter -bar gleichzeitig in den Beispielen und in den Ausnahmen. Im Regelpool legt das Item die Antwort verstehbar nahe — also genau den Fehler, den das Modul verhindern soll.



c) Datensatzkorrekturen sind freigegeben, aber als eigener Commit vor Teil 1, mit Liste zum Gegenlesen. Fehler werden behoben, nicht ausgefiltert — sonst bleiben sie im Nachschlageteil stehen, wo sie ebenso stören.



Zu korrigieren im Adjektiv-Suffix-Modul:



Sachlich falsche Basis: Qualifikation → qualitativ (gehört zu Qualität), Wahn → wahnsinnig (Basis Wahnsinn), Zweig → zweifelhaft (Basis Zweifel), Kratzer → kratzig (plausibler kratzen)

Richtungsverkehrt, Ableitung steht als Basis: Kompatibilität → kompatibel, Seriosität → seriös, Intensität → intensiv, Kreativität → kreativ, Exklusivität → exklusiv

Beispielsatz passt nicht zum Zielwort: Zeit → zeitig mit dem Satz zu frühzeitig — als Lückenaufgabe unlösbar

Technisch defekt: Ausnahmeeintrag unersetzbar → unersetzlich hat Basis und Lösung identisch

Mehrdeutig, zwei zulässige Formen in einem Lösungsfeld: Perfidie → perfide/perfid

Zu streichen: Volk → völkisch (bereits genannt)



Beim Durchgehen der übrigen Einträge nach denselben Mustern suchen; die Liste ist nicht abschließend.

