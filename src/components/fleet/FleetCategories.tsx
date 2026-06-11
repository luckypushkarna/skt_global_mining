import Image from "next/image";
import { MECHANISED_FLEET } from "@/data/mechanised-fleet";

export function FleetCategories() {
  const { categories } = MECHANISED_FLEET;

  return (
    <section className="border-b border-slate-200 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Section header */}
        <div className="mb-16 lg:mb-24 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              Equipment Categories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
            Five categories,
            <br />
            <span className="text-slate-400">one integrated fleet.</span>
          </h2>
        </div>

        {/* Category rows - alternating layout */}
        <div className="space-y-20 lg:space-y-28">
          {categories.map((cat, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={cat.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={`${cat.type} - underground mining equipment`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-contain bg-white"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5">
                      <span className="font-mono text-[10px] font-semibold text-slate-600 tracking-[0.2em]">
                        {cat.number} / 05
                      </span>
                    </div>
                    {/* Unit count badge */}
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 px-4 py-2">
                      <span className="font-mono text-xs text-white/90 tracking-widest">
                        {cat.count}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed
                      ? "lg:order-1 lg:pr-4"
                      : "lg:order-2 lg:pl-4"
                  }`}
                >
                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 leading-tight mb-4">
                    {cat.type}
                  </h3>

                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed font-light mb-8">
                    {cat.desc}
                  </p>

                  {/* Models */}
                  <div className="border-t border-slate-200 pt-6">
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
                      Active Models
                    </p>
                    <ul className="space-y-2.5">
                      {cat.models.map((model) => (
                        <li
                          key={model}
                          className="flex items-center gap-3 text-sm text-slate-700"
                        >
                          <span className="w-3 h-px bg-slate-300 flex-shrink-0" />
                          <span className="font-medium">{model}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
