
export type PageConfig = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  heroImage: string;
  accentColor: "emerald" | "sky" | "amber";
  stats: { value: string; suffix?: string; label: string; sub: string }[];
  pillars: { icon: string; title: string; desc: string }[];
  story: { quote: string; author: string; role: string };
  ctaText: string;
  ctaHref: string;
};

// ═══════════════════════════════════════════════════════════
// COMMUNITY IMPACT
// ═══════════════════════════════════════════════════════════

export const communityImpact: PageConfig = {
  slug: "community-impact",
  eyebrow: "Sustainability · Community",
  title: "Building stronger",
  titleAccent: "communities.",
  intro:
    "Twenty percent of our net profits go directly back into Zambia's mining communities - funding schools, clinics, water networks, and small business growth.",
  heroImage: "/Community Safety Culture.png",
  accentColor: "amber",
  stats: [
    { value: "$2.4", suffix: "M", label: "Community Investment", sub: "Three schools, 1,800+ students" },
    { value: "12", label: "Health Clinics", sub: "Supported across operational zones" },
    { value: "20", suffix: "%", label: "Profit Allocation", sub: "Net profits reinvested locally" },
    { value: "8,400", suffix: "+", label: "Lives Touched", sub: "Across active community programs" },
  ],
  pillars: [
    {
      icon: "GraduationCap",
      title: "Education",
      desc: "Three new schools constructed in operational zones. Scholarships fund 200+ Zambian students annually in engineering and trades.",
    },
    {
      icon: "Heart",
      title: "Healthcare",
      desc: "Twelve community clinics supplied with equipment, medicines, and trained personnel. Free maternal care for mining-community families.",
    },
    {
      icon: "Droplet",
      title: "Clean Water",
      desc: "Borehole networks and water purification systems installed in surrounding villages, serving over 5,000 residents directly.",
    },
  ],
  story: {
    quote:
      "When SKT built the clinic in our village, my children received care for the first time within walking distance. That's not corporate responsibility - that's being a neighbour.",
    author: "Mary Banda",
    role: "Resident, Chingola District",
  },
  ctaText: "Learn about our local workforce",
  ctaHref: "/sustainability/local-workforce",
};

// ═══════════════════════════════════════════════════════════
// ENVIRONMENTAL CARE
// ═══════════════════════════════════════════════════════════

export const environmentalCare: PageConfig = {
  slug: "environmental-care",
  eyebrow: "Sustainability · Environment",
  title: "Stewardship of",
  titleAccent: "the land.",
  intro:
    "Mining is extraction - but it doesn't have to be destruction. Our closed-loop systems, rehabilitation programs, and emissions controls leave the land healthier than we found it.",
  heroImage: "/zambia-operations-nobgs.webp",
  accentColor: "emerald",
  stats: [
    { value: "90", suffix: "%", label: "Water Recycled", sub: "Closed-loop processing circuits" },
    { value: "47", suffix: "%", label: "Emissions Cut", sub: "Reduction since 2024 baseline" },
    { value: "1,200", label: "Trees Planted", sub: "In active rehabilitation zones" },
    { value: "0", label: "Tailings Spills", sub: "Zero environmental incidents recorded" },
  ],
  pillars: [
    {
      icon: "Droplet",
      title: "Water Stewardship",
      desc: "Closed-loop water systems recycle 90% of process water. Real-time monitoring of every discharge point, third-party verified quarterly.",
    },
    {
      icon: "Wind",
      title: "Emissions Control",
      desc: "Dust suppression at every transfer point. Electric haul vehicles transitioning fleet by 2028. Air quality monitored 24/7.",
    },
    {
      icon: "TreePine",
      title: "Land Rehabilitation",
      desc: "Every disturbed hectare returns to native vegetation or productive agricultural use. Active partnerships with Zambian agronomists.",
    },
  ],
  story: {
    quote:
      "We measure environmental success not in policies, but in the wildlife that returns to our rehabilitated sites. Last year, we recorded 23 species back in zones we'd rehabilitated.",
    author: "Dr. James Mwale",
    role: "Head of Environmental Compliance, SKT Global",
  },
  ctaText: "See our community impact",
  ctaHref: "/sustainability/community-impact",
};

// ═══════════════════════════════════════════════════════════
// LOCAL WORKFORCE
// ═══════════════════════════════════════════════════════════

export const localWorkforce: PageConfig = {
  slug: "local-workforce",
  eyebrow: "Sustainability · People",
  title: "Skills built in",
  titleAccent: "Zambia, for Zambia.",
  intro:
    "Eighty-five percent of our workforce is Zambian. Through the Ubuntu Mentorship Program and certified training pathways, we're building the next generation of African mining leadership - not importing it.",
  heroImage: "/Continuous Training.webp",
  accentColor: "sky",
  stats: [
    { value: "85", suffix: "%", label: "Local Workforce", sub: "Zambian employees across all sites" },
    { value: "1,500", suffix: "+", label: "Direct Jobs", sub: "Active employment across operations" },
    { value: "500", suffix: "+", label: "Trained This Year", sub: "Through Ubuntu Mentorship Program" },
    { value: "47", label: "Promoted", sub: "Into supervisory roles in 2025" },
  ],
  pillars: [
    {
      icon: "GraduationCap",
      title: "Ubuntu Mentorship",
      desc: "Pairs every junior Zambian operator with an experienced mentor. Two-year certification pathway leading to supervisory roles.",
    },
    {
      icon: "Briefcase",
      title: "Career Pathways",
      desc: "Structured progression from operator to engineer to manager. Internal promotions filled 73% of all leadership openings in 2025.",
    },
    {
      icon: "Users",
      title: "Equal Opportunity",
      desc: "Active recruitment of women into trades and leadership. Female workforce grew from 8% to 19% over 18 months of targeted hiring.",
    },
  ],
  story: {
    quote:
      "I started as an underground loader operator. SKT paid for my engineering certification. Today I supervise a team of 24. That's the SKT difference - they invest in you.",
    author: "Joseph Phiri",
    role: "Underground Supervisor, Kitwe",
  },
  ctaText: "Explore our environmental work",
  ctaHref: "/sustainability/environmental-care",
};
