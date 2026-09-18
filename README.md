# sommertrueffel.de – Verkaufsfertiges Gourmet- & Feinkostportal

> **Projekt-Steckbrief & Übergabe-Dokumentation für die Domain `sommertrueffel.de`**  
> Konzipiert, strukturiert und implementiert gemäß den verbindlichen Richtlinien für den Vercel-Export.

---

## 1. Domain-Analyse & Nischen-Steckbrief

| Parameter | Details |
| :--- | :--- |
| **Domain** | `sommertrueffel.de` |
| **Erkannte Nische** | Gourmet, Delikatessen & Feinkost (*Tuber aestivum* / Sommertrüffel) |
| **Suchintention** | Kommerziell & Informational (Frischeknollen kaufen, Zubehör/Hobel, Grammaturen, Rezeptideen, Reifezeiten) |
| **Modus** | **Multi-Provider / Nischen-Portal** mit Live-Finder, Portionsrechner & Experten-Ratgeber |
| **Zielgruppe** | Feinschmecker, Hobbyköche, Gastronomen & Genießer im DACH-Raum |
| **Rechtliche Konformität** | § 5 DDG & § 18 MStV konformes Impressum (Jens Kathe, Kassel), DSGVO-Datenschutzerklärung |

---

## 2. Enthaltene Features & Komponenten

1. **Header & Navigation**:
   - Transparenz-Hinweis („Unabhängiges Gourmet- & Marktportal *“).
   - Responsive Navigation inklusive mobiler Menüsteuerung.
2. **Hero-Sektion**:
   - Faktenbasierte Einführung ohne unbelegte Superlative (UWG-konform).
   - Spezifikations-Steckbrief (*Tuber aestivum*, Erntezeiten Mai–September, Aromaprofil).
3. **Interaktiver Trüffel- & Feinkost-Finder (`#finder`)**:
   - Dynamisches Live-Suchfeld.
   - Kategorien: *Frische Sommertrüffel (Knollen)*, *Trüffelhobel & Bürsten*, *Feinkost (Butter & Carpaccio)*.
   - Filter nach Einsatzzweck (Pasta & Risotto, Fleisch & Grill, Zubereitung).
   - Werbekennzeichnung an allen CTAs (`* Partnerlink`).
4. **Interaktiver Portions- & Mengenkalkulator (`#rechner`)**:
   - Schieberegler für Gästeanzahl (1 bis 12 Personen).
   - Gerichts-Auswahl (Tagliolini, Risotto, Rührei, Fleisch, Carpaccio).
   - Dynamische Berechnung der Gesamtgrammatur, Knollenanzahl und Preisspanne.
   - Ausgewiesener Rechtshinweis: `* Modellrechnung. Die tatsächliche Höhe hängt vom individuellen Nutzungsverhalten und den Konditionen des Anbieters ab.`
5. **Saisonkalender & Qualitätsmatrix (`#saison`)**:
   - Phasen Mai bis September (Peak im Juli/August).
   - Anatomie & Qualitätskriterien: Peridium, Gleba-Marmorierung, Geruchsprüfung.
   - Do's & Don'ts zur Aufbewahrung (trocken bürsten, Küchenpapier täglich wechseln, nicht mitkochen).
6. **Kulinarische Rezeptideen (`#rezepte`)**:
   - *Tagliolini al Tartufo Estivo*
   - *Cremiges Trüffel-Rührei auf Brioche*
   - *Rinder-Carpaccio mit Sommertrüffel*
7. **Fach-FAQ (`#faq`)**:
   - 8 detaillierte, mykologisch und gastronomisch fundierte Fragen & Antworten.
8. **Rechtsseiten**:
   - `/impressum`: Vollständiges Impressum gemäß § 5 DDG und § 18 MStV mit Betreiber Jens Kathe (Hansastraße 6, 34119 Kassel), Kleinunternehmer nach § 19 UStG und OS-Schlichtungslink.
   - `/datenschutz`: Ausführliche Datenschutzerklärung inklusive Hosting, Analytics und Werbepartner.
9. **Conversion & UX**:
   - Sticky Mobile Bar ab 400px Scrolltiefe.
   - WCAG AAA Kontraste (dunkle Schrift auf Amber-Buttons, weiße Schrift auf Slate-Buttons).
   - Keine Google-Fonts CDNs (System Font Stack).

---

## 3. SEO & Structured Data

- **Meta Title**: `< 60` Zeichen, keyword-optimiert.
- **Meta Description**: `< 155` Zeichen.
- **Schema.org JSON-LD Markup**: `WebSite`, `Organization`, `FAQPage`, `BreadcrumbList`.
- **Dateien**: `robots.txt`, `sitemap.xml`, `favicon.svg`, `vercel.json` (SPA-Rewrites).

---

## 4. Lokale Installation & Build

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build testen
npm run build
```

---

### Live-Deployment & Links

- **Live URL**: [https://calm-bardeen.vercel.app](https://calm-bardeen.vercel.app)
- **Deployment URL**: [https://calm-bardeen-f9zdg1wqk-jens-projects2.vercel.app](https://calm-bardeen-f9zdg1wqk-jens-projects2.vercel.app)
- **Vercel Dashboard / Inspector**: [https://vercel.com/jens-projects2/calm-bardeen/rse7tAiLLs6fc7PG7TceP9hUBQ4S](https://vercel.com/jens-projects2/calm-bardeen/rse7tAiLLs6fc7PG7TceP9hUBQ4S)
- **Projekt-Settings / Transfer / Claim**: [https://vercel.com/jens-projects2/calm-bardeen/settings](https://vercel.com/jens-projects2/calm-bardeen/settings)

---

## 5. Vercel Deployment-Anleitung

Das Projekt ist vollständig entkoppelt, ohne externe Tracking- oder Fremd-Framework-Abhängigkeiten und sofort Vercel-ready.

### Schnelles Deployment (Temporary / Preview):
```bash
vercel deploy --temporary
```

### Produktions-Deployment:
```bash
vercel --prod
```

Nach dem Deployment kann die Custom Domain `sommertrueffel.de` direkt im Vercel Dashboard unter **Settings > Domains** hinterlegt werden.
