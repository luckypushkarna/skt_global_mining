"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { JSX } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LOCATIONS, PROVINCES, type Location } from "@/data/zambiaLocations";

const FILTERS = [
  { id: "all", label: "All Branches", sublabel: "Full Network" },
  { id: "hq", label: "Head Office", sublabel: "Lusaka HQ" },
  { id: "major", label: "Major Cities", sublabel: "Provincial" },
  { id: "mall", label: "Mall Branches", sublabel: "Retail" },
  { id: "branch", label: "Local Branches", sublabel: "Community" },
];

export function BlankSection(): JSX.Element {
  // ─── States ────────────────────────────────────────
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

  const filteredLocations = useMemo(
    () =>
      activeFilter === "all"
        ? LOCATIONS
        : LOCATIONS.filter((l) => l.type === activeFilter),
    [activeFilter]
  );

  // ─── Refs ──────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const copyTitleRef = useRef<HTMLDivElement>(null);
  const copyParaRef = useRef<HTMLParagraphElement>(null);
  const mapPathRef = useRef<SVGGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const coreRef = useRef<SVGGElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  // ─── GSAP ScrollTrigger Setup ──────────────────────
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // ── Full pinned portal zoom animation (all screen sizes) ─────────────
        mm.add("(prefers-reduced-motion: no-preference)", () => {

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",          // Pin starts when section hits top
              end: "+=120%",             // Optimized: 120% viewport height scroll distance
              scrub: 0.6,                // Faster, more responsive scrubbing
              pin: pinWrapRef.current,   // Pin the inner wrapper
              pinSpacing: true,          // Add scroll space for the pinned duration
              anticipatePin: 1,
              fastScrollEnd: true,       // Better performance on fast scrolling
              invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
          });

          // ════════════════════════════════════════════
          // PHASE 1 (0% - 25%): Content enters
          // ════════════════════════════════════════════

          tl.fromTo(contentRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            0
          );

          tl.fromTo(copyTitleRef.current,
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            0
          );

          tl.fromTo(copyParaRef.current,
            { opacity: 0, x: 80 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
            0
          );

          // Scroll hint fades out as user starts scrolling
          tl.to(hintRef.current,
            { opacity: 0, duration: 0.5 },
            0.2
          );

          // ════════════════════════════════════════════
          // PHASE 2 (25% - 35%): Hold for reading
          // ════════════════════════════════════════════

          // (Just a pause — content stays visible)
          tl.to({}, { duration: 1 }, 1);

          // ════════════════════════════════════════════
          // PHASE 3 (35% - 60%): Portal opens (circle expands)
          // ════════════════════════════════════════════

          // Core dot disappears as portal opens
          tl.to(coreRef.current,
            {
              opacity: 0,
              scale: 0,
              transformOrigin: "center",
              duration: 0.5,
              ease: "power3.in"
            },
            2
          );

          // Layer 1 content fades out
          tl.to([copyTitleRef.current, copyParaRef.current, mapPathRef.current],
            { opacity: 0, duration: 1.5, ease: "power2.inOut" },
            2
          );

          // Circle expands massively
          tl.to(circleRef.current,
            {
              attr: { r: 2500 },
              duration: 2.5,
              ease: "power2.out"
            },
            2
          );

          // Color transition: Crimson → Deep Navy
          tl.to(circleRef.current,
            { fill: "#0B0F19", duration: 2.5 },
            2
          );

          // ════════════════════════════════════════════
          // PHASE 4 (60% - 80%): Reveal map content
          // ════════════════════════════════════════════

          tl.fromTo(revealRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
            4
          );

          // ════════════════════════════════════════════
          // PHASE 5 (80% - 100%): Hold reveal content
          // ════════════════════════════════════════════

          // Lock reveal visible for the rest of the scroll
          // After this phase, pin releases and normal scroll continues
          tl.to(revealRef.current,
            { opacity: 1, duration: 1 },
            5.5
          );

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        });

        // ── Reduced Motion ─────────────────────────────
        mm.add("(prefers-reduced-motion: reduce)", () => {
          gsap.set(contentRef.current, { opacity: 1 });
          gsap.set(copyTitleRef.current, { opacity: 1, x: 0 });
          gsap.set(copyParaRef.current, { opacity: 1, x: 0 });
          gsap.set(revealRef.current, { opacity: 1 });
          gsap.set(circleRef.current, { opacity: 0 });
          gsap.set(hintRef.current, { opacity: 0 });
        });
      }, containerRef);
    };

    init();

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  // ─── Render ─────────────────────────────────────────
  return (
    <section
      ref={containerRef}
      id="operations-map"
      className="relative w-full"
    >
      {/* 
        PIN WRAPPER 
        - On desktop: Gets pinned by GSAP for the full animation duration
        - Height = 100vh (the actual viewport)
        - GSAP adds 200vh of scroll space below via pinSpacing
      */}
      <div
        ref={pinWrapRef}
        className="relative w-full h-screen overflow-hidden bg-white"
      >
        {/* ═══════════════════════════════════════════════
            LAYER 1 — Initial editorial content
        ═══════════════════════════════════════════════ */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center py-6 lg:py-0 opacity-0"
          style={{ zIndex: 10 }}
        >
          <div className="max-w-screen-xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Left: Copy */}
              <div className="flex flex-col justify-center">
                <div ref={copyTitleRef}>
                  <h3 className="text-sm font-bold tracking-[0.25em] text-neutral-400 uppercase mb-5">
                    Underground Operations
                  </h3>
                  <h2 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight leading-[1.05] mb-8">
                    Zambia <br />
                    <span className="text-neutral-300">Mining Ecosystem</span>
                  </h2>
                </div>
                <p
                  ref={copyParaRef}
                  className="text-neutral-500 max-w-lg text-base leading-relaxed"
                >
                  SKT Global&apos;s operations in Zambia are built around underground
                  mechanisation, operational infrastructure, workforce
                  development, and long-term mining sustainability. Continuous
                  investment in underground equipment, operational systems, and
                  workforce expansion is strengthening long-term mining
                  continuity.
                </p>
              </div>

              {/* Right: SVG Operations Map */}
              <div className="relative w-full h-[30vh] lg:h-auto aspect-[8/5] lg:aspect-square flex items-center justify-center">
                <svg
                  viewBox="0 0 800 500"
                  className="w-full h-full object-contain overflow-visible"
                >
                  <g ref={mapPathRef}>
                    <image
                      href="/zambia-map-detailed.webp"
                      x="0"
                      y="0"
                      width="800"
                      height="500"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>

                  {/* Expanding portal circle */}
                  <circle
                    ref={circleRef}
                    cx="440"
                    cy="240"
                    r="0"
                    fill="#E11D48"
                  />

                  {/* Interactive dot/pin */}
                  <g
                    ref={coreRef}
                    className="map-pin"
                    transform="translate(440, 240)"
                    style={{ cursor: "pointer" }}
                  >
                    <circle
                      r="20"
                      fill="transparent"
                      stroke="#E11D48"
                      strokeWidth="6"
                      className="animate-pulse"
                    />
                    <circle r="8" fill="#E11D48" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            LAYER 3 — Zambia Branch Network Reveal
        ═══════════════════════════════════════════════ */}
        <div
          ref={revealRef}
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-[#0B0F19] py-8 lg:py-0 overflow-y-auto"
          style={{ zIndex: 50 }}
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6 lg:gap-10 text-white">

            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4 lg:pb-6 w-full select-none">
              <div>
                <span className="text-[10px] font-extrabold tracking-[0.4em] uppercase text-white/50">
                  Zambia Operations
                </span>
                <h2 className="text-2xl font-black tracking-tight text-white mt-1">
                  SKT Branch Network
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-8 text-right">
                <div>
                  <p className="text-2xl font-black text-white">40+</p>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-white/40">
                    Branches
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">10</p>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-white/40">
                    Provinces
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">24/7</p>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-white/40">
                    Service
                  </p>
                </div>
              </div>
            </div>

            {/* Map + Sidebar Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

              {/* Filter Sidebar */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-1 bg-black/25 backdrop-blur-md p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-white/5 w-full scrollbar-none snap-x select-none">
                <p className="text-[10px] font-extrabold tracking-[0.28em] uppercase text-white/40 mb-3 hidden lg:block">
                  Filter Branches
                </p>

                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`relative flex items-center justify-between p-2 lg:p-3.5 rounded-lg lg:rounded-xl text-left transition-all duration-300 group border shrink-0 snap-start min-h-[44px] ${isActive
                        ? "bg-white/8 border-white/10"
                        : "bg-transparent border-transparent hover:bg-white/5"
                        }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-rose-600 rounded-r-full hidden lg:block" />
                      )}
                      <div className="pl-1 lg:pl-3">
                        <p
                          className={`text-xs lg:text-sm font-bold tracking-tight transition-colors duration-300 ${isActive
                            ? "text-white"
                            : "text-white/60 group-hover:text-white"
                            }`}
                        >
                          {filter.label}
                        </p>
                        <p className="text-[9px] lg:text-[10px] text-white/30 font-medium hidden lg:block">
                          {filter.sublabel}
                        </p>
                      </div>
                      <MapPin
                        size={12}
                        className={`transition-all duration-300 hidden lg:block ${isActive
                          ? "text-rose-500 scale-110"
                          : "text-white/15 group-hover:text-white/35"
                          }`}
                      />
                    </button>
                  );
                })}

                {/* Legend */}
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2.5 hidden lg:block">
                  {[
                    { color: "bg-rose-500", label: "Head Office" },
                    { color: "bg-amber-400", label: "Major Cities" },
                    { color: "bg-blue-400", label: "Mall Branches" },
                    { color: "bg-white/50", label: "Local Branches" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <div
                        className={`w-2 h-2 rounded-full ${item.color} shrink-0`}
                      />
                      <p className="text-[11px] text-white/40">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Canvas */}
              <div
                className="lg:col-span-9 relative"
                onClick={() => setHoveredLocation(null)}
              >
                <div className="relative w-full" style={{ paddingBottom: "70%" }}>
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/zambia-operations-nobgs.webp"
                      alt="SKT Zambia Branch Network Map"
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-contain select-none pointer-events-none"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>

                  {/* Location pins */}
                  {filteredLocations.map((location) => {
                    const isHovered = hoveredLocation?.id === location.id;
                    const isHQ = location.isMain === true;

                    const dotColor =
                      location.type === "hq"
                        ? "bg-rose-500"
                        : location.type === "major"
                          ? "bg-amber-400"
                          : location.type === "mall"
                            ? "bg-blue-400"
                            : "bg-white/60";

                    return (
                      <button
                        key={location.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setHoveredLocation(location);
                        }}
                        onMouseEnter={() => {
                          if (window.innerWidth >= 1024)
                            setHoveredLocation(location);
                        }}
                        onMouseLeave={() => {
                          if (window.innerWidth >= 1024)
                            setHoveredLocation(null);
                        }}
                        className="absolute group flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 focus-visible:outline-none"
                        style={{
                          left: `${location.x}%`,
                          top: `${location.y}%`,
                          transform: "translate(-50%,-50%)",
                          zIndex: isHQ ? 20 : 10,
                        }}
                      >
                        {isHQ && (
                          <div className="absolute inset-0 w-full h-full rounded-full bg-rose-500/50 animate-ping" />
                        )}

                        <div
                          className={`relative rounded-full border border-white/80 shadow-lg transition-all duration-300 ${isHQ ? "w-3 h-3" : "w-2 h-2"
                            } ${dotColor} ${isHovered ? "scale-150" : "scale-100"}`}
                        />

                        <div
                          className={`absolute left-1/2 -translate-x-1/2 mt-6 whitespace-nowrap transition-all duration-200 pointer-events-none ${isHovered || isHQ
                            ? "opacity-100 animate-fade-in"
                            : "opacity-0 group-hover:opacity-100"
                            } hidden sm:block`}
                        >
                          <p className="text-[10px] font-semibold tracking-wide text-white drop-shadow-sm bg-neutral-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                            {location.name}
                          </p>
                        </div>
                      </button>
                    );
                  })}

                  {/* Tooltips */}
                  <AnimatePresence>
                    {hoveredLocation && (
                      <>
                        {/* Mobile bottom sheet */}
                        <motion.div
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "100%", opacity: 0 }}
                          transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 220,
                          }}
                          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B1A3A]/95 backdrop-blur-md border-t border-white/10 rounded-t-2xl p-6 shadow-2xl block lg:hidden pb-[calc(24px+env(safe-area-inset-bottom))]"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-rose-500" />
                              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                                {
                                  PROVINCES.find(
                                    (p) => p.id === hoveredLocation.province
                                  )?.name
                                }
                              </p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setHoveredLocation(null);
                              }}
                              className="text-white/50 active:text-white text-xs font-semibold px-4 py-1.5 border border-white/15 rounded-full bg-white/5"
                            >
                              Close
                            </button>
                          </div>
                          <p className="text-2xl font-black text-white leading-tight mb-1">
                            {hoveredLocation.name}
                          </p>
                          <p className="text-sm text-white/60 capitalize mb-2">
                            {hoveredLocation.type === "hq"
                              ? "Head Office"
                              : hoveredLocation.type === "major"
                                ? "Major Branch"
                                : hoveredLocation.type === "mall"
                                  ? "Mall Location"
                                  : "Local Branch"}
                          </p>
                        </motion.div>

                        {/* Desktop tooltip */}
                        <div
                          className="absolute bottom-4 right-4 bg-[#0B1A3A]/95 backdrop-blur-md border border-white/10 rounded-xl p-4 min-w-[200px] shadow-2xl pointer-events-none hidden lg:block"
                          style={{ zIndex: 30 }}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <MapPin size={12} className="text-rose-500" />
                            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50">
                              {
                                PROVINCES.find(
                                  (p) => p.id === hoveredLocation.province
                                )?.name
                              }
                            </p>
                          </div>
                          <p className="text-base font-bold text-white leading-tight mb-0.5">
                            {hoveredLocation.name}
                          </p>
                          <p className="text-[11px] text-white/40 capitalize">
                            {hoveredLocation.type === "hq"
                              ? "Head Office"
                              : hoveredLocation.type === "major"
                                ? "Major Branch"
                                : hoveredLocation.type === "mall"
                                  ? "Mall Location"
                                  : "Local Branch"}
                          </p>
                        </div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile stats bar */}
                <div className="grid grid-cols-1 gap-5 sm:hidden mt-6 border-t border-white/10 pt-5 text-center">
                  {[
                    { val: "40+", label: "Branches" },
                    { val: "10", label: "Provinces" },
                    { val: "24/7", label: "Service" },
                  ].map(({ val, label }) => (
                    <div
                      key={label}
                      className="text-center py-2 bg-white/5 rounded-xl border border-white/5"
                    >
                      <p className="text-2xl font-black text-white">{val}</p>
                      <p className="text-[9px] tracking-[0.18em] uppercase text-white/40 mt-0.5">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            Scroll hint (Desktop only)
        ═══════════════════════════════════════════════ */}
        <div
          ref={hintRef}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 pointer-events-none"
          style={{ zIndex: 60 }}
        >
          <span className="text-[10px] font-bold tracking-[0.45em] text-neutral-400 uppercase">
            Explore Operations ↓
          </span>
          <div
            className="w-px h-10"
            style={{
              background: "linear-gradient(to bottom, #a3a3a3, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}