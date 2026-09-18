import React from 'react';
import { Calendar, Utensils, Award, ChevronRight, CheckCircle2, Info, Tag } from 'lucide-react';
import { AFFILIATE_LINKS } from '../config/affiliate';

interface HeroProps {
  onScrollToFinder: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToFinder, onScrollToCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#faf9f6] border-b border-slate-200/80">
      {/* Decorative background subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Key Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              Saison Mai bis September • Tuber aestivum
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Frische Sommertrüffel: <br className="hidden sm:inline" />
              <span className="text-amber-800">Saison, Einkauf & Portionsrechner</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Der Sommertrüffel (<em>Tuber aestivum</em>) begeistert Feinschmecker mit mild-nussigem Waldaroma und heller Marmorierung. Erfahren Sie alles über Erntefrische, richtige Grammaturen für Pasta & Risotto sowie vertrauenswürdige Bezugsquellen.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-800 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>10–15 g Verzehrempfehlung pro Teller</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Unverfälschtes Naturprodukt ohne Synthetik</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Gekühlter Expressversand bei Händlern</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Exakte Modellkalkulation nach Personenzahl</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4">
              <a
                href={AFFILIATE_LINKS.sommertrueffelFrisch}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg border border-amber-600/30 transition-all group"
              >
                <span>Frische Sommertrüffel bei Amazon *</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={AFFILIATE_LINKS.trueffelhobel}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm px-5 py-3.5 rounded-xl shadow-sm border border-slate-300 hover:border-slate-400 transition-all"
              >
                <span>Trüffelhobel ansehen *</span>
              </a>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-sm border border-slate-800 transition-all"
              >
                <span>Portionsrechner</span>
              </button>
            </div>

            {/* Partner Notice Note */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
              <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span>* Amazon-Partnerlinks: Als Amazon-Partner verdienen wir an qualifizierten Verkäufen (ohne Mehrkosten für Sie).</span>
            </p>

            {/* Definition & Warenkunde Box */}
            <div className="mt-4 text-left bg-white border-l-4 border-amber-600 p-4 sm:p-5 rounded-r-xl shadow-xs border-y border-r border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                <Utensils className="w-4 h-4 text-amber-700" />
                <span>Definition &amp; Warenkunde</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                Der <strong className="text-slate-950 font-bold">Sommertrüffel</strong> (<em className="font-semibold">Tuber aestivum</em>) ist ein essbarer unterirdischer Schlauchpilz mit milder, nussiger Aromatik und hellbraun marmorierter Gleba. Die Erntezeit in Mittel- und Südeuropa erstreckt sich von Mai bis September mit geschmacklichem Höhepunkt im Hochsommer. Pro Hauptspeisenportion werden <strong className="text-slate-950 font-bold">10 bis 15 Gramm</strong> frisch über warme Speisen gehobelt oder sanft in lauwarmer Butter aromatisiert.
              </p>
            </div>
          </div>

          {/* Right Column: Spec Card / Overview Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Steckbrief & Spezifikation
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300">
                  Warenkunde & Fakten
                </span>
              </div>

              <div className="space-y-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-800 border border-amber-200 flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Botanischer Name</div>
                    <div className="text-sm font-bold text-slate-900">Tuber aestivum (Vittad.)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-800 border border-emerald-200 flex-shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Haupterntezeit</div>
                    <div className="text-sm font-bold text-slate-900">Mai bis September (Peak: Juli/August)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200 flex-shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Aromaprofil & Textur</div>
                    <div className="text-sm font-bold text-slate-900">Mild, nussig, Noten von Waldpilzen & Malz</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-800 border border-amber-200 flex-shrink-0 mt-0.5">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Markt-Preisniveau (Modellwert)</div>
                    <div className="text-sm font-bold text-slate-900">ca. 0,20 € – 0,35 € / g (200 € – 350 € / kg) *</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-950 font-bold block mb-1">Gourmet-Praxishinweis:</strong>
                Im Gegensatz zum schwarzen Wintertrüffel darf der Sommertrüffel keinesfalls stark erhitzt werden. Seine ätherischen Aromen entfalten sich am intensivsten im direkten Kontakt mit lauwarmer Butter oder Olivenöl auf servierbereiter Pasta.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
