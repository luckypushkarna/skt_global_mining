import { ENGINEERING_SERVICES } from "@/data/engineering-services";

export function ESIntro() {
  const { intro } = ENGINEERING_SERVICES;

  return (
    <section className="border-b border-slate-200 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-16 lg:py-24">

        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              The Foundation
            </span>
          </div>

          <p className="text-base lg:text-lg text-slate-700 leading-relaxed font-light">
            {intro.body}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-slate-200 bg-white">
          {intro.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 lg:p-8 border-b lg:border-b-0 border-slate-200 ${
                i < intro.stats.length - 1 ? "border-r border-slate-200" : ""
              }`}
            >
              <p className="font-mono text-3xl lg:text-4xl font-medium text-slate-900 tabular-nums tracking-tight mb-3">
                {stat.value}
              </p>
              <div className="h-px w-8 bg-slate-300 mb-3" />
              <p className="text-xs text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
