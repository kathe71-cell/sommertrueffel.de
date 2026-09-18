import React, { useState, useMemo } from 'react';
import { Calculator, Users, ChevronDown, ExternalLink } from 'lucide-react';
import { AFFILIATE_LINKS } from '../config/affiliate';

interface DishOption {
  id: string;
  name: string;
  gramsPerPerson: number;
  shortDesc: string;
}

const DISH_OPTIONS: DishOption[] = [
  { id: 'pasta', name: 'Pasta & Tagliolini', gramsPerPerson: 12, shortDesc: '12g / Portion' },
  { id: 'risotto', name: 'Trüffel-Risotto', gramsPerPerson: 15, shortDesc: '15g / Portion' },
  { id: 'egg', name: 'Rührei & Brunch', gramsPerPerson: 8, shortDesc: '8g / Portion' },
  { id: 'meat', name: 'Fleisch & Tagliata', gramsPerPerson: 10, shortDesc: '10g / Portion' },
  { id: 'starter', name: 'Vorspeisen / Carpaccio', gramsPerPerson: 6, shortDesc: '6g / Portion' }
];

export const CompactCalculatorWidget: React.FC = () => {
  const [persons, setPersons] = useState<number>(4);
  const [selectedDishId, setSelectedDishId] = useState<string>('pasta');
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const currentDish = useMemo(() => {
    return DISH_OPTIONS.find((d) => d.id === selectedDishId) || DISH_OPTIONS[0];
  }, [selectedDishId]);

  const totalGrams = useMemo(() => {
    return persons * currentDish.gramsPerPerson;
  }, [persons, currentDish]);

  // Frei gewählte Modellrechnung: ca. 0,20 € bis 0,35 € pro Gramm
  const estimatedCostMin = useMemo(() => Math.round(totalGrams * 0.20), [totalGrams]);
  const estimatedCostMax = useMemo(() => Math.round(totalGrams * 0.35), [totalGrams]);
  const estimatedKnollen = useMemo(() => Math.max(1, Math.ceil(totalGrams / 35)), [totalGrams]);

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 font-sans text-slate-900">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center">
            <Calculator className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
              Sommertrüffel Portionsrechner
            </h2>
            <span className="text-[9px] text-slate-500">Tuber aestivum • Modellrechnung</span>
          </div>
        </div>
        <a
          href="https://www.sommertrueffel.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-bold text-amber-800 hover:underline flex items-center gap-0.5"
        >
          sommertrueffel.de
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* Dish Selector (Compact Buttons) */}
      <div className="mb-2">
        <label className="text-[11px] font-bold text-slate-700 block mb-1">
          Gericht wählen:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          {DISH_OPTIONS.map((dish) => {
            const isSelected = dish.id === selectedDishId;
            return (
              <button
                key={dish.id}
                type="button"
                onClick={() => setSelectedDishId(dish.id)}
                className={`text-left px-2 py-1 rounded-md text-[11px] font-medium transition-all border ${
                  isSelected
                    ? 'bg-amber-500 border-amber-600 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="truncate">{dish.name}</div>
                <div className={`text-[9px] ${isSelected ? 'text-slate-950 font-medium' : 'text-slate-500'}`}>
                  {dish.shortDesc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Persons Slider */}
      <div className="mb-2.5 bg-slate-50 p-2 sm:p-2.5 rounded-lg border border-slate-200/70">
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="compact-persons" className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
            <Users className="w-3 h-3 text-amber-700" />
            <span>Portionen:</span>
          </label>
          <span className="text-[11px] font-black text-amber-950 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
            {persons} {persons === 1 ? 'Person' : 'Personen'}
          </span>
        </div>
        <input
          id="compact-persons"
          type="range"
          min="1"
          max="12"
          step="1"
          value={persons}
          onChange={(e) => setPersons(parseInt(e.target.value, 10))}
          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
        />
        <div className="flex justify-between text-[9px] text-slate-500 mt-0.5 font-mono">
          <span>1</span>
          <span>4</span>
          <span>8</span>
          <span>12</span>
        </div>
      </div>

      {/* Result Metrics Grid */}
      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
        <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-1.5 sm:p-2 text-center">
          <span className="text-[9px] text-slate-600 font-bold block uppercase tracking-wider">Bedarf</span>
          <span className="text-base sm:text-lg font-black text-amber-950 block">{totalGrams} g</span>
          <span className="text-[9px] text-amber-900 font-medium">({currentDish.gramsPerPerson}g / P.)</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 sm:p-2 text-center">
          <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">Knollen</span>
          <span className="text-base sm:text-lg font-black text-slate-900 block">ca. {estimatedKnollen}</span>
          <span className="text-[9px] text-slate-500 font-medium">(Ø 30–40g)</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 sm:p-2 text-center">
          <span className="text-[9px] text-slate-500 font-bold block uppercase tracking-wider">Modellpreis *</span>
          <span className="text-sm sm:text-base font-black text-slate-900 block mt-0.5">
            {estimatedCostMin}–{estimatedCostMax} €
          </span>
          <span className="text-[9px] text-slate-500 font-medium">unverbindl.</span>
        </div>
      </div>

      {/* Action CTA */}
      <a
        href={AFFILIATE_LINKS.sommertrueffelFrisch}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="w-full flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-wider py-2 px-3 rounded-lg transition-colors shadow-xs border border-amber-600/30 text-center mb-2"
      >
        <span>Passende Angebote auf Amazon suchen *</span>
        <ExternalLink className="w-3 h-3" />
      </a>

      {/* Collapsible Details */}
      <div className="border-t border-slate-100 pt-2 text-[11px]">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-between w-full text-slate-600 hover:text-slate-900 font-semibold py-1 focus:outline-none"
        >
          <span>Rechengrundlagen &amp; Modellannahmen</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDetails ? 'rotate-180 text-amber-700' : ''}`} />
        </button>

        {showDetails && (
          <div className="mt-2 p-2.5 bg-slate-50 rounded-lg text-slate-600 space-y-1.5 text-[10px] leading-relaxed border border-slate-200">
            <p>
              <strong>* Modellrechnung:</strong> Unverbindliche Rechenannahme auf Basis von 0,20 € bis 0,35 € pro Gramm (200 € bis 350 € / kg, Stand: 2026). Tatsächliche Marktpreise variieren nach Saison, Herkunft, Erntelage und Anbieter.
            </p>
            <p>
              <strong>* Werbehinweis:</strong> Als Amazon-Partner verdienen wir an qualifizierten Verkäufen über diesen Partnerlink.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
