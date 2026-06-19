"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_LAYERS } from "@/data/logistics-network";

export function OperationalEcosystem() {
  return (
    <section className="relative border-b border-slate-200 bg-[#FAFAFA] py-20 lg:py-32 overflow-hidden">
      
      {/* Background mesh */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #64748B 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-5 lg:px-12">
        
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Operational Ecosystem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] font-serif font-normal">
            Six interlocking layers.
            <br />
            <span className="text-slate-400 font-light">One operation.</span>
          </h2>
        </div>

        {/* Hexagonal cluster layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {ECOSYSTEM_LAYERS.map((layer, i) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative bg-white p-8 lg:p-10 hover:bg-slate-50/60 transition-colors"
            >
              {/* Index marker */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-500 tracking-widest font-semibold">
                  LAYER {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] text-slate-400 tracking-widest">
                  {layer.count}
                </span>
              </div>

              <h3 className="text-lg lg:text-xl font-semibold text-slate-900 leading-tight mb-3">
                {layer.layer}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {layer.desc}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-slate-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
