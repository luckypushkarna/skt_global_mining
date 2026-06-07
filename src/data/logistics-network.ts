export const NETWORK_NODES = [
  // ── MINES ──
  { id: "mine-1", type: "open-pit", label: "Chingola Pit", x: 22, y: 35, status: "active", tier: 1 },
  { id: "mine-2", type: "underground", label: "Mufulira UG", x: 38, y: 28, status: "active", tier: 1 },
  { id: "mine-3", type: "underground", label: "Kitwe Shaft", x: 52, y: 42, status: "active", tier: 1 },
  { id: "mine-4", type: "exploration", label: "Solwezi Prospect", x: 14, y: 58, status: "exploring", tier: 2 },

  // ── PROCESSING ──
  { id: "proc-1", type: "concentrator", label: "Nkana Concentrator", x: 45, y: 55, status: "active", tier: 1 },
  { id: "proc-2", type: "smelter", label: "Mufulira Smelter", x: 60, y: 32, status: "active", tier: 1 },
  { id: "proc-3", type: "refinery", label: "Copperbelt Refinery", x: 68, y: 50, status: "active", tier: 1 },

  // ── INFRASTRUCTURE ──
  { id: "rail-1", type: "rail-hub", label: "Ndola Rail Hub", x: 75, y: 38, status: "active", tier: 1 },
  { id: "power-1", type: "power", label: "Kafue Hydropower", x: 30, y: 75, status: "active", tier: 1 },
  { id: "water-1", type: "water", label: "Water Management", x: 40, y: 68, status: "active", tier: 2 },

  // ── EXPORT ──
  { id: "port-1", type: "port", label: "Walvis Bay Terminal", x: 88, y: 65, status: "active", tier: 1 },

  // ── SETTLEMENTS ──
  { id: "settle-1", type: "settlement", label: "Workforce Hub", x: 55, y: 72, status: "active", tier: 2 },
];

// Connections between nodes (ore flow + infrastructure)
export const NETWORK_FLOWS = [
  { from: "mine-1", to: "proc-1", type: "ore", intensity: "high" },
  { from: "mine-2", to: "proc-2", type: "ore", intensity: "high" },
  { from: "mine-3", to: "proc-1", type: "ore", intensity: "medium" },
  { from: "proc-1", to: "proc-3", type: "concentrate", intensity: "high" },
  { from: "proc-2", to: "proc-3", type: "matte", intensity: "high" },
  { from: "proc-3", to: "rail-1", type: "refined", intensity: "high" },
  { from: "rail-1", to: "port-1", type: "export", intensity: "high" },
  { from: "power-1", to: "mine-1", type: "power", intensity: "low" },
  { from: "power-1", to: "proc-1", type: "power", intensity: "low" },
  { from: "power-1", to: "proc-2", type: "power", intensity: "low" },
];

export const RESOURCE_STAGES = [
  { stage: "01", name: "Extraction", output: "1.2 Mt/yr", desc: "Open-pit and underground extraction at 4 active sites" },
  { stage: "02", name: "Concentration", output: "320 kt/yr", desc: "Flotation circuits produce 28% Cu concentrate" },
  { stage: "03", name: "Smelting", output: "180 kt/yr", desc: "Flash furnace produces 98.5% Cu matte" },
  { stage: "04", name: "Refining", output: "165 kt/yr", desc: "Electrolytic refining to 99.99% Cu cathode" },
  { stage: "05", name: "Export", output: "162 kt/yr", desc: "Rail to Walvis Bay for global markets" },
];

export const ECOSYSTEM_LAYERS = [
  { layer: "Mining Complexes", count: "4 active", desc: "Open-pit, underground, exploration" },
  { layer: "Processing Infrastructure", count: "3 facilities", desc: "Concentrator, smelter, refinery" },
  { layer: "Energy Supply", count: "247 MW", desc: "Hydropower + grid + backup diesel" },
  { layer: "Water Infrastructure", count: "90% recycled", desc: "Closed-loop processing circuits" },
  { layer: "Maintenance Hubs", count: "4 workshops", desc: "In-shaft + surface workshops" },
  { layer: "Logistics Corridors", count: "1,840 km", desc: "Rail + road + conveyor network" },
];

export const STRATEGIC_ASSETS = {
  production: [
    { name: "Chingola Open Pit", output: "480 kt/yr Cu", years: "Est. 2024" },
    { name: "Mufulira Underground", output: "320 kt/yr Cu", years: "Est. 2024" },
    { name: "Kitwe Shaft Complex", output: "240 kt/yr Cu", years: "Est. 2025" },
  ],
  support: [
    { name: "Nkana Concentrator", role: "Primary processing" },
    { name: "Mufulira Smelter", role: "Pyrometallurgy" },
    { name: "Copperbelt Refinery", role: "Electro-refining" },
  ],
  export: [
    { name: "Ndola Rail Hub", role: "1,840 km TAZARA line" },
    { name: "Walvis Bay Terminal", role: "Atlantic export gateway" },
  ],
  exploration: [
    { name: "Solwezi Prospect", stage: "Phase 2 drilling", potential: "Cu-Co" },
    { name: "Kalumbila Extension", stage: "Geological survey", potential: "Cu" },
  ],
};

export const INFRASTRUCTURE_INTEL = [
  { type: "Rail Network", span: "1,840 km", desc: "TAZARA + branch lines to processing facilities" },
  { type: "Haul Road Network", span: "320 km", desc: "Heavy-vehicle dedicated roads, 24/7 maintained" },
  { type: "Conveyor Systems", span: "42 km", desc: "Underground + surface ore transport belts" },
  { type: "Power Distribution", span: "660 kV", desc: "High-voltage transmission across all sites" },
  { type: "Communications", span: "Fiber + 5G", desc: "Underground + surface real-time telemetry" },
];

export const SUSTAINABILITY_NODES = [
  { name: "Land Rehabilitation", metric: "340 ha", note: "Native vegetation restored" },
  { name: "Water Recycling Plant", metric: "90%", note: "Process water reuse" },
  { name: "Solar Generation", metric: "12 MW", note: "Surface facility power" },
  { name: "Biodiversity Monitoring", metric: "23 species", note: "Returned to rehab zones" },
  { name: "Environmental Corridor", metric: "8 km", note: "Protected wildlife passages" },
];

export const FUTURE_GROWTH = [
  { phase: "2026 Q4", project: "Konkola Deep Extension", investment: "$120M", impact: "+180 kt/yr Cu" },
  { phase: "2027 Q2", project: "Solwezi Mine Development", investment: "$340M", impact: "New asset, 250 kt/yr" },
  { phase: "2027 Q4", project: "Renewable Energy Phase 2", investment: "$85M", impact: "+45 MW solar" },
  { phase: "2028 Q1", project: "Smelter Capacity Upgrade", investment: "$95M", impact: "+40% throughput" },
];
