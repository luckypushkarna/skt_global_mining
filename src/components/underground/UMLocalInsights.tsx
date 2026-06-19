"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMLocalInsights() {
  const { localInsights, localBenefits } = UNDERGROUND_MINING;

  return (
    <section className="border-b border-slate-200 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Local Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
                {localInsights.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-[1.1] mb-6 font-serif font-normal">
              {localInsights.title}
            </h2>
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light mb-8">
              {localInsights.body}
            </p>
            <ul className="space-y-3">
              {localInsights.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] bg-slate-200 overflow-hidden">
            <Image
              src="/Workforce Facilities.webp"
              alt="Local Zambian mining workforce"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Local Benefits */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              {localBenefits.eyebrow}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-tight mb-5 max-w-xl">
            {localBenefits.title}
          </h3>
          <p className="text-base text-slate-600 leading-relaxed font-light max-w-2xl mb-12">
            {localBenefits.body}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-slate-200">
            {localBenefits.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 lg:p-8 bg-white border-b lg:border-b-0 border-slate-200 ${
                  i < localBenefits.stats.length - 1 ? "lg:border-r" : ""
                }`}
              >
                <p className="font-mono text-3xl lg:text-4xl font-medium text-slate-900 tabular-nums tracking-tight mb-3">
                  {stat.value}
                </p>
                <div className="h-px w-8 bg-amber-500 mb-3" />
                <p className="text-xs text-slate-600 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
