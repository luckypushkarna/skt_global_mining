"use client";

import { Download } from "lucide-react";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMReports() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              Reports
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1] font-serif font-normal">
            Operational transparency.
          </h2>
        </div>

        <div>
          {UNDERGROUND_MINING.reports.map((report) => (
            <a
              key={report.title}
              href="#"
              aria-label={`Download ${report.title} - ${report.size} PDF`}
              className="group flex items-center justify-between gap-6 py-6 border-t border-slate-200 last:border-b hover:bg-slate-50/40 transition-colors -mx-5 px-5 lg:-mx-12 lg:px-12"
            >
              <div className="flex-1 min-w-0">
                <p className="text-base lg:text-lg font-semibold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                  {report.title}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  {report.date} · PDF · {report.size}
                </p>
              </div>

              <div className="w-10 h-10 flex-shrink-0 rounded-full border border-slate-200 group-hover:border-amber-500 group-hover:bg-amber-500 flex items-center justify-center transition-all duration-300">
                <Download
                  className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.75}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
