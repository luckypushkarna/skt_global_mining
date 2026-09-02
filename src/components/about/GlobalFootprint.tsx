"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "50%", label: "Mopani Targets Achieved in 10 Months" },
  { value: "4", label: "Core Operating Nations" },
];

const nations = ["Zambia", "India", "Democratic Republic of Congo", "South Africa"];

export default function GlobalFootprint() {
  return (
    <section className="py-24 md:py-36 bg-skt-navy text-white overflow-hidden relative">
      {/* Abstract Map Background Placeholder */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-6"
            >
              Growth & Expansion
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-normal text-white leading-[1.1] tracking-tight mb-8"
            >
              Scaling responsibly across continents.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-10"
            >
              SKT Global has grown strategically. Looking ahead, our ambitions are bold. We are positioning ourselves for substantial year-on-year growth, diversifying our global footprint to create sustainable value for all stakeholders.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {nations.map((nation, i) => (
                <motion.div
                  key={nation}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wide text-white"
                >
                  {nation}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-5xl md:text-6xl font-serif font-normal text-white mb-4">
                  {metric.value}
                </div>
                <div className="text-sm font-light text-white/60 leading-snug pr-4">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
