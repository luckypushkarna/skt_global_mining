import { SAFETY_COMPLIANCE } from "@/data/safety-compliance";

export function SafetySpecs() {
  const { specs } = SAFETY_COMPLIANCE;

  return (
    <section className="border-b border-emerald-500/20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header */}
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-500">
              Specifications
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-emerald-50 leading-[1.08] mb-4">
            {specs.title}
          </h2>
          <p className="text-emerald-100/70">
            {specs.desc}
          </p>
        </div>

        {/* Specs rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {specs.categories.map((category) => (
            <div key={category.title} className="bg-slate-900 border border-emerald-500/10 overflow-hidden shadow-sm">
              <div className="bg-slate-900 text-white px-6 py-4">
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              {category.items.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between gap-8 py-5 px-6 lg:px-8 hover:bg-slate-950 transition-colors ${
                    i !== category.items.length - 1 ? "border-b border-emerald-500/10" : ""
                  }`}
                >
                  <span className="text-sm text-emerald-100/70 leading-relaxed">
                    {item.label}
                  </span>
                  <span className="font-mono text-sm lg:text-base font-semibold text-emerald-50 tabular-nums whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-[11px] text-emerald-400/60 font-mono">
          Data current as of Q1 2026. Specifications subject to operational variation.
        </p>
      </div>
    </section>
  );
}


