"use client";

import Image from "next/image";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMEnvironment() {
  const { environment } = UNDERGROUND_MINING;

  return (
    <section className="border-b border-slate-200 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] bg-slate-800 overflow-hidden">
            <Image
              src="/Community Safety Culture.webp"
              alt="Environmental monitoring and landscape rehabilitation"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </div>

          {/* Text + Metrics */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/50">
                {environment.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-[1.1] mb-5 font-serif font-normal">
              {environment.title}
            </h2>
            <p className="text-base lg:text-lg text-white/70 leading-relaxed font-light mb-10">
              {environment.body}
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/10">
              {environment.metrics.map((metric) => (
                <div key={metric.label} className="bg-slate-950 p-6">
                  <p className="font-mono text-3xl lg:text-4xl font-medium text-emerald-400 tabular-nums tracking-tight mb-2">
                    {metric.value}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
