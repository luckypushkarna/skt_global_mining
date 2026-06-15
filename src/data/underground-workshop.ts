export const UNDERGROUND_WORKSHOP = {
  hero: {
    eyebrow: "Operations · Underground Workshop",
    title: "Repairs that never stop, deep where the work happens.",
    intro:
      "Built directly inside the shaft, our underground workshops eliminate the need to bring heavy equipment to the surface, preserving crucial production hours.",
  },

  overview: {
    stats: [
      { value: "24/7", label: "Operations" },
      { value: "4", label: "In-Shaft Workshops" },
      { value: "118", label: "Certified Technicians" },
      { value: "<4h", label: "Critical Parts Lead Time" },
    ],
    body: "Built directly inside the shaft, our underground workshops eliminate the need to bring heavy equipment to the surface. Technical teams perform preventive maintenance and complete component overhauls right at the rock face, preserving crucial production hours. This strategic infrastructure ensures our mechanised fleet remains operational with minimal downtime.",
  },

  categories: [
    {
      number: "01",
      type: "Preventive Maintenance",
      count: "Scheduled Servicing",
      desc: "Scheduled servicing at fixed operating hours right at the rock face. All major components tracked digitally with full maintenance history.",
      image: "/Underground Workshop.webp",
      models: ["Fluid Analysis", "Component Inspection", "Filter Replacement"],
    },
    {
      number: "02",
      type: "Component Overhauls",
      count: "Deep Level Repairs",
      desc: "Complete component overhauls performed directly inside the shaft. From engine swaps to hydraulic system rebuilds, eliminating surface transport delays.",
      image: "/Engineering & Maintenance.webp",
      models: ["Engine Rebuilds", "Hydraulic Systems", "Transmission Service"],
    },
    {
      number: "03",
      type: "Predictive Monitoring",
      count: "Real-time Telemetry",
      desc: "Onboard telemetry monitors engine health, hydraulics, and component wear in real time. Alerts issued before failure thresholds are reached, investigated on-site.",
      image: "/Operational Command.png",
      models: ["Wear Analysis", "Vibration Monitoring", "Thermal Diagnostics"],
    },
    {
      number: "04",
      type: "Emergency Repairs",
      count: "Rapid Response",
      desc: "Mobile repair units deployed directly to the production face. Our certified technicians rapidly diagnose and repair critical faults to restore production immediately.",
      image: "/Mechanised Fleet.webp",
      models: ["Hydraulic Hose Repair", "Electrical Diagnostics", "Structural Welding"],
    },
  ],

  gallery: [
    {
      src: "/Underground Workshop.webp",
      alt: "Underground workshop maintenance",
      caption: "Underground workshop, level 850m",
    },
    {
      src: "/Engineering & Maintenance.webp",
      alt: "Engineering and maintenance team",
      caption: "Planned maintenance - multi-point inspection",
    },
    {
      src: "/Mechanised Fleet-card.webp",
      alt: "Fleet lineup near workshop",
      caption: "Fleet staging near underground workshop",
    },
    {
      src: "/Production Development.webp",
      alt: "Production development heading",
      caption: "Active development heading support",
    },
    {
      src: "/Mechanised Fleet.webp",
      alt: "Heavy mechanised fleet staging area",
      caption: "Heavy fleet staging - Mufulira operations",
    },
    {
      src: "/Operational Command.png",
      alt: "Workshop operational command centre",
      caption: "Workshop dispatch & command",
    },
  ],

  specs: {
    title: "Workshop capability at a glance.",
    items: [
      { label: "In-shaft workshops", value: "4" },
      { label: "Certified technicians", value: "118" },
      { label: "Spare parts inventory value", value: "$3.2M" },
      { label: "Operations schedule", value: "24/7" },
      { label: "Critical parts lead time", value: "< 4 hours" },
      { label: "Mean time to repair (MTTR)", value: "Optimised" },
      { label: "Safety standard", value: "Zero Harm" },
      { label: "Support levels", value: "Multi-level" },
    ],
  },

  maintenance: {
    title: "Zero surface delays.",
    body: "Our underground maintenance model is built around executing heavy repairs deep inside the mine. By bringing the workshop to the machine, we cut out hours of tramming time and hoist bottlenecks.",
    points: [
      {
        title: "Proximity to Production",
        desc: "Workshops are strategically located near active production faces, drastically reducing the time required to move equipment for servicing.",
      },
      {
        title: "Fully Equipped Bays",
        desc: "Bays are equipped with heavy lifting gear, specialized diagnostic tools, and proper ventilation to handle major engine and transmission overhauls safely.",
      },
      {
        title: "Inventory Availability",
        desc: "A $3.2M underground spare parts inventory ensures that the right parts are available exactly when needed, eliminating waits for surface delivery.",
      },
      {
        title: "Expert Personnel",
        desc: "Staffed by over 118 certified technicians who specialize in the unique challenges of maintaining heavy mechanised equipment in subterranean environments.",
      },
    ],
  },

  partners: {
    title: "Certified OEM tooling.",
    body: "Our underground workshops use the same specialized tooling, diagnostic software, and repair procedures recommended by global OEMs, guaranteeing factory-level repair quality deep underground.",
    list: ["Caterpillar", "Sandvik", "Epiroc", "Atlas Copco", "Komatsu", "Volvo CE"],
  },
};
