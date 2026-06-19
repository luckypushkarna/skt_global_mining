export const MECHANISED_FLEET = {
  hero: {
    eyebrow: "Operations · Mechanised Fleet",
    title: "Built for the deepest work.",
    intro:
      "225+ heavy machines deployed across underground operations - engineered for high availability, low downtime, and the demanding conditions of Zambia's Copperbelt.",
  },

  overview: {
    stats: [
      { value: "227", label: "Active Machines" },
      { value: "94%", label: "Availability Rate" },
      { value: "24/7", label: "Operations" },
      { value: "$200M+", label: "Fleet Value" },
    ],
    body: "Our fleet is the largest of its kind operating under contract in the Zambian Copperbelt. Every machine is selected for its proven track record underground, supported by an in-shaft workshop network, and operated by certified Zambian technicians.",
  },

  categories: [
    {
      number: "01",
      type: "Load-Haul-Dump (LHD)",
      count: "62 units",
      desc: "Underground loaders for ore transport from production face to ore pass. Capacities range from 7 to 21 tonnes per cycle. Operated from enclosed, air-conditioned cabins.",
      image: "/lhd-loader.webp",
      models: ["Caterpillar R1700", "Sandvik LH514", "Epiroc Scooptram ST14"],
    },
    {
      number: "02",
      type: "Underground Trucks",
      count: "48 units",
      desc: "Articulated dump trucks for long-distance ore haulage along main declines. Payloads from 30 to 65 tonnes. Hydraulic braking systems certified for underground incline grades.",
      image: "/underground-truck.webp",
      models: ["Caterpillar AD45B", "Sandvik TH551i", "Atlas Copco MT65"],
    },
    {
      number: "03",
      type: "Drill Rigs",
      count: "54 units",
      desc: "Twin-boom production drills and development jumbos. Hydraulic systems for precision face drilling. Computer-assisted boom positioning for consistent blast pattern accuracy.",
      image: "/drill-rig.webp",
      models: ["Sandvik DD422i", "Atlas Copco Boomer", "Epiroc Boomer M2"],
    },
    {
      number: "04",
      type: "Bolters & Ground Support",
      count: "28 units",
      desc: "Roof bolters and ground support installation equipment. Automated bolt insertion maintains face stability throughout development and production phases.",
      image: "/bolter-support.webp",
      models: ["Sandvik DS412i", "Atlas Copco Roofex", "Robolt Systems"],
    },
    {
      number: "05",
      type: "Service & Utility",
      count: "35 units",
      desc: "Personnel carriers, supply vehicles, fuel and lube units, and emergency response vehicles. Maintains operational continuity across all active underground levels.",
      image: "/utility-service.webp",
      models: ["Toyota Land Cruiser HZJ", "MEM Mining Vehicles", "Custom carriers"],
    },
    {
      number: "06",
      type: "Independent Diesel Bowsers",
      count: "12 units",
      desc: "Dedicated self-reliant diesel bowsers providing continuous, independent refueling for the underground fleet, eliminating dependency on surface fuel transit.",
      image: "/diesel-bowser.jpg",
      models: ["Underground Refueling Bowser"],
    },
    {
      number: "07",
      type: "Self-Developed LMVs",
      count: "18 units",
      desc: "Self-developed Light Motor Vehicles (LMVs) custom-engineered specifically for underground operation monitoring, supervisory access, and personnel transport.",
      image: "/lmv-monitoring.jpg",
      models: ["SKT Custom LMV"],
    },
    {
      number: "08",
      type: "Passenger Carriers",
      count: "15 units",
      desc: "Self-developed passenger carriers designed for the safe and comfortable transport of workers underground. Engineered to reduce transit fatigue, ensuring crews arrive ready and increasing overall productivity.",
      image: "/passenger-carrier.jpg",
      models: ["SKT Custom Passenger Carrier"],
    },
    {
      number: "09",
      type: "Self-Developed Utility Vehicles",
      count: "24 units",
      desc: "Self-developed utility vehicles engineered for efficient underground material shifting and rapid deployment of maintenance crews, ensuring equipment servicing is handled swiftly to maintain high operational uptime.",
      image: "/utility-vehicle.jpg",
      models: ["SKT Custom Utility Vehicle"],
    },
  ],

  gallery: [
    {
      src: "/Mechanised Fleet.webp",
      alt: "Heavy mechanised fleet staging area",
      caption: "Heavy fleet staging - Mufulira operations",
    },
    {
      src: "/Mechanised Fleet-card.webp",
      alt: "Fleet lineup at surface",
      caption: "Surface fleet yard, ready for shift deployment",
    },
    {
      src: "/Underground Workshop.webp",
      alt: "Underground workshop maintenance",
      caption: "Underground workshop, level 850m",
    },
    {
      src: "/Production Development.webp",
      alt: "Production development heading",
      caption: "Active development heading, Copperbelt",
    },
    {
      src: "/Engineering & Maintenance.webp",
      alt: "Engineering and maintenance team",
      caption: "Planned maintenance - multi-point inspection",
    },
    {
      src: "/Operational Command.webp",
      alt: "Fleet operational command centre",
      caption: "Fleet dispatch & command, surface control",
    },
  ],

  specs: {
    title: "Fleet at a glance.",
    items: [
      { label: "Total active units", value: "227" },
      { label: "Average machine age", value: "3.2 years" },
      { label: "Fleet utilisation rate", value: "87%" },
      { label: "Mean time between failures", value: "412 hours" },
      { label: "In-shaft workshops", value: "4" },
      { label: "Certified technicians", value: "118" },
      { label: "Spare parts inventory value", value: "$3.2M" },
      { label: "Annual fleet investment", value: "$28M" },
    ],
  },

  maintenance: {
    title: "Built to keep running.",
    body: "Every machine in our fleet operates within a structured maintenance programme designed to maximise availability and minimise unplanned downtime. Our maintenance model is built around four pillars: prevention, prediction, rapid repair, and parts readiness.",
    points: [
      {
        title: "Preventive Maintenance",
        desc: "Scheduled servicing at fixed operating hours. All major components tracked digitally with full maintenance history per unit and automatic service reminders.",
      },
      {
        title: "Predictive Monitoring",
        desc: "Onboard telemetry monitors engine health, hydraulics, and component wear in real time. Alerts issued before failure thresholds are reached.",
      },
      {
        title: "In-Shaft Repair",
        desc: "Four underground workshops eliminate surface transport time. Most repairs are completed within the same operating shift, minimising production impact.",
      },
      {
        title: "Parts Availability",
        desc: "$3M+ spare parts inventory held locally in Zambia. Critical components stocked to less than 4-hour replacement lead time.",
      },
    ],
  },

  partners: {
    title: "Trusted OEM partnerships.",
    body: "We operate equipment from the world's leading mining OEMs, with direct technical support agreements ensuring rapid access to parts, factory-trained technicians, and engineering expertise.",
    list: ["Caterpillar", "Sandvik", "Epiroc", "Atlas Copco", "Komatsu", "Volvo CE"],
  },
};
