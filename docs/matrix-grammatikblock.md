# Matrix Grammatikblock — Altmodule gegen Themenpakete

Bestandsaufnahme vor dem Neuaufbau. Ziel ist zu vermeiden, dass Module gebaut
werden, die inhaltlich schon durch ein Themenpaket abgedeckt sind — und
umgekehrt sichtbar zu machen, wo weder Paket noch Modul existiert.

**Stand der Zählung:** 56 HTML-Dateien in `altmaterial/google-sites-module/Grammatik/`,
24 Themenpakete in `docs/aufbereitung-grammatik/`, 18 produktive Module in `grammatik/`.

---

## 1 · Abgedeckt: Paket vorhanden, Modul gebaut

Hier ist die Übertragung erledigt. Die Altmodule bleiben Archiv.

| Altmodul | Paket | produktives Modul |
|---|---|---|
| `suffixe praefixe wortfamilien/suffixe adjektive.html` | — | `grammatik/suffixe-adjektive.html` |
| `verben/verben_landkarte.html`, `suffixe…/praefixe.html` | `trennbare-untrennbare-verben.md` | `grammatik/praefix-landkarte.html` |
| `satzstellung/tekamolo.html` | `tekamolo-satzbau.md` | `grammatik/tekamolo.html` |
| `Konnektoren/C1_Konnektoren_version 2.html` u. a. | `konnektoren.md` | `grammatik/konnektoren.html`, `konnektoren-ueberblick.html` |
| `Spiele/Imperativ Spiel.html` | — | `buero/imperativ-spiel.html` |
| `konjunktiv/beschwerden_konjunktiv.html` | `konjunktiv-ii.md` | `buero/beschwerden-konjunktiv.html` |
| `Spiele/lassen_passiv.html` (2 Fassungen) | `passiversatzformen.md` | `buero/verb-lassen.html` |
| `infinitiv mit zu/` (3 Fassungen) | `infinitiv-mit-zu.md` | teilweise in `buero/arbeitsauftraege-delegieren.html` |
| `Relativsatz/` — 5 Dateien | `relativsaetze.md` | `grammatik/relativsaetze.html` |
| `Modalverben/subjektive modalverben.html`, `verben/modalverben_interaktiv.html` | `modalverben.md` | `grammatik/modalverben.html` — objektiv und subjektiv zusammengeführt |
| `verben/trennbare_untrennbare.html` | `trennbare-untrennbare-verben.md` | `grammatik/trennbare-verben.html` |
| `praepositionen/feste_praepositionen.html`, `pronominaladverbien_wofür_womit/` | `verben-mit-praepositionen.md` | `grammatik/verben-mit-praeposition.html` — beide Altmodule abgedeckt |
| `partizipien als adjektive/` | `partizipien.md`, `partizipialattribute.md` | `grammatik/partizipien.html` **und** `grammatik/partizipialattribute.html` — zwei Module, weil B2-Grundlage und C1-Verdichtung |
| `verb_werden/verb werden.html` | `passiv.md` | `grammatik/passiv.html` |
| `ellipsen.html` | `stilistische-satzverdichtung.md` | `grammatik/satzverdichtung.html` |
| `satzstellung/mittelfeld.html`, `ergaenzungen und angaben.html`, `dativ_akkusativ_stellung.html` | `tekamolo-satzbau.md` | `grammatik/tekamolo.html` — alle drei in vier Reitern zusammengeführt |

**Anmerkung zu `infinitiv mit zu`:** Das Delegieren-Modul deckt die fünf
Konstruktionen und die Subjektfrage ab, aber nicht den vollen Umfang des
Pakets. Ein eigenes Grammatikmodul bleibt sinnvoll.

---

## 2 · Paket vorhanden, Modul fehlt — direkt baubar

Das sind die dankbarsten Fälle: Die fachliche Aufbereitung ist fertig, es fehlt
nur die Umsetzung als Modul.

**Abschnitt abgeschlossen: 12 von 12 gebaut** (Stand `856f3d4` zuzüglich des
laufenden Adjektivendungs-Commits). Die vier zuletzt offenen Fälle:

| Altmodul(e) | Paket | produktives Modul |
|---|---|---|
| `Konnektoren/doppelte konnektoren/` (2) | `konnektoren.md` | `grammatik/zweiteilige-konnektoren.html` |
| `Konnektoren/C1_Konnektoren_bedingung_folge.html` | `konnektoren.md` | `grammatik/bedingung-ausnahme.html` — A-Fehler vor dem Bau geprüft und dokumentiert |
| `konjunktiv/konjunktiv.html` | `konjunktiv-ii.md` | `grammatik/konjunktiv-2.html` |
| `satzstellung/satzstellung.html` (2 Fassungen), `Spiele/verposition.html` | `informationsstruktur.md` | `grammatik/informationsstruktur.html` — Abgrenzung zu `tekamolo.html` dort vorgenommen |

---

## 3 · Altmodul vorhanden, **kein Paket** — echte Lücke

Hier ist vor dem Modulbau eine fachliche Aufbereitung nötig, sonst baut man
ohne Grundlage.

| Altmodul(e) | Thema | Einschätzung |
|---|---|---|
| ~~`adjektivendungen/` — 3 Dateien~~ | ~~Adjektivdeklination~~ | **erledigt** — Paket [aufbereitung-grammatik/adjektivdeklination.md](aufbereitung-grammatik/adjektivdeklination.md), Modul `grammatik/adjektivendungen.html` |
| `kasus/4 faelle.html` | Kasus | Grundlagenthema, liegt unter fast allem anderen — **jetzt der nächste Fall**, weil das Adjektivmodul sichere Kasuszuweisung voraussetzt |
| `das wort es/` — 3 Dateien | Funktionen von *es* | anspruchsvoll, im Paketbestand gar nicht vertreten |
| `Reflexive Verben/reflexive verben.html` | Reflexive Verben | kein Paket |
| `nullartikel/nullartikel.html` | Nullartikel | kein Paket |
| `viel_viele/viel und viele.html` | *viel* / *viele* | kleines Thema, ggf. Teil eines größeren Moduls |
| `zu viel_zu sehr.html` | *zu viel* / *zu sehr* | dito |
| `suffixe…/wortfamilien.html` | Wortfamilien | Wortbildung, grenzt an Suffixe und Präfixe |
| `verben/drei verben.html` | noch zu sichten | Inhalt unklar, vor Einordnung lesen |

---

## 4 · Paket vorhanden, **kein Altmodul** — Neubau ohne Vorlage

Diese Pakete haben keine Entsprechung im Altbestand. Module dazu wären
vollständig neu.

`adverbien.md` · `konjunktiv-i-indirekte-rede.md` · `modalpartikeln.md` ·
`n-deklination.md` · `negation.md` · `nomen-verb-verbindungen.md` ·
`nominalisierung-verbalisierung.md` · `passiv.md` (nur mittelbar über *werden*)

**Zu `modalpartikeln.md`:** Es gibt Material — fünf Videos in
`Modalpartikeln Quellen.md`, dazu zwei weitere Module mit Bezug. Zusammen
ergeben sich neun Partikeln mit Belegmaterial. Zwei der fünf Videolinks sind
identisch.

---

## 5 · Spielformate ohne Themenbezug

| Datei | Art |
|---|---|
| `Spiele/grammatik_endspiel.html` | Abschlussspiel über mehrere Themen |
| `Spiele/spielhoelle.html` + 2 Fassungen | Sammlung von Spielmechaniken |
| `Spiele/verposition.html` | Verbstellung, gehört zu `tekamolo-satzbau.md` |
| `konjunktiv/konjunktiv_roulette.html` | Zufallsgenerator für Sprechaufgaben |

**Offen für Regina:** Die Zufallsmechaniken (`konjunktiv_roulette`, das
„Sofort reagieren“-Rad in `arbeitsauftraege verstehen.html`) wurden bisher
nicht übertragen. Beim Konjunktivmodul wurde das Roulette durch Sprechkarten
ersetzt — das war eine stille Streichung und hätte gemeldet werden müssen.
Regina entscheidet, ob die Mechanik zurückkommt.

---

## 6 · Versionsserien

Mehrfachfassungen desselben Moduls. Es wird jeweils **eine** produktive Datei
gebaut; die übrigen Fassungen bleiben Archiv.

| Serie | Fassungen |
|---|---|
| `C1_Konnektoren` | version 2, version 3, bedingung_folge |
| `infinitiv mit zu` | Grundfassung, version 2, version 3 |
| `pronomen es` | Grundfassung, version 2 |
| `satzstellung` | Grundfassung, version 2 |
| `relativsatz mit praepositionen` | Grundfassung, _2 |
| `lassen_passiv` | Grundfassung, _2 |
| `spielhoelle` | Grundfassung, version2, version3 |

---

## 7 · Vorschlag für die Reihenfolge

**Erst Abschnitt 2** — dort ist die fachliche Grundlage fertig, das Bauen geht
zügig und liefert schnell nutzbare Module. Innerhalb davon zuerst
`relativsaetze` (fünf Altmodule, hohe Frequenz) und `modalverben`.

**Dann Abschnitt 3**, aber jeweils mit vorgeschalteter Aufbereitung. Zuerst
**Adjektivendungen** — Kernthema, drei Altmodule, keine Grundlage. Danach
**Kasus**, weil es unter fast allem anderen liegt.

*Stand 2026-08-18:* Abschnitt 2 ist abgearbeitet, Adjektivendungen ebenfalls.
Als Nächstes steht **Kasus** an. Das ist keine freie Wahl mehr, sondern eine
Abhängigkeit: Das Adjektivmodul verlangt sichere Kasuszuweisung, und solange
dazu kein Modul existiert, muss die Lehrkraft den Fall selbst vorschalten.

**Abschnitt 4 zuletzt.** Neubau ohne Vorlage ist der aufwendigste Fall und
sollte warten, bis der Bestand gesichert ist.

**Vor jedem Bau:** prüfen, ob das Thema bereits in einem Büromodul steckt.
Relativsätze und zweiteilige Konnektoren sind zum Beispiel schon in
`buero/kundengespraeche-sprechen.html` behandelt — ein Grammatikmodul dazu
muss darüber hinausgehen und darf nicht dieselben Übungen wiederholen.
