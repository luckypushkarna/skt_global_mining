"use client";

import { motion } from "framer-motion";

import { INFRASTRUCTURE_SYSTEMS } from "@/data/infrastructure-systems";

export function InfraQuote() {
  return (
    <section className="bg-amber-50 border-y border-amber-200/60 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Giant decorative quotation mark */}
          <div
            className="absolute -top-6 -left-4 text-[12rem] lg:text-[18rem] leading-none text-amber-200 font-black select-none pointer-events-none"
            aria-hidden
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.3] tracking-tight max-w-3xl pl-4 lg:pl-8">
            {INFRASTRUCTURE_SYSTEMS.quote.text}
          </p>

          {/* Attribution */}
          <div className="mt-8 pl-4 lg:pl-8 flex items-center gap-3">
            <div className="w-8 h-px bg-amber-500" />
            <div>
              <p className="text-sm font-bold text-slate-900">{INFRASTRUCTURE_SYSTEMS.quote.author}</p>
              <p className="text-xs text-slate-500"></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

