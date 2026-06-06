"use client";

import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMSafety() {
  const { safety } = UNDERGROUND_MINING;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        <div className="mb-12 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              {safety.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-5">
            {safety.title}
          </h2>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light">
            {safety.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
          {safety.items.map((item, i) => (
            <div
              key={item.title}
              className="bg-white p-8 lg:p-10 hover:bg-slate-50/40 transition-colors group"
            >
              <span className="font-mono text-xs font-semibold text-emerald-600 tracking-widest mb-6 block">
                0{i + 1}
              </span>
              <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900 leading-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
