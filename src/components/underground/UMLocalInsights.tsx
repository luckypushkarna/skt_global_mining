"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMLocalInsights() {
  const { localInsights, localBenefits } = UNDERGROUND_MINING;

  return (
    <section className="bg-neutral-950 text-white relative z-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Side: Content */}
        <div className="px-6 md:px-12 py-24 lg:py-32 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto lg:mx-0 lg:ml-auto w-full"
          >
            {/* Local Context */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-neutral-600" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                  {localInsights.eyebrow}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl tracking-tight text-white leading-[1.1] mb-8 font-serif font-normal">
                {localInsights.title}
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed font-light mb-10">
                {localInsights.body}
              </p>
              <ul className="space-y-4">
                {localInsights.points.map((point) => (
                  <li key={point} className="flex items-start gap-4 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="font-light leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-neutral-600" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                  {localBenefits.eyebrow}
                </span>
              </div>
              <h3 className="text-3xl font-light tracking-tight text-white leading-tight mb-6">
                {localBenefits.title}
              </h3>
              <p className="text-base text-neutral-400 leading-relaxed font-light mb-12">
                {localBenefits.body}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image & Stats Matrix */}
        <div className="relative min-h-[60vh] lg:min-h-full bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800 flex flex-col justify-end">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp"
              alt="Local Zambian mining workforce"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-50 mix-blend-luminosity grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-2 border-t border-neutral-800/50 bg-neutral-950/80 backdrop-blur-md">
            {localBenefits.stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={stat.label}
                className={`p-8 lg:p-12 border-b border-neutral-800/50 ${
                  i % 2 === 0 ? "border-r" : ""
                }`}
              >
                <p className="font-serif text-4xl lg:text-5xl text-white tracking-tight mb-4">
                  {stat.value}
                </p>
                <div className="h-px w-12 bg-white/20 mb-4" />
                <p className="text-xs font-bold tracking-[0.1em] uppercase text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
