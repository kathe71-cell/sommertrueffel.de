import React from 'react';
import { Calendar, CheckCircle2, XCircle, AlertTriangle, HelpCircle, Eye, Sparkles } from 'lucide-react';

export const SeasonGuide: React.FC = () => {
  return (
    <section id="saison" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-extrabold mb-3">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            Saisonkalender & Qualitätsmerkmale
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Wann ist Sommertrüffel am besten?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Der Lebenszyklus des <em>Tuber aestivum</em> im mitteleuropäischen und mediterranen Raum. So erkennen Sie reife Ware und maximale Frische.
          </p>
        </div>

        {/* Season Timeline Grid */}
        {/* Season Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          
          {/* Mai */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-slate-900 text-base">Mai</span>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                  Saisonstart
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Erste Funde. Die Gleba ist oft noch sehr hell elfenbeinfarben. Sehr mildes, feines Aroma.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="text-[10px] text-slate-500 font-semibold block">Richtpreis / kg:</span>
              <span className="text-xs font-extrabold text-slate-900">ca. 180 € – 260 € *</span>
            </div>
          </div>

          {/* Juni */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-slate-900 text-base">Juni</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                  Reifend
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zunehmende Festigkeit und Ausbildung typischer pyramidenförmiger Warzen an der Außenhaut.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="text-[10px] text-slate-500 font-semibold block">Richtpreis / kg:</span>
              <span className="text-xs font-extrabold text-slate-900">ca. 220 € – 300 € *</span>
            </div>
          </div>

          {/* Juli */}
          <div className="bg-amber-50/70 p-5 rounded-2xl border-2 border-amber-400 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-amber-950 text-base">Juli</span>
                <span className="text-[10px] font-extrabold text-amber-950 bg-amber-200 px-2 py-0.5 rounded">
                  Peak Reife
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Haupterntezeit. Dunklere, haselnussbraune Marmorierung und volles, waldig-nussiges Aroma.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-300">
              <span className="text-[10px] text-amber-800 font-semibold block">Richtpreis / kg:</span>
              <span className="text-xs font-extrabold text-amber-950">ca. 240 € – 340 € *</span>
            </div>
          </div>

          {/* August */}
          <div className="bg-amber-50/70 p-5 rounded-2xl border-2 border-amber-400 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-amber-950 text-base">August</span>
                <span className="text-[10px] font-extrabold text-amber-950 bg-amber-200 px-2 py-0.5 rounded">
                  Peak Reife
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Höchstes Aromaaufkommen. Ideal für festliche Menüs und Feinschmecker-Abende.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-300">
              <span className="text-[10px] text-amber-800 font-semibold block">Richtpreis / kg:</span>
              <span className="text-xs font-extrabold text-amber-950">ca. 250 € – 360 € *</span>
            </div>
          </div>

          {/* September */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-slate-900 text-base">September</span>
                <span className="text-[10px] font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">
                  Ausklang
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saisonende für den Sommertrüffel. Fließender Übergang zur Herbsttrüffel (Tuber uncinatum).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="text-[10px] text-slate-500 font-semibold block">Richtpreis / kg:</span>
              <span className="text-xs font-extrabold text-slate-900">ca. 280 € – 390 € *</span>
            </div>
          </div>

        </div>

        {/* Season Price Note */}
        <p className="text-xs text-slate-500 mb-16 text-center italic">
          * Modellrechnung & Richtwerte für frische Sommertrüffel (Tuber aestivum). Tagespreise unterliegen Witterung, Ernteaufkommen und Händlerkonditionen.
        </p>

        {/* Quality Matrix & Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Gleba & Peridium Anatomie */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-amber-700" />
              <h3 className="text-lg font-extrabold text-slate-900">
                Anatomie & Frischeprüfung beim Anschnitt
              </h3>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">
                  1. Peridium (Die Rinde):
                </strong>
                Grob warzig, kohlschwarz bis dunkelbraun mit 4- bis 6-kantigen Pyramiden. Muss fest sein und darf bei leichtem Fingerdruck keinesfalls nachgeben oder matschig wirken.
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">
                  2. Gleba (Das Fruchtfleisch):
                </strong>
                Beim Anschnitt offenbart sich ein zartes Elfenbein- bis Haselnussbraun, durchzogen von feinsten, weißen Äderchen (Marmorierung). Reiner Sommertrüffel ist innen niemals tiefschwarz!
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <strong className="text-slate-900 font-bold block mb-1">
                  3. Duft & Geruchssinn:
                </strong>
                Angenehm erdig, erinnert an Haselnüsse, frische Waldpilze und Malz. Stechender Geruch nach Ammoniak ist ein K.-o.-Kriterium und signalisiert Verderb.
              </div>
            </div>
          </div>

          {/* Dos & Don'ts */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <h3 className="text-lg font-extrabold text-slate-900">
                Lagerung & Küchenpraxis: Dos & Don'ts
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 text-xs text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">DO: Vorrangig trocken bürsten (kurzes Abspülen bei Bedarf)</strong>
                  Erde zunächst mit einer feinen Trüffelbürste trocken entfernen. Bei hartnäckigen Erdanhaftungen in den Warzenrillen ist ein kurzes Abspülen unter fließendem kaltem Wasser mit sofortigem Trockentupfen fachlich anerkannt.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 text-xs text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">DO: Küchenpapier täglich wechseln</strong>
                  Knolle in saugfähiges Küchenpapier wickeln und im Glas bei 2–4 °C kühlen. Feuchtigkeit und Kondenswasser täglich entfernen!
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-950">
                <XCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">DON'T: Kein langes Wasserbad</strong>
                  Die Knolle niemals für längere Zeit ins Wasser legen – das Gewebe saugt sich voll und verliert an Aroma. Bei Bedarf nur kurz kalt abbrausen.
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-950">
                <XCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">DON'T: Nicht scharf anbraten</strong>
                  Sommertrüffel verträgt zwar das sanfte Mitschwenken in lauwarmer Butter oder Risotto, sollte aber keinesfalls stark erhitzt oder scharf angebraten werden.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
