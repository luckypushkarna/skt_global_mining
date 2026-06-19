"use client";

import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMReserves() {
  const { reserves } = UNDERGROUND_MINING;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              {reserves.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] mb-5 font-serif font-normal">
            {reserves.title}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed italic">
            {reserves.note}
          </p>
        </div>

        {/* Data table */}
        <div className="overflow-x-auto -mx-5 lg:mx-0">
          <table className="w-full min-w-[640px] border-t border-slate-200">
            <thead>
              <tr className="border-b border-slate-200">
                {["Category", "Tonnage", "Grade", "Contained Metal"].map((h, i) => (
                  <th
                    key={h}
                    className={`py-4 px-4 lg:px-6 text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-500 ${i === 0 ? "text-left" : "text-right"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reserves.table.map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-5 px-4 lg:px-6 text-sm font-medium text-slate-900">
                    {row.category}
                  </td>
                  <td className="py-5 px-4 lg:px-6 text-right text-sm font-mono tabular-nums text-slate-700">
                    {row.tonnage}
                  </td>
                  <td className="py-5 px-4 lg:px-6 text-right text-sm font-mono tabular-nums text-slate-700">
                    {row.grade}
                  </td>
                  <td className="py-5 px-4 lg:px-6 text-right text-sm font-mono tabular-nums text-amber-700 font-semibold">
                    {row.contained}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnotes */}
        <div className="mt-8 pt-6 border-t border-slate-100 space-y-2">
          {reserves.footnotes.map((note, i) => (
            <p key={i} className="text-[11px] text-slate-500 leading-relaxed">
              <span className="font-mono text-amber-600 mr-2">[{i + 1}]</span>
              {note}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
