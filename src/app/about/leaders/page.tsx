"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const leaders = [
  {
    id: 1,
    name: "Mr. Sahil Talreja",
    designation: "Managing Director",
    department: "Executive Leadership",
    statement:
      "Sustainable growth is built on decisive action, disciplined teams, and an unwavering commitment to the people and communities we serve.",
    image: "/Sahil Talreja.webp",
    yearsExperience: 20,
    overview: {
      intro:
        "Sahil Talreja is the strategic architect behind SKT Global Mining & Services Limited, directing the company's rapid establishment and growth across Zambia's Copperbelt. As Managing Director, he leads the organisation's vision to become the most reliable and respected mining services partner in sub-Saharan Africa.",
      expertise:
        "His expertise spans international business development, strategic capital deployment, and the mobilisation of large-scale industrial operations in emerging markets. Under his leadership, SKT Global mobilised 225+ underground machines and onboarded 1,500+ Zambian employees within the company's first six months of operations.",
      philosophy:
        "Sahil's leadership philosophy is grounded in speed without recklessness — moving decisively on opportunity while maintaining the discipline to build systems that last. He believes that world-class mining outcomes begin with world-class people and the infrastructure to support them.",
      responsibilities:
        "As Managing Director, Sahil oversees the company's overall strategic direction, capital allocation, international partnerships, and relationship with key stakeholders including Mopani Copper Mines and the TTIPL Group.",
    },
    areasOfFocus: [
      { title: "Strategic Planning", description: "Long-term growth and international market positioning" },
      { title: "Capital Deployment", description: "US$50M+ strategic infrastructure and operational investment" },
      { title: "Mining Operations", description: "Overseeing 225+ underground machines and 24/7 operations" },
      { title: "Workforce Development", description: "Building a 1,500+ strong Zambian operational workforce" },
      { title: "Commercial Growth", description: "Expanding revenue, partnerships, and service contracts" },
      { title: "Sustainability", description: "Responsible mining and community value creation" },
    ],
    journey: [
      { year: "2005", title: "Foundation", description: "Early career in industrial services and resource sector business development across Asia and Africa." },
      { year: "2012", title: "TTIPL Group", description: "Joined TTIPL Group leadership, directing strategic expansion into African resource and infrastructure markets." },
      { year: "2018", title: "Africa Expansion", description: "Led feasibility studies and partnership negotiations for entry into Zambia's Copperbelt mining sector." },
      { year: "2023", title: "SKT Global Formation", description: "Founded SKT Global Mining & Services Limited as part of TTIPL Group's strategic mining arm." },
      { year: "2024", title: "Rapid Mobilisation", description: "Led the mobilisation of 225+ underground machines and 1,500+ Zambian workforce within six months — a record for the region." },
      { year: "2025", title: "Current Position", description: "Continues to drive SKT Global's growth agenda, targeting 90% of Mopani Copper Mines' future mining activities." },
    ],
    contributions: [
      { title: "Company Foundation", narrative: "Founded SKT Global Mining & Services Limited from the ground up, establishing the legal, operational, and financial frameworks required to operate in Zambia's complex regulatory environment. The company became operational within months of inception." },
      { title: "Record Mobilisation", narrative: "Oversaw the fastest large-scale mining fleet mobilisation in recent Zambian history — 225+ underground machines deployed within six months through a US$50M+ investment program. The achievement is widely cited as a benchmark for project execution." },
      { title: "Mopani Partnership", narrative: "Negotiated and established the strategic service contract with Mopani Copper Mines, positioning SKT Global as the primary underground mining contractor for one of Zambia's most significant copper operations. Within ten months, approximately 50% of MCM development and production targets were achieved." },
      { title: "Zambian Workforce Development", narrative: "Championed a hire-local philosophy that resulted in over 1,500 Zambian employees joining the company. Structured training and mentorship programs alongside experienced international mining professionals to build domestic technical capability." },
      { title: "Infrastructure Platform", narrative: "Directed the build-out of comprehensive operational infrastructure — underground workshops, strategic warehousing, accommodation facilities, transport networks, and support systems — creating the backbone for long-term operational excellence." },
    ],
    philosophyQuote:
      "The best mining operations are built not from the top down, but from the ground up — with the right people, the right tools, and a shared belief in what's possible.",
    impact: [
      { area: "Operational Excellence", description: "Under Sahil's leadership, SKT Global achieved approximately 50% of Mopani Copper Mines' development and production targets within the first ten months — a pace that exceeded expectations across the industry." },
      { area: "Safety Performance", description: "The company established a safety-first operational culture from day one, implementing ISO 45001-aligned systems and zero-harm protocols across all underground sites." },
      { area: "Financial Discipline", description: "US$50M+ was invested with disciplined capital controls, establishing the asset base for long-term operational sustainability and future expansion toward 90% of MCM mining activity." },
      { area: "Sustainability Goals", description: "SKT Global's hiring and procurement frameworks prioritise Zambian employment and local suppliers, embedding economic sustainability at the core of the business model." },
      { area: "Community Development", description: "The employment of 1,500+ Zambian workers and investment in local infrastructure has created measurable economic impact for communities across the Copperbelt." },
    ],
    network: [
      { department: "Operations", connection: "Direct oversight of all underground mining operations through the COO and site management teams." },
      { department: "Finance", connection: "Strategic partnership on capital allocation, investor relations, and financial planning with the CFO." },
      { department: "Engineering", connection: "Collaborative leadership on fleet deployment, maintenance infrastructure, and technical standards." },
      { department: "Human Resources", connection: "Joint stewardship of talent strategy, Zambian workforce development, and organisational culture." },
      { department: "Commercial", connection: "Alignment on market strategy, contract management, and Mopani partnership governance." },
    ],
    personalMessage:
      "When we founded SKT Global, we committed to a simple belief: that Zambia deserves world-class mining services delivered by a company that respects the land, the communities, and the people who work the ground.\n\nWhat we have built in a short time is extraordinary — not because of any single decision, but because of the collective effort of over 1,500 Zambian professionals who showed up every day and gave their best.\n\nWe are just beginning. The target of supporting 90% of Mopani's future mining activities is ambitious. But looking at what our teams have already achieved, I have no doubt that it is within reach.\n\nThank you to everyone who made this company what it is today.\n\nWith respect and determination,\nSahil Talreja",
  },
  {
    id: 2,
    name: "Mr. Anand Kolappa Pillai",
    designation: "Director",
    department: "Corporate Strategy",
    statement:
      "Enduring enterprise value is created through long-term thinking, technical precision, and deep respect for the communities where we operate.",
    image: "/Anand Kolappa Pillai.webp",
    yearsExperience: 25,
    overview: {
      intro:
        "Anand Kolappa Pillai brings a quarter-century of strategic and operational expertise to his role as Director at SKT Global. A corporate strategist with a track record spanning international infrastructure, technology transfer, and strategic capital ventures, he is one of the foundational architects of the company's structure and governance.",
      expertise:
        "His areas of expertise include international project management, technology transfer across industrial sectors, strategic capital structuring, and cross-border regulatory compliance. He has been instrumental in shaping the TTIPL Group's expansion across African markets.",
      philosophy:
        "Anand believes that sustainable enterprise is built through meticulous planning, transparent governance, and the conviction to take the long view in an industry that demands short-term results. He champions a culture where technical excellence and commercial discipline go hand in hand.",
      responsibilities:
        "As Director, Anand oversees international infrastructure projects, technology adoption strategy, and capital venture governance within SKT Global. He serves on key governance committees and provides strategic counsel to the Managing Director and executive team.",
    },
    areasOfFocus: [
      { title: "Strategic Planning", description: "Long-term strategic direction and governance frameworks" },
      { title: "Operational Technology", description: "Technology transfer and industrial innovation adoption" },
      { title: "Commercial Growth", description: "Capital ventures, partnerships, and market development" },
      { title: "Asset Management", description: "Infrastructure investment and lifecycle management" },
      { title: "Mine Planning", description: "Strategic alignment of mine plans with commercial objectives" },
      { title: "Supply Chain", description: "International procurement and supply chain development" },
    ],
    journey: [
      { year: "2000", title: "Early Career", description: "Infrastructure project management roles across South and Southeast Asia, specialising in industrial and resources sectors." },
      { year: "2007", title: "International Expansion", description: "Led cross-border infrastructure projects connecting Asian technology providers with African industrial clients." },
      { year: "2013", title: "TTIPL Leadership", description: "Joined TTIPL Group as a senior strategist, directing capital ventures and technology transfer programs for the group's international portfolio." },
      { year: "2019", title: "Africa Strategy", description: "Spearheaded TTIPL Group's strategic assessment of sub-Saharan African mining markets, identifying Zambia's Copperbelt as the priority investment region." },
      { year: "2023", title: "SKT Global", description: "Appointed Director of SKT Global Mining & Services at founding, contributing to the corporate, governance, and operational frameworks." },
      { year: "2024", title: "Current Position", description: "Directs international infrastructure strategy and capital governance as SKT Global executes its Zambian expansion plan." },
    ],
    contributions: [
      { title: "Corporate Governance Framework", narrative: "Designed the corporate governance and compliance framework for SKT Global, ensuring the company operates to international standards across Zambian regulatory, financial, and operational requirements from day one." },
      { title: "Technology Transfer Program", narrative: "Established structured technology transfer arrangements with international OEM partners, bringing best-in-class mining technology and practices to SKT Global's Zambian operations, reducing technology gaps and improving fleet performance." },
      { title: "Capital Structure", narrative: "Led the structuring of the company's initial US$50M+ capital deployment, balancing fleet acquisition, infrastructure build-out, and working capital requirements to ensure operational readiness from the outset." },
      { title: "International Partnerships", narrative: "Developed and maintains strategic relationships with global mining equipment suppliers, technology providers, and institutional partners that give SKT Global preferential access to equipment, expertise, and commercial opportunities." },
      { title: "Regulatory Navigation", narrative: "Guided the company through Zambia's complex mining regulatory environment, ensuring full compliance with the Mines and Minerals Development Act, environmental standards, and employment regulations." },
    ],
    philosophyQuote:
      "Lasting value in mining is not extracted from the ground — it is built through the trust of communities, the rigour of planning, and the integrity of every decision made along the way.",
    impact: [
      { area: "Operational Excellence", description: "Anand's governance frameworks and technology transfer programs have contributed to the operational discipline that allowed SKT Global to achieve Mopani targets within its first year." },
      { area: "Safety Performance", description: "His international standards experience informed the safety management systems deployed across SKT Global's underground operations." },
      { area: "Financial Discipline", description: "The capital structuring work he led ensured US$50M+ was deployed efficiently and that the company maintained financial resilience through its establishment phase." },
      { area: "Sustainability Goals", description: "Anand has championed the integration of ESG principles into the company's governance framework from the outset." },
      { area: "Community Development", description: "His insistence on local procurement and employment standards in contractual arrangements has amplified the economic benefit to Zambian communities." },
    ],
    network: [
      { department: "Operations", connection: "Strategic alignment of operational plans with long-term corporate objectives." },
      { department: "Finance", connection: "Capital governance, venture structuring, and investment oversight." },
      { department: "Engineering", connection: "Technology transfer, OEM partnerships, and technical standard setting." },
      { department: "Human Resources", connection: "Governance of talent programs and international expert deployment." },
      { department: "Commercial", connection: "International business development and partnership governance." },
    ],
    personalMessage:
      "Mining has always been an industry of vision and discipline — the vision to see value where others see only rock, and the discipline to extract that value responsibly and sustainably.\n\nAt SKT Global, we have had the privilege of building something significant in a very short time. What makes me proud is not just the fleet we deployed or the targets we achieved — it is the way we did it. With respect for the regulatory frameworks, with genuine commitment to local employment, and with an eye always on the long term.\n\nThe road ahead is exciting. The Copperbelt has extraordinary potential, and we have positioned ourselves to be a genuine partner in realising it.\n\nWith admiration for our entire team,\nAnand Kolappa Pillai",
  },
  {
    id: 3,
    name: "Mr. Sanjay Kumar Sharma",
    designation: "Chief Executive Officer",
    department: "Operations Leadership",
    statement:
      "Operational discipline is not a constraint — it is the force that transforms potential into performance, every shift, every day.",
    image: "/Sanjay Kumar sharma.webp",
    yearsExperience: 28,
    overview: {
      intro:
        "Sanjay Kumar Sharma is a distinguished operations leader with nearly three decades of experience in heavy machinery deployment, underground mining methods, and the regional scaling of large industrial operations. As CEO of SKT Global, he provides the operational backbone that drives the company's performance across Zambia's Copperbelt.",
      expertise:
        "His expertise is deeply rooted in the technical realities of underground mining — from rock mechanics and ventilation design to fleet management and shift-by-shift production optimisation. He has managed operations spanning multiple countries and operational environments.",
      philosophy:
        "Sanjay leads with the conviction that excellence in underground mining is the product of relentless attention to fundamentals. He champions a culture where every supervisor knows their section, every technician knows their machine, and every shift ends safer than it began.",
      responsibilities:
        "As CEO, Sanjay has direct accountability for all of SKT Global's underground mining operations, including production management, fleet deployment, maintenance systems, safety performance, and the operational relationship with Mopani Copper Mines.",
    },
    areasOfFocus: [
      { title: "Mining Operations", description: "Directing 24/7 underground production across Copperbelt sites" },
      { title: "Production Management", description: "Delivering consistent output against Mopani production targets" },
      { title: "Safety Systems", description: "Zero-harm culture embedded across all operational levels" },
      { title: "Asset Management", description: "Maximising availability and performance of 225+ machines" },
      { title: "Workforce Development", description: "Mentoring Zambian operational leaders through structured programs" },
      { title: "Operational Technology", description: "Deploying technology to improve safety and efficiency underground" },
    ],
    journey: [
      { year: "1997", title: "Early Career", description: "Graduate mining engineer at underground hard-rock operations. Progressed through technical, supervisory, and management roles across Indian mining operations." },
      { year: "2004", title: "Technical Leadership", description: "Senior Mine Engineer roles managing development and production operations at large-scale underground mines." },
      { year: "2010", title: "Operations Management", description: "Mine Manager at a major underground operation, overseeing 2,000+ personnel and full mine-to-surface production cycle." },
      { year: "2016", title: "Regional Expansion", description: "Led expansion of underground operations into new regional markets, establishing operational frameworks from inception." },
      { year: "2022", title: "Africa Assignment", description: "Deployed to Zambia to assess operational landscape and develop the blueprint for SKT Global's Copperbelt mining program." },
      { year: "2024", title: "Current Position", description: "Appointed CEO of SKT Global, directing the operational execution of the company's Mopani Copper Mines service contracts." },
    ],
    contributions: [
      { title: "Operational System Design", narrative: "Designed the operational management system used across all SKT Global underground sites — from shift handover protocols and production reporting to maintenance scheduling and safety sign-off procedures. The system has been instrumental in achieving consistency across multiple concurrent mine sites." },
      { title: "Fleet Deployment Strategy", narrative: "Developed the phased fleet deployment strategy that allowed 225+ machines to be made operational in stages without sacrificing productivity or safety standards. His sequencing methodology minimised mobilisation risk while accelerating the path to full operational capacity." },
      { title: "Production Target Achievement", narrative: "Under Sanjay's operational leadership, SKT Global achieved approximately 50% of Mopani Copper Mines' development and production targets within the first ten months — a milestone that cemented the company's reputation as a reliable and capable mining contractor." },
      { title: "Underground Safety Architecture", narrative: "Implemented a comprehensive underground safety architecture combining physical controls, behavioural programs, and management systems. The framework aligns with Zambia Mines Safety Department requirements and international best practice." },
      { title: "Zambian Technician Development", narrative: "Established structured mentorship and technical training pathways that have elevated Zambian technicians and supervisors into operational leadership roles, reducing dependency on expatriate expertise while building long-term domestic capacity." },
    ],
    philosophyQuote:
      "Underground mining demands honesty from everyone in the chain — from the face worker to the CEO. The rock doesn't forgive poor planning, and neither do the families of the people who depend on us to get it right.",
    impact: [
      { area: "Operational Excellence", description: "Sanjay's operational discipline has established SKT Global as a top-performing mining contractor in the Copperbelt, with consistent shift-on-shift improvement in productivity metrics." },
      { area: "Safety Performance", description: "Under his leadership, SKT Global's underground operations have maintained strong safety records, with a safety-first culture embedded at every operational level." },
      { area: "Financial Discipline", description: "His efficient fleet utilisation and maintenance programs have controlled operating costs while sustaining high equipment availability rates." },
      { area: "Sustainability Goals", description: "Sanjay has championed responsible underground practices including proper ventilation management, ground support protocols, and environmental controls within the mine environment." },
      { area: "Community Development", description: "His commitment to Zambian workforce development has created meaningful technical career pathways for local employees across all operational sites." },
    ],
    network: [
      { department: "Operations", connection: "Direct leadership of all site managers, mine managers, and production teams." },
      { department: "Finance", connection: "Operational budgeting, cost control, and production performance reporting." },
      { department: "Engineering", connection: "Mine planning, fleet maintenance, and technical services integration." },
      { department: "Human Resources", connection: "Workforce planning, Zambian skills development, and operational talent management." },
      { department: "Commercial", connection: "Production delivery alignment with Mopani contract commitments and performance targets." },
    ],
    personalMessage:
      "I have spent my career underground — and I would not have it any other way. There is a clarity that comes with underground mining that you don't find anywhere else. Either the system works, or it doesn't. Either the team is ready, or it isn't. The mine tells the truth every single shift.\n\nWhat I have found at SKT Global is a team that wants to do things the right way. Not just achieve the numbers, but build something that lasts — an operation that Zambia can be proud of and that Mopani can depend on.\n\nTo every operator, supervisor, engineer, and support worker on our sites — you are the reason we are succeeding. Keep leading from the front.\n\nWith deep respect,\nSanjay Kumar Sharma",
  },
  {
    id: 4,
    name: "Mr. Srinivasulu Jonnalagadda",
    designation: "Chief Financial Officer",
    department: "Finance & Risk",
    statement:
      "Financial rigour is what gives ambitious operational plans the credibility and resilience to survive contact with reality.",
    image: "/Srinivasulu Jonnalagadda.webp",
    yearsExperience: 22,
    overview: {
      intro:
        "Srinivasulu Jonnalagadda is a chartered finance executive with deep experience managing multinational balance sheets, complex risk frameworks, and large-scale capital programs in the mining and industrial sectors. As CFO of SKT Global, he ensures that every dollar of investment delivers maximum operational and strategic value.",
      expertise:
        "His expertise spans financial planning and analysis, treasury management, risk governance, capital project oversight, and regulatory compliance across multiple jurisdictions. He brings disciplined financial management to an organisation operating in one of the world's most demanding industrial environments.",
      philosophy:
        "Srinivasulu leads with the belief that financial discipline enables operational ambition — that strong controls, transparent reporting, and rigorous capital management create the freedom to pursue bold strategic goals. He is a trusted partner to both the operational and executive leadership.",
      responsibilities:
        "As CFO, Srinivasulu oversees all financial management functions including treasury, accounting, financial planning, risk management, capital allocation, and compliance. He manages relationships with banking and financial partners and leads investor reporting.",
    },
    areasOfFocus: [
      { title: "Strategic Planning", description: "Financial planning aligned with the company's operational growth agenda" },
      { title: "Asset Management", description: "Capital lifecycle management across a US$200M+ fleet and infrastructure base" },
      { title: "Supply Chain", description: "Financial governance of procurement and supply chain investment" },
      { title: "ESG Governance", description: "Financial reporting transparency and stakeholder accountability" },
      { title: "Commercial Growth", description: "Financial structuring of new contracts and business development" },
      { title: "Safety Systems", description: "Investment governance for safety infrastructure and compliance systems" },
    ],
    journey: [
      { year: "2002", title: "Early Career", description: "Qualified Chartered Accountant. Early roles in audit and financial advisory for industrial and resources sector clients." },
      { year: "2007", title: "Mining Finance", description: "Senior finance manager at a major mining group, managing cost accounting and capital project reporting." },
      { year: "2012", title: "Multinational Experience", description: "Regional Finance Director with responsibility for cross-border treasury, tax, and compliance across African and Asian operations." },
      { year: "2018", title: "Group Finance", description: "Group Finance Controller at TTIPL, overseeing consolidated financial management and international subsidiary reporting." },
      { year: "2023", title: "SKT Global Formation", description: "Appointed CFO at SKT Global founding, structuring the financial architecture for the company's Zambian mining operations." },
      { year: "2024", title: "Current Position", description: "Manages all financial operations including the stewardship of a US$50M+ initial capital deployment and ongoing operational finance." },
    ],
    contributions: [
      { title: "Financial Architecture", narrative: "Established the complete financial management architecture for SKT Global from inception, including accounting systems, internal controls, treasury operations, and management reporting frameworks suited to the Zambian operating environment." },
      { title: "Capital Deployment Oversight", narrative: "Managed the financial governance of the US$50M+ initial capital program — ensuring that fleet acquisition, infrastructure build-out, and working capital requirements were funded in the right sequence, at the right cost, and with appropriate risk controls." },
      { title: "Zambia Regulatory Compliance", narrative: "Led the implementation of Zambia Revenue Authority, Bank of Zambia, and mining sector regulatory compliance frameworks, establishing the company's reputation as a transparent and compliant operator." },
      { title: "Banking Relationships", narrative: "Structured and secured the company's banking and credit facilities in Zambia, providing the financial flexibility to manage operational cashflows, equipment financing, and strategic investment." },
      { title: "Management Reporting", narrative: "Designed the management reporting system that provides real-time financial insight to operational and executive leadership, enabling faster and more informed decision-making across the business." },
    ],
    philosophyQuote:
      "Numbers never lie, but they rarely tell the whole story on their own. My job is to make sure the numbers and the story always point in the same direction.",
    impact: [
      { area: "Operational Excellence", description: "Financial controls and cost management frameworks under Srinivasulu's stewardship have enabled SKT Global to operate efficiently within budget while maintaining high operational standards." },
      { area: "Safety Performance", description: "His financial governance ensures that safety investment is protected and prioritised, never compromised in the pursuit of cost savings." },
      { area: "Financial Discipline", description: "Srinivasulu has built a financial management culture characterised by discipline, transparency, and accountability — creating the credibility that gives the company access to financial markets and partnerships." },
      { area: "Sustainability Goals", description: "His ESG-aligned reporting frameworks position SKT Global for sustainable financing and responsible investor relationships." },
      { area: "Community Development", description: "His management of local procurement and payroll programs ensures the direct economic benefit to Zambian communities is measurable and accountable." },
    ],
    network: [
      { department: "Operations", connection: "Operational budgeting, cost management, and production financial analysis." },
      { department: "Finance", connection: "Direct leadership of all finance, treasury, accounting, and compliance teams." },
      { department: "Engineering", connection: "Capital project financial governance and fleet investment oversight." },
      { department: "Human Resources", connection: "Payroll management, employment cost planning, and benefits administration." },
      { department: "Commercial", connection: "Contract financial analysis, pricing governance, and commercial risk management." },
    ],
    personalMessage:
      "Financial management in a young, fast-moving mining company is a unique challenge — and one I find deeply rewarding. You need to be disciplined enough to maintain control and flexible enough to support rapid operational growth. Getting that balance right is the daily work.\n\nWhat gives me confidence is the quality of the people around me. Every department at SKT Global operates with a professionalism and seriousness of purpose that makes financial governance straightforward — because the organisation itself is committed to doing things correctly.\n\nWe have built strong foundations. The financial platform is in place. Now we focus on the next phase of growth — and making sure every dollar we invest continues to deliver value for our people, our partners, and Zambia.\n\nWith respect,\nSrinivasulu Jonnalagadda",
  },
  {
    id: 5,
    name: "Mr. Kiran Kumar Reddy",
    designation: "Mine manager at SOB",
    department: "SOB Operations",
    statement: "Technical precision in underground excavation underpins safety, productivity, and the integrity of our production targets.",
    image: "/Kiran Kumar Reddy.webp",
    yearsExperience: 15,
    overview: {
      intro: "Kiran Kumar Reddy is the Mine Manager at SOB operations, directing the execution of mechanised mining and ventilation protocols at high-capacity underground shafts. With over 15 years of hard-rock mining experience, he coordinates shift-on-shift production targets with absolute precision.",
      expertise: "His technical focus encompasses ventilation engineering design, deep shaft ground support mechanics, and automated haulage systems management in deep underground configurations.",
      philosophy: "Kiran believes that mining precision starts with planning. Every drill pattern, ground support bolt, and ventilation shift must be executed to engineering design to eliminate risk and ensure safe, consistent output.",
      responsibilities: "He leads the SOB underground operations team, ensuring that mechanized development, stope mining, ground stabilization, and air ventilation circuits perform continuously and safely.",
    },
    areasOfFocus: [
      { title: "Mining Operations", description: "Directing daily mechanized mining and stope development" },
      { title: "Production Management", description: "Ensuring air ventilation and shaft infrastructure deliver on targets" },
      { title: "Safety Systems", description: "Enforcing underground hazard identification and ground control safety" },
      { title: "Asset Management", description: "Stewardship of automated haulage and drill systems deployed at SOB" },
      { title: "Mine Planning", description: "Technical alignment of face development with mine planning targets" },
    ],
    journey: [
      { year: "2010", title: "Mining Engineer", description: "Started as a technical underground mine engineer, mastering ventilation design and blast planning." },
      { year: "2016", title: "Operations Supervisor", description: "Managed shift supervisors and mechanized teams across high-stress development faces." },
      { year: "2021", title: "Zambia Deployment", description: "Assigned to Copperbelt operations to lead feasibility and setup of ventilation corridors." },
      { year: "2024", title: "SOB Mine Manager", description: "Appointed Mine Manager, overseeing all production and engineering operations at the SOB underground mine." },
    ],
    contributions: [
      { title: "Ventilation Design Optimization", narrative: "Re-engineered the air ventilation circuits at the main SOB shafts, significantly improving air quality, working conditions, and safety metrics while reducing auxiliary power draw." },
      { title: "Production Efficiency", narrative: "Optimized stope turnaround times using advanced rock mechanics analysis, allowing the mine to safely meet development metrics ahead of scheduling cycles." },
      { title: "Underground Safety Standards", narrative: "Established ground support safety audits and blast safety checklists that have maintained SOB operations without major incidents." },
    ],
    philosophyQuote: "Precision in mine management is not about speed; it is about executing every drill, bolt, and shift to exact engineering designs.",
    impact: [
      { area: "Operational Excellence", description: "Kiran's coordination has established SOB as a benchmark site for ventilation efficiency and shift target consistency." },
      { area: "Safety Performance", description: "Under his direction, the ground support safety records at SOB remain among the highest in the region." },
    ],
    network: [
      { department: "Operations", connection: "Direct reports from supervisors, ventilation teams, and stope operators." },
      { department: "Engineering", connection: "Collaborates on fleet maintenance and mine planning engineering." },
    ],
    personalMessage: "Managing a mine like SOB is a technical test that requires disciplined teamwork and absolute respect for underground physics. Our daily success is built on the expertise and focus of every technician on our team.",
  },
  {
    id: 6,
    name: "Mr. Suresh Babu Deshamalla",
    designation: "Head of Maintenance",
    department: "Asset Readiness",
    statement: "Operational readiness is the product of preventive maintenance, robust supply chains, and technical pride in our fleet.",
    image: "/Suresh Babu Deshamalla.webp",
    yearsExperience: 18,
    overview: {
      intro: "Suresh Babu Deshamalla is the Head of Maintenance at SKT Global, managing the lifecycle, availability, and preventive servicing of our 225+ underground mechanized mining vehicle fleet. He holds 18 years of asset engineering experience across large-scale industrial projects.",
      expertise: "He specializes in preventive maintenance systems, spare parts supply chain logistics, diagnostics telemetry, and rebuild workshops management for underground mining machinery.",
      philosophy: "Suresh believes that downtime is not inevitable; it is a metric to be managed. An active preventive maintenance loop keeps our operators safe and our production lines running uninterrupted.",
      responsibilities: "He leads the surface and underground workshops, overseeing maintenance technicians, spare parts inventories, OEM warranty relationships, and diagnostic telemetry systems.",
    },
    areasOfFocus: [
      { title: "Asset Management", description: "Maximizing the availability and life of our 225+ vehicle fleet" },
      { title: "Supply Chain", description: "Stewardship of the US$3M+ spare parts and logistics inventory" },
      { title: "Operational Technology", description: "Deploying telemetry systems to predict and prevent machine faults" },
      { title: "Safety Systems", description: "Ensuring all mobile fleet safety brakes and controls meet zero-harm requirements" },
    ],
    journey: [
      { year: "2008", title: "Heavy Fleet Mechanic", description: "Started in workshop maintenance for heavy-duty earthmovers and drill rigs." },
      { year: "2015", title: "Maintenance Engineer", description: "Managed predictive maintenance loops and parts inventories for multinational mining fleets." },
      { year: "2021", title: "Zambia Fleet Manager", description: "Supervised the initial mobilization of the 225+ fleet and the setup of regional parts warehouses." },
      { year: "2024", title: "Head of Maintenance", description: "Assumed direct oversight of all workshops and fleet assets across SKT Global operations." },
    ],
    contributions: [
      { title: "Workshop Infrastructure Build", narrative: "Designed and built the state-of-the-art underground maintenance workshops, enabling major component replacements to occur directly in-shaft, cutting turnaround times by 40%." },
      { title: "Telemetry Diagnostics", narrative: "Deployed an advanced diagnostics monitoring system, reducing unplanned fleet downtime and preventing major engine and hydraulic failures." },
    ],
    philosophyQuote: "Availability is the ultimate metric. If a machine isn't running, the mine isn't producing, and our job is to ensure it never stops.",
    impact: [
      { area: "Operational Excellence", description: "Suresh's team keeps the vehicle availability above 85%, supporting continuous 24/7 underground activities." },
      { area: "Safety Performance", description: "Rigorous fleet safety compliance audits have kept mobile equipment-related incidents at zero." },
    ],
    network: [
      { department: "Operations", connection: "Aligns maintenance windows with production scheduling to avoid disruptions." },
      { department: "Finance", connection: "Manages capital budgeting for fleet spares and OEM contracts." },
    ],
    personalMessage: "Maintenance is where engineering precision meets daily operations. Our technicians take great pride in ensuring that every machine leaving our workshops is safe, reliable, and ready for the most demanding conditions.",
  },
  {
    id: 7,
    name: "Mr. Kuldeep Kulshrestha",
    designation: "Commercial Manager",
    department: "Commercial Strategy",
    statement: "Sustainable commercial partnerships are built on contract compliance, mutual benefit, and operational reliability.",
    image: "/Kuldeep Kulshrestha.webp",
    yearsExperience: 16,
    overview: {
      intro: "Kuldeep Kulshrestha is the Commercial Manager at SKT Global, overseeing international supply chain integrations, commercial risk analysis, and customer relationship governance. His 16-year career focuses on commercial growth in resource and logistics sectors.",
      expertise: "He specializes in contract negotiation, supply chain risk management, commercial planning, pricing strategy, and vendor relationship frameworks.",
      philosophy: "Kuldeep believes that commercial agreements must translate directly into mutual operational success. Clear contracts, coupled with reliable delivery, are the foundation of long-term business partnerships.",
      responsibilities: "He governs all commercial agreements, contract compliance cycles, supply chain partnerships, key client relationships, and business development opportunities.",
    },
    areasOfFocus: [
      { title: "Commercial Growth", description: "Negotiating service contracts and expanding partnership agreements" },
      { title: "Supply Chain", description: "Integrating international supply corridors to ensure material flow" },
      { title: "Strategic Planning", description: "Analyzing commercial risks and formulating commercial strategy" },
      { title: "Capital Deployment", description: "Reviewing commercial feasibility and returns on capital projects" },
    ],
    journey: [
      { year: "2009", title: "Supply Chain Analyst", description: "Early career focusing on logistics efficiency and vendor performance metrics." },
      { year: "2015", title: "Commercial Executive", description: "Negotiated supply contracts and governed international procurement loops for resource companies." },
      { year: "2020", title: "Business Development Manager", description: "Led market entry studies and commercial alignments for mining projects in sub-Saharan Africa." },
      { year: "2024", title: "Commercial Manager", description: "Appointed to lead SKT Global's commercial division, managing customer contracts and compliance." },
    ],
    contributions: [
      { title: "Supply Chain Resilience Plan", narrative: "Re-structured international logistics pipelines to ensure critical equipment spares bypassed port bottlenecks, securing continuous supply during peak operational phases." },
      { title: "Contract Compliance Optimization", narrative: "Developed a digital contract tracking framework that aligned production metrics with billing cycles, improving transparency and cash flow efficiency." },
    ],
    philosophyQuote: "A contract is only as strong as the relationship behind it. When both parties focus on mutual reliability, commercial value follows naturally.",
    impact: [
      { area: "Operational Excellence", description: "His commercial management ensures that logistics corridors remain open and contract parameters are met without disruption." },
      { area: "Financial Discipline", description: "Kuldeep's contract structures have optimized payment terms and mitigated procurement risk." },
    ],
    network: [
      { department: "Operations", connection: "Ensures contract commitments match underground capabilities." },
      { department: "Finance", connection: "Collaborates on billing audits, risk registers, and commercial terms." },
    ],
    personalMessage: "Commercial strategy is about alignment. My focus is on making sure our commercial frameworks support our teams underground, while delivering the reliability and value that our clients expect from us.",
  },
  {
    id: 8,
    name: "Mr. Mulenga Mutati",
    designation: "HR Manager",
    department: "Human Capital",
    statement: "Our greatest resource is the potential of our workforce — nurtured through training, safety, and mutual respect.",
    image: "/Mulenga Mutati.webp",
    yearsExperience: 18,
    overview: {
      intro: "Mulenga Mutati is the HR Manager at SKT Global, directing human resource strategies, workforce development programs, and employee relations across our operations. With 18 years of experience, he leads the hire-local programs that have successfully onboarded 1,500+ Zambian professionals.",
      expertise: "He specializes in industrial relations, talent acquisition, community training initiatives, employee welfare systems, and regulatory employment compliance.",
      philosophy: "Mulenga believes that a safe and supportive workplace is key to high productivity. When people feel valued, respected, and possess clear paths for skills development, they deliver their best work.",
      responsibilities: "He manages employee relations, recruitment processes, training academies, community engagement, safety culture alignment, and compliance with Zambian labor laws.",
    },
    areasOfFocus: [
      { title: "Workforce Development", description: "Structuring employee training and local capabilities programs" },
      { title: "ESG Governance", description: "Governing fair labor practices, diversity, and community welfare" },
      { title: "Safety Systems", description: "Aligning safety training protocols with workforce behavior" },
      { title: "Strategic Planning", description: "Workforce capacity planning to match scaling mining activities" },
    ],
    journey: [
      { year: "2007", title: "HR Generalist", description: "Began in industrial relations, managing labor compliance and employee relations." },
      { year: "2013", title: "Talent Development Lead", description: "Designed training systems for mechanized industrial workforces." },
      { year: "2019", title: "Regional HR Manager", description: "Led talent acquisition and community relations for mining projects in the Copperbelt." },
      { year: "2024", title: "HR Manager", description: "Assumed leadership of the HR division at SKT Global, managing rapid recruitment and onboarding." },
    ],
    contributions: [
      { title: "Zambian Skills Academy", narrative: "Established a mechanized mining training program in collaboration with local institutes, training hundreds of Zambian operators to operate heavy underground machinery safely." },
      { title: "Industrial Harmony Framework", narrative: "Designed an employee relations model that maintains open dialogue between management and operations, securing a stable and productive workforce." },
    ],
    philosophyQuote: "A company's success is defined by how well it supports the people who do the work. When we invest in our people, we secure our future.",
    impact: [
      { area: "Operational Excellence", description: "Mulenga's programs have resulted in a highly skilled, stable workforce with minimal turn-over." },
      { area: "Community Development", description: "Onboarding 1,500+ local employees has provided direct economic sustainability to families in Kitwe and Mufulira." },
    ],
    network: [
      { department: "Operations", connection: "Aligns workforce recruitment and training with shaft production schedules." },
      { department: "Finance", connection: "Manages payroll structures, benefit packages, and labor cost budgets." },
    ],
    personalMessage: "Kitwe is my home, and helping our local people build lasting careers in mechanized mining is what drives me. We are building a workforce that will lead Zambia's mining sector for decades to come.",
  },
  {
    id: 9,
    name: "Mr. Safeli Maxim Chipulu",
    designation: "Site Manager at Mufulira",
    department: "Site Operations",
    statement: "Underground site success is built on clear communication, strict safety standards, and disciplined team coordination.",
    image: "/Safeli maxim chipulu.webp",
    yearsExperience: 16,
    overview: {
      intro: "Safeli Maxim Chipulu is the Site Manager at Mufulira operations, directing day-to-day mechanized mining, ventilation engineering, and safety protocols at the active site. With 16 years of underground experience, he maintains a strict focus on shift efficiency and site safety.",
      expertise: "He specializes in mechanized stope mining, shift cycle optimization, ground stabilization, and underground safety compliance management.",
      philosophy: "Safeli believes that safety and production are inseparable. A clean, disciplined site where safety protocols are strictly followed is naturally a productive and high-yielding mine.",
      responsibilities: "He manages the Mufulira site team, coordinating development drilling, ground support installation, ore haulage, and environmental compliance underground.",
    },
    areasOfFocus: [
      { title: "Mining Operations", description: "Directing mechanized development and production faces at Mufulira" },
      { title: "Safety Systems", description: "Implementing site-wide hazard checks and ground control standards" },
      { title: "Production Management", description: "Managing daily haulage cycles and shift-by-shift output targets" },
      { title: "Workforce Development", description: "Coordinating safety audits and mentoring underground supervisors" },
    ],
    journey: [
      { year: "2010", title: "Shift Supervisor", description: "Supervised underground development teams and managed face drilling operations." },
      { year: "2016", title: "Mining Superintendent", description: "Directed stope production and mechanized equipment deployment across multiple shafts." },
      { year: "2022", title: "Operations Lead", description: "Managed technical safety audits and shift coordination for Copperbelt sites." },
      { year: "2024", title: "Mufulira Site Manager", description: "Appointed to lead all SKT Global site operations, safety, and production at Mufulira." },
    ],
    contributions: [
      { title: "Cycle Time Optimization", narrative: "Optimized haulage truck cycles at Mufulira by improving ramp maintenance and coordination, increasing shift production by 15%." },
      { title: "Ground Support Protocol", narrative: "Upgraded underground ground support installation procedures, enhancing rock stability and ensuring zero groundfall incidents." },
    ],
    philosophyQuote: "There is no room for shortcuts underground. The safest way is always the most productive way to run a mine.",
    impact: [
      { area: "Operational Excellence", description: "Safeli's management has kept Mufulira operations consistently on schedule, meeting Mopani's development requirements." },
      { area: "Safety Performance", description: "Under his leadership, the Mufulira site has maintained a zero-harm record across all mechanized shifts." },
    ],
    network: [
      { department: "Operations", connection: "Directly leads shift superintendents, drill operators, and haulage teams." },
      { department: "Engineering", connection: "Coordinates with maintenance teams to ensure high equipment availability at site." },
    ],
    personalMessage: "The Mufulira mine is an operational test that requires our team's full attention every shift. By keeping our focus on safety and execution, we deliver the results our company and our clients rely on.",
  },
  {
    id: 10,
    name: "Mr. Toms Joseph",
    designation: "Mine Manager at Mufulira",
    department: "Mufulira Operations",
    statement: "Mining excellence lies in the details. Precise drilling, proper air flow, and disciplined operators create a world-class mine.",
    image: "/Toms Joseph.webp",
    yearsExperience: 14,
    overview: {
      intro: "Toms Joseph is the Mine Manager at Mufulira, directing mechanized operations, stope safety, and ventilation systems. Over a 14-year career in underground hard-rock mining, he has successfully delivered on complex production targets in high-capacity shafts.",
      expertise: "His technical focus is on mechanized production drilling, ventilation network management, ground stabilization, and air volume distribution underground.",
      philosophy: "Toms believes that a mine is a complex system that requires balance. Every component — from equipment condition to air quality and ground support — must be monitored and optimized continuously.",
      responsibilities: "He oversees all mining development and stope production activities at the Mufulira site, ensuring safety standards and air ventilation requirements are fully met.",
    },
    areasOfFocus: [
      { title: "Mining Operations", description: "Directing underground mechanized production and drilling" },
      { title: "Production Management", description: "Achieving daily stope production and development metrics" },
      { title: "Safety Systems", description: "Enforcing ventilation compliance and ground control systems" },
      { title: "Asset Management", description: "Monitoring fleet performance and stope deployment at Mufulira" },
    ],
    journey: [
      { year: "2012", title: "Technical Engineer", description: "Began in mine planning, developing blast designs and ventilation models." },
      { year: "2017", title: "Superintendent", description: "Managed underground production shifts and equipment distribution across active stopes." },
      { year: "2022", title: "Mufulira Project Lead", description: "Assigned to Mufulira to coordinate the installation of new high-capacity ventilation fans." },
      { year: "2024", title: "Mufulira Mine Manager", description: "Appointed Mine Manager, overseeing mechanized production and safety execution." },
    ],
    contributions: [
      { title: "Ventilation Network Upgrade", narrative: "Designed and implemented a secondary ventilation network, increasing fresh air supply to deep production faces by 25% and reducing heat stress." },
      { title: "Drilling Accuracy Program", narrative: "Introduced precision drilling guidelines for production stopes, reducing ore dilution and optimizing explosives consumption." },
    ],
    philosophyQuote: "We succeed underground by mastering the details. Air, rock, steel, and team coordination must work as one.",
    impact: [
      { area: "Operational Excellence", description: "Toms' technical systems have improved drill efficiency and stope yield quality at Mufulira." },
      { area: "Safety Performance", description: "Enhanced ventilation and air monitoring loops have created a safer, healthier workplace underground." },
    ],
    network: [
      { department: "Operations", connection: "Leads drill superintendents, blast teams, and ventilation supervisors." },
      { department: "Engineering", connection: "Collaborates on equipment requirements and stope design changes." },
    ],
    personalMessage: "Underground mining is a team sport of high stakes. The technical precision of our team at Mufulira is what allows us to overcome daily challenges and deliver the copper that powers the global economy.",
  },
];

const iconPaths: Record<string, string> = {
  "Strategic Planning": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "Capital Deployment": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "Mining Operations": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "Workforce Development": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  "Commercial Growth": "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  "Sustainability": "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "Production Management": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "Safety Systems": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "Asset Management": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  "Operational Technology": "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  "Supply Chain": "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  "ESG Governance": "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "Mine Planning": "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
};

function getIcon(title: string) {
  const path = iconPaths[title] ?? "M12 6v6m0 0v6m0-6h6m-6 0H6";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

function LeadersContent() {
  const searchParams = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper to cleanly slugify a name for query matching
  const cleanSlug = (str: string) => {
    return str
      .toLowerCase()
      .replace(/^(mr|mrs|ms)\.?\s+/i, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Set currentIndex from search parameters on load
  useEffect(() => {
    const param = searchParams.get("id") || searchParams.get("leader");
    if (param) {
      const numId = parseInt(param, 10);
      let index = -1;
      if (!isNaN(numId)) {
        index = leaders.findIndex((l) => l.id === numId);
      } else {
        const slug = cleanSlug(param);
        index = leaders.findIndex((l) => cleanSlug(l.name) === slug);
      }
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [searchParams]);

  // Non-null guard: currentIndex is always within bounds due to navigateTo checks
  const leader = leaders[currentIndex] ?? leaders[0]!;
  const prevLeader = currentIndex > 0 ? leaders[currentIndex - 1] ?? null : null;
  const nextLeader = currentIndex < leaders.length - 1 ? leaders[currentIndex + 1] ?? null : null;

  const navigateTo = (index: number) => {
    if (index < 0 || index >= leaders.length || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* ── Premium Editorial Leadership Showcase ── */}
      <section className="w-full bg-neutral-50/40 border-b border-neutral-100 pt-[116px] pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Featured Executive Experience */}
            <div className="lg:col-span-5 flex flex-col justify-center min-h-[360px]">
              <div className={`transition-all duration-300 transform ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-medium block mb-2">
                  {leader.department}
                </span>
                
                <h2 className="text-3xl md:text-5xl font-light text-neutral-950 leading-[1.15] tracking-tight mb-3" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                  {leader.name}
                </h2>
                
                <p className="text-sm md:text-base text-neutral-500 font-light mb-6">
                  {leader.designation}
                </p>
                
                <div className="border-l-2 border-neutral-900/20 pl-6 my-6">
                  <p className="text-base text-neutral-600 font-light leading-relaxed italic">
                    &ldquo;{leader.statement}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-[9px] tracking-widest uppercase bg-neutral-100 text-neutral-500 px-3 py-1 font-light rounded-sm">
                    {leader.yearsExperience} Years Leadership
                  </span>
                  <span className="text-[9px] tracking-widest uppercase bg-neutral-100 text-neutral-500 px-3 py-1 font-light rounded-sm">
                    Active Focus: {leader.areasOfFocus[0]?.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Horizontal Leadership Gallery */}
            <div className="lg:col-span-7 relative">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-300 font-light mb-4 block text-right">
                Scroll horizontally to browse
              </p>
              
              <div 
                className="flex gap-6 overflow-x-auto no-scrollbar py-4 px-1 scroll-smooth snap-x snap-mandatory"
              >
                {leaders.map((l, i) => (
                  <motion.div
                    key={l.id}
                    onClick={() => navigateTo(i)}
                    className="flex-shrink-0 w-[200px] sm:w-[240px] snap-start cursor-pointer group text-left"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    {/* Portrait card */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                      <img
                        src={l.image}
                        alt={l.name}
                        className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 ${
                          i === currentIndex 
                            ? "grayscale-0 scale-[1.02]" 
                            : "grayscale group-hover:grayscale-0"
                        }`}
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 border transition-all duration-500 pointer-events-none ${
                        i === currentIndex ? "border-neutral-900/40" : "border-transparent"
                      }`} />
                    </div>

                    {/* Meta info below */}
                    <div className="px-1">
                      <h3 className={`text-sm font-medium transition-colors duration-300 ${
                        i === currentIndex ? "text-neutral-900 font-semibold" : "text-neutral-500 group-hover:text-neutral-900"
                      }`}>
                        {l.name.replace("Mr. ", "").replace("Mrs. ", "").replace("Ms. ", "")}
                      </h3>
                      <p className="text-[11px] text-neutral-400 font-light mt-0.5 truncate">
                        {l.designation}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Transitioning Content Wrapper ── */}
      <div className={`transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>

        {/* ── 2. Overview ─────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-3">Leadership Overview</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                {leader.yearsExperience} years of industry leadership
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-7">
              <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed">{leader.overview.intro}</p>
              <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed">{leader.overview.expertise}</p>
              <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed">{leader.overview.philosophy}</p>
              <p className="text-sm text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-7">
                {leader.overview.responsibilities}
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Areas of Focus ───────────────────────────────────────────────── */}
        <section className="bg-gray-50/60 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-3">Areas of Focus</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-14">Leadership Domains</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
              {leader.areasOfFocus.map((area, i) => (
                <div key={i} className="group">
                  <div className="text-gray-400 group-hover:text-gray-700 transition-colors mb-4">
                    {getIcon(area.title)}
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Journey ──────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-3">Executive Journey</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">A career defined by impact</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gray-200" />
                <div className="space-y-10">
                  {leader.journey.map((item, i) => (
                    <div key={i} className="relative pl-9">
                      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-gray-300 bg-white" />
                      <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-1">{item.year}</p>
                      <h3 className="text-base font-medium text-gray-900 mb-1.5">{item.title}</h3>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20"><hr className="border-gray-100" /></div>

        {/* ── 5. Contributions ────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-3">Signature Contributions</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-14">Defining achievements</h2>
          <div className="space-y-14">
            {leader.contributions.map((item, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14">
                <div className="lg:col-span-4">
                  <span className="text-5xl font-extralight text-gray-200 block mb-2 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed">{item.narrative}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Philosophy Quote ─────────────────────────────────────────────── */}
        <section className="bg-gray-900 py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            <svg className="mx-auto mb-8 text-gray-600" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote>
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed tracking-tight">
                {leader.philosophyQuote}
              </p>
            </blockquote>
            <p className="mt-10 text-[11px] tracking-widest uppercase text-gray-500">— {leader.name}</p>
          </div>
        </section>

        {/* ── 7. Organisation Impact ──────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-3">Organisation Impact</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-14">Shaping SKT Global</h2>
          <div className="space-y-0">
            {leader.impact.map((item, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-14 border-b border-gray-100 py-10 last:border-0">
                <div className="lg:col-span-4">
                  <h3 className="text-base font-medium text-gray-900">{item.area}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-gray-600 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. Network ──────────────────────────────────────────────────────── */}
        <section className="bg-gray-50/60 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-3">Leadership Network</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-14">Cross-functional leadership</h2>
            <div className="space-y-7">
              {leader.network.map((node, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-gray-600">{node.department[0]}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{node.department}</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{node.connection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Personal Message ─────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] tracking-[0.28em] uppercase text-gray-400 mb-8">A Personal Message</p>
            <div className="space-y-6">
              {leader.personalMessage.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-base lg:text-lg text-gray-600 font-light leading-relaxed italic">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. Navigation ──────────────────────────────────────────────────── */}
        <section className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 divide-x divide-gray-100">
              <button
                onClick={() => prevLeader && navigateTo(currentIndex - 1)}
                disabled={!prevLeader}
                className={`py-12 pr-6 text-left transition-colors group ${prevLeader ? "hover:bg-gray-50 cursor-pointer" : "opacity-25 cursor-default"
                  }`}
              >
                <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-2 flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  Previous
                </p>
                {prevLeader && (
                  <>
                    <p className="text-base md:text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">{prevLeader.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{prevLeader.designation}</p>
                  </>
                )}
              </button>

              <button
                onClick={() => nextLeader && navigateTo(currentIndex + 1)}
                disabled={!nextLeader}
                className={`py-12 pl-6 text-right transition-colors group ${nextLeader ? "hover:bg-gray-50 cursor-pointer" : "opacity-25 cursor-default"
                  }`}
              >
                <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-2 flex items-center justify-end gap-2">
                  Next
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </p>
                {nextLeader && (
                  <>
                    <p className="text-base md:text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">{nextLeader.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{nextLeader.designation}</p>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function LeadersPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center text-neutral-400 font-light">
        Loading leadership profiles...
      </div>
    }>
      <LeadersContent />
    </Suspense>
  );
}
