import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RECIPES } from '../src/data/recipes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error('dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(DIST_DIR, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

interface RouteMeta {
  path: string; // e.g. '/datenschutz'
  title: string;
  description: string;
  image?: string;
  schema: object;
}

const routes: RouteMeta[] = [
  {
    path: '/datenschutz',
    title: 'Datenschutzerklärung | sommertrueffel.de',
    description: 'Datenschutzerklärung für sommertrueffel.de: Informationen zu Datenerhebung, Hosting bei Vercel, Vercel Analytics, Werbepartnern und dem Amazon Partnerprogramm.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startseite',
          item: 'https://www.sommertrueffel.de/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Datenschutzerklärung',
          item: 'https://www.sommertrueffel.de/datenschutz'
        }
      ]
    }
  },
  {
    path: '/impressum',
    title: 'Impressum | sommertrueffel.de',
    description: 'Impressum und Anbieterkennzeichnung nach § 5 DDG und § 18 MStV für sommertrueffel.de (Jens Kathe, Kassel).',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startseite',
          item: 'https://www.sommertrueffel.de/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Impressum',
          item: 'https://www.sommertrueffel.de/impressum'
        }
      ]
    }
  },
  {
    path: '/rechner-embed',
    title: 'Sommertrüffel Portionsrechner (Widget) | sommertrueffel.de',
    description: 'Kompakter Mengen- und Portionskalkulator für frische Sommertrüffel (Tuber aestivum) bei Pasta, Risotto und Menüs.',
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
  }
];

// Add all 14 recipes
for (const recipe of RECIPES) {
  routes.push({
    path: `/rezepte/${recipe.slug}`,
    title: `${recipe.title} – Sommertrüffel Rezept | sommertrueffel.de`,
    description: `${recipe.description} Zubereitungszeit: ${recipe.totalTimeMinutes} Min. Inklusive Zutaten, Profi-Tipps und BfR-Hinweisen.`,
    image: recipe.image,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Recipe',
          name: recipe.title,
          headline: recipe.subtitle,
          description: recipe.description,
          author: {
            '@type': 'Organization',
            name: 'sommertrueffel.de Fachredaktion',
            url: 'https://www.sommertrueffel.de/'
          },
          datePublished: '2026-09-05',
          dateModified: '2026-09-17',
          keywords: recipe.keywords.join(', '),
          recipeCategory: recipe.categoryLabel,
          recipeCuisine: 'Italienisch',
          prepTime: `PT${recipe.totalTimeMinutes}M`,
          totalTime: `PT${recipe.totalTimeMinutes}M`,
          recipeYield: recipe.servings,
          image: [recipe.image],
          nutrition: {
            '@type': 'NutritionInformation',
            calories: recipe.nutrition.calories,
            carbohydrateContent: recipe.nutrition.carbohydrateContent,
            proteinContent: recipe.nutrition.proteinContent,
            fatContent: recipe.nutrition.fatContent,
            servingSize: recipe.nutrition.servingSize
          },
          recipeIngredient: recipe.ingredients,
          recipeInstructions: recipe.steps.map((step, idx) => ({
            '@type': 'HowToStep',
            name: step.name,
            text: step.text,
            url: `https://www.sommertrueffel.de/rezepte/${recipe.slug}#step-${idx + 1}`
          }))
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Startseite',
              item: 'https://www.sommertrueffel.de/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Rezepte',
              item: 'https://www.sommertrueffel.de/#rezepte'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: recipe.title,
              item: `https://www.sommertrueffel.de/rezepte/${recipe.slug}`
            }
          ]
        }
      ]
    }
  });
}

function replaceMeta(html: string, route: RouteMeta): string {
  const canonicalUrl = `https://www.sommertrueffel.de${route.path}`;
  const imageUrl = route.image || 'https://www.sommertrueffel.de/og-banner.png';

  let res = html;

  // Replace <title>
  res = res.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);
  
  // Replace meta title
  res = res.replace(/<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i, `<meta name="title" content="${route.title}" />`);
  
  // Replace meta description
  res = res.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${route.description}" />`);
  
  // Replace canonical
  res = res.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  
  // Replace og tags
  res = res.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${route.title}" />`);
  res = res.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${route.description}" />`);
  res = res.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  res = res.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${imageUrl}" />`);

  // Replace twitter tags
  res = res.replace(/<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:title" content="${route.title}" />`);
  res = res.replace(/<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:description" content="${route.description}" />`);
  res = res.replace(/<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:url" content="${canonicalUrl}" />`);
  res = res.replace(/<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="twitter:image" content="${imageUrl}" />`);

  // Replace the static JSON-LD script in head
  const jsonLdBlock = `<script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n    </script>`;
  res = res.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, jsonLdBlock);

  return res;
}

console.log(`Prerendering ${routes.length} routes...`);

for (const route of routes) {
  const rendered = replaceMeta(templateHtml, route);
  
  // 1. Write nested directory index.html (e.g. dist/datenschutz/index.html)
  const relativeDir = route.path.startsWith('/') ? route.path.slice(1) : route.path;
  const targetDir = path.join(DIST_DIR, relativeDir);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), rendered, 'utf8');

  // 2. Write clean URL html file (e.g. dist/datenschutz.html)
  fs.writeFileSync(`${targetDir}.html`, rendered, 'utf8');

  console.log(`✓ Prerendered: ${route.path}`);
}

console.log('Static prerendering complete!');
