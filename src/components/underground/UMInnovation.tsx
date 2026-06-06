"use client";

import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMInnovation() {
  const { innovation } = UNDERGROUND_MINING;

  return (
    <section className="border-b border-slate-200 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        <div className="mb-12 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              {innovation.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-5">
            {innovation.title}
          </h2>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light">
            {innovation.body}
          </p>
        </div>

        <div>
          {innovation.items.map((item, i) => (
            <div
              key={item.title}
              className="border-t border-slate-200 last:border-b py-8 lg:py-10 group hover:bg-white transition-colors -mx-5 px-5 lg:-mx-12 lg:px-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs font-semibold text-amber-600 tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
