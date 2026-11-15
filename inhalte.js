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
