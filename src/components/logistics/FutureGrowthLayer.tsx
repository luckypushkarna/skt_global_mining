"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FUTURE_GROWTH } from "@/data/logistics-network";

export function FutureGrowthLayer() {
  return (
    <section className="relative border-b border-slate-200 bg-[#FAFAFA] py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Future Growth Layer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] font-serif font-normal">
            What comes next.
            <br />
            <span className="text-slate-400 font-light">Through 2028.</span>
          </h2>
        </div>

        <div className="space-y-0">
          {FUTURE_GROWTH.map((item, i) => (
            <motion.div
              key={item.project}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-t border-slate-200 last:border-b hover:bg-slate-100/30 transition-colors px-4 -mx-4"
            >
              <div className="md:col-span-2">
                <p className="font-mono text-xs text-slate-500 tracking-widest uppercase font-semibold">
                  {item.phase}
                </p>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 mb-1">
                  {item.project}
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="font-mono text-base text-slate-700 font-medium tabular-nums">
                  {item.investment}
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Investment</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-mono text-base text-slate-800 font-medium">
                  {item.impact}
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Impact</p>
              </div>
              <div className="md:col-span-1 flex md:justify-end items-center">
                <ArrowUpRight className="w-4 h-4 text-slate-350 group-hover:text-slate-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-450 font-mono">
            Capital commitments through Q4 2028 · Subject to board approval
          </p>
          <p className="text-xs font-mono text-slate-650 font-semibold">
            TOTAL: $640M · +475 kt/yr Cu capacity
          </p>
        </div>
      </div>
    </section>
  );
}
