"use client";

import { motion } from "framer-motion";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMSafety() {
  const { safety } = UNDERGROUND_MINING;

  return (
    <section className="bg-neutral-900 text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-neutral-600" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
              {safety.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl tracking-tight text-white leading-[1.1] mb-6 font-serif font-normal">
            {safety.title}
          </h2>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed font-light">
            {safety.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800">
          {safety.items.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={item.title}
              className="bg-neutral-900 p-8 lg:p-12 hover:bg-neutral-800/50 transition-colors duration-500 group"
            >
              <span className="font-mono text-xs font-light text-neutral-500 tracking-[0.2em] mb-8 block group-hover:text-white transition-colors duration-500">
                0{i + 1}
              </span>
              <h3 className="text-xl lg:text-2xl font-light tracking-tight text-white leading-tight mb-4">
                {item.title}
              </h3>
              <p className="text-sm lg:text-base text-neutral-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
