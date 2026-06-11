"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/safety-data";

export function CertificationBar() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" strokeWidth={1.5} />
            <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-white/50">
              Independently Verified
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-snug">
            Certified to international safety standards.
          </h2>
        </div>

        {/* Certifications list */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-14 pb-14 border-b border-white/10">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group flex items-center gap-2.5"
            >
              <div className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
              <p className="text-sm font-medium text-white/70 tracking-wide group-hover:text-white transition-colors duration-200">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing commitment */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-5xl text-emerald-500/15 font-serif mb-2 leading-none select-none">&ldquo;</div>
          <blockquote className="text-lg lg:text-xl font-light text-white/75 leading-[1.6] italic mb-8 -mt-4">
            Zero harm is not a slogan. It&apos;s the standard every operator at SKT
            Global is held to - from the rock face to the boardroom.
          </blockquote>
          <div className="h-px w-10 bg-emerald-500 mx-auto mb-4" />
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
            Safety Charter · SKT Global Mining · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
