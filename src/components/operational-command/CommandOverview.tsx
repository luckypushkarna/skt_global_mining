import { OPERATIONAL_COMMAND } from "@/data/operational-command";

export function CommandOverview() {
  const { overview } = OPERATIONAL_COMMAND;

  return (
    <section className="border-b border-emerald-500/20 bg-slate-900 border border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-16 lg:py-24">

        {/* Body text */}
        <p className="text-lg lg:text-xl text-emerald-100/70 leading-relaxed font-light mb-12">
          {overview.desc}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-emerald-500/20">
          {overview.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 lg:p-8 border-b lg:border-b-0 border-emerald-500/20 ${
                i < overview.stats.length - 1 ? "border-r border-emerald-500/20" : ""
              }`}
            >
              <p className="font-mono text-3xl lg:text-5xl font-medium text-emerald-50 tabular-nums tracking-tight mb-4">
                {stat.value}
              </p>
              <div className="h-px w-8 bg-slate-300 mb-3" />
              <p className="text-xs text-emerald-500 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


