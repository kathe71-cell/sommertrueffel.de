import React from 'react';
import { CompactCalculatorWidget } from '../components/CompactCalculatorWidget';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export const RechnerEmbed: React.FC = () => {
  useDocumentMeta({
    title: 'Sommertrüffel Portionsrechner (Widget) | sommertrueffel.de',
    description: 'Kompakter Mengen- und Portionskalkulator für frische Sommertrüffel (Tuber aestivum) bei Pasta, Risotto und Menüs.',
    canonicalPath: '/rechner-embed',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Sommertrüffel Portionsrechner',
      url: 'https://www.sommertrueffel.de/rechner-embed',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    }
  });

  return (
    <div className="min-h-screen bg-transparent p-2 sm:p-4 flex items-center justify-center font-sans">
      <CompactCalculatorWidget />
    </div>
  );
};
