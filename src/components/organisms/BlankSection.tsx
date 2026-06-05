"use client";

import { useRef, useEffect } from "react";
import { JSX } from "react";
import { ZambiaOperationsMapLoader } from "@/components/organisms/ZambiaOperationsMapLoader";

export function BlankSection(): JSX.Element {
  // ─── Refs ──────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const copyTitleRef = useRef<HTMLDivElement>(null);
  const copyParaRef = useRef<HTMLParagraphElement>(null);
  const mapPathRef = useRef<SVGGElement>(null);
  const coreRef = useRef<SVGGElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  // ─── GSAP ScrollTrigger Setup ──────────────────────
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);

      // Helper to calculate exact coordinates of the red pulsing dot relative to the container
      const getPortalCoords = () => {
        if (!coreRef.current || !containerRef.current) return { x: 55, y: 48 };
        const coreRect = coreRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const x = ((coreRect.left + coreRect.width / 2 - containerRect.left) / containerRect.width) * 100;
        const y = ((coreRect.top + coreRect.height / 2 - containerRect.top) / containerRect.height) * 100;

        return { x, y };
      };

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // ── Full pinned portal zoom animation (all screen sizes) ─────────────
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          // Set initial states for clean portal reveal
          gsap.set(revealRef.current, {
            clipPath: () => {
              const coords = getPortalCoords();
              return `circle(0px at ${coords.x}% ${coords.y}%)`;
            },
            opacity: 1, // Let clipPath handle the visibility instead of opacity
            force3D: true,
            willChange: "clip-path",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",          // Pin starts when section hits top
              end: "+=50%",             // Viewport height scroll distance
              scrub: 0.6,                // Smooth scrubbing
              pin: pinWrapRef.current,   // Pin the inner wrapper
              pinSpacing: true,          // Add scroll space for the pinned duration
              anticipatePin: 1,
              fastScrollEnd: true,       // Better performance on fast scrolling
              invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
          });

          // ════════════════════════════════════════════
          // PHASE 1 (0% - 30%): Hold for reading (static text is fully visible already)
          // ════════════════════════════════════════════
          tl.to({}, { duration: 1 }, 0);

          // ════════════════════════════════════════════
          // PHASE 2 (30% - 70%): Portal opens (clipPath expands)
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
            1
          );

          // Expand clipPath to reveal the interactive map
          tl.to(revealRef.current,
            {
              clipPath: () => {
                const coords = getPortalCoords();
                return `circle(150% at ${coords.x}% ${coords.y}%)`;
              },
              duration: 2.0,
              ease: "power2.out"
            },
            1
          );

          // ════════════════════════════════════════════
          // PHASE 3 (70% - 100%): Map fully revealed hold
          // ════════════════════════════════════════════
          tl.to({}, { duration: 1.5 }, 3);

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
          gsap.set(revealRef.current, { opacity: 1, clipPath: "none" });
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
        - Gets pinned by GSAP for the full animation duration
        - Height = 100vh (the actual viewport)
        - GSAP adds scroll space below via pinSpacing
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
          className="absolute inset-0 flex items-center py-4 lg:py-0"
          style={{ zIndex: 10 }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 items-center w-full">

              {/* Left: Copy */}
              <div className="flex flex-col justify-center">
                <div ref={copyTitleRef}>
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-2 lg:mb-5">
                    Underground Operations
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-3 lg:mb-8">
                    Zambia <br />
                    <span className="text-neutral-300">Mining Ecosystem</span>
                  </h2>
                </div>
                <p
                  ref={copyParaRef}
                  className="text-neutral-600 max-w-lg text-[15px] md:text-base font-light leading-relaxed"
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
              <div className="relative w-full h-[22vh] sm:h-[30vh] lg:h-auto aspect-[8/5] lg:aspect-square flex items-center justify-center">
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
            LAYER 3 — Zambia Interactive Map Reveal
        ═══════════════════════════════════════════════ */}
        <div
          ref={revealRef}
          className="absolute inset-0 opacity-0 bg-[#0B0F19] overflow-y-auto"
          style={{
            zIndex: 50,
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
            willChange: "clip-path",
          }}
        >
          <ZambiaOperationsMapLoader clean={true} />
        </div>

      </div>
    </section>
  );
}