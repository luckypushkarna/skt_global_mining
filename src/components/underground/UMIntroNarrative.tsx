"use client";

import { motion } from "framer-motion";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function UMIntroNarrative() {
  return (
    <section className="bg-neutral-950 text-white py-24 lg:py-32 border-t border-neutral-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Section label */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-neutral-600" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                  Introduction
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl tracking-tight leading-[1.1] text-white font-serif font-normal">
                The work below.
              </h2>
            </motion.div>
          </div>

          {/* Right: Narrative blocks */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 space-y-16 lg:space-y-24"
          >
            {UNDERGROUND_MINING.narrative.map((item) => (
              <motion.div key={item.number} variants={itemVariants} className="group">
                <div className="flex items-baseline gap-6 mb-6">
                  <span className="font-mono text-sm font-light text-neutral-500 tracking-widest flex-shrink-0 group-hover:text-white transition-colors duration-500">
                    {item.number}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-white/90">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base lg:text-xl text-neutral-400 leading-relaxed font-light max-w-3xl pl-0 lg:pl-[3.25rem]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
