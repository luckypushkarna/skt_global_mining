"use client";

import { motion } from "framer-motion";
import { ENGINEERING_SERVICES } from "@/data/engineering-services";

export function ESCapabilities() {
  const { capabilities } = ENGINEERING_SERVICES;

  return (
    <section className="bg-white py-20 lg:py-32 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-skt-blue" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-skt-blue">
              Capabilities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.08] font-serif font-normal">
            Six core
            <br />
            <span className="text-slate-400">engineering disciplines.</span>
          </h2>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 lg:p-10 bg-slate-50/50 border border-slate-200 rounded-2xl overflow-hidden hover:bg-white hover:shadow-card hover:border-slate-300 transition-all duration-300"
            >
              {/* Giant Background Number */}
              <div className="absolute -bottom-6 -right-4 text-[120px] font-bold leading-none text-slate-100 group-hover:text-slate-200/50 transition-colors select-none pointer-events-none">
                {cap.number}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-sm font-semibold text-skt-blue tracking-widest">
                    {cap.number}
                  </span>
                  <div className="h-px flex-1 bg-slate-200 group-hover:bg-slate-300 transition-colors" />
                </div>

                <h3 className="text-xl lg:text-2xl font-normal font-serif tracking-tight text-slate-900 leading-tight mb-4">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-light mt-auto">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
