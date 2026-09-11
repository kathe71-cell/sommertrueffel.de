import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ExternalLink, ShieldAlert, Sparkles, Check, ArrowUpDown, Tag, Layers } from 'lucide-react';
import { AFFILIATE_LINKS } from '../config/affiliate';

export interface ProductItem {
  id: string;
  category: 'knollen' | 'zubehoer' | 'feinkost' | 'gewuerze' | 'geschenke';
  categoryLabel: string;
  title: string;
  subtitle: string;
  origin: string;
  tag: string;
  priceNumeric: number;
  priceModel: string;
  budgetRange: 'low' | 'mid' | 'high';
  usage: 'pasta' | 'fleisch' | 'fruehstueck' | 'geschenk' | 'pflege';
  usageLabel: string;
  features: string[];
  partnerLink: string;
}

const PRODUCTS: ProductItem[] = [
  // --- KATEGORIE: FRISCHE SOMMERTRÜFFEL ---
  {
    id: 'k-25g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Frischer Sommertrüffel – Probierportion (ca. 25–30g)',
    subtitle: 'Ganze Frischknolle für 2 Personen oder ein exklusives Pärchen-Dinner',
    origin: 'Italien / Istrien',
    tag: 'Probiergröße',
    priceNumeric: 10,
    priceModel: 'ca. 8,90 € – 12,50 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Pasta & Risotto',
    features: [
      'Ganze Knolle mit fester Rinde im Kühlakku versandt',
      'Reicht ideal für 2 reichhaltige Teller Pasta al Tartufo',
      'Minimiert Restmengen – ideal für den Ersteinsteiger',
      'Sorgsam vorgebürstet, sofort verzehrbereit'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel25g
  },
  {
    id: 'k-50g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Frischer Sommertrüffel (Tuber aestivum) – 50g Klassik',
    subtitle: 'Die beliebteste Familiengröße für 4 Personen Menüabende',
    origin: 'Umbrien / Toskana (Italien)',
    tag: 'Bestseller',
    priceNumeric: 17,
    priceModel: 'ca. 14,50 € – 19,50 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Pasta & Risotto',
    features: [
      'Ausgewählte feste Einzelknolle oder 2 harmonische Knollen',
      'Ausreichend für 4 großzügige Hauptgänge (12–15g/Portion)',
      'Helle, elfenbeinfarbene bis haselnussbraune Marmorierung',
      'Gekühlter 24h-Express-Versand über verifizierte Partner'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel50g
  },
  {
    id: 'k-100g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Frischer Sommertrüffel – Gourmet-Selektion (100g)',
    subtitle: 'Größere Kaliber für Festessen, Mehrgang-Menüs und 6–8 Gäste',
    origin: 'Piemont / Norditalien',
    tag: 'Mehrgang-Menü',
    priceNumeric: 32,
    priceModel: 'ca. 26,00 € – 36,00 € *',
    budgetRange: 'mid',
    usage: 'fleisch',
    usageLabel: 'Fleisch & Pasta',
    features: [
      'Repräsentative Knollen mit besonders ausgeprägter Warzenrinde',
      'Reicht für Vorspeise (Carpaccio) UND Hauptgang (Tagliata/Risotto)',
      'Aromasichere Vakuum- oder Glasverpackung mit Kühlmedium',
      'Inklusive Frischezertifikat und Pflegehinweisen'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel100g
  },
  {
    id: 'k-250g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Sommertrüffel Großpackung – Vorrat & Feinschmecker (250g)',
    subtitle: 'Für passionierte Hobbyköche, Familienfeste oder zur Trüffelbutter-Produktion',
    origin: 'Mitteleuropa / Südeuropa',
    tag: 'Vorrats-Vorteil',
    priceNumeric: 69,
    priceModel: 'ca. 59,00 € – 79,00 € *',
    budgetRange: 'high',
    usage: 'pflege',
    usageLabel: 'Vorrat & Festessen',
    features: [
      'Attraktiver Kilopreis für größere Gesellschaften',
      'Perfekt, um eigene Trüffelbutter für das ganze Jahr einzufrieren',
      'Strikte Sortierung auf maximale Härte und Frische',
      'Direkte Erntefrische ohne lange Zwischenlagerung'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel250g
  },
  {
    id: 'k-500g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Sommertrüffel Großgebinde – Gastronomie & Feste (500g)',
    subtitle: 'Für größere Events, Gastronomie-Bedarf oder große Gesellschaften',
    origin: 'Italien / Mitteleuropa',
    tag: 'Gastro-Vorteil',
    priceNumeric: 129,
    priceModel: 'ca. 110,00 € – 145,00 € *',
    budgetRange: 'high',
    usage: 'pflege',
    usageLabel: 'Gastronomie & Vorrat',
    features: [
      'Bester Kilopreis für Großverbraucher und gehobene Küchen',
      'Handverlesene, druckfeste Knollen in Schutz-Kühlverpackung',
      'Ideal für große Gesellschaften oder hausgemachte Trüffelbutter-Chargen',
      'Garantierte Kühlketten-Lieferung via Express-Kurier'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffelFrisch
  },

  // --- KATEGORIE: HOBEL & WERKZEUGE ---
  {
    id: 'z-olivenholz',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Klassischer Trüffelhobel aus massivem Olivenholz',
    subtitle: 'Traditionelle italienische Handwerkskunst mit individueller Holzmaserung',
    origin: 'Italienische Manufaktur',
    tag: 'Gourmet-Klassiker',
    priceNumeric: 28,
    priceModel: 'ca. 24,90 € – 29,90 € *',
    budgetRange: 'mid',
    usage: 'pflege',
    usageLabel: 'Zubereitung & Tisch',
    features: [
      'Stufenlos verstellbare Rasiermesserklinge aus rostfreiem Edelstahl',
      'Schnittstärke von hauchfeinen 0,2 mm bis 3 mm exakt justierbar',
      'Warmes, geöltes Olivenholz – liegt rutschfest und edel in der Hand',
      'Schneidet saubere Scheiben ohne das poröse Pilzgewebe zu zerdrücken'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelhobelOlivenholz
  },
  {
    id: 'z-edelstahl',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Profi-Trüffelhobel aus Voll-Edelstahl (18/10)',
    subtitle: 'Gastronomie-Standard, spülmaschinengeeignet & unverwüstlich',
    origin: 'Solingen / EU',
    tag: 'Gastro-Qualität',
    priceNumeric: 22,
    priceModel: 'ca. 21,90 € – 24,90 € *',
    budgetRange: 'mid',
    usage: 'pflege',
    usageLabel: 'Zubereitung & Gastro',
    features: [
      'Hygienischer, säurebeständiger Edelstahl 18/10',
      'Lasergeschliffene Schneide für extrem präzisen Spanschnitt',
      'Integrierte Rändelschraube mit Arretierung gegen Verstellen',
      'Auch exzellent für Parmesan, Hartkäse, Knoblauch und Schokolade'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelhobelEdelstahl
  },
  {
    id: 'z-buerste',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Spezielle Trüffel- & Pilzbürste mit Naturborsten',
    subtitle: 'Schonende Trockenreinigung ohne Aromaverlust durch Wasser',
    origin: 'Deutschland / Schwarzwald',
    tag: 'Pflege-Must-Have',
    priceNumeric: 12,
    priceModel: 'ca. 9,90 € – 13,50 € *',
    budgetRange: 'low',
    usage: 'pflege',
    usageLabel: 'Pflege & Haltbarkeit',
    features: [
      'Dichte, mittelfeste Naturborsten (Rosshaar/Pflanzenfaser)',
      'Befreit die tiefen Rillenzwischenräume der Warzenhaut schonend von Erde',
      'Verhindert das schädliche Waschen im Wasserbad',
      'Ergonomischer Griff aus naturbelassenem Buchenholz'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelbuerste
  },
  {
    id: 'z-behälter',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Aromasichere Trüffel-Frischebox mit Belüftungsventil',
    subtitle: 'Luftdichtes Vorratsglas mit Feuchtigkeits-Management für den Kühlschrank',
    origin: 'Qualitätsglas',
    tag: 'Frische-Garantie',
    priceNumeric: 15,
    priceModel: 'ca. 12,90 € – 16,90 € *',
    budgetRange: 'low',
    usage: 'pflege',
    usageLabel: 'Aufbewahrung',
    features: [
      'Verhindert, dass der gesamte Kühlschrank nach Trüffel riecht',
      'Optimale Größe für Küchenpapier-Wicklung und Knolle',
      'BPA-freier Silikon-Dichtungsring und Edelstahl-Bügelverschluss',
      'Ideal auch zum gleichzeitigen Aromatisieren von Eiern oder Risottoreis'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelbehaelter
  },

  // --- KATEGORIE: FEINKOST & ÖLE ---
  {
    id: 'f-butter',
    category: 'feinkost',
    categoryLabel: 'Feinkost & Öle',
    title: 'Trüffelbutter mit echten Sommertrüffel-Stücken (80g)',
    subtitle: 'Frische Sauerrahm-Fassbutter mit echtem Tuber aestivum',
    origin: 'Südtirol / Italien',
    tag: 'Pasta-Veredler',
    priceNumeric: 12,
    priceModel: 'ca. 9,90 € – 13,90 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Pasta & Steak',
    features: [
      'Mindestens 5% echte, sichtbare Sommertrüffel-Stückchen',
      'Vollkommen frei von künstlichen Aromastoffen (2,4-Dithiapentan)',
      'Schmilzt wunderbar sämig auf heißer Pasta oder rosa Rinderfilet',
      'Gekühlt haltbar bis zu 4 Wochen, problemlos portionsweise einfrierbar'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelbutter
  },
  {
    id: 'f-carpaccio',
    category: 'feinkost',
    categoryLabel: 'Feinkost & Öle',
    title: 'Sommertrüffel-Carpaccio in Olivenöl Extra Vergine',
    subtitle: 'Gebrauchsfertig gehobelte Trüffelscheiben im Glas',
    origin: 'Umbrien',
    tag: 'Ganzjährig haltbar',
    priceNumeric: 16,
    priceModel: 'ca. 14,90 € – 18,50 € *',
    budgetRange: 'low',
    usage: 'fleisch',
    usageLabel: 'Carpaccio & Vorspeisen',
    features: [
      'Hauchdünne, unversehrte Scheiben von Tuber aestivum',
      'Eingelegt in feinstem nativem Olivenöl Extra Vergine und Eigensaft',
      'Lange ungekühlt haltbar – die Rettung, wenn keine Frischtrüffelsaison ist',
      'Das aromatisierte Öl im Glas eignet sich hervorragend als Salatdressing'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelcarpaccio
  },
  {
    id: 'f-öl',
    category: 'feinkost',
    categoryLabel: 'Feinkost & Öle',
    title: 'Natives Olivenöl Extra mit natürlichem Sommertrüffel (100ml)',
    subtitle: 'Kaltgepresstes ligurisches Olivenöl mit echten Trüffelauszügen',
    origin: 'Ligurien / Toskana',
    tag: 'Naturbelassen',
    priceNumeric: 14,
    priceModel: 'ca. 12,50 € – 15,90 € *',
    budgetRange: 'low',
    usage: 'fleisch',
    usageLabel: 'Finish & Salate',
    features: [
      'Rein mechanische Kaltpressung (erste Güteklasse)',
      'Subtiles, nussiges Aroma ohne chemischen Schwefelgeruch',
      'Sparsam dosierbar: Wenige Tropfen genügen über Rührei oder Risotto',
      'Inklusive Trüffelstückchen im Flaschenboden'
    ],
    partnerLink: AFFILIATE_LINKS.trueffeloel
  },

  // --- KATEGORIE: GEWÜRZE & CREMES ---
  {
    id: 'g-salz',
    category: 'gewuerze',
    categoryLabel: 'Gewürze & Saucen',
    title: 'Guerande-Meersalz mit getrocknetem Sommertrüffel (100g)',
    subtitle: 'Handgeschöpftes Atlantik-Meersalz für das perfekte Tisch-Finish',
    origin: 'Bretagne / Italien',
    tag: 'Gewürz-Allrounder',
    priceNumeric: 11,
    priceModel: 'ca. 8,90 € – 12,90 € *',
    budgetRange: 'low',
    usage: 'fleisch',
    usageLabel: 'Steaks & Pommes',
    features: [
      'Grobe, feuchte Meersalzflocken mit hoher Mineralstoffdichte',
      'Fein vermahlen mit schonend getrocknetem Sommertrüffel',
      'Verleiht Bratkartoffeln, Pommes Frites, Rührei und Steaks Gourmet-Note',
      'Praktisches Aromaglas mit luftdichtem Frischedeckel'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelsalz
  },
  {
    id: 'g-honig',
    category: 'gewuerze',
    categoryLabel: 'Gewürze & Saucen',
    title: 'Akazienhonig mit Sommertrüffelscheiben (120g)',
    subtitle: 'Süß-würzige Harmonie zu Pecorino, Ziegenkäse & Gorgonzola',
    origin: 'Piemont',
    tag: 'Käse-Begleiter',
    priceNumeric: 13,
    priceModel: 'ca. 11,50 € – 14,90 € *',
    budgetRange: 'low',
    usage: 'fruehstueck',
    usageLabel: 'Käse & Brunch',
    features: [
      'Klarer, flüssiger Bio-Akazienhonig aus Norditalien',
      'Mit eingelegten Trüffelspänen durchzogen',
      'Genial zu Ziegenfrischkäse, gereiftem Parmesan oder Ente',
      'Edles Geschenkglas für die Gourmet-Käseplatte'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelhonig
  },
  {
    id: 'g-tartufata',
    category: 'gewuerze',
    categoryLabel: 'Gewürze & Saucen',
    title: 'Tartufata – Umbrische Trüffelsauce mit Waldpilzen (180g)',
    subtitle: 'Feine Pilz-Trüffel-Paste für Crostini, Saucen & Pasta',
    origin: 'Umbrien',
    tag: 'Saucen-Basis',
    priceNumeric: 10,
    priceModel: 'ca. 8,50 € – 11,50 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Bruschetta & Pasta',
    features: [
      'Kombination aus Champignons, Olivenöl, Sommertrüffel und Gewürzen',
      'Blitzschnell: 1 EL unter heiße Nudeln mit etwas Sahne oder Butter rühren',
      'Klassischer Belag für geröstetes toskanisches Brot (Crostini)',
      'Sehr ergiebig und nach dem Öffnen mit Öl bedeckt im Kühlschrank haltbar'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelpesto
  },

  // --- KATEGORIE: GESCHENKSETS & BOXEN ---
  {
    id: 'set-starter',
    category: 'geschenke',
    categoryLabel: 'Geschenksets',
    title: 'Trüffel-Starter-Geschenkbox (Hobel + Butter + Trüffelsalz)',
    subtitle: 'Das Rundum-Sorglos-Set für ambitionierte Feinschmecker',
    origin: 'Manufaktur-Zusammenstellung',
    tag: 'Perfektes Geschenk',
    priceNumeric: 44,
    priceModel: 'ca. 39,90 € – 48,00 € *',
    budgetRange: 'mid',
    usage: 'geschenk',
    usageLabel: 'Geschenk & Starter',
    features: [
      'Enthält: Verstellbaren Trüffelhobel, Glas Trüffelsalz und echte Trüffelbutter',
      'Stilvoll verpackt in stabiler Geschenk-Kassette mit Seidenpapier',
      'Sofort einsatzbereit für den nächsten Kochabend',
      'Inklusive kleiner Rezeptfibel für Tagliolini und Rührei'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelGeschenkset
  },
  {
    id: 'set-pasta',
    category: 'geschenke',
    categoryLabel: 'Geschenksets',
    title: 'Gourmet Pasta-Dinner-Set „Tartufo Estivo“ (Alles in einer Box)',
    subtitle: 'Handgemachte Tagliolini, Trüffel-Carpaccio, Trüffelhobel & Olivenöl',
    origin: 'Italienische Selektion',
    tag: 'Komplett-Menü',
    priceNumeric: 46,
    priceModel: 'ca. 42,00 € – 48,90 € *',
    budgetRange: 'mid',
    usage: 'geschenk',
    usageLabel: 'Geschenk & Pasta',
    features: [
      'Original italienische Bronzematrizen-Tagliolini (500g)',
      'Präzisions-Trüffelhobel mit Holzgriff und stufenloser Klinge',
      '1 Glas Sommertrüffel-Carpaccio und 1 Fläschchen Trüffel-Olivenöl',
      'Ergibt ein luxuriöses Pasta-Dinner für 4 bis 6 Personen'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelPastaSet
  }
];

export const TruffleFinder: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUsage, setSelectedUsage] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc'>('recommended');

  const filteredProducts = useMemo(() => {
    const list = PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesUsage = selectedUsage === 'all' || item.usage === selectedUsage;
      const matchesBudget =
        selectedBudget === 'all' ||
        (selectedBudget === 'low' && item.priceNumeric < 20) ||
        (selectedBudget === 'mid' && item.priceNumeric >= 20 && item.priceNumeric <= 50) ||
        (selectedBudget === 'high' && item.priceNumeric > 50);
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.origin.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesUsage && matchesBudget && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      return list.sort((a, b) => a.priceNumeric - b.priceNumeric);
    }
    if (sortBy === 'price-desc') {
      return list.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }
    return list;
  }, [selectedCategory, selectedUsage, selectedBudget, searchQuery, sortBy]);

  return (
    <section id="finder" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Produktdifferenzierung & Marktübersicht ({PRODUCTS.length} Artikel)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Sommertrüffel, Hobel & Feinkost gezielt finden
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Wählen Sie nach Knollen-Grammatur (25g bis 250g), Preisbereich (&lt;20 €, 20–50 €, &gt;50 €), Materialart des Hobels (Olivenholz vs. Edelstahl) oder Feinkostspezialitäten. Alle Empfehlungen sind neutral nach Anwendungszweck gegliedert.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
          
          {/* Top Row: Search & Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Suchbegriff (z. B. 50g, Olivenholz, Butter, Salz, Geschenk)..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-700 absolute right-3 top-1/2 -translate-y-1/2 font-bold px-1.5 py-0.5 rounded bg-slate-100"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Usage Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedUsage}
                onChange={(e) => setSelectedUsage(e.target.value)}
                className="w-full py-2.5 px-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">Alle Einsatzzwecke</option>
                <option value="pasta">Pasta & Risotto</option>
                <option value="fleisch">Fleisch & Steak</option>
                <option value="fruehstueck">Frühstück & Käse</option>
                <option value="geschenk">Geschenk & Starter</option>
                <option value="pflege">Zubereitung & Pflege</option>
              </select>
            </div>

            {/* Budget Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full py-2.5 px-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">Alle Budgets</option>
                <option value="low">Unter 20 €</option>
                <option value="mid">20 € bis 50 €</option>
                <option value="high">Über 50 €</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="recommended">Empfehlung</option>
                <option value="price-asc">Preis: Aufsteigend</option>
                <option value="price-desc">Preis: Absteigend</option>
              </select>
            </div>

          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Alle Artikel ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('knollen')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'knollen'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Frische Knollen (5)
            </button>
            <button
              onClick={() => setSelectedCategory('zubehoer')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'zubehoer'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Hobel & Werkzeuge (4)
            </button>
            <button
              onClick={() => setSelectedCategory('feinkost')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'feinkost'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Feinkost & Öle (3)
            </button>
            <button
              onClick={() => setSelectedCategory('gewuerze')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'gewuerze'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Gewürze & Saucen (3)
            </button>
            <button
              onClick={() => setSelectedCategory('geschenke')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'geschenke'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Geschenksets (2)
            </button>
          </div>

          {/* Budget Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-amber-600" />
              Preisbereich:
            </span>
            <button
              onClick={() => setSelectedBudget('all')}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                selectedBudget === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-sm border border-amber-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Alle Preisklassen ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedBudget('low')}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                selectedBudget === 'low'
                  ? 'bg-amber-500 text-slate-950 shadow-sm border border-amber-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Unter 20 € (10)
            </button>
            <button
              onClick={() => setSelectedBudget('mid')}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                selectedBudget === 'mid'
                  ? 'bg-amber-500 text-slate-950 shadow-sm border border-amber-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              20 € bis 50 € (5)
            </button>
            <button
              onClick={() => setSelectedBudget('high')}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all ${
                selectedBudget === 'high'
                  ? 'bg-amber-500 text-slate-950 shadow-sm border border-amber-600/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Über 50 € (2)
            </button>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1 text-xs text-slate-600 font-medium">
          <div>
            Gefilterte Angebote: <strong className="text-slate-900">{filteredProducts.length}</strong> von {PRODUCTS.length}
          </div>
          <div className="text-slate-500">
            * Preisspannen als unverbindliche Modell-Kalkulation
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-12 text-center">
            <ShieldAlert className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-base font-bold text-slate-800">Keine Produkte für Ihre Filterkombination gefunden.</p>
            <p className="text-xs text-slate-500 mt-1">Setzen Sie die Filter oder den Suchbegriff zurück.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedUsage('all');
                setSelectedBudget('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
            >
              Filter zurücksetzen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-[11px] font-extrabold">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      {item.origin}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Category & Usage Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3">
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {item.usageLabel}
                    </span>
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {item.priceNumeric < 20 ? '< 20 €' : item.priceNumeric <= 50 ? '20–50 €' : '> 50 €'}
                    </span>
                  </div>

                  {/* Bullet Features */}
                  <div className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom / Action */}
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Modell-Richtpreis:</span>
                      <span className="text-base font-extrabold text-slate-900">{item.priceModel}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Amazon Prime *
                    </span>
                  </div>

                  <a
                    href={item.partnerLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-sm border border-amber-600/30 transition-all"
                  >
                    <span>Bei Amazon ansehen *</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="text-center mt-2">
                    <span className="text-[10px] text-slate-500">
                      * Amazon-Partnerlink (Tracking: sommertrueffel.de-21)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
