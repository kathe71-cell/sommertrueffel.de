/**
 * Amazon PartnerNet Konfiguration für sommertrueffel.de
 * Store-ID: esstri-21
 * Tracking-ID / Sendungsverfolgungsnummer: sommertrueffel.de-21
 */

export const AMAZON_AFFILIATE_CONFIG = {
  storeId: 'esstri-21',
  trackingId: 'sommertrueffel.de-21',
  baseUrl: 'https://www.amazon.de',
};

/**
 * Erzeugt einen sauberen Amazon.de Partnerlink mit der Tracking-ID sommertrueffel.de-21
 */
export function getAmazonSearchUrl(keyword: string): string {
  const encoded = encodeURIComponent(keyword);
  return `https://www.amazon.de/s?k=${encoded}&tag=${AMAZON_AFFILIATE_CONFIG.trackingId}`;
}

export function getAmazonProductUrl(asin: string): string {
  return `https://www.amazon.de/dp/${asin}?tag=${AMAZON_AFFILIATE_CONFIG.trackingId}`;
}

// Differenzierte Ziel-Links mit Tracking-ID
export const AFFILIATE_LINKS = {
  // Frische Sommertrüffel & Ganze Knollen
  sommertrueffelFrisch: getAmazonSearchUrl('Sommertrüffel frisch Knolle'),
  sommertrueffel25g: getAmazonSearchUrl('Sommertrüffel frisch 25g 30g'),
  sommertrueffel50g: getAmazonSearchUrl('Sommertrüffel frisch 50g'),
  sommertrueffel100g: getAmazonSearchUrl('Sommertrüffel frisch 100g'),
  sommertrueffel250g: getAmazonSearchUrl('Sommertrüffel frisch 250g'),
  sommertrueffelKnollen: getAmazonSearchUrl('Sommertrüffel ganze Knolle'),

  // Hobel & Werkzeuge
  trueffelhobel: getAmazonSearchUrl('Trüffelhobel Edelstahl verstellbar'),
  trueffelhobelOlivenholz: getAmazonSearchUrl('Trüffelhobel Olivenholz verstellbare Klinge'),
  trueffelhobelEdelstahl: getAmazonSearchUrl('Trüffelhobel Voll-Edelstahl 18/10 Gastro'),
  trueffelbuerste: getAmazonSearchUrl('Trüffelbürste Naturborsten Pilzbürste'),
  trueffelbuersteSet: getAmazonSearchUrl('Trüffelbürste Trüffelhobel Set'),
  trueffelbehaelter: getAmazonSearchUrl('Vorratsglas luftdicht Frischhaltebox Trüffel'),

  // Feinkost & Veredelung
  trueffelbutter: getAmazonSearchUrl('Trüffelbutter echte Trüffel Tuber aestivum'),
  trueffelcarpaccio: getAmazonSearchUrl('Trüffelcarpaccio Sommertrüffel Glas Scheiben'),
  trueffeloel: getAmazonSearchUrl('Natives Olivenöl Extra Sommertrüffel'),
  trueffelsalz: getAmazonSearchUrl('Trüffelsalz Meersalz Sommertrüffel'),
  trueffelhonig: getAmazonSearchUrl('Trüffelhonig Akazienhonig Sommertrüffel'),
  trueffelpesto: getAmazonSearchUrl('Tartufata Trüffelsauce Sommertrüffel Pesto'),
  trueffelmayo: getAmazonSearchUrl('Trüffelmayonnaise Gourmet'),

  // Geschenk- & Gourmet-Sets
  trueffelGeschenkset: getAmazonSearchUrl('Trüffel Geschenkset Hobel Delikatessen'),
  trueffelPastaSet: getAmazonSearchUrl('Trüffel Pasta Set Tagliolini Trüffelbutter'),
};
