import {
  Wrench, Package, Truck, Shield, Network, Monitor,
  Users, Settings, TrendingUp, ShieldCheck, Building2, Globe
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Capability {
  num: string;
  slug: string;
  href?: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  overview: string;
  tags: string[];
  bgImage: string;
}

export const CAPABILITIES: Capability[] = [
  // ── Mining Operations ──
  {
    num: "01",
    slug: "production-development",
    icon: TrendingUp,
    title: "Development work",
    tagline: "Opening new ground. Scaling production.",
    desc: "Accelerated underground mine development executing high-speed shaft sinking, declines, and lateral tunneling.",
    overview: "We execute high-speed shaft sinking, decline development, and lateral tunneling to rapidly open new production faces. Our disciplined development sequencing has already delivered approximately 50% of Mopani Copper Mines' targets within the first year.",
    tags: ["50% Targets Achieved", "High-Speed Sinking", "Lateral Tunnelling"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125406/skt_global_mining/Production%20Development-card.webp",
  },
  {
    num: "02",
    slug: "mechanised-fleet",
    href: "/operations/mechanised-fleet",
    icon: Truck,
    title: "Mechanised Fleet",
    tagline: "Heavy iron, built for deep production.",
    desc: "A deployment of 225+ mechanised underground machines including heavy loaders, dump trucks, and drill rigs.",
    overview: "Our operations are powered by a massive fleet of 225+ mechanised machines. From articulated dump trucks to twin-boom drill rigs and roof bolters, we deploy the precise heavy equipment required for high-tonnage, deep-shaft extraction.",
    tags: ["225+ Machines", "Drill Rigs", "Loaders & Haulers"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125388/skt_global_mining/Mechanised%20Fleet-card.webp",
  },

  // ── Engineering & Maintenance ──
  {
    num: "03",
    slug: "underground-workshop",
    icon: Wrench,
    title: "Underground Workshop",
    tagline: "Repairs that never stop, deep where the work happens.",
    desc: "On-site underground maintenance ecosystems keeping 225+ machines operational without surface delays.",
    overview: "Built directly inside the shaft, our underground workshops eliminate the need to bring heavy equipment to the surface. Technical teams perform preventive maintenance and complete component overhauls right at the rock face, preserving crucial production hours.",
    tags: ["24/7 Repair", "Zero Surface Delay", "Component Overhaul"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125465/skt_global_mining/Underground%20Workshop-card.webp",
  },
  {
    num: "04",
    slug: "engineering-maintenance",
    href: "/operations/engineering-services",
    icon: Settings,
    title: "Engineering & Maintenance",
    tagline: "Reliability engineered into every component.",
    desc: "Specialised crews maintaining mechanical, electrical, and hydraulic systems to ensure maximum fleet availability.",
    overview: "Our dedicated engineering teams maintain strict condition monitoring and scheduled maintenance protocols. By intervening rapidly on mechanical, electrical, and hydraulic issues, we ensure that our mechanised fleet sustains an availability rate exceeding 90%.",
    tags: ["90%+ Availability", "Preventive Maint.", "Specialised Crews"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance-card.webp",
  },

  // ── Infrastructure & Logistics ──
  {
    num: "05",
    slug: "logistics-network",
    href: "/operations/logistics-network",
    icon: Network,
    title: "Logistics Network",
    tagline: "Workforce, equipment, material - moving without interruption.",
    desc: "A coordinated logistics ecosystem enabling the continuous movement of 1,500+ workers and thousands of tonnes of ore.",
    overview: "Our interconnected logistics network synchronizes workforce transport, heavy equipment deployment, and ore-to-surface material handling. We ensure that shift changes happen on time and that mined ore reaches the mill without bottlenecks.",
    tags: ["Material Handling", "Fleet Dispatch", "Continuous Flow"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp",
  },
  {
    num: "06",
    slug: "strategic-warehousing",
    icon: Package,
    title: "Strategic Warehousing",
    tagline: "Every part. Every shift. Always within reach.",
    desc: "Centralised supply depots managing a $3M+ active spare parts inventory to eliminate maintenance downtime.",
    overview: "We maintain a massive $3M+ active spare parts inventory across strategically located depots. This ensures that replacement components are immediately available for our underground workshops, virtually eliminating wait times and protecting operational continuity.",
    tags: ["$3M+ Inventory", "Zero Wait Time", "Supply Chain"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp",
  },
  {
    num: "07",
    slug: "infrastructure-systems",
    icon: Building2,
    title: "Infrastructure Systems",
    tagline: "The backbone of every operation, above and below.",
    desc: "Comprehensive operational ecosystems including utility networks, high-voltage substations, and administrative facilities.",
    overview: "Beyond the mine shaft, we build and maintain the heavy surface infrastructure that makes mining possible. This includes extensive utility systems, high-voltage power substations, water management networks, and administrative hubs supporting regional operations.",
    tags: ["Utility Networks", "Substations", "Surface Support"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp",
  },

  // ── Workforce & Safety ──
  {
    num: "08",
    slug: "workforce-facilities",
    icon: Users,
    title: "Workforce Facilities",
    tagline: "Built for the people who build the mine.",
    desc: "Purpose-built housing, welfare, and catering infrastructure supporting 1,500+ local and international personnel.",
    overview: "We actively invest in the wellbeing of our 1,500+ strong workforce. Our purpose-built facilities provide safe accommodation, 24-hour catering, continuous medical care, and reliable transit, ensuring every team member is supported on and off the shift.",
    tags: ["1,500+ Personnel", "24/7 Catering", "Medical Care"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125471/skt_global_mining/Workforce%20Facilities-card.webp",
  },
  {
    num: "09",
    slug: "operational-command",
    icon: Monitor,
    title: "Operational Command",
    tagline: "One control room. Every machine. Every shift.",
    desc: "Unified control centers tracking real-time telemetry, shift outputs, and safety sensors across active operations.",
    overview: "Our centralised command centers monitor live machine telemetry, production output, and workforce safety in real-time. This integrated oversight allows us to allocate resources dynamically and coordinate engineering, mining, and logistics from a single dashboard.",
    tags: ["Live Telemetry", "Dynamic Allocation", "Unified Dashboard"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp",
  },
  {
    num: "10",
    slug: "rescue-systems",
    icon: Shield,
    title: "Rescue Systems",
    tagline: "Prepared for every scenario, underground.",
    desc: "Integrated emergency infrastructure featuring dedicated rescue chambers and rapid-response safety teams.",
    overview: "We maintain highly trained rapid-response teams and strategically placed underground rescue chambers across all active sections. Advanced atmospheric monitoring and established escape protocols ensure a redundant safety net is always active.",
    tags: ["Rescue Chambers", "Rapid Response", "Live Monitoring"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp",
  },
  {
    num: "11",
    slug: "safety-compliance",
    icon: ShieldCheck,
    title: "Safety & Compliance",
    tagline: "Committed to zero harm - enforced at the rock face.",
    desc: "Rigorous safety frameworks embedded across operations, backed by thousands of hours of continuous workforce training.",
    overview: "Our zero-harm commitment is engineered into our operations. Through physical safety barriers, automated hazard isolation, and continuous skills training, we enforce strict compliance with international mining safety standards on every machine, every shift.",
    tags: ["Zero Harm", "Hazard Isolation", "Continuous Training"],
    bgImage: "/Safety & Compliance-card.webp",
  },

  // ── Future Growth ──
  {
    num: "12",
    slug: "future-expansion",
    icon: Globe,
    title: "Future Expansion",
    tagline: "Scaling into Africa's copper belt.",
    desc: "Expanding operational capacity to support up to 90% of future IRH / MCM mining requirements.",
    overview: "Leveraging our established Zambian footprint, we are scaling our fleet, infrastructure, and workforce. Our strategic roadmap positions SKT Global to support up to 90% of future IRH and Mopani Copper Mines operational requirements, driving regional economic growth.",
    tags: ["90% Support Vision", "Scale-Up", "Regional Growth"],
    bgImage: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125376/skt_global_mining/Future%20Expansion-card.webp",
  },
];

// Helper function to get capability by slug
export function getCapabilityBySlug(slug: string): Capability | undefined {
  return CAPABILITIES.find(c => c.slug === slug);
}

// Helper function to get prev/next
export function getAdjacentCapabilities(slug: string) {
  const index = CAPABILITIES.findIndex(c => c.slug === slug);
  if (index === -1) return { prev: null, next: null };

  const prev = index > 0 ? CAPABILITIES[index - 1] : CAPABILITIES[CAPABILITIES.length - 1];
  const next = index < CAPABILITIES.length - 1 ? CAPABILITIES[index + 1] : CAPABILITIES[0];

  return { prev, next };
}

export interface GalleryItem {
  src: string;
  caption: string;
}

export function getCapabilityGallery(slug: string): GalleryItem[] {
  switch (slug) {
    case "underground-workshop":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "Heavy Maintenance Bays" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", caption: "Hydraulic System Repairs" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance.webp", caption: "Electrical Calibrations" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", caption: "Critical Spare Parts Depot" },
        { src: "/Safety & Compliance.webp", caption: "Technician Training Programs" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Digital Diagnostics Center" },
      ];
    case "strategic-warehousing":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", caption: "$3M+ Parts Stockpile" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Shift Materials Dispatch" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "Parts Assembly Stations" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", caption: "Heavy Transport Fleet Support" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", caption: "Centralized Supply Depots" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Smart Inventory Tracking" },
      ];
    case "mechanised-fleet":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", caption: "Articulated Dump Trucks" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "LHD Loader Servicing" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", caption: "Drill Rig Fleet Deployment" },
        { src: "/Safety & Compliance.webp", caption: "Twin-Boom Boomer Operations" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp", caption: "Automated Utility Fleet" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Ore Transportation Systems" },
      ];
    case "rescue-systems":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp", caption: "Underground Rescue Chambers" },
        { src: "/Safety & Compliance.webp", caption: "Atmospheric Monitoring Units" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125373/skt_global_mining/Emergency%20Readiness.webp", caption: "Sub-5-Minute Response Protocols" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp", caption: "Safety Drills & Education" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Real-Time Tracking Systems" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp", caption: "Emergency Medical Center" },
      ];
    case "logistics-network":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Ore Sizing & Conveyor Handling" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", caption: "Articulated Mine Haulers" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", caption: "Heavy Surface Transit Depot" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp", caption: "Staff Transport Operations" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Real-Time Fleet Dispatch" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", caption: "Consumables Inventory Depots" },
      ];
    case "operational-command":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Central Control Interface" },
        { src: "/Safety & Compliance.webp", caption: "Safety Telemetry Control" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Real-Time Fleet Monitors" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance.webp", caption: "Predictive Health Dashboards" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", caption: "Substation Control Network" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "Maintenance Queue Display" },
      ];
    case "workforce-facilities":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp", caption: "International Lodgings" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Shift Transport Hub" },
        { src: "/Safety & Compliance.webp", caption: "Catering and Dining Hall" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125373/skt_global_mining/Emergency%20Readiness.webp", caption: "On-site Medical Clinic" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp", caption: "Recreational Fields" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp", caption: "Welfare Support Center" },
      ];
    case "engineering-maintenance":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance.webp", caption: "Predictive Asset Auditing" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "High-Pressure Hydraulic Rig" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", caption: "LHD Loader Calibration" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", caption: "Pre-Assembled Component Depot" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Telemetry Analysis Labs" },
        { src: "/Safety & Compliance.webp", caption: "Engine Load Testing" },
      ];
    case "production-development":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125408/skt_global_mining/Production%20Development.webp", caption: "Lateral Tunnel Excavation" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", caption: "High-Speed Declines Sinking" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", caption: "Decline Ventilation Mains" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "Production Face Support" },
        { src: "/Safety & Compliance.webp", caption: "Geotechnical Rock Bolting" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Rapid High-Tonnage Haulage" },
      ];
    case "safety-compliance":
      return [
        { src: "/Safety & Compliance.webp", caption: "Mandatory Pre-Shift Briefing" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp", caption: "Self-Rescuer Inspection" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp", caption: "Over 5,000 Hours Safety Ed." },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125373/skt_global_mining/Emergency%20Readiness.webp", caption: "On-Site Rescue Drills" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp", caption: "Outreach Partnership Centers" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Continuous Gas Telemetry" },
      ];
    case "infrastructure-systems":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", caption: "Power & Utility Substation" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", caption: "Consolidated Material Depots" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "Surface Machine Shop" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Administrative Office Blocks" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp", caption: "Personnel Transit Centers" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125377/skt_global_mining/Future%20Expansion.webp", caption: "Regional Expansion Yards" },
      ];
    case "future-expansion":
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125377/skt_global_mining/Future%20Expansion.webp", caption: "Sub-Saharan Growth Strategy" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", caption: "Regional Operations Headquarters" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Heavy Equipment Mobilization" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp", caption: "International Skills Exchange" },
        { src: "/Safety & Compliance.webp", caption: "Unified Mining Frameworks" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", caption: "Global Command Operations" },
      ];
    default:
      return [
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp", caption: "System Overview" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", caption: "Active Operations" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", caption: "Material Supply" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", caption: "Heavy Machinery" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp", caption: "Emergency Systems" },
        { src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", caption: "Distribution Network" },
      ];
  }
}
