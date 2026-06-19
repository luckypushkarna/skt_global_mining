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
      type: "LHD 17 Ton (Loader)",
      count: "45 units",
      desc: "Heavy-duty underground loaders engineered for rapid ore extraction and transport from the production face to the ore pass. Features an enclosed, air-conditioned cabin for maximum operator safety and comfort.",
      image: "/lhd-loader.webp",
      models: ["17 Ton Capacity Class", "Caterpillar R1700", "Sandvik LH514"],
    },
    {
      number: "02",
      type: "Mine Truck 30 Ton (Dumper)",
      count: "40 units",
      desc: "Articulated underground dump trucks designed for high-capacity ore haulage along main declines. Features heavy-duty hydraulic braking systems certified for steep incline grades.",
      image: "/underground-truck.webp",
      models: ["30 Ton Capacity Class", "Sandvik TH530i", "Epiroc Minetruck MT30"],
    },
    {
      number: "03",
      type: "Underground Grader",
      count: "6 units",
      desc: "Specialised low-profile graders used to maintain underground haul roads. Proper road maintenance reduces wear on haul truck tires and improves overall fleet tramming speeds.",
      image: "/gaadi-jcb.webp",
      models: ["Low-Profile Underground Grader"],
    },
    {
      number: "04",
      type: "Diesel Bowser",
      count: "8 units",
      desc: "Dedicated, self-reliant diesel bowsers providing continuous, independent refueling for the underground fleet. This eliminates dependency on surface fuel transit and maximizes shift uptime.",
      image: "/diesel-bowser.jpg",
      models: ["Underground Refueling Bowser"],
    },
    {
      number: "05",
      type: "Self-Developed LMV",
      count: "30 units",
      desc: "Custom-engineered Light Motor Vehicles (LMVs) designed specifically for underground operation monitoring, supervisory access, and safe personnel transport.",
      image: "/lmv-monitoring.jpg",
      models: ["SKT Custom LMV"],
    },
    {
      number: "06",
      type: "Passenger Carriers",
      count: "18 units",
      desc: "Self-developed passenger carriers designed for the safe and comfortable transport of workers underground. Engineered to reduce transit fatigue, ensuring crews arrive ready and increasing overall productivity.",
      image: "/passenger-carrier.jpg",
      models: ["SKT Custom Passenger Carrier"],
    },
    {
      number: "07",
      type: "Self-Developed Utility Vehicles",
      count: "25 units",
      desc: "Custom-built utility vehicles engineered for efficient underground material shifting and rapid deployment of maintenance crews. Ensures equipment servicing is handled swiftly to maintain high operational availability.",
      image: "/utility-vehicle.jpg",
      models: ["SKT Custom Utility Vehicle"],
    },
    {
      number: "08",
      type: "Drill Rigs & Bolters",
      count: "55 units",
      desc: "Twin-boom production drills, development jumbos, and automated roof bolters. Equipped with computer-assisted boom positioning for precision face drilling and ground support.",
      image: "/drill-rig.webp",
      models: ["Sandvik DD422i", "Epiroc Boomer M2", "Sandvik DS412i Bolter"],
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
