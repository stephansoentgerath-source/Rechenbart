# Arbeitsaufträge „Die Insel von Kapitän Rechenbart“

Stand 15.11.2026 (abends). Diese Datei ist für die Arbeit mit einem einfachen Modell gedacht:
einen Auftrag nennen („Mach Auftrag A3 aus AUFTRAEGE.md“), fertig.

## Regeln für jeden Auftrag

- Vor dem Start `git status` und `git log -3` ansehen. Nur das ändern, was der Auftrag nennt.
- Spieltexte: kurze Sätze, höchstens 10 Wörter, Wörter der 2. Klasse, kein Tadel. Zeitdruck nur über die Sanduhr (siehe unten).
- Inhalte (Wörter, Sätze, Fragen) gehören in `inhalte.js`, Spiellogik in `index.html`.
- Nach der Änderung: Skript auf Syntax prüfen (`node --check`), die betroffene Szene im Browser
  einmal durchspielen, dann committen und pushen. Ehrlich sagen, was nicht getestet wurde.
- Wenn etwas unklar ist oder mehr als die genannten Stellen betroffen wären: nachfragen, nicht raten.
- Animation in Aufgaben: zu Beginn kurz erlaubt (z. B. Krümel flattert beim Ansagen), während des
  Überlegens Ruhe, Reaktion nur nach einer Eingabe (`reagiere('jubel','hops')` bzw.
  `reagiere('oh','seufz')`, Moritz im Fenster über `MINI()`). Szenen dürfen leben, im offenen
  Aufgabenfenster steht die Szene still (Klasse `aufgabe` am `body`). Neue Tiere in `TIER`/`LEBEN`.
- Stimmen: Gesprochene Sätze liegen als MP3 in `stimmen/<figur>/`. Wer Texte ändert oder neue Sätze
  einbaut (auch Lernpakete, A1), ruft danach `python3 tools/stimmen.py sammeln` und
  `python3 tools/stimmen.py erzeugen` auf (nur in der Cloud-Umgebung „rechenbart“, dort steckt der
  OpenAI-Schlüssel; der Schlüssel läuft am 15.12.2026 ab). Stimmen und Regie je Figur stehen oben in
  `tools/stimmen.py`. Fehlliste aus dem Elternbereich nachtragen: `tools/stimmen.py nachtrag datei.txt`.
  Der Kapitän ist vorerst KI (Stephans Aufnahmen liegen bewusst NICHT im öffentlichen Repo).
- Zeitdruck ist gewollt und wird trainiert, aber nur über die Sanduhr (`SAND()`, Stufen im
  Elternbereich). Ablaufen ohne Tadel: Krümel sagt „Macht nichts!“.

## Aufbau in Kürze

- `index.html`: Spiel. `SC` = Szenenbilder (SVG), `ACT` = Aktionen der Plätze, `OFFEN` = Freischaltung,
  `KAPITEL` = Inselkarte, `UHRK` = Uhr-Stufen, `genP/genM/zeT/zeM` = Rechenaufgaben,
  `geschichten()` = Rechengeschichten aus `inhalte.js` einsetzen, `TIER`/`LEBEN` = Tiere in den Szenen,
  `UEB` = einmalige Überraschung je Szene, `reagiere()`/`MINI()` = Moritz im Aufgabenfenster.
- `PRUEFLISTE.md`: Liste zum Abhaken auf dem Fire Tablet.
- `inhalte.js`: `LERNWOERTER` (Listen) und `PAKETE` (Lernpakete). Das erste Paket ist die Grundlage,
  weitere überschreiben nur einzelne Schlüssel. Anleitung steht oben in der Datei.
- Jedes Kapitel hat sechs Plätze: Rechnen, Sprache, Lesen und Handeln, Uhr, Wissens-Kiste, Belohnungsspiel.

---

## A – Einfache Aufträge (Fleißarbeit, einfaches Modell)

**A1 Neues Lernpaket aus Arbeitsblättern.** Stephan schickt Fotos. In `inhalte.js` ein neues Objekt an
`PAKETE` anhängen (`id` = Jahr-Monat, `name` = Monat und Themen). Nur die Schlüssel eintragen, die sich
ändern. Lernwörter nur anfassen, wenn Stephan es ausdrücklich sagt (dann neue Liste in `LERNWOERTER`).

**A2 Rechnen in Akt 2 einstellbar machen.** `genP`/`genM` (Suche nach `const genP=`) erzeugen Aufgaben
mit Zehnerübergang (47 + 25). Im Elternbereich einen Schalter „Rechnen: leicht / mittel / schwer“ ergänzen
(Spielstand `S.rechnen`, Vorgabe „mittel“). leicht = nur Zehnerzahlen dazu/weg (`zeT`/`zeM`),
mittel = ohne Übergang, schwer = wie jetzt. **Wichtig:** Die Rechengeschichten der Kapitel 5–7 holen
ihre Zahlen über `geschichten()` (direkt über `async function rechnen`). Die Stufe muss dort mit
ausgewertet werden, sonst wirkt der Schalter dort nicht. Das Rechen-Duell (`duelTask`) bleibt unverändert.

~~**A3 Rechengeschichten in die Pakete verlagern.**~~ **Erledigt 15.11.2026.** Die Geschichten von
`see_r`, `affen_r`, `riff_r` stehen als `rechnen5` bis `rechnen7` in `inhalte.js`. `nebel_r` ist ein
reines Rechen-Duell ohne Geschichten, ein `rechnen8` gibt es deshalb nicht.

**A4 Wissens-Kisten auffüllen.** Jede Kiste (`wissen` 1–9 in `inhalte.js`) auf mindestens 8 Fragen
bringen, damit eine „Neue Reise“ andere Fragen zeigt. Je Frage drei Antworten, eine richtig,
die falschen nicht albern. Themen stehen im vorhandenen Bestand.

**A5 Witze und Moki-Sprüche auffüllen.** `witze` und `moki` in `inhalte.js` auf je 15 Einträge.
Humor wie Bugs Bunny: frech, nie gemein.

**A6 Krümel hilft lesen begrenzen.** Der Hilfe-Knopf liest sofort alles vor. Ändern: Der Knopf erscheint
erst nach 8 Sekunden oder nach dem ersten Fehlversuch. Ab Kapitel 5 erst nach dem Fehlversuch.

**A7 Dublonen-Flut begrenzen.** Belohnungsspiele lassen sich beliebig oft für Dublonen wiederholen.
Ändern: je Spiel höchstens dreimal am Tag Dublonen, danach „nur zum Spaß“ (Datum in `S` merken).

**A8 Knopf „Als App installieren“.** Im Elternbereich. Nutzt `beforeinstallprompt`; wenn der Browser
(Silk) das nicht anbietet, die Schritte „Menü → Zum Startbildschirm hinzufügen“ als Text zeigen.

**A9 Film-Galerie.** Im Hauptmenü „Kino“: alle schon gesehenen Filme, Gags und die Bilder
`titel.jpg`, `akt1.jpg`, `akt2.jpg`, `schluss.jpg` noch einmal ansehen.

**A10 Schalter „Animationen: viel / wenig“.** Nur nötig, wenn die Prüfliste auf dem Fire Tablet Ruckeln
zeigt. Im Elternbereich (Spielstand `S.anim`, Vorgabe „viel“). „wenig“ = keine Tiere (`LEBEN`), kein
Blinzeln/Zwinkern/Wedeln (Klassen `aug`, `zwink`, `schmunzel`, `wedel`, `fluegel`); am einfachsten über
eine Klasse am `body` und CSS `animation:none`. Bleiben sollen: Reaktionen nach Eingaben (`reagiere`,
Duell), Überraschungen (`UEB`), Belohnungsspiele.

## B – Mittlere Aufträge (einfaches Modell, danach Stichprobe)

**B1 Uhr-Anstieg glätten.** Stufen jetzt: 1 volle Stunde lesen, 2 stellen, 3 gemischt, 4 halb,
6 und 7 voll + halb, 8 Viertel nach, 9 Viertel nach/vor, 5 (Schatzhöhle) alles. Moritz kann die Uhr
noch nicht. Vorschlag: Kapitel 5 und 6 bei voll + halb lassen, Kapitel 7 „halb“ auch stellen lassen,
Viertel erst ab Kapitel 9. In `UHRK` umstellen und im Elternbereich „Uhr: eine Stufe leichter“ anbieten.

**B2 Selbst lesen ab Kapitel 3.** Die Einweisung (`brief`) wird immer vorgelesen. Ab Kapitel 3 zuerst
ohne Stimme zeigen, danach eine Verständnisfrage mit zwei Bildern („Was sollst du tun?“). Vorlesen
bleibt über den Krümel-Knopf möglich. Texte dafür auf höchstens drei kurze Sätze kürzen.

**B3 Keksfelsen im Finale.** `akt2.jpg` zeigt die Insel mit dem angebissenen Keksfelsen. Im Szenenbild
`hoehle` den Eingang als Keksfelsen zeichnen und im Text nennen („Der Schatz liegt im Keksfelsen!“).

**B4 Spielfiguren ans Titelbild annähern.** Moritz (Locken, blaue Steppjacke, rotes Halstuch, grüne
Schuhe) und Kapitän (weißer Bart mit Kekskrümeln, Hut mit Plus und Minus) in den SVG-Funktionen
nachziehen. Moki ist schon nach dem echten Stofftier gezeichnet.

~~**B5 Fire-Tablet-Prüfliste.**~~ **Erledigt 15.11.2026:** `PRUEFLISTE.md`. Ergebnisse von Stephan
abwarten; daraus ergeben sich ggf. A10 und ein Auftrag „Offline-Betrieb“ (Service Worker fehlt bisher).

## C – Für Fable (Neues, Dramaturgie)

**C1 Akt 3: Kapitel 9 bis 11.** Je sechs Plätze, eigene Szenenbilder, neue Belohnungsspiele.
- 9 Schildkröten-Strand: Umwelt, Müll trennen, Schildkröten zum Meer bringen (greift `akt2.jpg` auf).
- 10 Dschungel-Tempel: Rätsel, Wegweiser, Anleitungen lesen, Geheimtür.
- 11 Piratenfest: Kochen nach Rezept, Musik (Rhythmus nachtippen), Uhr „Wann beginnt das Fest?“.
Danach `OFFEN` umhängen: Schatzhöhle erst nach Kapitel 11.

**C2 Rechen-Fechten.** Säbel-Duell als Kopfrechnen: richtige Antwort = Parade. Zeitdruck nur als
Sanduhr-Option über `SAND()`, Reaktionen nach den Regeln oben.

**C3 Zweite Reise mit eigener Geschichte.** Bei „Reise 2“ nicht nur neue Aufgaben, sondern ein neuer
Anlass (z. B. die Möwe hat die Karte geklaut) und zwei neue Filme.

## Bekannte Lücken

- Alles ist nur am Computer getestet (Chrome, automatischer Durchlauf), nicht auf dem Fire Tablet.
- Geräusche und Musik hat noch niemand außer Stephan und Moritz gehört.
- Kapitel 9 bis 11 fehlen (auf der Inselkarte als „bald“); nach Kapitel 8 geht es direkt in die Schatzhöhle.
- Kein Offline-Betrieb: ohne WLAN startet das Spiel vermutlich nicht (kein Service Worker).
