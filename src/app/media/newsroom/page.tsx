"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";

// --- Types ---
interface Article {
  id: number;
  date: string;
  category: string;
  headline: string;
  summary: string;
  image?: string;
  featured?: boolean;
  year: number;
}

// --- Data ---
const articles: Article[] = [
  {
    id: 1,
    date: "28 February 2025",
    category: "Corporate",
    headline:
      "Full-Year Results: Record Production and Revenue Growth Across All Divisions",
    summary:
      "The corporation reported record annual production of 248 million tonnes across its global portfolio, with revenue increasing 14% year-on-year to $38.2 billion. The Board declared a final dividend of $1.42 per share, reflecting strong cash generation and disciplined capital allocation throughout the period.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=700&fit=crop",
    featured: true,
    year: 2025,
  },
  {
    id: 2,
    date: "21 February 2025",
    category: "Operations",
    headline:
      "Autonomous Haulage Fleet Expansion Approved for Pilbara Iron Ore Operations",
    summary:
      "The Board has approved a $640 million investment to expand the autonomous haulage fleet across three Pilbara operations. The expansion will add 42 autonomous trucks and is expected to reduce unit operating costs by 12% upon full deployment in late 2026.",
    year: 2025,
  },
  {
    id: 3,
    date: "14 February 2025",
    category: "Sustainability",
    headline:
      "Corporation Achieves 35% Reduction in Scope 1 and 2 Emissions Against 2019 Baseline",
    summary:
      "The corporation has surpassed its interim emissions reduction target, achieving a 35% reduction in Scope 1 and 2 greenhouse gas emissions compared with the 2019 baseline. The achievement was driven by renewable energy procurement, fleet electrification, and process efficiency improvements.",
    year: 2025,
  },
  {
    id: 4,
    date: "7 February 2025",
    category: "Projects",
    headline:
      "Atacama Copper Expansion Reaches 75% Completion Milestone",
    summary:
      "Construction of the $2.8 billion Atacama copper expansion in northern Chile has reached 75% completion, on schedule and within budget. First production is anticipated in the third quarter of 2026, adding 180,000 tonnes per annum of copper equivalent capacity.",
    year: 2025,
  },
  {
    id: 5,
    date: "31 January 2025",
    category: "Community",
    headline:
      "Community Health Partnership Expanded Across Southern African Operations",
    summary:
      "A new five-year community health partnership has been established across the corporation's Southern African operations, in collaboration with local government and the World Health Organisation. The programme will provide healthcare services to approximately 120,000 community members.",
    year: 2025,
  },
  {
    id: 6,
    date: "24 January 2025",
    category: "Media Releases",
    headline:
      "Chief Executive Officer to Present at Global Mining Investment Conference",
    summary:
      "Margaret Chen, Chief Executive Officer, will deliver the keynote address at the Global Mining Investment Conference in London on 18 March 2025. The presentation will outline the corporation's strategic priorities and capital allocation framework for the medium term.",
    year: 2025,
  },
  {
    id: 7,
    date: "17 January 2025",
    category: "Operations",
    headline:
      "Record Quarterly Production Achieved at Western Australian Gold Operations",
    summary:
      "The Western Australian gold division delivered record quarterly production of 412,000 ounces in the December 2024 quarter, driven by higher ore grades and improved processing throughput. Full-year guidance has been reaffirmed at 1.55 to 1.65 million ounces.",
    year: 2025,
  },
  {
    id: 8,
    date: "10 January 2025",
    category: "Corporate",
    headline:
      "Appointment of New Non-Executive Director to the Board",
    summary:
      "The Board has announced the appointment of Dr. Sarah Mitchell as an independent non-executive director, effective 1 March 2025. Dr. Mitchell brings over 25 years of experience in environmental science and corporate governance, most recently serving as Chief Sustainability Officer at a major European energy company.",
    year: 2025,
  },
  {
    id: 9,
    date: "18 December 2024",
    category: "Projects",
    headline:
      "Feasibility Study Completed for East African Nickel Project",
    summary:
      "A positive feasibility study has been completed for the East African nickel project in Tanzania, confirming a mine life of 22 years and average annual production of 45,000 tonnes of nickel equivalent. A final investment decision is expected in the second half of 2025.",
    year: 2024,
  },
  {
    id: 10,
    date: "5 December 2024",
    category: "Sustainability",
    headline:
      "Renewable Energy Agreement Signed for Chilean Operations",
    summary:
      "A long-term power purchase agreement has been executed with a leading renewable energy provider, securing 100% renewable electricity supply for the corporation's Chilean copper and lithium operations from 2026. The agreement is expected to eliminate approximately 280,000 tonnes of annual CO₂ emissions.",
    year: 2024,
  },
  {
    id: 11,
    date: "22 November 2024",
    category: "Operations",
    headline:
      "Processing Plant Upgrade Completed at South African Platinum Complex",
    summary:
      "The $320 million processing plant upgrade at the Bushveld platinum complex has been completed on schedule. The enhanced facility increases processing capacity by 25% and improves platinum group metal recovery rates by approximately 3.5 percentage points.",
    year: 2024,
  },
  {
    id: 12,
    date: "8 November 2024",
    category: "Community",
    headline:
      "Educational Scholarship Programme Awards 200 Scholarships Across Host Communities",
    summary:
      "The corporation's flagship educational scholarship programme has awarded 200 scholarships to students from host communities across Australia, South Africa, Chile, and Tanzania. The programme, now in its fifteenth year, has supported over 2,400 students pursuing tertiary education.",
    year: 2024,
  },
  {
    id: 13,
    date: "25 October 2024",
    category: "Corporate",
    headline:
      "Half-Year Financial Results: Strong Performance Amid Market Volatility",
    summary:
      "The corporation reported half-year revenue of $18.9 billion and underlying earnings of $6.1 billion, reflecting resilient operational performance and disciplined cost management despite commodity price volatility. An interim dividend of $0.68 per share was declared.",
    year: 2024,
  },
  {
    id: 14,
    date: "10 October 2024",
    category: "Media Releases",
    headline:
      "Corporation Ranked Among Top 10 Global Mining Companies for ESG Performance",
    summary:
      "The corporation has been ranked among the top ten global mining companies for environmental, social, and governance performance by the Dow Jones Sustainability Index. The ranking reflects sustained improvements in emissions reduction, safety performance, and community investment.",
    year: 2024,
  },
  {
    id: 15,
    date: "15 September 2024",
    category: "Projects",
    headline:
      "Underground Mine Extension Approved at Canadian Gold Operations",
    summary:
      "The Board has approved a $480 million underground mine extension at the Red Lake gold complex in Ontario, Canada. The extension will access high-grade ore zones below the current mining horizon, extending the mine life by approximately eight years.",
    year: 2024,
  },
  {
    id: 16,
    date: "20 August 2024",
    category: "Operations",
    headline:
      "Safety Milestone: 10 Million Hours Without Lost-Time Injury at Pilbara Operations",
    summary:
      "The Pilbara iron ore division has achieved a significant safety milestone, recording 10 million work hours without a lost-time injury. The achievement reflects the division's sustained commitment to zero-harm principles and behavioural safety programmes.",
    year: 2024,
  },
  {
    id: 17,
    date: "12 December 2023",
    category: "Corporate",
    headline:
      "Full-Year Results: Solid Operational Delivery and Strategic Progress",
    summary:
      "The corporation delivered solid full-year results with production of 232 million tonnes and revenue of $33.5 billion. Strategic milestones included the completion of the autonomous haulage pilot programme and the announcement of the Atacama copper expansion.",
    year: 2023,
  },
  {
    id: 18,
    date: "5 October 2023",
    category: "Sustainability",
    headline:
      "Climate Transition Plan Published in Alignment with TCFD Recommendations",
    summary:
      "The corporation has published its inaugural Climate Transition Plan, outlining a credible pathway to net-zero Scope 1 and 2 emissions by 2050. The plan includes interim targets, capital allocation priorities, and governance arrangements aligned with the Task Force on Climate-related Financial Disclosures.",
    year: 2023,
  },
  {
    id: 19,
    date: "18 July 2023",
    category: "Projects",
    headline:
      "Exploration Success: Significant Copper-Gold Discovery in South America",
    summary:
      "Exploration drilling at the Cordillera prospect in Argentina has intersected significant copper-gold mineralisation, with assay results indicating potential for a large-scale deposit. A resource definition drilling programme has been approved for the 2024 field season.",
    year: 2023,
  },
  {
    id: 20,
    date: "3 March 2023",
    category: "Community",
    headline:
      "Water Infrastructure Programme Completed in Tanzanian Host Communities",
    summary:
      "A $15 million water infrastructure programme has been completed across twelve communities near the corporation's Tanzanian operations, providing reliable clean water access to approximately 45,000 people. The programme was delivered in partnership with local government and international development organisations.",
    year: 2023,
  },
];

const categories = [
  "All",
  "Operations",
  "Projects",
  "Corporate",
  "Sustainability",
  "Community",
  "Media Releases",
];

const years = [2025, 2024, 2023];

// --- Utility ---
function formatDateShort(dateStr: string): string {
  const parts = dateStr.split(" ");
  return `${parts[0]} ${parts[1]?.substring(0, 3)} ${parts[2]}`;
}

// --- Components ---

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <FadeIn>
      <article className="border-b border-neutral-200 pb-10 md:pb-14 mb-10 md:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            {article.image && (
              <a href="#" className="block group">
                <div className="aspect-[16/10] bg-neutral-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.headline}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
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
            <a href="#" className="group">
              <h2
                className="text-2xl md:text-3xl font-normal text-neutral-900 leading-[1.25] tracking-[-0.01em] mb-5 group-hover:text-neutral-600 transition-colors duration-300"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {article.headline}
              </h2>
            </a>
            <p className="text-[15px] text-neutral-500 font-light leading-[1.75] mb-6">
              {article.summary.substring(0, 200)}...
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-neutral-900 font-medium hover:text-neutral-600 transition-colors duration-300"
            >
              Read full article
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

function ArticleRow({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  return (
    <FadeIn delay={Math.min(index * 0.04, 0.3)}>
      <article className="border-b border-neutral-100 py-6 md:py-7 group">
        <a href="#" className="block">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline">
            <div className="md:col-span-2">
              <time className="text-[12px] text-neutral-400 font-light tabular-nums">
                {formatDateShort(article.date)}
              </time>
            </div>
            <div className="md:col-span-2">
              <span className="text-[11px] tracking-[0.08em] uppercase text-neutral-500 font-medium">
                {article.category}
              </span>
            </div>
            <div className="md:col-span-8">
              <h3
                className="text-base md:text-[17px] font-normal text-neutral-900 leading-[1.4] group-hover:text-neutral-600 transition-colors duration-300 mb-1.5"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {article.headline}
              </h3>
              <p className="text-[13px] text-neutral-400 font-light leading-[1.65] line-clamp-2 hidden md:block">
                {article.summary}
              </p>
            </div>
          </div>
        </a>
      </article>
    </FadeIn>
  );
}

// --- Main Page ---
export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const feedRef = useRef<HTMLDivElement>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      if (!a.featured) {
        if (activeCategory !== "All" && a.category !== activeCategory)
          return false;
        if (activeYear !== null && a.year !== activeYear) return false;
      }
      return true;
    });
  }, [activeCategory, activeYear]);

  const featured = articles.find((a) => a.featured);
  const feedArticles = filteredArticles.filter((a) => !a.featured);
  const displayedArticles = feedArticles.slice(0, visibleCount);
  const hasMore = visibleCount < feedArticles.length;

  const handleFilterChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveYear(null);
    setVisibleCount(8);
  };

  const handleYearChange = (year: number) => {
    setActiveYear(activeYear === year ? null : year);
    setVisibleCount(8);
  };

  return (
    <div
      className="bg-white min-h-screen"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Top bar */}
      <div className="border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-neutral-800 transition-colors duration-300 font-light flex items-center gap-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <time className="text-[11px] text-neutral-400 font-light">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </div>

      {/* Header */}
      <header className="max-w-[1200px] mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-8 md:pb-10 border-b border-neutral-900">
        <FadeIn>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 tracking-[-0.03em] mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Newsroom
          </h1>
          <p className="text-[15px] text-neutral-500 font-light leading-[1.7] max-w-2xl">
            Latest company announcements, operational updates, project
            milestones, and corporate developments.
          </p>
        </FadeIn>
      </header>

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Filter Bar */}
        <FadeIn delay={0.1}>
          <div className="py-5 border-b border-neutral-100 flex flex-wrap items-center gap-x-1 gap-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-3 py-1.5 text-[12px] tracking-[0.02em] font-medium transition-all duration-300 rounded-sm ${
                  activeCategory === cat && activeYear === null
                    ? "text-neutral-900 bg-neutral-100"
                    : "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {cat}
              </button>
            ))}

            <div className="w-px h-4 bg-neutral-200 mx-2 hidden sm:block" />

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-neutral-300 font-light mr-1 hidden sm:inline">
                Archive:
              </span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(year)}
                  className={`px-2.5 py-1.5 text-[12px] font-light transition-all duration-300 rounded-sm tabular-nums ${
                    activeYear === year
                      ? "text-neutral-900 bg-neutral-100 font-medium"
                      : "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Featured Article */}
        {featured &&
          activeCategory === "All" &&
          activeYear === null && (
            <div className="pt-10 md:pt-14">
              <FeaturedArticle article={featured} />
            </div>
          )}

        {/* News Feed */}
        <div ref={feedRef}>
          {/* Column headers (desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-6 pt-4 pb-3 border-b border-neutral-200">
            <div className="col-span-2">
              <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium">
                Date
              </span>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium">
                Category
              </span>
            </div>
            <div className="col-span-8">
              <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium">
                Headline
              </span>
            </div>
          </div>

          {displayedArticles.length > 0 ? (
            displayedArticles.map((article, i) => (
              <ArticleRow key={article.id} article={article} index={i} />
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-sm text-neutral-400 font-light">
                No articles found for the selected filters.
              </p>
            </div>
          )}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="py-10 text-center border-b border-neutral-100">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="text-[12px] tracking-[0.1em] uppercase text-neutral-500 font-medium hover:text-neutral-900 transition-colors duration-300 px-6 py-3 border border-neutral-200 hover:border-neutral-400 rounded-sm"
            >
              Load more articles
            </button>
          </div>
        )}

        {/* Archive Section */}
        <div className="py-12 md:py-16 border-t border-neutral-200 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <h3 className="text-[11px] tracking-[0.15em] uppercase text-neutral-900 font-medium mb-1">
                Archive
              </h3>
              <p className="text-[13px] text-neutral-400 font-light">
                Browse by year
              </p>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-3">
                {years.map((year) => {
                  const count = articles.filter(
                    (a) => a.year === year
                  ).length;
                  return (
                    <button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      className={`group flex items-baseline gap-2 px-5 py-3 border transition-all duration-300 rounded-sm ${
                        activeYear === year
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 hover:border-neutral-400 text-neutral-700"
                      }`}
                    >
                      <span
                        className="text-lg font-light tabular-nums"
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                        }}
                      >
                        {year}
                      </span>
                      <span
                        className={`text-[11px] font-light ${
                          activeYear === year
                            ? "text-neutral-400"
                            : "text-neutral-400"
                        }`}
                      >
                        {count} {count === 1 ? "article" : "articles"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Subscriptions */}
        <div className="py-12 md:py-16 border-t border-neutral-100">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4">
              <h3
                className="text-xl font-normal text-neutral-900 tracking-[-0.01em] mb-2"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Stay informed
              </h3>
              <p className="text-[13px] text-neutral-400 font-light leading-[1.7]">
                Subscribe to receive company announcements
                <br />
                and operational updates directly.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-6">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 text-sm text-neutral-900 font-light border border-neutral-200 rounded-sm outline-none focus:border-neutral-400 transition-colors duration-300 placeholder:text-neutral-300"
                />
                <button className="px-6 py-3 text-[12px] tracking-[0.08em] uppercase text-white font-medium bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 rounded-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-[11px] text-neutral-300 font-light">
                By subscribing you agree to our privacy policy. Unsubscribe at
                any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 mt-8">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p
                className="text-sm font-normal text-neutral-900 mb-1"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Global Mining & Infrastructure Corporation
              </p>
              <p className="text-[12px] text-neutral-400 font-light">
                ASX: GMI &nbsp;·&nbsp; LSE: GMIC &nbsp;·&nbsp; JSE: GMC
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "About",
                  "Leadership",
                  "Operations",
                  "Sustainability",
                  "Investor Relations",
                  "Careers",
                  "Contact",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col md:flex-row justify-between gap-3">
            <p className="text-[11px] text-neutral-400 font-light">
              © 2025 Global Mining & Infrastructure Corporation. All rights
              reserved.
            </p>
            <div className="flex gap-5">
              {["Privacy", "Terms", "Cookies", "Accessibility"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[11px] text-neutral-400 hover:text-neutral-700 transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
