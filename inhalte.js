/* ============================================================================
   INHALTE für „Die Insel von Kapitän Rechenbart“
   ----------------------------------------------------------------------------
   Diese Datei enthält alle Wörter, Sätze und Fragen. Das Spiel selbst steht in
   index.html und muss für neue Inhalte NICHT geändert werden.

   Aufbau:
   1. LERNWOERTER  Listen mit Lernwörtern (Faltblätter). Die aktive Liste wird
                   NUR im Elternbereich gewechselt, nie automatisch.
   2. PAKETE       Lernpakete. Das erste Paket ist die Grundlage. Jedes weitere
                   Paket muss nur die Teile enthalten, die sich ändern. Alles,
                   was fehlt, kommt aus dem ersten Paket.

   Neues Arbeitsblatt einpflegen: unten ein neues Paket anhängen (Vorlage am
   Ende der Datei) und die passenden Teile füllen.
   ============================================================================ */

const LERNWOERTER=[
 {id:"herbst-2026", name:"Faltblätter 1 bis 3 (Herbst 2026)",
  /* Nummer des Blatts: kurze Beschreibung */
  blaetter:{1:"x und chs", 2:"Sp und St", 3:"Farben"},
  /* Ein Wort pro Zeile: [Blatt, Wort, Artikel oder 0, [Anfang, Lücke, Ende], [richtig und zwei falsche Lückenfüller]] */
  woerter:[
   [1, "Axt", "die", ["A", "x", "t"], ["x", "ks", "chs"]],
   [1, "boxen", 0, ["bo", "x", "en"], ["x", "ks", "chs"]],
   [1, "extra", 0, ["e", "x", "tra"], ["x", "ks", "chs"]],
   [1, "Hexe", "die", ["He", "x", "e"], ["x", "ks", "chs"]],
   [1, "Mixer", "der", ["Mi", "x", "er"], ["x", "ks", "chs"]],
   [1, "Text", "der", ["Te", "x", "t"], ["x", "ks", "chs"]],
   [1, "Keks", "der", ["Ke", "ks", ""], ["x", "ks", "chs"]],
   [1, "Dachs", "der", ["Da", "chs", ""], ["x", "ks", "chs"]],
   [1, "Fuchs", "der", ["Fu", "chs", ""], ["x", "ks", "chs"]],
   [1, "Ochse", "der", ["O", "chs", "e"], ["x", "ks", "chs"]],
   [1, "sechs", 0, ["se", "chs", ""], ["x", "ks", "chs"]],
   [2, "Spiel", "das", ["", "Sp", "iel"], ["Sp", "Schp", "Sb"]],
   [2, "Spur", "die", ["", "Sp", "ur"], ["Sp", "Schp", "Sb"]],
   [2, "Spitze", "die", ["Spi", "tz", "e"], ["tz", "z", "ts"]],
   [2, "Spaß", "der", ["Spa", "ß", ""], ["ß", "s", "ss"]],
   [2, "Spiegel", "der", ["Sp", "ie", "gel"], ["ie", "i", "ih"]],
   [2, "Stein", "der", ["", "St", "ein"], ["St", "Scht", "Sd"]],
   [2, "Stunde", "die", ["", "St", "unde"], ["St", "Scht", "Sd"]],
   [2, "Strahl", "der", ["Stra", "h", "l"], ["h", "hh", "ch"]],
   [2, "Stuhl", "der", ["", "St", "uhl"], ["St", "Scht", "Sd"]],
   [2, "Stier", "der", ["St", "ie", "r"], ["ie", "i", "ih"]],
   [2, "Stiefel", "der", ["", "St", "iefel"], ["St", "Scht", "Sd"]],
   [3, "grün", 0, ["gr", "ü", "n"], ["ü", "u", "ö"]],
   [3, "gelb", 0, ["gel", "b", ""], ["b", "p", "d"]],
   [3, "rot", 0, ["r", "o", "t"], ["o", "oo", "oh"]],
   [3, "blau", 0, ["bl", "au", ""], ["au", "ao", "ou"]],
   [3, "weiß", 0, ["wei", "ß", ""], ["ß", "s", "ss"]],
   [3, "schwarz", 0, ["schwar", "z", ""], ["z", "tz", "ts"]],
   [3, "Farbe", "die", ["Far", "b", "e"], ["b", "p", "w"]],
   [3, "Fuß", "der", ["Fu", "ß", ""], ["ß", "s", "ss"]],
   [3, "Ohr", "das", ["O", "h", "r"], ["h", "hh", "ch"]],
   [3, "Rüssel", "der", ["Rü", "ss", "el"], ["ss", "s", "ß"]],
   [3, "rennen", 0, ["re", "nn", "en"], ["nn", "n", "mm"]]
  ],
  /* Geschichten für das Lese-Diktat. l = Blatt, t = Titel, p = zwei Seiten Text. Jede Geschichte enthält alle Wörter ihres Blatts. */
  geschichten:[
   {"l": 1, "t": "Die Hexe und der Keks", "p": ["Im Wald wohnt eine Hexe. Sie hat sechs Tiere. Ein Fuchs, ein Dachs und ein Ochse sind auch dabei. Heute will die Hexe einen Keks backen. Sie holt den Mixer. Dann liest sie den Text im Backbuch.", "Da steht: Nimm extra viel Zucker! Der Fuchs will helfen. Er holt mit der Axt Holz für den Ofen. Der Dachs und der Ochse boxen aus Spaß vor der Tür. Bald ist der Keks fertig. Er ist so groß wie ein Rad! Alle sechs Tiere essen mit."]},
   {"l": 2, "t": "Der Stier mit dem Spiegel", "p": ["Moritz findet am Strand einen alten Stiefel. Daneben ist eine Spur im Sand. Wer war das? Moritz folgt der Spur eine ganze Stunde lang. Hinter einem großen Stein steht ein Stier. Der Stier sitzt auf einem Stuhl!", "Er schaut in einen Spiegel. Ein Strahl der Sonne fällt auf die Spitze von seinem Horn. Der Stier lacht. Er sagt: Das ist mein liebstes Spiel! Moritz lacht auch. So ein Spaß! Dann gibt er dem Stier den Stiefel zurück."]},
   {"l": 3, "t": "Krümel malt ein Bild", "p": ["Krümel will ein Bild malen. Er holt jede Farbe, die er hat: rot, gelb, blau und grün. Er malt einen Elefanten. Der Rüssel wird blau. Ein Ohr wird rot, das andere Ohr wird gelb.", "Da tritt Krümel mit dem Fuß in die Farbe. Oh nein! Jetzt ist sein Fuß grün. Er will schnell zum Wasser rennen. Überall sind bunte Flecken. Der Kapitän lacht: Dein Bild ist schön! Nur mein Bart bleibt weiß und mein Hut bleibt schwarz."]}
  ]}
];

const PAKETE=[
 {id:"2026-11", name:"November 2026: Zehnerzahlen, Nomen, Ernährung",

  /* Zauberbuch (Kapitel 2): Satz klein geschrieben, dahinter die Nummern der Wörter, die groß sein müssen (das erste Wort hat die Nummer 0) */
  zauber:[
   ["die hexe mixt einen trank.", [0, 1, 4]],
   ["der fuchs hat einen keks.", [0, 1, 4]],
   ["im kessel ist ein stiefel.", [0, 1, 4]],
   ["der dachs sitzt auf dem stuhl.", [0, 1, 5]],
   ["mein spiegel ist grün.", [0, 1]],
   ["der ochse rennt zum stein.", [0, 1, 4]],
   ["die axt liegt im gras.", [0, 1, 4]],
   ["sechs kekse sind im mixer.", [0, 1, 4]],
   ["ein strahl fällt auf den fuß.", [0, 1, 5]],
   ["das spiel macht viel spaß.", [0, 1, 4]]
  ],
  /* Papageien-Quatsch (Kapitel 3): [Satz mit ___, richtiges Verb, Quatsch-Verb] */
  verben:[
   ["Der Papagei ___ auf dem Mast.", "sitzt", "bellt"],
   ["Das Schiff ___ über das Meer.", "fährt", "klettert"],
   ["Der Kapitän ___ einen Keks.", "isst", "liest"],
   ["Die Hexe ___ auf dem Besen.", "fliegt", "schwimmt"],
   ["Der Fuchs ___ durch den Wald.", "rennt", "singt"],
   ["Moritz ___ die Schatzkarte.", "liest", "trinkt"],
   ["Die Sonne ___ am Himmel.", "scheint", "hüpft"],
   ["Olga ___ eine Suppe.", "kocht", "sägt"]
  ],
  /* Nomen angeln (Kapitel 3): Namenwörter und andere Wörter, alles in Großbuchstaben */
  nomen:["FUCHS", "STEIN", "STUHL", "KEKS", "HEXE", "SPIEGEL", "OHR", "FUSS", "AXT", "STIEFEL", "SCHIFF", "INSEL", "ANKER", "FISCH", "DACHS"],
  keinNomen:["GRÜN", "RENNEN", "BOXEN", "EXTRA", "GELB", "SCHNELL", "LAUT", "LACHEN", "KLEIN", "SINGEN", "NASS", "ROT"],
  /* Alles Quatsch? (Kapitel 4): Der ERSTE Satz ist der richtige, die anderen zwei sind Quatsch */
  quatsch:[
   ["Der Kapitän trinkt Tee aus einer Tasse.", "Die Tasse trinkt Tee aus dem Kapitän.", "Der Kapitän trinkt den Mond aus einem Stiefel."],
   ["Moritz putzt sich die Zähne.", "Moritz putzt sich die Wolken.", "Die Zähne putzen sich den Moritz."],
   ["Der Leuchtturm leuchtet in der Nacht.", "Der Leuchtturm schwimmt in der Suppe.", "Die Nacht leuchtet im Keks."],
   ["Die Möwe fliegt über das Meer.", "Das Meer fliegt über die Möwe.", "Die Möwe bellt unter dem Meer."],
   ["Olga schneidet das Brot mit dem Messer.", "Olga schneidet das Messer mit dem Brot.", "Das Brot schneidet Olga mit der Suppe."],
   ["Krümel frisst gern Kekse.", "Kekse fressen gern Krümel.", "Krümel frisst gern Steine und Stühle."]
  ],
  /* Wissens-Kisten: Nummer = Kapitel. [Thema, [[Frage, richtige Antwort, falsch, falsch, Erklärung], ...]] */
  wissen:{
   1:["Piraten und Schiffe",[
     ["Wie heißt die linke Seite von einem Schiff?", "Backbord", "Steuerbord", "Hinterbord", "Links ist Backbord. Rechts ist Steuerbord."],
     ["Womit hält ein Schiff an einer Stelle fest?", "mit dem Anker", "mit dem Segel", "mit der Flagge", "Der schwere Anker hakt sich im Meeresboden fest."],
     ["Wer bestimmt auf einem Schiff?", "der Kapitän", "der Koch", "der Papagei", "Der Kapitän führt das Schiff. Alle hören auf ihn."],
     ["Was treibt ein Segelschiff an?", "der Wind", "die Fische", "die Wolken", "Der Wind bläst in die Segel und schiebt das Schiff an."],
     ["Wie heißt die Küche auf einem Schiff?", "Kombüse", "Kajüte", "Kompass", "Die Küche heißt Kombüse. Die Kajüte ist ein Zimmer auf dem Schiff."]
   ]],
   2:["Tiere im Wald",[
     ["Wo wohnt der Dachs?", "in einem Bau unter der Erde", "in einem Nest im Baum", "im Wasser", "Der Dachs gräbt sich einen großen Bau mit vielen Gängen."],
     ["Was frisst ein Fuchs gern?", "Mäuse", "Steine", "Holz", "Der Fuchs fängt Mäuse. Er frisst aber auch Beeren und Würmer."],
     ["Welches Tier kann fliegen?", "die Fledermaus", "der Dachs", "der Ochse", "Die Fledermaus fliegt in der Nacht. Sie ist kein Vogel, sondern ein Säugetier."],
     ["Wie viele Beine hat eine Spinne?", "acht", "sechs", "vier", "Spinnen haben acht Beine. Insekten haben nur sechs."],
     ["Welches Tier schläft den ganzen Winter?", "der Igel", "der Fuchs", "die Möwe", "Der Igel hält Winterschlaf. Er rollt sich in einem Laubhaufen ein."]
   ]],
   3:["Meere und Ozeane",[
     ["Wie schmeckt das Wasser im Meer?", "salzig", "süß", "sauer", "Im Meerwasser ist viel Salz. Man kann es nicht trinken."],
     ["Welcher Ozean ist der größte?", "der Pazifik", "der Atlantik", "die Nordsee", "Der Pazifik ist der größte Ozean der Erde."],
     ["Was passiert bei Ebbe?", "Das Wasser geht zurück.", "Das Wasser wird warm.", "Die Fische schlafen.", "Bei Ebbe geht das Wasser zurück. Bei Flut kommt es wieder."],
     ["Was bedeckt den größten Teil der Erde?", "Wasser", "Sand", "Wald", "Mehr als die Hälfte der Erde ist mit Wasser bedeckt."],
     ["Welches Meer liegt im Norden von Deutschland?", "die Nordsee", "das Mittelmeer", "der Pazifik", "Im Norden von Deutschland liegen die Nordsee und die Ostsee."]
   ]],
   4:["Tiere im Meer",[
     ["Welches ist das größte Tier der Welt?", "der Blauwal", "der Elefant", "der Hai", "Der Blauwal ist das größte Tier der Welt. Er ist so lang wie drei Busse."],
     ["Wie viele Arme hat ein Krake?", "acht", "fünf", "zwei", "Ein Krake hat acht Arme mit vielen Saugnäpfen."],
     ["Ist der Delfin ein Fisch?", "Nein, er ist ein Säugetier.", "Ja, er ist ein Fisch.", "Nein, er ist ein Vogel.", "Der Delfin ist ein Säugetier. Er muss zum Atmen auftauchen."],
     ["Womit atmen Fische?", "mit Kiemen", "mit der Nase", "mit den Flossen", "Fische atmen mit Kiemen. Damit holen sie Luft aus dem Wasser."],
     ["Wozu ist ein Leuchtturm da?", "Er zeigt Schiffen den Weg.", "Er macht Wellen.", "Er fängt Fische.", "Das Licht vom Leuchtturm zeigt den Schiffen in der Nacht den Weg."]
   ]],
   5:["Schätze und Höhlen",[
     ["Welches Tier hängt in Höhlen an der Decke?", "die Fledermaus", "der Fuchs", "der Krebs", "Fledermäuse schlafen am Tag. Dabei hängen sie mit dem Kopf nach unten."],
     ["Was zeigt ein Kompass?", "die Himmelsrichtungen", "die Uhrzeit", "das Wetter", "Die Nadel im Kompass zeigt immer nach Norden."],
     ["Wo geht die Sonne auf?", "im Osten", "im Westen", "im Norden", "Die Sonne geht im Osten auf und im Westen unter."],
     ["Womit sehen Piraten weit über das Meer?", "mit dem Fernrohr", "mit dem Spiegel", "mit der Schaufel", "Durch ein Fernrohr sieht alles viel näher aus."],
     ["Woraus sind Dublonen?", "aus Gold", "aus Holz", "aus Keks", "Dublonen waren Münzen aus Gold. Piraten haben sie geliebt."]
   ]],
   6:["Wind und Wetter",[
     ["Was bewegt die Wolken am Himmel?","der Wind","die Sonne","der Mond","Der Wind schiebt die Wolken über den Himmel."],
     ["Was sieht man nach dem Regen manchmal am Himmel?","einen Regenbogen","einen Schneemann","eine Laterne","Scheint die Sonne in den Regen, entsteht ein Regenbogen."],
     ["Was kommt bei einem Gewitter zuerst?","der Blitz","der Donner","der Schnee","Erst sieht man den Blitz. Den Donner hört man danach."],
     ["Woraus besteht eine Wolke?","aus winzigen Wassertropfen","aus Watte","aus Rauch","Wolken bestehen aus vielen winzigen Wassertropfen."],
     ["Womit misst man, wie warm es ist?","mit dem Thermometer","mit dem Kompass","mit der Uhr","Das Thermometer zeigt die Temperatur in Grad."]
   ]],
   7:["Affen und Dschungel",[
     ["Wo leben die meisten Affen?","im Wald auf Bäumen","in der Wüste","am Nordpol","Die meisten Affen leben im Regenwald. Dort klettern sie auf Bäume."],
     ["Was fressen Affen gern?","Früchte und Blätter","Steine","Sand","Affen fressen Früchte, Blätter und Nüsse."],
     ["Wie ist das Wetter im Regenwald?","warm und nass","kalt und trocken","immer Schnee","Im Regenwald ist es das ganze Jahr warm, und es regnet oft."],
     ["Womit halten sich manche Affen am Ast fest?","mit dem Schwanz","mit den Ohren","mit der Nase","Manche Affen können sich sogar mit dem Schwanz festhalten."],
     ["Wie heißt ein sehr großer, starker Affe?","Gorilla","Gürteltier","Giraffe","Der Gorilla ist der größte Affe."]
   ]],
   8:["Am Korallenriff",[
     ["Was ist eine Koralle?","ein Tier","ein Stein","ein Spielzeug","Korallen sehen aus wie Steine. Es sind aber viele winzige Tiere."],
     ["Wie viele Arme hat ein Seestern meistens?","fünf","zwei","zwanzig","Die meisten Seesterne haben fünf Arme."],
     ["Wie holen Delfine Luft?","Sie tauchen auf und atmen.","Sie atmen mit Kiemen.","Sie brauchen keine Luft.","Delfine atmen durch ein Loch oben auf dem Kopf."],
     ["Was trägt die Schildkröte auf dem Rücken?","einen Panzer","einen Rucksack","ein Segel","Der Panzer schützt die Schildkröte."],
     ["Was macht der Tintenfisch, wenn er Angst hat?","Er spritzt Tinte.","Er singt laut.","Er baut eine Burg.","In der dunklen Tintenwolke kann sich der Tintenfisch verstecken."]
   ]],
   9:["Nacht und Himmel",[
     ["Wann sieht man die Sterne am besten?","in der Nacht","am Mittag","am Morgen","Am Tag ist die Sonne zu hell. In der Nacht sieht man die Sterne."],
     ["Welches Tier jagt in der Nacht und ruft Schuhu?","die Eule","die Möwe","das Huhn","Eulen sehen und hören im Dunkeln sehr gut."],
     ["Leuchtet der Mond von allein?","Nein, die Sonne strahlt ihn an.","Ja, er brennt.","Ja, er hat eine Lampe.","Der Mond leuchtet nicht selbst. Die Sonne strahlt ihn an."],
     ["Was ist Nebel?","eine Wolke am Boden","Rauch von Geistern","Staub","Nebel ist eine Wolke, die ganz tief am Boden hängt."],
     ["Wie viele Stunden hat ein Tag mit der Nacht zusammen?","24","12","10","Ein ganzer Tag hat 24 Stunden."]
   ]]
  },
  /* Olgas Küche: Was soll man oft essen, was nur manchmal? */
  oftEssen:["Apfel", "Möhre", "Gurke", "Banane", "Brot", "Wasser", "Fisch", "Tomate", "Birne", "Nüsse"],
  seltenEssen:["Bonbons", "Limo", "Chips", "Kuchen", "Schokolade", "Kekse", "Eis", "Pommes"],
  /* Fragen in Olgas Küche: [Frage, richtig, falsch, falsch, Erklärung] */
  ernaehrung:[
   ["Was ist das beste Getränk gegen Durst?", "Wasser", "Limo", "Kakao", "Wasser löscht den Durst am besten. In Limo ist sehr viel Zucker."],
   ["Wie oft am Tag soll man Obst und Gemüse essen?", "fünf Mal", "ein Mal", "gar nicht", "Fünf Mal am Tag Obst und Gemüse: Das macht fit."],
   ["Was gibt dir Kraft für den Schultag?", "ein gutes Frühstück", "eine Tüte Bonbons", "gar nichts essen", "Mit einem guten Frühstück kannst du besser denken und rechnen."],
   ["Woraus wird Brot gemacht?", "aus Getreide", "aus Milch", "aus Sand", "Brot wird aus Mehl gebacken. Mehl ist gemahlenes Getreide."],
   ["Was ist gut für starke Knochen?", "Milch und Käse", "Limo", "Chips", "In Milch und Käse steckt Kalzium. Das macht die Knochen stark."],
   ["Welches Essen wächst am Baum?", "der Apfel", "die Möhre", "die Kartoffel", "Äpfel wachsen am Baum. Möhren und Kartoffeln wachsen in der Erde."]
  ],
  /* Zettel an den Wissens-Kisten: [Text, Reihenfolge der Knöpfe]. Farben: rot, blau, grün, gelb */
  knopf:[
   ["Drücke den grünen Knopf.", ["grün"]],
   ["Drücke den Knopf, der so gelb ist wie die Sonne.", ["gelb"]],
   ["Drücke zuerst den roten Knopf. Drücke dann den blauen Knopf.", ["rot", "blau"]],
   ["Drücke nicht den roten Knopf. Drücke den blauen.", ["blau"]],
   ["Der richtige Knopf hat die Farbe von Gras.", ["grün"]],
   ["Drücke zuerst Gelb. Dann Grün. Dann Rot.", ["gelb", "grün", "rot"]],
   ["Drücke den Knopf, der so rot ist wie eine Tomate.", ["rot"]],
   ["Drücke zweimal den blauen Knopf.", ["blau", "blau"]],
   ["Der richtige Knopf hat die Farbe vom Meer.", ["blau"]],
   ["Drücke erst den blauen Knopf und dann den gelben.", ["blau", "gelb"]],
   ["Drücke nicht Rot, nicht Blau und nicht Gelb.", ["grün"]],
   ["Drücke den Knopf mit der Farbe einer Banane. Dann den roten.", ["gelb", "rot"]]
  ],
  /* Mokis Rätsel: [Rätsel, richtige Lösung, falsch, falsch] */
  raetsel:[
   ["Ich habe Zähne, aber ich beiße nicht. Was bin ich?", "der Kamm", "der Hai", "der Hund"],
   ["Ich habe vier Beine, aber ich kann nicht laufen. Was bin ich?", "der Tisch", "das Pferd", "die Ente"],
   ["Ich bin gelb und krumm. Affen lieben mich. Was bin ich?", "die Banane", "die Zitrone", "der Mond"],
   ["Ich werde nasser, wenn ich dich trockne. Was bin ich?", "das Handtuch", "die Sonne", "der Fisch"],
   ["Ich falle vom Himmel und mache alles nass. Was bin ich?", "der Regen", "der Stern", "der Vogel"],
   ["Ich leuchte in der Nacht und zeige Schiffen den Weg. Was bin ich?", "der Leuchtturm", "die Kerze", "der Keks"],
   ["Ich habe einen Rüssel und bin grau und sehr groß. Was bin ich?", "der Elefant", "die Maus", "der Dachs"],
   ["Man schreibt in mich hinein. Ich habe viele Seiten. Was bin ich?", "das Heft", "der Stuhl", "der Stiefel"],
   ["Ich habe zwei Flügel und einen Schnabel. Ich fresse gern Kekse. Wer bin ich?", "Krümel", "Moki", "Olga"],
   ["Ich bin rund und aus Gold. Piraten sammeln mich. Was bin ich?", "die Dublone", "die Kokosnuss", "der Ball"]
  ],
  /* Sprüche von Moki und Witze von Krümel */
  moki:[
   "Uh uh ah ah! Ich bin Moki. Ich bin heimlich mitgefahren!",
   "Hast du eine Banane? Nein? Schade.",
   "Ich habe dem Kapitän einen Keks aus dem Bart geklaut. Pssst!",
   "Moki sieht alles. Moki sagt nichts. Außer für Bananen.",
   "In deiner Klasse ist es schöner. Aber hier gibt es mehr Kokosnüsse!"
  ],
  /* ================= Akt 2: Die große Fahrt (Kapitel 5 bis 8) ================= */
  /* Tunwörter angeln (Kapitel 5): Tunwörter und andere Wörter */
  tun:["SEGELN","LAUFEN","SPRINGEN","LESEN","RECHNEN","SCHWIMMEN","ESSEN","LACHEN","SINGEN","KLETTERN","RUDERN","SCHLAFEN"],
  keinTun:["SCHIFF","GRÜN","FISCH","LAUT","INSEL","NASS","KEKS","KLEIN","MOND","ROT","ANKER","SCHNELL"],
  /* Gegenteile (Kapitel 6): [Wort, Gegenteil, falsch, falsch] */
  gegenteile:[
   ["groß","klein","dick","rund"],["heiß","kalt","warm","nass"],["laut","leise","schnell","hoch"],["hell","dunkel","bunt","leer"],["nass","trocken","kalt","weich"],
   ["schnell","langsam","leicht","lang"],["voll","leer","schwer","offen"],["oben","unten","hinten","neben"],["alt","jung","lieb","klug"],["lang","kurz","breit","dünn"]
  ],
  /* Geister-Schrift (Kapitel 8): wie das Zauberbuch */
  geisterschrift:[
   ["um mitternacht tanzt das gespenst.",[0,1,4]],["die laterne leuchtet im nebel.",[0,1,4]],["das schiff knarrt in der nacht.",[0,1,5]],["ein gespenst hat angst vor krümel.",[0,1,3,5]],
   ["der mond scheint auf das deck.",[0,1,5]],["im keller rasselt eine kette.",[0,1,4]],["die eule ruft dreimal.",[0,1]],["der kapitän zittert ein wenig.",[0,1]]
  ],
  /* Lesen und Handeln: [Satz, [[Ding, Farbe, Spruch bei falscher Wahl], ...]]. Das ERSTE Ding ist das richtige.
     Dinge: knopf hebel kiste lampe eimer tuch besen. Farben: rot blau grün gelb grau */
  befehle:{
   see:[
    ["<b>Sturm!</b> Das Deck ist nass. Wisch es mit dem Tuch trocken.",[["tuch"],["besen",0,"Kräh! Der Besen macht nur Pfützen. Lies nochmal!"],["eimer","blau","Kräh! Noch mehr Wasser? Lies nochmal!"]]],
    ["Im Schiff ist Wasser. Schöpfe es mit dem roten Eimer heraus.",[["eimer","rot"],["eimer","blau","Der blaue Eimer hat ein Loch. Lies nochmal!"],["eimer","grün","Im grünen Eimer wohnt ein Fisch. Lies nochmal!"]]],
    ["Zieh das Segel ein. Dazu ziehst du den gelben Hebel. Nicht den grünen!",[["hebel","gelb"],["hebel","grün","Huch! Das war der Anker. Platsch!"],["hebel","rot","Tuuut! Das war das Nebelhorn."]]],
    ["Es wird dunkel. Mach die Lampe an. Sie ist gelb.",[["lampe","gelb"],["lampe","grau","Die graue Lampe ist kaputt. Lies nochmal!"],["knopf","gelb","Kräh! Das ist ein Knopf und keine Lampe."]]],
    ["Geschafft! Hol dir zur Belohnung einen Keks aus der blauen Kiste.",[["kiste","blau"],["kiste","rot","In der roten Kiste sind nur Socken vom Kapitän. Puh!"],["kiste","grün","Die grüne Kiste ist leer. Krümel war schon da."]]]
   ],
   riff:[
    ["Unter Wasser ist es dunkel. Nimm die gelbe Lampe mit.",[["lampe","gelb"],["lampe","grau","Blubb! Die graue Lampe ist kaputt."],["eimer","gelb","Kräh! Ein Eimer leuchtet nicht."]]],
    ["Die Perle liegt in einer Kiste. Sie liegt nicht in der roten und nicht in der blauen.",[["kiste","grün"],["kiste","rot","Zwick! In der roten Kiste wohnt ein Krebs."],["kiste","blau","Blubb! In der blauen Kiste schläft ein Tintenfisch."]]],
    ["Die Kiste klemmt. Zieh am grünen Hebel.",[["hebel","grün"],["hebel","rot","Blubb! Jetzt sprudelt es überall."],["hebel","blau","Hoppla! Das war die Tür vom Wrack."]]],
    ["Die Perle ist schmutzig. Putze sie vorsichtig mit dem Tuch.",[["tuch"],["besen",0,"Kräh! Der Besen ist viel zu grob."],["eimer","rot","Kräh! Wir sind doch schon im Wasser!"]]]
   ],
   nebel:[
    ["<b>Anleitung: Gespenster vertreiben.</b> Gespenster mögen kein Licht. Mach die gelbe Lampe an.",[["lampe","gelb"],["lampe","grau","Buh! Die graue Lampe ist kaputt."],["knopf","rot","Huuu! Das war der Gruselknopf. Lies nochmal!"]]],
    ["Gespenster mögen keine sauberen Schiffe. Feg das Deck mit dem Besen.",[["besen"],["tuch",0,"Das Tuch ist zu klein für ein ganzes Deck."],["eimer","blau","Platsch! Jetzt ist das Gespenst nass und sauer."]]],
    ["Die Geister-Musik kommt aus einer Kiste. Mach die Kiste zu, die nicht rot und nicht grün ist.",[["kiste","blau"],["kiste","rot","In der roten Kiste sitzt nur eine Fledermaus."],["kiste","grün","In der grünen Kiste liegt alter Käse. Puh!"]]],
    ["Jetzt läute die Schiffsglocke. Zieh dazu am roten Hebel.",[["hebel","rot"],["hebel","blau","Huch! Die Falltür geht auf."],["hebel","gelb","Quietsch! Das war die Gruselorgel."]]]
   ]
  },
  /* Rechengeschichten (Kapitel 5 bis 7): [Rechenart "+" oder "-", Text]. {a} und {b} werden durch Zahlen ersetzt.
     Bei "-" ist {a} die größere Zahl. Die Reihenfolge bestimmt die Schwierigkeit:
     rechnen6 Nr. 3 und rechnen7 Nr. 1 rechnen nur mit Zehnerzahlen, alle anderen mit Übergang. */
  rechnen5:[
   ["+","Im Lager liegen {a} Zwiebäcke. Der Koch bringt noch {b} dazu. Wie viele Zwiebäcke sind es jetzt?"],
   ["-","An Bord sind {a} Äpfel. Die Mannschaft isst {b} Äpfel. Wie viele Äpfel sind noch da?"],
   ["+","Das Schiff ist schon {a} Meilen gefahren. Heute fährt es noch {b} Meilen. Wie viele Meilen sind es zusammen?"]
  ],
  rechnen6:[
   ["+","Am Stand liegen {a} Bananen. Die Affen bringen noch {b} Bananen. Wie viele Bananen sind es jetzt?"],
   ["-","Königin Koko hat {a} Kokosnüsse. Sie verschenkt {b} Kokosnüsse. Wie viele hat sie noch?"],
   ["-","Im Korb sind {a} Mangos. Moki nascht heimlich {b} Mangos. Wie viele Mangos sind noch im Korb?"]
  ],
  rechnen7:[
   ["+","In der Muschel liegen {a} Perlen. Oma Schildi legt {b} Perlen dazu. Wie viele Perlen sind es jetzt?"],
   ["-","Am Riff schwimmen {a} Fische. {b} Fische schwimmen weg. Wie viele Fische sind noch da?"],
   ["+","Ein Seestern zählt {a} Muscheln und dann noch {b} Muscheln. Wie viele sind es zusammen?"]
  ],
  /* Witze des Kapitäns: [Frage, Pointe]. Kurz, kindgerecht, frech, aber nie gemein. */
  kapitaenWitze:[
   ["Wie nennt man einen Piraten ohne Augenklappe?", "Einen Piraten mit zwei Augen! Har har!"],
   ["Warum ist das Meer so nass?", "Weil die Fische sich nie abtrocknen! Har har!"],
   ["Was sagt der große Stift zum kleinen Stift?", "Wachs mal, Stift! Har har!"],
   ["Wo wohnen Katzen?", "Im Miezhaus! Har har!"],
   ["Was ist grün und hüpft durch den Wald?", "Ein Rudel Gurken! Har har!"],
   ["Was liegt am Strand und spricht ganz undeutlich?", "Eine Nuschel! Har har!"],
   ["Welches Tier kann am besten rechnen?", "Der Tintenfisch. Der hat acht Arme zum Zählen! Har har!"],
   ["Was sitzt auf dem Baum und ruft: Aha?", "Ein Uhu mit Schnupfen! Har har!"],
   ["Wie heißt ein Pirat, der immer zu spät kommt?", "Kapitän Gleich-da! Har har!"],
   ["Warum nehmen Piraten nie Kekse mit an Deck?", "Weil Krümel sonst alles wegfuttert! Har har!"]
  ],
  witze:[
   "Was ist grün und klopft an die Tür? Ein Klopfsalat!",
   "Wie nennt man einen Keks unter einem Baum? Ein schattiges Plätzchen!",
   "Was machen Piraten am Computer? Sie drücken die Enter-Taste!"
  ]}

 /* ---------- VORLAGE für ein neues Paket (Kommentarzeichen entfernen, Komma davor nicht vergessen) ----------
 ,{id:"2027-01", name:"Januar 2027: ...",
   verben:[ ["Der Hund ___ laut.","bellt","fliegt"] ],
   quatsch:[ ["Richtiger Satz.","Quatsch-Satz 1.","Quatsch-Satz 2."] ]
 }
 */
];
