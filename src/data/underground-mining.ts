export const UNDERGROUND_MINING = {
  hero: {
    eyebrow: "Operations · Underground Mining",
    title: "Beneath the Copperbelt.",
    titleAccent: "Where the work begins.",
    intro:
      "Underground mining is a discipline of patience, precision, and accountability. At SKT Global, every meter of rock we move below the surface is governed by engineered safety controls, third-party-verified standards, and a workforce that calls this land home.",
  },

  narrative: [
    {
      number: "01",
      title: "Why underground",
      body: "Some of the world's richest copper deposits sit hundreds of meters below the Copperbelt. Surface mining cannot reach them - only mechanised underground operations can. We operate where the ore body demands depth, not where convenience suggests width.",
    },
    {
      number: "02",
      title: "How we operate",
      body: "Our approach uses sub-level open stoping and room-and-pillar methods, depending on rock conditions. Drilling rigs cut precise holes, controlled blasting fractures the ore, and load-haul-dump (LHD) vehicles transport material to the shaft for surface processing.",
    },
    {
      number: "03",
      title: "Why mechanisation matters",
      body: "Mechanised mining is safer than traditional methods. Workers operate from enclosed cabins with environmental controls, not from exposed positions. Machines do the heavy lifting. People focus on judgment, supervision, and engineering decisions.",
    },
  ],

  process: {
    eyebrow: "The Method",
    title: "From ore body to surface - a six-stage process.",
    stages: [
      {
        step: "01",
        title: "Geological Survey",
        desc: "Core drilling and 3D modelling identify ore body geometry, grade, and surrounding rock conditions before any development begins.",
      },
      {
        step: "02",
        title: "Shaft & Decline Development",
        desc: "Vertical shafts or declining tunnels are constructed to provide access, ventilation, and ore transport routes between surface and ore body.",
      },
      {
        step: "03",
        title: "Drill & Blast",
        desc: "Controlled blast designs fracture rock in pre-planned sequences. Blast vibration monitored to protect surrounding infrastructure and communities.",
      },
      {
        step: "04",
        title: "Load, Haul, Dump",
        desc: "Mechanised LHD vehicles transport ore from the face to ore passes or directly to the shaft hoist for surface delivery.",
      },
      {
        step: "05",
        title: "Ground Support",
        desc: "Rock bolts, mesh, and shotcrete stabilise excavated areas. Ground monitoring systems detect movement before it becomes a hazard.",
      },
      {
        step: "06",
        title: "Backfill & Closure",
        desc: "Mined-out voids are backfilled with cemented tailings to maintain ground stability and support future rehabilitation of the surface above.",
      },
    ],
  },

  reserves: {
    eyebrow: "Reserves & Resources",
    title: "Independently verified ore inventory.",
    note: "Estimates compiled in accordance with the JORC Code (2012) and reviewed by independent Competent Persons. Figures are reported as of 31 December 2025.",
    table: [
      { category: "Proven Reserves", tonnage: "12.4 Mt", grade: "2.1% Cu", contained: "260 kt Cu" },
      { category: "Probable Reserves", tonnage: "18.7 Mt", grade: "1.8% Cu", contained: "337 kt Cu" },
      { category: "Measured Resources", tonnage: "15.2 Mt", grade: "2.3% Cu", contained: "350 kt Cu" },
      { category: "Indicated Resources", tonnage: "22.6 Mt", grade: "1.9% Cu", contained: "429 kt Cu" },
      { category: "Inferred Resources", tonnage: "31.4 Mt", grade: "1.6% Cu", contained: "502 kt Cu" },
    ],
    footnotes: [
      "Mt = Million tonnes. Cu = Copper. kt = Thousand tonnes.",
      "Mineral Resources are reported inclusive of Mineral Reserves.",
      "Reserve estimates assume long-term copper price of $8,500/tonne.",
      "Full technical report available on request.",
    ],
  },

  localInsights: {
    eyebrow: "Local Context",
    title: "The Copperbelt is more than a geological formation.",
    body: "It is a region with century-old mining heritage, communities whose families have worked these mines for generations, and a workforce that combines deep institutional knowledge with modern technical training. We operate as a guest in this region - and that shapes every decision.",
    points: [
      "Operations across Chingola, Kitwe, and Mufulira districts",
      "Partnership with Mopani Copper Mines under long-term service contracts",
      "Compliance with Zambia Mining Act (2015) and Mines Safety Department regulations",
      "Active engagement with Chamber of Mines of Zambia",
    ],
  },

  localBenefits: {
    eyebrow: "Local Benefits",
    title: "Value that stays in Zambia.",
    stats: [
      { value: "85%", label: "Zambian workforce" },
      { value: "$48M", label: "Annual local spend" },
      { value: "47", label: "Local SME suppliers" },
      { value: "$2.4M", label: "Community investment" },
    ],
    body: "Mining creates value only when that value circulates locally. We prioritise Zambian suppliers, train Zambian operators into supervisory roles, and reinvest a portion of every contract into the communities where we operate.",
  },

  safety: {
    eyebrow: "Safety & Health",
    title: "The non-negotiable foundation.",
    body: "Underground mining carries inherent risk. We do not eliminate that risk - we engineer it down to the lowest achievable level through controls, training, and constant verification.",
    items: [
      {
        title: "Engineered Controls",
        desc: "Real-time gas monitoring, automated ventilation, ground movement sensors, and rescue chambers within 5 minutes reach of every active section.",
      },
      {
        title: "Workforce Health",
        desc: "Mandatory annual medical screening, exposure monitoring for dust and noise, on-site clinic with paramedic team, and mental health support programs.",
      },
      {
        title: "Compliance",
        desc: "Certified to ISO 45001 (Occupational Health & Safety). Audited quarterly against ICMM safety principles and Zambia Mines Safety Department standards.",
      },
    ],
  },

  environment: {
    eyebrow: "Environment",
    title: "Underground mining, surface responsibility.",
    body: "Our work happens below ground, but our environmental impact is measured above it. Water use, energy consumption, dust, and rehabilitation are all monitored and reported transparently.",
    metrics: [
      { label: "Process water recycled", value: "90%" },
      { label: "Emissions reduction (vs 2024)", value: "47%" },
      { label: "Land rehabilitated", value: "340 ha" },
      { label: "Environmental incidents", value: "0" },
    ],
  },

  innovation: {
    eyebrow: "Innovation",
    title: "What changes underground mining.",
    body: "Mining hasn't fundamentally changed in 100 years - but the tools have. We invest in technologies that improve safety, reduce environmental impact, and unlock ore bodies that were previously uneconomic.",
    items: [
      {
        title: "Tele-remote operations",
        desc: "LHD vehicles operated from surface control rooms, removing workers from hazardous areas during high-risk phases.",
      },
      {
        title: "Battery-electric haulage",
        desc: "Transitioning diesel fleet to battery-electric vehicles, reducing underground emissions and ventilation requirements.",
      },
      {
        title: "Digital twin modelling",
        desc: "Real-time 3D models of underground workings allow predictive maintenance and optimised blast designs.",
      },
    ],
  },

  reports: [
    { title: "Annual Operational Report 2025", date: "March 2026", size: "8.4 MB" },
    { title: "Reserves & Resources Statement", date: "March 2026", size: "2.1 MB" },
    { title: "Safety Performance Review", date: "February 2026", size: "1.8 MB" },
    { title: "Sustainability Report 2025", date: "April 2026", size: "12.6 MB" },
  ],
};
