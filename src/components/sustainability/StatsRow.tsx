"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ACCENT = {
  emerald: { text: "text-emerald-600", line: "bg-emerald-500" },
  sky: { text: "text-sky-600", line: "bg-sky-500" },
  amber: { text: "text-amber-600", line: "bg-amber-500" },
};

interface StatsRowProps {
  stats: { value: string; suffix?: string; label: string; sub: string }[];
  accent: keyof typeof ACCENT;
}

export function StatsRow({ stats, accent }: StatsRowProps) {
  const colors = ACCENT[accent];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-slate-200 gap-px">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white p-6 lg:p-8 group overflow-hidden"
            >
              {/* Number */}
              <div className="flex items-baseline gap-0.5 mb-4">
                <span className="font-mono text-3xl lg:text-5xl font-semibold text-slate-900 tabular-nums tracking-tight group-hover:text-slate-700 transition-colors duration-200">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className={cn("font-mono text-2xl lg:text-3xl font-semibold", colors.text)}>
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Accent line */}
              <div className={cn("h-px w-0 mb-4 group-hover:w-10 transition-all duration-500 ease-out", colors.line)} />

              {/* Labels */}
              <p className="text-sm font-bold text-slate-900 mb-1.5">{stat.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{stat.sub}</p>

              {/* Bottom hover bar */}
              <div className={cn("absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out", colors.line)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
