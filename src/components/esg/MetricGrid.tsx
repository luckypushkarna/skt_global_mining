"use client";

import { motion } from "framer-motion";
import { ESG_STATS } from "@/data/esg-data";

export function MetricGrid() {
  return (
    <div>
      {/* Section header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-emerald-500" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-700">
            Performance Metrics
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl tracking-tight text-slate-900 font-serif font-normal">
          Measured. Verified. Reported.
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-xl">
          Every number below is independently verified. We hold ourselves to a higher standard
          because our communities deserve nothing less.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
        {ESG_STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-white relative overflow-hidden"
          >
            <div className="p-7 lg:p-9">
              <span className="block text-4xl lg:text-5xl font-mono font-semibold text-slate-900 tracking-tighter mb-3 tabular-nums group-hover:text-emerald-700 transition-colors duration-300">
                {stat.value}
              </span>
              <span className="block text-sm font-semibold text-slate-800 mb-1.5">{stat.label}</span>
              <span className="block text-xs text-slate-500 leading-relaxed">{stat.sub}</span>

              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
