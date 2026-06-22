"use client";

import { motion } from "framer-motion";

export function CommunityQuote() {
  return (
    <section className="bg-bg-tint py-24 lg:py-32 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-skt-blue">
              The SKT Philosophy
            </span>
          </div>

          <div className="relative">
            {/* Minimalist quote marks */}
            <div className="absolute -top-12 -left-4 text-8xl lg:text-9xl font-serif text-sky-400/10 select-none pointer-events-none">
              &ldquo;
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-snug font-serif italic mb-10 relative z-10">
              When the community thrives, the operation thrives. It&apos;s not a 
              charitable afterthought; it&apos;s the foundation of sustainable mining.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="h-px w-12 bg-skt-blue mb-2" />
            <p className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Raj Talreja
            </p>
            <p className="text-xs text-slate-500 tracking-widest uppercase">
              Chairperson
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
