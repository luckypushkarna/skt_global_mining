"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NETWORK_NODES, NETWORK_FLOWS } from "@/data/logistics-network";
import { Map, MapMarker, MarkerContent, MapControls, MapRoute } from "@/components/ui/map";

const NODE_COLORS: Record<string, string> = {
  "open-pit":     "#64748B", // slate-500
  "underground":  "#475569", // slate-600
  "exploration":  "#94A3B8", // slate-400
  "concentrator": "#475569", // slate-600
  "smelter":      "#334155", // slate-700
  "refinery":     "#1E293B", // slate-800
  "rail-hub":     "#64748B", // slate-500
  "power":        "#CBD5E1", // slate-300
  "water":        "#94A3B8", // slate-400
  "port":         "#0F172A", // slate-900
  "settlement":   "#CBD5E1", // slate-300
};

const FLOW_COLORS: Record<string, string> = {
  ore: "#94A3B8",
  concentrate: "#64748B",
  matte: "#475569",
  refined: "#334155",
  export: "#0F172A",
  power: "#CBD5E1",
};

export function NetworkCommandView() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-[#FAFAFA] text-slate-900 overflow-hidden border-b border-slate-200">
      
      {/* Topographical background */}
      <div className="absolute inset-0 opacity-[0.12]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#94A3B8" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="#94A3B8" strokeWidth="0.3" />
              <circle cx="40" cy="40" r="35" fill="none" stroke="#94A3B8" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      {/* Subtle light glow */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-200/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 lg:px-12 pt-24 lg:pt-28 pb-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-600" />
              </span>
              <span className="text-[10px] font-mono font-semibold tracking-[0.3em] uppercase text-slate-500">
                Network Command · Live
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 max-w-2xl mb-4"
            >
              One intelligent network.{" "}
              <span className="text-slate-400">Every asset connected.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed font-normal"
            >
              From extraction to export - every mine, processor, rail line, and port operates as 
              a single coordinated system across Zambia&apos;s Copperbelt.
            </motion.p>
          </div>

          {/* Live stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 mb-5">
                Network Status
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="font-mono text-3xl font-medium text-slate-700 tabular-nums">12</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-450 mt-1 font-semibold text-slate-500">Active Nodes</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-medium text-slate-700 tabular-nums">10</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-450 mt-1 font-semibold text-slate-500">Flow Routes</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-medium text-slate-700 tabular-nums">1,840</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-450 mt-1 font-semibold text-slate-500">km Network</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-medium text-slate-700 tabular-nums">24/7</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-450 mt-1 font-semibold text-slate-500">Operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* THE NETWORK MAP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[600px] w-full bg-slate-900 border border-slate-800 shadow-2xl rounded-xl overflow-hidden"
        >
          <Map
            theme="dark"
            zoom={8.2}
            center={[28.12, -12.82]}
            className="w-full h-full"
            dragRotate={false}
            pitchWithRotate={false}
            attributionControl={false}
            scrollZoom={false}
            touchZoomRotate={false}
          >
            {/* Connections (Routes) */}
            {NETWORK_FLOWS.map((flow, i) => {
              const fromNode = NETWORK_NODES.find((n) => n.id === flow.from);
              const toNode = NETWORK_NODES.find((n) => n.id === flow.to);
              if (!fromNode || !toNode) return null;

              // Convert percentage grid coordinates to copperbelt geographic coordinates
              const lon1 = 27.2 + (fromNode.x / 100) * 1.8;
              const lat1 = -12.2 - (fromNode.y / 100) * 1.2;
              const lon2 = 27.2 + (toNode.x / 100) * 1.8;
              const lat2 = -12.2 - (toNode.y / 100) * 1.2;
              const color = FLOW_COLORS[flow.type] || "#94A3B8";

              return (
                <MapRoute
                  key={`flow-${i}`}
                  coordinates={[[lon1, lat1], [lon2, lat2]]}
                  color={color}
                  width={1.5}
                  opacity={0.35}
                  dashArray={[3, 3]}
                  interactive={false}
                />
              );
            })}

            {/* Nodes */}
            {NETWORK_NODES.map((node) => {
              const color = NODE_COLORS[node.type];
              const isHovered = hoveredNode === node.id;
              const size = node.tier === 1 ? 14 : 10;
              const lon = 27.2 + (node.x / 100) * 1.8;
              const lat = -12.2 - (node.y / 100) * 1.2;

              return (
                <MapMarker
                  key={node.id}
                  longitude={lon}
                  latitude={lat}
                >
                  <MarkerContent>
                    <button
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setHoveredNode(node.id)}
                      className="relative group focus:outline-none"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Pulse ring */}
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{
                          width: size + 8,
                          height: size + 8,
                          backgroundColor: color,
                          opacity: 0.15,
                          left: -4, top: -4,
                        }}
                      />
                      
                      {/* Node dot */}
                      <span
                        className="relative block rounded-full border-2 border-slate-900 transition-all duration-300"
                        style={{
                          width: isHovered ? size + 6 : size,
                          height: isHovered ? size + 6 : size,
                          backgroundColor: color,
                          boxShadow: `0 0 ${isHovered ? 16 : 8}px ${color}`,
                        }}
                      />

                      {/* Label */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
                          isHovered ? "opacity-100" : "opacity-60"
                        }`}
                      >
                        <p className="text-[10px] font-mono font-medium text-white tracking-wide">
                          {node.label}
                        </p>
                        <p className="text-[8px] uppercase tracking-widest text-white/40 text-center">
                          {node.type}
                        </p>
                      </div>
                    </button>
                  </MarkerContent>
                </MapMarker>
              );
            })}

            {/* Map Zoom Controls */}
            <MapControls position="bottom-right" showZoom showCompass={false} />
          </Map>

          {/* Coordinate labels Overlay */}
          <div className="absolute top-4 left-4 z-10 text-[9px] font-mono text-white/35 tracking-widest pointer-events-none">
            LAT 12.5°S · LON 27.8°E
          </div>
          <div className="absolute top-4 right-4 z-10 text-[9px] font-mono text-white/35 tracking-widest pointer-events-none">
            COPPERBELT REGION · ZAMBIA
          </div>
          <div className="absolute bottom-4 left-4 z-10 text-[9px] font-mono text-white/35 tracking-widest pointer-events-none">
            SCALE 1:250,000
          </div>
          <div className="absolute bottom-4 right-16 z-10 text-[9px] font-mono text-emerald-450 tracking-widest font-semibold pointer-events-none">
            ◉ LIVE TELEMETRY
          </div>

          {/* Hover detail card Overlay */}
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-16 right-4 z-20 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-lg p-4 min-w-[220px] pointer-events-none shadow-xl"
            >
              {(() => {
                const node = NETWORK_NODES.find((n) => n.id === hoveredNode);
                if (!node) return null;
                return (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: NODE_COLORS[node.type] }}
                      />
                      <p className="text-[9px] font-mono uppercase tracking-widest text-white/40">
                        Node · {node.id}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-white leading-tight mb-1">
                      {node.label}
                    </p>
                    <p className="text-xs text-white/60 capitalize">
                      {node.type.replace("-", " ")} · Tier {node.tier}
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-450">
                        ◉ {node.status}
                      </p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}
        </motion.div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-mono uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500" /> Open Pit
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-600" /> Underground
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-700" /> Processing
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-800" /> Smelter
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-900" /> Refinery
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" /> Rail
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-900" /> Port
          </div>
        </div>
      </div>
    </section>
  );
}
