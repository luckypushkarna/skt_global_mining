"use client";

import { motion } from "framer-motion";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMReserves() {
  const { reserves } = UNDERGROUND_MINING;

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-slate-900" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">
                {reserves.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] font-serif font-normal">
              {reserves.title}
            </h2>
          </div>
          <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-light max-w-sm italic">
            {reserves.note}
          </p>
        </motion.div>

        {/* Premium Data Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                {["Category", "Tonnage", "Grade", "Contained Metal"].map((h, i) => (
                  <th
                    key={h}
                    className={`py-6 px-6 border-b border-slate-900 text-[10px] font-bold tracking-[0.25em] uppercase text-slate-900 ${i === 0 ? "text-left" : "text-right"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reserves.table.map((row, idx) => (
                <tr
                  key={row.category}
                  className="group border-b border-slate-200 hover:bg-slate-50 transition-colors duration-300"
                >
                  <td className="py-8 px-6 text-base lg:text-lg font-medium text-slate-900">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-slate-400 font-mono">{(idx + 1).toString().padStart(2, '0')}</span>
                      {row.category}
                    </div>
                  </td>
                  <td className="py-8 px-6 text-right text-lg lg:text-xl font-light font-mono tabular-nums text-slate-600">
                    {row.tonnage}
                  </td>
                  <td className="py-8 px-6 text-right text-lg lg:text-xl font-light font-mono tabular-nums text-slate-600">
                    {row.grade}
                  </td>
                  <td className="py-8 px-6 text-right text-lg lg:text-xl font-medium font-mono tabular-nums text-slate-900">
                    {row.contained}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footnotes */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {reserves.footnotes.map((note, i) => (
            <p key={i} className="text-xs text-slate-500 leading-relaxed font-light">
              <span className="font-mono text-slate-300 mr-2">[{i + 1}]</span>
              {note}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
