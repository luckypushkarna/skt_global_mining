"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SAFETY_PILLARS } from "@/data/safety-data";

export function SafetyPillars() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Section header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Our Approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-5">
            Four pillars of
            <br />
            <span className="text-slate-400 font-light">underground safety.</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light">
            We don&apos;t rely on policy alone. Safety is engineered into our equipment,
            our protocols, our training, and verified through independent audit.
          </p>
        </div>

        {/* Pillars - 2×2 grid with border lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {SAFETY_PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white p-8 lg:p-10 group hover:bg-slate-50/60 transition-colors duration-200 overflow-hidden"
            >
              {/* Number + hairline */}
              <div className="flex items-center gap-4 mb-7">
                <span className="font-mono text-xs font-bold text-emerald-600 tracking-widest shrink-0">
                  {pillar.number}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-[1.8] mb-7 font-light">
                {pillar.desc}
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <Check
                      className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
