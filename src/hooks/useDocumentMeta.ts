import { useEffect } from 'react';

interface DocumentMetaOptions {
  title: string;
  description?: string;
  canonicalPath: string; // e.g. '/', '/datenschutz', '/rezepte/original-tagliolini-al-tartufo'
  schema?: object | null;
}

const BASE_URL = 'https://www.sommertrueffel.de';

export function useDocumentMeta({
  title,
  description,
  canonicalPath,
  schema
}: DocumentMetaOptions) {
  const serializedSchema = schema ? JSON.stringify(schema) : null;

  useEffect(() => {
    // 1. Set Title
    document.title = title;

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    // 2. Set Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);

      let twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    // 3. Set Canonical Link
    const cleanPath = canonicalPath === '/' ? '' : canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullCanonical = `${BASE_URL}${cleanPath}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullCanonical);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullCanonical);

    let twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', fullCanonical);

    // 4. Update / Clean Route-Specific JSON-LD Schema
    // Remove all existing JSON-LD scripts to avoid stale or duplicate schemas
    const existingLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingLdScripts.forEach((el) => el.remove());

    if (serializedSchema) {
      const script = document.createElement('script');
      script.id = 'route-schema';
      script.type = 'application/ld+json';
      script.textContent = serializedSchema;
      document.head.appendChild(script);
    }

    return () => {
      // Clean up route schema on unmount
      const s = document.getElementById('route-schema');
      if (s) s.remove();
    };
  }, [title, description, canonicalPath, serializedSchema]);
}
