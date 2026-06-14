import { INFRASTRUCTURE_SYSTEMS } from "@/data/infrastructure-systems";

export function InfraCapabilities() {
  const { capabilities } = INFRASTRUCTURE_SYSTEMS;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              Capabilities
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
            Six core
            <br />
            <span className="text-slate-400">engineering disciplines.</span>
          </h2>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="bg-white p-8 lg:p-10 hover:bg-slate-50/40 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs font-semibold text-slate-400 tracking-widest">
                  {cap.number}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900 leading-tight mb-3">
                {cap.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

