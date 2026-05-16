import type { NavItem, Service, Stat, TeamMember, Milestone } from "@/types";

export const SITE_CONFIG = {
  name: "SKT Global Mining & Services Limited",
  shortName: "SKT Global",
  description:
    "A world-class mining and industrial services company delivering engineering excellence, safety leadership, and sustainable resource development across global operations.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://sktglobal.com",
  ogImage: "/og-image.jpg",
  twitterHandle: "@sktglobal",
  founded: "2005",
  headquarters: "Mumbai, India",
  email: "contact@sktglobal.com",
  phone: "+91 22 4000 0000",
  address: "SKT Tower, BKC, Mumbai 400 051, India",
} as const;

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Safety", href: "/safety" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES: ReadonlyArray<Service> = [
  {
    id: "open-cast-mining",
    title: "Open Cast Mining",
    description:
      "Large-scale surface mining operations powered by precision engineering, advanced blast design, and real-time geological modeling for maximum yield efficiency.",
    icon: "Mountain",
    category: "mining",
    features: [
      "Drill & blast engineering",
      "Slope stability analysis",
      "Real-time geological mapping",
      "Fleet management systems",
    ],
  },
  {
    id: "underground-mining",
    title: "Underground Mining",
    description:
      "Deep shaft and tunnel mining operations with world-class safety protocols, ventilation engineering, and automated ore haulage systems.",
    icon: "Layers",
    category: "mining",
    features: [
      "Shaft sinking & development",
      "Stope design & optimization",
      "Ventilation engineering",
      "Rock mechanics monitoring",
    ],
  },
  {
    id: "mineral-processing",
    title: "Mineral Processing",
    description:
      "State-of-the-art beneficiation and processing plants delivering high-grade concentrates with minimal environmental footprint.",
    icon: "Cog",
    category: "processing",
    features: [
      "Crushing & grinding circuits",
      "Flotation & leaching",
      "Tailings management",
      "Grade control systems",
    ],
  },
  {
    id: "mining-logistics",
    title: "Mining Logistics",
    description:
      "End-to-end supply chain and bulk material handling solutions connecting mine sites to global export terminals with zero-delay precision.",
    icon: "Truck",
    category: "logistics",
    features: [
      "Bulk material handling",
      "Rail & port logistics",
      "Inventory management",
      "Export documentation",
    ],
  },
  {
    id: "safety-management",
    title: "HSE Management",
    description:
      "Comprehensive health, safety, and environment programs built on zero-harm philosophy with ISO 45001 certified systems.",
    icon: "Shield",
    category: "safety",
    features: [
      "ISO 45001 certification",
      "Incident investigation",
      "Safety culture training",
      "Emergency response planning",
    ],
  },
  {
    id: "environmental-services",
    title: "Environmental Services",
    description:
      "Sustainable land rehabilitation, water management, and emissions monitoring to ensure responsible mining that protects ecosystems.",
    icon: "Leaf",
    category: "environmental",
    features: [
      "Land rehabilitation",
      "Water management",
      "Emissions monitoring",
      "Biodiversity assessment",
    ],
  },
] as const;

export const STATS: ReadonlyArray<Stat> = [
  {
    value: "18",
    suffix: "+",
    label: "Years of Excellence",
    description: "Delivering world-class mining operations since 2005",
  },
  {
    value: "47",
    suffix: "M",
    prefix: "",
    label: "Tonnes Processed",
    description: "Total ore processed across all operations",
  },
  {
    value: "12",
    suffix: "+",
    label: "Active Projects",
    description: "Simultaneous operations across multiple geographies",
  },
  {
    value: "8",
    suffix: "+",
    label: "Countries Operated",
    description: "Global presence from Asia to Africa",
  },
  {
    value: "4200",
    suffix: "+",
    label: "Workforce Strong",
    description: "Skilled professionals across all disciplines",
  },
  {
    value: "Zero",
    suffix: "",
    label: "Fatal Incidents",
    description: "Sustained zero-fatality record since 2018",
  },
] as const;

export const TEAM_MEMBERS: ReadonlyArray<TeamMember> = [
  {
    id: "sk-thakur",
    name: "S.K. Thakur",
    role: "Chairman & Managing Director",
    bio: "Visionary leader with 35+ years in global mining and resource development. Former advisor to multiple national mining regulatory bodies.",
  },
  {
    id: "rajesh-kumar",
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    bio: "Strategic operations leader with expertise in large-scale project delivery, international business development, and organizational transformation.",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Chief Operating Officer",
    bio: "Mining engineer with 22+ years experience in underground and open-cut operations across India, Africa, and Southeast Asia.",
  },
  {
    id: "michael-osei",
    name: "Michael Osei",
    role: "VP – African Operations",
    bio: "Ghana-based operations head leading SKT's fastest-growing regional portfolio with deep community engagement expertise.",
  },
] as const;

export const MILESTONES: ReadonlyArray<Milestone> = [
  {
    year: "2005",
    title: "Foundation",
    description:
      "SKT Global incorporated in Mumbai with first coal mining contract in Jharkhand, India.",
  },
  {
    year: "2009",
    title: "First International Project",
    description:
      "Secured landmark contract in Mozambique, marking the beginning of Africa expansion.",
  },
  {
    year: "2013",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001, ISO 14001, and OHSAS 18001 triple certification across all operations.",
  },
  {
    year: "2016",
    title: "50 Million Tonnes",
    description:
      "Crossed the landmark 50 million tonne cumulative production milestone.",
  },
  {
    year: "2019",
    title: "Technology Transformation",
    description:
      "Launched AI-powered fleet management and real-time geological modeling platform.",
  },
  {
    year: "2023",
    title: "Net Zero Commitment",
    description:
      "Pledged net-zero Scope 1 & 2 emissions by 2040 with comprehensive decarbonization roadmap.",
  },
] as const;

export const MARQUEE_ITEMS = [
  "Engineering Excellence",
  "Zero Harm Philosophy",
  "Global Operations",
  "Sustainable Mining",
  "Workforce of 4200+",
  "ISO Certified",
  "18 Years Strong",
  "Built to Last",
] as const;
