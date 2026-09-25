import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateImpressum: () => void;
  onNavigateDatenschutz: () => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateImpressum,
  onNavigateDatenschutz,
  onNavigateHome,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs pt-12 pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-sm">
                ST
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                sommertrueffel<span className="text-amber-400">.de</span>
              </span>
            </button>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Unabhängiges Fachportal für Sommertrüffel (<em>Tuber aestivum</em>). Fundierte Ratgeber zu Reifezeiten, Aufbewahrungsmethoden, Gramm-Dosierungen und Zubehör-Empfehlungen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Themen & Navigation
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#finder" className="hover:text-amber-400 transition-colors">
                  Trüffel-Finder & Feinkost
                </a>
              </li>
              <li>
                <a href="#rechner" className="hover:text-amber-400 transition-colors">
                  Portions- & Mengenrechner
                </a>
              </li>
              <li>
                <a href="#saison" className="hover:text-amber-400 transition-colors">
                  Saisonkalender & Reifegrade
                </a>
              </li>
              <li>
                <a href="#rezepte" className="hover:text-amber-400 transition-colors">
                  Tagliolini & Rührei Rezepte
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Häufige Fragen (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Operator */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Rechtliche Hinweise & Betreiber
            </h4>
            <p className="text-slate-400 text-xs">
              Unabhängiges Fach- und Informationsportal.<br />
              Alle Angaben ohne Gewähr.<br />
              Vollständige Betreiberangaben siehe Impressum.
            </p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={onNavigateImpressum}
                className="text-amber-400 font-semibold underline hover:text-amber-300"
              >
                Impressum (§ 5 DDG)
              </button>
              <button
                onClick={onNavigateDatenschutz}
                className="text-amber-400 font-semibold underline hover:text-amber-300"
              >
                Datenschutz (DSGVO)
              </button>
            </div>
          </div>

        </div>

        {/* Mandatory Legal Declarations from Prompt */}
        <div className="pt-8 space-y-3 text-[11px] text-slate-400 leading-relaxed">
          <p className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Unabhängigkeitshinweis:</strong> Dieses Portal ist ein unabhängiges redaktionelles Angebot und steht in keinem gesellschaftsrechtlichen Verhältnis zu den genannten Anbietern oder Herstellern.
            </span>
          </p>

          <p>
            <strong>* Werbehinweis / Amazon-Partnerlinks:</strong> Mit einem Sternchen (*) gekennzeichnete Links sind sogenannte Affiliate- bzw. Partnerlinks, insbesondere zum Amazon-Partnerprogramm. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Wenn Sie über einen solchen Link ein Angebot wahrnehmen oder ein Produkt erwerben, erhalten wir vom Anbieter möglicherweise eine Vermittlungsvergütung. Für Sie verändert sich der Endpreis hierdurch nicht.
          </p>

          <p>
            <strong>* Modellrechnung:</strong> Alle Rechnerwerte, Portionsschätzungen und Preisspannen sind beispielhafte Modellrechnungen. Die tatsächliche Höhe hängt vom individuellen Nutzungsverhalten, Marktschwankungen und den Konditionen der jeweiligen Anbieter ab.
          </p>

          <div className="pt-4 text-center text-slate-400 text-[10px]">
            © {new Date().getFullYear()} sommertrueffel.de — Alle Rechte vorbehalten. System-Schriftarten-Stack ohne externe Google-Fonts CDNs.
          </div>
        </div>

      </div>
    </footer>
  );
};
