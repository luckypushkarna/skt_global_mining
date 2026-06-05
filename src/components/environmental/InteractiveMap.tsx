"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Info, ArrowUpRight, ShieldCheck } from "lucide-react";

interface SiteInfo {
  id: string;
  name: string;
  coords: { x: number; y: number };
  status: string;
  reclaimedArea: string;
  waterRecycled: string;
  indigenousTrees: string;
  certification: string;
  details: string;
}

const OPERATIONS_SITES: SiteInfo[] = [
  {
    id: "chambishi",
    name: "Chambishi East Operational Hub",
    coords: { x: 55, y: 45 },
    status: "Active Reclamation Zone",
    reclaimedArea: "410 Hectares",
    waterRecycled: "92.4%",
    indigenousTrees: "185,000 planted",
    certification: "ISO 14001:2015",
    details: "Focusing on deep tailings restoration. Soil enrichment programs here have re-established three local bird species previously displaced by old workings.",
  },
  {
    id: "konkola",
    name: "Konkola Deep Shaft Complex",
    coords: { x: 48, y: 28 },
    status: "Zero-Discharge Site",
    reclaimedArea: "125 Hectares",
    waterRecycled: "98.1%",
    indigenousTrees: "45,000 planted",
    certification: "ISO 45001 / ISO 14001",
    details: "Utilizing advanced underground recycling pumps. Heavy investment in sub-surface aquifer conservation systems protects the Kafue River basin.",
  },
  {
    id: "kansanshi",
    name: "Kansanshi Corridor Works",
    coords: { x: 28, y: 40 },
    status: "Afforestation Reserve",
    reclaimedArea: "320 Hectares",
    waterRecycled: "88.6%",
    indigenousTrees: "290,000 planted",
    certification: "ZEMA Environmental Cert",
    details: "Partnered with Copperbelt University forestry division to plant indigenous miombo woodland. Employs 120 local community rangers.",
  },
];

export function InteractiveMap() {
  const [selectedSiteId, setSelectedSiteId] = useState("chambishi");
  const selectedSite = (OPERATIONS_SITES.find(s => s.id === selectedSiteId) || OPERATIONS_SITES[0]) as SiteInfo;

  return (
    <div className="bg-slate-950 border border-slate-900 p-6 lg:p-8 rounded-none">
      <div className="mb-6">
        <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase block mb-1">
          ── Interactive Mapping
        </span>
        <h3 className="text-2xl font-bold text-white tracking-tight">Zambian Operations & Conservation Zones</h3>
        <p className="text-slate-400 text-xs font-light mt-2 max-w-xl leading-relaxed">
          Select operational pins to review real-time ecological indices, ISO standard compliance status, and target forestry reclamation volumes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Map Display Panel */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-900 aspect-[4/3] relative overflow-hidden flex items-center justify-center p-4 select-none">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          
          {/* Zambian Map Outline (SVG) */}
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full text-slate-800/40 fill-current max-h-[500px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Highly stylized technical rendering of Zambia map border */}
            <path
              d="M 200,100 L 350,80 L 450,150 L 520,130 L 620,200 L 680,180 L 720,240 L 700,340 L 580,360 L 590,440 L 480,480 L 440,540 L 340,520 L 260,460 L 250,380 L 150,340 L 120,240 L 180,180 Z"
              stroke="rgba(16, 185, 129, 0.15)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Inner copperbelt highlight zone */}
            <circle cx="380" cy="230" r="140" className="fill-emerald-500/5 stroke-emerald-500/20 stroke-dasharray-2" />
          </svg>

          {/* Interactive Pins */}
          {OPERATIONS_SITES.map((site) => {
            const isSelected = site.id === selectedSiteId;
            return (
              <button
                key={site.id}
                onClick={() => setSelectedSiteId(site.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group transition-all z-10"
                style={{ left: `${site.coords.x}%`, top: `${site.coords.y}%` }}
              >
                {/* Ping Pulse Animation */}
                <div className={`absolute -inset-2 rounded-full transition-all duration-300 ${
                  isSelected ? "bg-emerald-500/20 scale-150 animate-ping" : "bg-transparent scale-0 group-hover:scale-100 group-hover:bg-slate-500/10"
                }`} />
                
                {/* Main Pin */}
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                  isSelected 
                    ? "bg-emerald-500 border-emerald-300 text-slate-950 scale-110 shadow-emerald-500/20 shadow-lg" 
                    : "bg-slate-950 border-slate-700 text-slate-400 hover:border-emerald-500/50 hover:text-white"
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>

                {/* Micro Label */}
                <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950/90 border border-slate-800/80 px-2 py-0.5 pointer-events-none rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-mono text-[9px] text-white uppercase tracking-wider">{site.name.split(" ")[0]}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info Detail Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 border border-slate-800 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 pointer-events-none">
            <Info className="w-5 h-5 text-slate-700" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSite.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 flex-1"
            >
              <div>
                <span className="font-mono text-[9px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-2 py-0.5 tracking-wider uppercase inline-block mb-3">
                  {selectedSite.status}
                </span>
                <h4 className="text-xl font-bold text-white tracking-tight">{selectedSite.name}</h4>
              </div>

              <div className="space-y-4">
                {/* Stats list */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Reclaimed Area</p>
                    <p className="text-lg font-mono font-bold text-white">{selectedSite.reclaimedArea}</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Water Recycled</p>
                    <p className="text-lg font-mono font-bold text-white">{selectedSite.waterRecycled}</p>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3 col-span-2">
                    <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Forestry Progress</p>
                    <p className="text-sm font-sans font-bold text-white">{selectedSite.indigenousTrees}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {selectedSite.details}
                </p>
              </div>

              {/* Compliance Badging */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">Independent Audit Status</p>
                  <p className="text-xs text-white font-mono">{selectedSite.certification}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>Select map markers for more detail</span>
            <span className="flex items-center gap-1 text-emerald-400 hover:underline cursor-pointer">
              Full ZEMA Profile <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
