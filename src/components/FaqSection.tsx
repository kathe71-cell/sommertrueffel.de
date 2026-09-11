import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Worin unterscheidet sich der Sommertrüffel (Tuber aestivum) vom Périgord-Trüffel?',
    answer: 'Der Sommertrüffel wächst in den sonnigen Monaten von Mai bis September und liegt im frischen Handel bei moderaten ca. 0,20 € bis 0,35 € pro Gramm (ca. 200 € bis 350 € pro Kilogramm). Seine Gleba ist elfenbeinfarben bis hell haselnussbraun marmoriert und sein Geschmacksprofil feiner, nussig und waldig. Der schwarze Wintertrüffel (Périgord-Trüffel, Tuber melanosporum) reift hingegen von Dezember bis März, besitzt ein tiefschwarz-violettes Fleisch und ein drastisch intensiveres Aroma – weshalb er mit ca. 1.200 € bis 2.500 € pro Kilogramm ein Vielfaches kostet.'
  },
  {
    question: 'Wie lange ist ein frischer Sommertrüffel nach der Lieferung haltbar?',
    answer: 'Bei korrekter Aufbewahrung (in Küchenpapier gewickelt im geschlossenen Glasgefäß bei 2 bis 4 °C im Kühlschrank) bleibt die Knolle ca. 7 bis maximal 10 Tage frisch. Wir empfehlen jedoch, den Trüffel innerhalb von 3 bis 5 Tagen nach Ankunft zu genießen, da er täglich durch Verdunstung an Feuchtigkeit und aromatischen ätherischen Ölen verliert.'
  },
  {
    question: 'Wie erkenne ich zuverlässig, ob die Knolle verdorben ist?',
    answer: 'Ein frischer Sommertrüffel fühlt sich steinhart und fest an. Weiche, schwammige oder matschige Stellen deuten auf beginnende Fäulnis hin. Auch ein stechender Geruch nach Ammoniak oder sauren Gärnoten ist ein klares Zeichen für Verderb. Die weiße Marmorierung des Fruchtfleisches sollte klar abgegrenzt sein.'
  },
  {
    question: 'Warum riechen viele günstige Supermarkt-Trüffelöle so penetrant künstlich?',
    answer: 'Viele industrielle Trüffelprodukte enthalten überhaupt keinen echten Trüffelextrakt, sondern synthetisch hergestelltes 2,4-Dithiapentan (ein Erdölderivat). Dieses Aroma riecht extrem laut und erzeugt einen oft als metallisch oder schwefelig empfundenen Nachgeschmack. Reiner Sommertrüffel schmeckt vollkommen anders: mild, warm, nussig und harmonisch.'
  },
  {
    question: 'Warum sollte das Küchenpapier im Vorratsglas täglich gewechselt werden?',
    answer: 'Frische Pilze atmen auch nach der Ernte weiter und scheiden Feuchtigkeit aus. In einem geschlossenen Schraubglas bildet sich Kondenswasser. Wenn das Küchenpapier durchnässt, entsteht Staunässe, die Schimmelbildung begünstigt. Durch tägliches Austauschen bleibt das Mikroklima im Glas optimal trocken.'
  },
  {
    question: 'Warum ist Sommertrüffel deutlich preiswerter als weißer Alba-Trüffel?',
    answer: 'Sommertrüffel kommen in weiten Teilen Südeuropas und Mitteleuropas in verhältnismäßig verlässlichen Mengen vor und haben eine fünfmonatige Erntesaison. Der typische Trüffeleinsatz für eine Hauptgang-Portion (12–15g) liegt bei lediglich ca. 3 € bis 5 € (Kilopreis ca. 200 € bis 350 €). Der weiße Alba-Trüffel (Tuber magnatum pico) hingegen ist eine der seltensten Delikatessen der Erde, lässt sich nicht kultivieren und wird nur in engen Zeitfenstern geerntet – mit Kilopreisen von ca. 3.500 € bis über 6.000 €. Sommertrüffel bieten daher das beste Preis-Leistungs-Verhältnis aller echten Trüffelarten.'
  },
  {
    question: 'Welcher Trüffelhobel eignet sich am besten für Sommertrüffel?',
    answer: 'Empfehlenswert ist ein Hobel mit stufenlos verstellbarer Edelstahl- oder Solinger Klinge (meist aus Olivenholz oder Voll-Edelstahl gefertigt). Da Sommertrüffel eine feste Konsistenz hat, sollte die Klinge rasiermesserscharf sein, um hauchdünne Scheiben (ca. 0,2 bis 0,5 mm) hobeln zu können, ohne das empfindliche Pilzgewebe zu zerquetschen.'
  },
  {
    question: 'Kann man frischen Sommertrüffel einfrieren?',
    answer: 'Das Einfrieren der ganzen Knolle wird von Spitzenköchen nicht empfohlen, da die Eiskristalle die empfindlichen Zellwände zerstören und die Knolle beim Auftauen matschig wird. Wer Reste konservieren möchte, sollte die Knolle fein reiben und in geschlagene Butter einrühren. Diese Trüffelbutter lässt sich problemlos portionieren und für mehrere Monate tiefkühlen.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-extrabold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            Häufige Fragen & Antworten
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Experten-Wissen zum Sommertrüffel
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Faktenbasierte Antworten zu Haltbarkeit, Zubereitungsmethoden und Qualitätsunterschieden.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            Alle Auskünfte basieren auf mykologischen Standardwerten und gastronomischer Fachpraxis. Wir verwenden keine fiktiven Bewertungen oder unbelegten Testsiegel.
          </div>
        </div>

      </div>
    </section>
  );
};
