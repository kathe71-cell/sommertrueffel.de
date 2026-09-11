import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigateImpressum: () => void;
  onNavigateDatenschutz: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateImpressum,
  onNavigateDatenschutz,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    onNavigateHome();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-950 flex items-center justify-center shadow-sm border border-slate-800 group-hover:border-amber-500 transition-colors">
              <span className="text-amber-400 font-extrabold text-lg tracking-tight">ST</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                  sommertrueffel<span className="text-amber-600">.de</span>
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Ratgeber & Marktübersicht für Tuber aestivum
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleScrollTo('finder')}
              className="hover:text-amber-700 transition-colors"
            >
              Trüffel-Finder
            </button>
            <button
              onClick={() => handleScrollTo('rechner')}
              className="hover:text-amber-700 transition-colors"
            >
              Mengenrechner
            </button>
            <button
              onClick={() => handleScrollTo('saison')}
              className="hover:text-amber-700 transition-colors"
            >
              Saison & Frische
            </button>
            <button
              onClick={() => handleScrollTo('rezepte')}
              className="hover:text-amber-700 transition-colors"
            >
              Zubereitung
            </button>
            <button
              onClick={() => handleScrollTo('faq')}
              className="hover:text-amber-700 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#finder"
              onClick={() => handleScrollTo('finder')}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-sm border border-amber-600/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Angebote finden *</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2.5 text-base font-semibold text-slate-800">
            <button
              onClick={() => handleScrollTo('finder')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Trüffel-Finder
            </button>
            <button
              onClick={() => handleScrollTo('rechner')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Portions- & Mengenrechner
            </button>
            <button
              onClick={() => handleScrollTo('saison')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Saisonkalender & Frische
            </button>
            <button
              onClick={() => handleScrollTo('rezepte')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Zubereitung & Rezepte
            </button>
            <button
              onClick={() => handleScrollTo('faq')}
              className="text-left py-2 px-3 rounded-lg hover:bg-slate-50"
            >
              Häufige Fragen (FAQ)
            </button>
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onNavigateImpressum();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-left text-slate-500 hover:text-slate-900"
            >
              Impressum (§ 5 DDG)
            </button>
            <button
              onClick={() => {
                onNavigateDatenschutz();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-left text-slate-500 hover:text-slate-900"
            >
              Datenschutz (DSGVO)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
