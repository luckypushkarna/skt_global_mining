"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-skt-navy">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/tunnel-drills.webp"
          alt="SKT Global Mining Operations"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-skt-navy/40 via-transparent to-skt-navy" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/70 mb-6 md:mb-8"
        >
          Company Overview
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-serif font-normal tracking-tight text-white leading-[1.05] max-w-5xl mx-auto mb-10"
        >
          A Legacy Forged in Copper.
          <br className="hidden md:block" /> Built for the Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto"
        >
          SKT Global Mining & Services Limited, a proud subsidiary of Tyre Technocrats India Private Limited (TTIPL), represents a strategic investment and long-term commitment to Zambia&apos;s mining sector. From inception, our journey has been defined by uncompromising ambition, speed, and technical excellence.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50">
          Discover
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
      </motion.div>
    </section>
  );
}
