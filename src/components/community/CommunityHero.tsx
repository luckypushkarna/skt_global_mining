"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function CommunityHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-bg-soft pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Text */}
          <div className="relative z-10 pt-10 md:pt-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-skt-blue mb-6 md:mb-8"
            >
              Community Impact Report
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-[72px] font-serif font-normal tracking-tight text-slate-900 leading-[1.05] mb-8"
            >
              When a mining company<br className="hidden lg:block" /> becomes a neighbour.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-lg"
            >
              Twenty percent of SKT Global&apos;s net profits return directly to Zambia&apos;s 
              mining communities. Schools, clinics, water networks—this is what it 
              looks like when industry takes responsibility seriously.
            </motion.p>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden order-first lg:order-last shadow-md"
          >
            <Image
              src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp"
              alt="SKT Global community engagement in Zambia"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Soft gradient over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 rounded-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
