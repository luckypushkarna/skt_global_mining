"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChairpersonHero() {
  return (
    <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image with Cinematic Grading */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/Raj Sir Photo.webp"
          alt="Mr. Raj Talreja, Chairperson"
          fill
          priority
          className="object-cover object-top opacity-30 mix-blend-luminosity"
          sizes="100vw"
        />
        {/* Gradients for text legibility and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950/50" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-6 md:mb-8"
          >
            Leadership Vision
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[80px] font-serif font-normal tracking-tight text-white leading-[1.05] mb-8"
          >
            A message from<br className="hidden md:block" /> our Chairperson.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl"
          >
            Reflecting on a journey defined by ambition, operational excellence, and our unwavering commitment to Zambia&apos;s mining future.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 z-10"
      >
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40">
          Scroll to read
        </span>
        <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-white/60 animate-scroll-line-horizontal" />
        </div>
      </motion.div>
    </section>
  );
}
