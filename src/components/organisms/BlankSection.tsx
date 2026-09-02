"use client";

import { useRef, useEffect, JSX } from "react";
import { ZambiaOperationsMapLoader } from "@/components/organisms/ZambiaOperationsMapLoader";

export function BlankSection(): JSX.Element {
  // ─── Refs ──────────────────────────────────────────
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const copyTitleRef = useRef<HTMLDivElement>(null);
  const copyParaRef = useRef<HTMLParagraphElement>(null);
  // 🧹 Removed mapPathRef as it was unused in GSAP or React logic
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

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.set(revealRef.current, {
            clipPath: () => {
              const coords = getPortalCoords();
              return `circle(0px at ${coords.x}% ${coords.y}%)`;
            },
            opacity: 1,
            force3D: true,
            willChange: "clip-path",
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=50%",
              scrub: window.innerWidth < 1024 ? true : 0.6,
              pin: pinWrapRef.current,
              pinSpacing: true,
              anticipatePin: 1,
              fastScrollEnd: true,
              invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
          });

          tl.to({}, { duration: 1 }, 0);

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

          tl.to({}, { duration: 1.5 }, 3);

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        });

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
      ctx?.revert(); // ⚡ Optimized: proper cleanup
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
    >
      <div
        ref={pinWrapRef}
        className="relative w-full h-screen bg-white overflow-hidden"
      >
        <div
          ref={contentRef}
          className="absolute inset-0 z-10 flex items-center py-4 lg:py-0"
        >
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-16 items-center">
              <div className="flex flex-col justify-center">
                <div ref={copyTitleRef}>
                  <h3 className="mb-2 lg:mb-5 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                    Long-Term Commitment
                  </h3>
                  <h2 className="mb-3 lg:mb-8 text-3xl md:text-5xl text-neutral-900 tracking-tight leading-[1.1] font-serif font-normal">
                    Building Zambia&apos;s <br />
                    <span className="text-neutral-300">Mining Future</span>
                  </h2>
                </div>
                <p
                  ref={copyParaRef}
                  className="max-w-lg text-[15px] md:text-base font-light text-neutral-600 leading-relaxed"
                >
                  Mining progress is built on more than production. Through workforce development, infrastructure investment, skills transfer, and mechanised operations, SKT Global is helping strengthen the foundations of Zambia&apos;s mining future.
                </p>
              </div>

              <div className="relative flex items-center justify-center w-full mt-8 lg:mt-0 h-[32vh] sm:h-[40vh] lg:h-auto aspect-[8/5] lg:aspect-square">
                <svg
                  viewBox="0 0 800 500"
                  className="w-full h-full object-contain overflow-visible origin-center scale-[1.35] sm:scale-125 lg:scale-100"
                >
                  <g>
                    <image
                      href="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125551/skt_global_mining/zambia-map-detailed.webp"
                      x="0"
                      y="0"
                      width="800"
                      height="500"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>

                  {/* GSAP targets */}
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

        {/* ⚡ Optimized: Moved z-index to Tailwind, removed static transform3d/willChange since GSAP applies them */}
        <div
          ref={revealRef}
          className="absolute inset-0 z-50 opacity-0 bg-[#0B0F19] overflow-y-auto"
        >
          <ZambiaOperationsMapLoader clean={true} />
        </div>
      </div>
    </section>
  );
}