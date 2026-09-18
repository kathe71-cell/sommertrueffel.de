import React, { useState } from 'react';
import { RecipeData, RECIPES } from '../data/recipes';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowLeft, Clock, Utensils, ChefHat, Check, AlertTriangle, ExternalLink, Sparkles, Scale, Info } from 'lucide-react';

interface RecipeDetailProps {
  slug: string;
  onBack: () => void;
  onSelectRecipe: (slug: string) => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  slug,
  onBack,
  onSelectRecipe
}) => {
  const recipe = RECIPES.find((r) => r.slug === slug) || RECIPES[0];
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  // Dynamisches JSON-LD Recipe Schema ohne Fake-Bewertungen und ohne Fake-Videos
  const recipeSchema = {
    '@context': 'https://schema.org',
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
  };

  useDocumentMeta({
    title: `${recipe.title} – Sommertrüffel Rezept | sommertrueffel.de`,
    description: `${recipe.description} Zubereitungszeit: ${recipe.totalTimeMinutes} Min. Inklusive Zutaten, Profi-Tipps und BfR-Hinweisen.`,
    canonicalPath: `/rezepte/${recipe.slug}`,
    schema: recipeSchema
  });

  const toggleIngredient = (ing: string) => {
    setCheckedIngredients((prev) =>
      prev.includes(ing) ? prev.filter((i) => i !== ing) : [...prev, ing]
    );
  };

  const otherRecipes = RECIPES.filter((r) => r.id !== recipe.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#faf9f6] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Back */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs transition-all mb-8 hover:border-amber-400 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Übersicht</span>
        </button>

        {/* Recipe Main Card */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-10">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-black">
              {recipe.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {recipe.totalTimeMinutes} Min. Gesamtzeit
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center gap-1">
              <Utensils className="w-3.5 h-3.5 text-slate-500" />
              {recipe.servings}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              {recipe.truffleAmount}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {recipe.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            {recipe.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-700 mt-4 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/70">
            {recipe.description}
          </p>

          {/* BfR Health / Safety Warning Box */}
          {recipe.bfrSafetyNote && (
            <div className="mt-6 bg-amber-50/80 border-l-4 border-amber-600 p-5 rounded-r-2xl border-y border-r border-amber-200">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm mb-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>BfR-Verbraucherhinweis: {recipe.bfrSafetyNote.riskIngredient}</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed mb-2">
                {recipe.bfrSafetyNote.warning}
              </p>
              <div className="text-xs text-slate-800 bg-white/80 p-2.5 rounded-lg border border-amber-200/80">
                <strong className="font-bold text-amber-950 block mb-0.5">Sichere Alternative für empfindliche Gruppen:</strong>
                {recipe.bfrSafetyNote.safeAlternative}
              </div>
            </div>
          )}

          {/* Ingredients & Shopping Assistance Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Ingredients Column */}
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                <span>Zutaten ({recipe.servings})</span>
              </h2>
              <p className="text-[11px] text-slate-500">
                Haken Sie die benötigten Zutaten während des Kochens einfach ab:
              </p>
              <div className="space-y-2">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = checkedIngredients.includes(ing);
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleIngredient(ing)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-slate-50 border-slate-200 text-slate-400 line-through'
                          : 'bg-white border-slate-200 hover:border-amber-400 text-slate-800'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center flex-shrink-0 border ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span>{ing}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Shopping & Nutrition Column */}
            <div className="md:col-span-5 space-y-4">
              
              {/* Affiliate CTA Box */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Einkaufshilfe für dieses Rezept
                </div>
                <h3 className="text-sm font-bold text-white">
                  Frischeknolle &amp; Hobel auf Amazon
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Achten Sie beim Kauf auf frische Tuber aestivum und einen scharfen Hobel für hauchdünne Späne.
                </p>
                <div className="space-y-2 pt-1">
                  <a
                    href={recipe.truffleSearchLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all"
                  >
                    <span>Passende Trüffel suchen *</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={recipe.hobelSearchLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider py-2.5 px-3 rounded-xl border border-slate-700 transition-all"
                  >
                    <span>Passenden Hobel suchen *</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-[10px] text-slate-400 text-center">
                  * Amazon-Partnerlinks: Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
                </p>
              </div>

              {/* Nutrition Card */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-700" />
                  <span>Nährwertangaben (geschätzt):</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-700">
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Brennwert:</span>
                    <strong className="text-slate-900">{recipe.nutrition.calories}</strong>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Fett:</span>
                    <strong className="text-slate-900">{recipe.nutrition.fatContent}</strong>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Kohlenhydrate:</span>
                    <strong className="text-slate-900">{recipe.nutrition.carbohydrateContent}</strong>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Eiweiß:</span>
                    <strong className="text-slate-900">{recipe.nutrition.proteinContent}</strong>
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">
                  Basis: {recipe.nutrition.servingSize}
                </span>
              </div>

            </div>

          </div>

          {/* Preparation Steps */}
          <div className="mt-10 pt-8 border-t border-slate-200 space-y-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-950 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-amber-700" />
              <span>Schritt-für-Schritt Zubereitung</span>
            </h2>

            <div className="space-y-4">
              {recipe.steps.map((step, idx) => (
                <div
                  key={idx}
                  id={`step-${idx + 1}`}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chef / Pro Tip */}
          <div className="mt-8 bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200 flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ChefHat className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-sm font-bold text-amber-950 block mb-1">
                Küchen-Praxistipp der Fachredaktion:
              </strong>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                {recipe.proTip}
              </p>
            </div>
          </div>

        </article>

        {/* Other Recommended Recipes */}
        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-950">
            Weitere Sommertrüffel-Rezepte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherRecipes.map((other) => (
              <div
                key={other.id}
                onClick={() => onSelectRecipe(other.slug)}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {other.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {other.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {other.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-800">
                  <span>Rezept ansehen</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
