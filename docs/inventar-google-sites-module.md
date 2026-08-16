# Inventar: Google-Sites-Module

Stand: 2026-08-14 · Quelle: `altmaterial/google-sites-module/`

> **Reine Bestandsaufnahme.** Es wurde nichts kopiert, verschoben, umbenannt,
> gelöscht oder migriert. Keine Übernahme in zentrale Lehrwerksdateien.

---

## 1. Kennzahlen

| Größe | Wert |
|---|---|
| Dateien gesamt | **177** |
| davon Temp-Artefakt (`~$…`) | 1 |
| **Effektiver Bestand** | **176** ✓ deckt sich mit Reginas Angabe |
| HTML-Module | 152 |
| Quellen-/Begleitdateien (`.md`, `.txt`) | 24 |
| Bilddateien | 1 (`telefonieren/telefonalphabet.png`) |
| Gesamtgröße | 6,7 MB |
| Themenordner oberste Ebene | 22 |
| Unterordner gesamt | 21 (davon 19 unter `Grammatik/`) |

**Das Wichtigste vorweg:** Dies ist **Eigenmaterial mit durchgängigem
Job-BSK-Bezug** — fertige, in sich geschlossene interaktive HTML-Module. Es
ist damit ein qualitativ völlig anderer Bestand als das bisher inventarisierte
Altmaterial (Verlags-PDFs, allgemeinsprachlich). Siehe Abschnitt 6.

---

## 2. Technischer Charakter

Stichprobe `Grammatik/Relativsatz/relativsaetze.html`:

- **Eigenständige HTML5-Seiten**, `lang="de"`, responsive (`viewport`-Meta).
- **CSS inline im `<style>`-Block**, mit gepflegtem Design-System über
  CSS-Custom-Properties (`--primary`, `--success`, `--maskulin`, `--feminin`,
  `--neutral`, `--plural` — Kasus-/Genusfarben sind systematisch angelegt).
- **Externe Abhängigkeit:** Google Fonts (`Nunito`) per `<link>`. Das ist die
  einzige gefundene externe Ressource und der einzige technische Punkt, der
  vor einer Offline-Nutzung zu klären wäre.
- Keine Frameworks, keine Build-Artefakte, keine `node_modules`.

**Größenverteilung:** Median rund 30 KB. Die fünf größten:

| Datei | Größe |
|---|---|
| `telefonieren/telefonieren.html` | 512 KB |
| `Grammatik/suffixe praefixe wortfamilien/wortfamilien.html` | 156 KB |
| `Grammatik/das wort es/pronomen es_version 2.html` | 135 KB |
| `Grammatik/das wort es/pronomen es.html` | 135 KB |
| `Kundengespraeche/kundengespraeche_sprechen.html` | 100 KB |

`telefonieren.html` fällt mit 512 KB deutlich aus dem Rahmen und sollte vor
einer Weiterverwendung angesehen werden — vermutlich mit eingebetteten Daten.

---

## 3. Struktur: 22 Themenordner

| Ordner | HTML | Charakter |
|---|---|---|
| **Grammatik** | **55** | 19 Unterordner, eigener Block — siehe Abschnitt 4 |
| sicherheit | 9 | Sicherheitsunterweisung, Rollenkarten, Websiteprojekt, Feedback |
| bueroorganisation_cloud_datenschutz | 9 | Office-Programme, Google Docs/Konto, Menüführung, Situationskarten |
| Beschwerden | 7 | allgemein, entgegennehmen, formulieren, höflich, Konjunktiv, schriftlich, Wortschatz |
| Bankkonto | 7 | Konto eröffnen, Dispokredit, P-Konto, Schufa, Redemittel, Präsentationsskript |
| Steuern | 6 | warum/wie/was ich brauche, Fristen & Kosten, Redemittel, Präsentationsskript |
| Recht | 6 | Mahnwesen (Widerspruch, gerichtlich, Redemittel), Inkasso echt/fake |
| Papierkram | 6 | Gehaltsabrechnung, Krankschreibung, Urlaub & Kündigung, Rechnung |
| Jobcenter | 6 | Erstgespräch, Folgegespräch, erster Besuch, Dokumente, Redemittel |
| arbeitsauftraege verstehen | 5 | Aufträge verstehen/erteilen, Verb `lassen`, Imperativ-Spiel, Notizzettel |
| Sprechen | 5 | Weg zum freien Sprechen, Automatisierung, höflich verneinen |
| wortschatz | 4 | Berufsleben, Ausbildung & Beruf, Sortieren |
| smalltalk | 4 | Redemittel, Knigge, Bingo, Sprechrunden |
| kursstart | 4 | Willkommen, Situationskarten, Willkommensmappe, Einstufungsquiz |
| Kursabschluss | 4 | „Letzte Tage“ tag1–tag4 |
| telefonieren | 3 | Telefonieren, Situationskarten, E-Mail nach Telefonat |
| Probleme | 3 | Probleme lösen, anwenden, Gruppenarbeit |
| Kundengespraeche | 3 | Telefon, Sprechen (+ Dublette) |
| Besprechungen und Meetings | 3 | Jour fixe, spontane Meetings |
| weihnachten | 1 | saisonal |
| Modalpartikeln | 1 | Prosodie und Tonfall |
| Arbeitszeugnisse | 1 | Arbeits- und Zwischenzeugnis |

### Erkennbare Modultypen

Über alle Ordner wiederholen sich fünf Bausteintypen — der Bestand ist
erkennbar nach einem Muster gebaut:

| Typ | Beispiele |
|---|---|
| **Themeneinführung** | `beschwerden_allgemein`, `mahnwesen`, `sicherheitsunterweisung` |
| **Redemittel** | `redemittel bank`, `redemittel_jobcenter`, `mahnwesen_Redemittel`, `smalltalk_redemittel` |
| **Situations-/Rollenkarten** | `situationskarten_buerodeutsch`, `telefonieren_situationskarten`, `sicherheit_rollenkarten` |
| **Präsentationsskript** | `banken praesentationsskript`, `praesantationsskript_jobcenter`, `praesentationsskript_steuererklaerung` |
| **Spiel / Interaktion** | `smalltalk_bingo`, `konjunktiv_roulette`, `es_karussell`, `spielhoelle`, `grammatik_endspiel` |

---

## 4. Der Grammatik-Block (55 HTML, 19 Unterordner)

Der mit Abstand größte Einzelblock und für das laufende Vorhaben der
relevanteste.

| Unterordner | Dateien |
|---|---|
| Spiele | 8 |
| satzstellung | 7 |
| Relativsatz | 5 |
| Konnektoren (inkl. `doppelte konnektoren`) | 5 |
| verben | 4 |
| das wort es | 3 |
| adjektivendungen | 3 |
| infinitiv mit zu | 3 |
| suffixe praefixe wortfamilien | 3 |
| konjunktiv | 3 |
| Modalverben, Reflexive Verben, kasus, nullartikel, partizipien als adjektive, praepositionen, pronominaladverbien, verb_werden, viel_viele | je 1 |
| direkt in `Grammatik/` | `ellipsen.html`, `zu viel_zu sehr.html` |

### Abgleich mit den 23 Themenpaketen aus `docs/aufbereitung-grammatik/`

**Themen mit direkter Entsprechung — hier liegt fertiges Job-BSK-Material:**

| Themenpaket | Module im Bestand |
|---|---|
| `relativsaetze.md` | 5 (inkl. Kasus, Sprechen, mit Präpositionen ×2) |
| `tekamolo-satzbau.md` | 7 (`tekamolo`, `mittelfeld`, `ergaenzungen und angaben`, `dativ_akkusativ_stellung`, `satzstellung` ×2, `satzbau strukturieren muendlich`) |
| `konnektoren.md` | 5, darunter **drei ausdrücklich als C1 ausgewiesen** |
| `infinitiv-mit-zu.md` | 3 |
| `konjunktiv-ii.md` | 3 (`konjunktiv`, `konjunktiv_roulette`, `beschwerden_konjunktiv`) |
| `modalverben.md` | 2, darunter **`subjektive modalverben`** |
| `trennbare-untrennbare-verben.md` | 2 (`trennbare_untrennbare`, `praefixe`) |
| `partizipien.md` | 1 (`partizipien als adjektive`) |
| `verben-mit-praepositionen.md` | 2 (`feste_praepositionen`, `pronominaladverbien_wofür_womit`) |
| `modalpartikeln.md` | 1 (`modalpartikeln_prosodie_tonfall`) |
| `negation.md` | 1 (`hoeflich verneinen`, in `Sprechen/`) |
| `passiv.md` | 2 (`lassen_passiv` ×2, in `Spiele/`) |

**Themen im Bestand ohne eigenes Themenpaket** — Kandidaten für eine
Erweiterung der Themenliste:

`adjektivendungen` (3) · `das wort es` (3) · `kasus / 4 Fälle` · `nullartikel` ·
`viel und viele` · `zu viel / zu sehr` · `ellipsen` · `reflexive Verben` ·
`verb werden` · `suffixe / Wortfamilien` (3) · `indirekte Fragen` ·
`wenn oder ob`

**Themenpakete ohne Entsprechung im Bestand** — hier bleibt die
Eigenentwicklung ohne Vorlage:

`passiversatzformen` · `konjunktiv-i-indirekte-rede` · `informationsstruktur` ·
`komplexe-satzverknuepfungen` · `adverbien` · `n-deklination` ·
`nomen-verb-verbindungen` · `partizipialattribute` ·
`nominalisierung-verbalisierung` · `stilistische-satzverdichtung`

**Bemerkenswert:** Die drei `C1_Konnektoren_*`-Module sind die **einzigen
Dateien im gesamten Altmaterial mit expliziter C1-Auszeichnung im Dateinamen**.
Das bisherige Inventar (`altmaterial-inventar.md`, Teil 6) stellte fest, C1 sei
„fast nichts“. Für Konnektoren trifft das nicht mehr zu.

---

## 5. Dubletten und Serien

### Echte Dubletten — per Inhalts-Hash geprüft, nicht nach Namen

**Sieben Paare, alle inhaltsgleich:**

| Datei A | Datei B |
|---|---|
| `Beschwerden/beschwerden_konjunktiv.html` | `Grammatik/konjunktiv/beschwerden_konjunktiv.html` |
| `Beschwerden/beschwerden_wortschatz.html` | `wortschatz/beschwerden_wortschatz.html` |
| `arbeitsauftraege verstehen/Imperativ Spiel.html` | `Grammatik/Spiele/Imperativ Spiel.html` |
| `Kundengespraeche/kundengespraeche_sprechen.html` | `Kundengespraeche/kundengespraeche_sprechen 2.html` |
| `Grammatik/Konnektoren/C1_Konnektoren_bedingung_folge.html` | `Grammatik/Konnektoren/C1_Konnektoren_version 3.html` |
| `Grammatik/infinitiv mit zu/infinitiv mit zu_version 2.html` | `…_version 3.html` |
| `bueroorganisation…/bürodeutsch_office-programme.html` | `…_version2.html` |

**Effektiv 145 verschiedene HTML-Module.**

Die ersten drei Paare sind **Mehrfachablagen desselben Moduls** an fachlich
sinnvollen Stellen (Beschwerden ↔ Grammatik, Beschwerden ↔ Wortschatz,
Arbeitsaufträge ↔ Grammatikspiele). Das ist kein Versehen, sondern
Doppelverlinkung — bei einer Migration ist zu entscheiden, ob das Modul einmal
liegt und mehrfach verlinkt wird.

Die letzten vier sind **Versionsartefakte**: Eine „version 2“/„version 3“ ist
identisch mit ihrer Vorgängerin. Hier ist eine Bereinigung unkritisch.

### Auflösung der sieben Paare — entschieden 2026-08-15

**Schritt 1 der Aufbereitung** (Reihenfolge von Regina freigegeben).
`altmaterial/` bleibt unverändert; festgelegt wird, **welche Fassung ins
Lehrwerk geht**.

| # | Paar | Entscheidung | Grund |
|---|---|---|---|
| 1 | `Beschwerden/beschwerden_konjunktiv` ↔ `Grammatik/konjunktiv/beschwerden_konjunktiv` | **eine Fassung, zwei Verlinkungen** | Mehrfachablage. Das Modul verbindet Beschwerdesituation und Konjunktiv II — es gehört fachlich in beide Bereiche. Im Lehrwerk liegt es unter `buero/`, die Grammatikseite verlinkt darauf. |
| 2 | `Beschwerden/beschwerden_wortschatz` ↔ `wortschatz/beschwerden_wortschatz` | **eine Fassung, zwei Verlinkungen** | dasselbe Muster |
| 3 | `arbeitsauftraege verstehen/Imperativ Spiel` ↔ `Grammatik/Spiele/Imperativ Spiel` | **eine Fassung**, Ablage unter `grammatik/` | Es ist ein Grammatikspiel; der Bezug zu Arbeitsaufträgen ist der Inhalt der Sätze, nicht das Lernziel. **Achtung:** trägt einen D9-Befund (Erstsprachenbezug), vor der Übernahme zu bereinigen. |
| 4 | `Kundengespraeche/kundengespraeche_sprechen` ↔ `… sprechen 2` | **`sprechen 2` entfällt** | bitidentisch (MD5 `36A934611FBD70F18C56D811C55B2343`). Das Leerzeichen im Dateinamen stört bei Pfadangaben; die unnummerierte Fassung ist der natürlichere Name. **Spart 76 Namensfundstellen.** |
| 5 | `Konnektoren/C1_Konnektoren_bedingung_folge` ↔ `C1_Konnektoren_version 3` | **`version 3` entfällt** — aber siehe unten | Dreierfall, gesondert behandelt |
| 6 | `infinitiv mit zu_version 2` ↔ `_version 3` | **`version 3` entfällt** | bitidentisch (MD5 `9624F1E2EF7925DF3ED25226908A27BC`). Beide sind das Modul „mit oder ohne zu“ — **keine Versionsreihe**, sondern ein eigener Block neben `infinitiv mit zu.html`. Beide Module bleiben, nur die Kopie entfällt. |
| 7 | `bürodeutsch_office-programme` ↔ `_version2` | **`version2` entfällt** | bitidentisch. **Spart 21 Namensfundstellen.** |

#### Sonderfall 5 — der Konnektorenblock hat drei Dateien

| Datei | Inhalt | Entscheidung |
|---|---|---|
| `C1_Konnektoren_bedingung_folge` | Erklärmodul, Phasenaufbau, authentische Textsorten | **behalten** als Erklärteil — **enthält den A-Fehler zu `es sei denn`**, vor der Übernahme zu korrigieren |
| `C1_Konnektoren_version 3` | bitidentisch mit `bedingung_folge` | **entfällt** |
| `C1_Konnektoren_version 2` | eigenständig: sechs Abschnitte, 34 Übungselemente, KONTOR-Kontext, Schreibaufgabe, **beste Prüffunktion des Blocks** | **behalten** als Übungsteil |

**Der A-Fehler steckt in beiden Kopien.** Wird `version 3` gestrichen und
`bedingung_folge` korrigiert, ist er einmal behoben statt zweimal — das ist
der praktische Ertrag dieser Auflösung.

#### Bilanz Schritt 1

| | |
|---|---|
| Dateien, die entfallen | **4** (`sprechen 2`, `C1_Konnektoren_version 3`, `infinitiv … _version 3`, `bürodeutsch … _version2`) |
| Dateien, die einmal liegen und mehrfach verlinkt werden | **3** (Beschwerden-Konjunktiv, Beschwerden-Wortschatz, Imperativ-Spiel) |
| eingesparte Namensfundstellen | **rund 135** von 919 |
| eingesparte Doppelkorrekturen | der A-Fehler `es sei denn`, die Perfektregel ist **nicht** betroffen (die beiden Lassen-Spiele sind keine Dubletten) |

**Damit sinkt der Aufbereitungsumfang von 152 auf 148 Dateien**, und drei
weitere müssen nur einmal bearbeitet werden.

### Versionsserien — nicht identisch, echte Varianten

| Serie | Dateien | Status |
|---|---|---|
| `spielhoelle` | 3 (`spielhoelle`, `_version2`, `_version3`) | alle drei **verschieden** |
| `pronomen es` | 2 (`pronomen es`, `_version 2`) | **verschieden**, beide 135 KB |
| `satzstellung` | 2 (`satzstellung`, `_version 2`) | **verschieden** |
| `C1_Konnektoren` | 3 | `version 2` eigenständig, `version 3` = `bedingung_folge` |
| `lassen_passiv` | 2 (`lassen_passiv`, `_2`) | **verschieden** |
| `relativsatz mit praepositionen` | 2 (`…`, `…_2`) | **verschieden** |
| `probleme loesen` | 2 (`loesen`, `loesen_anwenden`) | **verschieden** |

**Wichtig:** Bei diesen Serien ist ohne inhaltliche Sichtung **nicht
entscheidbar**, welche Fassung die aktuelle ist. Die Dateinamen geben es nicht
her — bei `C1_Konnektoren` ist „version 3“ identisch mit einer anders
benannten Datei, „version 2“ dagegen eigenständig. Das ist genau die Situation,
in der eine Bereinigung nach Namen Schaden anrichtet.

---

## 6. Quellenverzeichnisse — 22 Dateien

Anders als beim übrigen Altmaterial liegen die Quellenangaben hier **nicht**
als separates PDF je Posten, sondern als Markdown je Themenordner:

`Bankkonto Quellen.md` · `Quellen Beschwerden.md` ·
`Besprechungen und Meetings Quellen.md` · `Jobcenter Quellen.md` ·
`Modelpartikeln Quellen.md` · `Quellen Papierkram im Job.md` ·
`Mahnwesen Quellen.md` · `Steuern Quellen.md` · `Quellen Sicherheit.md` ·
`Quellen Kursstart.md` · `quelle_sprachbedarfsanalyse.md`

Im Grammatik-Block zusätzlich: `Quellen Doppelte Konnektoren.md` ·
`wenn oder ob Quellen.md` · `Reflexive Verben Quellen.md` ·
`Relativsatz Quellen.md` · `quellen.md` (adjektivendungen) ·
`Quellen Infinitiv mit oder ohne zu.md` · `Quellen Konjunktiv.md` ·
`Satzstellung Quellen.md`

Zwei Dateien sind **kein Quellenverzeichnis, sondern Inhalt**:
`Grammatik/Fragen/Indirekte Fragen.md` und
`Grammatik/partizipien als adjektive/Partizipien als Adjektive.md`. Beide
Ordner enthalten sonst wenig oder nichts — hier liegt Material, das noch nicht
in ein Modul überführt wurde.

**Inhalt ausgewertet** — siehe Abschnitt 6a. Das Ergebnis weicht deutlich von
der Erwartung ab.

### Aufräumkandidat

`Bankkonto/~$nkkonto Quellen.md` ist eine Word-Sperrdatei (Temp-Artefakt) und
kann gelöscht werden. Sie ist der Grund für die Differenz 177 zu 176.

---

## 6a. Auswertung der Quellendateien — zentrale Korrektur

**Die 22 Dateien sind keine Quellenverzeichnisse im urheberrechtlichen Sinn.**

Sie enthalten keine Angaben darüber, woher die Inhalte der Module stammen.
Sie sind **Sammlungen externer Fundstellen und Einbettungscodes** — Material,
das im Unterricht *zusätzlich* eingebunden wurde.

Das ist ein anderer Dateityp als die 311 `Quellenverzeichnis.pdf` aus
`komplettpaket`/`materialpaket`, die tatsächlich Herkunft dokumentieren. Der
Namensgleichklang führt in die Irre.

### Was tatsächlich drinsteht

| Plattform | Vorkommen | Form |
|---|---|---|
| **YouTube** | ~20 Videos | teils `<iframe>`-Einbettung, teils reiner Link |
| **Quizlet** | 5 | `<iframe>`-Einbettung, Match-Modus |
| **LearningApps** | 7 | `<iframe>` und Links |
| **Google Docs / Drive / Forms** | 8 | Freigabelinks (`usp=sharing`) |
| **Wordwall** | 2 | Community-Links, teils ohne konkretes Ziel |
| **Kahoot** | 1 | nur als Titel genannt, kein Link |
| **DW LearnGerman** | 1 | Link |
| **ZUM Deutsch lernen** | 1 | Link |

Vereinzelt steht auch **echter Inhalt** in diesen Dateien statt einer Quelle:
`Besprechungen und Meetings Quellen.md` enthält eine vollständige, offenkundig
selbst verfasste Redemittelsammlung für Moderation (Tagesordnung, Protokoll,
höflich unterbrechen, Zusammenfassen). Das ist verwertbares Eigenmaterial, das
an der falschen Stelle liegt.

### Nutzungsstatus je Themenordner

| Ordner | Externe Einbindungen | Status |
|---|---|---|
| Bankkonto | DW LearnGerman, 1 YouTube, 1 Quizlet | extern abhängig |
| Beschwerden | 1 YouTube | extern abhängig |
| Besprechungen und Meetings | 1 YouTube, 2 Quizlet, 1 LearningApps · **+ Eigenmaterial** | gemischt |
| Jobcenter | 3 YouTube, 1 Quizlet | extern abhängig |
| Modalpartikeln | 5 YouTube | **vollständig extern** |
| Papierkram | 1 YouTube, 1 Quizlet | extern abhängig |
| Recht (Mahnwesen) | 3 YouTube, 1 Google Drive | extern abhängig |
| Steuern | 1 YouTube, 1 Quizlet | extern abhängig |
| kursstart | 1 Google Docs, 1 Google Forms | **vollständig extern** |
| sicherheit | 1 Google Docs, 1 Quizlet | extern abhängig |
| Grammatik/Fragen | 1 YouTube | **nur Quelle, kein Modul** |
| Grammatik/Konnektoren (wenn/ob) | 1 YouTube | extern abhängig |
| Grammatik/doppelte konnektoren | 2 Google Docs, 1 LearningApps | extern abhängig |
| Grammatik/Reflexive Verben | 1 Google Docs | extern abhängig |
| Grammatik/Relativsatz | 2 YouTube, 3 LearningApps, Wordwall, Kahoot | extern abhängig |
| Grammatik/adjektivendungen | 2 YouTube | extern abhängig |
| Grammatik/infinitiv mit zu | 3 LearningApps, ZUM, Wordwall | extern abhängig |
| Grammatik/konjunktiv | 1 LearningApps | extern abhängig |
| Grammatik/partizipien als adjektive | 1 Google Docs | **nur Quelle, kein Modul** |
| Grammatik/satzstellung | 1 LearningApps | extern abhängig |

### Lizenzhinweise

**Es gibt keine.** In keiner der 22 Dateien steht eine Lizenzangabe, ein
Urheberrechtsvermerk oder eine Nutzungserlaubnis.

### Risiken — nach Gewicht

1. **Datenschutz (das größte Risiko).** Die YouTube-Einbettungen sind
   `<iframe>`-Codes mit `youtube.com` als Host, nicht `youtube-nocookie.com`.
   Sie setzen beim Seitenaufruf Cookies und übertragen die IP-Adresse, **bevor**
   eine Einwilligung eingeholt wird. Für ein Lehrwerk, das in Kursen eingesetzt
   und ggf. öffentlich ausgeliefert wird, ist das im deutschen Kontext ein
   ernstzunehmender Punkt. Dasselbe gilt für Quizlet- und
   LearningApps-Einbettungen.
2. **Bindung an ein persönliches Konto.** Alle fünf Quizlet-Einbettungen
   tragen denselben Parameter `i=1b6xuf` — eine Konto-/Nutzerkennung. Die acht
   Google-Links sind Freigabelinks aus einem privaten Drive
   (`usp=sharing`, teils mit `#heading=`-Anker). Wenn dieses Konto wechselt,
   die Freigabe erlischt oder ein Set gelöscht wird, brechen die Module an
   diesen Stellen. **Nichts davon liegt lokal vor.**
3. **Link-Rot.** Rund 45 externe Fundstellen, davon ~20 YouTube-Videos von
   Dritten. Erfahrungsgemäß sind nach zwei bis drei Jahren einzelne davon nicht
   mehr erreichbar. Ein Lehrwerk, das darauf aufbaut, veraltet ohne eigenes
   Zutun.
4. **Urheberrecht bleibt ungeklärt.** Die eigentliche Frage — stammt der
   Inhalt der 152 Module aus eigener Feder? — wird von diesen Dateien **nicht
   beantwortet**. Das Einbetten fremder YouTube-Videos ist rechtlich
   weitgehend unproblematisch (Framing), sagt aber nichts über die Modulinhalte.
   **Die Rechtefrage ist damit weiterhin offen.**
5. **Zwei Wordwall-Einträge zeigen ins Leere** — `wordwall.net/de/community`
   ohne konkretes Ziel, und „Wordwall: Gemeinschaftliche Ressourcen“ ohne Link.
   Der Kahoot-Eintrag nennt nur einen Titel.
6. **Ein Fehler in `Modelpartikeln Quellen.md`:** „Video1 Aber“ und
   „Video 2 Halt“ verweisen auf **dieselbe** URL (`CWCsXRWtOaQ`). Eines der
   beiden Videos fehlt. (Die Datei heißt außerdem `Modelpartikeln`, nicht
   `Modalpartikeln`.)
7. **Kodierungsproblem:** `Grammatik/Relativsatz/Relativsatz Quellen.md` ist
   **UTF-16** statt UTF-8. Umlaute erscheinen in vielen Werkzeugen als
   Ersatzzeichen. Einzelfall, leicht zu beheben.

---

## 6b. Blocker — getrennt von den übrigen Risiken

> **Stand 2026-08-14: Alle drei Blocker sind von Regina entschieden.** Siehe
> Abschnitt 8a. Die folgende Tabelle bleibt als Dokumentation der Fragestellung
> erhalten; sie ist nicht mehr offen.

**Echte Blocker (halten eine Migration auf, nur von Regina lösbar):**

| # | Blocker | Warum blockierend |
|---|---|---|
| **B1** | **Urheberschaft der 152 Module ist undokumentiert.** Keine der 22 Dateien sagt, ob die Modulinhalte selbst verfasst sind. Keine Lizenzangabe, kein Urhebervermerk — im gesamten Bestand nicht. | Ohne diese Antwort ist nicht entscheidbar, ob der Bestand wie Eigenmaterial (übernehmbar) oder wie Referenzmaterial (nur Struktur ableitbar) zu behandeln ist. Das bestimmt jeden weiteren Schritt. |
| **B2** | **Datenschutz der Einbettungen.** ~20 YouTube-`<iframe>`s auf `youtube.com` statt `youtube-nocookie.com`, dazu Quizlet- und LearningApps-Embeds. Cookies und IP-Übertragung vor Einwilligung. | Bei Auslieferung eines Lehrwerks im deutschen Kontext rechtlich relevant. Muss vor Veröffentlichung entschieden sein, nicht danach. |
| **B3** | **Kontobindung ohne lokale Kopie.** 5 Quizlet-Embeds mit derselben Kennung `i=1b6xuf`, 8 Google-Freigabelinks (`usp=sharing`) aus einem privaten Drive. Nichts davon liegt lokal vor. | Wenn Konto, Freigabe oder Set wegfällt, brechen die betroffenen Module. Ein Lehrwerk kann nicht auf Freigabelinks eines Privatkontos aufbauen. |

**Keine Blocker** (behebbar, ohne Entscheidungsbedarf):

- Link-Rot-Risiko bei ~20 fremden YouTube-Videos — bekannt, planbar.
- `Modelpartikeln Quellen.md`: „Video 1 Aber“ und „Video 2 Halt“ zeigen auf
  dieselbe URL; ein Video fehlt. Dateiname zudem `Modelpartikeln` statt
  `Modalpartikeln`.
- `Relativsatz Quellen.md` ist UTF-16 statt UTF-8.
- Zwei Wordwall-Einträge ohne konkretes Ziel, ein Kahoot-Eintrag ohne Link.
- `Bankkonto/~$nkkonto Quellen.md` — Word-Sperrdatei, löschbar.
- Eigenmaterial (Redemittel Moderation) liegt in einer Quellendatei statt in
  einem Modul.

---

## 6c. Audio im Bestand — geprüft

Der offene Punkt 4 der Querschnittsentscheidungen (Audio-Produktionsbedarf für
[modalpartikeln.md](aufbereitung-grammatik/modalpartikeln.md)) ist geklärt.

**Von 152 Modulen enthalten genau zwei überhaupt Ton:**

| Modul | Technik | Bewertung |
|---|---|---|
| `telefonieren/telefonieren.html` | `<audio>` mit **base64-eingebettetem MP3** (`data:audio/mp…`) | **Echtes, lokal eingebettetes Tonmaterial.** Keine externe Abhängigkeit. Erklärt zugleich die auffälligen 512 KB Dateigröße aus Abschnitt 2 — die Frage ist damit beantwortet. |
| `Sprechen/automatisierung.html` | Web Speech API (`speechSynthesis`, `SpeechSynthesisUtterance`) | **Kein Tonmaterial**, sondern Browser-Sprachsynthese zur Laufzeit. Funktioniert ohne Dateien, klingt aber synthetisch und ist je nach Browser unterschiedlich. |

**`modalpartikeln_prosodie_tonfall.html` enthält keinerlei Audio** — weder
eingebettet noch verlinkt, auch keine Sprachsynthese. Das Tonmaterial dieses
Themas sind ausschließlich die fünf fremden YouTube-Videos aus der
Quellendatei.

**Ergebnis:** Der gemeldete Produktionsbedarf besteht **weiter**. Wenn das
Lehrwerk unabhängig von YouTube funktionieren soll, braucht `modalpartikeln`
eigene Aufnahmen. Dasselbe gilt für
[trennbare-untrennbare-verben.md](aufbereitung-grammatik/trennbare-untrennbare-verben.md),
wo die Betonungsregel ohne Ton nicht vermittelbar ist.

**Positiver Nebenbefund:** `telefonieren.html` zeigt, dass eingebettetes
base64-Audio in diesem Modulformat funktioniert. Es gibt also ein erprobtes
technisches Muster im Haus — die Audio-Frage ist eine Produktions-, keine
Technikfrage.

---

## 7. Einordnung gegenüber dem bisherigen Altmaterial

Das bisherige Inventar (`docs/altmaterial-inventar.md`) kommt zu drei
Kernbefunden, die durch diesen Bestand **teilweise überholt** sind:

| Befund bisher | Gilt weiterhin? |
|---|---|
| „Der Bestand ist durchgängig **allgemeinsprachlich**. Job-Kontext findet sich nur in wenigen Einzelposten.“ (Teil 6) | **Nein.** Dieser Bestand ist durchgehend berufsbezogen — Jobcenter, Bankkonto, Steuern, Mahnwesen, Beschwerden, Arbeitszeugnis, Büroorganisation. |
| „**C1** — fast nichts.“ (Teil 6) | **Eingeschränkt.** Drei explizite C1-Module (Konnektoren), dazu `subjektive modalverben` und `modalpartikeln_prosodie_tonfall` als klare C1-Themen. Für die meisten Themen bleibt der Befund. |
| „Der Eigenbestand aus Teil 4 ist die einzige Quelle, aus der tatsächlich Material übernommen werden kann.“ (Teil 6) | **Nein.** Dieser Bestand ist der weit größere und weit besser passende Eigenbestand. |
| „Register ist die größte Einzellücke.“ (Teil 7) | **Teilweise entschärft.** `Sprechen/hoeflich verneinen`, `smalltalk_knigge`, `modalpartikeln_prosodie_tonfall`, die Redemittel-Module und die Rollenkarten decken genau das informell-kollegiale Register ab, das dort als fehlend markiert war. |

**Konsequenz:** Abschnitt 13 („Materialgrundlage“) in allen 23 Themenpaketen
enthält die Aussage, der Altbestand sei allgemeinsprachlich und ohne
C1-Deckung. Diese Aussage ist nach diesem Fund **in allen 23 Paketen zu
korrigieren**. Wie mit Leo abgestimmt, erfolgt das gesammelt in einem
Durchgang — nicht jetzt.

---

## 8. Offene Fragen — vor jeder Weiterverwendung zu klären

> **Punkte 1, 1a und 1b sind seit dem 2026-08-14 durch Reginas Entscheidung
> B1–B3 beantwortet** (Abschnitt 8a). Der Abschnitt bleibt als Dokumentation
> des Prüfwegs stehen.

1. **Urheberrecht — weiterhin offen.** Die 22 Quellendateien sind
   ausgewertet (Abschnitt 6a), beantworten die Frage aber **nicht**: Sie
   dokumentieren eingebundene Fremdressourcen, nicht die Herkunft der
   Modulinhalte. Ob die 152 Module eigenständig verfasst sind, kann nur Regina
   beantworten. Davon hängt ab, ob dieser Bestand wie Eigenmaterial oder wie
   Referenzmaterial zu behandeln ist — und damit alles Weitere.
1a. **Datenschutz.** ~45 externe Einbindungen, darunter ~20
   YouTube-`<iframe>`s ohne `nocookie`-Variante. Vor Auslieferung zu klären.
1b. **Kontobindung.** Quizlet-Einbettungen und Google-Freigabelinks hängen an
   einem persönlichen Konto. Nichts liegt lokal vor.
2. **Aktualität der Versionsserien.** Bei sieben Serien ist unklar, welche
   Fassung gilt. Nicht nach Dateinamen entscheiden.
3. **Externe Abhängigkeit.** Google Fonts per `<link>`. Vor Offline- oder
   Datenschutz-kritischer Nutzung zu ersetzen.
4. **`telefonieren.html`** mit 512 KB — Ursache prüfen.
5. **Doppelablagen.** Drei Module liegen bewusst zweifach. Bei einer Migration
   ist zu entscheiden: einmal ablegen und mehrfach verlinken, oder Doppelung
   beibehalten.
6. **Verhältnis zum bestehenden Lehrwerk.** Das Repo enthält bereits
   `grammatik/`, `buero/`, `kurs/`, `training/` und `inhalt.json`. Ob und wie
   sich diese Module dazu verhalten — Vorläufer, Parallelentwicklung,
   Ergänzung —, ist **nicht** aus dem Dateibestand ableitbar und muss von
   Regina beantwortet werden.

---

## 8a. Entscheidungen von Regina (2026-08-14)

Die drei Blocker aus Abschnitt 6b sind entschieden.

| Blocker | Entscheidung |
|---|---|
| **B1 — Urheberschaft** | **Die 152 relevanten Module sind von Regina selbst verfasst.** Der Bestand ist damit Eigenmaterial. |
| **B2 — externe Einbettungen** | **Möglichst durch lokale bzw. eigene Lösungen ersetzen.** |
| **B3 — Kontobindung** | **Inhalte aus Google- und Quizlet-Beständen inhaltlich erhalten, aber vom Privatkonto entkoppeln.** |

### Was daraus folgt

**Zu B1 — die Rechtelage ist geklärt.** Der Bestand fällt **nicht** unter die
Referenzregel des Grammatikauftrags. Formulierungen, Aufgaben, Beispiele und
Lösungen dürfen übernommen werden. Das unterscheidet ihn von `materialpaket
b2`, `komplettpaket B1 B2` und `easy deutsch`, bei denen die Beschränkung
weiter gilt.

**Wichtige Abgrenzung:** B1 gilt für die **Module**. Die rund 20 eingebetteten
YouTube-Videos sind Inhalte Dritter und **nicht** von der Entscheidung erfasst.
Für sie bedeutet B2 nicht „lokal spiegeln“ — das wäre eine
Urheberrechtsverletzung —, sondern **ersetzen oder weglassen**. Diese
Unterscheidung ist der wichtigste Einzelpunkt für die Umsetzung.

**Zu B2 — Umfang der Ersetzung.** Rund 45 externe Einbindungen, aufgeteilt
nach dem, was tatsächlich zu tun ist:

**Präzisierung durch Regina (2026-08-14):** Die Urheberschaft nach B1 gilt für
die **HTML-Module** und **die meisten Quizlet-Sets**. Videos, Wordwall und
LearningApps stammen dagegen **überwiegend aus dem Netz** und sind fremd.

| Typ | Anzahl | Inhalt gehört … | Vorgehen |
|---|---|---|---|
| YouTube-Videos | ~20 | **Dritten** | ersetzen (eigene Aufnahme) oder streichen. Kein Spiegeln. |
| LearningApps | 7 | **Dritten** | ebenso — nicht nachbauen, sondern ersetzen oder streichen |
| Wordwall | 2 | **Dritten** | zeigen ohnehin ins Leere, ersatzlos streichen |
| Kahoot | 1 | **Dritten** | nur Titel, kein Link, streichen |
| DW LearnGerman, ZUM | 2 | **Dritten** | als Linkempfehlung belassen, nicht einbetten |
| Quizlet-Sets | 5 | Regina (überwiegend) | Inhalt exportieren, als eigenes Modul nachbauen. **Je Set prüfen** — nicht alle sind eigen. |
| Google Docs / Drive | 7 | Regina | Inhalt ins Repo überführen |
| Google Forms | 1 | Regina | Ersatz nötig (Formularfunktion) |
| Google Fonts (`Nunito`) | 1 pro Modul | Google | Schrift lokal einbinden |

**Bilanz nach der Präzisierung:** Von rund 45 externen Einbindungen sind
**32 fremd** und damit nicht nachbaubar — sie müssen ersetzt oder gestrichen
werden. Nur **13** (Quizlet, Google Docs, Forms) enthalten eigene Inhalte, die
sich überführen lassen. Das verschiebt den Aufwand deutlich in Richtung
Neuproduktion und Streichung.

**Offen:** Welche der fünf Quizlet-Sets eigen sind und welche nicht. Das lässt
sich nur im Konto sehen und gehört zu Phase 1.

**Zu B3 — Entkopplung.** Betroffen sind die fünf Quizlet-Einbettungen mit der
Kennung `i=1b6xuf` und die acht Google-Freigabelinks. Der Inhalt bleibt, die
Anbindung an das Privatkonto entfällt. Praktisch heißt das: exportieren,
lokal ablegen, im Modul neu umsetzen.

**Technisch gibt es dafür bereits ein erprobtes Muster im Haus.** Die Module
sind eigenständige HTML5-Seiten mit inline CSS und ohne Framework;
`telefonieren/telefonieren.html` zeigt, dass sogar Audio als base64 direkt
eingebettet werden kann. Ein interaktives Quiz lässt sich in demselben Format
nachbauen — es ist eine Fleiß-, keine Technikfrage.

### Zwei Folgen für bereits abgeschlossene Arbeit

1. **Abschnitt 13 der 23 Grammatikpakete ist jetzt zu korrigieren.** Dort steht
   durchgängig, der Altbestand sei „durchgehend allgemeinsprachlich“ und C1 sei
   „fast nichts“. Mit B1 ist belegt, dass daneben ein berufsbezogener
   Eigenbestand von 152 Modulen existiert. Die Korrektur erfolgt wie mit Leo
   abgestimmt **gesammelt in einem Durchgang**.
2. **Der Audio-Produktionsbedarf ist bestätigt.** Weil B2 lokale Lösungen
   verlangt, fallen die fünf YouTube-Videos zu den Modalpartikeln weg. Für
   [modalpartikeln.md](aufbereitung-grammatik/modalpartikeln.md) und
   [trennbare-untrennbare-verben.md](aufbereitung-grammatik/trennbare-untrennbare-verben.md)
   braucht es **eigene Aufnahmen**. Damit ist auch Punkt 4 der
   Querschnittsentscheidungen beantwortet.

---

## 8c. B4 — Personenbezogene Daten (Ergänzung Regina, 2026-08-14)

**Vorgabe:** Viele Module wurden individuell für konkrete Teilnehmende
erstellt und enthalten deren Namen, Arbeitgeber oder andere personenbezogene
Angaben. Diese Inhalte **nicht 1:1 übernehmen**. Bei der Aufbereitung alle
personenbezogenen Angaben und individuellen Firmenbezüge erkennen und in
neutrale, modellhafte Job-BSK-Szenarien überführen. Idee, Aufgabenlogik und
beruflicher Kontext dürfen bleiben; Namen, reale Arbeitgeber und
identifizierende Details sind zu anonymisieren oder durch Modellpersonen und
-firmen zu ersetzen. Ein realer Firmenbezug darf allenfalls als
**Strukturvorbild** dienen, nie als identifizierbarer Fall.

### Umfang — gemessen, nicht geschätzt

**73 der 152 Module (48 %) enthalten Vornamen von Teilnehmenden.**
Insgesamt rund **1.400 Vorkommen**.

| Vorname | Vorkommen |
|---|---|
| Nataliia | 409 |
| Anastasiia | 349 |
| Nadiia | 311 |
| Olena | 203 |
| Tetiana | 126 |

Dazu **Nachnamen**, teils mit Vornamen kombiniert: Barkova, Kovalenko,
Cherevatenko, Mykhailova. Beispiel aus `Kundengespraeche`:
`Guten Tag, mein Name ist Olena Barkova.`

### Drei Kategorien, unterschiedlich kritisch

**1. Strukturelle Personalisierung — der auffälligste Fall.**
`Grammatik/das wort es/pronomen es.html` und die Version 2 verwenden
**CSS-Klassen, die nach Teilnehmenden benannt sind**: `tag-anastasiia`,
`tag-nataliia`, `tag-nadiia` — 126 Vorkommen. Daneben `tag-general`. Die
Module sind also nicht nur inhaltlich, sondern **im Code auf Einzelpersonen
zugeschnitten**. Eine Textersetzung allein genügt hier nicht; die Struktur
muss umgebaut werden.

**2. Realer Arbeitgeber mit identifizierenden Details.**
`Geiping` erscheint als konkreter Arbeitgeber, zusätzlich `Geiping GmbH` und
`Frau Geiping` als Ansprechpartnerin. Die Aufgaben enthalten betriebliche
Einzelheiten: `Wie viele Filialen … bei Geiping insgesamt?`, dazu ein
Profil-Tag `Bäckerei`. Das ist ein realer, benennbarer Betrieb — genau der
Fall, den die Vorgabe ausschließt.

**3. Sensible biografische Angaben.** In `Kundengespraeche` und
`Arbeitszeugnisse` stehen Erwerbsbiografien einzelner Personen, unter anderem:
Herkunftsland, frühere Tätigkeit (`in der Ukraine im Bankwesen gearbeitet`)
und **frühere Arbeitslosigkeit** (`Bevor sie zu Geiping kam, … schon einmal
arbeitslos`). Das sind besonders schützenswerte Angaben, keine bloßen
Namensnennungen.

### Unproblematisch — Modellfirmen und Platzhalternamen

Nicht alles ist personenbezogen. Zwei Firmen wirken erfunden und können als
Modellfirmen erhalten bleiben:

| Firma | Vorkommen | Status |
|---|---|---|
| KONTOR AG | 86 | **von Regina bestätigt: eigene Erfindung für die BSK-Kurse** (2026-08-14) |
| IntegraPro GmbH | 9 | wirkt erfunden, **noch nicht ausdrücklich bestätigt** |

**Offen:** Ob `IntegraPro GmbH`, `Mühle Westfalen` und `Bäckerei Geiping`
erfunden oder real sind. Bei Geiping spricht alles für einen realen Betrieb
(vgl. Kategorie A in Abschnitt 8d); bei den beiden anderen ist es ungeklärt.

Ebenso die üblichen deutschen Platzhalternamen — Müller, Schmidt, Becker,
Wagner, Weber, Hoffmann, Brandt, Berger, Hartmann. Sie sind bereits
modellhaft und brauchen keine Ersetzung.

**Damit ist die Aufgabe klarer umrissen, als die Gesamtzahl vermuten lässt:**
Zu ersetzen sind fünf Vornamen, vier Nachnamen und ein Firmenbezug — nicht
1.400 Einzelentscheidungen.

### Bewertung

**B4 ist der kritischste der vier Punkte.** B1 bis B3 betreffen
Verwertbarkeit und Technik; B4 betrifft **Persönlichkeitsrechte lebender
Personen**. Solange die Namen im Bestand stehen, darf kein Modul
veröffentlicht oder außerhalb des Kurses weitergegeben werden.

**Konsequenz für den Plan:** Die Anonymisierung ist **Voraussetzung jeder
Migration**, nicht ein späterer Schritt. Sie wird in Phase 2 als 2.7
aufgenommen und ist gegenüber allem in Phase 3 und 5 vorrangig.

**Nicht geprüft:** Ob in den Modulen weitere personenbezogene Angaben stecken,
die sich nicht über Namen finden lassen — Geburtsdaten, Adressen,
Telefonnummern, Kontonummern, Steuer-IDs. Gerade die Ordner `Bankkonto`,
`Steuern`, `Papierkram` und `Jobcenter` sind dafür anfällig, weil dort mit
echten Formularen gearbeitet wird. Das gehört in Phase 2 mitgeprüft.

---

## 8d. Prüfbericht — weitere personenbezogene Daten (2026-08-14)

Systematische Suche über alle 152 Module nach Adressen, Geburtsdaten,
Telefon-, Konto-, Steuer- und sonstigen Identifikationsnummern.
**Read-only, nichts verändert.**

> **Präzisierung Regina (2026-08-14): Die E-Mail-Adressen selbst sind
> erfunden. `Geiping` ist jedoch ein realer Arbeitgeber und ausdrücklich zu
> markieren.** Das entschärft die Adressen als solche — der kritische Punkt
> bleibt aber bestehen, weil nicht die Postfächer das Problem sind, sondern
> der **benannte reale Betrieb in Verbindung mit einem Teilnehmernamen**.

### Kategorie A — hoch sensibel, muss ersetzt werden

| Fund | Vorkommen | Wo | Warum kritisch |
|---|---|---|---|
| `a.mykhailova@geiping-baeckerei.de` | 2 | `bueroorganisation_cloud_datenschutz/bürodeutsch_office-programme.html` + Version 2 | Adresse fiktiv, **Kombination trotzdem kritisch**: Nachname einer Teilnehmerin plus Name eines realen Betriebs. Die Person bleibt identifizierbar und ihr Arbeitgeber benannt — unabhängig davon, ob das Postfach existiert. |

### Kategorie B — realer Firmenbezug, zu neutralisieren

| Fund | Vorkommen | Bewertung |
|---|---|---|
| `Geiping` / `Bäckerei Geiping` / `geiping-baeckerei.de` | **93 Vorkommen in 19 Modulen** | **Von Regina bestätigt: realer Arbeitgeber.** Durchgehend zu ersetzen — nicht nur in den E-Mail-Adressen, sondern überall im Bestand. |
| **`Western Union`** | **94 Vorkommen** | **weiterer realer Arbeitgeber** — Nadiia zugeordnet. Nachträglich gefunden (2026-08-14). |
| **`Hecht Contactlinsen`** | **63 Vorkommen** | **weiterer realer Arbeitgeber** — Nataliia zugeordnet. Nachträglich gefunden. |
| **`Kolping-Bäckerei`** / `Kolping-Zentrale` | **12 Vorkommen** | **weiterer realer Arbeitgeber** — Anastasiia zugeordnet. Nachträglich gefunden. **Widerspruch:** Anastasiia ist andernorts der `Bäckerei Geiping` zugeordnet. Zwei verschiedene reale Bäckereien für dieselbe Person — entweder Arbeitgeberwechsel oder eine der beiden ist bereits eine Ersetzung. Von Regina zu klären. |
| **`Jobcenter`** | **mehrere Module**, u. a. der gesamte Behördenblock | **reale Behörde als Arbeitsplatz** — Ahmed zugeordnet. Nachträglich gefunden (2026-08-15). Siehe den Sonderfall unten. |
| **`KiK`** | **1 Vorkommen** (`beschwerden_formulieren`, Rollenspiel „Alina bei Kik“) | **realer Arbeitgeber** — Alina zugeordnet. Nachträglich gefunden (2026-08-15). |

#### Namensgebundene Speicherschlüssel in **31 Modulen** (gefunden 2026-08-15)

**Eine bisher unbekannte Form des Personenbezugs:** Der Name steht nicht
nur im Text, sondern im **`localStorage`-Schlüssel** — dort, wo die
Eingaben der Teilnehmenden dauerhaft im Browser abgelegt werden.

```js
localStorage.setItem('olena_block5_erfahrung', JSON.stringify(data));
localStorage.setItem('yana_block1_eskalation', …);
localStorage.setItem('ahmed_block2_erstgespraech', …);
localStorage.setItem('tetiana_block2_krank', …);
```

**31 Dateien, fünf durchnummerierte Themenreihen** — jede einer Person
zugeordnet:

| Reihe | Person | Module | Thema |
|---|---|---|---|
| `olena_block1…7` | Olena | 7 | **Bankkonto** — Schufa · Dispokredit · P-Konto |
| `yana_block1…6` | Yana | 6 | **Mahnwesen** — Inkasso · gerichtliches Mahnverfahren · Widerspruch |
| `ahmed_block1…6` | Ahmed | 6 | **Jobcenter** — Erstgespräch · Folgegespräch · Dokumente |
| `tetiana_block1…6` | Tetiana | 6 | **Papierkram** — Krankschreibung · Gehaltsabrechnung · Kündigung |
| *(Steuern)* | — | 6 | **Steuererklärung** |

**Das ist die Struktur des ganzen Behörden- und Organisationsbereichs:**
Jede Teilnehmerin hat ein eigenes Themenpaket bekommen, das sie im Kurs
präsentiert — erkennbar an den `praesentationsskript`-Modulen am Ende jeder
Reihe. Der Titel bestätigt es:
`<title>Olena – Block 5: Meine Erfahrung</title>`.

**Zwei Gründe, warum das schwerer wiegt als ein Name im Fließtext:**

1. **Die Themen sind sensibel.** Schufa, Dispokredit und **P-Konto**
   (Pfändungsschutzkonto) sind keine neutralen Sachthemen — ein P-Konto
   braucht, wessen Konto gepfändet wird. Dasselbe gilt für die
   Mahnwesen-Reihe (Inkasso, gerichtliches Mahnverfahren) und für die
   Jobcenter-Reihe.
2. **Es wird gespeichert.** `Bankkonto/eigene erfahrungen.html` fordert
   ausdrücklich: „Erzähle von deinen eigenen Erfahrungen mit Banken in
   Deutschland“ — und legt die Antwort unter `olena_block5_erfahrung` im
   Browser ab. Personenbezogene Angabe **plus** Personenname **plus**
   Dauerhaftigkeit.

**Wichtig zur Einordnung:** Die Zuordnung Person ↔ Thema sagt **nicht**,
dass die Person betroffen ist. Ein Referatsthema kann frei gewählt oder
zugeteilt sein. **Aber die Kombination ist geeignet, diesen Eindruck zu
erzeugen** — und genau das ist bei einem veröffentlichten Lehrwerk das
Problem.

**Nachprüfung des Inhalts — Ergebnis zugunsten des Materials.** Die
sensiblen Module selbst sind **konsequent unpersönlich geschrieben.**
`Bankkonto/p-konto.html` etwa spricht durchgehend in der dritten Person:

> „P-Konto = Pfändungsschutzkonto – ein Schutz für **Menschen mit
> Schulden**“ · „**Wenn jemand** Schulden hat, können Gläubiger das Konto
> pfänden“ · „Beispiel: **Jemand** hat Schulden beim Telefonanbieter.“

**Kein einziges „du“ oder „deine Schulden“.** Das ist bei diesem Thema die
richtige Distanz und offensichtlich bewusst gesetzt.

**Damit verengt sich der Befund erheblich.** Problematisch sind nicht die
Inhalte, sondern **zwei technische Beigaben**:

1. der **Speicherschlüssel** mit dem Vornamen (`olena_block…`),
2. der **Modultitel** (`<title>Olena – Block 5: Meine Erfahrung</title>`).

**Eine Ausnahme:** `Bankkonto/eigene erfahrungen.html` ist als einziges
Modul der Reihe **ausdrücklich persönlich** angelegt („Erzähle von deinen
eigenen Erfahrungen mit Banken in Deutschland“) und speichert die Antwort.
Nur für dieses Modul stellt sich die didaktische Frage; die übrigen sechs
sind Sachmodule.

**Folgen für die Aufbereitung:**

* Die Speicherschlüssel müssen **generisch** werden (`bsk-modul-<thema>`),
  wie es die Plattform mit `Lehrwerk.modul()` ohnehin vorsieht.
* Die Zuordnung Person ↔ Thema entfällt ersatzlos. Die Themenreihen selbst
  sind fachlich wertvoll und bleiben.
* **`Bankkonto/eigene erfahrungen.html` braucht eine eigene Entscheidung**
  von Regina: Ob ein Lehrwerksmodul zum Erzählen eigener Bankerfahrungen
  auffordert und diese speichert, ist eine didaktische und
  datenschutzrechtliche Frage zugleich.

#### Höchste Stufe: **Vor- und Nachnamen in 20 Modulen** (gefunden 2026-08-15)

Bisher war die Annahme, der Bestand führe **Vornamen**. Das stimmt nicht.
**Zwanzig Module enthalten vollständige Namen:**

| Name | Fundorte (Auswahl) |
|---|---|
| `Anastasiia Mykhailova` | `bürodeutsch_office-programme` (6×, in beiden Fassungen) · `jour fixe` |
| `Nataliia Khymatullina` | `jour fixe` · `Besprechungen und Meetings` |
| `Nadiia Cherevatenko` | `jour fixe` · `Besprechungen und Meetings` |
| `Olena Barkova` | `kundengespraeche_sprechen` (4×, beide Fassungen) |
| `Olena Karpenko` | `willkommensmappe` (3×) |
| `Olena Kowalenko` | `willkommen_situationskarten` |

**Betroffen sind auch Grammatikmodule**, die in der bisherigen Prüfung nur
als „Vorname“-Fälle geführt wurden: `pronomen es` (+ Version 2),
`subjektive modalverben`, `relativsatz mit praepositionen`, `konjunktiv`,
`verb werden`, `grammatik_endspiel`.

**Bewertung: das ist die schwerste Kategorie.** Ein Vorname in einer
Übungsaufgabe ist schwach identifizierend; **Vor- und Nachname zusammen mit
Arbeitgeber, Funktion und Kursort ist es unmittelbar.** In mehreren Modulen
stehen genau diese Angaben nebeneinander — `jour fixe` etwa nennt
`Anastasiia Mykhailova` mit Zuständigkeit, `Nataliia Khymatullina
(Auftragsabwicklung)` und `Nadiia Cherevatenko (Zahlungsklärung)`.

**Drei verschiedene Nachnamen für „Olena“** (`Barkova`, `Karpenko`,
`Kowalenko`) deuten darauf hin, dass mindestens zwei davon bereits
Ersetzungen sind — oder dass mehrere Personen den Vornamen tragen. **Von
Regina zu klären**, weil davon abhängt, ob es acht oder mehr reale Personen
sind.

**Ebenfalls im Bestand: der Name der Lehrkraft.** `jour fixe` Z. 358:
„**Regina** leitet wieder das Meeting.“ Für ein veröffentlichtes Lehrwerk
ist auch das zu ersetzen.

**Folge für die Aufbereitung:** Die Suche nach `Vorname` allein greift zu
kurz. Es braucht eine Namensliste mit **Vor- und Nachnamen**, und die
Ersetzung muss beide Bestandteile erfassen — sonst bleiben Nachnamen als
verwaiste Fragmente stehen.

#### Sonderfall Jobcenter — nicht nur ein Name, sondern ein fachlicher Beitrag

`Jobcenter/praesantationsskript_jobcenter.html` Z. 238 sagt der
teilnehmenden Person:

> „⭐ **Du arbeitest selbst im Jobcenter – du bist DER Experte!**“

Der Behördenblock ist also **nicht** als fiktives Rollenspiel gebaut,
sondern auf dem **Fachwissen eines realen Teilnehmenden**. In den
`Beschwerden`-Modulen erscheint derselbe Name als Rollenkarte
(`Deine Rolle: Ahmed, Empfangsmitarbeiter`) — das liest sich wie eine
Modellfigur, ist aber der reale Arbeitsplatz.

**Zwei getrennte Fragen ergeben sich daraus:**

1. **Anonymisierung** — Name, Arbeitsplatz und indirekt identifizierende
   Details ersetzen. Das ist die bekannte B4-Aufgabe, hier mit erhöhter
   Re-Identifizierbarkeit, weil Behörde plus Funktion plus Kursort eine
   sehr kleine Personenmenge beschreiben.
2. **Urheberschaft und Einwilligung** — die Sachinhalte zum Jobcenter
   stammen erkennbar aus der Berufspraxis dieser Person. Sie in ein
   veröffentlichtes Lehrwerk zu übernehmen, ist etwas anderes, als sie im
   Kurs zu verwenden. **Diese Frage kann nur Regina beantworten**; sie ist
   keine Datenschutz-, sondern eine Einwilligungsfrage.

**Bis zur Klärung von Punkt 2 sollte der Behördenblock nicht aufbereitet
werden**, auch nicht anonymisiert — eine Anonymisierung löst die Frage der
Urheberschaft nicht.

**Die 19 betroffenen Module:**
`Arbeitszeugnisse/Arbeits- und Zwischenzeugnis` ·
`Besprechungen und Meetings/Besprechungen und Meetings` ·
`Grammatik/Modalverben/subjektive modalverben` ·
`Grammatik/Spiele/grammatik_endspiel` ·
`Grammatik/das wort es/es_karussell` ·
`Grammatik/das wort es/pronomen es` (+ Version 2) ·
`Grammatik/nullartikel/nullartikel` ·
`Grammatik/pronominaladverbien_wofür_womit` ·
`Grammatik/verb_werden/verb werden` ·
`Grammatik/viel_viele/viel und viele` ·
`Sprechen/hoeflich verneinen` ·
`bueroorganisation_cloud_datenschutz/` (4 Module) ·
`telefonieren/email nach telefonat` ·
`wortschatz/` (2 Module)

**Bemerkenswert:** Elf der 19 liegen im **Grammatikblock**. Der reale
Arbeitgeber steckt also nicht nur in den Berufsthemen-Modulen, sondern
mitten in den Grammatikübungen — dort als Kontext für Beispielsätze. Das
betrifft direkt Block 1 der Modulprüfung.
| `info@muehle-westfalen.de` | 2 | Herkunft ungeklärt; vor der Ersetzung kurz prüfen |

Beide fallen unter die Vorgabe aus B4: höchstens Strukturvorbild, nie
identifizierbarer Fall.

**Wichtig für die Umsetzung:** Da die Adressen fiktiv sind, ist eine Suche
nach E-Mail-Mustern der falsche Ansatz. Zu ersetzen ist der **Firmenname
selbst** — er steht in Rollenspielen, Telefonansagen, Lückentexten und einem
CSS-Kommentar (siehe 8e), nicht nur in Adressen.

#### Nachtrag 2026-08-14 — drei weitere reale Arbeitgeber gefunden

Bei der Modulprüfung von `kursstart/willkommen_situationskarten.html` sind
**drei weitere reale Arbeitgeber** aufgetaucht, die in der ersten
B4-Erfassung fehlten:

| Arbeitgeber | Vorkommen | Zugeordnete Person |
|---|---|---|
| Western Union | **94** | Nadiia |
| Hecht Contactlinsen | **63** | Nataliia |
| Kolping-Bäckerei / Kolping-Zentrale | 12 | Anastasiia |
| Geiping (bereits erfasst) | 93 | Anastasiia |

**Damit steigt die Zahl der zu ersetzenden Firmenbezüge von 93 auf rund
262 Vorkommen.**

**Warum sie zunächst fehlten:** Meine erste Suche ging von Personennamen und
E-Mail-Domains aus. `Western Union` und `Hecht Contactlinsen` erscheinen in
den `tag-`Klassen nur als Kurzform („Western Union“, „Contactlinsen“) und
tragen keine Domain. Sie waren in Abschnitt 8e bereits als
**Branchenzuordnung** notiert — dass es sich um reale Firmennamen handelt,
war daraus nicht erkennbar.

**Ein Widerspruch, den nur Regina auflösen kann:** Anastasiia ist in einem
Teil der Module der `Bäckerei Geiping` zugeordnet, in einem anderen der
`Kolping-Bäckerei`. Entweder ein Arbeitgeberwechsel während des Kurses —
oder eine der beiden ist bereits eine Ersetzung. Für die Anonymisierung ist
das unerheblich (beide werden ersetzt), für das Verständnis der Modulhistorie
nicht.

**Methodische Lehre:** Die B4-Erfassung über Namen und Domains war
unvollständig. Firmennamen ohne Domain und ohne Personennamen in der Nähe
sind so nicht auffindbar. Vor der Anonymisierung ist eine **eigene
Firmensuche** nötig — nicht nur eine Namenssuche.

#### Fundstellen je Arbeitgeber und Modul

Zeilen mit mindestens einem Treffer. Grundlage für die Anonymisierung.

| Modul | Geiping | Western Union | Hecht | Kolping |
|---|---|---|---|---|
| `Grammatik/Spiele/grammatik_endspiel` | ✓ | **9** | **14** | — |
| `Grammatik/das wort es/pronomen es` | ✓ | **22** | 6 | — |
| `Grammatik/das wort es/pronomen es_version 2` | ✓ | **22** | 6 | — |
| `bueroorganisation…/situationskarten_buerodeutsch` | ✓ | 8 | 8 | — |
| `telefonieren/telefonieren_situationskarten` | — | 6 | 6 | **6** |
| `kursstart/willkommen_situationskarten` | — | 5 | 5 | **5** |
| `wortschatz/wortschatztraining_berufsleben` | ✓ | 6 | 4 | — |
| `wortschatz/wortschatztraining_ausbildung und beruf` | ✓ | 2 | 4 | — |
| `bueroorganisation…/bueroorganisation_cloud_datenschutz` | ✓ | 3 | 3 | — |
| `Grammatik/Konnektoren/C1_Konnektoren_bedingung_folge` | — | 2 | — | — |
| `Grammatik/Konnektoren/C1_Konnektoren_version 3` | — | 2 | — | — |
| `Besprechungen und Meetings/Besprechungen und Meetings` | ✓ | 1 | 2 | — |
| `Arbeitszeugnisse/Arbeits- und Zwischenzeugnis` | ✓ | 1 | 1 | — |
| `Grammatik/das wort es/es_karussell` | ✓ | 1 | 1 | — |
| `Grammatik/viel_viele/viel und viele` | ✓ | 1 | 1 | — |
| `Sprechen/hoeflich verneinen` | ✓ | 1 | 1 | — |
| `telefonieren/email nach telefonat` | ✓ | 1 | 1 | — |
| `Grammatik/nullartikel/nullartikel` | ✓ | — | — | — |
| `Grammatik/pronominaladverbien_wofür_womit` | ✓ | — | — | — |
| `Grammatik/Modalverben/subjektive modalverben` | ✓ | — | — | — |
| `Grammatik/verb_werden/verb werden` | ✓ | — | — | — |
| `bueroorganisation…/bürodeutsch_office-programme` (+ V2) | ✓ | — | — | — |

**Betroffen sind 24 Module.** Neun davon enthalten **mehrere** Arbeitgeber
gleichzeitig — dort sind die Aufgaben nach Teilnehmerin aufgeteilt.

**Varianten der Schreibweise, die bei der Suche zu berücksichtigen sind:**

| Firma | Varianten im Bestand |
|---|---|
| Geiping | `Geiping` · `Bäckerei Geiping` · `Frau Geiping` · `geiping-baeckerei.de` · `a.mykhailova@geiping-baeckerei.de` · `einkauf@geiping-baeckerei.de` |
| Western Union | `Western Union` (einheitlich) |
| Hecht | `Hecht` · `Hecht Contactlinsen` |
| Kolping | `Kolping-Bäckerei` · `Kolping-Zentrale` |

#### Provenienzfrage Geiping / Kolping — offen

Anastasiia ist zwei verschiedenen Bäckereien zugeordnet:

* **Geiping** in 19 Modulen, darunter alle Grammatikmodule
* **Kolping-Bäckerei** in genau **zwei** Modulen:
  `kursstart/willkommen_situationskarten` und
  `telefonieren/telefonieren_situationskarten` — beides **Situationskarten**

**Beobachtung ohne Deutung:** Die Kolping-Nennungen treten ausschließlich in
den beiden Situationskartenmodulen auf, in denen auch die Steckbriefe der
Teilnehmerinnen stehen. In allen übrigen Modulen steht Geiping.

**Keine Hypothese zur Ursache.** Möglich sind ein Arbeitgeberwechsel, eine
begonnene Anonymisierung, zwei verschiedene Kursdurchgänge oder ein
Übertragungsfehler. **Die Frage kann nur Regina beantworten.**

**Für die Anonymisierung ist sie unerheblich:** Beide werden als reale
Arbeitgeber behandelt und ersetzt (Leo, 2026-08-14).

#### Konsistenz bei der Ersetzung

Damit keine neuen Biografiebrüche entstehen, ist **je Person genau ein
fiktiver Arbeitgeber** zu verwenden — auch dort, wo im Bestand zwei stehen.

| Person | reale Arbeitgeber im Bestand | Ersatz |
|---|---|---|
| Anastasiia | Geiping **und** Kolping-Bäckerei | **ein** KONTOR-Bereich |
| Nadiia | Western Union | ein KONTOR-Bereich |
| Nataliia | Hecht Contactlinsen | ein KONTOR-Bereich |

Das löst den Widerspruch nebenbei auf: Nach der Ersetzung hat jede
Modellperson genau einen Arbeitgeber.

### Kategorie C — unkritisch, kann bleiben

| Art | Funde | Bewertung |
|---|---|---|
| Musterfirmen-Adressen | `@kontor-ag.de`, `@integrapro.de`, `@firma.de`, `@bueroservice.de` | erfundene Domains zu den Modellfirmen |
| Ausdrückliche Platzhalter | `max.mustermann@email.com`, `vorname.nachname@gmail.com`, `deinname@gmail.com` | als Platzhalter erkennbar |
| Musteradressen | `Hauptstraße 123`, `10115 Berlin`, `50667 Köln`, `20459 Hamburg` | Standard-Beispieladressen, kein Personenbezug |
| Musterrufnummer | `0123 456789` | erkennbar fiktiv |
| Datumsangaben | 7 Stück, alle 2025/2026 | **Termine, keine Geburtsdaten** |

### Fehlanzeige — ausdrücklich geprüft, nicht gefunden

| Gesucht | Ergebnis |
|---|---|
| IBAN / Kontonummern | **keine** |
| Steuer-ID, Steuernummer als konkreter Wert | **keine** — die Begriffe kommen nur erklärend vor (`Steuer-ID vs Steuernummer`) |
| Sozialversicherungs- / Rentenversicherungsnummern | **keine** |
| Personal-, Kunden-, Versichertennummern | **keine** |
| Geburtsdaten | **keine** |
| Echte Privatanschriften | **keine** |

Die Zahlenfolgen, die eine Telefonnummernsuche auswirft (`059669`, `047857`,
`024-0847` u. a.), stammen aus Zahlen- und Diktierübungen — vor allem aus
`telefonieren/`. Es sind Übungsziffern, keine Rufnummern.

---

## 8e. Gesonderte Erfassung — sensible biografische Angaben

Auf Leos Anforderung getrennt vom Namensbefund erfasst. **Dies ist der
schwerwiegendste Teil von B4.**

### Die Module sind nach Teilnehmenden gegliedert

Der Bestand verwendet die HTML-Klasse `tn-name` — „Teilnehmer-Name“. Die
Module sind also **strukturell nach Einzelpersonen organisiert**, nicht nur
inhaltlich personalisiert. Erfasst sind **sechs Personen**:

| Person | Zugeordneter Bereich laut Modul | Vorkommen |
|---|---|---|
| Anastasiia (Mykhailova) | Bäckerei Geiping · Bäckereifachverkäuferin → Office Managerin, Münster | 348 |
| Nataliia | Finanzbereich · „Contactlinsen“ | 392 |
| Nadiia | Buchhaltung · „Western Union“ | 309 |
| Olena (Barkova) | Finanzen · Bankwesen | 185 |
| Tetiana | — | 114 |
| **Ahmed** | Empfang | 109 |
| **Yana** | Einzelunterricht | **124** |

**Zwei Personen kamen erst nachträglich dazu:**

* **Ahmed** fehlte im Befund aus Abschnitt 8c — die Suche hatte nur nach
  slawischen Vornamen gefiltert.
* **Yana** tauchte erst bei der Modulprüfung auf, in Modultiteln wie
  `Infinitiv mit ZU – Einzelunterricht Yana`. Sie erscheint 124-mal in
  **16 Modulen**, darunter der gesamte `Recht/`-Block und alle vier
  `Kursabschluss/Letzte Tage/`-Module.

Damit sind es **sieben Personen** und rund **1.580 Namensvorkommen**.

**Lehre daraus:** Eine Namenssuche findet nur, wonach man sucht. Die
vollständige Liste ergab sich erst aus den `tn-name`-Klassen **und** den
Modultiteln. Vor der Anonymisierung sollte beides nochmals systematisch
durchgegangen werden — es können weitere Namen im Bestand stehen.

### Kurskennung als kursbezogene Angabe

Die Zeichenfolge **`JBSKK26_1`** erscheint **48-mal in 26 Modulen**, unter
anderem in Titeln (`Sprech-Karussell „es“ – BSK C1 JBSKK26_1`,
`Das Pronomen „es“ – BSK C1 Modul (Trio JBSKK26_1)`).

Das ist keine personenbezogene, aber eine **kursbezogene** Angabe im Sinne
von Reginas Vorgabe. Sie verweist auf einen konkreten Kursdurchgang und
gehört in einem Lehrwerk nicht in Modultitel. Sie sollte bei der
Aufbereitung entfernt werden — technisch unkritisch, weil sie nirgends
funktional ist.

### Personalisierte Modultitel

Mehrere Module tragen den Namen im Titel:
`Subjektive Modalverben – Anastasiia` · `Nadiia · Doppelstunde` ·
`Olena – Grammatik-Training` · `Relativsätze mit Präposition – Nataliias Tag
im Steuerbüro` · `Infinitiv mit ZU – Einzelunterricht Yana`

Bei der Anonymisierung sind **Dateititel und Überschriften mitzuziehen**,
nicht nur der Fließtext.

### Vollständige Personenprofile

Für Anastasiia lässt sich aus dem Bestand ein zusammenhängendes Profil lesen:

* **Vor- und Nachname** in Kombination: `Anastasiia Mykhailova`
* **Arbeitgeber**, real und benennbar: `Bäckerei Geiping`
* **Dienstliche E-Mail-Adresse**: `a.mykhailova@geiping-baeckerei.de`
* **Beruflicher Werdegang**: Bäckereifachverkäuferin, `Ab August übernimmt sie
  … eine neue Stelle als Office Managerin in der Zentrale in Münster`
* **Arbeitsort**: Münster
* **Staatsangehörigkeit**: `Anastasiia ist … Ukrainerin`
* **Frühere Arbeitslosigkeit**: `Bevor sie zu Geiping kam, … schon einmal
  arbeitslos`

Das ist keine Namensnennung mehr, sondern ein **identifizierbares
Personenprofil mit Erwerbsbiografie**. Es steht unter anderem in
Telefon-Rollenspielen, in denen sich die Person namentlich mit Firma meldet:
`Guten Tag, hier spricht Anastasiia Mykhailova von der Bäckerei Geiping.`

Für Olena Barkova findet sich Vergleichbares: Vollname, frühere Tätigkeit
`in der Ukraine im Bankwesen gearbeitet`, dazu ein Bewerbungsdialog mit
Personaler.

### Auch im Quelltext, nicht nur im Text

* CSS-Klassen: `tag-anastasiia`, `tag-nataliia`, `tag-nadiia`
* Ein CSS-Kommentar: `--accent: #b8442f;   /* Anastasiia – Geiping */`
* Klassenname `tn-name` als strukturelles Ordnungsprinzip

Eine reine Textersetzung greift hier zu kurz.

### Abgrenzung — was **nicht** in diese Kategorie fällt

Eine Suche nach `arbeitslos`, `Aufenthalt`, `Asyl`, `Ukraine` liefert viele
Treffer, die **keine** Personenangaben sind: Wortschatzarbeit mit generischem
Subjekt (`Er ist seit drei Monaten arbeitslos.`), Wortbildungsübungen
(`arbeitslos` gegen `arbeitsfrei`), Grammatikbeispiele zum Nullartikel
(`in der Ukraine`, `Er ist Ø Ukrainer.`) und Landeskundefragen an die Gruppe
(`Gibt es in der Ukraine ein ähnliches System?`).

**Diese Stellen dürfen bleiben.** Sie sind didaktisch begründet und
berufsfeldtypisch für einen Job-BSK. Kritisch wird es erst, wo eine Aussage
an einen Namen gebunden ist.

### Bewertung

Sensibilität **höher als alles Übrige aus B4**: Staatsangehörigkeit,
Erwerbsbiografie und frühere Arbeitslosigkeit einer namentlich benannten,
über Arbeitgeber und Ort identifizierbaren Person. Bei Anastasiia liegt
zusätzlich der Wechsel in eine neue Stelle offen.

**Konsequenz:** Bei diesen Modulen genügt kein Namenstausch. Die
Personenprofile müssen als Ganzes durch Modellpersonen ersetzt werden —
inklusive Branche, Ort und Werdegang, sonst bleibt die Person über die
Kombination der Merkmale erkennbar.

---

### Bewertung

**Der Bestand ist in diesem Punkt deutlich sauberer als befürchtet.** Die
kritischen Ordner `Bankkonto`, `Steuern`, `Papierkram` und `Jobcenter`
arbeiten durchgehend mit fiktiven oder erklärenden Angaben — dort wurde
offenkundig bewusst darauf geachtet.

**Der gesamte Handlungsbedarf aus dieser Prüfung liegt in fünf
E-Mail-Adressen in zwei Dateien.** Alles Übrige ist unbedenklich.

Damit bleibt B4 in der Substanz das, was Abschnitt 8c beschreibt: ein
**Namens- und Firmenproblem**, kein Nummern- oder Adressproblem.

---

## 8f. Ersetzungsregeln — Vorschlag, noch nicht abgestimmt

> **Status: Entwurf.** Nicht angewendet. Wartet auf Reginas Freigabe.
> Grundlage: B4 (8c), Datenprüfung (8d), Personenprofile (8e).

### Grundsatz

Nicht Namen tauschen, sondern **Profile ersetzen**. Weil die Personen über
die Kombination von Name, Branche, Ort und Werdegang erkennbar sind, muss
jedes Merkmal mitwandern. Ein Modellprofil ersetzt ein reales Profil
vollständig und bleibt über alle 152 Module hinweg konsistent.

> **Korrigiert 2026-08-14 nach `docs/leitlinie-neuaufbau-module-ueberarbeitet.md`.**
> Die Leitlinie schreibt vor: „Als bestehender Modellrahmen ist die bereits
> definierte Modellfirma **KONTOR Büro und Logistik** mit ihren vorhandenen
> Modellpersonen zu verwenden. Nicht ohne fachlichen Grund neue Modellfirmen
> oder weitere Personen erfinden.“ Mein ursprünglicher Entwurf hatte neue
> Namen und eine neue Firma vorgeschlagen — das ist damit hinfällig.

### Regel 1 — Modellpersonen: die vorhandenen verwenden

Im produktiven Lehrwerk (`buero/im-unternehmen-ankommen.html`) sind bereits
Modellpersonen mit Rollen definiert:

| Modellperson | Rolle laut Lehrwerk |
|---|---|
| **Frau Melnyk** | Leitung |
| **Frau Haddad** | Personalplanung |
| **Herr Nowak** | Lagerleitung |
| **Frau Seidel** | Büro, Beschaffung |
| **Herr Becker** | Kollege auf gleicher Ebene |

Zuordnung der sieben realen Personen zu diesem Bestand — Vorschlag nach
inhaltlicher Nähe:

| Real | Bereich real | Modellperson |
|---|---|---|
| Anastasiia (Mykhailova) | Office Management | **Frau Seidel** |
| Nataliia | Finanzbereich, Steuern | **Frau Melnyk** |
| Nadiia | Buchhaltung | **Frau Haddad** |
| Olena (Barkova) | Bankwesen | *offen* |
| Tetiana | Papierkram, Personalthemen | *offen* |
| Ahmed | Empfang | **Herr Becker** |
| Yana | Recht, Mahnwesen | *offen* |

**Zu klären:** Die vorhandenen fünf Modellpersonen reichen nicht für sieben
Reihen. Entweder werden mehrere reale Personen auf eine Modellperson
abgebildet — sinnvoll, weil die Reihen ohnehin thematisch getrennt sind — oder
es braucht zwei bis drei zusätzliche Modellpersonen. Letzteres wäre ein
„fachlicher Grund“ im Sinne der Leitlinie, muss aber von Regina entschieden
werden.

**Nicht mehr relevant:** Der Hinweis aus dem alten Entwurf, Anfangsbuchstaben
zu vermeiden. Bei vorgegebenen Modellnamen stellt sich die Frage nicht.

### Regel 2 — Modellfirma: KONTOR

| Real | Ersatz |
|---|---|
| Bäckerei Geiping (93 Vorkommen, 19 Module) | **KONTOR Büro und Logistik** |
| geiping-baeckerei.de | KONTOR-Domain aus dem Lehrwerksbestand |
| Mühle Westfalen | KONTOR, falls real — Herkunft ungeklärt |
| KONTOR AG | **Schreibweise vereinheitlichen** — siehe unten |
| IntegraPro GmbH | **bleibt vorerst** — Herkunft ungeklärt, wird in `Kursabschluss/Letzte Tage/` als Simulationsrahmen genutzt |

**Offener Punkt — Namenskonflikt:** Im Bestand heißt die Firma durchgehend
**`KONTOR AG`** (78 Vorkommen). Die Leitlinie nennt sie
**`KONTOR Büro und Logistik`**. Beide Formen existieren nebeneinander; die
Langform steht bisher **nur in der Leitlinie**, nicht im Material. Vor der
Anonymisierung ist festzulegen, welche Form gilt — sonst entstehen zwei
Modellfirmen mit demselben Namensstamm.

Hinweis: Die Firmenbeschreibungen im Bestand sind bereits uneinheitlich —
einmal „Handelslogistik mit Standorten in Hamburg, Berlin und München“,
einmal „Handels- und Dienstleistungsunternehmen mit Hauptsitz in Köln,
35 Filialen“. Auch das gehört vereinheitlicht.

**Branchenwechsel beachten:** Anastasiias Reihe spielt in einer Bäckerei,
KONTOR ist Büro und Logistik. Die Aufgaben müssen inhaltlich mitwandern —
`Wie viele Filialen hat Geiping?` wird nicht durch bloßen Namenstausch
richtig.

### Regel 3 — Ortsangaben

`Münster` als Arbeitsort ist in Kombination mit Branche und Firma
identifizierend. Ersatz durch einen KONTOR-Standort aus dem
Lehrwerksbestand — je nach Entscheidung zur Firmenbeschreibung Hamburg,
Berlin, München oder Köln. **Keine neue Stadt erfinden.**

### Regel 4 — Biografische Angaben

| Angabe | Umgang |
|---|---|
| Staatsangehörigkeit (`Ukrainerin`) | in Personenprofilen **streichen**; in Grammatikbeispielen zum Nullartikel **belassen** (dort generisch) |
| frühere Arbeitslosigkeit | **streichen** — didaktisch entbehrlich, datenschutzrechtlich heikel |
| konkreter Stellenwechsel mit Datum | zu generischer Formulierung (`wechselt demnächst ins Büro`) |
| frühere Tätigkeit im Herkunftsland | **belassen, aber generisch** (`hat früher in einer Bank gearbeitet`) — das ist ein realistisches Job-BSK-Motiv |

### Regel 5 — Quelltext

| Fundstelle | Ersatz |
|---|---|
| `tag-anastasiia`, `tag-nataliia`, `tag-nadiia` | **funktional benennen** statt umbenennen: `tag-profil-1`, `tag-profil-2`, `tag-profil-3` — oder besser nach Branche: `tag-handwerk`, `tag-finanzen`, `tag-buchhaltung` |
| Klasse `tn-name` | **belassen** — beschreibt eine Funktion, keine Person |
| CSS-Kommentar `/* Anastasiia – Geiping */` | ersetzen oder streichen |
| `tag-general` | belassen |

Die branchenbezogene Variante ist vorzuziehen: Sie ist selbsterklärend und
verhindert, dass später wieder Personennamen einwandern.

### Regel 6 — Was unberührt bleibt

* Deutsche Platzhalternamen (Müller, Schmidt, Becker, Wagner, Weber …)
* KONTOR AG und ihre erfundenen Adressen
* Ausdrückliche Platzhalter (`max.mustermann@…`, `vorname.nachname@…`)
* Musteradressen (`Hauptstraße 123`, `10115 Berlin`)
* Generische Grammatik- und Wortschatzbeispiele mit `er`/`sie`
* Landeskundefragen an die Gruppe

### Regel 7 — Kontrolle nach der Ersetzung

1. Suche nach allen sechs Vornamen, vier Nachnamen und `Geiping` — **null
   Treffer** erwartet.
2. Suche nach `tag-anastasiia`, `tag-nataliia`, `tag-nadiia` — null Treffer.
3. Stichprobe: Lässt sich aus einem Modul noch eine reale Person erschließen?
4. Funktionsprüfung: Sind Lückentexte, Zuordnungen und Sprechkarten nach der
   Ersetzung noch stimmig? Längenänderungen können Layouts brechen.

### Offene Punkte für Regina

1. **Firmenname:** Gilt `KONTOR AG` (78 Vorkommen im Bestand) oder
   `KONTOR Büro und Logistik` (Leitlinie)? Beide Formen sind im Umlauf.
2. **Firmenprofil:** Handelslogistik mit Standorten Hamburg/Berlin/München
   oder Handels- und Dienstleistungsunternehmen mit Sitz Köln? Beide
   Beschreibungen stehen im Bestand.
3. **Modellpersonen:** Fünf vorhandene für sieben Reihen. Mehrfachbelegung
   oder zwei bis drei zusätzliche Personen?
4. Ist `Mühle Westfalen` real oder erfunden?
5. Ist `IntegraPro GmbH` real oder erfunden? Sie trägt den
   Simulationsbogen `Kursabschluss/Letzte Tage/`.
6. Soll die Staatsangehörigkeit generell entfallen oder nur in
   Personenprofilen?

---

## 8b. Aufbereitungsplan

Abgeleitet aus B1–B3. **Noch keine produktive Migration** — dieser Plan
beschreibt Aufbereitungsschritte, keine Übernahme ins Lehrwerk.

### Phase 1 — Sichern und entkoppeln (zuerst, weil zeitkritisch)

Solange Inhalte nur in fremden Diensten liegen, können sie verschwinden.

| Schritt | Umfang | Wer |
|---|---|---|
| 1.1 Quizlet-Sets exportieren | 5 Sets | Regina (Kontozugang nötig) |
| 1.2 Google Docs / Drive-Inhalte exportieren | 7 Dokumente | Regina |
| 1.3 Google-Forms-Inhalt sichern | 1 Formular (Sprachbedarfsanalyse) | Regina |
| 1.4 LearningApps-Inhalte sichern | 7 Apps | Regina |
| 1.5 Exportierte Inhalte im Repo ablegen | — | Claude, nach Übergabe |

**Nur Regina kann 1.1 bis 1.4 ausführen** — es ist ihr Konto. Das ist der
Engpass des gesamten Plans und sollte deshalb zuerst laufen.

### Phase 2 — Bestand bereinigen

| Schritt | Umfang |
|---|---|
| 2.1 Sieben Dublettenpaare auflösen (Abschnitt 5) | 7 Paare → 145 Module |
| 2.2 Sieben Versionsserien inhaltlich sichten und aktuelle Fassung bestimmen | 7 Serien |
| 2.3 Word-Sperrdatei `~$nkkonto Quellen.md` löschen | 1 Datei |
| 2.4 `Relativsatz Quellen.md` nach UTF-8 konvertieren | 1 Datei |
| 2.5 Doppelte Modalpartikel-URL klären („Halt“ fehlt) | Regina |
| 2.6 Redemittelsammlung Moderation aus der Quellendatei in ein Modul überführen | 1 Sammlung |
| **2.7 Anonymisierung (B4) — vorrangig** | **73 Module** |
| 2.7a Fünf Vornamen und vier Nachnamen durch Modellpersonen ersetzen | ~1.400 Vorkommen |
| 2.7b Firmenbezug `Geiping` durch Modellfirma ersetzen, betriebliche Details neutralisieren | mehrere Module |
| 2.7c CSS-Klassen `tag-anastasiia`, `tag-nataliia`, `tag-nadiia` strukturell umbauen | 2 Module, 126 Vorkommen |
| 2.7d Biografische Angaben (Herkunft, frühere Tätigkeit, Arbeitslosigkeit) modellhaft umschreiben | `Kundengespraeche`, `Arbeitszeugnisse` |
| 2.7e ~~Auf weitere personenbezogene Daten prüfen~~ **erledigt 2026-08-14** → Abschnitt 8d | Ergebnis: 5 E-Mail-Adressen in 2 Dateien, sonst nichts |

**2.7 ist die vorrangige Aufgabe der gesamten Aufbereitung.** Vor ihrem
Abschluss darf kein Modul veröffentlicht oder außerhalb des Kurses
weitergegeben werden. Sie ist unabhängig von Phase 1 und kann sofort beginnen,
sobald `altmaterial/` bearbeitet werden darf.

**Voraussetzung:** Freigabe, Dateien unter `altmaterial/` verändern zu dürfen.
Bis dahin bleibt es bei der Dokumentation. **Nicht nach Dateinamen bereinigen**
— siehe Abschnitt 5.

### Phase 3 — Externe Einbindungen ersetzen

| Schritt | Umfang | Aufwand |
|---|---|---|
| 3.1 Google Fonts lokal einbinden | alle Module | gering, einmalig |
| 3.2 Wordwall- und Kahoot-Verweise streichen | 3 | gering |
| 3.3 DW- und ZUM-Links als Empfehlung belassen, nicht einbetten | 2 | gering |
| 3.4 Quizlet-Sets als eigene HTML-Module nachbauen — **nur die eigenen** | bis zu 5 | mittel |
| 3.5 LearningApps ersetzen oder streichen (**fremd, nicht nachbaubar**) | 7 | mittel |
| 3.6 Google-Docs-Inhalte in Module überführen | 7 | mittel |
| 3.7 Google Forms ersetzen | 1 | offen — Formularfunktion braucht eine technische Entscheidung |
| 3.8 YouTube-Videos: je Fall entscheiden — eigene Aufnahme oder Streichung | ~20 | **hoch** |

**3.8 ist der aufwendigste Posten des ganzen Vorhabens** und sollte einzeln
bewertet werden: Nicht jedes Video ist ersetzungsbedürftig, manche sind
didaktisch verzichtbar.

### Phase 4 — Eigenproduktion Audio

| Schritt | Umfang |
|---|---|
| 4.1 Modalpartikeln: Prosodie und Tonfall aufnehmen | Kernbedarf |
| 4.2 Trennbare Verben: Betonungsregel aufnehmen | Kernbedarf |
| 4.3 Technisches Muster von `telefonieren.html` übernehmen (base64) | erprobt |

### Phase 5 — Inhaltliche Erschließung

| Schritt | Umfang |
|---|---|
| 5.1 Grammatik-Block (55 Module) den 23 Themenpaketen zuordnen | direkte Anbindung vorhanden |
| 5.2 Zwölf Themen ohne Themenpaket bewerten (Abschnitt 4) — Erweiterung der Themenliste? | Regina entscheidet |
| 5.3 Berufsthemen-Block (40 Module) als eigenen Strang aufbereiten | Landeskunde- und Handlungsfeld-Curriculum |
| 5.4 Abschnitt 13 der 23 Grammatikpakete gesammelt korrigieren | 23 Dateien, ein Durchgang |

### Reihenfolge und Abhängigkeiten

```
Phase 2.7 (B4, Anonymisierung) ──►  VORRANG vor allem Weiteren
Phase 1 (Regina, Konto)        ──►  Phase 3.4–3.7
Phase 2 (Freigabe nötig)       ──►  Phase 5
Phase 3.1–3.3                  ──►  sofort möglich
Phase 4                        ──►  unabhängig, jederzeit
Phase 5.4                      ──►  sofort möglich
```

**Vorrangig:** 2.7 (Anonymisierung). Ohne sie darf nichts nach außen.
**Sofort möglich, ohne weitere Entscheidung:** 3.1, 3.2, 3.3 und 5.4.
**Blockiert durch Kontozugang:** alles aus Phase 1 und daraus abgeleitet 3.4–3.7.
**Blockiert durch Freigabe für `altmaterial/`:** Phase 2 einschließlich 2.7.

**Hinweis zur Umsetzung von 2.7:** Die Anonymisierung verändert Dateien unter
`altmaterial/`. Alternativ wäre denkbar, die 73 betroffenen Module zunächst
in einen Arbeitsordner außerhalb von `altmaterial/` zu kopieren und dort zu
anonymisieren — dann bliebe der Originalbestand unberührt. Das ist eine
Entscheidung für Regina.

---

## 9. Empfehlung für das weitere Vorgehen

1. **Quellenverzeichnisse lesen** (22 Dateien, klein). Ohne die Rechtelage ist
   jede weitere Planung auf Sand gebaut.
2. **Grammatik-Block zuerst erschließen** (55 Module). Er hat die direkteste
   Anbindung an die 23 fertigen Themenpakete und lässt sich sofort zuordnen.
3. **Berufsthemen-Block als eigenen Strang führen** (Jobcenter, Bankkonto,
   Steuern, Recht, Papierkram, Sicherheit — 40 Module). Das ist inhaltlich ein
   Landeskunde- und Handlungsfeld-Curriculum, kein Grammatikbestand, und
   gehört nicht in die Grammatikstruktur gepresst.
4. **Versionsserien inhaltlich sichten** — sieben Serien, überschaubar.
5. **Erst danach** über Migration und Zielstruktur entscheiden.

**Nicht empfohlen:** Bereinigung nach Dateinamen. Der `C1_Konnektoren`-Fall
zeigt, dass die Benennung in die Irre führt.

---

## 10. Schritt 2 — die beiden `wortschatztraining`-Module, Übertragung je Modul

> **Rahmung nach `docs/klarstellung-personalisierung.md` (verbindlich).**
> Die Personalisierung der Altmodule war bewusst didaktisch angelegt und ist
> weder Fehler noch Datenschutzproblem. Was hier steht, ist keine Mängelliste,
> sondern die Übertragung individueller Konkretheit in die Lehrwerkswelt.
> Die Spalte „Klasse“ aus den früheren Prüfabschnitten entfällt deshalb hier.
> Beide Module wurden gemeinsam bearbeitet, weil sie denselben Personenkreis
> teilen und ein einheitliches Rollenbild bekommen sollen — nicht, um eine
> „Kette aufzulösen“.

### 10.1 `wortschatztraining_berufsleben.html`

**Ziel:** `buero/wortschatz-berufsleben.html` · registriert unter „Wortschatz“

| Stelle im Altmodul | Übertragung |
|---|---|
| Sieben Kontextkästen, an konkrete TN gebunden | nach Rolle und Abteilung neu vergeben, nicht nach Person |
| Reale Arbeitgeber in den Kästen | KONTOR AG bzw. neutrale Rolle |
| Abschnitt „Zahlungen“ verband Betriebs- und Privatkonto einer Person | Sie-Form; private Bankgeschäfte sind kein Vorgang der Modellfirma |
| Speicherschlüssel | `bsk-modul-wortschatz-berufsleben` |

Zuordnung der Kästen: Menschen → neutral · Aufgaben → Frau Karpenko
(Office-Management, dauerhaft definierte Rolle) · Orte → Einarbeitung
Karpenko · Arbeitsmittel → neutral · Waren → Frau Seidel (Einkauf) ·
Reklamation → Herr Becker (Kundenservice) · Zahlungen → neutral.

### 10.2 `wortschatztraining_ausbildung und beruf.html`

**Ziel:** `buero/wortschatz-ausbildung-beruf.html` · registriert unter „Wortschatz“

| Stelle im Altmodul | Übertragung |
|---|---|
| Kontextkasten Abschnitt 4: eine namentlich genannte Person, deren Ausbildungsvertrag bereits unterschrieben ist | Die Person entfällt; der Vertrag wird als Dokument behandelt. Die Erklärrolle übernimmt Frau Haddad (Personal) — sachlich ihre dauerhafte Zuständigkeit bei KONTOR, nicht ein Ersatzname für die frühere TN |
| Kontextkästen der Abschnitte 1, 2, 3, 5, 6 | neutrale berufliche Rahmung bzw. Sie-Form; nur Abschnitt 4 braucht eine feste Figur |
| Reale Arbeitgeber (Optikerbetrieb, Bäckerei, Finanzdienstleister) | entfallen; Unternehmensziele durchgängig an der KONTOR AG erklärt |
| Zwei Halbsätze, die Berufsbilder an die Lebensplanung einzelner TN koppelten | gestrichen; die Berufsbeschreibungen stehen für sich |
| Übung 1a war durchgehend über eine Person formuliert | allgemeine Definitionen |
| Übung 7b „Alle drei Frauen sprechen über Ausbildung“ — konstruktiv auf drei TN aufgebaut | drei Situationslabel statt drei Personen: „Im zweiten Lehrjahr“ · „Vor der Bewerbung“ · „Am ersten Arbeitstag“. Die persönliche Ich-Perspektive bleibt erhalten, sie hängt nur nicht mehr an konkreten Menschen |

Das ist bewusst **keine** Eins-zu-eins-Ersetzung: Von sieben personengebundenen
Kästen wird genau einer zu einer festen KONTOR-Figur, weil dort eine
Zuständigkeit besteht (Personalabteilung erklärt den Ausbildungsvertrag). Die
übrigen brauchen keine Figur.

**Zwei fachliche Korrekturen, unabhängig von der Übertragung:**

1. Übung 4b führte das Stichwort **„das Schweigen“** mit der Bedeutung „Über
   Geschäftsgeheimnisse darf man nicht sprechen – Stillschweigen“. Lemma und
   Bedeutung passten nicht zusammen; im Vertrag steht die
   **Schweigepflicht**. Korrigiert.
2. Übung 6a war eine Satz-zu-Kategorie-Zuordnung mit sechs langen Sätzen und
   nur drei Kategorien — als `zuordnen` nicht abbildbar und didaktisch
   ungünstig. Umgestellt auf `Lehrwerk.gruppieren` mit neun Verbalphrasen,
   drei je Topf. Das Lernziel (ökonomisch/ökologisch/sozial unterscheiden)
   bleibt, die Wortarbeit wird sichtbarer.

**Nicht übernommen:** die Kategorie-Farbmarken (`kan`, `knt`, `kna`) — sie
kodierten die drei Personen und haben ohne sie keine Funktion.

### 10.3 Bilanz Schritt 2

- 2 Module neu aufgebaut, beide unter „Wortschatz“ im Bereich `buero`
- 13 personengebundene Kontextkästen übertragen; davon werden **3** zu festen
  KONTOR-Figuren (Karpenko · Seidel · Becker im Schwestermodul, Haddad hier),
  die übrigen zu neutralen beruflichen Rollen oder zur Sie-Form
- reale Arbeitgeber durch die KONTOR AG bzw. neutrale Rahmung ersetzt
- 2 fachliche Fehler behoben statt ausgefiltert
- beide Module verwenden nur Aufgabentypen aus `assets/lehrwerk.js`
- die Altdateien bleiben in `altmaterial/` unverändert erhalten

**Was ausdrücklich erhalten bleibt:** die Konkretheit. Beide Module sprechen
weiter aus einer Ich- oder Sie-Perspektive, benennen konkrete Abteilungen,
Aufgaben und Situationen. Was sich ändert, ist nur, woran diese Konkretheit
hängt — an der Modellfirma statt an einer bestimmten Kursgruppe.
