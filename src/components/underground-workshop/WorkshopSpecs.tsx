import { UNDERGROUND_WORKSHOP } from "@/data/underground-workshop";

export function WorkshopSpecs() {
  const { specs } = UNDERGROUND_WORKSHOP;

  return (
    <section className="border-b border-slate-200 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              Specifications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.08] font-serif font-normal">
            {specs.title}
          </h2>
        </div>

        {/* Specs rows */}
        <div className="bg-white overflow-hidden">
          {specs.items.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-between gap-8 py-5 px-6 lg:px-8 hover:bg-slate-50 transition-colors ${
                i !== specs.items.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <span className="text-sm text-slate-600 leading-relaxed">
                {item.label}
              </span>
              <span className="font-mono text-sm lg:text-base font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-5 text-[11px] text-slate-400 font-mono">
          Data current as of Q1 2026. Specifications subject to operational variation.
        </p>
      </div>
    </section>
  );
}

