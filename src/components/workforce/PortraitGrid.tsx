"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  num: string;
  name: string;
  role: string;
  exp: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  { num: "01/08", name: "Mulenga Mutati", role: "Chief of Zambia Operations", exp: "14 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/mulenga-mutati.webp" },
  { num: "02/08", name: "Charles Sakanya", role: "Senior Metallurgical Director", exp: "9 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/charles-sakanya.webp" },
  { num: "03/08", name: "Safeli Maxim Chipulu", role: "Underground Shift Manager", exp: "11 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/safeli-maxim-chipulu.webp" },
  { num: "04/08", name: "Toms Joseph", role: "Logistics Division Lead", exp: "7 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/toms-joseph.webp" },
  { num: "05/08", name: "Anand Kolappa Pillai", role: "Refining Systems Specialist", exp: "8 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/anand-kolappa-pillai.webp" },
  { num: "06/08", name: "Kiran Kumar Reddy", role: "Heavy Maintenance Superintendent", exp: "10 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/kiran-kumar-reddy.webp" },
  { num: "07/08", name: "Sahil Talreja", role: "Civil & Infrastructure Engineer", exp: "6 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/sahil-talreja.webp" },
  { num: "08/08", name: "Sanjay Kumar Sharma", role: "Power Systems Engineer", exp: "12 Years at SKT", image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt/leaders/sanjay-kumar-sharma.webp" },
];

export function PortraitGrid() {
  return (
    <section className="bg-zinc-950 text-white py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block mb-3">
              ── DOCUMENTARY PHOTOGRAPHY
            </span>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tight font-serif font-normal">
              MEET THE OPERATORS
            </h2>
          </div>
          <p className="text-zinc-500 font-mono text-xs max-w-xs md:text-right">
            Captured on-site in Chambishi, Zambia. Natural lighting, direct gaze, direct impact.
          </p>
        </div>

        {/* Poster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="group relative flex flex-col border border-zinc-800 bg-zinc-900/20 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden filter grayscale contrast-115 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 bg-zinc-950">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Index Indicator */}
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/80 px-2 py-0.5 font-mono text-[9px] text-zinc-400 tracking-wider">
                  {member.num}
                </div>

                {/* Sky blue accent overlay on hover */}
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Caption details block */}
              <div className="p-5 border-t border-zinc-800 bg-zinc-950 group-hover:border-sky-500/30 transition-colors duration-300">
                <h3 className="font-bold text-lg text-white group-hover:text-sky-400 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono uppercase tracking-wider">
                  {member.role}
                </p>
                <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span>TENURE</span>
                  <span>{member.exp}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
