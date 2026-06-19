"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Tag } from "lucide-react";
import Link from "next/link";
import type { Article } from "@/data/news";
import { getCategoryLabel, formatDate } from "@/data/news";

type Props = {
  article: Article;
};

export default function FeaturedArticle({ article }: Props) {
  const categoryColors: Record<string, string> = {
    "press-release": "bg-skt-red/10 text-skt-red border-skt-red/20",
    operations: "bg-blue-50 text-blue-700 border-blue-200",
    sustainability: "bg-emerald-50 text-emerald-700 border-emerald-200",
    safety: "bg-amber-50 text-amber-700 border-amber-200",
    community: "bg-purple-50 text-purple-700 border-purple-200",
    announcement: "bg-skt-blue/10 text-skt-blue border-skt-blue/20",
  };

  const badgeClass = categoryColors[article.category] ?? "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-skt-red to-transparent" />
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-skt-red">
          Featured Story
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-skt-red to-transparent" />
      </div>

      <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden hover:shadow-lg transition-all duration-500">
        {/* Color accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-skt-red via-skt-blue to-skt-navy" />

        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border ${badgeClass}`}
            >
              <Tag size={8} />
              {getCategoryLabel(article.category)}
            </span>
            <span className="text-xs text-ink-soft flex items-center gap-1">
              <Clock size={11} /> {article.readTime}
            </span>
            {article.location && (
              <span className="text-xs text-ink-soft flex items-center gap-1">
                <MapPin size={11} /> {article.location}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl text-ink tracking-tight leading-tight mb-4 group-hover:text-skt-blue transition-colors duration-300 font-serif font-normal">
            {article.title}
          </h2>

          <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-5 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-skt-blue to-skt-navy flex items-center justify-center text-white text-xs font-bold shrink-0">
                {article.author?.charAt(0) ?? "S"}
              </div>
              <div>
                <p className="text-xs font-semibold text-ink">{article.author ?? "SKT Global"}</p>
                <p className="text-[10px] text-ink-soft">{formatDate(article.date)}</p>
              </div>
            </div>

            <Link
              href={`/media/newsroom/${article.slug}`}
              className="inline-flex items-center gap-2 bg-skt-blue text-white text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-full hover:bg-skt-navy transition-colors duration-200 group/btn"
            >
              Read Story
              <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
