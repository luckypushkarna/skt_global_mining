export type NewsCategory =
  | "press-release"
  | "operations"
  | "sustainability"
  | "safety"
  | "community"
  | "announcement";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  readTime: string;
  featured?: boolean;
  image?: string;
  author?: string;
  location?: string;
};

export const NEWS_CATEGORIES: { value: NewsCategory | "all"; label: string }[] = [
  { value: "all", label: "All News" },
  { value: "press-release", label: "Press Release" },
  { value: "operations", label: "Operations" },
  { value: "sustainability", label: "Sustainability" },
  { value: "safety", label: "Safety" },
  { value: "community", label: "Community" },
  { value: "announcement", label: "Announcement" },
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "skt-secures-mopani-contract-extension",
    title: "SKT Global Secures Major Contract Extension at Mopani Copper Mines",
    excerpt:
      "SKT Global Mining & Services Limited has successfully renewed its underground mining contract at Mopani Copper Mines for an additional 5-year term, reinforcing our position as Zambia's leading mining services provider.",
    category: "press-release",
    date: "2026-05-28",
    readTime: "4 min read",
    featured: true,
    author: "SKT Communications",
    location: "Kitwe, Zambia",
  },
  {
    id: "2",
    slug: "fleet-expansion-225-machines",
    title: "Fleet Expansion: SKT Deploys 225+ Heavy Machines Across Active Sites",
    excerpt:
      "Our mechanised fleet has grown by 40 units this quarter, with the addition of Sandvik and Epiroc loaders and drill rigs that further enhance our underground mining capability.",
    category: "operations",
    date: "2026-05-15",
    readTime: "3 min read",
    author: "Operations Team",
    location: "Copperbelt, Zambia",
  },
  {
    id: "3",
    slug: "zero-harm-milestone-2026",
    title: "SKT Achieves 1 Million Man-Hours Without a Lost-Time Injury",
    excerpt:
      "We are proud to announce that our teams across all active mining sites have collectively worked 1 million man-hours without a single lost-time injury - a testament to our unwavering safety culture.",
    category: "safety",
    date: "2026-05-10",
    readTime: "3 min read",
    author: "HSE Department",
    location: "Zambia",
  },
  {
    id: "4",
    slug: "local-workforce-initiative-2026",
    title: "Local Workforce Initiative: 94% Zambian Employee Ratio Achieved",
    excerpt:
      "SKT Global has reached a landmark 94% local employment ratio, demonstrating our commitment to creating sustainable economic opportunities for Zambian communities.",
    category: "community",
    date: "2026-04-30",
    readTime: "4 min read",
    author: "HR Division",
    location: "Kitwe & Mufulira, Zambia",
  },
  {
    id: "5",
    slug: "esg-report-2025",
    title: "SKT Publishes ESG Report 2025: Transparency in Sustainability",
    excerpt:
      "Our annual ESG Report 2025 is now available, documenting our environmental stewardship, social contributions, and governance standards across all operations in Zambia.",
    category: "sustainability",
    date: "2026-04-18",
    readTime: "5 min read",
    author: "Sustainability Team",
    location: "Zambia",
  },

  {
    id: "7",
    slug: "community-school-infrastructure",
    title: "SKT Completes Infrastructure Development at Three Community Schools",
    excerpt:
      "As part of our community impact programme, SKT Global has funded and completed construction of classrooms, sanitation facilities, and ICT labs at three schools near our operational areas.",
    category: "community",
    date: "2026-03-22",
    readTime: "4 min read",
    author: "Community Relations",
    location: "Copperbelt, Zambia",
  },
  {
    id: "8",
    slug: "underground-mining-depth-record",
    title: "SKT Sets New Operational Depth Record in Zambian Underground Mining",
    excerpt:
      "Our engineering teams have successfully developed mining operations at unprecedented depths at the Mopani concession, unlocking significant new copper ore resources.",
    category: "operations",
    date: "2026-03-10",
    readTime: "4 min read",
    author: "Engineering Team",
    location: "Mopani, Zambia",
  },
  {
    id: "9",
    slug: "environmental-rehabilitation-programme",
    title: "Environmental Rehabilitation: SKT Plants 50,000 Trees in Copperbelt",
    excerpt:
      "Under our Green Copperbelt initiative, SKT Global has surpassed its 2025 target by planting 50,000 indigenous trees across rehabilitated mine areas.",
    category: "sustainability",
    date: "2026-02-28",
    readTime: "3 min read",
    author: "Environmental Team",
    location: "Copperbelt, Zambia",
  },
];

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0]!;
}

export function getArticlesByCategory(category: NewsCategory | "all"): Article[] {
  if (category === "all") return articles.filter((a) => !a.featured);
  return articles.filter((a) => a.category === category && !a.featured);
}

export function getCategoryLabel(category: NewsCategory): string {
  const found = NEWS_CATEGORIES.find((c) => c.value === category);
  return found ? found.label : category;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


