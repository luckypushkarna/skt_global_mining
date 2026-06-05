"use client";

import { useState, useMemo } from "react";
import type { JSX } from "react";
import type { NewsCategory } from "@/data/news";
import { articles, getFeaturedArticle, getCategoryLabel } from "@/data/news";

import NewsroomHero from "@/components/newsroom/NewsroomHero";
import FeaturedArticle from "@/components/newsroom/FeaturedArticle";
import ArticleCard from "@/components/newsroom/ArticleCard";
import NewsFilters from "@/components/newsroom/NewsFilters";
import NewsletterCTA from "@/components/newsroom/NewsletterCTA";

export default function NewsroomPage(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<NewsCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticle = getFeaturedArticle();

  const filteredArticles = useMemo(() => {
    return articles
      .filter((a) => !a.featured)
      .filter((a) => {
        const matchCategory =
          activeCategory === "all" || a.category === activeCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchSearch =
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          getCategoryLabel(a.category).toLowerCase().includes(q);
        return matchCategory && matchSearch;
      });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#F4F7FA]">
      {/* Hero */}
      <NewsroomHero />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Featured Article */}
        <FeaturedArticle article={featuredArticle} />

        {/* Filters */}
        <NewsFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={filteredArticles.length}
        />

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📰</span>
            </div>
            <h3 className="text-base font-semibold text-ink mb-1">No articles found</h3>
            <p className="text-sm text-ink-soft">
              Try adjusting your filters or search query.
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <NewsletterCTA />
      </div>
    </main>
  );
}
