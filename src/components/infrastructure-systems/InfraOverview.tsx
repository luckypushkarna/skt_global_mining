import { INFRASTRUCTURE_SYSTEMS } from "@/data/infrastructure-systems";

export function InfraOverview() {
  const { overview } = INFRASTRUCTURE_SYSTEMS;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-16 lg:py-24">

        {/* Body text */}
        <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light max-w-3xl mb-12 lg:mb-16">
          {overview.body}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-slate-200">
          {overview.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 lg:p-8 border-b lg:border-b-0 border-slate-200 ${
                i < overview.stats.length - 1 ? "border-r border-slate-200" : ""
              }`}
            >
              <p className="font-mono text-3xl lg:text-5xl font-medium text-slate-900 tabular-nums tracking-tight mb-4">
                {stat.value}
              </p>
              <div className="h-px w-8 bg-slate-300 mb-3" />
              <p className="text-xs text-slate-500 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

