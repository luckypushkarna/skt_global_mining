"use client";

import { Search, X } from "lucide-react";
import type { NewsCategory } from "@/data/news";
import { NEWS_CATEGORIES } from "@/data/news";

type Props = {
  activeCategory: NewsCategory | "all";
  onCategoryChange: (cat: NewsCategory | "all") => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  resultCount: number;
};

export default function NewsFilters({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  resultCount,
}: Props) {
  return (
    <div className="space-y-4 mb-8">
      {/* Search bar */}
      <div className="relative max-w-lg">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none" />
        <input
          type="text"
          placeholder="Search news and press releases…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-9 py-2.5 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-skt-blue/30 focus:border-skt-blue transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {NEWS_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value as NewsCategory | "all")}
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase border transition-all duration-200 ${
              activeCategory === cat.value
                ? "bg-skt-blue text-white border-skt-blue shadow-sm"
                : "bg-white text-ink-soft border-slate-200 hover:border-skt-blue/40 hover:text-skt-blue"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="text-xs text-ink-soft">
        Showing <span className="font-semibold text-ink">{resultCount}</span>{" "}
        {resultCount === 1 ? "article" : "articles"}
        {searchQuery && (
          <>
            {" "}for &ldquo;<span className="font-medium text-skt-blue">{searchQuery}</span>&rdquo;
          </>
        )}
      </p>
    </div>
  );
}
