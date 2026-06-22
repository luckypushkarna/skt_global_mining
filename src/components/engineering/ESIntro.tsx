"use client";

import { motion } from "framer-motion";
import { ENGINEERING_SERVICES } from "@/data/engineering-services";
import { LiveCounter } from "@/components/ui/live-counter";

export function ESIntro() {
  const { intro } = ENGINEERING_SERVICES;

  return (
    <section className="bg-bg-tint py-20 lg:py-32 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              The Foundation
            </span>
          </div>

          <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-light">
            {intro.body}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {intro.stats.map((stat, i) => {
            const hasNumber = /\d+/.test(stat.value);
            const valueNum = hasNumber ? parseInt(stat.value.replace(/\D/g, "")) : 0;
            const suffix = stat.value.replace(/\d/g, "");

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 lg:p-10 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="font-mono text-4xl lg:text-5xl font-medium text-slate-900 tabular-nums tracking-tight mb-4">
                    {hasNumber ? (
                      <LiveCounter from={0} to={valueNum} suffix={suffix} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="h-px w-12 bg-slate-200 mb-4" />
                </div>
                <p className="text-sm font-medium tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
