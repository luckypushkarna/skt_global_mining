"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6", label: "Months to Mobilise" },
  { value: "1,500+", label: "Professionals Recruited" },
  { value: "225", label: "Underground Machines" },
  { value: "$50M+", label: "Initial Investment" },
];

export default function TheGenesisRecord() {
  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-skt-blue mb-6">
              The Mobilisation Record
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-slate-900 leading-[1.1] tracking-tight mb-8">
              Defying industry standards to build a powerhouse in record time.
            </h2>
            <div className="space-y-6 text-base md:text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Within an extraordinary period of just six months, SKT orchestrated one of the most rapid infrastructural mobilisations in Zambian mining history. We didn&apos;t just procure equipment—we built a fully operational, world-class mining ecosystem from the ground up.
              </p>
              <p>
                This remarkable achievement earned direct recognition from the Labour Organization of Zambia. It encompassed the importation of machinery across multiple international borders, ensuring strict regulatory compliance, and establishing modern warehouses, 24-hour catering, and comprehensive workforce transportation networks. SKT Global forms part of a dynamic international group of companies and represents TTIPL&apos;s strategic investment into Zambia.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-bg-tint p-8 md:p-10 rounded-2xl flex flex-col justify-center border border-slate-100 hover:border-skt-blue/30 transition-colors"
              >
                <span className="text-4xl md:text-5xl font-serif font-normal text-skt-blue mb-3">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold tracking-wide text-slate-900 uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
