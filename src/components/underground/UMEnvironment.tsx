"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMEnvironment() {
  const { environment } = UNDERGROUND_MINING;

  return (
    <section className="bg-white text-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative aspect-[4/5] bg-slate-100 overflow-hidden"
          >
            <Image
              src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp"
              alt="Environmental monitoring and landscape rehabilitation"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-1000 ease-out"
            />
          </motion.div>

          {/* Text + Metrics */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-slate-900" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">
                  {environment.eyebrow}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] mb-8 font-serif font-normal">
                {environment.title}
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-light mb-12">
                {environment.body}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200">
              {environment.metrics.map((metric, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={metric.label} 
                  className="bg-slate-50 p-8 lg:p-10 hover:bg-white transition-colors duration-500"
                >
                  <p className="font-serif text-4xl lg:text-5xl font-normal text-slate-900 tabular-nums tracking-tight mb-4">
                    {metric.value}
                  </p>
                  <p className="text-xs font-bold tracking-[0.1em] uppercase text-slate-500">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
