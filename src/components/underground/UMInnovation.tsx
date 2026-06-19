"use client";

import { motion } from "framer-motion";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMInnovation() {
  const { innovation } = UNDERGROUND_MINING;

  return (
    <section className="bg-neutral-950 text-white py-24 lg:py-32">
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
              {innovation.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl tracking-tight text-white leading-[1.1] mb-6 font-serif font-normal">
            {innovation.title}
          </h2>
          <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed font-light">
            {innovation.body}
          </p>
        </motion.div>

        <div className="border-t border-neutral-800">
          {innovation.items.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={item.title}
              className="border-b border-neutral-800 py-10 lg:py-16 group hover:bg-neutral-900/50 transition-colors duration-500 -mx-6 px-6 lg:-mx-12 lg:px-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs font-light text-neutral-500 tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight mb-4 lg:mb-0">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base lg:text-xl text-neutral-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
