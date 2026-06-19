import { OPERATIONAL_COMMAND } from "@/data/operational-command";

export function CommandCapabilities() {
  const { capabilities } = OPERATIONAL_COMMAND;

  return (
    <section className="border-b border-emerald-500/20 bg-slate-900 border border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-500">
              Capabilities
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-emerald-50 leading-[1.08] font-serif font-normal">
            {capabilities.title}
          </h2>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800">
          {capabilities.items.map((cap, index) => {
            const number = (index + 1).toString().padStart(2, "0");
            return (
              <div
                key={cap.title}
                className="bg-slate-900 border border-emerald-500/10 p-8 lg:p-10 hover:bg-slate-950/40 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs font-semibold text-emerald-400/60 tracking-widest">
                    {number}
                  </span>
                  <div className="h-px flex-1 bg-slate-800" />
                </div>

                <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-emerald-50 leading-tight mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm text-emerald-100/70 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

