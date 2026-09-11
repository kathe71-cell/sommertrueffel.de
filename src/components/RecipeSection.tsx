import React, { useState, useMemo } from 'react';
import { ChefHat, Clock, Utensils, Sparkles, Flame, CheckCircle2, BookOpen, Scale, Search, Filter } from 'lucide-react';
import { AFFILIATE_LINKS } from '../config/affiliate';

interface Recipe {
  id: string;
  category: 'pasta' | 'egg' | 'meat' | 'starter' | 'basic';
  categoryLabel: string;
  title: string;
  subtitle: string;
  timePrep: string;
  timeCook: string;
  difficulty: 'Einfach' | 'Mittel';
  truffleAmount: string;
  servings: string;
  description: string;
  proTip: string;
  ingredients: string[];
  steps: string[];
  truffleLink: string;
  hobelLink: string;
}

const RECIPES: Recipe[] = [
  {
    id: 'tagliolini',
    category: 'pasta',
    categoryLabel: 'Pasta-Klassiker',
    title: 'Tagliolini al Tartufo Estivo (Originale)',
    subtitle: 'Die Krönung der umbrischen und toskanischen Hausküche',
    timePrep: '10 Min.',
    timeCook: '5 Min.',
    difficulty: 'Einfach',
    truffleAmount: '12–15g pro Person (ca. 50g gesamt)',
    servings: '4 Personen',
    description: 'Eines der berühmtesten Trüffelgerichte Italiens. Frische Eiernudeln, hochwertige Süßrahmbutter und stärkehaltiges Pastawasser erzeugen ohne schwere Sahne eine seidige Emulsion, die das nussige Aroma des Sommertrüffels perfekt umhüllt.',
    proTip: 'Verwenden Sie niemals Kochsahne! Das Geheimnis italienischer Trüffelpasta liegt in der physikalischen Emulsion aus kalt geschwenkter Butter und heißem Nudelkochwasser bei ausgeschalteter Herdplatte.',
    ingredients: [
      '400g frische Tagliolini oder Fettuccine (aus Hartweizengrieß und Ei)',
      '50g frischer Sommertrüffel (Tuber aestivum)',
      '90g ungesalzene Bio-Süßrahmbutter (in Stückchen gekühlt)',
      '50g Parmigiano Reggiano DOP (mind. 24 Monate gereift, hauchfein gerieben)',
      '1 Kelle stärkehaltiges Nudelkochwasser',
      'Feines Meersalz und eine Prise frisch gemahlener weißer Pfeffer'
    ],
    steps: [
      'Einen großen Topf mit reichlich Wasser zum Kochen bringen und maßvoll salzen. Frische Tagliolini benötigen nur 2–3 Minuten bis zum idealen Biss.',
      'Währenddessen in einer großen Schwenkpfanne 30g der Butter bei minimaler Hitze sanft schmelzen lassen – die Butter darf keinesfalls zischen oder bräunen.',
      'Mit dem Präzisions-Trüffelhobel etwa ein Viertel des frischen Sommertrüffels direkt in die lauwarme Butter hobeln. Durch den leichten Fettkontakt löst sich das feine ätherische Aroma an.',
      'Die al dente gekochten Tagliolini direkt mit einer Pastazange tropfnass in die Pfanne heben. Eine halbe Kelle heißes Pastawasser und die restlichen kalten Butterflocken hinzufügen.',
      'Die Pfanne sofort von der Herdplatte nehmen! Den geriebenen Parmesan einstreuen und die Pfanne kräftig schwenken, bis eine glänzende, samtige Buttersauce die Nudeln vollständig überzieht.',
      'Die Pasta sofort auf vorgewärmten Tellern als Nest anrichten und den restlichen frischen Sommertrüffel hauchfein und üppig direkt am Tisch über die dampfenden Nudeln hobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'risotto',
    category: 'pasta',
    categoryLabel: 'Reis & Risotto',
    title: 'Cremiges Risotto al Tartufo Estivo',
    subtitle: 'Norditalienische Risottokunst mit Carnaroli-Reis',
    timePrep: '15 Min.',
    timeCook: '20 Min.',
    difficulty: 'Mittel',
    truffleAmount: '15–18g pro Person (ca. 60g gesamt)',
    servings: '4 Personen',
    description: 'Reiskörner mit festem Kern, gebunden durch samtige Stärke. Die Wärme des frisch gerührten Risottos bringt die dezenten Waldboden- und Haselnussnuancen des Sommertrüffels intensiv zur Geltung.',
    proTip: 'Achten Sie beim Risotto auf die sogenannte „Mantecatura“: Am Ende der Garzeit den Topf von der Hitze nehmen, eiskalte Butter und Parmesan unterschlagen und 2 Minuten ruhen lassen, bevor der Trüffel gehobelt wird.',
    ingredients: [
      '320g Carnaroli- oder Vialone Nano Risottoreis',
      '60g frischer Sommertrüffel (Tuber aestivum)',
      '1 kleine Schalotte (in mikroskopisch feine Würfel geschnitten)',
      '80ml trockener, säurearmer Weißwein (z. B. Soave oder Weißburgunder)',
      '1,2 Liter milder Geflügel- oder heller Gemüsefond (heiß gehalten)',
      '70g kalte Butter',
      '50g frisch geriebener Grana Padano Riserva oder Parmigiano',
      '1 EL mildes Olivenöl Extra Vergine, Fleur de Sel'
    ],
    steps: [
      'Den Geflügel- oder Gemüsefond in einem separaten Topf auf kleiner Flamme sieden lassen. Er muss während des gesamten Kochvorgangs heiß sein.',
      'In einem schweren Topf 1 EL Olivenöl und 20g Butter erhitzen. Die feinen Schalottenwürfel darin glasig dünsten, ohne Farbe nehmen zu lassen.',
      'Den Reis dazugeben und 2 Minuten rühren („Tostatura“), bis alle Körner von einem Fettfilm überzogen und an den Spitzen glasig sind.',
      'Mit dem Weißwein ablöschen und vollständig unter Rühren einkochen lassen, bis der Alkohol verdampft ist.',
      'Nun schöpfkellenweise den heißen Fond zugießen. Erst neue Flüssigkeit nachgießen, wenn die vorherige fast aufgesogen wurde. Stetig sanft rühren (ca. 16–18 Minuten, bis der Reis al dente ist).',
      'Topf vom Herd nehmen. Die eiskalte restliche Butter und den geriebenen Käse kräftig unterrühren („Mantecare“), bis das Risotto wellenartig fließt („All’onda“).',
      'Risotto flach auf tiefen Tellern verteilen, leicht gegen den Tellerboden klopfen und den Sommertrüffel in hauchdünnen Spänen flächendeckend darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'gnocchi',
    category: 'pasta',
    categoryLabel: 'Pasta & Gnocchi',
    title: 'Kartoffel-Gnocchi in brauner Sommertrüffel-Butter',
    subtitle: 'Fluffige Kissen mit nussigem Schmelz',
    timePrep: '20 Min.',
    timeCook: '10 Min.',
    difficulty: 'Mittel',
    truffleAmount: '12–14g pro Person (ca. 50g gesamt)',
    servings: '4 Personen',
    description: 'Selbstgemachte oder frische handwerkliche Kartoffelgnocchi sind der ideale Begleiter für Sommertrüffel. Die mehlige Kartoffelstärke saugt die buttrigen Aromen auf wie ein Schwamm.',
    proTip: 'Verwenden Sie mehligkochende Kartoffeln für den Gnocchiteig. Wenn Sie gekaufte frische Gnocchi nutzen, schwenken Sie diese nach dem Kochen kurz in leicht aufgeschäumter Butter, bevor der Trüffel gehobelt wird.',
    ingredients: [
      '500g frische Kartoffelgnocchi',
      '50g frischer Sommertrüffel',
      '80g ungesalzene Süßrahmbutter',
      '4 frische Salbeiblätter (nur ganz kurz mitgeschwenkt)',
      '40g fein gehobelter Pecorino Sardo Dolce oder Parmesan',
      'Fleur de Sel und weißer Pfeffer'
    ],
    steps: [
      'Gnocchi in reichlich kochendem Salzwasser garen, bis sie an die Oberfläche steigen (ca. 2–3 Minuten).',
      'Parallel in einer großen Pfanne die Butter bei milder Hitze schmelzen lassen. Die Salbeiblätter für 30 Sekunden hineinlegen und wieder entfernen (nur zur leichten Parfümierung).',
      'Die abgetropften Gnocchi mit einem Schaumlöffel direkt in die geschmolzene Butter heben.',
      'Ein Drittel des Trüffels direkt darüberhobeln und die Gnocchi sanft durch die Pfanne schwenken.',
      'Auf Tellern anrichten, mit Pecorino bestreuen und den restlichen Sommertrüffel hauchfein darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'fettuccine-hazelnut',
    category: 'pasta',
    categoryLabel: 'Pasta-Kreation',
    title: 'Fettuccine mit Sommertrüffel & gerösteten Piemont-Haselnüssen',
    subtitle: 'Die doppelte Haselnuss-Harmonie',
    timePrep: '10 Min.',
    timeCook: '8 Min.',
    difficulty: 'Einfach',
    truffleAmount: '10–12g pro Person (ca. 45g gesamt)',
    servings: '4 Personen',
    description: 'Da Sommertrüffel natürlicherweise ein nussiges Aromaprofil besitzt, harmonieren geröstete Haselnüsse aus dem Piemont sensationell mit den frischen Pilzspänen.',
    proTip: 'Die Haselnüsse in einer trockenen Pfanne ohne Fett bei mittlerer Hitze anrösten, bis die Häutchen aufplatzen. Anschließend in einem Küchentuch aneinander reiben, um die Bitterhäute zu entfernen.',
    ingredients: [
      '400g Fettuccine',
      '45g frischer Sommertrüffel',
      '50g Haselnusskerne (aus dem Piemont I.G.P.)',
      '75g Süßrahmbutter',
      '1 TL kaltgepresstes Haselnussöl oder mildes Olivenöl',
      '40g Grana Padano DOP gerieben',
      'Fleur de Sel'
    ],
    steps: [
      'Haselnüsse in der Pfanne rösten, abkühlen lassen und grob hacken.',
      'Fettuccine in Salzwasser al dente kochen.',
      'Butter in der Pfanne sanft schmelzen, etwas Nudelwasser hinzufügen und aufschlagen.',
      'Fettuccine unterheben, mit geriebenem Grana Padano und Haselnussöl vermengen.',
      'Auf Tellern verteilen, mit den gerösteten Haselnussstücken bestreuen und den Sommertrüffel flächendeckend darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'ravioli',
    category: 'pasta',
    categoryLabel: 'Gefüllte Pasta',
    title: 'Steinpilz-Ricotta-Ravioli unter Sommertrüffel-Schleier',
    subtitle: 'Zweierlei Edelpilze in perfekter Symbiose',
    timePrep: '15 Min.',
    timeCook: '6 Min.',
    difficulty: 'Mittel',
    truffleAmount: '10g pro Person (ca. 40g gesamt)',
    servings: '4 Personen',
    description: 'Die erdige Fülle von getrockneten Steinpilzen in einer cremigen Ricotta-Füllung trifft auf die frische, zarte Eleganz des Sommertrüffels.',
    proTip: 'Achten Sie darauf, dass die Ravioli-Füllung nicht zu feucht ist. Wenn Sie frische handgemachte Pasta kaufen, verwenden Sie hauchdünnen Teig.',
    ingredients: [
      '400g frische Ricotta-Steinpilz-Ravioli',
      '40g frischer Sommertrüffel',
      '80g Almbutter',
      '30ml milde Gemüsebrühe',
      'Geriebener Parmesan',
      'Etwas frischer Kerbel oder glatte Petersilie'
    ],
    steps: [
      'Ravioli in siedendem, leicht gesalzenem Wasser ca. 3–4 Minuten ziehen lassen (nicht sprudelnd kochen, damit sie nicht aufplatzen).',
      'In einer Pfanne die Almbutter mit 30ml Gemüsebrühe erwärmen und zu einer Emulsion rühren.',
      'Ravioli vorsichtig mit der Schaumkelle in die Buttersauce gleiten lassen und schwenken.',
      'Auf tiefen Tellern anrichten, mit etwas Parmesan bestreuen und den Sommertrüffel hauchdünn und deckend darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'scrambled-egg',
    category: 'egg',
    categoryLabel: 'Eierspeise & Brunch',
    title: 'Cremiges Trüffel-Rührei auf Brioche-Toast',
    subtitle: 'Das Paradebeispiel natürlicher Fettbindung',
    timePrep: '5 Min. (+ Vorlauf)',
    timeCook: '6 Min.',
    difficulty: 'Einfach',
    truffleAmount: '8–10g pro Person (ca. 35g gesamt)',
    servings: '4 Personen',
    description: 'Eigelb ist einer der stärksten natürlichen Aromaträger der Gourmetküche. In Verbindung mit der 48-Stunden-Glasmethode nimmt das Ei das Aroma des Sommertrüffels bereits vor dem Aufschlagen durch die poröse Schale an.',
    proTip: 'Lagern Sie die rohen Eier 2 Tage vor der Zubereitung zusammen mit der frischen Knolle in einem verschlossenen Weckglas im Kühlschrank. Das Trüffelgas diffundiert durch die Kalkschale direkt ins Dotter!',
    ingredients: [
      '8 frische Bio-Eier (Größe M oder L)',
      '35g frischer Sommertrüffel (Tuber aestivum)',
      '40g frische Bauernbutter',
      '2 EL Crème fraîche oder flüssige Sahne',
      '4 dicke Scheiben Brioche oder handwerkliches Sauerteigbrot',
      '1 Bund feiner Schnittlauch (in feine Röllchen geschnitten)',
      'Fleur de Sel und weißer Tellicherry-Pfeffer'
    ],
    steps: [
      'Die im Vorfeld aromatisierten Eier in einer Schüssel mit der Crème fraîche und einer Prise Meersalz nur kurz mit einer Gabel verquirlen.',
      'In einer beschichteten Pfanne bei milder bis mittlerer Hitze die Butter schmelzen lassen.',
      'Die Eiermasse hineingeben. Sobald der Boden leicht stockt, mit einem flexiblen Silikonschaber in ruhigen, langen Zügen von außen nach innen schieben.',
      'Das Rührei soll cremig, saftig und feucht bleiben („Baveuse“). Die Pfanne bereits vom Herd nehmen, wenn das Ei noch leicht flüssig glänzt.',
      'Die Brotscheiben parallel goldgelb toasten oder in etwas Butter anrösten.',
      'Das seidige Rührei auf dem warmen Brot platzieren, mit feinstem Schnittlauch bestreuen und den Sommertrüffel mit dem Hobel hauchdünn direkt auf das noch dampfende Ei gleiten lassen.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'poached-egg',
    category: 'egg',
    categoryLabel: 'Eierspeise & Gourmet',
    title: 'Pochiertes Bio-Ei auf feiner weißer Trüffel-Polenta',
    subtitle: 'Flüssiger Eidotter trifft auf seidigen Maisschmelz',
    timePrep: '15 Min.',
    timeCook: '15 Min.',
    difficulty: 'Mittel',
    truffleAmount: '8–10g pro Person (ca. 35g gesamt)',
    servings: '4 Personen',
    description: 'Weiche weiße Polenta, verfeinert mit Mascarpone und Parmesan, gekrönt von einem perfekt pochierten Ei mit flüssigem Kern und üppigen Trüffelhobeln.',
    proTip: 'Geben Sie beim Pochieren der Eier einen Schuss hellen Essig ins sanft siedende Wasser und erzeugen Sie mit dem Schneebesen einen Strudel, bevor Sie das Ei hineingleiten lassen.',
    ingredients: [
      '4 sehr frische Bio-Eier',
      '35g frischer Sommertrüffel',
      '150g weiße Polenta (Maisgrieß)',
      '600ml Gemüsebrühe oder Milch-Wasser-Gemisch',
      '50g Mascarpone oder kalte Butter',
      '40g Parmigiano Reggiano fein gerieben',
      '1 EL heller Essig (für das Pochierwasser), Fleur de Sel'
    ],
    steps: [
      'Brühe aufkochen, Polenta unter ständigem Rühren einrieseln lassen und bei kleinster Hitze ca. 12 Minuten quellen lassen.',
      'Mascarpone und Parmesan unter die heiße Polenta rühren, mit Salz abschmecken. Warm halten.',
      'In einem weiten Topf Wasser mit 1 EL Essig zum Sieden bringen (nicht kochen). Einen Strudel erzeugen, die Eier einzeln in Tassen aufschlagen und nacheinander 3 Minuten pochieren.',
      'Polenta in tiefe Teller schöpfen, in die Mitte eine Mulde drücken und je ein pochiertes Ei hineinsetzen.',
      'Das Ei mit Fleur de Sel bestreuen und den Sommertrüffel großzügig in feinen Spänen darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'frittata',
    category: 'egg',
    categoryLabel: 'Ofen & Brunch',
    title: 'Sommertrüffel-Frittata mit grünem Spargel & Ricotta',
    subtitle: 'Saisonaler Frühlings- und Sommergenuss',
    timePrep: '15 Min.',
    timeCook: '15 Min.',
    difficulty: 'Einfach',
    truffleAmount: '8g pro Person (ca. 30g gesamt)',
    servings: '4 Personen',
    description: 'Grüner Spargel hat im Mai und Juni gleichzeitig mit den ersten Sommertrüffeln Saison. Diese Frittata aus der Pfanne ist saftig, leicht und elegant.',
    proTip: 'Die Spargelspitzen nur kurz anbraten, damit sie ihren knackigen Biss behalten. Den Sommertrüffel erst nach dem Backen über die warme Frittata hobeln!',
    ingredients: [
      '6 Eier',
      '30g frischer Sommertrüffel',
      '200g junger grüner Spargel (unteres Drittel geschält, in Stücke geschnitten)',
      '100g Ricotta',
      '2 EL Olivenöl',
      'Frischer Estragon oder Petersilie, Salz & Pfeffer'
    ],
    steps: [
      'Spargelstücke in einer ofenfesten Pfanne mit Olivenöl 3 Minuten anbraten.',
      'Eier mit Salz, Pfeffer und gehackten Kräutern verquirlen und über den Spargel gießen.',
      'Ricotta in kleinen Nocken mit einem Teelöffel auf der Eiermasse verteilen.',
      'Bei geringer Hitze 5 Minuten stocken lassen, dann im vorgeheizten Ofen bei 180 °C Oberhitze 6–8 Minuten goldgelb backen.',
      'Aus dem Ofen nehmen, in Tortenstücke schneiden und den Sommertrüffel frisch darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'tagliata',
    category: 'meat',
    categoryLabel: 'Fleisch & Grill',
    title: 'Tagliata di Manzo mit Sommertrüffel & Grana',
    subtitle: 'Rosa gebratenes Rinderfilet mit nussigen Trüffelhobeln',
    timePrep: '10 Min.',
    timeCook: '10 Min.',
    difficulty: 'Einfach',
    truffleAmount: '8–10g pro Person (ca. 35g gesamt)',
    servings: '4 Personen',
    description: 'Kräftige Röstaromen von gegrilltem oder scharf angebratenem Rindfleisch treffen auf den sanften, feinen Schmelz von gehobeltem Sommertrüffel und gereiftem Käse.',
    proTip: 'Das Fleisch vor dem Aufschneiden unbedingt 5–7 Minuten auf einem warmen Holzbrett ruhen lassen. Wenn der Fleischsaft nicht ausläuft, bleibt die Oberfläche trocken und die Trüffelspäne saugen sich nicht mit rotem Saft voll.',
    ingredients: [
      '700g Rinderfilet oder Entrecôte am Stück (gut abgehangen)',
      '35g frischer Sommertrüffel (Tuber aestivum)',
      '60g junger Rucola (gewaschen und trocken geschleudert)',
      '40g Parmigiano Reggiano in dünnen Spänen',
      '3 EL toskanisches Olivenöl Extra Vergine',
      'Grobe Meersalzflocken (Maldon) und grober schwarzer Pfeffer'
    ],
    steps: [
      'Das Rindfleisch 1 Stunde vor der Zubereitung auf Raumtemperatur temperieren lassen. Trocken tupfen.',
      'Eine schwere Gusseisenpfanne oder den Grill auf maximale Temperatur vorheizen. Das Fleisch mit hitzebeständigem Öl einreiben.',
      'Das Filet von allen Seiten je ca. 2,5 bis 3 Minuten scharf anbraten, bis eine aromatische braune Kruste entsteht.',
      'Fleisch aus der Pfanne nehmen, auf ein Schneidebrett legen und 6 Minuten lose abgedeckt ruhen lassen.',
      'Den Rucola als Bett auf einer großen Servierplatte anrichten.',
      'Das Steak quer zur Faser in ca. 1 cm dicke Tranchen schneiden und leicht fächerartig auf dem Rucola anrichten.',
      'Mit Meersalzflocken und Olivenöl beträufeln, Parmesanspäne verteilen und den frischen Sommertrüffel großzügig in feinsten Scheiben über das warme Fleisch hobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'veal-medallions',
    category: 'meat',
    categoryLabel: 'Fleisch & Festessen',
    title: 'Zarte Kalbsmedaillons in milder Trüffel-Rahmsauce',
    subtitle: 'Klassische Haute Cuisine mit mildem Kalbfleisch',
    timePrep: '15 Min.',
    timeCook: '12 Min.',
    difficulty: 'Mittel',
    truffleAmount: '10–12g pro Person (ca. 45g gesamt)',
    servings: '4 Personen',
    description: 'Kalbfleisch hat einen feinen, unaufdringlichen Geschmack, der den Sommertrüffel nicht übertönt. Eine sämige Reduktion aus hellem Kalbsfond und Sahne bindet den Geschmack ideal.',
    proTip: 'Verwenden Sie weißen Pfeffer statt schwarzem Pfeffer, um die Sauce optisch makellos hell zu halten und keine scharfen Brandnoten zu erzeugen.',
    ingredients: [
      '8 Kalbsmedaillons (aus dem Filet oder Rücken, je ca. 80g)',
      '45g frischer Sommertrüffel',
      '150ml heller Kalbs- oder Geflügelfond',
      '120ml Crème double oder Schlagsahne',
      '1 Schalotte fein gehackt',
      '30g Butter und 1 EL Pflanzenöl',
      'Fleur de Sel, weißer Pfeffer'
    ],
    steps: [
      'Kalbsmedaillons salzen. In einer Pfanne Öl und Butter erhitzen, die Medaillons von jeder Seite 2–3 Minuten rosa braten. Herausnehmen und warm halten.',
      'Im Bratensatz die gehackte Schalotte farblos anschwitzen.',
      'Mit dem Fond ablöschen und auf die Hälfte einkochen lassen.',
      'Die Sahne zugeben und bei milder Hitze zu einer samtigen Sauce einköcheln.',
      'Ein Viertel des Trüffels fein in die heiße Sauce reiben, Pfanne vom Herd ziehen.',
      'Medaillons auf Tellern anrichten, mit der Sauce umgießen und den restlichen Sommertrüffel hauchdünn darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'carpaccio',
    category: 'starter',
    categoryLabel: 'Klassische Vorspeise',
    title: 'Rinder-Carpaccio mit Sommertrüffel & Fleur de Sel',
    subtitle: 'Der puristische Genuss der venezianischen Küche',
    timePrep: '15 Min.',
    timeCook: '0 Min.',
    difficulty: 'Einfach',
    truffleAmount: '6–8g pro Person (ca. 25g gesamt)',
    servings: '4 Personen',
    description: 'Hauchdünne Scheiben von rohem Rinderfilet, benetzt mit feinstem Olivenöl und knusprigen Meersalzflocken, vollendet durch Späne des Tuber aestivum.',
    proTip: 'Das Rinderfilet vor dem Schneiden für 45 Minuten ins Gefrierfach legen. Leicht angefroren lässt es sich mit einem scharfen Kochmesser mühelos hauchdünn aufschneiden.',
    ingredients: [
      '300g feinstes Rinderfilet (Mittelstück)',
      '25g frischer Sommertrüffel',
      '4 EL fruchtiges Olivenöl Extra Vergine',
      '1 TL frischer Zitronensaft',
      '30g geröstete Pinienkerne',
      '30g Rucolablätter, Fleur de Sel'
    ],
    steps: [
      'Das angefrorene Rinderfilet mit einem sehr scharfen Messer in hauchdünne Scheiben schneiden.',
      'Die Scheiben zwischen zwei Lagen Frischhaltefolie mit einem Plattiereisen oder dem Boden eines Topfes ganz sanft flach streichen.',
      'Teller mit etwas Olivenöl ausstreichen und das Fleisch kreisförmig überlappend anrichten.',
      'Mit Zitronensaft, restlichem Olivenöl, Fleur de Sel und Pinienkernen garnieren.',
      'Den Sommertrüffel hauchfein flächig über das Fleisch hobeln und sofort servieren.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'burrata-starter',
    category: 'starter',
    categoryLabel: 'Vorspeise & Antipasti',
    title: 'Cremige Burrata mit Sommertrüffel auf Sauerteigbrot',
    subtitle: 'Purer Schmelz mit knuspriger Textur',
    timePrep: '10 Min.',
    timeCook: '5 Min.',
    difficulty: 'Einfach',
    truffleAmount: '8g pro Person (ca. 30g gesamt)',
    servings: '4 Personen',
    description: 'Die flüssig-cremige Stracciatella-Füllung der apulischen Burrata ist ein idealer Fett- und Geschmacksträger für das Aroma des Sommertrüffels.',
    proTip: 'Die Burrata 30 Minuten vor dem Servieren aus dem Kühlschrank nehmen. Kalt verliert sie ihren Schmelz und betäubt die Trüffelnuancen.',
    ingredients: [
      '2 frische Kugeln Burrata (je ca. 150g)',
      '30g frischer Sommertrüffel',
      '4 dicke Scheiben handwerkliches Sauerteig-Holzofenbrot',
      '3 EL bestes ligurisches Olivenöl',
      'Fleur de Sel und frisch gemahlener Pfeffer'
    ],
    steps: [
      'Die Brotscheiben in einer Grillpfanne oder im Ofen mit etwas Olivenöl von beiden Seiten knusprig rösten.',
      'Die Burrata-Kugeln halbieren oder leicht aufbrechen, sodass das cremige Innere austritt.',
      'Je eine Portion Burrata auf die warmen Brotscheiben setzen.',
      'Mit etwas Olivenöl und Fleur de Sel beträufeln.',
      'Den Sommertrüffel mit dem Hobel direkt über die offene Burrata hobeln und sofort noch lauwarm servieren.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'puree',
    category: 'starter',
    categoryLabel: 'Gourmet-Beilage',
    title: 'Samtiges Kartoffel-Trüffelpüree (Robuchon-Art)',
    subtitle: 'Die legendäre französische Püreekunst',
    timePrep: '20 Min.',
    timeCook: '25 Min.',
    difficulty: 'Mittel',
    truffleAmount: '8–10g pro Person (ca. 35g gesamt)',
    servings: '4 Personen',
    description: 'Ultra-cremiges, durch ein feines Sieb gestrichenes Kartoffelpüree mit hohem Butteranteil. Die ideale Beilage zu feinem Fleisch oder solo als vegetarischer Gourmetgang.',
    proTip: 'Kartoffeln mit Schale kochen, noch dampfend heiß pellen und zweimal durch die feine Kartoffelpresse drücken. Niemals den Pürierstab verwenden (macht das Püree klebrig)!',
    ingredients: [
      '800g mehligkochende Kartoffeln (z. B. Bintje oder Russet)',
      '35g frischer Sommertrüffel',
      '180g kalte Bio-Butter (in Würfeln)',
      '150ml heiße Vollmilch',
      'Muskatnuss frisch gerieben, Meersalz'
    ],
    steps: [
      'Kartoffeln gründlich waschen und in der Schale in Salzwasser ca. 25 Minuten weich kochen.',
      'Noch heiß pellen und sofort durch eine feine Kartoffelpresse drücken.',
      'Die Kartoffelmasse in einen Topf geben und bei schwacher Hitze 2 Minuten mit dem Spatel rühren, um Restfeuchtigkeit zu verdampfen.',
      'Nach und nach die eiskalten Butterwürfel mit dem Schneebesen kräftig unterschlagen.',
      'Die kochend heiße Milch in einem dünnen Strahl unterrühren, bis ein glänzendes, seidiges Püree entsteht. Mit Salz und einer Prise Muskat abschmecken.',
      'In vorgewärmten Schalen anrichten und den Sommertrüffel mit dem Präzisionshobel großzügig darüberhobeln.'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  },
  {
    id: 'truffle-butter',
    category: 'basic',
    categoryLabel: 'Grundrezept & Vorrat',
    title: 'Echte Sommertrüffel-Butter zum Einfrieren',
    subtitle: 'Die beste Methode, frische Sommertrüffel monatelang haltbar zu machen',
    timePrep: '15 Min.',
    timeCook: '0 Min.',
    difficulty: 'Einfach',
    truffleAmount: '25–30g auf 250g Butter',
    servings: 'Ca. 280g Vorrat',
    description: 'Ganze frische Trüffel verlieren im Gefrierfach ihre Textur. Gerieben in frischer Fassbutter hingegen werden alle ätherischen Aromen konserviert. Perfekt als Vorrat, um Steaks, Saucen und Pasta das ganze Jahr über zu veredeln.',
    proTip: 'Verwenden Sie nur ungesalzene Rohmilch- oder Sauerrahmfassbutter mit mindestens 82% Fettgehalt. Wasserarme Qualitätsbutter schützt vor Gefrierbrand und bindet den Trüffelgeschmack am reinsten.',
    ingredients: [
      '250g hochwertige Bio-Fassbutter (zimmerwarm und weich)',
      '30g frischer Sommertrüffel (trocken gebürstet)',
      '1 TL feines Meersalz (oder Fleur de Sel)',
      'Optional: 1 TL mildes, naturbelassenes Trüffel-Olivenöl zur Abrundung'
    ],
    steps: [
      'Die Butter mindestens 2 Stunden vor der Zubereitung aus dem Kühlschrank nehmen, damit sie streichzart und homogen formbar ist.',
      'Den frischen Sommertrüffel mit einer sehr feinen Küchenreibe (Microplane) oder der feinsten Hobelstufe komplett reiben.',
      'Die weiche Butter in einer Rührschüssel mit dem Schneebesen oder Handrührgerät 2 Minuten cremig und luftig aufschlagen.',
      'Die geriebenen Trüffelspäne, das Meersalz und optional das Trüffelöl mit einer Spatel behutsam und gleichmäßig unterheben.',
      'Die Trüffelbutter auf ein Blatt Backpapier setzen und mithilfe eines Lineals oder Bretts zu einer gleichmäßigen Rolle (ca. 4–5 cm Durchmesser) formen.',
      'Die Enden wie ein Bonbon fest eindrehen und für 2 Stunden im Kühlschrank fest werden lassen.',
      'In ca. 1,5 cm dicke Taler schneiden, in einer Gefrierdose trennen und einfrieren. Einzelne Taler können später direkt auf heißes Fleisch oder Pasta gelegt werden!'
    ],
    truffleLink: 'https://link.amazon/B05QEFNwM',
    hobelLink: 'https://link.amazon/B017XN3U6'
  }
];

export const RecipeSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((r) => {
      const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
      const matchesSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="rezepte" className="py-16 sm:py-24 bg-[#faf9f6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold mb-3">
            <ChefHat className="w-3.5 h-3.5 text-amber-700" />
            Umfassende Rezept-Bibliothek ({RECIPES.length} Gourmet-Rezepte)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Sommertrüffel Rezepte: Von der Pasta bis zum Festtagsmenü
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Entdecken Sie klassische und moderne Zubereitungsideen für <em>Tuber aestivum</em>. Authentisch, mykologisch fundiert und mit genauen Grammangaben für 100 % Geling-Sicherheit.
          </p>
        </div>

        {/* Recipe Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rezept oder Zutat suchen (z. B. Tagliolini, Ei, Risotto, Butter)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-700 absolute right-3 top-1/2 -translate-y-1/2 font-bold px-1.5 py-0.5 rounded bg-slate-200"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Stats */}
            <div className="md:col-span-6 flex items-center justify-end text-xs text-slate-600 font-semibold gap-4">
              <span>Gefundene Rezepte: <strong className="text-slate-950">{filteredRecipes.length}</strong></span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span className="hidden sm:inline text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                100 % Echte Sommertrüffel-Dosierung
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Alle ({RECIPES.length})
            </button>
            <button
              onClick={() => setActiveCategory('pasta')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === 'pasta'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Pasta, Gnocchi & Risotto (5)
            </button>
            <button
              onClick={() => setActiveCategory('egg')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === 'egg'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Eierspeisen & Brunch (3)
            </button>
            <button
              onClick={() => setActiveCategory('meat')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === 'meat'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Fleisch & Tagliata (2)
            </button>
            <button
              onClick={() => setActiveCategory('starter')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === 'starter'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Vorspeisen & Püree (3)
            </button>
            <button
              onClick={() => setActiveCategory('basic')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === 'basic'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Trüffelbutter & Vorrat (1)
            </button>
          </div>
        </div>

        {/* Detailed Recipe Cards */}
        {filteredRecipes.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center my-8">
            <p className="text-base font-bold text-slate-800">Keine Rezepte für Ihren Suchbegriff gefunden.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
            >
              Alle Rezepte anzeigen
            </button>
          </div>
        ) : (
          <div className="space-y-8 mb-16">
            {filteredRecipes.map((recipe) => (
              <article
                key={recipe.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Recipe Header Card */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-extrabold">
                        {recipe.categoryLabel}
                      </span>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        Schwierigkeit: {recipe.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        Vorbereitung: {recipe.timePrep}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-emerald-600" />
                        Garzeit: {recipe.timeCook}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-1">
                    {recipe.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-3">
                    {recipe.subtitle}
                  </p>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6">
                    {recipe.description}
                  </p>

                  {/* Highlights Metric Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Empfohlene Trüffelmenge:</span>
                      <strong className="text-slate-900 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                        {recipe.truffleAmount}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Portionen / Ausbeute:</span>
                      <strong className="text-slate-900 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                        {recipe.servings}
                      </strong>
                    </div>
                  </div>

                  {/* Pro-Tip Box */}
                  <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-3 mb-6">
                    <Sparkles className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-extrabold block mb-0.5">Küchenchef-Geheimtipp:</strong>
                      {recipe.proTip}
                    </div>
                  </div>

                  {/* Ingredients & Steps Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-slate-100">
                    
                    {/* Ingredients Column */}
                    <div className="lg:col-span-5 space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                        Zutatenliste für {recipe.servings}
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {recipe.ingredients.map((ing, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 bg-slate-50/70 p-2 rounded-lg border border-slate-100">
                            <span className="text-amber-600 font-bold mt-0.5">•</span>
                            <span className="leading-snug">{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step-by-Step Instructions */}
                    <div className="lg:col-span-7 space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                        <Utensils className="w-3.5 h-3.5 text-emerald-700" />
                        Schritt-für-Schritt Zubereitung
                      </h4>
                      <ol className="space-y-3 text-xs text-slate-700">
                        {recipe.steps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center text-[11px]">
                              {sIdx + 1}
                            </span>
                            <span className="leading-relaxed pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                  </div>

                </div>

                {/* Recipe Footer: Direct Amazon Conversion CTAs */}
                <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    Frischeknollen via Express-Kühlakku • Passender Edelstahl-Hobel stufenlos justierbar
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <a
                      href={AFFILIATE_LINKS.sommertrueffelFrisch}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-sm border border-amber-600/30 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Trüffel bei Amazon *</span>
                    </a>

                    <a
                      href={AFFILIATE_LINKS.trueffelhobel}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl border border-slate-300 transition-all"
                    >
                      <Utensils className="w-3.5 h-3.5 text-slate-600" />
                      <span>Passenden Hobel ansehen *</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* SEO Knowledge Hub: Die 5 goldenen Regeln & Dosierungstabelle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Die 5 goldenen Regeln */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <h3 className="text-lg font-extrabold text-slate-950">
                Die 5 goldenen Regeln beim Kochen mit Sommertrüffeln
              </h3>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Niemals kochen oder stark braten:</strong>
                  Sommertrüffel (<em>Tuber aestivum</em>) besitzt extrem flüchtige Duftkomponenten. Übersteigt die Temperatur 50–60 °C, zerfallen die Ester in Sekunden. Immer erst am Tisch über das warme Gericht hobeln.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Fett als unverzichtbarer Aromaträger:</strong>
                  Trüffelaromen sind lipophil (fettlöslich). Süßrahmbutter, Eigelb, gereifter Parmesan oder kaltgepresstes Olivenöl binden die Moleküle und transportieren sie an den Gaumen.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Die Knolle niemals schälen:</strong>
                  Die schwarze, pyramidisch gekörnte Rinde (Peridium) gehört unbedingt dazu. Sie liefert knackigen Biss, schützt das Fruchtfleisch und enthält charakteristische erdige Noten.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Rasierklingenscharfer Trüffelhobel:</strong>
                  Ein stumpfes Messer zerdrückt das poröse Gewebe und lässt wertvollen Saft auf dem Brett zurück. Nur ein scharfer Hobel schneidet gleichmäßige Scheiben von 0,2 bis 0,4 mm Dicke.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Kombinationen bewusst schlicht halten:</strong>
                  Vermeiden Sie laute Geschmäcker wie scharfe Chilis, rohen Knoblauch, Essig oder schwere Tomatensaucen. Sommertrüffel benötigt sanfte Begleiter wie Nudeln, Risotto, Kartoffeln oder Kalbfleisch.
                </div>
              </div>
            </div>
          </div>

          {/* Dosierungstabelle Cheat Sheet */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Scale className="w-5 h-5 text-emerald-700" />
              <h3 className="text-lg font-extrabold text-slate-950">
                Dosierungstabelle (Gramm pro Person)
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900">Tagliolini & frische Pasta</span>
                <span className="font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  12 – 15 g
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900">Cremiges Risotto</span>
                <span className="font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  15 – 18 g
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900">Rührei / Omelett / Eierspeise</span>
                <span className="font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  8 – 10 g
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900">Rinderfilet / Tagliata</span>
                <span className="font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  8 – 10 g
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900">Carpaccio & kalte Vorspeise</span>
                <span className="font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  6 – 8 g
                </span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900">Trüffelbutter (pro 250g Butter)</span>
                <span className="font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                  25 – 30 g
                </span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 italic">
              * Richtwerte für frische Sommertrüffel (Tuber aestivum). Da Sommertrüffel milder sind als Périgord-Trüffel, liegt die optimale Grammatur ca. 30–50 % über der von Wintertrüffeln.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
