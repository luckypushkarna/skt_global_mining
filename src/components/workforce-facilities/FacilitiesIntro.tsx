"use client";

import { motion } from "framer-motion";
import { WORKFORCE_FACILITIES } from "@/data/workforce-facilities";

export function FacilitiesIntro() {
  const { intro } = WORKFORCE_FACILITIES;
  return (
    <section className="bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main text - 2 column editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            {/* Drop cap paragraph */}
            <p className="text-slate-700 text-base lg:text-lg leading-[1.9] mb-6">
              <span className="float-left text-[5.5rem] font-black leading-[0.75] mr-3 mt-1 text-amber-600 select-none">
                {intro.letter}
              </span>
              {intro.paragraphs[0]}
            </p>

            <p className="text-slate-600 text-base leading-[1.9] mb-6 font-light">
              {intro.paragraphs[1]}
            </p>

            <p className="text-slate-600 text-base leading-[1.9] font-light">
              {intro.paragraphs[2]}
            </p>
          </motion.div>

          {/* Sidebar - sticky stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="border-t-2 border-amber-500 pt-5 space-y-6">
              <p className="text-[9px] font-black tracking-[0.35em] uppercase text-slate-400 mb-4">
                At a Glance
              </p>
              {intro.stats.map((s) => (
                <div key={s.value} className="border-b border-slate-200 pb-5">
                  <p className="text-3xl font-black text-amber-600 tracking-tight mb-1">{s.value}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

