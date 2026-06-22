"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ENGINEERING_SERVICES } from "@/data/engineering-services";

export function ESWorkshops() {
  const { workshops } = ENGINEERING_SERVICES;

  return (
    <section className="bg-bg-soft py-20 lg:py-32 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Sticky Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-sm"
            >
              <Image
                src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp"
                alt="Underground engineering workshop - SKT Global operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-skt-blue" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-skt-blue">
                  Workshop Network
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.08] mb-6 font-serif font-normal">
                {workshops.title}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-light mb-16 max-w-2xl">
                {workshops.body}
              </p>
            </motion.div>

            {/* Workshop list */}
            <div className="border-t border-slate-200">
              {workshops.list.map((ws, i) => (
                <motion.div
                  key={ws.location}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="py-8 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 group hover:bg-slate-50 transition-colors -mx-6 px-6 rounded-lg"
                >
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <span className="font-mono text-[10px] font-semibold text-slate-400 tracking-widest block mb-2">
                      0{i + 1}
                    </span>
                    <p className="text-lg font-serif tracking-tight text-slate-900 group-hover:text-skt-blue transition-colors">
                      {ws.location}
                    </p>
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <p className="text-sm font-semibold tracking-wide text-slate-700 mb-2">
                      {ws.type}
                    </p>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      {ws.focus}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
