"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChairpersonHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-neutral-950 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text */}
          <div className="relative z-10 pt-10 md:pt-0">
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
              className="text-5xl md:text-6xl lg:text-[72px] font-serif font-normal tracking-tight text-white leading-[1.05] mb-8"
            >
              A message from<br className="hidden lg:block" /> our Chairperson.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-lg"
            >
              Reflecting on a journey defined by ambition, operational excellence, and our unwavering commitment to Zambia&apos;s mining future.
            </motion.p>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden order-first lg:order-last"
          >
            <Image
              src="/Raj Sir Photo.webp"
              alt="Mr. Raj Talreja, Chairperson"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Cinematic subtle gradient over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 md:bottom-12 left-6 md:left-12 flex items-center gap-4 z-10"
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
