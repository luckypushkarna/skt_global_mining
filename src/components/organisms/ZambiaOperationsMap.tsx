"use client";

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
    description:
      "Primary underground mining operations base — the core of SKT's mechanised mining capability supporting Mopani Copper Mines.",
    lng: 27.8635,
    lat: -12.5295,
    type: "primary" as const,
  },
  {
    id: 2,
    name: "Kitwe",
    role: "Logistics & Support",
    description:
      "Regional logistics centre providing workforce deployment, equipment staging, and operational support services.",
    lng: 28.2132,
    lat: -12.8024,
    type: "major" as const,
  },
  {
    id: 3,
    name: "Mufulira",
    role: "Active Mining Site",
    description:
      "Active mechanised underground mining operations with continuous mineral extraction and ore processing support.",
    lng: 28.2392,
    lat: -12.5497,
    type: "major" as const,
  },
  {
    id: 4,
    name: "Solwezi",
    role: "Active Mining Site",
    description:
      "Mechanised underground operations site supporting regional geodetic plans and key mineral resources extraction.",
    lng: 26.3858,
    lat: -12.1433,
    type: "major" as const,
  },
  {
    id: 5,
    name: "Konkola Mine Main Site",
    role: "Active Mining Site",
    description:
      "Strategic mechanised underground operations base at Konkola, supporting deep-level copper extraction.",
    lng: 27.8296,
    lat: -12.3789,
    type: "major" as const,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function ZambiaOperationsMap({ clean = false }: { clean?: boolean }): JSX.Element {
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

  // Force close Maplibre default open attribution panel on mount/load
  useEffect(() => {
    let attempts = 0;
    const interval = setInterval(() => {
      const attribContainer = document.querySelector(".maplibregl-ctrl-attrib");
      if (attribContainer) {
        attribContainer.classList.remove("maplibregl-compact-show");
        attribContainer.removeAttribute("open");
        clearInterval(interval);
      }
      attempts++;
      if (attempts > 40) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="operations-map"
      className={
        clean
          ? "bg-[#0B0F19] w-full h-screen relative overflow-hidden p-0 m-0"
          : "bg-[#0B0F19] py-20 lg:py-32 relative overflow-hidden"
      }
      aria-labelledby="operations-map-heading"
    >
      {/* ── Header ── */}
      {!clean && (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[0.28em] uppercase text-white/40 mb-5 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E63027] animate-pulse" />
              Operational Footprint
            </p>

            <h2
              id="operations-map-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.95] mb-5"
            >
              Where We
              <br />
              <span className="text-white/20">Operate</span>
            </h2>

            <p className="text-white/50 max-w-xl text-sm md:text-base leading-relaxed mb-8">
              Five active operational sites across Zambia&apos;s Copperbelt and North-Western
              regions — supporting the Mopani Copper Mines ecosystem with
              mechanised underground mining services.
            </p>

            {/* Inline stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="text-lg font-black text-white">5</span>
                Active Sites
              </span>
              <span className="text-white/20">·</span>
              <span>Copperbelt & North-Western Provinces</span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-lg font-black text-white">
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
        className={clean ? "w-full h-full p-0 m-0" : "max-w-7xl mx-auto px-4 lg:px-12"}
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
                >
                  {/* Custom marker visual */}
                  <MarkerContent>
                    <div className="relative group cursor-pointer flex items-center justify-center">
                      {/* Pulsing ring — primary location only */}
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
                  <MarkerTooltip className="!bg-[#1a1f2e] !text-white !rounded-lg !shadow-xl !border !border-white/10 !px-3 !py-1.5">
                    <p className="text-xs font-semibold whitespace-nowrap text-white">
                      {location.name}
                    </p>
                  </MarkerTooltip>

                  {/* Popup on click */}
                  <MarkerPopup
                    closeButton
                    className="!bg-[#1a1f2e] !text-white !rounded-xl !shadow-2xl !border !border-white/10 !p-0 !max-w-[280px]"
                  >
                    <div className="p-4 space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-base font-bold text-white leading-tight">
                            {location.name}
                          </p>
                          <p
                            style={{ color: markerColor }}
                            className="text-[10px] font-semibold tracking-widest uppercase mt-1"
                          >
                            {location.role}
                          </p>
                        </div>
                        {location.type === "primary" && (
                          <span
                            style={{ backgroundColor: markerColor }}
                            className="text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full text-white shrink-0"
                          >
                            HQ
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-white/60 leading-relaxed">
                        {location.description}
                      </p>

                      {/* Coordinates */}
                      <div className="pt-2 border-t border-white/10">
                        <p className="text-[10px] text-white/30 font-mono">
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

          {/* ── Legend overlay (bottom-left) ── */}
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-[#0B0F19]/90 backdrop-blur-md rounded-lg px-2 py-2 sm:px-3 sm:py-2.5 border border-white/10 shadow-lg pointer-events-none z-10">
            <p className="text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-1.5 sm:mb-2">
              Legend
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFA000]/20" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFA000] border border-white/80 shadow" />
              </div>
              <span className="text-[10px] sm:text-[11px] text-white/70 font-medium">
                Primary Hub
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="relative flex items-center justify-center w-3 sm:w-3.5">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E63027] border border-white/80 shadow" />
              </div>
              <span className="text-[10px] sm:text-[11px] text-white/70 font-medium">
                Operational Site
              </span>
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
