"use client";

import { motion } from "framer-motion";
import { SAFETY_METRICS } from "@/data/safety-data";

export function LiveCounter() {
  return (
    <section className="border-b border-slate-200 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Safety Record · Live Metrics
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              By the numbers,
              <br />
              <span className="text-slate-400 font-light">verified independently.</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light lg:max-w-md lg:ml-auto">
              All metrics are audited quarterly by independent third parties and
              certified under ISO 45001 international standards.
            </p>
          </div>
        </div>

        {/* Metrics grid — grid border layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-slate-200 gap-px">
          {SAFETY_METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white p-6 lg:p-9 group overflow-hidden"
            >
              {/* Number */}
              <div className="flex items-baseline gap-0.5 mb-4">
                <span className="font-mono text-3xl lg:text-5xl font-semibold text-slate-900 tabular-nums tracking-tight group-hover:text-emerald-700 transition-colors duration-300">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="font-mono text-2xl lg:text-3xl text-emerald-600 group-hover:text-emerald-500 transition-colors duration-300">
                    {metric.suffix}
                  </span>
                )}
              </div>

              {/* Accent line */}
              <div className="h-px w-0 bg-emerald-500 mb-4 group-hover:w-10 transition-all duration-500 ease-out" />

              {/* Labels */}
              <p className="text-sm font-bold text-slate-900 mb-1.5">{metric.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{metric.sub}</p>

              {/* Bottom hover bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

        {/* Audit footnote */}
        <p className="mt-5 text-[11px] text-slate-400 font-mono tracking-wide">
          Last audited: Q1 2026 · Next audit scheduled: Q2 2026 · Auditor: Bureau Veritas Zambia
        </p>
      </div>
    </section>
  );
}
