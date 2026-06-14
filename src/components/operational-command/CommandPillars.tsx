"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Shield, Building2 } from "lucide-react";
import { OPERATIONAL_COMMAND } from "@/data/operational-command";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "01": Building2,
  "02": Users,
  "03": Leaf,
  "04": Shield,
};

export function CommandPillars() {
  const { pillars } = OPERATIONAL_COMMAND;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      {/* Header */}
      <div className="mb-16 lg:mb-24 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-slate-300" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-400/60">
            Four Pillars
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-50 mb-4 leading-tight">
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
              className="bg-slate-900 border border-emerald-500/10 border border-emerald-500/20 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="w-10 h-10 rounded-full bg-emerald-950/30 flex items-center justify-center text-emerald-400">
                  <Icon size={20} />
                </span>
                <span className="text-xl font-mono font-bold text-emerald-900/50">
                  {principle.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-emerald-50 mb-4 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                {principle.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


