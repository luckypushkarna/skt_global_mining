"use client";

import { motion } from "framer-motion";
import { INFRASTRUCTURE_INTEL } from "@/data/logistics-network";

export function InfrastructureIntelligence() {
  return (
    <section className="relative border-b border-slate-200 bg-[#FAFAFA] py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Infrastructure Intelligence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] font-serif font-normal">
            The connective tissue.
          </h2>
        </div>

        <div className="space-y-0">
          {INFRASTRUCTURE_INTEL.map((infra, i) => (
            <motion.div
              key={infra.type}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-t border-slate-200 last:border-b items-center hover:bg-slate-100/30 transition-colors px-4 -mx-4"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-slate-500 tracking-widest font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900">
                  {infra.type}
                </h3>
              </div>
              <div className="md:col-span-3">
                <p className="font-mono text-2xl text-slate-800 font-semibold tabular-nums">
                  {infra.span}
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm text-slate-650 leading-relaxed font-light">
                  {infra.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
