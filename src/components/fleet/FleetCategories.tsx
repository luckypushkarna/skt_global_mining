"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MECHANISED_FLEET } from "@/data/mechanised-fleet";

export function FleetCategories() {
  const { categories } = MECHANISED_FLEET;

  return (
    <section className="border-b border-neutral-900 bg-neutral-950 text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-400">
              Equipment Categories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] font-serif font-normal">
            Precision tools for
            <br />
            <span className="text-white/40">the deepest work.</span>
          </h2>
        </motion.div>

        {/* Category rows - alternating layout */}
        <div className="space-y-32 lg:space-y-40">
          {categories.map((cat, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={cat.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden rounded-sm group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-shadow duration-700">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={cat.image}
                        alt={`${cat.type} - underground mining equipment`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal"
                      />
                    </motion.div>
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20 pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="font-mono text-[10px] font-semibold text-white/80 tracking-[0.2em]">
                        {cat.number} / {String(categories.length).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Unit count badge */}
                    <div className="absolute bottom-6 right-6 backdrop-blur-md bg-white/10 border border-white/10 px-5 py-2.5 rounded-full">
                      <span className="font-mono text-xs text-white tracking-widest font-medium">
                        {cat.count}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed
                      ? "lg:order-1 lg:pr-8"
                      : "lg:order-2 lg:pl-8"
                  }`}
                >
                  <h3 className="text-3xl lg:text-4xl font-serif tracking-tight text-white leading-tight mb-6 group-hover:text-amber-500 transition-colors duration-500">
                    {cat.type}
                  </h3>

                  <p className="text-base lg:text-lg text-neutral-400 leading-relaxed font-light mb-10">
                    {cat.desc}
                  </p>

                  {/* Models */}
                  <div className="border-t border-white/10 pt-8">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
                      Active Models
                    </p>
                    <ul className="space-y-4">
                      {cat.models.map((model) => (
                        <li
                          key={model}
                          className="flex items-center gap-4 text-sm text-neutral-300"
                        >
                          <span className="w-4 h-px bg-amber-500/50 flex-shrink-0" />
                          <span className="font-light tracking-wide">{model}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
