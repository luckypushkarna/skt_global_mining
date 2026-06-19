"use client";

import { motion } from "framer-motion";

interface StatMoments {
  number: string;
  label: string;
  sub: string;
  desc: string;
}

const STATS_DATA: StatMoments[] = [
  {
    number: "85%",
    label: "Domestic Workforce",
    sub: "Zambian Nationals",
    desc: "From the mine face to the board room, 85% of all staff are Zambian citizens, representing a new era of regional autonomy."
  },
  {
    number: "258",
    label: "Local Engineers Trained",
    sub: "SKT Graduate Scheme",
    desc: "Over two hundred fifty engineering graduates have completed our fully-funded apprentice and tertiary pathways."
  },
  {
    number: "1.2M",
    label: "Safe Operating Hours",
    sub: "Without lost-time incident",
    desc: "A testament to our rigorous safety protocols, zero-harm training drills, and individual worker accountability."
  },
  {
    number: "$4.2M",
    label: "Local Supply Chain Spend",
    sub: "Annual domestic procurement",
    desc: "Direct support of copperbelt suppliers, builders, fabricators, and agricultural co-operatives providing site catering."
  }
];

export function TypographyStat() {
  return (
    <section className="bg-zinc-950 text-white py-24 md:py-36 space-y-36">
      {/* Mini Section Intro */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block mb-3">
          ── The Metrics of Pride
        </span>
        <h2 className="text-4xl md:text-5xl uppercase tracking-tight max-w-2xl leading-[0.95] font-serif font-normal">
          A business is built by people, not machinery.
        </h2>
      </div>

      {/* Individual Stat Moments */}
      <div className="space-y-48">
        {STATS_DATA.map((stat, idx) => (
          <div 
            key={stat.label}
            className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            {/* Massive scroll triggered number */}
            <div className="lg:col-span-8 overflow-hidden select-none">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[20vw] lg:text-[15vw] font-black leading-none tracking-tighter text-sky-400 uppercase font-sans"
              >
                {stat.number}
              </motion.div>
            </div>

            {/* Content block */}
            <div className="lg:col-span-4 space-y-4 border-t border-zinc-800 pt-6 lg:border-t-0 lg:pt-0">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">
                [ Stat Moment 0{idx + 1} ]
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                {stat.label}
              </h3>
              <p className="font-mono text-xs text-sky-300 uppercase tracking-wider">
                {stat.sub}
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
