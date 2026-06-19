import Image from "next/image";
import { MECHANISED_FLEET } from "@/data/mechanised-fleet";

export function FleetMaintenance() {
  const { maintenance } = MECHANISED_FLEET;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Top row: image + intro text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20 items-start">

          {/* Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] bg-slate-100 overflow-hidden">
            <Image
              src="/Engineering & Maintenance.webp"
              alt="Underground fleet maintenance workshop - SKT Global technicians performing planned maintenance"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-7 lg:pt-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-slate-400" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
                Maintenance
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.08] mb-6 font-serif font-normal">
              {maintenance.title}
            </h2>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light">
              {maintenance.body}
            </p>
          </div>
        </div>

        {/* 4 maintenance pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
          {maintenance.points.map((point, i) => (
            <div key={point.title} className="bg-[#F4F7FA] p-8 lg:p-10">
              <span className="font-mono text-xs font-semibold text-slate-400 tracking-[0.2em] mb-6 block">
                PILLAR 0{i + 1}
              </span>
              <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900 leading-tight mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
