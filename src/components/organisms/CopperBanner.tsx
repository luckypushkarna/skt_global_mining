"use client";

import { JSX, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CopperBanner(): JSX.Element {
  const containerRef = useRef<HTMLElement | null>(null);
  const brickRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        brickRef.current,
        {
          yPercent: -35,
          autoAlpha: 0,
          force3D: true,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 1.4,
          ease: "power3.out",
          force3D: true,
          clearProps: "transform",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-12 lg:py-16 bg-[#0d0d0d] overflow-hidden"
    >
      {/* 1. Background Wrapper: Mesh gradient & electric blue ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#161a22] to-[#0d0d0d] pointer-events-none" />

      {/* Faint electric light blue ambient glow on the right side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#0ea5e9] opacity-[0.06] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-[#38bdf8] opacity-[0.04] rounded-full blur-[60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 z-10">
        {/* 2. Floating Content Card: Subtle neo-brutalist properties */}
        <div className="relative w-full bg-[#f9fafb] border border-neutral-900 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)] rounded-lg flex flex-col lg:flex-row items-center lg:items-stretch overflow-visible transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(14,165,233,0.15)] mt-12 lg:mt-0">
          {/* 3. Left Element: 3D Asset breaking out of the left boundary */}
          <div className="relative w-full lg:w-1/4 min-h-[140px] md:min-h-[180px] lg:min-h-full flex items-center justify-center pointer-events-none">
            {/* Positioning Wrapper */}
            <div className="absolute -top-16 lg:top-1/2 lg:-translate-y-1/2 lg:-left-12 w-48 h-48 md:w-56 md:h-56 lg:w-[260px] lg:h-[260px] z-20">
              {/* GSAP Animation Wrapper */}
              <div
                ref={brickRef}
                className="w-full h-full opacity-0 will-change-transform will-change-opacity"
                style={{
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Hover Effect Wrapper */}
                <div className="w-full h-full relative transition-transform duration-700 hover:scale-105 hover:-rotate-2 pointer-events-auto">
                  <Image
                    src="/skt-brick.png"
                    alt="Premium Copper Ingot"
                    fill
                    sizes="(max-width: 1024px) 200px, 260px"
                    className="object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Center Text */}
          <div className="w-full lg:w-1/2 py-8 px-6 lg:py-10 lg:px-6 flex flex-col justify-center text-center lg:text-left z-10 mt-16 md:mt-24 lg:mt-0">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-black tracking-tight text-neutral-950 mb-3 leading-[1.1]">
              The Future of
              <br className="hidden lg:block" />
              Copper Procurement
            </h2>
            <p className="text-neutral-600 text-[13px] md:text-[15px] font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
              Transforming global supply chains with seamless digital management,
              unparalleled purity, and immediate market access for premium copper
              assets.
            </p>
          </div>

          {/* 5. Right Action Button */}
          <div className="w-full lg:w-1/4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 lg:gap-4 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-neutral-200 z-10 bg-white/50 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 text-center">
              Copper Marketplace
            </span>

            <Link
              href="/copper"
              className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#e11d48] text-white overflow-hidden transition-all duration-300 hover:bg-[#be123c] shadow-md hover:shadow-lg rounded-[4px] border border-transparent hover:border-[#9f1239]"
              aria-label="Go to Copper Marketplace"
            >
              {/* Clean minimalist arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}