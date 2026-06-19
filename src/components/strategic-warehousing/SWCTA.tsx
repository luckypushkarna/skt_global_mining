import { ArrowRight } from "lucide-react";
import { STRATEGIC_WAREHOUSING } from "@/data/strategic-warehousing";

export function SWCTA() {
  const { cta } = STRATEGIC_WAREHOUSING;

  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-8 border-y border-white/10">

          <div className="flex-1">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-3">
              Get in Touch
            </p>
            <h2 className="text-2xl lg:text-3xl tracking-tight text-white mb-3 font-serif font-normal">
              {cta.title}
            </h2>
            <p className="text-sm lg:text-base text-white/55 leading-relaxed max-w-lg font-light">
              {cta.body}
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors group whitespace-nowrap flex-shrink-0"
          >
            {cta.button}
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

