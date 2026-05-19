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
  { label: "Operations", href: "/services" },
  { label: "Infrastructure", href: "/projects" },
  { label: "Safety", href: "/safety" },
  { label: "Communities", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
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
    value: "225",
    suffix: "+",
    prefix: "",
    label: "Underground Machines",
    description: "Mechanised fleet supporting continuous underground operations.",
  },
  {
    value: "1500",
    suffix: "+",
    prefix: "",
    label: "Zambian Workforce",
    description: "Skilled operational teams across mining systems.",
  },
  {
    value: "50",
    suffix: "M+",
    prefix: "US$",
    label: "Initial Investment",
    description: "Strategic infrastructure and operational deployment.",
  },
  {
    value: "50",
    suffix: "%",
    prefix: "",
    label: "Mopani Targets",
    description: "Development and production targets achieved at Mopani operations.",
  },
  {
    value: "24/7",
    suffix: "",
    prefix: "",
    label: "Operations Support",
    description: "Continuous underground mining support infrastructure.",
  },
  {
    value: "3",
    suffix: "M+",
    prefix: "US$",
    label: "Spare Parts Inventory",
    description: "Strategic warehousing and operational readiness systems.",
  },
] as const;

export const TEAM_MEMBERS: ReadonlyArray<TeamMember> = [
  {
    id: "sahil-talreja",
    name: "Mr. Sahil Talreja",
    role: "Managing Director at SKT Global",
    bio: "Strategic leadership architect directing TTIPL Group's global expansion, engineering resources, and industrial support networks.",
  },
  {
    id: "anand-kolappa-pillai",
    name: "Mr. Anand Kolappa Pillai",
    role: "Director at SKT Global",
    bio: "Corporate strategist overseeing international infrastructure projects, technology transfers, and strategic capital ventures.",
  },
  {
    id: "sanjay-kumar-sharma",
    name: "Mr. Sanjay Kumar sharma",
    role: "CEO at SKT Global",
    bio: "Distinguished operations leader with deep experience in heavy machinery deployment, underground mining methods, and regional scaling.",
  },
  {
    id: "srinivasulu-jonnalagadda",
    name: "Mr. Srinivasulu Jonnalagadda",
    role: "CFO at SKT Global",
    bio: "Chartered finance executive managing multinational balance sheets, risk frameworks, and large-scale mining capital projects.",
  },
  {
    id: "kiran-kumar-reddy",
    name: "Mr. Kiran Kumar Reddy",
    role: "Mine manager at SOB",
    bio: "Leading day-to-day mechanized mining, ventilation systems, and production targets at the high-capacity SOB underground mine site.",
  },
  {
    id: "suresh-babu-deshamalla",
    name: "Mr. Suresh Babu Deshamalla",
    role: "Head of Maintenance at SKT Global",
    bio: "Managing procurement, preventive maintenance, and mobilization of our 225+ underground mechanised mining vehicle fleet.",
  },
  {
    id: "kuldeep-kulshrestha",
    name: "Mr. Kuldeep Kulshrestha",
    role: "Commercial manager at SKT Global",
    bio: "Directing international supply chain integration, key commercial relationships, and business development initiatives.",
  },
  {
    id: "mulenga-mutati",
    name: "Mr. Mulenga Mutati",
    role: "HR manger at SKT Global",
    bio: "Directing human resource strategies, workforce development, talent acquisition, and employee relations across mining operations.",
  },
  {
    id: "safeli-maxim-chipulu",
    name: "Mr. Safeli maxim chipulu",
    role: "Site Manager at Mufulira",
    bio: "Directing day-to-day mechanized mining, site safety, and production targets at the Mufulira underground mine site.",
  },
  {
    id: "toms-joseph",
    name: "Mr Toms Joseph",
    role: "Mine manager at Mufulira",
    bio: "Directing day-to-day mechanized mining, site safety, and production targets at the Mufulira underground mine site.",
  },
] as const;

export const MILESTONES: ReadonlyArray<Milestone> = [
  {
    year: "2024",
    title: "Establishment",
    description: "SKT Global Mining & Services Limited begins operations in Zambia as part of TTIPL’s strategic mining expansion.",
  },
  {
    year: "6 Months",
    title: "Rapid Mobilisation",
    description: "225 underground mining machines mobilised through an investment exceeding US$50 million.",
  },
  {
    year: "Workforce",
    title: "Workforce Development",
    description: "More than 1,500 Zambian employees recruited and supported by skilled international mining professionals.",
  },
  {
    year: "Infrastructure",
    title: "Infrastructure Expansion",
    description: "Comprehensive operational infrastructure established including workshops, warehousing systems, accommodation facilities, transportation networks, and dedicated support services for expatriate experts and operational teams.",
  },
  {
    year: "Mopani",
    title: "Mopani Operations",
    description: "Approximately 50% of Mopani Copper Mines development and production targets achieved within the first ten months.",
  },
  {
    year: "Future",
    title: "Building Long-Term Mining Capacity",
    description: "SKT Global continues to expand underground infrastructure, mechanised operations, technical systems, and workforce capacity in support of Mopani Copper Mines’ long-term production objectives. Focused on uninterrupted mining operations, operational modernisation, and sustainable production growth, the company is strategically positioning itself to support up to 90% of future MCM mining activities.",
  },
] as const;

export const MARQUEE_ITEMS = [
  "Underground Mining Ecosystem",
  "Mechanised Operations",
  "225+ Underground Machines",
  "1500+ Workforce",
  "US$50M+ Strategic Investment",
  "Operational Excellence",
  "Workforce Development",
  "Engineering Precision",
  "24/7 Mining Infrastructure",
  "Strategic Warehousing",
  "Safety First Operations",
  "Underground Mechanisation",
  "Mining Infrastructure Systems",
  "Zambia Mining Operations",
  "Built For Scale",
  "Infrastructure Beyond Mining",
  "Continuous Operations",
  "Future Mining Systems",
] as const;
