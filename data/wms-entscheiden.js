// KONTOR · Was möchten Sie sagen? · Datenpaket Entscheiden
// Zur Einbindung nach den Hilfsfunktionen N, V, F; globales Array WMS_ENTSCHEIDEN.
const WMS_ENTSCHEIDEN = [
  {
    "key": "moeglichkeiten",
    "ico": "🔎",
    "title": "Möglichkeiten prüfen",
    "short": "Optionen prüfen, bevor etwas entschieden wird",
    "cases": [
      {
        "who": "Nora · Einkauf",
        "scene": "Für die Messe braucht KONTOR einen zusätzlichen Transporter. Nora prüft mehrere Angebote. Ein Mietfahrzeug wäre eine Möglichkeit, entschieden ist noch nichts.",
        "ask": "Wie beschreibt Nora ihre Überlegung?",
        "opts": [
          [
            "„Wir ziehen einen Miettransporter in Betracht.“",
            "best",
            "Nora prüft bewusst diese Möglichkeit, ohne sich festzulegen."
          ],
          [
            "„Ein Miettransporter kommt für uns infrage.“",
            "geht",
            "Auch richtig. Das beschreibt die Eignung als Möglichkeit, nicht so deutlich Noras aktives Prüfen."
          ],
          [
            "„Wir bringen den Miettransporter jetzt zum Einsatz.“",
            "nein",
            "„Zum Einsatz bringen“ bedeutet, dass er bereits eingesetzt wird. Nora prüft aber erst eine Möglichkeit."
          ]
        ],
        "find": {
          "id": "betracht",
          "rel": [
            "infrage",
            "auswahl_stehen",
            "entscheidung"
          ],
          "expr": "etwas <span class=\"fx\">in</span> <span class=\"nv\">Betracht</span> <span class=\"v\">ziehen</span>",
          "mean": "eine Möglichkeit ernsthaft prüfen, ohne schon zu entscheiden",
          "bau": "etwas (Akk.) in Betracht ziehen",
          "satz": "Wir <span class=\"v\">ziehen</span> einen Miettransporter <span class=\"fx\">in</span> <span class=\"nv\">Betracht</span>.",
          "satzHint": "Die feste Wortgruppe „in Betracht“ steht am Ende.",
          "more": [
            [
              "Einfacher gesagt",
              "„Wir prüfen diese Möglichkeit.“"
            ],
            [
              "Noch nicht entschieden",
              "„In Betracht ziehen“ bedeutet nicht: schon zusagen."
            ],
            [
              "Ähnlich",
              "„In Erwägung ziehen“ bedeutet fast dasselbe."
            ]
          ]
        }
      },
      {
        "who": "Samira · Personal",
        "scene": "Für die Schulung gibt es einen Termin am Montag und einen am Donnerstag. Beide passen grundsätzlich in den Kalender.",
        "ask": "Was sagt Samira über Donnerstag?",
        "opts": [
          [
            "„Der Donnerstag kommt ebenfalls infrage.“",
            "best",
            "Donnerstag ist eine mögliche Option."
          ],
          [
            "„Der Donnerstag steht ebenfalls zur Auswahl.“",
            "geht",
            "Das ist auch richtig, wenn Donnerstag ausdrücklich eine der angebotenen Alternativen ist."
          ],
          [
            "„Der Donnerstag tritt ebenfalls in Kraft.“",
            "nein",
            "„In Kraft treten“ passt zu Regeln und Vorschriften. Ein Termin wird dadurch nicht zur möglichen Option."
          ]
        ],
        "find": {
          "id": "infrage",
          "rel": [
            "betracht",
            "auswahl_stehen"
          ],
          "expr": "<span class=\"fx\">in</span> <span class=\"nv\">Frage</span> <span class=\"v\">kommen</span>",
          "mean": "als Möglichkeit geeignet sein",
          "bau": "infrage kommen · ohne Artikel",
          "satz": "Auch Donnerstag <span class=\"v\">kommt</span> <span class=\"fx\">in</span> <span class=\"nv\">Frage</span>.",
          "satzHint": "Die Wendung wird auch zusammengeschrieben: „infrage kommen“.",
          "more": [
            [
              "Einfacher gesagt",
              "„Donnerstag wäre möglich.“"
            ],
            [
              "Abgrenzung",
              "„In Betracht ziehen“ beschreibt aktives Prüfen."
            ],
            [
              "Weitere Möglichkeit",
              "„Zur Auswahl stehen“ bedeutet: angeboten werden."
            ]
          ]
        }
      },
      {
        "who": "Petra Lenz · Empfang",
        "scene": "KONTOR bietet drei Räume für eine Fortbildung an: den Seminarraum, den Besprechungsraum und die Kantine. Die Gäste sollen einen auswählen.",
        "ask": "Wie beschreibt Petra das Angebot?",
        "opts": [
          [
            "„Drei Räume stehen zur Auswahl.“",
            "best",
            "Es gibt drei angebotene Optionen, zwischen denen gewählt werden kann."
          ],
          [
            "„Drei Räume kommen infrage.“",
            "geht",
            "Auch möglich, denn alle drei wären geeignet. Die ausdrücklich angebotene Auswahl wird weniger deutlich."
          ],
          [
            "„Drei Räume werden zur Verfügung gestellt.“",
            "nein",
            "„Zur Verfügung stellen“ heißt: Man kann die Räume benutzen. Es sagt nicht unbedingt, dass die Gäste daraus wählen sollen."
          ]
        ],
        "find": {
          "id": "auswahl_stehen",
          "rel": [
            "auswahl_treffen",
            "infrage"
          ],
          "expr": "<span class=\"fx\">zur</span> <span class=\"nv\">Auswahl</span> <span class=\"v\">stehen</span>",
          "mean": "als auswählbare Möglichkeit angeboten werden",
          "bau": "zur Auswahl stehen · feste Präposition",
          "satz": "Drei Räume <span class=\"v\">stehen</span> <span class=\"fx\">zur</span> <span class=\"nv\">Auswahl</span>.",
          "satzHint": "„Zur Auswahl“ ist eine feste Wortgruppe.",
          "more": [
            [
              "Einfacher gesagt",
              "„Sie können zwischen drei Räumen wählen.“"
            ],
            [
              "Andere Perspektive",
              "Eine Person kann „eine Auswahl treffen“."
            ],
            [
              "Verb-Logik",
              "„Stehen“ beschreibt einen Zustand."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Die Messe vorbereiten",
      "lines": [
        [
          "Nora",
          "Wir brauchen für die Messe einen Transporter. Welche Fahrzeuge prüfen wir?"
        ],
        [
          "Samira",
          "Wir sollten auch einen Miettransporter {0}."
        ],
        [
          "Petra",
          "Ein Kleinbus wäre ebenfalls möglich."
        ],
        [
          "Nora",
          "Ja, ein Kleinbus {1}."
        ],
        [
          "Samira",
          "Welche Modelle bietet die Vermietung an?"
        ],
        [
          "Nora",
          "Drei Fahrzeuge {2}."
        ]
      ],
      "gaps": [
        [
          [
            "in Betracht ziehen",
            "best",
            "Ein Angebot bewusst prüfen."
          ],
          [
            "prüfen",
            "geht",
            "Sprachlich korrekt, aber hier soll eine Nomen-Verb-Verbindung geübt werden."
          ],
          [
            "zur Verfügung stellen",
            "nein",
            "„Zur Verfügung stellen“ hieße, einen Transporter bereitzustellen. Hier werden Mietmöglichkeiten erst geprüft."
          ]
        ],
        [
          [
            "kommt infrage",
            "best",
            "Der Kleinbus ist eine mögliche Lösung."
          ],
          [
            "wäre geeignet",
            "geht",
            "Richtiges einfaches Verb, aber hier wird die Nomen-Verb-Verbindung geübt."
          ],
          [
            "tritt in Kraft",
            "nein",
            "Das beschreibt den Geltungsbeginn einer Regel, nicht die Eignung eines Fahrzeugs."
          ]
        ],
        [
          [
            "stehen zur Auswahl",
            "best",
            "Mehrere Fahrzeuge werden als Optionen angeboten."
          ],
          [
            "kommen infrage",
            "geht",
            "Auch möglich, wenn alle drei geeignet sind."
          ],
          [
            "kommen zum Einsatz",
            "nein",
            "Das bedeutet, die Fahrzeuge werden tatsächlich eingesetzt. Nora spricht über angebotene Optionen."
          ]
        ]
      ]
    },
    "next": [
      "entscheiden",
      "antrag"
    ]
  },
  {
    "key": "entscheiden",
    "ico": "⚖️",
    "title": "Eine Entscheidung treffen",
    "short": "Entscheiden, sich festlegen und zwischen Optionen wählen",
    "cases": [
      {
        "who": "Frau Melnyk · Geschäftsführung",
        "scene": "Zwei Lieferanten haben Angebote geschickt. Frau Melnyk hat Preise und Lieferzeiten verglichen. Heute legt sie verbindlich fest, wer den Auftrag bekommt.",
        "ask": "Wie beschreibt man diesen Schritt?",
        "opts": [
          [
            "„Frau Melnyk trifft heute eine Entscheidung.“",
            "best",
            "Nach der Prüfung legt sie sich fest."
          ],
          [
            "„Frau Melnyk trifft heute eine Auswahl.“",
            "geht",
            "Auch richtig, denn sie wählt einen Lieferanten aus. Die Entscheidung kann darüber hinaus weitere Bedingungen betreffen."
          ],
          [
            "„Frau Melnyk stellt heute einen Antrag.“",
            "nein",
            "Einen Antrag stellen heißt: offiziell um etwas bitten. Frau Melnyk entscheidet aber selbst."
          ]
        ],
        "find": {
          "id": "entscheidung",
          "rel": [
            "auswahl_treffen",
            "entschluss",
            "prioritaeten"
          ],
          "expr": "<span class=\"fx\">eine</span> <span class=\"nv\">Entscheidung</span> <span class=\"v\">treffen</span>",
          "mean": "entscheiden und sich festlegen",
          "bau": "eine Entscheidung treffen · mit Artikel",
          "satz": "Frau Melnyk <span class=\"v\">trifft</span> heute eine <span class=\"nv\">Entscheidung</span>.",
          "satzHint": "„Eine Entscheidung“ kann auch vorn stehen: „Die Entscheidung trifft Frau Melnyk.“",
          "more": [
            [
              "Einfacher gesagt",
              "„Frau Melnyk entscheidet heute.“"
            ],
            [
              "Variante",
              "Auch richtig: „eine Entscheidung fällen“."
            ],
            [
              "Abgrenzung",
              "Erst prüfen, dann entscheiden."
            ]
          ]
        }
      },
      {
        "who": "Pawel · Lager",
        "scene": "Pawel hat lange überlegt, ob er die Zusatzschulung machen möchte. Jetzt hat er sich fest vorgenommen, sich anzumelden.",
        "ask": "Wie kann man das ausdrücken?",
        "opts": [
          [
            "„Pawel hat den Entschluss gefasst, sich anzumelden.“",
            "best",
            "Ein Entschluss bezeichnet eine bewusst gefasste persönliche Absicht."
          ],
          [
            "„Pawel hat eine Entscheidung getroffen.“",
            "geht",
            "Auch richtig. „Entschluss fassen“ betont den festen Vorsatz."
          ],
          [
            "„Pawel hat den Antrag auf die Schulung gestellt.“",
            "nein",
            "Ein Antrag wäre eine Bitte um Genehmigung. Im Fall hat Pawel sich zunächst selbst fest entschlossen."
          ]
        ],
        "find": {
          "id": "entschluss",
          "rel": [
            "entscheidung",
            "verantwortung"
          ],
          "expr": "<span class=\"fx\">einen</span> <span class=\"nv\">Entschluss</span> <span class=\"v\">fassen</span>",
          "mean": "sich fest vornehmen, etwas zu tun",
          "bau": "einen Entschluss fassen, etwas zu tun · mit Artikel",
          "satz": "Pawel <span class=\"v\">hat</span> den <span class=\"nv\">Entschluss</span> <span class=\"v\">gefasst</span>, an der Schulung teilzunehmen.",
          "satzHint": "Im Perfekt steht das Partizip „gefasst“ am Ende der Verbindung.",
          "more": [
            [
              "Einfacher gesagt",
              "„Pawel hat sich entschieden.“"
            ],
            [
              "Ähnlich",
              "„Eine Entscheidung treffen“ ist allgemeiner."
            ],
            [
              "Nächstes Wort",
              "„Einen Vorsatz fassen“ betrifft oft ein persönliches Ziel."
            ]
          ]
        }
      },
      {
        "who": "Nora · Einkauf",
        "scene": "Für neue Bürostühle gibt es fünf Modelle. Die Leitung will nur zwei davon bestellen. Nora soll aus den Modellen zwei passende auswählen.",
        "ask": "Was macht Nora?",
        "opts": [
          [
            "„Nora trifft eine Auswahl.“",
            "best",
            "Sie wählt aus mehreren Angeboten bestimmte Modelle aus."
          ],
          [
            "„Nora trifft eine Entscheidung.“",
            "geht",
            "Auch richtig, aber „Auswahl“ betont das Aussuchen aus mehreren Modellen."
          ],
          [
            "„Nora stellt die fünf Modelle zur Verfügung.“",
            "nein",
            "Zur Verfügung stellen bedeutet: Andere können sie nutzen. Nora soll aber zwei Modelle auswählen."
          ]
        ],
        "find": {
          "id": "auswahl_treffen",
          "rel": [
            "auswahl_stehen",
            "entscheidung"
          ],
          "expr": "<span class=\"fx\">eine</span> <span class=\"nv\">Auswahl</span> <span class=\"v\">treffen</span>",
          "mean": "aus mehreren Möglichkeiten etwas auswählen",
          "bau": "eine Auswahl treffen · mit Artikel",
          "satz": "Nora <span class=\"v\">trifft</span> aus fünf Modellen eine <span class=\"nv\">Auswahl</span>.",
          "satzHint": "Mit Artikel ist die Wortgruppe beweglicher.",
          "more": [
            [
              "Einfacher gesagt",
              "„Nora wählt zwei Modelle aus.“"
            ],
            [
              "Andere Perspektive",
              "„Zur Auswahl stehen“: Die Modelle sind verfügbar."
            ],
            [
              "Verwandt",
              "„Eine Entscheidung treffen“ ist allgemeiner."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Neue Arbeitsplätze",
      "lines": [
        [
          "Nora",
          "Fünf Schreibtische stehen zur Auswahl."
        ],
        [
          "Samira",
          "Welche nehmen wir?"
        ],
        [
          "Nora",
          "Ich werde nach dem Vergleich {0}."
        ],
        [
          "Pawel",
          "Ich habe auch eine Neuigkeit: Ich will die Schulung besuchen."
        ],
        [
          "Samira",
          "Sie haben also {1}?"
        ],
        [
          "Pawel",
          "Genau. Und bei den Stühlen sollten wir aus den Modellen {2}."
        ]
      ],
      "gaps": [
        [
          [
            "eine Entscheidung treffen",
            "best",
            "Nora legt sich nach dem Vergleich fest."
          ],
          [
            "eine Auswahl treffen",
            "geht",
            "Auch möglich, wenn Nora aus den fünf Schreibtischen auswählt."
          ],
          [
            "einen Antrag stellen",
            "nein",
            "Ein Antrag ist eine Bitte um Genehmigung. Nora entscheidet selbst über den Kauf."
          ]
        ],
        [
          [
            "den Entschluss gefasst, sich anzumelden",
            "best",
            "Der feste persönliche Vorsatz ist gemeint."
          ],
          [
            "eine Entscheidung getroffen",
            "geht",
            "Das ist richtig, aber weniger spezifisch."
          ],
          [
            "Rücksprache gehalten",
            "nein",
            "Das würde nur bedeuten, dass Pawel etwas besprochen hat. Seinen festen Entschluss drückt es nicht aus."
          ]
        ],
        [
          [
            "eine Auswahl treffen",
            "best",
            "Es geht ums Aussuchen aus mehreren Modellen."
          ],
          [
            "eine Entscheidung treffen",
            "geht",
            "Auch richtig, aber weniger konkret."
          ],
          [
            "Maßnahmen treffen",
            "nein",
            "Maßnahmen wären konkrete Schritte. Hier sollen zunächst zwei Stuhlmodelle ausgesucht werden."
          ]
        ]
      ]
    },
    "next": [
      "moeglichkeiten",
      "zustimmen"
    ]
  },
  {
    "key": "zustimmen",
    "ico": "🤝",
    "title": "Zustimmen und Ablehnung erleben",
    "short": "Einverständnis ausdrücken und auf Reaktionen stoßen",
    "cases": [
      {
        "who": "Samira · Personal",
        "scene": "Ein Bewerber möchte die Anfangszeit an zwei Tagen verschieben. Samira hat die Bitte geprüft und erlaubt die Änderung ausdrücklich.",
        "ask": "Wie beschreibt man ihre Antwort?",
        "opts": [
          [
            "„Samira gibt ihre Zustimmung zu der Änderung.“",
            "best",
            "Sie erklärt ausdrücklich, dass sie einverstanden ist."
          ],
          [
            "„Samira stimmt der Änderung zu.“",
            "geht",
            "Genauso richtig, nur einfacher ausgedrückt."
          ],
          [
            "„Samira gibt Rückmeldung zu der Änderung.“",
            "nein",
            "Eine Rückmeldung kann auch eine Ablehnung oder Nachfrage sein. Hier erklärt Samira ausdrücklich ihr Einverständnis."
          ]
        ],
        "find": {
          "id": "zustimmung",
          "rel": [
            "zustimmung_finden",
            "ablehnung",
            "genehmigung"
          ],
          "expr": "<span class=\"fx\">seine</span> <span class=\"nv\">Zustimmung</span> <span class=\"fx\">zu + Dat.</span> <span class=\"v\">geben</span>",
          "mean": "ausdrücklich einverstanden sein",
          "bau": "seine Zustimmung zu + Dat. geben",
          "satz": "Samira <span class=\"v\">gibt</span> ihre <span class=\"nv\">Zustimmung</span> zu der Änderung.",
          "satzHint": "Der Artikel beziehungsweise das Possessivwort gehört zur Wortgruppe.",
          "more": [
            [
              "Einfacher gesagt",
              "„Samira stimmt zu.“"
            ],
            [
              "Formeller",
              "„Die Zustimmung erteilen“ ist amtlicher."
            ],
            [
              "Gegenteil",
              "„Die Zustimmung verweigern“ bedeutet: nicht erlauben."
            ]
          ]
        }
      },
      {
        "who": "Nora · Einkauf",
        "scene": "Nora schlägt ein neues System für Bestellungen vor. In der Besprechung reagieren alle zustimmend. Niemand lehnt den Vorschlag ab.",
        "ask": "Was kann Nora danach berichten?",
        "opts": [
          [
            "„Der Vorschlag findet Zustimmung.“",
            "best",
            "Andere reagieren positiv auf den Vorschlag."
          ],
          [
            "„Alle stimmen dem Vorschlag zu.“",
            "geht",
            "Inhaltlich ebenso richtig, nur ohne Nomen-Verb-Verbindung."
          ],
          [
            "„Der Vorschlag kommt bei allen zur Sprache.“",
            "nein",
            "Zur Sprache kommen heißt: Man spricht über den Vorschlag. Das sagt noch nichts über die Zustimmung."
          ]
        ],
        "find": {
          "id": "zustimmung_finden",
          "rel": [
            "zustimmung",
            "ablehnung"
          ],
          "expr": "<span class=\"nv\">Zustimmung</span> <span class=\"v\">finden</span>",
          "mean": "von anderen positiv aufgenommen werden",
          "bau": "Zustimmung finden · ohne Artikel",
          "satz": "Der Vorschlag <span class=\"v\">findet</span> im Team <span class=\"nv\">Zustimmung</span>.",
          "satzHint": "Das Nomen steht am Ende der Verbindung.",
          "more": [
            [
              "Einfacher gesagt",
              "„Alle finden den Vorschlag gut.“"
            ],
            [
              "Andere Perspektive",
              "„Zustimmung geben“: Eine Person stimmt aktiv zu."
            ],
            [
              "Gegenteil",
              "„Auf Ablehnung stoßen“ bedeutet: Menschen lehnen etwas ab."
            ]
          ]
        }
      },
      {
        "who": "Frau Melnyk · Geschäftsführung",
        "scene": "Frau Melnyk schlägt neue Schichtzeiten vor. Mehrere Beschäftigte sind dagegen und sagen das deutlich.",
        "ask": "Wie beschreibt sie die Reaktion?",
        "opts": [
          [
            "„Der Vorschlag stößt auf Ablehnung.“",
            "best",
            "Andere lehnen den Vorschlag ab."
          ],
          [
            "„Der Vorschlag findet keine Zustimmung.“",
            "geht",
            "Ebenfalls richtig, die Ablehnung klingt darin etwas weniger deutlich."
          ],
          [
            "„Der Vorschlag findet Beachtung.“",
            "nein",
            "Beachtung finden bedeutet: Etwas wird wahrgenommen. Die Beschäftigten lehnen den Vorschlag aber ausdrücklich ab."
          ]
        ],
        "find": {
          "id": "ablehnung",
          "rel": [
            "zustimmung_finden",
            "kritik",
            "einwaende"
          ],
          "expr": "<span class=\"fx\">auf</span> <span class=\"nv\">Ablehnung</span> <span class=\"v\">stoßen</span>",
          "mean": "von anderen abgelehnt werden",
          "bau": "auf Ablehnung stoßen · feste Präposition",
          "satz": "Der Vorschlag <span class=\"v\">stößt</span> im Team <span class=\"fx\">auf</span> <span class=\"nv\">Ablehnung</span>.",
          "satzHint": "„Auf Ablehnung“ bleibt als feste Wortgruppe zusammen.",
          "more": [
            [
              "Einfacher gesagt",
              "„Die Beschäftigten lehnen den Vorschlag ab.“"
            ],
            [
              "Gegenteil",
              "„Zustimmung finden“."
            ],
            [
              "Wortfamilie",
              "„Auf Kritik stoßen“ bedeutet: kritisiert werden."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Neue Schichtzeiten",
      "lines": [
        [
          "Frau Melnyk",
          "Ich schlage vor, die Schichten um eine Stunde zu verschieben."
        ],
        [
          "Samira",
          "Im Büro sind alle einverstanden. Der Vorschlag {0}."
        ],
        [
          "Pawel",
          "Im Lager sind viele dagegen. Dort {1}."
        ],
        [
          "Frau Melnyk",
          "Wir verschieben die Einführung. Samira, stimmen Sie diesem Plan zu?"
        ],
        [
          "Samira",
          "Ja, ich {2}."
        ]
      ],
      "gaps": [
        [
          [
            "findet Zustimmung",
            "best",
            "Die Beschäftigten reagieren positiv."
          ],
          [
            "wird akzeptiert",
            "geht",
            "Inhaltlich richtig, aber hier soll die Nomen-Verb-Verbindung geübt werden."
          ],
          [
            "steht zur Diskussion",
            "nein",
            "Das heißt, der Vorschlag wird noch besprochen. Ob die Beschäftigten zustimmen, bleibt offen."
          ]
        ],
        [
          [
            "stößt er auf Ablehnung",
            "best",
            "Im Lager gibt es Gegenstimmen."
          ],
          [
            "findet er keine Zustimmung",
            "geht",
            "Auch richtig, schwächer als die ausdrückliche Ablehnung."
          ],
          [
            "kommt er zur Sprache",
            "nein",
            "Das bezeichnet nur das Ansprechen des Themas, nicht die ablehnende Reaktion."
          ]
        ],
        [
          [
            "gebe meine Zustimmung",
            "best",
            "Samira erklärt ausdrücklich ihr Einverständnis."
          ],
          [
            "stimme zu",
            "geht",
            "Richtig und einfacher, aber keine Nomen-Verb-Verbindung."
          ],
          [
            "gebe Rückmeldung",
            "nein",
            "Eine Rückmeldung muss keine Zustimmung sein. Samira stimmt hier ausdrücklich zu."
          ]
        ]
      ]
    },
    "next": [
      "entscheiden",
      "folgen"
    ]
  },
  {
    "key": "folgen",
    "ico": "🧭",
    "title": "Folgen und Verantwortung",
    "short": "Konsequenzen, Risiken und Verantwortung bedenken",
    "cases": [
      {
        "who": "Frau Melnyk · Geschäftsführung",
        "scene": "Die Rechnungen kommen seit Wochen zu spät. Frau Melnyk hat die Ursachen geprüft. Jetzt ändert sie das Verfahren und verteilt Aufgaben neu.",
        "ask": "Was tut sie nach der Prüfung?",
        "opts": [
          [
            "„Frau Melnyk zieht Konsequenzen.“",
            "best",
            "Sie reagiert auf Probleme mit konkreten Änderungen."
          ],
          [
            "„Frau Melnyk trifft Maßnahmen.“",
            "geht",
            "Auch richtig: Sie handelt. „Konsequenzen ziehen“ betont, dass die Maßnahmen eine Reaktion auf die Fehler sind."
          ],
          [
            "„Frau Melnyk nimmt die Fehler zur Kenntnis.“",
            "nein",
            "Zur Kenntnis nehmen heißt zunächst: Die Fehler werden registriert. Hier verändert sie als Reaktion bereits das Verfahren."
          ]
        ],
        "find": {
          "id": "konsequenzen",
          "rel": [
            "verantwortung",
            "inkauf",
            "vorbereitung"
          ],
          "expr": "<span class=\"nv\">Konsequenzen</span> <span class=\"v\">ziehen</span>",
          "mean": "aus Erfahrungen oder Fehlern konkrete Folgen für das eigene Handeln ableiten",
          "bau": "Konsequenzen aus + Dat. ziehen",
          "satz": "Frau Melnyk <span class=\"v\">zieht</span> aus den Fehlern <span class=\"nv\">Konsequenzen</span>.",
          "satzHint": "Das Nomen steht hier am Ende.",
          "more": [
            [
              "Einfacher gesagt",
              "„Sie ändert etwas, damit der Fehler nicht wieder passiert.“"
            ],
            [
              "Nicht dasselbe",
              "„Konsequenzen tragen“ bedeutet: die Folgen tragen müssen."
            ],
            [
              "Verwandt",
              "„Maßnahmen treffen“: aktiv handeln."
            ]
          ]
        }
      },
      {
        "who": "Nora · Einkauf",
        "scene": "Ein günstiger Lieferant kann erst zwei Tage später liefern. Nora bestellt trotzdem dort, obwohl sie weiß, dass der Termin knapp wird.",
        "ask": "Wie beschreibt man ihre Entscheidung?",
        "opts": [
          [
            "„Nora nimmt das Risiko in Kauf.“",
            "best",
            "Sie kennt einen möglichen Nachteil und akzeptiert ihn bewusst."
          ],
          [
            "„Nora geht bewusst ein Risiko ein.“",
            "geht",
            "Auch richtig, nur anders formuliert."
          ],
          [
            "„Nora zieht das Risiko in Betracht.“",
            "nein",
            "In Betracht ziehen heißt: etwas erwägen. Nora entscheidet sich bereits und akzeptiert den möglichen Nachteil."
          ]
        ],
        "find": {
          "id": "inkauf",
          "rel": [
            "konsequenzen",
            "verantwortung"
          ],
          "expr": "<span class=\"nv\">Risiko</span> <span class=\"fx\">in</span> <span class=\"nv\">Kauf</span> <span class=\"v\">nehmen</span>",
          "mean": "einen bekannten möglichen Nachteil bewusst akzeptieren",
          "bau": "ein Risiko in Kauf nehmen · feste Wortgruppe",
          "satz": "Nora <span class=\"v\">nimmt</span> das <span class=\"nv\">Risiko</span> bewusst <span class=\"fx\">in</span> <span class=\"nv\">Kauf</span>.",
          "satzHint": "„In Kauf“ bleibt am Ende; das Risiko steht als Ergänzung davor.",
          "more": [
            [
              "Einfacher gesagt",
              "„Sie akzeptiert das Risiko.“"
            ],
            [
              "Abgrenzung",
              "Nicht jedes Risiko ist schon ein Schaden."
            ],
            [
              "Verwandt",
              "„Verantwortung übernehmen“ betrifft die Zuständigkeit."
            ]
          ]
        }
      },
      {
        "who": "Pawel · Lager",
        "scene": "Pawel koordiniert ab morgen die Warenannahme. Er erklärt dem Team ausdrücklich, dass er für die Abläufe zuständig sein wird.",
        "ask": "Was sagt Pawel?",
        "opts": [
          [
            "„Ich übernehme die Verantwortung für die Warenannahme.“",
            "best",
            "Er macht deutlich, dass er zuständig ist und für die Abläufe einsteht."
          ],
          [
            "„Ich bin ab morgen für die Warenannahme verantwortlich.“",
            "geht",
            "Genauso richtig und einfacher."
          ],
          [
            "„Ich halte Rücksprache über die Warenannahme.“",
            "nein",
            "Rücksprache halten heißt: sich abstimmen. Pawel sagt aber zu, selbst zuständig zu sein."
          ]
        ],
        "find": {
          "id": "verantwortung",
          "rel": [
            "konsequenzen",
            "entschluss",
            "unterstuetzung"
          ],
          "expr": "<span class=\"nv\">Verantwortung</span> <span class=\"v\">übernehmen</span>",
          "mean": "eine Aufgabe und die Zuständigkeit dafür auf sich nehmen",
          "bau": "Verantwortung für + Akk. übernehmen",
          "satz": "Pawel <span class=\"v\">übernimmt</span> ab morgen die <span class=\"nv\">Verantwortung</span> für die Warenannahme.",
          "satzHint": "Die Ergänzung „für die Warenannahme“ gehört zur Bedeutung.",
          "more": [
            [
              "Einfacher gesagt",
              "„Pawel ist jetzt zuständig.“"
            ],
            [
              "Andere Sicht",
              "„Verantwortung tragen“ beschreibt den Zustand."
            ],
            [
              "Verwandt",
              "„Die Leitung übernehmen“ betrifft das Führen eines Teams."
            ]
          ]
        }
      }
    ],
    "dialog": {
      "title": "Die Warenannahme läuft nicht rund",
      "lines": [
        [
          "Nora",
          "Wir haben die Verspätungen ausgewertet. Wir müssen jetzt {0}."
        ],
        [
          "Frau Melnyk",
          "Pawel, wer koordiniert ab morgen die Annahme?"
        ],
        [
          "Pawel",
          "Ich werde die {1}."
        ],
        [
          "Nora",
          "Der neue Lieferant ist günstiger, aber manchmal zwei Tage später."
        ],
        [
          "Frau Melnyk",
          "Das wissen wir. Wir können dieses Risiko bewusst {2}."
        ]
      ],
      "gaps": [
        [
          [
            "Konsequenzen ziehen",
            "best",
            "Aus den Problemen folgen Änderungen."
          ],
          [
            "Maßnahmen treffen",
            "geht",
            "Auch richtig, wenn konkrete Schritte gemeint sind."
          ],
          [
            "die Fehler zur Kenntnis nehmen",
            "nein",
            "Das wäre zunächst nur das Registrieren. Nora will jetzt konkrete Änderungen anstoßen."
          ]
        ],
        [
          [
            "Verantwortung übernehmen",
            "best",
            "Pawel erklärt seine Zuständigkeit."
          ],
          [
            "Leitung übernehmen",
            "geht",
            "Auch möglich, wenn Pawel tatsächlich die Arbeitsgruppe leitet."
          ],
          [
            "Abstimmung übernehmen",
            "nein",
            "Eine Abstimmung ist ein Verfahren oder Gespräch, nicht die Verantwortung für die Warenannahme."
          ]
        ],
        [
          [
            "in Kauf nehmen",
            "best",
            "Ein bekanntes Risiko wird akzeptiert."
          ],
          [
            "akzeptieren",
            "geht",
            "Inhaltlich richtig, aber kein Nomen-Verb-Gefüge."
          ],
          [
            "in Betracht ziehen",
            "nein",
            "Das hieße: das Risiko nur erwägen. Frau Melnyk akzeptiert es bereits bewusst."
          ]
        ]
      ]
    },
    "next": [
      "zustimmen",
      "moeglichkeiten"
    ]
  }
];
(window.WMS=window.WMS||[]).push({bereich:'entscheiden',goals:WMS_ENTSCHEIDEN});
