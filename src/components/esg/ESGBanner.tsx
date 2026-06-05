"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ESGBanner() {
  return (
    <div className="relative w-full h-[88vh] min-h-[620px] overflow-hidden bg-slate-950">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      >
        <source src="/videos/gallery-sustainability-optimized.mp4" type="video/mp4" />
      </video>

      {/* Fallback / overlay image */}
      <Image
        src="/Mechanised Fleet.webp"
        alt="SKT Global Mining operations"
        fill
        className="object-cover opacity-20 mix-blend-luminosity"
        priority
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/30 to-[#FAFAFA]" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />

      {/* Thin emerald accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">
              Sustainability · ESG Overview
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.03] text-white mb-6">
            Building a Legacy
            <br />
            <span className="text-slate-400 font-light">Beyond Extraction</span>
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
            At SKT Global, environmental stewardship, social responsibility, and governance
            aren&apos;t policies — they are the foundation of how we operate every single day.
          </p>

          {/* Scroll cue */}
          <div className="flex items-center gap-2 text-slate-500">
            <ArrowDown size={14} className="animate-bounce" />
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
