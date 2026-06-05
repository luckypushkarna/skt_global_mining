"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChartDataPoint {
  year: string;
  value: number;
  label: string;
}

interface MetricChart {
  id: string;
  name: string;
  unit: string;
  description: string;
  data: ChartDataPoint[];
}

const COMPARISON_DATA: MetricChart[] = [
  {
    id: "emissions",
    name: "Carbon Emissions",
    unit: "kt CO2e",
    description: "Scope 1 & Scope 2 greenhouse gas emissions. Downward trend targets 50% reduction by 2027.",
    data: [
      { year: "2024", value: 345, label: "345 kt" },
      { year: "2025", value: 218, label: "218 kt" },
      { year: "2026 (YTD)", value: 183, label: "183 kt" },
    ],
  },
  {
    id: "water",
    name: "Water Recycled",
    unit: "Million Litres",
    description: "Total water recycled and reused in our closed-loop process. Aiming for 95% total cycle retention.",
    data: [
      { year: "2024", value: 850, label: "850 ML (72%)" },
      { year: "2025", value: 1240, label: "1,240 ML (86%)" },
      { year: "2026 (YTD)", value: 1480, label: "1,480 ML (90%)" },
    ],
  },
  {
    id: "rehab",
    name: "Land Rehabilitated",
    unit: "Hectares",
    description: "Hectares of mine land fully re-soiled, seeded, and returned to natural ecosystem status.",
    data: [
      { year: "2024", value: 120, label: "120 Hectares" },
      { year: "2025", value: 280, label: "280 Hectares" },
      { year: "2026 (YTD)", value: 410, label: "410 Hectares" },
    ],
  },
];

export function ComparisonChart() {
  const [selectedMetricId, setSelectedMetricId] = useState("emissions");
  const selectedMetric = (COMPARISON_DATA.find((m) => m.id === selectedMetricId) || COMPARISON_DATA[0]) as MetricChart;

  // Find max value for scaling
  const maxValue = Math.max(...selectedMetric.data.map((d) => d.value)) * 1.15;

  return (
    <div className="bg-slate-950 border border-slate-900 p-6 lg:p-8 rounded-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase block mb-1">
            ── Comparative Studies
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">Annual Progress Metrics</h3>
        </div>

        <div className="flex bg-slate-900 border border-slate-800 p-1">
          {COMPARISON_DATA.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setSelectedMetricId(metric.id)}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all ${
                selectedMetricId === metric.id
                  ? "bg-emerald-500 text-slate-950 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {metric.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <p className="text-slate-400 text-xs font-light max-w-xl mb-8 leading-relaxed">
        {selectedMetric.description}
      </p>

      {/* Custom SVG/HTML Bar Chart */}
      <div className="relative h-64 border-b border-l border-slate-800 flex items-end justify-around pb-2 pt-6 pl-4">
        {/* Y Axis Gridlines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pr-2 text-right font-mono text-[9px] text-slate-600">
          <div className="border-t border-slate-900/50 w-full pt-1">
            <span>{Math.round(maxValue)} {selectedMetric.unit}</span>
          </div>
          <div className="border-t border-slate-900/50 w-full pt-1">
            <span>{Math.round(maxValue * 0.66)}</span>
          </div>
          <div className="border-t border-slate-900/50 w-full pt-1">
            <span>{Math.round(maxValue * 0.33)}</span>
          </div>
          <div className="w-full">
            <span>0</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMetric.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-end justify-around relative z-10"
          >
            {selectedMetric.data.map((d, index) => {
              const barHeightPct = (d.value / maxValue) * 100;
              return (
                <div key={d.year} className="flex flex-col items-center group relative w-1/4">
                  {/* Tooltip */}
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 border border-emerald-500/30 text-white font-mono text-[10px] px-2.5 py-1.5 pointer-events-none z-20 whitespace-nowrap shadow-xl">
                    <span className="text-slate-500 mr-1">Value:</span>
                    <span className="text-emerald-400 font-bold">{d.label}</span>
                  </div>

                  {/* SVG Bar */}
                  <div className="w-full bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors flex items-end justify-center h-full relative overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${barHeightPct}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full bg-gradient-to-t from-emerald-950 to-emerald-500/90 relative"
                    >
                      {/* Bar glowing accent line on hover */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-300" />
                    </motion.div>
                  </div>

                  {/* X Axis Label */}
                  <span className="font-mono text-[10px] text-slate-500 mt-3 tracking-widest uppercase">
                    {d.year}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-6 text-[9px] font-mono text-slate-600">
        <span>ISO 14001:2015 Reporting Frame</span>
        <span>Unit: {selectedMetric.unit}</span>
      </div>
    </div>
  );
}
