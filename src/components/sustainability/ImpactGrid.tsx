"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Heart, Droplet, Leaf, Wind,
  GraduationCap, Briefcase, Users, TreePine,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Heart, Droplet, Leaf, Wind,
  GraduationCap, Briefcase, Users, TreePine,
};

const ACCENT = {
  emerald: { text: "text-emerald-600", line: "bg-emerald-500", iconBg: "bg-emerald-50 border-emerald-200" },
  sky: { text: "text-sky-600", line: "bg-sky-500", iconBg: "bg-sky-50 border-sky-200" },
  amber: { text: "text-amber-600", line: "bg-amber-500", iconBg: "bg-amber-50 border-amber-200" },
};

interface ImpactGridProps {
  pillars: { icon: string; title: string; desc: string }[];
  accent: keyof typeof ACCENT;
}

export function ImpactGrid({ pillars, accent }: ImpactGridProps) {
  const colors = ACCENT[accent];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className={cn("h-px w-8", colors.line)} />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Our Approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            Three areas of
            <br />
            <span className="text-slate-400 font-light">focused investment.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {pillars.map((pillar, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white p-8 lg:p-10 group hover:bg-slate-50/50 transition-colors duration-200 overflow-hidden"
              >
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-slate-400 tracking-widest">
                    0{i + 1}
                  </span>
                  {(() => {
                    const Icon = ICON_MAP[pillar.icon];
                    return Icon ? (
                      <div className={cn("w-10 h-10 rounded-sm border flex items-center justify-center", colors.iconBg)}>
                        <Icon className={cn("w-4 h-4", colors.text)} strokeWidth={1.75} />
                      </div>
                    ) : null;
                  })()}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-slate-600 leading-[1.8] font-light">
                  {pillar.desc}
                </p>

                {/* Hover bottom bar */}
                <div className={cn("absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out", colors.line)} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
