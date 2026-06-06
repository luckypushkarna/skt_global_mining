"use client";

import { motion } from "framer-motion";
import { STRATEGIC_ASSETS } from "@/data/logistics-network";

const GROUP_COLORS: Record<string, { bg: string; text: string }> = {
  production:  { bg: "bg-slate-500", text: "text-slate-700" },
  support:     { bg: "bg-slate-600", text: "text-slate-700" },
  export:      { bg: "bg-slate-800", text: "text-slate-800" },
  exploration: { bg: "bg-slate-450", text: "text-slate-600" },
};

const ASSET_GROUPS = [
  { key: "production",  label: "Production Sites",   data: STRATEGIC_ASSETS.production },
  { key: "support",     label: "Processing Support",  data: STRATEGIC_ASSETS.support },
  { key: "export",      label: "Export Network",     data: STRATEGIC_ASSETS.export },
  { key: "exploration", label: "Exploration",        data: STRATEGIC_ASSETS.exploration },
];

export function StrategicAssetNetwork() {
  return (
    <section className="relative border-b border-slate-200 bg-white py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
        
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500">
              Strategic Assets
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Four asset layers.
          </h2>
        </div>

        <div className="space-y-12">
          {ASSET_GROUPS.map((group, gi) => {
            const colors = GROUP_COLORS[group.key] || { bg: "bg-slate-400", text: "text-slate-650" };
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: gi * 0.1, duration: 0.6 }}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-2 h-2 rounded-full ${colors.bg}`} />
                  <span className={`text-xs font-mono font-semibold tracking-[0.25em] uppercase ${colors.text}`}>
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-[10px] font-mono text-slate-400 font-medium">
                    {group.data.length} ASSETS
                  </span>
                </div>

                {/* Asset list */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-250 border border-slate-250">
                  {group.data.map((asset: any) => (
                    <div
                      key={asset.name}
                      className="bg-white p-6 hover:bg-slate-50/60 transition-colors group"
                    >
                      <p className="text-base font-semibold text-slate-900 mb-2">
                        {asset.name}
                      </p>
                      <div className="space-y-1">
                        {asset.output && (
                          <p className="font-mono text-xs text-slate-650">
                            → {asset.output}
                          </p>
                        )}
                        {asset.role && (
                          <p className="font-mono text-xs text-slate-655">
                            → {asset.role}
                          </p>
                        )}
                        {asset.years && (
                          <p className="font-mono text-[10px] text-slate-450">
                            {asset.years}
                          </p>
                        )}
                        {asset.stage && (
                          <p className="font-mono text-xs text-slate-650">
                            → {asset.stage}
                          </p>
                        )}
                        {asset.potential && (
                          <p className="font-mono text-[10px] text-amber-700 font-medium">
                            {asset.potential}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
