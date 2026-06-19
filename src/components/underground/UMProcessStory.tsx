"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function UMProcessStory() {
  return (
    <section className="bg-neutral-900 text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-neutral-600" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
              {UNDERGROUND_MINING.process.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl tracking-tight text-white leading-[1.1] font-serif font-normal">
            {UNDERGROUND_MINING.process.title}
          </h2>
        </motion.div>

        {/* Stages grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800"
        >
          {UNDERGROUND_MINING.process.stages.map((stage) => (
            <motion.div
              key={stage.step}
              variants={itemVariants}
              className="bg-neutral-900 p-8 lg:p-12 group hover:bg-neutral-800/50 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs font-light text-neutral-500 tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                  STAGE {stage.step}
                </span>
                <div className="h-px flex-1 bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-light tracking-tight text-white leading-tight mb-4">
                {stage.title}
              </h3>
              <p className="text-sm lg:text-base text-neutral-400 leading-relaxed font-light">
                {stage.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process visual using existing public image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative aspect-[21/9] overflow-hidden bg-neutral-950 group"
        >
          <Image
            src="/Mechanised Fleet.webp"
            alt="Mechanised LHD vehicle at the underground production face"
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-950/90 to-transparent">
            <p className="text-[10px] font-mono text-white/60 tracking-[0.2em] uppercase">
              Fig. 01 — Mechanised LHD Vehicle at the Production Face
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
