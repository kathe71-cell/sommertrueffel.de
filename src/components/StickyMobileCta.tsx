import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { AFFILIATE_LINKS } from '../config/affiliate';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-extrabold text-slate-900 block leading-tight truncate">
            Sommertrüffel & Hobel
          </span>
          <span className="text-[10px] text-slate-500 block truncate">
            * Amazon-Partnerangebote
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <a
            href={AFFILIATE_LINKS.sommertrueffelFrisch}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-3 py-2 rounded-xl shadow border border-amber-600/30 whitespace-nowrap"
          >
            <span>Trüffel *</span>
          </a>
          <a
            href={AFFILIATE_LINKS.trueffelhobel}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] uppercase tracking-wider px-3 py-2 rounded-xl shadow border border-slate-800 whitespace-nowrap"
          >
            <span>Hobel *</span>
          </a>
        </div>
      </div>
    </div>
  );
};
