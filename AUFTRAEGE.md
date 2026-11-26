# Arbeitsaufträge „Die Insel von Kapitän Rechenbart“

Stand 26.11.2026. Diese Datei ist für die Arbeit mit einem einfachen Modell gedacht:
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

## Lernprinzip Lernwörter (Vorgabe der Schule, Stand 11/2026)

- Lernwörter sollen **nachhaltig** sitzen und **flexibel abrufbar** sein, nicht nur für einen Test.
- Einmal Buchstabe für Buchstabe abschreiben reicht nicht: **mehrmals lesen, merken, mehrmals auswendig schreiben,
  kontrollieren.**
- Abfragen werden später auch **unangekündigt** geschrieben; geübt wird alles aus Klasse 2, nicht nur das neueste Blatt.
- Umsetzung im Spiel: Lese-Diktat (lesen), Lernwörter üben (merken, abdecken, schreiben), Test-Diktat (auswendig
  schreiben + selbst kontrollieren), **Wörter-Kartei** (`kartei()`, `heuteDran()`: 5 Fächer, Wiederholung nach
  1/3/7/14 Tagen, max. 10 Wörter am Tag, Fehler zurück in Fach 1) und **Überraschungs-Wort** (`ueberraschungsWort()`
  nach jeder 3. Abenteuer-Aufgabe). Neue Lern-Übungen sollen `kartei()` mit dem Ergebnis aufrufen.

## Aufbau in Kürze

- `index.html`: Spiel. `SC` = Szenenbilder (SVG), `ACT` = Aktionen der Plätze, `OFFEN` = Freischaltung,
  `KAPITEL` = Inselkarte, `UHRK` = Uhr-Stufen, `genP/genM/zeT/zeM` = Rechenaufgaben,
  `geschichten()` = Rechengeschichten aus `inhalte.js` einsetzen, `TIER`/`LEBEN` = Tiere in den Szenen,
  `UEB` = einmalige Überraschung je Szene, `reagiere()`/`MINI()` = Moritz im Aufgabenfenster.
  `zuhause()` = Hausaufgaben-Tisch (Startbildschirm „Hausaufgaben“: Heft = Test-Diktat, Laptop = Lernwörter üben,
  Regal = Lese-Diktat, Wanduhr zeigt die echte Zeit); Lern-Übungen enden mit `nachLernen()`.
- `PRUEFLISTE.md`: Liste zum Abhaken auf dem Fire Tablet.
- `inhalte.js`: `LERNWOERTER` (Listen) und `PAKETE` (Lernpakete). Das erste Paket ist die Grundlage,
  weitere überschreiben nur einzelne Schlüssel. Anleitung steht oben in der Datei.
- Jedes Kapitel hat sechs Plätze: Rechnen, Sprache, Lesen und Handeln, Uhr, Wissens-Kiste, Belohnungsspiel.

---

## A – Einfache Aufträge (Fleißarbeit, einfaches Modell)

**A1 Neues Lernpaket aus Arbeitsblättern.** Stephan schickt Fotos. In `inhalte.js` ein neues Objekt an
`PAKETE` anhängen (`id` = Jahr-Monat, `name` = Monat und Themen). Nur die Schlüssel eintragen, die sich
ändern. Lernwörter: neue Blätter der Klasse kommen über die Sonntags-Prüfung (siehe „Stand der Klasse“); sonst nur auf Stephans Wort.

~~**A2 Rechnen einstellbar machen.**~~ **Erledigt 16.11.2026.** Elternbereich „Rechnen“ (`S.rechnen`) gilt im
ganzen Spiel: leicht = Zehnerzahlen dazu/weg (46 + 30), **mittel = zweistellig ohne Übergang (Vorgabe)**, schwer =
mit Übergang. Alle Rechenaufgaben holen ihre Zahlen über `rGen(op, leichter)` (`leichter` = eine Stufe darunter, für
Abwechslung); Duelle über `duelTask` (1 = Zehnerzahlen, 2 = Stufe darunter, 3 = Stufe). Neue Rechenaufgaben bitte
immer über `rGen()` bauen, keine festen Zahlenbereiche.

**A3 Rechengeschichten in die Pakete verlagern.**~~ **Erledigt 15.11.2026.** Die Geschichten von
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

**A11 Nomen finden mit Fallen.** Wie das Klassenblatt „Finde die 6 Nomen“: Beim Nomen-Angeln (Werft) auch
Wörter anbieten, die keine Nomen sind, aber so aussehen (Großbuchstaben-Schreibweise wie BREIT, ALT, BÖSE, BILLIG,
ARTIG, BUNT, DRECKIG, DOOF, DROLLIG, EITEL, DICK, ECHT). Nur Inhalte: `keinNomen` in `inhalte.js` ergänzen.

**A12 Sätze würfeln (Schulsätze).** Für Geister-Schrift und Zauberbuch Sätze aus dem Schulalltag ergänzen, alles klein
geschrieben, Nomen und Satzanfang müssen groß (Beispiel aus der Klasse: „heute habe ich meinen ball mitgebracht.“,
„darf ich mal deine schere ausleihen?“, „ich kann meinen anspitzer nicht finden.“). Nur Inhalte in `inhalte.js`
(`zauber`, `geisterschrift`), danach Stimmen erzeugen.

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

**B6 Zucker-Check bei Olga.** Passend zum Sachunterricht („Gesunde Ernährung – Der Zucker-Check“): Moritz schätzt,
wie viele Zuckerwürfel in Limo, Apfel, Keks, Saft, Joghurt stecken (drei Antworten), Olga zeigt die Würfel. Werte
nachschlagen und in `inhalte.js` ablegen, keine erfundenen Zahlen.

**B7 Gefühle.** Passend zum Gefühlelied im Morgenkreis: „Wie fühlt sich Schlotter jetzt?“ – vier Gesichter (fröhlich,
traurig, ängstlich, wütend) zum Antippen, kurze Situation dazu. Neue Gesichter als SVG, Situationen in `inhalte.js`.

## C – Für Fable (Neues, Dramaturgie)

~~**C1 Akt 3: Kapitel 9 bis 11.**~~ **Erledigt 26.11.2026** (siehe „Akt 3“ unten). Ursprünglicher Plan:
- 9 Schildkröten-Strand: Umwelt, Müll trennen, Schildkröten zum Meer bringen (greift `akt2.jpg` auf).
- 10 Dschungel-Tempel: Rätsel, Wegweiser, Anleitungen lesen, Geheimtür.
- 11 Piratenfest: Kochen nach Rezept, Musik (Rhythmus nachtippen), Uhr „Wann beginnt das Fest?“.
Danach `OFFEN` umhängen: Schatzhöhle erst nach Kapitel 11.

**C2 Rechen-Fechten.** Säbel-Duell als Kopfrechnen: richtige Antwort = Parade. Zeitdruck nur als
Sanduhr-Option über `SAND()`, Reaktionen nach den Regeln oben.

**C3 Zweite Reise mit eigener Geschichte.** Bei „Reise 2“ nicht nur neue Aufgaben, sondern ein neuer
Anlass (z. B. die Möwe hat die Karte geklaut) und zwei neue Filme.

**C4 Kiosk mit echtem Geld (Piratenfest, Kapitel 11).** Wie der „Kinokiosk“ der Klasse: Kekse und Limo verkaufen,
mit Euro-Münzen und -Scheinen passend bezahlen und Wechselgeld geben. Erst Beträge bis 10 €, dann bis 20 €.
Geld kommt im Spiel bisher gar nicht vor – größte inhaltliche Lücke.

**C5 Bausteine für Kapitel 9 und 10 (in C1 einplanen).**
- Kapitel 9 Schildkröten-Strand: **Verdopplungs-Käfer/-Eier** – Dinge liegen immer im Doppelpack („4 und noch mal 4“),
  wie das Klassenblatt „Mathemonsterchens Verdopplungsaufgaben“ (Zahlenraum bis 20).
- Kapitel 10 Dschungel-Tempel: **Zehnerzahlen-Schloss** an der Geheimtür (30 + 44, 70 − 20, wie die Klassenblätter
  „Zehnerzahlen plus und minus gemischt“) und eine **Quatschsatz-Tür**: nur der richtige Satz öffnet sie.

**C2 ergänzt:** Rechen-Fechten als „Flink wie die Mäuse“ – Kopfrechnen bis 20 mit und ohne Zehnerübergang, die Klasse
übt das ebenfalls mit Zeitvorgabe; Stufe wählbar, Sanduhr über `SAND()`.

## Akt 3 (Kapitel 9–11), Stand 26.11.2026

Vorbild: Arbeitsheft-Seiten „Lies und male“, „Verbinde“ (Satzhälften, Silben), „Kreuze an“ (Bild–Satz, richtig/falsch).
Jedes Kapitel: Rechnen, Sprache, Lesen und Handeln, Uhr, **Wiederholungs-Truhe** (statt Wissens-Kiste), Belohnungsspiel, Orden.

| Kapitel | Rechnen | Sprache | Lesen und Handeln | Uhr | Bonus |
|---|---|---|---|---|---|
| 9 Schildkröten-Strand (Oma Schildi) | Verdoppeln + Einmaleins 2er/10er mit Punktefeld | Silben verbinden (Bilder) | Lies und male (Farben = Lernwörter Blatt 3) | großen Zeiger stellen (voll, halb, Viertel) | Babys zum Meer bringen |
| 10 Dschungel-Tempel (Tukan Tuki, neue Figur) | 5er-Reihe, gemischt, Tauschaufgaben | Satzhälften verbinden | Kreuze an: welcher Satz passt zum Bild | 5-Minuten-Schritte („20 nach 3“) | Tempel-Memory |
| 11 Piratenfest (Olga, Kapitän) | Einmaleins gemischt + Einmaleins-Duell gegen den Kapitän | Richtig oder falsch (Fest-Zeitung) | Rezept lesen und kochen (Mengen zählen) | Zeitspannen („Wann ist es zu Ende?“) | Trommel-Echo |

- **Einmaleins:** nur Kernreihen 1·2, 1·5, 1·10 und Verdoppeln. Bild-Hilfe: Punktefeld `feld(a,b)`; Fehler-Hilfe: erst Punktefeld,
  dann „Zähle in 5er-Schritten“. `askNumber(…, op '·', …, bild)` und `duel('mal', wer)` können Mal-Aufgaben.
  Weitere Reihen (3, 4 …) erst, wenn die Klasse so weit ist: `malListe(key, reihen, …)` nimmt beliebige Reihen.
- **Wiederholungs-Truhe** (`wiederholung(kap)`): sechs gemischte Aufgaben aus allen früheren Kapiteln (Plus, Minus, Artikel,
  Lernwort-Lücke, Uhr, Gegenteil, Wissen, Nomen, Verben, ab Kapitel 10 auch Einmaleins) und **immer ein Lernwort-Diktat mit Kartei**.
- **Inhalte** in `inhalte.js`: `mal` (Einmaleins-Geschichten), `silben`, `satzhaelften`, `bildsaetze` (Reihenfolge gehört zur Zeichnung!),
  `richtigFalsch`, `malen`, `rezepte`. Neue Einträge funktionieren ohne Code-Änderung, außer neue Bilder bei `bildsaetze`/`malen`.
- Schatzhöhle ist erst nach Kapitel 11 offen (wer sie schon begonnen hat, behält den Zugang).

## Stand der Klasse (Lernlandkarte, abgerufen 16.11.2026; Link bei Stephan, nicht ins Repo)

Wird **jeden Sonntag um 6:47 Uhr** automatisch geprüft (geplante Aufgabe „Rechenbart: Lernlandkarte wöchentlich
prüfen“, Umgebung „rechenbart“), damit neue Lernwörter **bis 9:30 Uhr im Spiel** sind – sonntagvormittags wird geübt.
Neue Lernwörter kommen als **neues Blatt** in die bestehende Liste (erscheinen so sofort in Test-Diktat und Training),
mit Lückenfüllern, Geschichte und Stimmen; fehlende Mama-Merk-Tipps für neue Lücken-Arten werden in `MAMA_TIPPS`
(index.html) ergänzt. Danach automatischer Test und direkt nach `main`. Bei Unsicherheit
(PDF unlesbar, Artikel unklar, Test rot) nur auf den Branch `lernwoerter-neu` – Stephan bekommt eine Push-Nachricht.
Erinnerung zum Verlängern des OpenAI-Schlüssels: 8.12.2026 (geplante Aufgabe).

- Deutsch: Lernwörter 1–3 (im Spiel vollständig), Nomen und Satzanfänge groß, Nomen finden, Quatschsätze.
- Mathe: Zahlenraum bis 100 mit Zehnerzahlen (ZE ± Z, Z ± Z) – laut Stephan sitzt das sicher; Kopfrechnen bis 20 mit
  und ohne Übergang; Verdoppeln bis 20; „Flink wie die Mäuse“ mit Zeitvorgabe; Kinokiosk (Geld). Spiel-Vorgabe daher
  „mittel“ (zweistellig ohne Übergang). Zweistellig mit Übergang kommt im Unterricht noch.
- Sachunterricht: Gesunde Ernährung (Zucker-Check), „Das kleine WIR“, Gefühle (Morgenkreis).
- Moki ist das Klassen-Kuscheltier.

## Bekannte Lücken

- Alles ist nur am Computer getestet (Chrome, automatischer Durchlauf), nicht auf dem Fire Tablet.
- Geräusche und Musik hat noch niemand außer Stephan und Moritz gehört.
- Akt 3 ist nur automatisch durchgespielt; Emojis (Silben, Rezept, Memory) auf dem Fire Tablet prüfen.
- Kein Offline-Betrieb: ohne WLAN startet das Spiel vermutlich nicht (kein Service Worker).
