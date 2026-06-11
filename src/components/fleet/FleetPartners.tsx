import { MECHANISED_FLEET } from "@/data/mechanised-fleet";

export function FleetPartners() {
  const { partners } = MECHANISED_FLEET;

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-slate-400" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
                OEM Partners
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
              {partners.title}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light">
              {partners.body}
            </p>
          </div>
        </div>

        {/* Partner names - typography-only list */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
            {partners.list.map((partner, i) => {
              const partnersColors: Record<string, string> = {
                "Caterpillar": "text-[#FFB800] hover:text-[#FFC20E] drop-shadow-[0_1px_0_rgba(0,0,0,0.02)]",
                "Sandvik": "text-[#E30613] hover:text-[#FF1F2F]",
                "Epiroc": "text-[#FFB300] hover:text-[#FFD100] drop-shadow-[0_1px_0_rgba(0,0,0,0.02)]",
                "Atlas Copco": "text-[#004B87] hover:text-[#00639C]",
                "Komatsu": "text-[#0054A6] hover:text-[#0072CE]",
                "Volvo CE": "text-[#FDB813] hover:text-[#FFCC00] drop-shadow-[0_1px_0_rgba(0,0,0,0.02)]"
              };
              return (
                <div key={partner} className="flex items-center gap-12">
                  <span className={`text-xl lg:text-3xl font-semibold tracking-tight transition-all duration-300 hover:scale-105 cursor-default ${partnersColors[partner] || "text-slate-400"}`}>
                    {partner}
                  </span>
                  {i < partners.list.length - 1 && (
                    <span className="hidden lg:block w-px h-5 bg-slate-200" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-12 pt-8 border-t border-slate-100 text-[11px] font-mono text-slate-400">
          All OEM partnerships maintained under direct technical support agreements.
          Parts and training resources held in-country.
        </p>
      </div>
    </section>
  );
}
