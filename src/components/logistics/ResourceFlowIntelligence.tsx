"use client";

import { motion } from "framer-motion";
import { RESOURCE_STAGES } from "@/data/logistics-network";

export function ResourceFlowIntelligence() {
  return (
    <section className="relative border-b border-slate-200 bg-white py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              Resource Flow
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] font-serif font-normal">
            From rock to refined.
            <br />
            <span className="text-slate-400 font-light">Five-stage journey.</span>
          </h2>
        </div>

        {/* Flow visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-slate-300 via-slate-400 via-slate-500 via-slate-400 to-slate-300 opacity-40" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {RESOURCE_STAGES.map((stage, i) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Node circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group hover:border-slate-400 transition-colors shadow-sm">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-100 to-transparent" />
                    <span className="relative font-mono text-2xl font-medium text-slate-800 tabular-nums">
                      {stage.stage}
                    </span>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-2">
                    Stage {stage.stage}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {stage.name}
                  </h3>
                  <p className="font-mono text-sm text-slate-700 font-medium tabular-nums mb-3">
                    {stage.output}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {stage.desc}
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
