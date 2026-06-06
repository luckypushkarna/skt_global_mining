"use client";

import { motion } from "framer-motion";
import { SUSTAINABILITY_NODES } from "@/data/logistics-network";

export function SustainabilityNetwork() {
  return (
    <section className="relative border-b border-slate-200 bg-white py-20 lg:py-32 overflow-hidden">
      
      {/* Organic background pattern */}
      <div className="absolute inset-0 opacity-[0.10]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#64748B" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="#64748B" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic)" />
        </svg>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-5 lg:px-12">
        
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Sustainability Network
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Environmental
            <br />
            <span className="text-slate-400 font-light">infrastructure.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
          {SUSTAINABILITY_NODES.map((node, i) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white p-6 hover:bg-slate-50/60 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-slate-500 mb-4" />
              <p className="font-mono text-2xl lg:text-3xl font-medium text-slate-700 tabular-nums mb-2">
                {node.metric}
              </p>
              <p className="text-sm font-semibold text-slate-900 mb-1 leading-tight">
                {node.name}
              </p>
              <p className="text-[11px] text-slate-500 font-light">
                {node.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
