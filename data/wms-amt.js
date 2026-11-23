// KONTOR · Was möchten Sie sagen? · Datenpaket Beim Amt
// Das Array kann nach den Hilfsfunktionen N, V, F eingebunden werden.
const WMS_AMT = [
  {
    "key": "antrag",
    "ico": "📝",
    "title": "Anträge und Unterlagen",
    "short": "Etwas beantragen, Angaben machen und Nachweise vorlegen",
    "cases": [
      {
        "who": "Samira · Personal",
        "scene": "Samira organisiert eine Förderung für die Weiterbildung. Die zuständige Stelle verlangt ein Formular. Samira füllt es aus und beantragt damit die Förderung.",
        "ask": "Wie beschreibt man diesen Schritt?",
        "opts": [
          [
            "„Samira stellt einen Antrag auf Förderung.“",
            "best",
            "Sie bittet mit dem vorgesehenen Verfahren offiziell um die Förderung."
          ],
          [
            "„Samira beantragt die Förderung.“",
            "geht",
            "Das ist ebenso richtig und einfacher."
          ],
          [
            "„Samira stellt eine Anfrage zur Förderung.“",
            "nein",
            "Eine Anfrage kann zunächst nur Informationen erbitten. Samira reicht hier einen offiziellen Förderantrag ein."
          ]
        ],
        "find": {
          "id": "antrag",
          "rel": [
            "angaben",
            "nachweis",
            "genehmigung",
            "anfrage"
          ],
          "expr": "<span class=\"fx\">einen</span> <span class=\"nv\">Antrag</span> <span class=\"fx\">auf + Akk.</span> <span class=\"v\">stellen</span>",
          "mean": "offiziell um etwas bitten, das genehmigt werden muss",
          "bau": "einen Antrag auf + Akk. stellen · Artikel und Präposition",
          "satz": "Samira <span class=\"v\">stellt</span> bei der Stelle einen <span class=\"nv\">Antrag</span> auf Förderung.",
          "satzHint": "„Auf Förderung“ ist die Ergänzung zu „Antrag“.",
          "more": [
            [
              "Einfacher gesagt",
              "„Samira beantragt die Förderung.“"
            ],
            [
              "Andere Seite",
              "„Einen Antrag bewilligen“: Die Behörde stimmt zu."
            ],
            [
              "Verwandt",
              "Eine Anfrage stellt man, wenn man Informationen bekommen möchte."
            ]
          ]
        }
      },
      {
        "who": "Pawel · Lager",
        "scene": "Für eine behördliche Meldung muss KONTOR die Beschäftigtenzahl und die Größe der Lagerfläche nennen. Pawel sammelt die Zahlen für Samira.",
        "ask": "Was macht KONTOR mit diesen Informationen?",
        "opts": [
          [
            "„KONTOR macht Angaben zur Lagerfläche und zur Beschäftigtenzahl.“",
            "best",
            "Die verlangten Daten werden angegeben."
          ],
          [
            "„KONTOR gibt die Daten an.“",
            "geht",
            "Das ist richtig und einfacher."
          ],
          [
            "„KONTOR erbringt den Nachweis der Lagerfläche und der Beschäftigtenzahl.“",
            "nein",
            "Ein Nachweis belegt Angaben mit Unterlagen. Hier soll KONTOR zunächst die Zahlen nennen."
          ]
        ],
        "find": {
          "id": "angaben",
          "rel": [
            "antrag",
            "nachweis",
            "auskunft"
          ],
          "expr": "<span class=\"nv\">Angaben</span> <span class=\"v\">machen</span>",
          "mean": "in einem Formular oder einer Mitteilung Informationen nennen",
          "bau": "Angaben zu + Dat. machen · meist Mehrzahl",
          "satz": "KONTOR <span class=\"v\">macht</span> im Formular <span class=\"nv\">Angaben</span> zur Lagerfläche.",
          "satzHint": "Die Präposition „zu“ nennt das Thema der Angaben.",
          "more": [
            [
              "Einfacher gesagt",
              "„KONTOR gibt die Daten an.“"
            ],
            [
              "Wichtig",
              "Angaben müssen sachlich richtig sein."
            ],
            [
              "Verwandt",
              "Einen Nachweis erbringen heißt: etwas belegen, nicht nur behaupten."
            ]
          ]
        }
      },
      {
        "who": "Nora · Einkauf",
        "scene": "Für die Erstattung einer Gebühr verlangt die Behörde einen Beleg dafür, dass KONTOR bereits gezahlt hat. Nora legt den Zahlungsbeleg vor.",
        "ask": "Was hat Nora damit getan?",
        "opts": [
          [
            "„Nora hat den Nachweis der Zahlung erbracht.“",
            "best",
            "Mit dem Beleg hat sie die Zahlung nachgewiesen."
          ],
          [
            "„Nora hat die Zahlung nachgewiesen.“",
            "geht",
            "Das ist genauso richtig und kürzer."
          ],
          [
            "„Nora hat Angaben zur Zahlung gemacht.“",
            "nein",
            "Angaben machen bedeutet: etwas mitteilen. Der Zahlungsbeleg dient gerade als Nachweis."
          ]
        ],
        "find": {
          "id": "nachweis",
          "rel": [
            "angaben",
            "antrag"
          ],
          "expr": "<span class=\"fx\">den</span> <span class=\"nv\">Nachweis</span> <span class=\"v\">erbringen</span>",
          "mean": "durch Belege oder Unterlagen beweisen, dass etwas stimmt",
          "bau": "den Nachweis für + Akk. / einer Sache (Gen.) erbringen",
          "satz": "Nora <span class=\"v\">hat</span> den <span class=\"nv\">Nachweis</span> der Zahlung <span class=\"v\">erbracht</span>.",
          "satzHint": "Im Perfekt steht „erbracht“ am Ende.",
          "more": [
            [
              "Einfacher gesagt",
              "„Nora weist die Zahlung nach.“"
            ],
            [
              "Ähnlich",
              "„Einen Nachweis vorlegen“ betont die Abgabe des Dokuments."
            ],
            [
              "Nicht dasselbe",
              "Angaben machen = Informationen nennen; Nachweis erbringen = belegen."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Der Förderantrag",
      "lines": [
        [
          "Samira",
          "Für unsere Weiterbildung brauchen wir eine Förderung. Wir müssen {0}."
        ],
        [
          "Pawel",
          "Welche Daten fehlen noch?"
        ],
        [
          "Samira",
          "Wir müssen noch {1}."
        ],
        [
          "Nora",
          "Die Quittung für die Kursgebühr habe ich hier. Damit können wir {2}."
        ]
      ],
      "gaps": [
        [
          [
            "einen Antrag auf Förderung stellen",
            "best",
            "Offiziell um Förderung bitten."
          ],
          [
            "die Förderung beantragen",
            "geht",
            "Ebenso richtig und einfacher, aber hier wird die Nomen-Verb-Verbindung geübt."
          ],
          [
            "eine Anfrage zur Förderung stellen",
            "nein",
            "Eine Anfrage bittet erst um Informationen. Die Förderung wird hier bereits beantragt."
          ]
        ],
        [
          [
            "Angaben zur Lagerfläche machen",
            "best",
            "Die Daten müssen im Formular genannt werden."
          ],
          [
            "die Lagerfläche angeben",
            "geht",
            "Richtiges einfaches Verb, aber hier wird die Wortverbindung geübt."
          ],
          [
            "Nachweise zur Lagerfläche erbringen",
            "nein",
            "Damit würde KONTOR eine Angabe belegen; hier geht es zuerst darum, die Zahlen einzutragen."
          ]
        ],
        [
          [
            "den Nachweis der Zahlung erbringen",
            "best",
            "Die Quittung belegt die Zahlung."
          ],
          [
            "den Zahlungsbeleg vorlegen",
            "geht",
            "Auch richtig, das betont die Abgabe des Dokuments."
          ],
          [
            "Angaben zur Zahlung machen",
            "nein",
            "Angaben wären nur eine Mitteilung. Die vorhandene Quittung beweist die Zahlung."
          ]
        ]
      ]
    },
    "next": [
      "bearbeitung",
      "moeglichkeiten"
    ]
  },
  {
    "key": "bearbeitung",
    "ico": "🏛️",
    "title": "Bescheid und Bearbeitung",
    "short": "Den Stand verstehen, Genehmigungen und Fristen unterscheiden",
    "cases": [
      {
        "who": "Petra Lenz · Empfang",
        "scene": "Ein Besucher fragt nach dem Antrag seiner Firma. Die zuständige Sachbearbeiterin prüft gerade die Unterlagen. Eine Entscheidung gibt es noch nicht.",
        "ask": "Wie beschreibt Petra den Stand?",
        "opts": [
          [
            "„Der Antrag ist noch in Bearbeitung.“",
            "best",
            "Er wird gerade bearbeitet und ist noch nicht entschieden."
          ],
          [
            "„Der Antrag wird noch geprüft.“",
            "geht",
            "Auch richtig, soweit tatsächlich eine Prüfung läuft."
          ],
          [
            "„Der Antrag ist bereits genehmigt.“",
            "nein",
            "Eine Genehmigung wäre die Entscheidung. Tatsächlich wird der Antrag noch geprüft."
          ]
        ],
        "find": {
          "id": "bearbeitung",
          "rel": [
            "genehmigung",
            "frist_amt",
            "antrag"
          ],
          "expr": "<span class=\"fx\">in</span> <span class=\"nv\">Bearbeitung</span> <span class=\"v\">sein</span>",
          "mean": "gerade bearbeitet werden, noch nicht abgeschlossen sein",
          "bau": "in Bearbeitung sein · feste Präposition",
          "satz": "Der Antrag <span class=\"v\">ist</span> noch <span class=\"fx\">in</span> <span class=\"nv\">Bearbeitung</span>.",
          "satzHint": "„In Bearbeitung“ beschreibt einen Zustand, keine Zusage.",
          "more": [
            [
              "Einfacher gesagt",
              "„Die Stelle bearbeitet den Antrag noch.“"
            ],
            [
              "Wichtig",
              "„In Bearbeitung“ bedeutet nicht automatisch „genehmigt“."
            ],
            [
              "Verb-Logik",
              "„Sein“ beschreibt hier den Zustand."
            ]
          ]
        }
      },
      {
        "who": "Samira · Personal",
        "scene": "KONTOR hat eine offizielle Erlaubnis beantragt, die Räume für eine Veranstaltung länger zu nutzen. Die Behörde stimmt dem Antrag zu und verschickt den Bescheid.",
        "ask": "Was hat die Behörde getan?",
        "opts": [
          [
            "„Die Behörde hat eine Genehmigung erteilt.“",
            "best",
            "Sie hat die Nutzung offiziell erlaubt."
          ],
          [
            "„Die Behörde hat die Nutzung genehmigt.“",
            "geht",
            "Genauso richtig, nur mit einem einfachen Verb."
          ],
          [
            "„Die Behörde hat den Antrag in Bearbeitung genommen.“",
            "nein",
            "Die Bearbeitung ist nur ein Verfahrensschritt. Laut Fall liegt die Erlaubnis bereits vor."
          ]
        ],
        "find": {
          "id": "genehmigung",
          "rel": [
            "bearbeitung",
            "zustimmung",
            "antrag"
          ],
          "expr": "<span class=\"fx\">eine</span> <span class=\"nv\">Genehmigung</span> <span class=\"v\">erteilen</span>",
          "mean": "etwas offiziell erlauben",
          "bau": "jemandem eine Genehmigung für + Akk. erteilen · formell",
          "satz": "Die Behörde <span class=\"v\">hat</span> KONTOR eine <span class=\"nv\">Genehmigung</span> <span class=\"v\">erteilt</span>.",
          "satzHint": "Im Perfekt: „hat … eine Genehmigung erteilt“.",
          "more": [
            [
              "Einfacher gesagt",
              "„Die Behörde hat es erlaubt.“"
            ],
            [
              "Andere Seite",
              "„Eine Genehmigung beantragen“: um Erlaubnis bitten."
            ],
            [
              "Gegenteil",
              "„Eine Genehmigung verweigern“: offiziell nicht erlauben."
            ]
          ]
        }
      },
      {
        "who": "Frau Melnyk · Geschäftsführung",
        "scene": "Bei einem Antrag fehlen Unterlagen. Die Behörde fordert KONTOR auf, sie spätestens bis zum 15. Dezember nachzureichen.",
        "ask": "Was macht die Behörde?",
        "opts": [
          [
            "„Die Behörde setzt KONTOR eine Frist bis zum 15. Dezember.“",
            "best",
            "Sie legt einen verbindlichen Endtermin für die Nachreichung fest."
          ],
          [
            "„Die Behörde verlangt die Unterlagen bis zum 15. Dezember.“",
            "geht",
            "Auch richtig, aber die feste Frist wird hier nicht ausdrücklich benannt."
          ],
          [
            "„Die Behörde hat die Unterlagen zur Kenntnis genommen.“",
            "nein",
            "Zur Kenntnis nehmen heißt: eine Information registrieren. Hier fordert sie fehlende Unterlagen bis zu einem festen Termin an."
          ]
        ],
        "find": {
          "id": "frist_amt",
          "rel": [
            "frist",
            "bearbeitung",
            "verzug_amt"
          ],
          "expr": "<span class=\"fx\">eine</span> <span class=\"nv\">Frist</span> <span class=\"v\">setzen</span>",
          "mean": "festlegen, bis wann etwas erledigt werden muss",
          "bau": "jemandem (Dat.) eine Frist bis + Datum setzen",
          "satz": "Die Behörde <span class=\"v\">setzt</span> KONTOR eine <span class=\"nv\">Frist</span> bis zum 15. Dezember.",
          "satzHint": "„Eine Frist setzen“ heißt nicht „befristen“.",
          "more": [
            [
              "Einfacher gesagt",
              "„Die Unterlagen müssen bis zum 15. Dezember vorliegen.“"
            ],
            [
              "Wichtig",
              "Bei gesetzlichen Fristen kann die Behörde nicht immer frei entscheiden."
            ],
            [
              "Verwandt",
              "„Eine Frist verlängern“: mehr Zeit gewähren."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Der Veranstaltungsantrag",
      "lines": [
        [
          "Petra",
          "Wurde die Nutzung der Räume schon genehmigt?"
        ],
        [
          "Samira",
          "Noch nicht, der Antrag {0}."
        ],
        [
          "Petra",
          "Jetzt ist ein Schreiben gekommen: Wir dürfen die Räume länger nutzen!"
        ],
        [
          "Samira",
          "Prima, dann hat die Behörde {1}."
        ],
        [
          "Petra",
          "Sie möchte aber noch den Sicherheitsplan."
        ],
        [
          "Samira",
          "Dafür hat sie uns {2}."
        ]
      ],
      "gaps": [
        [
          [
            "ist noch in Bearbeitung",
            "best",
            "Über den Antrag wurde noch nicht entschieden."
          ],
          [
            "wird noch geprüft",
            "geht",
            "Auch richtig, sofern der Antrag derzeit geprüft wird."
          ],
          [
            "ist bereits genehmigt",
            "nein",
            "Das wäre eine positive Entscheidung. Der Antrag wird laut Gespräch aber noch bearbeitet."
          ]
        ],
        [
          [
            "eine Genehmigung erteilt",
            "best",
            "Die Nutzung wurde offiziell erlaubt."
          ],
          [
            "die Nutzung genehmigt",
            "geht",
            "Genauso richtig und einfacher."
          ],
          [
            "den Antrag geprüft",
            "nein",
            "Eine Prüfung ist noch keine offizielle Erlaubnis, die hier bereits vorliegt."
          ]
        ],
        [
          [
            "eine Frist bis zum 15. Dezember gesetzt",
            "best",
            "Die Behörde hat einen Endtermin festgelegt."
          ],
          [
            "den 15. Dezember als Termin genannt",
            "geht",
            "Auch möglich, aber weniger präzise."
          ],
          [
            "eine Genehmigung für den Sicherheitsplan erteilt",
            "nein",
            "Das hieße, der Sicherheitsplan sei schon erlaubt. Hier muss er erst nachgereicht werden."
          ]
        ]
      ]
    },
    "next": [
      "antrag",
      "rechtsmittel"
    ]
  },
  {
    "key": "rechtsmittel",
    "ico": "📨",
    "title": "Widersprechen und sich beschweren",
    "short": "Beschwerde, Einspruch und Widerspruch unterscheiden",
    "cases": [
      {
        "who": "Samira · Personal",
        "scene": "KONTOR erhält vom Finanzamt einen Steuerbescheid. Frau Melnyk hält die Berechnung für falsch. Die Rechtsbehelfsbelehrung nennt den Einspruch als möglichen Rechtsbehelf.",
        "ask": "Was möchte Frau Melnyk tun?",
        "opts": [
          [
            "„KONTOR möchte Einspruch gegen den Steuerbescheid einlegen.“",
            "best",
            "Für diesen Steuerbescheid ist laut Rechtsbehelfsbelehrung ein Einspruch vorgesehen."
          ],
          [
            "„KONTOR möchte die Berechnung anfechten.“",
            "geht",
            "Als allgemeine Beschreibung ist das richtig, nennt aber nicht den konkreten Rechtsbehelf."
          ],
          [
            "„KONTOR möchte Stellung zum Steuerbescheid nehmen.“",
            "nein",
            "Eine Stellungnahme erklärt die eigene Sicht. Laut Rechtsbehelfsbelehrung soll hier förmlich Einspruch eingelegt werden."
          ]
        ],
        "find": {
          "id": "einspruch",
          "rel": [
            "widerspruch",
            "beschwerde",
            "einwaende"
          ],
          "expr": "<span class=\"nv\">Einspruch</span> <span class=\"v\">einlegen</span>",
          "mean": "einer Entscheidung mit einem vorgesehenen Rechtsbehelf entgegentreten",
          "bau": "Einspruch gegen + Akk. einlegen · formell",
          "satz": "KONTOR <span class=\"v\">legt</span> gegen den Steuerbescheid <span class=\"nv\">Einspruch</span> <span class=\"v\">ein</span>.",
          "satzHint": "Bei „einlegen“ steht die Vorsilbe „ein“ am Ende. Welche Rechtsbehelfe möglich sind, steht im Bescheid.",
          "more": [
            [
              "Einfacher gesagt",
              "„KONTOR wehrt sich gegen den Bescheid.“"
            ],
            [
              "Wichtig",
              "Für einen konkreten Bescheid immer die Rechtsbehelfsbelehrung prüfen."
            ],
            [
              "Ähnlich",
              "Bei anderen Verwaltungsbescheiden kann „Widerspruch“ vorgesehen sein."
            ]
          ]
        }
      },
      {
        "who": "Nora · Einkauf",
        "scene": "Eine Spedition hat mehrere Kartons beschädigt geliefert. Nora möchte sich beim Kundenservice beschweren und fordert eine Lösung.",
        "ask": "Wie kann man das formeller ausdrücken?",
        "opts": [
          [
            "„Nora reicht bei der Spedition eine Beschwerde ein.“",
            "best",
            "Sie reicht ihre Beanstandung schriftlich beim Unternehmen ein."
          ],
          [
            "„Nora beschwert sich bei der Spedition.“",
            "geht",
            "Ebenso richtig und im Geschäftsalltag natürlicher."
          ],
          [
            "„Nora stellt bei der Spedition eine Anfrage.“",
            "nein",
            "Eine Anfrage bittet um Informationen oder ein Angebot. Nora will eine fehlerhafte Lieferung beanstanden."
          ]
        ],
        "find": {
          "id": "beschwerde",
          "rel": [
            "einspruch",
            "kritik"
          ],
          "expr": "<span class=\"fx\">eine</span> <span class=\"nv\">Beschwerde</span> <span class=\"v\">einreichen</span>",
          "mean": "eine Beanstandung schriftlich oder formell bei der zuständigen Stelle vorbringen",
          "bau": "bei + Dat. eine Beschwerde einreichen · Büro/formell",
          "satz": "Nora <span class=\"v\">reicht</span> bei der Spedition eine <span class=\"nv\">Beschwerde</span> <span class=\"v\">ein</span>.",
          "satzHint": "„Einreichen“ ist trennbar: „reicht ... ein“.",
          "more": [
            [
              "Einfacher gesagt",
              "„Nora beschwert sich.“"
            ],
            [
              "Andere Wendung",
              "Auch üblich: „eine Beschwerde vorbringen“."
            ],
            [
              "Nicht automatisch",
              "Eine Beschwerde ist nicht zwingend ein förmlicher Rechtsbehelf."
            ]
          ]
        }
      },
      {
        "who": "Frau Melnyk · Geschäftsführung",
        "scene": "KONTOR bekommt einen belastenden Verwaltungsbescheid. In der Rechtsbehelfsbelehrung steht, dass dagegen Widerspruch möglich ist. Frau Melnyk möchte diese Möglichkeit nutzen.",
        "ask": "Wie beschreibt man das?",
        "opts": [
          [
            "„KONTOR legt Widerspruch gegen den Bescheid ein.“",
            "best",
            "„Widerspruch einlegen“ ist die übliche Formulierung für den im Bescheid genannten Rechtsbehelf."
          ],
          [
            "„KONTOR erhebt Widerspruch gegen den Bescheid.“",
            "geht",
            "„Widerspruch erheben“ ist ebenfalls richtig und formell."
          ],
          [
            "„KONTOR möchte zum Bescheid Stellung nehmen.“",
            "nein",
            "Eine Stellungnahme legt die eigene Sicht dar, ersetzt aber nicht den im Bescheid vorgesehenen Widerspruch."
          ]
        ],
        "find": {
          "id": "widerspruch",
          "rel": [
            "einspruch",
            "beschwerde",
            "einwaende"
          ],
          "expr": "<span class=\"nv\">Widerspruch</span> <span class=\"v\">erheben</span>",
          "mean": "einer Entscheidung förmlich widersprechen",
          "bau": "Widerspruch gegen + Akk. erheben · formell",
          "satz": "KONTOR <span class=\"v\">erhebt</span> gegen den Bescheid <span class=\"nv\">Widerspruch</span>.",
          "satzHint": "Der konkrete Rechtsbehelf und die Frist ergeben sich aus dem Bescheid.",
          "more": [
            [
              "Einfacher gesagt",
              "„KONTOR widerspricht dem Bescheid.“"
            ],
            [
              "Variante",
              "Auch richtig: „Widerspruch einlegen“."
            ],
            [
              "Abgrenzung",
              "„Einspruch“ ist nicht bei jedem Verwaltungsbescheid dasselbe."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Drei verschiedene Vorgänge",
      "lines": [
        [
          "Samira",
          "Die Steuerberechnung ist falsch. Der Bescheid nennt den Einspruch."
        ],
        [
          "Frau Melnyk",
          "Dann werden wir gegen den Steuerbescheid {0}."
        ],
        [
          "Nora",
          "Die Spedition reagiert nicht auf meine Meldung über die beschädigte Lieferung."
        ],
        [
          "Frau Melnyk",
          "Dann können Sie dort {1}."
        ],
        [
          "Samira",
          "Unser anderer Verwaltungsbescheid nennt ausdrücklich den Widerspruch."
        ],
        [
          "Frau Melnyk",
          "Dann sollten wir fristgerecht {2}."
        ]
      ],
      "gaps": [
        [
          [
            "Einspruch einlegen",
            "best",
            "Beim Steuerbescheid ist der Einspruch laut Belehrung vorgesehen."
          ],
          [
            "rechtlich vorgehen",
            "geht",
            "Allgemein richtig, benennt den Rechtsbehelf aber nicht."
          ],
          [
            "Stellung nehmen",
            "nein",
            "Eine Stellungnahme ist nicht der im Steuerbescheid genannte Einspruch."
          ]
        ],
        [
          [
            "eine Beschwerde einreichen",
            "best",
            "Eine formelle Beanstandung bei der Spedition."
          ],
          [
            "sich beschweren",
            "geht",
            "Ebenso richtig, nur einfacher."
          ],
          [
            "eine Anfrage stellen",
            "nein",
            "Eine Anfrage erfragt etwas; Nora will einen Schaden beanstanden."
          ]
        ],
        [
          [
            "Widerspruch gegen den Bescheid einlegen",
            "best",
            "„Widerspruch einlegen“ ist hier die übliche Form."
          ],
          [
            "Widerspruch gegen den Bescheid erheben",
            "geht",
            "„Widerspruch erheben“ ist ebenfalls korrekt."
          ],
          [
            "zum Bescheid Stellung nehmen",
            "nein",
            "Eine Stellungnahme ist kein Ersatz für den ausdrücklich vorgesehenen Widerspruch."
          ]
        ]
      ]
    },
    "next": [
      "bearbeitung",
      "fristen"
    ]
  },
  {
    "key": "fristen",
    "ico": "⏱️",
    "title": "Fristen und Geltung",
    "short": "Verspätung erkennen, Inkrafttreten und Aufhebung unterscheiden",
    "cases": [
      {
        "who": "Pawel · Lager",
        "scene": "KONTOR muss Ersatzteile spätestens am Freitag liefern. Am Montag sind sie noch nicht da. Nach den vereinbarten Bedingungen ist KONTOR damit zu spät.",
        "ask": "Wie lässt sich das formell ausdrücken?",
        "opts": [
          [
            "„KONTOR ist mit der Lieferung in Verzug geraten.“",
            "best",
            "Die geschuldete Leistung ist nicht rechtzeitig erfolgt; die Voraussetzungen für Verzug werden im Fall als gegeben beschrieben."
          ],
          [
            "„KONTOR hat verspätet geliefert.“",
            "geht",
            "Das wäre richtig, wenn die Lieferung inzwischen erfolgt wäre; hier steht sie aber noch aus."
          ],
          [
            "„KONTOR ist mit der Lieferung in Verhandlungen getreten.“",
            "nein",
            "In Verhandlungen treten bedeutet: Gespräche zur Einigung beginnen. Die Lieferung ist aber überfällig."
          ]
        ],
        "find": {
          "id": "verzug_amt",
          "rel": [
            "verzug",
            "frist_amt"
          ],
          "expr": "<span class=\"fx\">in</span> <span class=\"nv\">Verzug</span> <span class=\"v\">geraten</span>",
          "mean": "bei einer geschuldeten Leistung rechtlich relevant zu spät kommen",
          "bau": "mit + Dat. in Verzug geraten · formell",
          "satz": "KONTOR <span class=\"v\">ist</span> mit der Lieferung <span class=\"fx\">in</span> <span class=\"nv\">Verzug</span> <span class=\"v\">geraten</span>.",
          "satzHint": "Perfekt mit „sein“: „ist … in Verzug geraten“. Eine bloße Verspätung ist nicht immer rechtlicher Verzug.",
          "more": [
            [
              "Einfacher gesagt",
              "„KONTOR ist zu spät dran.“"
            ],
            [
              "Wichtig",
              "Ob rechtlicher Verzug vorliegt, hängt von weiteren Voraussetzungen ab."
            ],
            [
              "Zustand",
              "„In Verzug sein“ beschreibt den bestehenden Zustand."
            ]
          ]
        }
      },
      {
        "who": "Samira · Personal",
        "scene": "Eine neue gesetzliche Regelung wurde veröffentlicht. Im Text steht, dass sie ab dem 1. Januar gilt.",
        "ask": "Wie beschreibt Samira den Beginn?",
        "opts": [
          [
            "„Die neue Regelung tritt am 1. Januar in Kraft.“",
            "best",
            "Ab diesem Tag gilt die Regelung rechtlich."
          ],
          [
            "„Die neue Regelung gilt ab dem 1. Januar.“",
            "geht",
            "Genauso richtig und einfacher."
          ],
          [
            "„Die neue Regelung kommt am 1. Januar zur Anwendung.“",
            "nein",
            "Zur Anwendung kommen heißt: eine Regel wird in einem Fall angewendet. Hier ist ausdrücklich der Beginn ihrer rechtlichen Geltung gemeint."
          ]
        ],
        "find": {
          "id": "inkraft",
          "rel": [
            "ausserkraft",
            "frist_amt"
          ],
          "expr": "<span class=\"fx\">in</span> <span class=\"nv\">Kraft</span> <span class=\"v\">treten</span>",
          "mean": "ab einem bestimmten Zeitpunkt rechtlich gelten",
          "bau": "in Kraft treten · feste Wortgruppe",
          "satz": "Die Regelung <span class=\"v\">tritt</span> am 1. Januar <span class=\"fx\">in</span> <span class=\"nv\">Kraft</span>.",
          "satzHint": "„In Kraft“ steht am Satzende wie ein fester Verbteil.",
          "more": [
            [
              "Einfacher gesagt",
              "„Die Regelung gilt ab Januar.“"
            ],
            [
              "Zustand",
              "„In Kraft sein“ bedeutet: bereits gelten."
            ],
            [
              "Gegenteil",
              "„Außer Kraft treten“: nicht mehr gelten."
            ]
          ]
        }
      },
      {
        "who": "Frau Melnyk · Geschäftsführung",
        "scene": "Eine bisherige interne Regelung soll ab Januar nicht mehr gelten. Die Geschäftsführung beschließt ausdrücklich, sie aufzuheben.",
        "ask": "Was macht die Geschäftsführung?",
        "opts": [
          [
            "„Die Geschäftsführung setzt die alte Regelung außer Kraft.“",
            "best",
            "Sie hebt die bisher geltende Regelung auf."
          ],
          [
            "„Die Geschäftsführung hebt die Regelung auf.“",
            "geht",
            "Genauso richtig und einfacher."
          ],
          [
            "„Die Geschäftsführung stellt die Regelung zur Diskussion.“",
            "nein",
            "Zur Diskussion stellen bedeutet: darüber beraten lassen. Die Geschäftsführung hat die Aufhebung bereits beschlossen."
          ]
        ],
        "find": {
          "id": "ausserkraft",
          "rel": [
            "inkraft"
          ],
          "expr": "<span class=\"fx\">außer</span> <span class=\"nv\">Kraft</span> <span class=\"v\">setzen</span>",
          "mean": "dafür sorgen, dass eine Regelung nicht mehr gilt",
          "bau": "etwas (Akk.) außer Kraft setzen · formell",
          "satz": "Die Geschäftsführung <span class=\"v\">setzt</span> die Regelung ab Januar <span class=\"fx\">außer</span> <span class=\"nv\">Kraft</span>.",
          "satzHint": "Unterschied: „Die Regelung tritt außer Kraft“ (Vorgang) und „Die Leitung setzt sie außer Kraft“ (Handlung).",
          "more": [
            [
              "Einfacher gesagt",
              "„Die Geschäftsführung hebt die Regel auf.“"
            ],
            [
              "Gegenteil",
              "„In Kraft setzen“: eine Regelung wirksam machen."
            ],
            [
              "Verb-Logik",
              "„Setzen“ bewirkt die Änderung, „treten“ beschreibt den Eintritt."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Änderungen zum Jahreswechsel",
      "lines": [
        [
          "Pawel",
          "Die Ersatzteile sind überfällig, die vereinbarte Frist ist abgelaufen."
        ],
        [
          "Nora",
          "Nach den Vertragsbedingungen sind wir mit der Lieferung {0}."
        ],
        [
          "Samira",
          "Und ab wann gilt die neue gesetzliche Regelung?"
        ],
        [
          "Frau Melnyk",
          "Sie wird am 1. Januar {1}."
        ],
        [
          "Samira",
          "Was machen wir dann mit unserer alten internen Regelung?"
        ],
        [
          "Frau Melnyk",
          "Die werden wir zum selben Zeitpunkt {2}."
        ]
      ],
      "gaps": [
        [
          [
            "in Verzug geraten",
            "best",
            "Eine geschuldete Lieferung ist bei gegebenen Voraussetzungen nicht rechtzeitig erfolgt."
          ],
          [
            "zu spät dran",
            "geht",
            "Alltagssprachlich richtig, aber nicht die gesuchte Verbindung."
          ],
          [
            "in Verhandlungen getreten",
            "nein",
            "Das wäre der Beginn von Gesprächen, nicht die rechtlich relevante Verspätung."
          ]
        ],
        [
          [
            "in Kraft treten",
            "best",
            "Die neue Regelung beginnt rechtlich zu gelten."
          ],
          [
            "gelten",
            "geht",
            "Richtiges einfaches Verb, aber die Nomen-Verb-Verbindung wird geübt."
          ],
          [
            "zur Anwendung kommen",
            "nein",
            "Das bezieht sich auf die Anwendung im konkreten Fall, nicht zwingend auf den Beginn der Geltung."
          ]
        ],
        [
          [
            "außer Kraft setzen",
            "best",
            "Die Leitung hebt die alte Regelung auf."
          ],
          [
            "aufheben",
            "geht",
            "Genauso richtig und einfacher."
          ],
          [
            "zur Diskussion stellen",
            "nein",
            "Die Leitung hat die Aufhebung bereits beschlossen, sie möchte die Regel nicht nur diskutieren."
          ]
        ]
      ]
    },
    "next": [
      "rechtsmittel",
      "antrag"
    ]
  }
];
(window.WMS=window.WMS||[]).push({bereich:'amt',goals:WMS_AMT});
