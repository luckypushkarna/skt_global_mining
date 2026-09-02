"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ENGINEERING_SERVICES } from "@/data/engineering-services";

export function ESTeam() {
  const { team } = ENGINEERING_SERVICES;

  return (
    <section className="bg-white py-20 lg:py-32 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-skt-blue" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-skt-blue">
                  Engineering Team
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.08] mb-6 font-serif font-normal">
                {team.title}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-light mb-12">
                {team.body}
              </p>
            </motion.div>

            {/* Team breakdown data readout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-8"
            >
              <div className="flex flex-col gap-2">
                {team.breakdown.map((item, i) => (
                  <div
                    key={item.role}
                    className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-slate-400">0{i + 1}</span>
                      <span className="text-sm tracking-wide font-medium text-slate-700">
                        {item.role}
                      </span>
                    </div>
                    <span className="font-mono text-xl text-slate-900 tabular-nums">
                      {item.count}
                    </span>
                  </div>
                ))}

                {/* Total */}
                <div className="flex items-center justify-between pt-6 mt-2 border-t border-slate-300">
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-500">
                    Total Strength
                  </span>
                  <span className="font-mono text-3xl font-medium text-skt-blue tabular-nums">
                    118
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Team portrait */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-sm"
            >
              <div className="rounded-xl overflow-hidden bg-slate-100">
                <ImagePlaceholder
                  aspectRatio="aspect-[4/5]"
                  label="Engineering Team Portrait"
                  hint="Group photo of engineering team in workshop or PPE gear. Mix of senior and junior engineers, diverse, candid not posed. Portrait orientation, 800×1000px minimum."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
