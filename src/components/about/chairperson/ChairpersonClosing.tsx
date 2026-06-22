"use client";

import { motion } from "framer-motion";

export default function ChairpersonClosing() {
  return (
    <section className="py-24 md:py-40 bg-bg-soft border-b border-slate-200 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="mb-16">
            <p className="text-xl md:text-3xl font-serif text-slate-800 leading-relaxed italic mb-8">
              &ldquo;We are building a legacy of sustainable value - one that benefits our shareholders, empowers our employees, and strengthens the communities we serve.&rdquo;
            </p>
            <div className="w-16 h-px bg-slate-300 mx-auto" />
          </div>

          <div className="flex flex-col items-center justify-center">
            
            <h3 className="text-xl font-serif text-slate-900 mb-2">Mr. Raj Talreja</h3>
            <p className="text-sm font-bold tracking-[0.15em] uppercase text-skt-blue mb-4">
              Chairperson of the Board
            </p>
            <p className="text-xs tracking-[0.1em] uppercase text-slate-500">
              SKT Global Mining & Services Limited
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
