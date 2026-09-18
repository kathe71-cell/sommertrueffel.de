import React, { useState, useMemo } from 'react';
import { ChefHat, Clock, Utensils, Search, ArrowRight, Scale, Sparkles } from 'lucide-react';
import { RECIPES, RecipeData } from '../data/recipes';

interface RecipeSectionProps {
  onSelectRecipe?: (slug: string) => void;
}

export const RecipeSection: React.FC<RecipeSectionProps> = ({ onSelectRecipe }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((recipe) => {
      const matchesCat = activeCategory === 'all' || recipe.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        recipe.title.toLowerCase().includes(q) ||
        recipe.subtitle.toLowerCase().includes(q) ||
        recipe.ingredients.some((ing) => ing.toLowerCase().includes(q)) ||
        recipe.keywords.some((kw) => kw.toLowerCase().includes(q));

      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenRecipe = (slug: string) => {
    if (onSelectRecipe) {
      onSelectRecipe(slug);
    } else {
      window.location.href = `/rezepte/${slug}`;
    }
  };

  return (
    <section id="rezepte" className="py-16 sm:py-24 bg-[#faf9f6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold mb-3">
            <ChefHat className="w-3.5 h-3.5 text-amber-700" />
            Kulinarische Meisterklasse ({RECIPES.length} Gourmet-Rezepte)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Traditionelle Rezepte mit frischem Sommertrüffel
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Entdecken Sie praxiserprobte Zubereitungsideen für <em>Tuber aestivum</em>. Von der echten umbrischen Butter-Mantecatura bis zu feinen Eierspeisen und Fleischgerichten mit genauen Grammaturen.
          </p>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-4">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rezept oder Zutat suchen (z. B. Tagliolini, Risotto, Ei, Brioche, Carpaccio)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-700 absolute right-3 top-1/2 -translate-y-1/2 font-bold px-1.5 py-0.5 rounded bg-slate-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Alle Rezepte ({RECIPES.length})
            </button>
            <button
              onClick={() => setActiveCategory('pasta')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === 'pasta'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Pasta &amp; Risotto (5)
            </button>
            <button
              onClick={() => setActiveCategory('egg')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === 'egg'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Eierspeisen &amp; Brunch (3)
            </button>
            <button
              onClick={() => setActiveCategory('meat')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === 'meat'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Fleischgerichte (2)
            </button>
            <button
              onClick={() => setActiveCategory('starter')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === 'starter'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Vorspeisen (2)
            </button>
            <button
              onClick={() => setActiveCategory('basic')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === 'basic'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Grundrezepte (2)
            </button>
          </div>

        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-300 rounded-3xl p-12 text-center">
            <ChefHat className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">Keine Rezepte gefunden</h3>
            <p className="text-xs text-slate-500 mt-1">Passen Sie Ihre Suche oder die ausgewählte Kategorie an.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Filter zurücksetzen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-[11px] font-extrabold">
                      {recipe.categoryLabel}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {recipe.totalTimeMinutes} Min.
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 font-medium line-clamp-1">
                    {recipe.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {recipe.description}
                  </p>

                  {/* Highlights Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                    <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      <Utensils className="w-3 h-3 text-slate-400" />
                      {recipe.servings}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      <Scale className="w-3 h-3 text-amber-700" />
                      {recipe.truffleAmount.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleOpenRecipe(recipe.slug)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    <span>Rezept ansehen &amp; nachkochen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
