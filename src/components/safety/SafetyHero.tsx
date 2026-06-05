"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SafetyHero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-slate-950">
      {/* Background image */}
      <Image
        src="/Worker Protection Systems.webp"
        alt="SKT Global mining worker with safety equipment"
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />

      {/* Top thin emerald accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full min-h-[88vh] flex flex-col justify-end pb-20 lg:pb-28">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-white/60">
            Zero Harm · Active Status
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-white max-w-4xl mb-7"
        >
          Safety is not a target.
          <br />
          <span className="text-white/35 font-light">It&apos;s how we operate.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base lg:text-lg text-white/65 max-w-xl leading-relaxed font-light mb-10"
        >
          Every shift, every protocol, every meter underground is governed by
          one non-negotiable principle — bring everyone home.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-8 right-6 lg:right-12 hidden md:flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest rotate-90 origin-center mb-2">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
