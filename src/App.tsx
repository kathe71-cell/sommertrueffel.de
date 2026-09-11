import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TruffleFinder } from './components/TruffleFinder';
import { PortionCalculator } from './components/PortionCalculator';
import { SeasonGuide } from './components/SeasonGuide';
import { RecipeSection } from './components/RecipeSection';
import { FaqSection } from './components/FaqSection';
import { StickyMobileCta } from './components/StickyMobileCta';
import { Footer } from './components/Footer';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { RechnerEmbed } from './pages/RechnerEmbed';
import { Code2, Copy, Check, ShieldCheck, Utensils, Award } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'impressum' | 'datenschutz' | 'embed'>('home');
  const [copiedEmbed, setCopiedEmbed] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('impressum') || path.includes('zimpressum')) {
        setCurrentView('impressum');
      } else if (path.includes('datenschutz')) {
        setCurrentView('datenschutz');
      } else if (path.includes('rechner-embed')) {
        setCurrentView('embed');
      } else {
        setCurrentView('home');
      }
    };

    // Initial check
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: 'home' | 'impressum' | 'datenschutz') => {
    setCurrentView(view);
    const path = view === 'home' ? '/' : `/${view}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmbedCode = () => {
    const code = `<iframe src="https://sommertrueffel.de/rechner-embed" width="100%" height="680" style="border:none; border-radius:16px; box-shadow:0 4px 16px rgba(0,0,0,0.08);" title="Sommertrüffel Portionsrechner"></iframe>\n<p style="font-size:12px; color:#64748b; text-align:center;">Portionsrechner bereitgestellt von <a href="https://sommertrueffel.de" target="_blank" rel="noopener" style="color:#b45309; text-decoration:underline;">sommertrueffel.de</a></p>`;
    navigator.clipboard.writeText(code);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  const scrollToElement = (id: string) => {
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentView === 'embed') {
    return <RechnerEmbed />;
  }

  if (currentView === 'impressum') {
    return <Impressum onBack={() => navigateTo('home')} />;
  }

  if (currentView === 'datenschutz') {
    return <Datenschutz onBack={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Header
        onNavigateImpressum={() => navigateTo('impressum')}
        onNavigateDatenschutz={() => navigateTo('datenschutz')}
        onNavigateHome={() => navigateTo('home')}
      />

      <main className="flex-grow">
        <Hero
          onScrollToFinder={() => scrollToElement('finder')}
          onScrollToCalculator={() => scrollToElement('rechner')}
        />
        <TruffleFinder />
        <PortionCalculator />

        {/* Embed Code Widget Box */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-2">
                    <Code2 className="w-3.5 h-3.5" />
                    Kostenloses Widget für Food-Blogs &amp; Rezeptseiten
                  </div>
                  <h3 className="text-xl font-black text-white">Trüffel-Portionsrechner auf Ihrer Website einbinden</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Bieten Sie Ihren Lesern eine interaktive Grammatur-Kalkulation für Pasta, Risotto &amp; Menüs per schnellem iFrame.
                  </p>
                </div>
                <button
                  onClick={copyEmbedCode}
                  className="self-start md:self-center px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors shadow-sm cursor-pointer shrink-0"
                >
                  {copiedEmbed ? <Check className="w-4 h-4 text-emerald-900" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmbed ? 'Code kopiert!' : 'Embed-Code kopieren'}</span>
                </button>
              </div>
              <div className="bg-slate-900 rounded-lg p-3 text-xs font-mono text-slate-300 overflow-x-auto border border-slate-800">
                <code>{`<iframe src="https://sommertrueffel.de/rechner-embed" width="100%" height="680" style="border:none; border-radius:16px;" title="Sommertrüffel Portionsrechner"></iframe>\n<p style="font-size:12px; color:#64748b; text-align:center;">Bereitgestellt von <a href="https://sommertrueffel.de" target="_blank" rel="noopener">sommertrueffel.de</a></p>`}</code>
              </div>
            </div>
          </div>
        </section>

        <SeasonGuide />
        <RecipeSection />
        <FaqSection />

        {/* E-E-A-T Editorial Trust Box */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#fcfbf9] rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-lg shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Fachredaktion sommertrueffel.de</h4>
                  <p className="text-xs text-slate-500">Stand: September 2026 • Mykologisch &amp; warenkundlich geprüft (Tuber aestivum Vittad.)</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <Utensils className="w-4 h-4 text-amber-700" />
                    <span>Botanische Echtheitsprüfung</span>
                  </div>
                  <p>Klare Abgrenzung des echten Sommertrüffels gegen minderwertige Fälschungen oder synthetische Aromastoffe (2,4-Dithiapentan).</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <span>Transparente Einkaufshilfen</span>
                  </div>
                  <p>Unabhängige Marktübersichten und fundierte Zubereitungshinweise ohne eigene Händlerbindung nach § 5 DDG.</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <Award className="w-4 h-4 text-amber-700" />
                    <span>Praxiserprobte Grammaturen</span>
                  </div>
                  <p>Kalkulationsgrundlagen erarbeitet mit Gastronomie-Erfahrung für optimale Geschmacksentfaltung pro Speisengattung.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onNavigateImpressum={() => navigateTo('impressum')}
        onNavigateDatenschutz={() => navigateTo('datenschutz')}
        onNavigateHome={() => navigateTo('home')}
      />

      <StickyMobileCta />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};
