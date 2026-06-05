"use client";

import { motion } from "framer-motion";

interface ProgressBarStatProps {
  label: string;
  current: number;
  target: number;
  unit: string;
  metricCode: string;
}

export function ProgressBarStat({ label, current, target, unit, metricCode }: ProgressBarStatProps) {
  const percentageOfTarget = Math.min((current / target) * 100, 100);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-none relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
      <div className="absolute top-0 right-0 p-3">
        <span className="font-mono text-[9px] text-emerald-400/60 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 uppercase tracking-wider">
          {metricCode}
        </span>
      </div>

      <div className="mb-4">
        <p className="font-mono text-[10px] text-slate-500 tracking-wider uppercase mb-1">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-light font-mono text-white tracking-tight">{current}{unit}</span>
          <span className="text-xs font-mono text-slate-500">of {target}{unit} Target</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-slate-950 w-full mb-3 overflow-hidden">
        {/* Progress Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentageOfTarget}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute h-full left-0 top-0 bg-emerald-500"
        />
        
        {/* Target Marker */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-emerald-300/80 z-10"
          style={{ left: "100%" }}
        />
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
        <span>Current: {current}{unit}</span>
        <span className="text-emerald-400">Progress: {percentageOfTarget.toFixed(0)}%</span>
      </div>
    </div>
  );
}
