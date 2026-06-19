"use client";

import { motion } from "framer-motion";

export function SafetyHero() {
  return (
    <section className="relative w-full min-h-[72vh] lg:min-h-[82vh] bg-black overflow-hidden mt-16">
      {/* Background video - completely stock without filters/overlays */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/safety-first-bg.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-[72vh] lg:min-h-[82vh] flex flex-col justify-end pb-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Zero Harm · Active Status
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-xl md:text-2xl tracking-tight text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-serif font-normal">
            Safety is not a target.{" "}
            <span className="text-white/80 font-normal">It&apos;s how we operate.</span>
          </h1>

          {/* Body */}
          <p className="text-xs md:text-sm text-white/90 leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Every shift, every protocol, every meter underground is governed by
            one non-negotiable principle - bring everyone home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
