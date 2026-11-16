#!/usr/bin/env python3
"""Stimmen für „Die Insel von Kapitän Rechenbart“.

  python3 tools/stimmen.py sammeln          # Sätze aus index.html + inhalte.js -> stimmen/texte.json
  python3 tools/stimmen.py erzeugen         # fehlende MP3s per OpenAI erzeugen, stimmen/stimmen.js schreiben
  python3 tools/stimmen.py erzeugen --nur kruemel,mixa   # nur bestimmte Figuren
  python3 tools/stimmen.py nachtrag liste.txt            # Zeilen "figur|Satz" (Fehlliste aus dem Elternbereich) ergänzen

Der Schlüssel jeder Aufnahme ist FNV-1a über "figur|text" (wie stimmKey() in index.html).
Der OpenAI-Schlüssel wird vom Netzwerk-Proxy der Cloud-Umgebung eingesetzt (Header-Platzhalter).
Benötigt: node (zum Lesen von inhalte.js), ffmpeg.
"""
import json, os, re, struct, subprocess, sys, urllib.request, concurrent.futures as cf, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'stimmen'
KIND = ('Das Publikum ist ein siebenjähriges Kind, also deutlich und nicht zu schnell. '
        'Sprich reines Hochdeutsch ohne englischen Akzent.')
# Figur -> (OpenAI-Stimme, Regie)
FIG = {
 'kapitaen': ('onyx', 'Gutmütiger alter Piratenkapitän mit tiefer, rauer Stimme. Warm, lacht gern („Har har!“), ein bisschen brummig und vergesslich.'),
 'kruemel': ('coral', 'Frecher, vorlauter Papagei mit großer Klappe. Hohe, krächzende Stimme, schnippisch und frech wie ein Comic-Hase, immer ein Grinsen in der Stimme, betont Wörter übertrieben, macht sich gern ein bisschen lustig – aber nie gemein. „Kräh!“ wird gekrächzt.'),
 'mixa': ('shimmer', 'Freundliche, etwas schrullige Hexe. Kichert gern, geheimnisvoll, aber nie gruselig.'),
 'schlotter': ('echo', 'Ängstliches, eher lustiges Gespenst und Kapitän eines Geisterschiffs. Hohl und ein bisschen zittrig, übertrieben dramatisch.'),
 'olga': ('sage', 'Herzliche, resolute Wirtin einer Hafenkneipe. Warm, mütterlich, geschäftstüchtig, lacht gern.'),
 'hobel': ('ash', 'Gemütlicher Schiffszimmermann. Bodenständig, freundlich, ein bisschen langsam und bedächtig.'),
 'strahl': ('ballad', 'Alter, freundlicher Leuchtturmwärter. Ruhig, ein wenig schrullig, erzählt gern.'),
 'koko': ('alloy', 'Fröhliche, etwas eitle Affenkönigin. Verspielt, majestätisch, sagt gern „Uh uh ah ah!“.'),
 'schildi': ('sage', 'Sehr alte, weise und liebe Schildkröten-Oma. Langsam, gemütlich, sagt gern „Blubb“.'),
 'moki': ('verse', 'Kleiner, frecher Stoffaffe. Quirlig, lustig, sagt gern „Uh uh ah ah!“.'),
 'moritz': ('fable', 'Warmer, spannender Erzähler eines Kinder-Abenteuerfilms. Lebendig, nicht zu schnell.'),
 'mama': ('alloy', 'Warmherzige, geduldige Mama, die mit ihrem Sohn Hausaufgaben übt. Ruhig, ermutigend, lächelnd, nie streng.'),
 'lehrerin': ('nova', 'Frau Pranger, freundliche Grundschullehrerin von Moritz. Sehr klare, saubere Aussprache, ruhig und langsam. Einzelne Wörter deutlich mit kurzer Pause.'),
}

def text_norm(t):
    t = re.sub(r'<[^>]+>', ' ', str(t))
    return re.sub(r'\s+', ' ', t).strip()

def key(who, text):
    t = (who + '|' + text_norm(text)).encode('utf-16-le')
    h = 0x811c9dc5
    for (c,) in struct.iter_unpack('<H', t):
        h ^= c; h = (h * 16777619) & 0xffffffff
    return f'{who}/{h:08x}'

# ---------------- Sammeln ----------------
def calls(src, name):
    """Liefert die Argument-Strings aller Aufrufe name(...), mit Klammer- und Anführungszeichen-Logik."""
    for m in re.finditer(r'(?<![\w.$])' + name + r'\(', src):
        i = m.end(); depth = 1; q = None; j = i
        while j < len(src) and depth:
            c = src[j]
            if q:
                if c == '\\': j += 1
                elif c == q: q = None
            elif c in '\'"`': q = c
            elif c in '([{': depth += 1
            elif c in ')]}': depth -= 1
            j += 1
        yield src[i:j-1]

def split_args(a):
    out = []; depth = 0; q = None; cur = ''
    i = 0
    while i < len(a):
        c = a[i]
        if q:
            cur += c
            if c == '\\': cur += a[i+1]; i += 1
            elif c == q: q = None
        elif c in '\'"`': q = c; cur += c
        elif c in '([{': depth += 1; cur += c
        elif c in ')]}': depth -= 1; cur += c
        elif c == ',' and depth == 0: out.append(cur.strip()); cur = ''
        else: cur += c
        i += 1
    if cur.strip(): out.append(cur.strip())
    return out

LIT = re.compile(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"|`((?:[^`\\$]|\\.)*)`")
def literals(expr):
    """Alle einfachen String-Literale (Template-Strings nur ohne ${})."""
    res = []
    for m in LIT.finditer(expr):
        v = next(g for g in m.groups() if g is not None)
        v = v.replace("\\'", "'").replace('\\"', '"')
        if re.search(r'[A-Za-zÄÖÜäöüß]{2}', v) and ' ' in v or re.search(r'[!?.]$', v or ''):
            res.append(v)
    return res

def is_lit(expr):
    m = LIT.fullmatch(expr.strip()); return m is not None

def lit_val(expr):
    m = LIT.fullmatch(expr.strip()); return next(g for g in m.groups() if g is not None) if m else None

def sammeln():
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    src = '\n'.join(re.findall(r'<script>(.*?)</script>', html, re.S))
    inh = json.loads(subprocess.run(['node', '-e', '''
      const fs=require("fs");eval(fs.readFileSync(process.argv[1],"utf8")+";globalThis.L=LERNWOERTER;globalThis.P=PAKETE");
      console.log(JSON.stringify({L,P}))''', str(ROOT / 'inhalte.js')], capture_output=True, text=True, check=True).stdout)
    S = set(); offen = []
    add = lambda who, t: S.add((who, text_norm(t))) if t and text_norm(t) else None
    figuren = set(FIG)
    # SC: Szene -> npc / wer
    npc = dict(re.findall(r"(\w+):\{[^{}]*?npc:'(\w+)'", src))
    wer = dict(re.findall(r"(\w+):\{[^{}]*?wer:'(\w+)'", src))
    for name in ('talk', 'note'):
        for a in calls(src, name):
            args = split_args(a)
            if len(args) < 2: continue
            who = lit_val(args[0])
            if who not in figuren: offen.append(name + '(' + a[:80]); continue
            ls = literals(args[1])
            if not ls: offen.append(name + '(' + a[:80])
            for t in ls: add(who, t)
    for a in calls(src, 'brief'):
        for t in literals(split_args(a)[0]): add('kruemel', t + ' Alles klar, Käpt’n?')
    for a in calls(src, 'briefL'):
        for t in literals(split_args(a)[0]): add('lehrerin', t + ' Alles klar, Moritz?')
    for a in calls(src, 'speak'):
        args = split_args(a)
        if len(args) >= 2 and lit_val(args[1]) in figuren:
            for t in literals(args[0]): add(lit_val(args[1]), t)
    for a in calls(src, 'sayWord'):
        for t in literals(split_args(a)[0]): add('lehrerin', t)
    for a in calls(src, 'orden'):
        g = split_args(a)
        if len(g) >= 5 and lit_val(g[0]) in wer:
            w = wer[lit_val(g[0])]; add(w, lit_val(g[1])); add(w, lit_val(g[2])); add('kruemel', lit_val(g[4]))
            add(w, 'Schön, dich zu sehen, Moritz! Du kannst hier alles nochmal üben.')
    for a in calls(src, 'gate'):
        g = split_args(a)
        if len(g) >= 5 and lit_val(g[0]) in npc:
            n = npc[lit_val(g[0])]; add(n, lit_val(g[1])); add(n, lit_val(g[2])); add('kruemel', lit_val(g[4]))
            add(n, 'Schön, dich zu sehen, Moritz! Du kannst hier alles nochmal üben.')
    for w, t in re.findall(r"\[\s*'(" + '|'.join(figuren) + r")'\s*,\s*'((?:[^'\\]|\\.)*)'\s*\]", src): add(w, t)
    for w, f in re.findall(r"w:'(\w+)',f:'([^']*)'", src): add(w, f + ' Schau auf die Uhr!')
    for arr in ('WRONG', 'RIGHT'):
        m = re.search(r'const ' + arr + r'=\[(.*?)\];', src)
        if m: [add('kruemel', t) for t in literals(m.group(1))]
    for t in re.findall(r"film\('((?:[^'\\]|\\.)*)'", src): add('moritz', t)
    for t in re.findall(r"\n \w+:\['((?:[^'\\]|\\.)*)',[\d.]+,", src): add('kruemel', t)  # Überraschungen (UEB)
    m = re.search(r'const MAMA_TIPPS=\{(.*?)\};', src, re.S)  # Mamas Merk-Tipps
    if m: [add('mama', x) for x in re.findall(r":'((?:[^'\\]|\\.)*)'", m.group(1))]
    m = re.search(r'const GEB_GRUSS=\{(.*?)\};', src, re.S)  # Geburtstagsgrüße
    if m: [add('kruemel', x) for x in re.findall(r":'((?:[^'\\]|\\.)*)'", m.group(1))]
    # Inhalte: Lernwörter und Geschichten (Lehrerin)
    for L in inh['L']:
        for w in L['woerter']:
            add('lehrerin', w[1])
            if w[2]: add('lehrerin', w[2] + ' ' + w[1])
        for g in L.get('geschichten', []):
            for p in g['p']: add('lehrerin', p)
    for P in inh['P']:
        for sc, liste in (P.get('befehle') or {}).items():
            for b in liste: add('lehrerin', b[0])
        for k in (P.get('knopf') or []): add('lehrerin', k[0])
        for t in (P.get('witze') or []): add('kruemel', t)
        for f, a in (P.get('kapitaenWitze') or []): add('kapitaen', f); add('kapitaen', a)
        for t in (P.get('moki') or []): add('moki', t)
    texte = sorted({'who': w, 'text': t} for w, t in S) if False else [{'who': w, 'text': t} for w, t in sorted(S)]
    (OUT).mkdir(exist_ok=True)
    (OUT / 'texte.json').write_text(json.dumps(texte, ensure_ascii=False, indent=0), encoding='utf-8')
    print(len(texte), 'Sätze gesammelt,', sum(len(x['text']) for x in texte), 'Zeichen')
    from collections import Counter
    print(dict(Counter(x['who'] for x in texte)))
    print(len(offen), 'Aufrufe ohne festen Text (z. B. mit Zahlen) – die spricht die Gerätestimme')

# ---------------- Erzeugen ----------------
def tts(who, text):
    stimme, regie = FIG[who]
    body = {'model': 'gpt-4o-mini-tts', 'voice': stimme, 'input': text, 'response_format': 'mp3',
            'instructions': regie + ' ' + KIND}
    req = urllib.request.Request('https://api.openai.com/v1/audio/speech', data=json.dumps(body).encode(),
                                 headers={'Content-Type': 'application/json', 'Authorization': 'Bearer proxy-injected'})
    for versuch in range(3):
        try:
            with urllib.request.urlopen(req, timeout=180) as r: return r.read()
        except Exception as e:
            fehler = e
    raise fehler

def eins(e):
    k = key(e['who'], e['text']); ziel = OUT / (k + '.mp3')
    if ziel.exists(): return k, 'da'
    ziel.parent.mkdir(parents=True, exist_ok=True)
    roh = ziel.with_suffix('.roh.mp3'); roh.write_bytes(tts(e['who'], e['text']))
    tempo = ',atempo=0.95' if e['who'] == 'lehrerin' and len(e['text']) > 60 else ''
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(roh), '-ac', '1', '-ar', '24000',
                    '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11' + tempo, '-b:a', '48k', str(ziel)], check=True)
    roh.unlink(); return k, 'neu'

def manifest():
    keys = sorted(str(p.relative_to(OUT))[:-4] for p in OUT.glob('*/*.mp3'))
    (OUT / 'stimmen.js').write_text('/* automatisch erzeugt von tools/stimmen.py – nicht von Hand ändern */\nconst STIMMEN=' +
                                    json.dumps(keys) + ';\n', encoding='utf-8')
    return len(keys)

def erzeugen(nur=None):
    texte = json.loads((OUT / 'texte.json').read_text(encoding='utf-8'))
    if nur: texte = [e for e in texte if e['who'] in nur]
    neu = fehl = 0
    with cf.ThreadPoolExecutor(6) as ex:
        for f in cf.as_completed([ex.submit(eins, e) for e in texte]):
            try:
                _, st = f.result(); neu += st == 'neu'
            except Exception as e:
                fehl += 1; print('Fehler:', e)
    if not nur:  # Aufnahmen, deren Satz es nicht mehr gibt, wegräumen
        alle = json.loads((OUT / 'texte.json').read_text(encoding='utf-8'))
        gueltig = {key(e['who'], e['text']) for e in alle}
        weg = [f for f in OUT.glob('*/*.mp3') if str(f.relative_to(OUT))[:-4] not in gueltig]
        for f in weg: f.unlink()
        if weg: print(len(weg), 'veraltete Aufnahmen entfernt')
    print(neu, 'neu erzeugt,', fehl, 'Fehler,', manifest(), 'Aufnahmen insgesamt')

def nachtrag(datei):
    texte = json.loads((OUT / 'texte.json').read_text(encoding='utf-8'))
    da = {(e['who'], e['text']) for e in texte}
    for z in pathlib.Path(datei).read_text(encoding='utf-8').splitlines():
        if '|' in z:
            w, t = z.split('|', 1)
            if w in FIG and (w, text_norm(t)) not in da: texte.append({'who': w, 'text': text_norm(t)}); da.add((w, text_norm(t)))
    (OUT / 'texte.json').write_text(json.dumps(texte, ensure_ascii=False, indent=0), encoding='utf-8')
    print(len(texte), 'Sätze in texte.json – jetzt "erzeugen" aufrufen')

if __name__ == '__main__':
    a = sys.argv[1:] or ['hilfe']
    if a[0] == 'sammeln': sammeln()
    elif a[0] == 'erzeugen': erzeugen(set(a[2].split(',')) if len(a) > 2 and a[1] == '--nur' else None)
    elif a[0] == 'nachtrag': nachtrag(a[1])
    elif a[0] == 'manifest': print(manifest())
    else: print(__doc__)
