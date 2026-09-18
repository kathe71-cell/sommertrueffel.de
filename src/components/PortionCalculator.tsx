import React, { useState, useMemo } from 'react';
import { Calculator, Users, UtensilsCrossed, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { AFFILIATE_LINKS } from '../config/affiliate';

interface DishOption {
  id: string;
  name: string;
  gramsPerPerson: number;
  description: string;
}

const DISH_OPTIONS: DishOption[] = [
  {
    id: 'pasta',
    name: 'Tagliolini & Pasta',
    gramsPerPerson: 12,
    description: 'Klassisch in milder Butter geschwenkt, frisch am Tisch über den dampfenden Teller gehobelt.'
  },
  {
    id: 'risotto',
    name: 'Cremiges Trüffel-Risotto',
    gramsPerPerson: 15,
    description: 'Etwas großzügigere Dosierung, da der heiße Reis die zarten Nussaromen hervorragend bindet.'
  },
  {
    id: 'egg',
    name: 'Rührei & Omelett',
    gramsPerPerson: 8,
    description: 'Bereits 8 g genügen auf weichem Rührei – idealerweise Eier vorab 48h mit der Knolle aromatisieren.'
  },
  {
    id: 'meat',
    name: 'Rinderfilet / Tagliata',
    gramsPerPerson: 10,
    description: 'Hauchfeine Scheiben auf rosa gebratenem Fleisch und gutem Olivenöl.'
  },
  {
    id: 'starter',
    name: 'Carpaccio & Vorspeisen',
    gramsPerPerson: 6,
    description: 'Dezente Veredelung für feine kalte Platten oder Büffelmozzarella.'
  }
];

export const PortionCalculator: React.FC = () => {
  const [persons, setPersons] = useState<number>(4);
  const [selectedDishId, setSelectedDishId] = useState<string>('pasta');

  const currentDish = useMemo(() => {
    return DISH_OPTIONS.find((d) => d.id === selectedDishId) || DISH_OPTIONS[0];
  }, [selectedDishId]);

  const totalGrams = useMemo(() => {
    return persons * currentDish.gramsPerPerson;
  }, [persons, currentDish]);

  // Sommertrüffel Richtpreise ca. 0,20 € bis 0,35 € pro Gramm (200 € bis 350 € pro kg)
  const estimatedCostMin = useMemo(() => Math.round(totalGrams * 0.20), [totalGrams]);
  const estimatedCostMax = useMemo(() => Math.round(totalGrams * 0.35), [totalGrams]);
  const estimatedKnollen = useMemo(() => Math.max(1, Math.ceil(totalGrams / 35)), [totalGrams]);

  return (
    <section id="rechner" className="py-16 sm:py-24 bg-[#faf9f6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Interaktive Mengen- & Portionskalkulation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Wie viel Sommertrüffel benötigen Sie?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Ermitteln Sie die empfohlene Grammatur für Ihr Menü basierend auf Personenzahl und Gericht. Vermeiden Sie Unter- oder Überdosierung beim Einkauf frischer Knollen.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Step 1: Number of Persons */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="persons-slider" className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-700" />
                  1. Anzahl der Gäste / Portionen:
                </label>
                <span className="text-base font-extrabold text-amber-900 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  {persons} {persons === 1 ? 'Person' : 'Personen'}
                </span>
              </div>
              <input
                id="persons-slider"
                aria-label="Anzahl der Gäste oder Portionen"
                type="range"
                min="1"
                max="12"
                value={persons}
                onChange={(e) => setPersons(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>1 Gast</span>
                <span>4 Gäste</span>
                <span>8 Gäste</span>
                <span>12 Gäste</span>
              </div>
            </div>

            {/* Step 2: Dish Selection */}
            <div>
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                <UtensilsCrossed className="w-4 h-4 text-amber-700" />
                2. Geplantes Gericht auswählen:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DISH_OPTIONS.map((dish) => {
                  const isSelected = dish.id === selectedDishId;
                  return (
                    <button
                      key={dish.id}
                      onClick={() => setSelectedDishId(dish.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/70 shadow-sm'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{dish.name}</span>
                        <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                          {dish.gramsPerPerson} g / Pers.
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-normal line-clamp-2">
                        {dish.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preparation Tip Box */}
            <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block mb-0.5">Küchenchef-Tipp für Sommertrüffel:</strong>
                Legen Sie rohe Hühnereier 24–48 Stunden zusammen mit der frischen Knolle in ein luftdichtes Schraubglas im Kühlschrank. Das Trüffelaroma dringt durch die poröse Eierschale und veredelt jedes Rührei auf natürliche Weise!
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Kalkuliertes Ergebnis
              </span>
              <h3 className="text-xl font-extrabold text-white mt-1">
                Bedarfsanalyse für Ihr Menü
              </h3>
            </div>

            {/* Total Weight Highlight */}
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                Empfohlene Gesamtmenge
              </span>
              <div className="text-4xl font-extrabold text-amber-400 mt-1 tracking-tight flex items-baseline gap-2">
                <span>{totalGrams} Gramm</span>
                <span className="text-xs text-slate-300 font-normal">
                  ({persons} × {currentDish.gramsPerPerson}g)
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Entspricht ca. <strong className="text-white font-bold">{estimatedKnollen} ganzen Knolle(n)</strong> üblicher Handelsgröße (ca. 30–45g).
              </p>
            </div>

            {/* Model Cost Estimation */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline text-sm">
                <span className="text-slate-300 font-medium">Geschätzter Marktpreis (Modell):</span>
                <span className="text-lg font-bold text-white">
                  ca. {estimatedCostMin} € – {estimatedCostMax} € *
                </span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-slate-400">
                <span>Kosten pro Person:</span>
                <span className="text-slate-200 font-semibold">
                  ca. {(estimatedCostMin / persons).toFixed(2)} € – {(estimatedCostMax / persons).toFixed(2)} € *
                </span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="space-y-2.5">
              <a
                href={AFFILIATE_LINKS.sommertrueffelFrisch}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md border border-amber-400 transition-all group"
              >
                <span>Passende Sommertrüffel auf Amazon suchen *</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={AFFILIATE_LINKS.trueffelhobel}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl border border-slate-700 transition-all"
              >
                <span>Passende Trüffelhobel auf Amazon suchen *</span>
              </a>
            </div>

            {/* Legal Footnote for Calculations */}
            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <p>
                * Frei gewählte Modellrechnung / unverbindliche Rechenannahme (Basis: ca. 0,20 € bis 0,35 € pro Gramm bzw. 200 € bis 350 € pro Kilogramm, Erhebungsstand 2026). Die tatsächlichen Endpreise hängen von Tagespreisen, Sortierung, Ernteaufkommen und Anbieterkonditionen ab.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
