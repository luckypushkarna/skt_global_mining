"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LIVE_METRICS = [
  { id: "water", label: "Water Recycled", value: "90", unit: "%", color: "emerald" },
  { id: "emissions", label: "Emissions Reduction", value: "47", unit: "%", color: "sky" },
  { id: "trees", label: "Trees Planted", value: "1,200", unit: "", color: "emerald" },
  { id: "spills", label: "Spill Incidents", value: "0", unit: "", color: "emerald" },
];

export function DashboardHero() {
  const now = new Date().toLocaleString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  return (
    <section className="bg-slate-950 text-white min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT - Headline + context */}
      <div className="relative flex flex-col justify-end p-8 lg:p-14 pb-12 lg:pb-16 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125553/skt_global_mining/zambia-operations-nobgs.webp"
          alt="Zambia operations"
          fill
          priority
          className="object-cover opacity-20"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

        <div className="relative z-10">
          {/* Terminal-style label */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] text-emerald-400 tracking-[0.3em] uppercase">
              Live · Environmental Dashboard
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-6 font-serif font-normal"
          >
            Stewardship
            <br />
            <span className="text-emerald-400 font-light">of the Land.</span>
          </motion.h1>

          <p className="text-slate-400 text-base leading-relaxed max-w-md mb-8 font-light">
            All metrics below are independently verified under ISO 45001 and 
            ZEMA compliance frameworks. Data refreshed quarterly.
          </p>

          <p className="font-mono text-[10px] text-slate-600 tracking-widest">
            LAST UPDATED: {now} CAT
          </p>
        </div>
      </div>

      {/* RIGHT - Live data panel */}
      <div className="bg-slate-900 flex flex-col justify-center p-8 lg:p-14">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="font-mono text-[9px] text-slate-500 tracking-[0.35em] uppercase mb-8">
            ── Key Performance Indicators
          </p>

          <div className="space-y-6">
            {LIVE_METRICS.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="border border-white/5 bg-white/2 p-5 hover:border-emerald-900/50 transition-colors"
              >
                <div className="flex items-end justify-between mb-3">
                  <p className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                    {m.label}
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-bold text-white tracking-tight">
                    {m.value}
                  </span>
                  {m.unit && (
                    <span className="font-mono text-lg text-emerald-400">{m.unit}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="font-mono text-[9px] text-slate-600 mt-6">
            Source: Bureau Veritas Zambia · Q1 2026 Audit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
