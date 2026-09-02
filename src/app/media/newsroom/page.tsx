"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// --- Types ---
interface Article {
  id: number;
  date: string;
  category: string;
  headline: string;
  summary: string;
  image?: string;
  pdfUrl: string;
}

// --- Data ---
// This data is dynamically injected by our script
const articles: Article[] = [
  {
    id: 1,
    date: "24  August 2026",
    category: "Media Releases",
    headline: "DC AND KANTANSHI TENNIS CLUB, MUFULIRA",
    summary: "SKT / TTZL supports Kantanshi Tennis Club, Mufulira for upbringing the young tennis players.",
    image: "/news/thumbnails/Thumbnail_CSR.jpeg",
    pdfUrl: "/news/SKT_CSR.pdf"
  },
  {
    id: 6,
    date: "15  June 2026",
    category: "Media Releases",
    headline: "IT'S TIME! ...not to fight, but keep fit & healthy",
    summary: "Download and read the latest update: it’s time!",
    image: "/news/thumbnails/Issue-005-06-2026.pdf_thumb.png",
    pdfUrl: "/news/Issue-005-06-2026.pdf"
  },
  {
    id: 5,
    date: "10  April 2026",
    category: "Media Releases",
    headline: "SIGNING CEREMONY SUCCESS",
    summary: "Download and read the latest update: success",
    image: "/news/thumbnails/Issue-004-04-2026.pdf_thumb.png",
    pdfUrl: "/news/Issue-004-04-2026.pdf"
  },
  {
    id: 3,
    date: "3  April 2026",
    category: "Media Releases",
    headline: "GREATNESS COMES FROM SUCCESS",
    summary: "Download and read the latest update: success",
    image: "/news/thumbnails/Issue-002-03-2026-1.pdf_thumb.png",
    pdfUrl: "/news/Issue-002-03-2026-1.pdf"
  },
  {
    id: 4,
    date: "15  March 2026",
    category: "Media Releases",
    headline: "WE MEET THE MAYOR",
    summary: "Download and read the latest update: mayor",
    image: "/news/thumbnails/Issue-002-03-2026.pdf_thumb.png",
    pdfUrl: "/news/Issue-002-03-2026.pdf"
  },
  {
    id: 2,
    date: "13  March 2026",
    category: "Media Releases",
    headline: "A VISIT OF THE MONTH",
    summary: "Download and read the latest update: month",
    image: "/news/thumbnails/Issue-001-03-2026.pdf_thumb.png",
    pdfUrl: "/news/Issue-001-03-2026.pdf"
  }
];

// --- Utility ---
function formatDateShort(dateStr: string): string {
  const parts = dateStr.replace(/\s+/g, ' ').split(" ");
  if (parts.length >= 3) {
    return `${parts[0]} ${parts[1]?.substring(0, 3)} ${parts[2]}`;
  }
  return dateStr;
}

// --- Components ---

function FeaturedArticle({ article }: { article: Article }) {
  if (!article) return null;
  return (
    <article className="mb-16 md:mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          {article.image && (
            <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer" className="block group">
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden rounded-md border border-neutral-200">
                <Image
                  src={article.image}
                  alt={article.headline}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </a>
          )}
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] tracking-[0.1em] uppercase text-neutral-500 font-medium">
              {article.category}
            </span>
            <span className="text-neutral-300">·</span>
            <time className="text-[11px] text-neutral-400 font-light">
              {article.date}
            </time>
          </div>
          <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer" className="group">
            <h2
              className="text-3xl md:text-4xl font-normal text-neutral-900 leading-[1.15] tracking-[-0.02em] mb-6 group-hover:text-neutral-600 transition-colors duration-300 font-serif"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {article.headline}
            </h2>
          </a>
          <p className="text-[15px] text-neutral-500 font-light leading-[1.75] mb-8">
            {article.summary}
          </p>
          <a
            href={article.pdfUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-white bg-neutral-900 px-6 py-3 rounded-sm font-medium hover:bg-neutral-800 transition-colors duration-300"
          >
            Read Newsletter
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="border-b border-neutral-200 py-6 md:py-8 group">
      <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
          <div className="md:col-span-2">
            <time className="text-[13px] text-neutral-400 font-light tabular-nums">
              {formatDateShort(article.date)}
            </time>
          </div>
          <div className="md:col-span-8">
            <h3
              className="text-lg md:text-xl font-normal text-neutral-900 leading-[1.4] group-hover:text-neutral-600 transition-colors duration-300"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {article.headline}
            </h3>
          </div>
          <div className="md:col-span-2 text-right hidden md:block">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

// --- Main Page ---
export default function NewsroomPage() {
  const featured = articles.length > 0 ? articles[0] : null;
  const feedArticles = articles.slice(1);

  return (
    <div
      className="bg-white min-h-screen"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-normal text-neutral-900 tracking-[-0.02em] mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            News & Updates
          </h1>
          <p className="text-lg text-neutral-500 font-light leading-relaxed">
            Stay informed with our latest newsletters, corporate announcements, and updates from across our operations.
          </p>
        </div>

        {/* Featured Article */}
        {featured && <FeaturedArticle article={featured} />}

        {/* Article Feed */}
        {feedArticles.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-neutral-400 mb-8 pb-4 border-b border-neutral-200">
              More
            </h3>
            <div className="flex flex-col">
              {feedArticles.map((article) => (
                <ArticleRow key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-neutral-100 bg-neutral-50/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[12px] text-neutral-400 font-light">
              © {new Date().getFullYear()} Global Mining & Infrastructure Corporation. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors duration-300 font-light"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
