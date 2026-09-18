import React, { useState } from 'react';
import { CheckSquare, Square, AlertCircle, Info, ShieldCheck, ThermometerSnowflake, Calendar, Tag, Sparkles } from 'lucide-react';

interface CheckItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  criticalPoints: string[];
  recommendation: string;
}

const CHECK_ITEMS: CheckItem[] = [
  {
    id: 'species',
    title: '1. Artbezeichnung & lateinischer Name prüfen',
    subtitle: 'Schutz vor minderwertigen Verwechslungen (Chinatrüffel)',
    badge: 'Art-Echtheit',
    criticalPoints: [
      'Achten Sie auf die genaue botanische Bezeichnung: Tuber aestivum (Vittad.).',
      'Vorsicht bei vagen Begriffen wie „Asiatischer Trüffel“ oder „Schwarzer Edelpilz“: Oft handelt es sich um Tuber indicum (Chinatrüffel), der optisch ähnlich, aber nahezu geschmacklos ist.',
      'Im Zweifel beim Anbieter nachfragen, ob es sich um echte europäische Sommertrüffel handelt.'
    ],
    recommendation: 'Kaufen Sie nur Angebote, die Tuber aestivum namentlich ausweisen.'
  },
  {
    id: 'delivery',
    title: '2. Lieferdatum & Erntefrische kalkulieren',
    subtitle: 'Minimale Lagerzeit vom Wald bis in Ihre Küche',
    badge: 'Frischezeit',
    criticalPoints: [
      'Frische Sommertrüffel verlieren täglich ca. 2–3 % ihres Gewichts und flüchtige Aromastoffe.',
      'Der Versand sollte idealerweise von Montag bis Mittwoch/Donnerstag erfolgen, damit die Knolle nicht über das Wochenende in einem Postzentrum liegt.',
      'Die geplante Zubereitung sollte innerhalb von 3–5 Tagen nach Eintreffen stattfinden.'
    ],
    recommendation: 'Wählen Sie bevorzugt Anbieter mit taggleicher Sortierung und schnellem Versand.'
  },
  {
    id: 'cooling',
    title: '3. Versandkühlung & Verpackung sicherstellen',
    subtitle: 'Schutz vor Hitzeschäden im Hochsommer',
    badge: 'Kühlkette',
    criticalPoints: [
      'Da Sommertrüffel von Mai bis September geerntet wird, herrschen oft Außentemperaturen über 25–30 °C.',
      'Frische Ware darf nicht ungekühlt im Standard-Karton verschickt werden.',
      'Erforderlich ist eine Isolierverpackung (z. B. Styropor, Hanf-Isolierung) mit ausreichend dimensionierten Kühlelementen (Gel-Akkus).'
    ],
    recommendation: 'Prüfen Sie in den Händlerangaben, ob der Versand mit Kühlverpackung erfolgt.'
  },
  {
    id: 'ingredients',
    title: '4. Zutatenliste & Aromafreiheit (bei Feinkost)',
    subtitle: 'Natur pur statt synthetischem 2,4-Dithiapentan',
    badge: 'Zutaten-Check',
    criticalPoints: [
      'Bei Trüffelbutter, Trüffelöl oder Pesto: Achten Sie genau auf das Zutatenverzeichnis.',
      'Begriffe wie „Trüffelaroma“, „Aroma“ oder „naturidentisches Aroma“ deuten fast immer auf synthetisches 2,4-Dithiapentan hin.',
      'Echte Qualitätsprodukte zeichnen sich durch einen prozentual ausgewiesenen Anteil echter Trüffel (z. B. Tuber aestivum) ohne chemische Duftverstärker aus.'
    ],
    recommendation: 'Bevorzugen Sie Feinkostprodukte mit transparent deklariertem Trüffelanteil.'
  },
  {
    id: 'price',
    title: '5. Realistischen Endpreis & Grundpreis abgleichen',
    subtitle: 'Marktpreis-Plausibilität statt Lockangebote',
    badge: 'Preis-Plausibilität',
    criticalPoints: [
      'Beispielhafte Rechenannahme für frische Sommertrüffel: ca. 0,20 € bis 0,35 € pro Gramm (ca. 200 € bis 350 € pro Kilogramm, unverbindliche Modellannahme Stand 2026; tatsächliche Preise variieren nach Saison, Sortierung und Anbieter).',
      'Auffallend günstige Angebote (z. B. unter 100 €/kg bei Frischware): Prüfen Sie genau die Herkunftsangaben, die botanische Artbezeichnung und den Frischezustand.',
      'Auffallend teure Angebote (> 600 €/kg): Stellen Sie sicher, ob es sich tatsächlich um Tuber aestivum oder um höherpreisige Arten wie Herbst- oder Winteredeltrüffel (Tuber uncinatum / melanosporum) handelt.'
    ],
    recommendation: 'Rechnen Sie den Stückpreis stets auf den 100g- bzw. Kilopreis um.'
  }
];

export const TruffleBuyingCheck: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progress = Math.round((checkedIds.length / CHECK_ITEMS.length) * 100);

  return (
    <section id="einkaufscheck" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-extrabold mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Transparente Verbraucherhilfe
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Der 5-Punkte-Einkaufscheck für Sommertrüffel
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Bevor Sie online oder beim Feinkosthändler bestellen: Prüfen Sie jedes Angebot anhand dieser fünf Kriterien auf Frische, botanische Echtheit und faire Konditionen.
          </p>
        </div>

        {/* Interactive Progress Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 mb-2">
            <span>Ihr Prüffortschritt:</span>
            <span className="text-emerald-800 font-extrabold">{checkedIds.length} von 5 Kriterien geprüft ({progress}%)</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500 mt-2">
            Haken Sie die Punkte nach Prüfung eines Angebots ab, um Ihren persönlichen Prüffortschritt festzuhalten.
          </p>
        </div>

        {/* Check Items Grid */}
        <div className="space-y-4">
          {CHECK_ITEMS.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  isChecked
                    ? 'bg-emerald-50/40 border-emerald-300 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    onClick={() => toggleCheck(item.id)}
                    className="mt-1 flex-shrink-0 text-slate-400 hover:text-emerald-700 focus:outline-none"
                    aria-label={`Kriterium abheften: ${item.title}`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-700" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mb-3 font-medium">
                      {item.subtitle}
                    </p>

                    <ul className="space-y-1.5 mb-3 text-xs text-slate-700 pl-1">
                      {item.criticalPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-700 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-bold">Praxis-Tipp:</strong> {item.recommendation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
