import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const recipeSlugs = [
  { slug: 'original-tagliolini-al-tartufo', title: 'Original Tagliolini al Tartufo – Sommertrüffel Pasta' },
  { slug: 'cremiges-risotto-al-tartufo-estivo', title: 'Cremiges Risotto al Tartufo Estivo – Sommertrüffel Risotto' },
  { slug: 'kartoffel-gnocchi-trueffelbutter', title: 'Kartoffel-Gnocchi in Trüffelbutter' },
  { slug: 'fettuccine-trueffel-haselnuss', title: 'Fettuccine mit Sommertrüffel & gerösteten Haselnüssen' },
  { slug: 'steinpilz-ricotta-ravioli-trueffel', title: 'Steinpilz-Ricotta-Ravioli mit gehobeltem Sommertrüffel' },
  { slug: 'cremiges-trueffel-ruehrei-brioche', title: 'Cremiges Trüffel-Rührei auf geröstetem Brioche' },
  { slug: 'pochiertes-bio-ei-trueffel-polenta', title: 'Pochiertes Bio-Ei auf cremiger Trüffel-Polenta' },
  { slug: 'sommertrueffel-frittata-gruener-spargel', title: 'Sommertrüffel-Frittata mit grünem Spargel' },
  { slug: 'tagliata-di-manzo-sommertrueffel', title: 'Tagliata di Manzo mit gehobeltem Sommertrüffel' },
  { slug: 'kalbsmedaillons-trueffel-rahmsauce', title: 'Kalbsmedaillons in feiner Trüffel-Rahmsauce' },
  { slug: 'rinder-carpaccio-sommertrueffel', title: 'Rinder-Carpaccio mit Sommertrüffel & Parmesan' },
  { slug: 'cremige-burrata-sommertrueffel-sauerteigbrot', title: 'Cremige Burrata mit Sommertrüffel auf Sauerteigbrot' },
  { slug: 'kartoffelpuree-sommertrueffel', title: 'Französisches Kartoffelpüree mit Sommertrüffel' },
  { slug: 'sommertrueffel-butter-selber-machen', title: 'Sommertrüffel-Butter selber machen – Grundrezept' }
];

const routesToPrerender = [
  {
    url: '/',
    title: 'Sommertrüffel Ratgeber: Kaufen, Saison & Zubereitung',
    desc: 'Unabhängiger Ratgeber zu Sommertrüffeln (Tuber aestivum): Frischeknollen kaufen, Portionen berechnen, Saisonzeiten, Hobel-Tipps & Rezeptideen.'
  },
  {
    url: '/rechner-embed',
    title: 'Sommertrüffel Portionsrechner (Widget) | sommertrueffel.de',
    desc: 'Kompakter Mengen- und Portionskalkulator für frische Sommertrüffel (Tuber aestivum) bei Pasta, Risotto und Menüs.'
  },
  {
    url: '/impressum',
    title: 'Impressum | sommertrueffel.de',
    desc: 'Impressum und Anbieterkennzeichnung nach § 5 DDG und § 18 MStV für sommertrueffel.de (Jens Kathe, Kassel).'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung | sommertrueffel.de',
    desc: 'Datenschutzerklärung für sommertrueffel.de: Informationen zu Datenerhebung, Hosting bei Vercel, Vercel Analytics und Affiliate-Hinweise.'
  },
  ...recipeSlugs.map(r => ({
    url: `/rezepte/${r.slug}`,
    title: `${r.title} | sommertrueffel.de`,
    desc: `Rezept für ${r.title}: Schritt-für-Schritt Zubereitung, Zutatenliste, ideale Trüffelmenge in Gramm und Profi-Tipps für perfekten Genuss.`
  }))
];

console.log(`Starting prerendering of ${routesToPrerender.length} routes for sommertrueffel.de...`);

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    rendered = rendered.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    const fullUrl = `https://www.sommertrueffel.de${route.url === '/' ? '' : route.url}`;
    rendered = rendered.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    rendered = rendered.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${route.desc}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const absolutePath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered);

    if (route.url !== '/') {
      const cleanHtmlPath = toAbsolute(`dist${route.url}.html`);
      fs.mkdirSync(path.dirname(cleanHtmlPath), { recursive: true });
      fs.writeFileSync(cleanHtmlPath, rendered);
    }

    console.log(`  ✓ ${route.url} -> ${filePath} (${(rendered.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
  }
}

console.log('Prerendering complete!');
