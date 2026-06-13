"use client";

import * as React from "react";
import { JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  MapControls,
} from "@/components/ui/map";
import "maplibre-gl/dist/maplibre-gl.css";

// ─── Location Data ────────────────────────────────────────────────────────────

const LOCATIONS = [
  {
    id: 1,
    name: "Chingola",
    role: "Mining Operations Hub",
    description: "Primary operational headquarters supporting Mopani Copper Mines. Coordinates the deployment of 225+ mechanised underground machines and core engineering services.",
    lng: 27.8635,
    lat: -12.5295,
    type: "primary" as const,
  },
  {
    id: 2,
    name: "Kitwe",
    role: "Logistics & Support",
    description: "Strategic supply chain and workforce centre. Manages the deployment of 1,500+ personnel and a US$3M+ active spare parts inventory.",
    lng: 28.2132,
    lat: -12.8024,
    type: "major" as const,
  },
  {
    id: 3,
    name: "Mufulira",
    role: "Active Mining Site",
    description: "Mechanised deep-shaft mining operations focused on high-volume mineral extraction, continuous ore processing, and achieving aggressive production targets.",
    lng: 28.2392,
    lat: -12.5497,
    type: "major" as const,
  },
  {
    id: 4,
    name: "Solwezi",
    role: "Active Mining Site",
    description: "Key regional extraction site operating 24/7. Supported by dedicated on-site engineering teams and modern underground infrastructure.",
    lng: 26.3858,
    lat: -12.1433,
    type: "major" as const,
  },
  {
    id: 5,
    name: "Konkola Mine Main Site",
    role: "Active Mining Site",
    description: "Deep-level copper extraction operations. Utilises advanced mechanised fleets to ensure continuous, safe, and scalable production output.",
    lng: 27.8296,
    lat: -12.3789,
    type: "major" as const,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function ZambiaOperationsMap({ clean = false }: { clean?: boolean }): JSX.Element {
  const [activeLocationId, setActiveLocationId] = useState<number | null>(null);
  const [viewport, setViewport] = useState<{
    center: [number, number];
    zoom: number;
  }>(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    return {
      center: [27.31, -12.48],
      zoom: isMobile ? 6.3 : 7.8,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setViewport((prev) => ({
        ...prev,
        zoom: isMobile ? 6.3 : 7.8,
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <section
      id="operations-map"
      className={
        clean
          ? "bg-[#0B0F19] w-full h-screen relative overflow-hidden p-0 m-0"
          : "bg-[#0B0F19] py-16 md:py-24 lg:py-32 relative overflow-hidden"
      }
      aria-labelledby="operations-map-heading"
    >
      {/* ── Header ── */}
      {!clean && (
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E63027] animate-pulse" />
              Operational Footprint
            </p>

            <h2
              id="operations-map-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-5"
            >
              Where We
              <br />
              <span className="text-white/20">Operate</span>
            </h2>

            <p className="text-white/60 font-light max-w-xl text-[15px] md:text-base leading-relaxed mb-8">
              Five active operational sites across Zambia&apos;s Copperbelt and North-Western
              regions - supporting the Mopani Copper Mines ecosystem with
              mechanised underground mining services.
            </p>

            {/* Inline stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="text-lg font-semibold text-white">5</span>
                Active Sites
              </span>
              <span className="text-white/20">·</span>
              <span>Copperbelt & North-Western Provinces</span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg font-semibold text-white">
                  1,500+
                </span>
                Workforce
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── Map Container ── */}
      <motion.div
        initial={clean ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        whileInView={clean ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={clean ? { duration: 0 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={clean ? "w-full h-full p-0 m-0" : "max-w-7xl mx-auto px-6 md:px-10 lg:px-16"}
      >
        <div
          className={
            clean
              ? "relative w-full h-full rounded-none overflow-hidden border-none shadow-none bg-[#0B0F19]"
              : "relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0F19]"
          }
        >
          <Map
            viewport={viewport}
            onViewportChange={(v) => setViewport(v)}
            theme="dark"
            pixelRatio={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 2}
            styles={{
              dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
            }}
            scrollZoom={false}
            dragRotate={false}
            pitchWithRotate={false}
            cooperativeGestures={true}
          >
            {/* Zoom controls */}
            <MapControls
              position="bottom-right"
              showZoom
              showCompass={false}
              showLocate={false}
              showFullscreen={false}
            />

            {LOCATIONS.map((location) => {
              const isChingola = location.name === "Chingola";
              const markerColor = isChingola ? "#FFA000" : "#E63027";
              const pulseBg = isChingola ? "bg-[#FFA000]/30" : "bg-[#E63027]/30";
              const glowBg = isChingola ? "bg-[#FFA000]/20" : "bg-[#E63027]/20";
              const shadowClass = isChingola ? "shadow-[#FFA000]/30" : "shadow-[#E63027]/30";

              return (
                <MapMarker
                  key={location.id}
                  longitude={location.lng}
                  latitude={location.lat}
                  onClick={() => {
                    setActiveLocationId(location.id);
                    setViewport({
                      center: [location.lng, location.lat],
                      zoom: 16,
                    });
                  }}
                >
                  {/* Custom marker visual */}
                  <MarkerContent>
                    <div
                      id={`map-marker-${location.id}`}
                      className="relative group cursor-pointer flex items-center justify-center animate-fade-in"
                    >
                      {/* Pulsing ring - primary location only */}
                      {location.type === "primary" && (
                        <span className={`absolute w-8 h-8 rounded-full ${pulseBg} animate-ping`} />
                      )}
                      {/* Outer glow ring */}
                      <span
                        className={`absolute rounded-full ${glowBg} transition-transform duration-300 group-hover:scale-150 ${location.type === "primary"
                          ? "w-10 h-10"
                          : "w-7 h-7"
                          }`}
                      />
                      {/* Dot */}
                      <div
                        style={{ backgroundColor: markerColor }}
                        className={`relative rounded-full border-2 border-white/90 shadow-lg ${shadowClass} transition-transform duration-300 group-hover:scale-125 ${location.type === "primary"
                          ? "w-5 h-5"
                          : "w-3.5 h-3.5"
                          }`}
                      />
                    </div>
                  </MarkerContent>

                  {/* Tooltip on hover */}
                  <MarkerTooltip className="!bg-white/95 !backdrop-blur-md !text-neutral-900 !rounded-xl !shadow-[0_8px_30px_rgb(0,0,0,0.12)] !border !border-neutral-200/60 !p-0 !max-w-[260px] animate-fade-in z-50">
                    <div className="p-3.5 space-y-2.5">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[14px] font-semibold text-neutral-900 leading-tight">
                            {location.name}
                          </p>
                          <p className="text-[10px] font-medium text-neutral-500 mt-0.5">
                            {location.role}
                          </p>
                        </div>
                        {location.type === "primary" && (
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">
                            HQ
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-[12px] text-neutral-600 leading-relaxed font-light">
                        {location.description}
                      </p>

                      {/* Coordinates */}
                      <div className="pt-2.5 border-t border-neutral-100">
                        <p className="text-[10px] text-neutral-400 font-mono tracking-tight">
                          {Math.abs(location.lat).toFixed(4)}°S,{" "}
                          {location.lng.toFixed(4)}°E
                        </p>
                      </div>
                    </div>
                  </MarkerTooltip>

                  {/* Popup on click */}
                  <MarkerPopup
                    closeButton
                    className="!bg-white/95 !backdrop-blur-md !text-neutral-900 !rounded-xl !shadow-[0_8px_30px_rgb(0,0,0,0.12)] !border !border-neutral-200/60 !p-0 !max-w-[260px]"
                  >
                    <div className="p-3.5 space-y-2.5">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[14px] font-semibold text-neutral-900 leading-tight">
                            {location.name}
                          </p>
                          <p className="text-[10px] font-medium text-neutral-500 mt-0.5">
                            {location.role}
                          </p>
                        </div>
                        {location.type === "primary" && (
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">
                            HQ
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-[12px] text-neutral-600 leading-relaxed font-light">
                        {location.description}
                      </p>

                      {/* Coordinates */}
                      <div className="pt-2.5 border-t border-neutral-100">
                        <p className="text-[10px] text-neutral-400 font-mono tracking-tight">
                          {Math.abs(location.lat).toFixed(4)}°S,{" "}
                          {location.lng.toFixed(4)}°E
                        </p>
                      </div>
                    </div>
                  </MarkerPopup>
                </MapMarker>
              );
            })}
          </Map>

          {/* ── Interactive Locations Control Panel (bottom-left) ── */}
          <div className="absolute left-2 sm:left-4 bottom-2 sm:bottom-6 bg-[#0B0F19]/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10 shadow-2xl z-10 w-52 sm:w-60 pointer-events-auto">
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2 sm:mb-3">
              Operational Sites
            </p>
            <div className="space-y-1 sm:space-y-1.5 pr-1">
              {LOCATIONS.map((loc) => {
                const isChingola = loc.name === "Chingola";
                const isSelected = activeLocationId === loc.id;
                const markerColorClass = isChingola ? "bg-[#FFA000]" : "bg-[#E63027]";

                return (
                  <button
                    key={loc.id}
                    onClick={() => {
                      setActiveLocationId(loc.id);
                      setViewport({
                        center: [loc.lng, loc.lat],
                        zoom: 16,
                      });
                      setTimeout(() => {
                        const el = document.getElementById(`map-marker-${loc.id}`);
                        if (el) el.click();
                      }, 100);
                    }}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition-all ${isSelected
                      ? "bg-white/15 border border-white/20 shadow-md"
                      : "hover:bg-white/5 border border-transparent"
                      }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${markerColorClass} shrink-0`} />
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-semibold text-white truncate">
                        {loc.name}
                      </p>
                      <p className="text-[9px] text-white/40 truncate">
                        {loc.role}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reset View / Legend footer */}
            <div className="mt-3 pt-2.5 border-t border-white/5 flex flex-col gap-2">
              {activeLocationId ? (
                <button
                  onClick={() => {
                    setActiveLocationId(null);
                    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
                    setViewport({
                      center: [27.31, -12.48],
                      zoom: isMobile ? 6.3 : 7.8,
                    });
                  }}
                  className="w-full text-center py-1.5 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-[9px] font-bold tracking-wider text-white uppercase rounded-md transition-all duration-200"
                >
                  Reset Map View
                </button>
              ) : (
                <div className="flex items-center justify-between text-[8px] text-white/40 font-semibold tracking-wider uppercase">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA000]" />
                    Primary Hub
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E63027]" />
                    Active Site
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ── Region label (top-right) ── */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#0B0F19]/90 backdrop-blur-md rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 border border-white/10 shadow-lg pointer-events-none z-10">
            <p className="text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40">
              Region
            </p>
            <p className="text-xs sm:text-sm font-bold text-white">
              Copperbelt & North-Western, Zambia
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
