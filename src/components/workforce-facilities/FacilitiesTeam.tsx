import { WORKFORCE_FACILITIES } from "@/data/workforce-facilities";

export function FacilitiesTeam() {
  const { team } = WORKFORCE_FACILITIES;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

      <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-slate-400" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
                Team
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-[1.08] mb-5 font-serif font-normal">
              {team.title}
            </h2>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light mb-10">
              {team.body}
            </p>

            {/* Team breakdown table */}
            <div className="border-t border-slate-200">
              {team.breakdown.map((item) => (
                <div
                  key={item.role}
                  className="py-5 flex items-center justify-between border-b border-slate-200 group hover:bg-slate-50 -mx-2 px-2 transition-colors"
                >
                  <span className="text-sm text-slate-700">{item.role}</span>
                  <span className="font-mono text-xl font-semibold text-slate-900 tabular-nums">
                    {item.count}
                  </span>
                </div>
              ))}

              {/* Total */}
              <div className="py-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">
                  Total Engineers
                </span>
                <span className="font-mono text-xl font-semibold text-slate-900 tabular-nums">
                  118
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

