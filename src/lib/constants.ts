import type { NavItem, Service, Stat, TeamMember, Milestone } from "@/types";
import { getSiteUrlString } from "./site-url";

export const SITE_CONFIG = {
  name: "SKT Global Mining & Services Limited",
  shortName: "SKT Global",
  description:
    "Zambia's premier mechanised mining contractor, delivering world-class underground mining solutions, strategic warehousing, and engineering services. Committed to Zero Harm.",
  url: getSiteUrlString(),
  ogImage: "/og-image.webp",
  twitterHandle: "@sktglobal",
  founded: "2005",
  headquarters: "Tyre Technocrats India Pvt Ltd, Udaipur, Rajasthan",
  email: "Info@sktglobalminings.com",
  phone: "+260 769 553 037",
  address: "CHIM/254/A, Opposite Mindolo Police Station, Between Rubies & Meru Filling Station Kitwe, Copperbelt Province, Zambia",
} as const;

export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { label: "About", href: "/about" },
  { label: "Operations", href: "/services" },
  { label: "Infrastructure", href: "/projects" },
  { label: "Safety", href: "/#impact" },
  { label: "Communities", href: "/#operations-map" },
  { label: "Careers", href: "/careers" },
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
      "Comprehensive health, safety, and environment programs built on zero-harm philosophy with international safety systems.",
    icon: "Shield",
    category: "safety",
    features: [
      "International safety standards",
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
    description: "World-class mechanised fleet deployed for continuous extraction.",
  },
  {
    value: "1500",
    suffix: "+",
    prefix: "",
    label: "Active Workforce",
    description: "Skilled personnel driving continuous underground operations.",
  },
  {
    value: "50",
    suffix: "M+",
    prefix: "$",
    label: "Strategic Investment",
    description: "Capital deployed to build heavy infrastructure and fleet capacity.",
  },
  {
    value: "50",
    suffix: "%",
    prefix: "",
    label: "Mopani Targets Achieved",
    description: "Disciplined execution accelerating development and production goals.",
  },
  {
    value: "24/7",
    suffix: "",
    prefix: "",
    label: "Operational Execution",
    description: "Uninterrupted engineering, maintenance, and logistics support.",
  },
  {
    value: "3",
    suffix: "M+",
    prefix: "$",
    label: "Strategic Spare Parts",
    description: "Inventory stockpile ensuring maximum fleet availability.",
  },
] as const;

export const TEAM_MEMBERS: ReadonlyArray<TeamMember> = [
  {
    id: "sahil-talreja",
    name: "Sahil Talreja",
    role: "Managing Director",
    bio: "Architects SKT Global's long-term vision, driving corporate expansion, major capital investments, and the strategic roadmap across African mining operations.",
  },
  {
    id: "anand-kolappa-pillai",
    name: "Anand Kolappa Pillai",
    role: "Director",
    bio: "Guides international infrastructure development and corporate strategy, ensuring operational readiness and execution capability at an institutional scale.",
  },
  {
    id: "sanjay-kumar-sharma",
    name: "Sanjay Kumar Sharma",
    role: "Chief Executive Officer",
    bio: "Leads executive operations with extensive expertise in mechanised mining methodologies, fleet deployment, and regional growth strategies.",
  },
  {
    id: "srinivasulu-jonnalagadda",
    name: "Srinivasulu Jonnalagadda",
    role: "Chief Financial Officer",
    bio: "Directs financial strategy and capital allocation, ensuring robust risk management and sustainable funding for large-scale mining projects.",
  },
  {
    id: "collins-mwila",
    name: "Collins Mwila",
    role: "MSV Site Manager",
    bio: "Excellence in site management is driven by rigorous standards, clear communication, and empowering teams to execute safely and efficiently.",
  },
  {
    id: "kerson-phiri",
    name: "Kerson Phiri",
    role: "Executive & Administration Manager",
    bio: "Strong administration is the invisible backbone that allows operational excellence to thrive.",
  },
  {
    id: "chakanga-mukonde",
    name: "Chakanga Mukonde",
    role: "Mufulira Site Manager",
    bio: "Directs site activities at Mufulira with a focus on safe execution, operational efficiency, and team coordination.",
  },
  {
    id: "mulenga-mutati",
    name: "Mulenga Mutati",
    role: "Human Resources Manager",
    bio: "Champions workforce development, directing talent acquisition and building a high-performance culture across a 1,500+ strong workforce.",
  },
  {
    id: "willie-simpemba",
    name: "Willie Simpemba",
    role: "Accounts Manager",
    bio: "Oversees financial operations with precision, managing budgets, billing, and ensuring the fiscal health of regional projects.",
  },
  {
    id: "george-sakanyi",
    name: "George Sakanyi",
    role: "HSE Manager",
    bio: "Champions health, safety, and environmental excellence, implementing rigorous standards to protect our workforce and operational ecosystems.",
  },
  {
    id: "peter-ochigbo",
    name: "Peter Ochigbo",
    role: "System Coordinator",
    bio: "Ensures seamless integration of systems and processes, driving operational alignment and technical coordination across projects.",
  },
  {
    id: "kiran-kumar-reddy",
    name: "Kiran Kumar Reddy",
    role: "SOB Project Head",
    bio: "Drives daily production performance, advanced mechanised extraction, and critical safety frameworks at the high-capacity SOB underground site.",
  },
  {
    id: "d-suresh-babu",
    name: "D. Suresh Babu",
    role: "Maintenance Head",
    bio: "Ensures maximum operational uptime by leading preventive engineering protocols and managing the deployment of 225+ underground machines.",
  },
  {
    id: "kuldeep-kulshrestha",
    name: "Kuldeep Kulshrestha",
    role: "Commercial Manager",
    bio: "Optimizes supply chain integration, procures critical operational resources, and advances key strategic partnerships to support expansion.",
  },
  {
    id: "toms-joseph",
    name: "Toms Joseph",
    role: "Mufulira Project Head",
    bio: "Directs deep-level mining operations and oversees the rigorous safety compliance necessary to sustain large-scale mechanised extraction.",
  }
] as const;

export const MILESTONES: ReadonlyArray<Milestone> = [
  {
    year: "2024",
    title: "SKT Global Established",
    description: "Founded with a vision to support Zambia's mining sector through mechanised operations, infrastructure investment, and workforce development.",
    logo: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125488/skt_global_mining/establishment-icon-v3.webp",
  },
  {
    year: "First 6 Months",
    title: "225+ Underground Machines Mobilised",
    description: "One of the largest underground equipment mobilisations in the region, backed by strategic investment and operational planning.",
    logo: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125510/skt_global_mining/mining-icon.webp",
  },
  {
    year: "Workforce Expansion",
    title: "1,500+ Workforce Recruited",
    description: "Building local capability through large-scale recruitment, skills development, and international expertise.",
    logo: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125509/skt_global_mining/miner-icon.webp",
  },
  {
    year: "Operational Infrastructure",
    title: "Mining Ecosystem Established",
    description: "Warehousing, transportation, accommodation, engineering support, and operational systems built to support continuous mining activities.",
    logo: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125496/skt_global_mining/infrastructure-icon.webp",
  },
  {
    year: "Operational Achievement",
    title: "Nearly Approaching 50% Mopani Targets Achieved",
    description: "Delivering measurable development and production progress through disciplined execution and mechanised mining operations.",
    logo: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125508/skt_global_mining/logo2025-icon.webp",
  },
  {
    year: "Future Vision",
    title: "Road to 90% Support Capability",
    description: "Expanding people, equipment, infrastructure, and operational capacity to support up to 90% of future IRH / MCM operational requirements.",
    logo: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125491/skt_global_mining/forecasting-icon.webp",
  },
] as const;

export const MARQUEE_ITEMS = [
  "225+ UNDERGROUND MACHINES",
  "1,500+ WORKFORCE",
  "$50M+ STRATEGIC INVESTMENT",
  "NEARLY APPROACHING 50% MOPANI TARGETS ACHIEVED",
  "24/7 OPERATIONAL SUPPORT",
  "$3M+ SPARE PARTS INVENTORY",
  "UNDERGROUND MINING",
  "MECHANISED OPERATIONS",
  "ENGINEERING & MAINTENANCE",
  "WORKFORCE DEVELOPMENT",
  "STRATEGIC WAREHOUSING",
  "ZAMBIA MINING OPERATIONS",
  "INFRASTRUCTURE DEVELOPMENT",
  "LOCAL TALENT DEVELOPMENT",
  "SAFETY-DRIVEN OPERATIONS",
] as const;
