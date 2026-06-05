"use client";

import { motion } from "framer-motion";
import { SAFETY_TIMELINE } from "@/data/safety-data";

export function IncidentTimeline() {
  return (
    <section className="bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Track Record
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            Safety milestones
            <br />
            <span className="text-slate-400 font-light">we&apos;ve earned.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-slate-300" />

          <div className="space-y-12">
            {SAFETY_TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-[24px_1fr] gap-6 items-start"
              >
                {/* Dot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <span className="inline-block font-mono text-[10px] font-bold text-emerald-600 tracking-widest uppercase mb-2 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                    {item.year}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 mb-2 leading-tight">
                    {item.milestone}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
