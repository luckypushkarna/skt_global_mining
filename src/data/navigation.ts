import {
  Building2,
  Mountain,
  Truck,
  Shield,
  Users,
  Leaf,
  FileText,
  HardHat,
  Globe,
  Wrench,
  Heart,
  Network,
  Newspaper,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavSection = {
  id: string;
  label: string;
  featured?: NavItem[];      // Large cards
  links?: NavItem[];          // Small links
};

// ═══════════════════════════════════════════════════════════
// ABOUT US
// ═══════════════════════════════════════════════════════════

export const aboutSection: NavSection = {
  id: "about",
  label: "About",
  featured: [
    {
      title: "Company Overview",
      href: "/about",
      description: "Our heritage, vision, and mission in mining",
      icon: Building2,
    },
    {
      title: "Leadership Team",
      href: "/about/leaders",
      description: "Meet the experts driving SKT Global forward",
      icon: Users,
    },
  ],
  links: [
    {
      title: "Chairperson's Message",
      href: "/about/chairperson-message",
      icon: FileText,
    },
    {
      title: "Meet Our Leaders",
      href: "/about/leaders",
      icon: Users,
    },
    {
      title: "Global Presence",
      href: "/about",
      icon: Globe,
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// OPERATIONS
// ═══════════════════════════════════════════════════════════

export const operationsSection: NavSection = {
  id: "operations",
  label: "Operations",
  featured: [
    {
      title: "Underground Mining",
      href: "/services",
      description: "Deep shaft mechanised mining operations at Mopani",
      icon: Mountain,
    },
    {
      title: "Mechanised Fleet",
      href: "/services",
      description: "225+ heavy machines deployed across active sites",
      icon: Truck,
    },
  ],
  links: [
    {
      title: "Engineering Services",
      href: "/services",
      icon: Wrench,
    },
    {
      title: "Logistics Network",
      href: "/services",
      icon: Network,
    },
    {
      title: "All Capabilities",
      href: "/services",
      icon: Globe,
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// SUSTAINABILITY
// ═══════════════════════════════════════════════════════════

export const sustainabilitySection: NavSection = {
  id: "sustainability",
  label: "Sustainability",
  featured: [
    {
      title: "ESG Overview",
      href: "/#impact",
      description: "Environmental, Social & Governance commitments",
      icon: Leaf,
    },
    {
      title: "Safety First",
      href: "/services",
      description: "Zero harm philosophy and safety protocols",
      icon: Shield,
    },
  ],
  links: [
    {
      title: "Community Impact",
      href: "/#operations-map",
      icon: Heart,
    },
    {
      title: "Local Workforce",
      href: "/#impact",
      icon: HardHat,
    },
    {
      title: "Environmental Care",
      href: "/services",
      icon: Leaf,
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// MEDIA
// ═══════════════════════════════════════════════════════════

export const mediaSection: NavSection = {
  id: "media",
  label: "Media",
  featured: [
    {
      title: "Newsroom",
      href: "/contact",
      description: "Latest press releases and company updates",
      icon: Newspaper,
    },
  ],
  links: [
    {
      title: "Contact Us",
      href: "/contact",
      icon: Mail,
    },
    {
      title: "Privacy Policy",
      href: "/privacy",
      icon: FileText,
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// SIMPLE LINKS (No dropdown)
// ═══════════════════════════════════════════════════════════

export const simpleLinks: NavItem[] = [
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

// ═══════════════════════════════════════════════════════════
// ALL DROPDOWN SECTIONS
// ═══════════════════════════════════════════════════════════

export const dropdownSections: NavSection[] = [
  aboutSection,
  operationsSection,
  sustainabilitySection,
  mediaSection,
];
