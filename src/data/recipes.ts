import { AFFILIATE_LINKS } from '../config/affiliate';

export interface RecipeData {
  id: string;
  slug: string;
  category: 'pasta' | 'egg' | 'meat' | 'starter' | 'basic';
  categoryLabel: string;
  title: string;
  subtitle: string;
  timePrep: string;
  timeCook: string;
  totalTimeMinutes: number;
  difficulty: 'Einfach' | 'Mittel';
  truffleAmount: string;
  servings: string;
  servingsCount: number;
  description: string;
  proTip: string;
  ingredients: string[];
  steps: { name: string; text: string }[];
  bfrSafetyNote?: {
    riskIngredient: string;
    warning: string;
    safeAlternative: string;
  };
  nutrition: {
    calories: string;
    carbohydrateContent: string;
    proteinContent: string;
    fatContent: string;
    servingSize: string;
  };
  keywords: string[];
  image: string;
  truffleSearchLink: string;
  hobelSearchLink: string;
}

export const RECIPES: RecipeData[] = [
  {
    id: 'tagliolini',
    slug: 'original-tagliolini-al-tartufo',
    category: 'pasta',
    categoryLabel: 'Pasta & Risotto',
    title: 'Tagliolini al Tartufo Estivo (Originale)',
    subtitle: 'Italienische Traditions-Pasta in geschwenkter Süßrahmbutter',
    timePrep: '10 Min.',
    timeCook: '5 Min.',
    totalTimeMinutes: 15,
    difficulty: 'Einfach',
    truffleAmount: '12–15g pro Person (ca. 50g gesamt)',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Frische Eier-Tagliolini, geschwenkt in schmelzender Süßrahmbutter und stärkehaltigem Pastawasser. Beim Schwenken entsteht eine natürliche, cremige Emulsion, die das nussige Aroma des Sommertrüffels perfekt bindet.',
    proTip: 'Verzichten Sie auf schwere Sahne! Das traditionelle italienische Geheimnis ist die „Mantecatura“: Heiße Nudeln mit etwas stärkehaltigem Pastawasser und kalten Butterflocken bei ausgeschalteter Herdplatte kräftig schwenken.',
    ingredients: [
      '400g frische Tagliolini oder Fettuccine (aus Hartweizengrieß und Ei)',
      '50g frischer Sommertrüffel (Tuber aestivum)',
      '90g ungesalzene Süßrahmbutter (in kleinen Würfeln, kalt)',
      '50g Parmigiano Reggiano DOP (mind. 24 Monate gereift, feinst gerieben)',
      '1 Kelle stärkehaltiges Nudelkochwasser',
      'Feines Meersalz und etwas frisch gemahlener weißer Pfeffer'
    ],
    steps: [
      {
        name: 'Pastawasser aufsetzen & Tagliolini kochen',
        text: 'Einen großen Topf mit Wasser zum Kochen bringen und maßvoll salzen. Frische Tagliolini hineingeben und 2 bis 3 Minuten al dente kochen.'
      },
      {
        name: 'Butter sanft anwärmen',
        text: 'In einer großen Pfanne etwa 30g der Butter bei minimaler Hitze sanft schmelzen lassen – die Butter darf nicht zischen oder bräunen. Ein Viertel des Trüffels hineinhobeln, damit die fettlöslichen Aromastoffe sich entfalten.'
      },
      {
        name: 'Pasta mit Kochwasser verbinden',
        text: 'Die Tagliolini tropfnass mit der Pastazange in die Pfanne heben. Eine halbe Kelle heißes Pastawasser und die restlichen kalten Butterflocken zufügen.'
      },
      {
        name: 'Mantecatura mit Parmesan montieren',
        text: 'Pfanne sofort vom Herd nehmen. Den fein geriebenen Parmesan einstreuen und die Pfanne kräftig schwenken, bis eine glänzende, samtige Emulsion entsteht.'
      },
      {
        name: 'Sommertrüffel am Tisch hobeln',
        text: 'Die Pasta auf vorgewärmten Tellern anrichten und den restlichen frischen Sommertrüffel mit einem Trüffelhobel hauchfein direkt am Tisch darüberhobeln.'
      }
    ],
    nutrition: {
      calories: '520 kcal',
      carbohydrateContent: '64 g',
      proteinContent: '14 g',
      fatContent: '22 g',
      servingSize: '1 Portion (ca. 140g)'
    },
    keywords: ['Sommertrüffel Pasta', 'Tagliolini al Tartufo Estivo', 'Trüffelpasta Rezept', 'Tuber aestivum Zubereitung'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffel50g,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'risotto',
    slug: 'cremiges-risotto-al-tartufo-estivo',
    category: 'pasta',
    categoryLabel: 'Pasta & Risotto',
    title: 'Cremiges Risotto al Tartufo Estivo',
    subtitle: 'Norditalienische Risottokunst mit Carnaroli-Reis und frischem Sommertrüffel',
    timePrep: '15 Min.',
    timeCook: '20 Min.',
    totalTimeMinutes: 35,
    difficulty: 'Mittel',
    truffleAmount: '15–18g pro Person (ca. 60g gesamt)',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Reiskörner mit zartem Schmelz und festem Kern. Die milde Wärme des frisch gerührten Risottos lässt die dezenten Wald- und Haselnussnoten des Sommertrüffels optimal aufsteigen.',
    proTip: 'Achten Sie beim Risotto auf die sogenannte „Mantecatura“: Am Ende der Garzeit den Topf von der Hitze nehmen, eiskalte Butter und Parmesan kräftig unterschlagen und 2 Minuten ruhen lassen.',
    ingredients: [
      '320g Carnaroli- oder Vialone Nano Risottoreis',
      '60g frischer Sommertrüffel (Tuber aestivum)',
      '1 kleine Schalotte (sehr fein gewürfelt)',
      '80ml trockener, säurearmer Weißwein (z. B. Weißburgunder oder Soave)',
      '1,2 Liter milder Gemüse- oder heller Geflügelfond (heiß gehalten)',
      '70g kalte Butter',
      '50g frisch geriebener Grana Padano Riserva oder Parmigiano',
      '1 EL mildes Olivenöl, Meersalz'
    ],
    steps: [
      {
        name: 'Fond vorbereiten & heiß halten',
        text: 'Den Fond in einem separaten Topf sanft sieden lassen. Er muss während des gesamten Kochvorgangs heiß zugegossen werden.'
      },
      {
        name: 'Schalotten dünsten & Reis anrösten',
        text: 'In einem schweren Topf 1 EL Olivenöl und 20g Butter erhitzen. Die feinen Schalotten glasig dünsten, den Reis dazugeben und 2 Minuten unter Rühren anrösten („Tostatura“).'
      },
      {
        name: 'Mit Weißwein ablöschen',
        text: 'Mit dem Weißwein ablöschen und vollständig unter Rühren einkochen lassen, bis der Alkoholgeruch verflogen ist.'
      },
      {
        name: 'Schöpfkellenweise Fond zugeben',
        text: 'Schöpfkellenweise den heißen Fond zugießen. Erst nachgießen, wenn die vorherige Flüssigkeit weitgehend aufgenommen wurde (ca. 16–18 Minuten rühren).'
      },
      {
        name: 'Mantecatura & Sommertrüffel servieren',
        text: 'Vom Herd nehmen. Die eiskalte restliche Butter und den Käse unterschlagen, flach auf Tellern anrichten und den Sommertrüffel hauchfein darüberhobeln.'
      }
    ],
    nutrition: {
      calories: '485 kcal',
      carbohydrateContent: '60 g',
      proteinContent: '11 g',
      fatContent: '19 g',
      servingSize: '1 Portion (ca. 220g)'
    },
    keywords: ['Sommertrüffel Risotto', 'Risotto al Tartufo', 'Carnaroli Trüffel', 'Mantecatura Rezept'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'gnocchi',
    slug: 'kartoffel-gnocchi-trueffelbutter',
    category: 'pasta',
    categoryLabel: 'Pasta & Risotto',
    title: 'Kartoffel-Gnocchi in nussiger Sommertrüffel-Butter',
    subtitle: 'Fluffige Kartoffelkissen in sanft aufgeschäumter Butter',
    timePrep: '20 Min.',
    timeCook: '10 Min.',
    totalTimeMinutes: 30,
    difficulty: 'Mittel',
    truffleAmount: '10–12g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Zarte Gnocchi verbinden sich mit geschmolzener Trüffelbutter und frischem Sommertrüffel zu einem herrlich bodenständigen Gourmetgericht.',
    proTip: 'Die Butter nur sanft schmelzen und keinesfalls bräunen oder stark erhitzen, damit die feinen Aromen erhalten bleiben.',
    ingredients: [
      '500g frische Kartoffel-Gnocchi (oder selbstgemacht)',
      '45g frischer Sommertrüffel',
      '80g Süßrahmbutter',
      '40g Pecorino Romano oder Parmesan (fein gerieben)',
      'Meersalz und frisch geriebene Muskatnuss'
    ],
    steps: [
      {
        name: 'Gnocchi sieden',
        text: 'Gnocchi in reichlich kochendes Salzwasser geben. Sobald sie an die Oberfläche steigen, sofort mit der Schaumkelle entnehmen.'
      },
      {
        name: 'Butter sanft aufschäumen',
        text: 'Butter in einer Pfanne bei geringer Hitze schmelzen. Einen Hauch Trüffel hineinreiben.'
      },
      {
        name: 'Gnocchi schwenken & Trüffel hobeln',
        text: 'Gnocchi in die Pfanne geben, vorsichtig durchschwenken, anrichten und mit frischem Sommertrüffel und Pecorino vollenden.'
      }
    ],
    nutrition: {
      calories: '430 kcal',
      carbohydrateContent: '52 g',
      proteinContent: '9 g',
      fatContent: '21 g',
      servingSize: '1 Portion'
    },
    keywords: ['Gnocchi Trüffel', 'Kartoffelgnocchi Sommertrüffel', 'Trüffelbutter Gnocchi'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'fettuccine',
    slug: 'fettuccine-trueffel-haselnuss',
    category: 'pasta',
    categoryLabel: 'Pasta & Risotto',
    title: 'Fettuccine mit Sommertrüffel & gerösteten Haselnüssen',
    subtitle: 'Nussiges Doppelspiel mit gerösteten Piemont-Haselnüssen',
    timePrep: '15 Min.',
    timeCook: '8 Min.',
    totalTimeMinutes: 23,
    difficulty: 'Einfach',
    truffleAmount: '12g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Die natürliche Haselnussnote des Sommertrüffels wird durch zart geröstete Haselnusssplitter harmonisch unterstrichen.',
    proTip: 'Die Haselnüsse fettfrei in einer beschichteten Pfanne bei mittlerer Hitze anrösten, bis sie duften, und vor dem Streuen abkühlen lassen.',
    ingredients: [
      '400g Fettuccine',
      '50g frischer Sommertrüffel',
      '40g Haselnusskerne (grob gehackt und geröstet)',
      '80g Süßrahmbutter',
      'Parmigiano Reggiano, Salz, weißer Pfeffer'
    ],
    steps: [
      {
        name: 'Haselnüsse anrösten',
        text: 'Haselnüsse ohne Fett in einer Pfanne 3 Minuten anrösten und beiseitestellen.'
      },
      {
        name: 'Pasta kochen & in Butter schwenken',
        text: 'Fettuccine kochen, in sanft geschmolzener Butter und etwas Nudelwasser schwenken.'
      },
      {
        name: 'Vollenden & garnieren',
        text: 'Auf Tellern anrichten, mit Haselnüssen bestreuen und reichlich Sommertrüffel darüberhobeln.'
      }
    ],
    nutrition: {
      calories: '540 kcal',
      carbohydrateContent: '62 g',
      proteinContent: '13 g',
      fatContent: '26 g',
      servingSize: '1 Portion'
    },
    keywords: ['Fettuccine Trüffel', 'Trüffel Haselnuss Pasta', 'Sommertrüffel Nudeln'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'ravioli',
    slug: 'steinpilz-ricotta-ravioli-trueffel',
    category: 'pasta',
    categoryLabel: 'Pasta & Risotto',
    title: 'Steinpilz-Ricotta-Ravioli unter Sommertrüffelschleier',
    subtitle: 'Kombination zweier erlesener Waldpilzaromen',
    timePrep: '25 Min.',
    timeCook: '6 Min.',
    totalTimeMinutes: 31,
    difficulty: 'Mittel',
    truffleAmount: '12g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Gefüllte Teigtaschen mit cremiger Ricotta-Pilzfüllung, vollendet mit hauchdünnen Sommertrüffel-Scheiben.',
    proTip: 'Eine Prise Zitronenabrieb in der Butter gibt der reichhaltigen Pilznote eine erfrischende Eleganz.',
    ingredients: [
      '400g frische Steinpilz-Ricotta-Ravioli',
      '50g frischer Sommertrüffel',
      '70g Butter',
      '1 Spritzer Zitronensaft',
      'Fleur de Sel'
    ],
    steps: [
      {
        name: 'Ravioli sanft garen',
        text: 'Ravioli in leicht siedendem Salzwasser 4 Minuten ziehen lassen.'
      },
      {
        name: 'Zitronenbutter emulgieren',
        text: 'Butter mit etwas Ravioli-Kochwasser und einem Spritzer Zitrone sanft aufschlagen.'
      },
      {
        name: 'Anrichten & hobeln',
        text: 'Ravioli in der Butter wenden, anrichten und mit frischem Sommertrüffel bedecken.'
      }
    ],
    nutrition: {
      calories: '490 kcal',
      carbohydrateContent: '55 g',
      proteinContent: '15 g',
      fatContent: '23 g',
      servingSize: '1 Portion'
    },
    keywords: ['Ravioli Trüffel', 'Steinpilz Ravioli Sommertrüffel', 'Sommertrüffel Pasta'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'ruehrei',
    slug: 'cremiges-trueffel-ruehrei-brioche',
    category: 'egg',
    categoryLabel: 'Eierspeisen & Brunch',
    title: 'Cremiges Trüffel-Rührei auf Brioche-Toast',
    subtitle: 'Der klassische Gourmet-Brunch mit aromatisierten Eiern',
    timePrep: '10 Min. (plus optional 24–48h Aroma-Ruhezeit der Eier)',
    timeCook: '6 Min.',
    totalTimeMinutes: 16,
    difficulty: 'Einfach',
    truffleAmount: '8–10g pro Person',
    servings: '2 Personen',
    servingsCount: 2,
    description: 'Durch die poröse Eierschale nimmt das Eidotter bereits vor dem Aufschlagen das Trüffelaroma auf. Bei sanfter Hitze cremig gerührt und auf warmem Brioche-Toast serviert.',
    proTip: 'Legen Sie die unversehrten Eier 24 bis 48 Stunden gemeinsam mit der frischen Trüffelknolle in ein verschlossenes Vorratsglas in den Kühlschrank. Das Fett im Eigelb bindet die Duftstoffe auf natürliche Weise.',
    bfrSafetyNote: {
      riskIngredient: 'Unvollständig durcherhitzte Eier (weiches / leicht flüssiges Rührei)',
      warning: 'Das Bundesinstitut für Risikobewertung (BfR) weist darauf hin, dass rohe oder unvollständig durcherhitzte Eierspeisen Salmonellen enthalten können. Schwangere, Kleinkinder, ältere Menschen und Personen mit geschwächtem Immunsystem sollten Eier stets vollständig durchgaren.',
      safeAlternative: 'Eierspeise vollständig durchstocken lassen, bis sowohl Eiklar als auch Eidotter komplett fest sind. Geschmacklich bleibt das Gericht dank des frisch gehobelten Trüffels und der Butter hervorragend aromatisch.'
    },
    ingredients: [
      '4 frische Bio-Eier (Größe L)',
      '20g frischer Sommertrüffel',
      '30g kalte Süßrahmbutter',
      '2 dicke Scheiben Brioche oder Bauernbrot',
      'Fleur de Sel, Schnittlauchröllchen'
    ],
    steps: [
      {
        name: 'Eier sanft verquirlen',
        text: 'Eier mit einer Prise Salz und 1 EL kaltem Wasser kurz verquirlen – nicht schaumig schlagen.'
      },
      {
        name: 'Bei niedriger Hitze rühren',
        text: 'Die Hälfte der Butter in einer kleinen Pfanne bei kleiner Flamme schmelzen. Eimasse hineingeben und mit einem Silikonschaber von außen nach innen stetig sanft schieben.'
      },
      {
        name: 'Garstufe wählen & montieren',
        text: 'Kurz vor der gewünschten Konsistenz Pfanne vom Herd nehmen und die restliche kalte Butter unterrühren. (Hinweis für Risikogruppen: vollständig durchstocken lassen).'
      },
      {
        name: 'Brioche toasten & Trüffel hobeln',
        text: 'Brioche goldbraun rösten, Rührei darauf betten und den Sommertrüffel frisch darüberhobeln.'
      }
    ],
    nutrition: {
      calories: '380 kcal',
      carbohydrateContent: '24 g',
      proteinContent: '16 g',
      fatContent: '25 g',
      servingSize: '1 Portion'
    },
    keywords: ['Trüffel Rührei', 'Sommertrüffel Frühstück', 'Rührei mit Trüffel', 'Brioche Trüffel'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffel25g,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'polenta',
    slug: 'pochiertes-bio-ei-trueffel-polenta',
    category: 'egg',
    categoryLabel: 'Eierspeisen & Brunch',
    title: 'Pochiertes Bio-Ei auf feiner Trüffel-Polenta',
    subtitle: 'Samtige Maispolenta mit warmem Dotter und Trüffelspänen',
    timePrep: '15 Min.',
    timeCook: '20 Min.',
    totalTimeMinutes: 35,
    difficulty: 'Mittel',
    truffleAmount: '8–10g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Cremig gerührte weiße oder gelbe Polenta bildet ein mildes Fundament für pochiertes Ei und frische Sommertrüffel.',
    proTip: 'Dem Pochierwasser einen Schuss hellen Essig zufügen und vor dem Hineingleitenlassen des Eies einen sanften Strudel erzeugen.',
    bfrSafetyNote: {
      riskIngredient: 'Pochiertes Ei mit flüssigem Dotterkern',
      warning: 'Flüssiger Eidotter birgt laut BfR ein Risiko für Lebensmittelinfektionen durch Salmonellen. Für empfindliche Personengruppen (Schwangere, Kinder, Senioren) nicht empfohlen.',
      safeAlternative: 'Das Ei mindestens 6–7 Minuten wachsweich oder fest kochen bzw. als durchgestocktes Spiegelei oder Rührei servieren.'
    },
    ingredients: [
      '4 frische Bio-Eier',
      '150g feiner Polentagrieß',
      '600ml Gemüsefond und 200ml Milch',
      '40g frischer Sommertrüffel',
      '50g Butter, 40g Parmesan'
    ],
    steps: [
      {
        name: 'Polenta cremig kochen',
        text: 'Fond und Milch aufkochen, Polenta einrieseln lassen und unter Rühren bei kleinster Hitze 15 Minuten quellen lassen. Butter und Parmesan unterrühren.'
      },
      {
        name: 'Eier pochieren',
        text: 'Wasser mit Essig erhitzen (nicht sprudelnd kochen). Eier einzeln hineingleiten lassen und ca. 3–4 Minuten pochieren (für Risikogruppen vollständig durchgaren).'
      },
      {
        name: 'Anrichten & hobeln',
        text: 'Polenta in Schalen verteilen, Ei mittig platzieren und Sommertrüffel großzügig darüberhobeln.'
      }
    ],
    nutrition: {
      calories: '395 kcal',
      carbohydrateContent: '36 g',
      proteinContent: '15 g',
      fatContent: '21 g',
      servingSize: '1 Portion'
    },
    keywords: ['Pochiertes Ei Trüffel', 'Trüffel Polenta', 'Polenta Sommertrüffel'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'frittata',
    slug: 'sommertrueffel-frittata-gruener-spargel',
    category: 'egg',
    categoryLabel: 'Eierspeisen & Brunch',
    title: 'Sommertrüffel-Frittata mit grünem Spargel & Ricotta',
    subtitle: 'Saisonaler Genuss für das späte Frühjahr und den Frühsommer',
    timePrep: '15 Min.',
    timeCook: '15 Min.',
    totalTimeMinutes: 30,
    difficulty: 'Einfach',
    truffleAmount: '8g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Im Ofen sanft gestockte Frittata mit knackigem grünem Spargel, cremigen Ricotta-Tupfen und frischem Sommertrüffel.',
    proTip: 'Dieses Rezept ist von Natur aus vollständig durchgegart und daher auch für gesundheitsbewusste Genießer und Schwangere bestens geeignet.',
    ingredients: [
      '6 Bio-Eier',
      '200g grüner Spargel (unteres Drittel geschält, in Stücke geschnitten)',
      '100g Ricotta',
      '35g frischer Sommertrüffel',
      '2 EL Olivenöl, Meersalz, Pfeffer'
    ],
    steps: [
      {
        name: 'Spargel anbraten',
        text: 'Spargelstücke in einer ofenfesten Pfanne mit 1 EL Olivenöl 4 Minuten bissfest anbraten.'
      },
      {
        name: 'Eimasse zugeben & backen',
        text: 'Eier mit Salz und Pfeffer verquirlen, über den Spargel gießen. Ricotta in Nocken daraufsetzen und im vorgeheizten Ofen bei 170 °C ca. 12 Minuten vollständig durchgaren.'
      },
      {
        name: 'Mit Trüffel veredeln',
        text: 'Warm oder lauwarm in Stücke schneiden und mit frischem Sommertrüffel bestreuen.'
      }
    ],
    nutrition: {
      calories: '280 kcal',
      carbohydrateContent: '6 g',
      proteinContent: '17 g',
      fatContent: '21 g',
      servingSize: '1 Portion'
    },
    keywords: ['Trüffel Frittata', 'Spargel Sommertrüffel', 'Frittata Ricotta Trüffel'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'tagliata',
    slug: 'tagliata-di-manzo-sommertrueffel',
    category: 'meat',
    categoryLabel: 'Fleisch & Hauptgänge',
    title: 'Tagliata di Manzo mit Sommertrüffel & Grana Padano',
    subtitle: 'Kurzgebratenes Rindfleisch auf Rucolabett mit feinstem Trüffel-Finish',
    timePrep: '15 Min.',
    timeCook: '10 Min.',
    totalTimeMinutes: 25,
    difficulty: 'Mittel',
    truffleAmount: '10–12g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Saftiges Rumpsteak oder Rinderfilet, tranchiert auf jungem Rucola, veredelt mit gutem Olivenöl, gehobeltem Parmesan und frischem Sommertrüffel.',
    proTip: 'Das Fleisch nach dem Braten unbedingt 5 Minuten in Alufolie ruhen lassen, damit sich der Fleischsaft setzt und beim Aufschneiden nicht ausläuft.',
    bfrSafetyNote: {
      riskIngredient: 'Rosa gebratenes bzw. medium-rare Rindfleisch',
      warning: 'Das BfR weist darauf hin, dass nicht vollständig durcherhitztes Fleisch Krankheitserreger wie Campylobacter oder Toxoplasma enthalten kann. Für Schwangere und immungeschwächte Personen wird empfohlen, Fleisch stets vollständig durchzugaren.',
      safeAlternative: 'Das Fleisch bis zu einer Kerntemperatur von mindestens 70 °C für mindestens 2 Minuten durchbraten. Mit frischem Trüffel und Olivenöl schmeckt auch durchgegartes Filet oder Tagliata aromatisch hervorragend.'
    },
    ingredients: [
      '600g Rumpsteak oder Rinderfilet (gut abgehangen)',
      '45g frischer Sommertrüffel',
      '100g wilder Rucola (gewaschen und getrocknet)',
      '40g Grana Padano Riserva in Spänen',
      '3 EL bestes natives Olivenöl Extra Vergine, grobes Meersalz'
    ],
    steps: [
      {
        name: 'Fleisch anbraten',
        text: 'Fleisch trocken tupfen, salzen und in einer schweren Pfanne in etwas Öl von beiden Seiten scharf anbraten (je ca. 2–3 Minuten). Auf die gewünschte Garstufe bringen (mind. 70 °C Kerntemperatur für Risikogruppen).'
      },
      {
        name: 'Ruhen lassen & tranchieren',
        text: 'Fleisch 5 Minuten abgedeckt ruhen lassen, anschließend schräg in ca. 1 cm dicke Tranchen schneiden.'
      },
      {
        name: 'Anrichten & Trüffel hobeln',
        text: 'Auf Rucolablättern anrichten, mit Olivenöl beträufeln, Parmesan und reichlich frischen Sommertrüffel darüberhobeln.'
      }
    ],
    nutrition: {
      calories: '420 kcal',
      carbohydrateContent: '2 g',
      proteinContent: '44 g',
      fatContent: '26 g',
      servingSize: '1 Portion'
    },
    keywords: ['Tagliata Sommertrüffel', 'Rindfleisch Trüffel', 'Tagliata di Manzo Rezept'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffel50g,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'kalb',
    slug: 'kalbsmedaillons-trueffel-rahmsauce',
    category: 'meat',
    categoryLabel: 'Fleisch & Hauptgänge',
    title: 'Zarte Kalbsmedaillons in milder Trüffel-Rahmsauce',
    subtitle: 'Klassiker der gehobenen Festtagsküche',
    timePrep: '15 Min.',
    timeCook: '15 Min.',
    totalTimeMinutes: 30,
    difficulty: 'Mittel',
    truffleAmount: '10g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Milde Kalbsfilet-Medaillons harmonieren besonders sanft mit dem feinen nussigen Bukett des Sommertrüffels in einer leichten Fond-Rahmsauce.',
    proTip: 'Den Bratensatz mit etwas Weißwein und Kalbsfond ablösen – das ergibt die aromatische Basis für die Sauce.',
    bfrSafetyNote: {
      riskIngredient: 'Kalbfleisch-Zubereitung',
      warning: 'Schwangere und Personen mit geschwächtem Immunsystem sollten darauf achten, dass auch Kalbfleisch vollständig durchgegart serviert wird.',
      safeAlternative: 'Die Medaillons nach dem Anbraten im Ofen bei 140 °C durchgaren, bis kein rosa Saft mehr austritt.'
    },
    ingredients: [
      '8 kleine Kalbsmedaillons (ca. 600g gesamt)',
      '40g frischer Sommertrüffel',
      '100ml weißer Kalbs- oder Geflügelfond',
      '80ml Sahne',
      '30g Butter, Salz, weißer Pfeffer'
    ],
    steps: [
      {
        name: 'Medaillons anbraten',
        text: 'Kalbsmedaillons in Butter von beiden Seiten je 2–3 Minuten anbraten, herausnehmen und warmhalten.'
      },
      {
        name: 'Sauce reduzieren',
        text: 'Bratensatz mit Fond ablöschen, Sahne zugeben und auf die Hälfte einkochen. Einen Teelöffel fein geriebenen Trüffel einrühren.'
      },
      {
        name: 'Medaillons vollenden',
        text: 'Medaillons kurz in der Sauce erwärmen, anrichten und mit frischen Trüffelspänen garnieren.'
      }
    ],
    nutrition: {
      calories: '450 kcal',
      carbohydrateContent: '3 g',
      proteinContent: '42 g',
      fatContent: '30 g',
      servingSize: '1 Portion'
    },
    keywords: ['Kalbsmedaillons Trüffel', 'Kalbfleisch Sommertrüffel', 'Trüffelsauce Fleisch'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'carpaccio',
    slug: 'rinder-carpaccio-sommertrueffel',
    category: 'starter',
    categoryLabel: 'Vorspeisen & Feines',
    title: 'Klassisches Rinder-Carpaccio mit Sommertrüffel',
    subtitle: 'Hauchfeine Rinderfiletscheiben mit Zitrone, Olivenöl und Trüffel',
    timePrep: '15 Min.',
    timeCook: '0 Min.',
    totalTimeMinutes: 15,
    difficulty: 'Einfach',
    truffleAmount: '6–8g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Der venezianische Klassiker: hauchdünn aufgeschnittenes rohes Rinderfilet, dezent mit bestem Olivenöl beträufelt und mit frischem Sommertrüffel veredelt.',
    proTip: 'Das Rinderfilet vor dem Schneiden für 45 Minuten ins Gefrierfach legen – so lässt es sich mit einem scharfen Messer hauchfein schneiden.',
    bfrSafetyNote: {
      riskIngredient: 'Rohes Rindfleisch (Carpaccio)',
      warning: 'Das BfR weist ausdrücklich darauf hin: Rohes Fleisch kann Krankheitserreger wie Salmonellen, Campylobacter oder Toxoplasma gondii übertragen. Schwangere, Kleinkinder und Personen mit geschwächter Immunabwehr sollten grundsätzlich auf rohes Fleisch verzichten.',
      safeAlternative: 'Gegartes Carpaccio-Erlebnis: Verwenden Sie dünn aufgeschnittenes gegrilltes Gemüse (Zucchini, Aubergine), gegarten Seesaibling oder kurz durchgebratene Roastbeef-Streifen als sichere und aromatische Grundlage.'
    },
    ingredients: [
      '300g frisches Rinderfilet (höchste Frischequalität)',
      '30g frischer Sommertrüffel',
      '3 EL natives Olivenöl Extra Vergine',
      '1 TL frischer Zitronensaft',
      '30g Parmigiano Reggiano Späne, Fleur de Sel, Pfeffer'
    ],
    steps: [
      {
        name: 'Filet dünn aufschneiden',
        text: 'Das leicht angefrorene Filet in hauchdünne Scheiben schneiden und flach zwischen Klarsichtfolie sanft plattieren.'
      },
      {
        name: 'Teller belegen & marinieren',
        text: 'Die Scheiben auf gekühlten Tellern fächerförmig auslegen. Mit Olivenöl und wenigen Tropfen Zitronensaft beträufeln, leicht salzen.'
      },
      {
        name: 'Trüffel & Parmesan hobeln',
        text: 'Parmesan-Späne verteilen und den frischen Sommertrüffel hauchfein über das Fleisch hobeln.'
      }
    ],
    nutrition: {
      calories: '220 kcal',
      carbohydrateContent: '1 g',
      proteinContent: '22 g',
      fatContent: '14 g',
      servingSize: '1 Portion'
    },
    keywords: ['Rinder Carpaccio Trüffel', 'Carpaccio Sommertrüffel', 'Vorspeise Trüffel'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffel25g,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'burrata',
    slug: 'cremige-burrata-sommertrueffel-sauerteigbrot',
    category: 'starter',
    categoryLabel: 'Vorspeisen & Feines',
    title: 'Cremige Burrata mit Sommertrüffel auf Sauerteigbrot',
    subtitle: 'Apulische Käsekunst trifft knuspriges Röstbrot',
    timePrep: '10 Min.',
    timeCook: '5 Min.',
    totalTimeMinutes: 15,
    difficulty: 'Einfach',
    truffleAmount: '8g pro Person',
    servings: '2 Personen',
    servingsCount: 2,
    description: 'Die flüssig-cremige Stracciatella im Inneren der Burrata verbindet sich auf geröstetem Sauerteigbrot mit dem erdigen Trüffelaroma.',
    proTip: 'Die Burrata 30 Minuten vor dem Servieren aus dem Kühlschrank nehmen, damit sie Zimmertemperatur annimmt und ihren vollen Schmelz entfaltet.',
    ingredients: [
      '2 frische Burrata-Kugeln (je 125g)',
      '20g frischer Sommertrüffel',
      '2 dicke Scheiben handwerkliches Sauerteigbrot',
      '2 EL Olivenöl Extra Vergine, Fleur de Sel'
    ],
    steps: [
      {
        name: 'Brot rösten',
        text: 'Sauerteigbrot in der Grillpfanne mit etwas Olivenöl goldbraun und knusprig anrösten.'
      },
      {
        name: 'Burrata öffnen',
        text: 'Burrata mittig auf dem warmen Brot platzieren und mit den Fingern oder einer Gabel sanft aufbrechen.'
      },
      {
        name: 'Trüffel hobeln',
        text: 'Mit Olivenöl und Fleur de Sel beträufeln und sofort frischen Sommertrüffel darüberhobeln.'
      }
    ],
    nutrition: {
      calories: '460 kcal',
      carbohydrateContent: '28 g',
      proteinContent: '19 g',
      fatContent: '31 g',
      servingSize: '1 Portion'
    },
    keywords: ['Burrata Trüffel', 'Sommertrüffel Burrata', 'Sauerteigbrot Trüffel'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffel25g,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'puree',
    slug: 'kartoffelpuree-sommertrueffel',
    category: 'basic',
    categoryLabel: 'Grundrezepte & Beilagen',
    title: 'Samtiges Kartoffel-Trüffelpüree (Robuchon-Art)',
    subtitle: 'Die legendäre Beilage der französischen Haute Cuisine',
    timePrep: '20 Min.',
    timeCook: '25 Min.',
    totalTimeMinutes: 45,
    difficulty: 'Mittel',
    truffleAmount: '8–10g pro Person',
    servings: '4 Personen',
    servingsCount: 4,
    description: 'Aus mehligkochenden Kartoffeln, reichlich guter Butter und heißer Milch gerührt. Der Trüffel verwandelt das Püree in eine Festtagsbeilage.',
    proTip: 'Verwenden Sie niemals einen Pürierstab, da die Kartoffelstärke sonst kleistrig wird. Immer eine klassische Kartoffelpresse oder ein Passiergerät nutzen.',
    ingredients: [
      '800g mehligkochende Kartoffeln',
      '40g frischer Sommertrüffel',
      '120g kalte Butter (in Würfeln)',
      '150ml heiße Vollmilch',
      'Salz, eine Prise Muskatnuss'
    ],
    steps: [
      {
        name: 'Kartoffeln kochen & dämpfen',
        text: 'Kartoffeln in Salzwasser weichkochen, schälen und im heißen Topf kurz ausdämpfen lassen.'
      },
      {
        name: 'Fein pressen',
        text: 'Zweimal durch die Kartoffelpresse drücken, damit keine Klümpchen verbleiben.'
      },
      {
        name: 'Butter & Milch montieren',
        text: 'Kalte Butterwürfel nach und nach kräftig mit dem Holzlöffel einarbeiten. Heiße Milch einrühren, bis die Masse samtig glänzt.'
      },
      {
        name: 'Trüffel hobeln',
        text: 'In Schalen anrichten und mit frischem Sommertrüffel reichlich bedecken.'
      }
    ],
    nutrition: {
      calories: '360 kcal',
      carbohydrateContent: '38 g',
      proteinContent: '5 g',
      fatContent: '22 g',
      servingSize: '1 Portion'
    },
    keywords: ['Kartoffelpüree Trüffel', 'Trüffelpüree Robuchon', 'Sommertrüffel Beilage'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  },
  {
    id: 'butter',
    slug: 'sommertrueffel-butter-selber-machen',
    category: 'basic',
    categoryLabel: 'Grundrezepte & Beilagen',
    title: 'Echte Sommertrüffel-Butter zum Einfrieren',
    subtitle: 'Haltbarmachung der Sommerfrische für das gesamte Jahr',
    timePrep: '15 Min.',
    timeCook: '0 Min.',
    totalTimeMinutes: 15,
    difficulty: 'Einfach',
    truffleAmount: '30g Trüffel auf 250g Butter',
    servings: 'ca. 280g Trüffelbutter',
    servingsCount: 10,
    description: 'Frisch geriebener Sommertrüffel in schaumig gerührter Fassbutter. Perfekt portioniert im Gefrierfach über Monate haltbar.',
    proTip: 'Verwenden Sie hochwertige Sauerrahm- oder Fassbutter mit hohem Fettgehalt. Das Fett konserviert das Aroma zuverlässig.',
    ingredients: [
      '250g beste Bio-Sauerrahmbutter (zimmerwarm)',
      '30–40g frischer Sommertrüffel',
      '1 gestrichener TL feines Meersalz',
      'Optional: ein Hauch weißer Pfeffer'
    ],
    steps: [
      {
        name: 'Butter schaumig rühren',
        text: 'Die weiche Butter mit dem Handrührgerät 3 Minuten cremig und fast weiß aufschlagen.'
      },
      {
        name: 'Trüffel fein reiben',
        text: 'Den Sommertrüffel auf einer feinen Reibe reiben und mit dem Salz gleichmäßig unter die Butter heben.'
      },
      {
        name: 'Rollen & kühlen / einfrieren',
        text: 'Die Masse auf Backpapier oder Frischhaltefolie geben, zu einer festen Rolle formen und im Kühlschrank fest werden lassen. In Scheiben geschnitten lässt sie sich hervorragend tiefkühlen.'
      }
    ],
    nutrition: {
      calories: '185 kcal (pro Portion ca. 28g)',
      carbohydrateContent: '0.2 g',
      proteinContent: '0.6 g',
      fatContent: '20 g',
      servingSize: '1 Portion (ca. 28g)'
    },
    keywords: ['Trüffelbutter Rezept', 'Sommertrüffel Butter', 'Trüffelbutter einfrieren'],
    image: 'https://www.sommertrueffel.de/og-banner.png',
    truffleSearchLink: AFFILIATE_LINKS.sommertrueffelFrisch,
    hobelSearchLink: AFFILIATE_LINKS.trueffelhobel
  }
];
