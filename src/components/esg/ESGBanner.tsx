"use client";

import { motion } from "framer-motion";

export function ESGBanner() {
  return (
    <section className="relative w-full min-h-[72vh] lg:min-h-[82vh] bg-black overflow-hidden mt-16">
      {/* Video Background - raw, no filters */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/gallery-sustainability-optimized.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[72vh] lg:min-h-[82vh] flex flex-col justify-end pb-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Sustainability · ESG Overview
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Building a Legacy{" "}
            <span className="text-white/80">Beyond Extraction</span>
          </h1>

          {/* Sub */}
          <p className="text-xs md:text-sm text-white/90 leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            At SKT Global, environmental stewardship, social responsibility, and governance
            aren&apos;t policies - they are the foundation of how we operate every single day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
