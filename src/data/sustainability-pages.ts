
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
    "We are committed to ensuring our future success is shared. A percentage of our net profits is earmarked to go directly back into Zambia's mining communities - developing plans for schools, clinics, water networks, and small business growth.",
  heroImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp",
  accentColor: "amber",
  stats: [
    { value: "Target", label: "Community Investment", sub: "Planning support for schools and students" },
    { value: "Planning", label: "Health Clinics", sub: "To be supported across operational zones" },
    { value: "20", suffix: "%", label: "Profit Allocation", sub: "Goal for net profits reinvested locally" },
    { value: "Developing", label: "Community Programs", sub: "Structuring active community initiatives" },
  ],
  pillars: [
    {
      icon: "GraduationCap",
      title: "Education",
      desc: "Planning the construction of new schools in operational zones and developing scholarship frameworks to fund Zambian students in engineering and trades.",
    },
    {
      icon: "Heart",
      title: "Healthcare",
      desc: "Developing strategies to supply future community clinics with equipment, medicines, and trained personnel, with a focus on maternal care.",
    },
    {
      icon: "Droplet",
      title: "Clean Water",
      desc: "Initiating plans for borehole networks and water purification systems to serve surrounding villages and local residents directly.",
    },
  ],
  story: {
    quote:
      "Lasting value in mining is not extracted from the ground - it is built through the trust of communities, the rigour of planning, and the integrity of every decision made along the way.",
    author: "Anand Kolappa Pillai",
    role: "Director",
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
    "Mining is extraction - but it doesn't have to be destruction. We are developing closed-loop systems, planning rehabilitation programs, and designing emissions controls to leave the land healthier than we found it.",
  heroImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125553/skt_global_mining/zambia-operations-nobgs.webp",
  accentColor: "emerald",
  stats: [
    { value: "Target", label: "Environmental Compliance", sub: "Committing to ZEMA regulations" },
    { value: "Planning", label: "Emissions Controls", sub: "Establishing baselines for reduction" },
    { value: "Initiating", label: "Tree Planting", sub: "Designing rehabilitation zones" },
    { value: "Zero", label: "Harm Goal", sub: "Targeting zero environmental incidents" },
  ],
  pillars: [
    {
      icon: "Droplet",
      title: "Water Stewardship",
      desc: "Designing closed-loop water systems with the goal of maximizing process water recycling. Planning real-time monitoring of discharge points.",
    },
    {
      icon: "Wind",
      title: "Emissions Control",
      desc: "Implementing dust suppression at transfer points and establishing baselines to track air quality. Exploring future transitions to electric haul vehicles.",
    },
    {
      icon: "TreePine",
      title: "Land Rehabilitation",
      desc: "Committing to return disturbed hectares to native vegetation or productive agricultural use through planned partnerships with Zambian agronomists.",
    },
  ],
  story: {
    quote:
      "The best mining operations are built not from the top down, but from the ground up - with the right people, the right tools, and a shared belief in what's possible.",
    author: "Sahil Talreja",
    role: "Managing Director",
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
    "Ninety-four percent of our workforce is Zambian. Through the Ubuntu Mentorship Program and certified training pathways, we're building the next generation of African mining leadership - not importing it.",
  heroImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp",
  accentColor: "sky",
  stats: [
    { value: "94", suffix: "%", label: "Local Workforce", sub: "Zambian employees across all sites" },
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
      desc: "Active recruitment of women into trades and leadership, with a strong commitment to increasing female representation across all operational and supervisory roles.",
    },
  ],
  story: {
    quote:
      "Underground mining demands honesty from everyone in the chain - from the face worker to the CEO. The rock doesn't forgive poor planning, and neither do the families of the people who depend on us to get it right.",
    author: "Sanjay Kumar Sharma",
    role: "Chief Executive Officer",
  },
  ctaText: "Explore our environmental work",
  ctaHref: "/sustainability/environmental-care",
};
