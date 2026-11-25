#!/usr/bin/env python3
"""Erzeugt data/reiter.json – das gemeinsame Inhaltsverzeichnis auf Reiterebene.

Drei Quellen, eine Ausgabe:
  1. die HTML-Seiten   → welche Reiter es wirklich gibt (Anker, Titel, Reihenfolge)
  2. inhalt.json       → Modul, Bereich, Sichtbarkeit des Moduls
  3. data/reiter-redaktion.json → Heimat, Lernziel, Suchbegriffe, vorher, Freigabe

data/reiter.json wird nie von Hand bearbeitet. Bei Fehlern (verwaiste Angaben,
doppelte Anker, unbekannte Heimat …) bricht das Skript ab und schreibt nichts.

Aufruf im Repo-Ordner:
  python3 tools/reiter.py           # erzeugen und Bericht ausgeben
  python3 tools/reiter.py --pruefen # nur prüfen, ob reiter.json aktuell ist
"""
import json
import os
import re
import sys
from html.parser import HTMLParser

WURZEL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INHALT = os.path.join(WURZEL, 'inhalt.json')
REDAKTION = os.path.join(WURZEL, 'data', 'reiter-redaktion.json')
AUSGABE = os.path.join(WURZEL, 'data', 'reiter.json')

# Was nie in das öffentliche Verzeichnis gehört: persönliche Coachings.
AUSGESCHLOSSEN = ('kurs/coaching/',)
FREIGABEN = {None, 'ausgeblendet', 'nur-lehrkraft'}


class Leser(HTMLParser):
    """Sammelt Reiter in den beiden Bauweisen des Lehrwerks.

    Vorlage:   <section class="blatt" id="blatt-x" aria-labelledby="tab-x"> + Element mit id="tab-x"
    Sonderseite: <button data-tab="t1">Titel</button> + <section id="t1">
    """

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.blaetter = []          # (id, labelledby)
        self.tabknoepfe = []        # (ziel, titel)
        self.sektionen = set()
        self.texte = {}             # id → Text
        self._offen = []            # Stapel: (tag, id oder None, sammelt_für)
        self._puffer = {}

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        klassen = (a.get('class') or '').split()
        el_id = a.get('id')
        if tag == 'section' and el_id:
            self.sektionen.add(el_id)
            if 'blatt' in klassen:
                self.blaetter.append((el_id, a.get('aria-labelledby')))
        sammeln = None
        if el_id and el_id.startswith('tab-'):
            sammeln = 'id:' + el_id
        if tag == 'button' and a.get('data-tab'):
            sammeln = 'tab:' + a['data-tab']
        if a.get('data-blatt') and tag == 'button':
            wert = a['data-blatt']
            sammeln = 'id:' + (wert if wert.startswith('blatt-') else 'blatt-' + wert)
        if tag in ('br', 'img', 'input', 'meta', 'link', 'hr', 'wbr'):
            return
        self._offen.append((tag, sammeln))
        if sammeln:
            self._puffer[sammeln] = []

    def handle_endtag(self, tag):
        while self._offen:
            t, sammeln = self._offen.pop()
            if sammeln:
                text = ' '.join(''.join(self._puffer.pop(sammeln)).split())
                if sammeln.startswith('id:'):
                    self.texte[sammeln[3:]] = text
                else:
                    self.tabknoepfe.append((sammeln[4:], text))
            if t == tag:
                break

    def handle_data(self, data):
        for _, sammeln in self._offen:
            if sammeln:
                self._puffer[sammeln].append(data)


def sauber(titel):
    """„3 · Nora gibt weiter“ → „Nora gibt weiter“: Nummern stammen aus der Reiterleiste, nicht aus dem Titel."""
    return re.sub(r'^\d+\s*[·.:]\s*', '', titel).strip()


def reiter_der_seite(pfad):
    """Liefert [(anker, titel, bauweise)] in Seitenreihenfolge. Leere Liste = Einzelseite."""
    with open(os.path.join(WURZEL, pfad), encoding='utf-8') as f:
        leser = Leser()
        leser.feed(f.read())
    if leser.blaetter:
        return [(bid, sauber(leser.texte.get(lab or '') or leser.texte.get(bid) or bid), 'vorlage') for bid, lab in leser.blaetter]
    tabs = [(ziel, titel) for ziel, titel in leser.tabknoepfe if ziel in leser.sektionen]
    if tabs:
        return [(ziel, sauber(titel), 'data-tab') for ziel, titel in tabs]
    return []


def bauen():
    fehler, hinweise = [], []
    inhalt = json.load(open(INHALT, encoding='utf-8'))
    red = json.load(open(REDAKTION, encoding='utf-8'))
    heimaten = red.get('heimaten', {})
    hauptweg = red.get('hauptweg', [])
    angaben = red.get('reiter', {})

    reiter, schluessel = [], set()
    module_pfade = set()
    for bereich in inhalt['bereiche']:
        for gruppe in bereich['gruppen']:
            for modul in gruppe['module']:
                rel = bereich['id'] + '/' + modul['pfad']
                if any(rel.startswith(x) for x in AUSGESCHLOSSEN) or rel in module_pfade:
                    continue
                datei = os.path.join(WURZEL, rel)
                existiert = os.path.isfile(datei)
                modul_sichtbar = modul.get('status') in ('fertig', 'teilweise') and existiert
                if not existiert:
                    continue
                module_pfade.add(rel)
                gefunden = reiter_der_seite(rel)
                eintraege = gefunden or [(None, modul['titel'], 'einzelseite')]
                gesehen = set()
                for nr, (anker, titel, bauweise) in enumerate(eintraege, 1):
                    key = rel + ('#' + anker if anker else '')
                    if anker in gesehen:
                        fehler.append(f'Doppelter Anker: {key}')
                    gesehen.add(anker)
                    r = angaben.get(key, {})
                    freigabe = r.get('freigabe')
                    if freigabe not in FREIGABEN:
                        fehler.append(f'Unbekannte Freigabe „{freigabe}“: {key}')
                    if r.get('heimat') and r['heimat'] not in heimaten:
                        fehler.append(f'Unbekannte Heimat „{r["heimat"]}“: {key}')
                    reiter.append({
                        'id': key,
                        'href': key,
                        'titel': titel,
                        'nr': nr,
                        'modul': modul['titel'],
                        'modulpfad': rel,
                        'bereich': bereich['id'],
                        'gruppe': gruppe['titel'],
                        'sichtbar': modul_sichtbar and freigabe is None,
                        'nur_lehrkraft': freigabe == 'nur-lehrkraft',
                        'direktlink': True,  # seit Stufe 3 öffnet navi.js jeden Reiter aus der Adresse
                        'heimat': r.get('heimat'),
                        'lernziel': r.get('lernziel'),
                        'suchbegriffe': r.get('suchbegriffe', []),
                        'vorher': r.get('vorher'),
                        'kapitel': hauptweg.index(rel) + 1 if rel in hauptweg else None,
                    })
                    schluessel.add(key)

    for key, r in angaben.items():
        if key not in schluessel:
            fehler.append(f'Verwaiste Angabe (Reiter gibt es nicht): {key}')
        if r.get('vorher') and r['vorher'] not in schluessel:
            fehler.append(f'„vorher“ zeigt ins Leere: {key} → {r["vorher"]}')
        for pflicht in ('heimat', 'lernziel'):
            if not r.get(pflicht):
                fehler.append(f'Pflichtfeld „{pflicht}“ fehlt: {key}')
    for rel in hauptweg:
        if rel not in module_pfade:
            fehler.append(f'Hauptweg-Modul nicht gefunden: {rel}')

    # Stabile Reihenfolge: Hauptweg zuerst in Kapitelreihenfolge, sonst Reihenfolge von inhalt.json.
    reiter = sorted(reiter, key=lambda x: (0, x['kapitel'], x['nr']) if x['kapitel'] else (1, 0, 0))

    ausgabe = {
        '_hinweis': 'Automatisch erzeugt von tools/reiter.py. Nicht von Hand bearbeiten. Änderungen in data/reiter-redaktion.json.',
        'heimaten': heimaten,
        'hauptweg': hauptweg,
        'reiter': reiter,
    }
    return ausgabe, fehler, hinweise


def bericht(daten):
    r = daten['reiter']
    mit = [x for x in r if x['lernziel']]
    print(f'Reiter und Einzelseiten insgesamt: {len(r)}')
    print(f'Mit redaktionellen Angaben (Pilot): {len(mit)}')
    print(f'Für TN sichtbar: {sum(x["sichtbar"] for x in r)}')
    print(f'Ohne Direktlink: {sum(not x["direktlink"] for x in r)}')
    print('\nUnser Lehrbuch (Hauptweg):')
    for x in r:
        if x['kapitel']:
            zeichen = '' if x['sichtbar'] else '  [für TN ausgeblendet]'
            print(f'  {x["kapitel"]}.{x["nr"]}  {x["titel"]}{zeichen}')
    print('\nNach Themen (nur Pilot, nur sichtbar):')
    for key, label in daten['heimaten'].items():
        dort = [x for x in mit if x['heimat'] == key and x['sichtbar']]
        if dort:
            print(f'  {label}: ' + ' · '.join(x['titel'] for x in dort))


def main():
    daten, fehler, _ = bauen()
    if fehler:
        print('FEHLER – reiter.json wurde nicht geschrieben:')
        for f in fehler:
            print('  ' + f)
        sys.exit(1)
    text = json.dumps(daten, ensure_ascii=False, indent=1) + '\n'
    if '--pruefen' in sys.argv:
        alt = open(AUSGABE, encoding='utf-8').read() if os.path.exists(AUSGABE) else ''
        if alt != text:
            print('reiter.json ist nicht aktuell. Bitte tools/reiter.py ausführen.')
            sys.exit(1)
        print('reiter.json ist aktuell.')
        return
    with open(AUSGABE, 'w', encoding='utf-8') as f:
        f.write(text)
    bericht(daten)


if __name__ == '__main__':
    main()
