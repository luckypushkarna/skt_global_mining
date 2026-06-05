"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Tag } from "lucide-react";
import Link from "next/link";
import type { Article } from "@/data/news";
import { getCategoryLabel, formatDate } from "@/data/news";

type Props = {
  article: Article;
  index?: number;
};

const categoryColors: Record<string, string> = {
  "press-release": "bg-skt-red/10 text-skt-red border-skt-red/20",
  operations: "bg-blue-50 text-blue-700 border-blue-200",
  sustainability: "bg-emerald-50 text-emerald-700 border-emerald-200",
  safety: "bg-amber-50 text-amber-700 border-amber-200",
  community: "bg-purple-50 text-purple-700 border-purple-200",
  announcement: "bg-skt-blue/10 text-skt-blue border-skt-blue/20",
};

const categoryAccent: Record<string, string> = {
  "press-release": "group-hover:border-skt-red/40",
  operations: "group-hover:border-blue-300",
  sustainability: "group-hover:border-emerald-300",
  safety: "group-hover:border-amber-300",
  community: "group-hover:border-purple-300",
  announcement: "group-hover:border-skt-blue/40",
};

export default function ArticleCard({ article, index = 0 }: Props) {
  const badgeClass = categoryColors[article.category] ?? "bg-slate-100 text-slate-600 border-slate-200";
  const borderHover = categoryAccent[article.category] ?? "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
    >
      <Link href={`/media/newsroom/${article.slug}`} className="group block h-full">
        <div
          className={`h-full bg-white rounded-xl border border-slate-200/80 shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 ${borderHover}`}
        >
          {/* Top accent strip */}
          <div className="h-0.5 w-full bg-gradient-to-r from-slate-200 via-skt-blue/30 to-slate-200 group-hover:from-skt-blue group-hover:to-skt-navy transition-all duration-300" />

          <div className="p-6">
            {/* Category + time */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`inline-flex items-center gap-1 text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full border ${badgeClass}`}
              >
                <Tag size={7} />
                {getCategoryLabel(article.category)}
              </span>
              <span className="text-[10px] text-ink-soft flex items-center gap-1">
                <Clock size={10} /> {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm md:text-base font-bold text-ink tracking-tight leading-snug mb-3 group-hover:text-skt-blue transition-colors duration-200 line-clamp-3">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-xs text-ink-soft leading-relaxed line-clamp-3 mb-4">
              {article.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                {article.location && (
                  <p className="text-[10px] text-ink-soft flex items-center gap-1">
                    <MapPin size={9} /> {article.location}
                  </p>
                )}
                <p className="text-[10px] text-ink-soft mt-0.5">{formatDate(article.date)}</p>
              </div>
              <span className="text-skt-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
