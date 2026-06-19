"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Shield, Building2 } from "lucide-react";
import { FUTURE_EXPANSION } from "@/data/future-expansion";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "01": Building2,
  "02": Users,
  "03": Leaf,
  "04": Shield,
};

export function FuturePillars() {
  const { pillars } = FUTURE_EXPANSION;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      {/* Header */}
      <div className="mb-16 lg:mb-24 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-slate-300" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
            Four Pillars
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-4 leading-tight font-serif font-normal">
          {pillars.title}
        </h2>
      </div>

      {/* Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.items.map((principle) => {
          const Icon = ICONS[principle.number] ?? Building2;

          return (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <Icon size={20} />
                </span>
                <span className="text-xl font-mono font-bold text-slate-200">
                  {principle.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {principle.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


