import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, ShieldAlert, Sparkles, Check, Tag } from 'lucide-react';
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
  criteria: string[];
  partnerLink: string;
}

const PRODUCTS: ProductItem[] = [
  // --- KATEGORIE: FRISCHE SOMMERTRÜFFEL ---
  {
    id: 'k-25g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Frischer Sommertrüffel – Probiergröße (ca. 25–30g)',
    subtitle: 'Suchidee für 2 Personen oder ein erstes Kennenlernen des Aromas',
    origin: 'Suchkriterium: Italien / Istrien',
    tag: 'Suchidee: 25–30g',
    priceNumeric: 10,
    priceModel: 'ca. 8,90 € – 12,50 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Pasta & Risotto',
    criteria: [
      'Empfohlenes Kriterium: Auf Ausweisung als Tuber aestivum achten',
      'Portionsgröße reicht ideal für 2 Teller Pasta al Tartufo (ca. 12–15g/P.)',
      'Minimiert Restmengen – ideal für den Ersteinsteiger',
      'Auf schnellen Versand mit Kühlverpackung beim Anbieter achten'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel25g
  },
  {
    id: 'k-50g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Frischer Sommertrüffel (Tuber aestivum) – 50g Klassik',
    subtitle: 'Suchidee für ein 4-Personen-Menü oder zwei reichhaltige Abende',
    origin: 'Suchkriterium: Italien / Mitteleuropa',
    tag: 'Suchidee: 50g',
    priceNumeric: 17,
    priceModel: 'ca. 14,50 € – 19,50 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Pasta & Risotto',
    criteria: [
      'Ausreichend für 4 Hauptgang-Portionen (ca. 12–15g pro Teller)',
      'Auf feste Knollenkonsistenz und unbeschädigte Rinde achten',
      'Helle, elfenbeinfarbene bis haselnussbraune Marmorierung der Gleba',
      'Gekühlten Express-Versand des jeweiligen Händlers prüfen'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel50g
  },
  {
    id: 'k-100g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Frischer Sommertrüffel – Menü-Selektion (100g)',
    subtitle: 'Suchidee für Mehrgang-Menüs, Festessen und 6–8 Gäste',
    origin: 'Suchkriterium: EU-Herkunft',
    tag: 'Suchidee: 100g',
    priceNumeric: 32,
    priceModel: 'ca. 26,00 € – 36,00 € *',
    budgetRange: 'mid',
    usage: 'fleisch',
    usageLabel: 'Fleisch & Pasta',
    criteria: [
      'Reicht für Vorspeise (z. B. Carpaccio) UND Hauptgang (Risotto / Tagliata)',
      'Größere Knollen kaliberbezogen auswählen',
      'Händlerbewertungen hinsichtlich Frische und Verpackung abgleichen',
      'Verarbeitung innerhalb von 3–5 Tagen nach Empfang einplanen'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel100g
  },
  {
    id: 'k-250g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Sommertrüffel Vorratspackung (250g)',
    subtitle: 'Suchidee für passionierte Hobbyköche oder zur Trüffelbutter-Vorratsproduktion',
    origin: 'Suchkriterium: Mittel-/Südeuropa',
    tag: 'Suchidee: Vorrat',
    priceNumeric: 69,
    priceModel: 'ca. 59,00 € – 79,00 € *',
    budgetRange: 'high',
    usage: 'pflege',
    usageLabel: 'Vorrat & Festessen',
    criteria: [
      'Günstigerer Kilopreis bei größeren Gebinden',
      'Ideal, um eigene Sommertrüffel-Butter portionsweise einzufrieren',
      'Lieferzeitfenster mit dem Händler vorab abstimmen',
      'Sofortige Prüfung der Knollenfestigkeit bei Erhalt'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffel250g
  },
  {
    id: 'k-500g',
    category: 'knollen',
    categoryLabel: 'Frische Knollen',
    title: 'Sommertrüffel Großgebinde (500g)',
    subtitle: 'Suchidee für Feiern, Gastronomie oder große Gesellschaften',
    origin: 'Suchkriterium: Europa',
    tag: 'Suchidee: Großgebinde',
    priceNumeric: 129,
    priceModel: 'ca. 110,00 € – 145,00 € *',
    budgetRange: 'high',
    usage: 'pflege',
    usageLabel: 'Gastronomie & Vorrat',
    criteria: [
      'Attraktive Großmengen-Kalkulation',
      'Expressversand mit ausreichender Kühlreserve zwingend erforderlich',
      'Vorab-Absprache des genauen Liefertags beim Händler ratsam',
      'Haltbarmachung überschüssiger Mengen über Trüffelbutter empfohlen'
    ],
    partnerLink: AFFILIATE_LINKS.sommertrueffelFrisch
  },

  // --- KATEGORIE: HOBEL & WERKZEUGE ---
  {
    id: 'z-olivenholz',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Trüffelhobel aus Olivenholz (verstellbar)',
    subtitle: 'Suchidee für traditionelle Holzoptik mit stufenloser Edelstahlklinge',
    origin: 'Suchkriterium: Olivenholz massiv',
    tag: 'Suchidee: Olivenholz',
    priceNumeric: 28,
    priceModel: 'ca. 24,90 € – 29,90 € *',
    budgetRange: 'mid',
    usage: 'pflege',
    usageLabel: 'Zubereitung & Tisch',
    criteria: [
      'Auf stufenlos justierbare Rasiermesserklinge aus Edelstahl achten',
      'Schnittstärkenbereich von hauchfein (0,2 mm) bis ca. 2 mm prüfen',
      'Naturholz liegt angenehm in der Hand, gehört aber nicht in die Spülmaschine',
      'Auch vielseitig für Hartkäse, Knoblauch oder Schokolade nutzbar'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelhobelOlivenholz
  },
  {
    id: 'z-edelstahl',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Profi-Trüffelhobel aus Edelstahl',
    subtitle: 'Suchidee für pflegeleichte, spülmaschinengeeignete Metallhobel',
    origin: 'Suchkriterium: Edelstahl rostfrei',
    tag: 'Suchidee: Edelstahl',
    priceNumeric: 22,
    priceModel: 'ca. 21,90 € – 24,90 € *',
    budgetRange: 'mid',
    usage: 'pflege',
    usageLabel: 'Zubereitung & Gastro',
    criteria: [
      'Hygienischer, rostfreier Edelstahl',
      'Präzise Rändelschraube zur Justierung der Schnittstärke',
      'Leichte Reinigung und Spülmaschinentauglichkeit',
      'Schneidet saubere Scheiben ohne das poröse Pilzgewebe zu zerdrücken'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelhobelEdelstahl
  },
  {
    id: 'z-buerste',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Trüffel- & Pilzbürste mit Naturborsten',
    subtitle: 'Suchidee zur schonenden Reinigung der warzigen Trüffelrinde',
    origin: 'Suchkriterium: Naturborsten',
    tag: 'Suchidee: Bürste',
    priceNumeric: 12,
    priceModel: 'ca. 9,90 € – 13,50 € *',
    budgetRange: 'low',
    usage: 'pflege',
    usageLabel: 'Pflege & Haltbarkeit',
    criteria: [
      'Mittelfeste Borsten zur Entfernung von Erdresten aus den Rillen',
      'Schonende Rindenreinigung vor dem Verzehr',
      'Bei hartnäckiger Erde mit kurzem kaltem Wasserabspülen kombinierbar',
      'Handlicher Holz- oder Kunststoffgriff'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelbuerste
  },
  {
    id: 'z-behälter',
    category: 'zubehoer',
    categoryLabel: 'Hobel & Werkzeuge',
    title: 'Luftdichtes Vorratsglas mit Dichtung',
    subtitle: 'Suchidee zur geruchsdichten Kühlschranklagerung',
    origin: 'Suchkriterium: Bügelglas / Schraubdeckel',
    tag: 'Suchidee: Lagerung',
    priceNumeric: 15,
    priceModel: 'ca. 12,90 € – 16,90 € *',
    budgetRange: 'low',
    usage: 'pflege',
    usageLabel: 'Aufbewahrung',
    criteria: [
      'Verhindert Aromenübertragung auf andere Lebensmittel im Kühlschrank',
      'Ausreichend Volumen für Küchenpapier-Wicklung der Knolle',
      'Leicht zu reinigendes Glas mit zuverlässiger Dichtung',
      'Geeignet zum gleichzeitigen Aromatisieren von Eiern oder Reis'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelbehaelter
  },

  // --- KATEGORIE: FEINKOST & ÖLE ---
  {
    id: 'f-butter',
    category: 'feinkost',
    categoryLabel: 'Feinkost & Öle',
    title: 'Trüffelbutter mit Sommertrüffel',
    subtitle: 'Suchidee für fertige Trüffelbutter als schnelle Küchenbasis',
    origin: 'Suchkriterium: Echte Trüffelanteile',
    tag: 'Suchidee: Trüffelbutter',
    priceNumeric: 12,
    priceModel: 'ca. 9,90 € – 13,90 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Pasta & Steak',
    criteria: [
      'Zutatenliste prüfen: Ausweisung echter Sommertrüffel (Tuber aestivum)',
      'Verzicht auf künstliches 2,4-Dithiapentan bevorzugen',
      'Ideal zum schnellen Montieren von Pasta oder Finish auf Steaks',
      'Gekühlt lagern oder portionsweise einfrieren'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelbutter
  },
  {
    id: 'f-carpaccio',
    category: 'feinkost',
    categoryLabel: 'Feinkost & Öle',
    title: 'Sommertrüffel-Carpaccio im Glas',
    subtitle: 'Suchidee für eingelegte Trüffelscheiben in Olivenöl',
    origin: 'Suchkriterium: In nativem Olivenöl',
    tag: 'Suchidee: Glas-Carpaccio',
    priceNumeric: 16,
    priceModel: 'ca. 14,90 € – 18,50 € *',
    budgetRange: 'low',
    usage: 'fleisch',
    usageLabel: 'Carpaccio & Vorspeisen',
    criteria: [
      'Bereits gebrauchsfertig gehobelte Trüffelscheiben',
      'Ungeöffnet lange haltbar – praktische Reserve außerhalb der Erntesaison',
      'Auf Qualität des Trägeröls (Olivenöl Extra Vergine) achten',
      'Nach dem Öffnen stets mit Öl bedeckt im Kühlschrank aufbewahren'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelcarpaccio
  },
  {
    id: 'f-öl',
    category: 'feinkost',
    categoryLabel: 'Feinkost & Öle',
    title: 'Natives Olivenöl mit Sommertrüffel',
    subtitle: 'Suchidee für Speiseöl mit natürlichem Trüffelauszug',
    origin: 'Suchkriterium: Natives Olivenöl Extra',
    tag: 'Suchidee: Trüffelöl',
    priceNumeric: 14,
    priceModel: 'ca. 12,50 € – 15,90 € *',
    budgetRange: 'low',
    usage: 'fleisch',
    usageLabel: 'Finish & Salate',
    criteria: [
      'Etikettencheck: Nach natürlichem Trüffelextrakt suchen',
      'Produkte ohne penetrantes synthetisches Aroma bevorzugen',
      'Sparsam tropfenweise über Rührei, Risotto oder Carpaccio dosieren',
      'Dunkel und kühl lagern, um Oxydation zu vermeiden'
    ],
    partnerLink: AFFILIATE_LINKS.trueffeloel
  },

  // --- KATEGORIE: GEWÜRZE & SAUCEN ---
  {
    id: 'g-salz',
    category: 'gewuerze',
    categoryLabel: 'Gewürze & Saucen',
    title: 'Meersalz mit getrocknetem Sommertrüffel',
    subtitle: 'Suchidee für feines Trüffelsalz zum Nachwürzen am Tisch',
    origin: 'Suchkriterium: Meersalz / Fleur de Sel',
    tag: 'Suchidee: Trüffelsalz',
    priceNumeric: 11,
    priceModel: 'ca. 8,90 € – 12,90 € *',
    budgetRange: 'low',
    usage: 'fleisch',
    usageLabel: 'Steaks & Pommes',
    criteria: [
      'Gutes Meersalz oder Fleur de Sel mit sichtbaren Trüffelstückchen',
      'Vielseitig einsetzbar für Eierspeisen, Bratkartoffeln oder Grillfleisch',
      'Immer erst kurz vor dem Servieren aufstreuen, nicht mitkochen',
      'Luftdicht verschlossen aufbewahren'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelsalz
  },
  {
    id: 'g-honig',
    category: 'gewuerze',
    categoryLabel: 'Gewürze & Saucen',
    title: 'Akazienhonig mit Sommertrüffel',
    subtitle: 'Suchidee für süß-würzige Kombinationen zu gereiftem Käse',
    origin: 'Suchkriterium: Akazienhonig',
    tag: 'Suchidee: Trüffelhonig',
    priceNumeric: 13,
    priceModel: 'ca. 11,50 € – 14,90 € *',
    budgetRange: 'low',
    usage: 'fruehstueck',
    usageLabel: 'Käse & Brunch',
    criteria: [
      'Milder Akazienhonig überdeckt den Trüffel nicht',
      'Klassischer Begleiter zu Pecorino, Parmesan oder Ziegenkäse',
      'Auch zur Veredelung von warmem Ziegenkäse auf Röstbrot geeignet',
      'Lange ungekühlt haltbar'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelhonig
  },
  {
    id: 'g-tartufata',
    category: 'gewuerze',
    categoryLabel: 'Gewürze & Saucen',
    title: 'Tartufata – Pilz-Trüffel-Sauce',
    subtitle: 'Suchidee für Würzpasten auf Pilz- und Trüffelbasis',
    origin: 'Suchkriterium: Pilzsauce mit Trüffel',
    tag: 'Suchidee: Tartufata',
    priceNumeric: 10,
    priceModel: 'ca. 8,50 € – 11,50 € *',
    budgetRange: 'low',
    usage: 'pasta',
    usageLabel: 'Bruschetta & Pasta',
    criteria: [
      'Traditionelle Kombination aus Champignons, Olivenöl und Trüffel',
      'Schnelle Küchenhilfe für Crostini, Saucenansätze und Pasta',
      'Zutatenverzeichnis auf den ausgewiesenen Trüffelanteil prüfen',
      'Nach dem Öffnen mit Öl bedecken und im Kühlschrank lagern'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelpesto
  },

  // --- KATEGORIE: GESCHENKSETS ---
  {
    id: 'set-starter',
    category: 'geschenke',
    categoryLabel: 'Geschenksets',
    title: 'Trüffel-Starterset (Hobel & Delikatessen)',
    subtitle: 'Suchidee für Geschenkboxen mit Trüffelhobel und Feinkost',
    origin: 'Suchkriterium: Gourmet-Präsent',
    tag: 'Suchidee: Geschenkset',
    priceNumeric: 44,
    priceModel: 'ca. 39,90 € – 48,00 € *',
    budgetRange: 'mid',
    usage: 'geschenk',
    usageLabel: 'Geschenk & Starter',
    criteria: [
      'Set-Zusammenstellung prüfen (Hobel, Trüffelöl, Salz oder Butter)',
      'Verarbeitungsqualität der Hobelklinge im Set beachten',
      'Ansprechende Geschenkverpackung für Genießer',
      'Kundenrezensionen zum Gesamtinhalt vergleichen'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelGeschenkset
  },
  {
    id: 'set-pasta',
    category: 'geschenke',
    categoryLabel: 'Geschenksets',
    title: 'Gourmet-Pastaset mit Trüffelspezialitäten',
    subtitle: 'Suchidee für italienische Pasta-Sets mit Tagliolini und Trüffelsauce',
    origin: 'Suchkriterium: Italienische Feinkost',
    tag: 'Suchidee: Pasta-Set',
    priceNumeric: 45,
    priceModel: 'ca. 42,00 € – 48,90 € *',
    budgetRange: 'mid',
    usage: 'geschenk',
    usageLabel: 'Pasta & Dinner',
    criteria: [
      'Kombination aus Bronze-Matrizen-Pasta (Trafilata al bronzo) und Trüffelbutter/Sauce',
      'Komplettpaket für einen unkomplizierten italienischen Feinschmeckerabend',
      'Haltbarkeit der enthaltenen Produkte prüfen',
      'Preisvergleich gegenüber Einzelerwerb durchführen'
    ],
    partnerLink: AFFILIATE_LINKS.trueffelPastaSet
  }
];

export const TruffleFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedUsage, setSelectedUsage] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc'>('recommended');

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesUsage = selectedUsage === 'all' || item.usage === selectedUsage;
      const matchesBudget = selectedBudget === 'all' || item.budgetRange === selectedBudget;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.origin.toLowerCase().includes(q) ||
        item.criteria.some((c) => c.toLowerCase().includes(q));

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
            Suchideen &amp; Auswahlkriterien ({PRODUCTS.length} Kategorien)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Marktübersicht &amp; Suchideen für Sommertrüffel
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Nutzen Sie diese Kriterien und Suchideen, um gezielt nach frischen Knollen, robusten Hobeln und passender Feinkost auf Amazon zu suchen. Alle Preisspannen sind beispielhafte Modell-Kalkulationen zur Orientierung.
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
                <option value="pasta">Pasta &amp; Risotto</option>
                <option value="fleisch">Fleisch &amp; Steak</option>
                <option value="fruehstueck">Frühstück &amp; Käse</option>
                <option value="geschenk">Geschenk &amp; Starter</option>
                <option value="pflege">Zubereitung &amp; Pflege</option>
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
              Alle Rubriken ({PRODUCTS.length})
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
              Hobel &amp; Werkzeuge (4)
            </button>
            <button
              onClick={() => setSelectedCategory('feinkost')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'feinkost'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Feinkost &amp; Öle (3)
            </button>
            <button
              onClick={() => setSelectedCategory('gewuerze')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === 'gewuerze'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Gewürze &amp; Saucen (3)
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
            Gefilterte Suchideen: <strong className="text-slate-900">{filteredProducts.length}</strong> von {PRODUCTS.length}
          </div>
          <div className="text-slate-500">
            * Preisspannen als unverbindliche Modell-Kalkulation (Stand 2026)
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-12 text-center">
            <ShieldAlert className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-base font-bold text-slate-800">Keine Suchideen für Ihre Filterkombination gefunden.</p>
            <p className="text-xs text-slate-500 mt-1">Setzen Sie die Filter oder den Suchbegriff zurück.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedUsage('all');
                setSelectedBudget('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Alle Filter zurücksetzen
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

                  {/* Recommended Selection Criteria */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-800 mb-2 uppercase tracking-wider">
                      Empfohlene Auswahlkriterien:
                    </div>
                    <div className="space-y-1.5">
                      {item.criteria.map((crit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{crit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom / Action */}
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Modell-Richtpreis:</span>
                      <span className="text-base font-extrabold text-slate-900">{item.priceModel}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      Suchidee &amp; Kriterien
                    </span>
                  </div>

                  <a
                    href={item.partnerLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-sm border border-amber-600/30 transition-all text-center"
                  >
                    <span>Passende Angebote auf Amazon suchen *</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="text-center mt-2">
                    <span className="text-[10px] text-slate-500">
                      * Amazon-Partnerlink (Suchabfrage mit Tracking: sommertrueffel.de-21)
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
