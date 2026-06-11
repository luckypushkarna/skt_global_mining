"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EMERGENCY_PROTOCOLS } from "@/data/safety-data";

export function ProtocolSection() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
                Emergency Readiness
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Prepared for
              <br />
              <span className="text-slate-400 font-light">every scenario.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-slate-600 leading-relaxed font-light">
            Underground rescue chambers, certified mine rescue teams, and on-site
            medical response - operational 24 hours a day, 365 days a year.
          </p>
        </div>

        {/* Two-column: Image + Protocols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative aspect-[4/5] bg-slate-100 overflow-hidden"
          >
            <Image
              src="/Rescue Systems.webp"
              alt="Underground rescue systems and emergency preparedness"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-[1.02] hover:scale-100"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-[10px] font-mono text-white/70 tracking-widest uppercase">
                Fig. 01 - Underground Rescue Systems · SKT Global
              </p>
            </div>
            {/* Index tag */}
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm border border-white/10 px-2 py-1">
              <span className="text-white font-mono text-[9px] tracking-widest uppercase">Emergency</span>
            </div>
          </motion.div>

          {/* Protocols list */}
          <div className="lg:col-span-7">
            {EMERGENCY_PROTOCOLS.map((protocol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-slate-200 last:border-b py-8 group hover:bg-slate-50/50 transition-colors duration-200 -mx-4 px-4"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors duration-200">
                      {protocol.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-[1.8] font-light">
                      {protocol.desc}
                    </p>
                  </div>

                  {/* Response time badge */}
                  <div className="text-right flex-shrink-0 pt-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                      Response
                    </span>
                    <span className="text-sm font-bold text-emerald-700 font-mono whitespace-nowrap">
                      {protocol.response}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
