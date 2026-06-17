"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".um-hero-eyebrow", { opacity: 0, y: 10, duration: 0.6 })
        .from(".um-hero-title", { opacity: 0, y: 30, duration: 0.9 }, "-=0.3")
        .from(".um-hero-intro", { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
        .from(".um-hero-video", { opacity: 0, duration: 1.4 }, "-=0.8");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[80vh] lg:min-h-[90vh] bg-slate-950 overflow-hidden mt-16"
    >
      {/* Background video - completely stock without filters/overlays */}
      <div className="absolute inset-0 um-hero-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          poster="https://res.cloudinary.com/dxhwcq1eg/video/upload/f_auto,q_auto,so_0/skt/underground-mining-bg.jpg"
          preload={isMobile ? "none" : "auto"}
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dxhwcq1eg/video/upload/skt/underground-mining-bg.mp4"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-12 min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-end pb-16 lg:pb-24">
        <div className="um-hero-eyebrow flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {UNDERGROUND_MINING.hero.eyebrow}
          </span>
        </div>

        <h1 className="um-hero-title text-xl md:text-2xl font-semibold tracking-tight text-white max-w-2xl mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {UNDERGROUND_MINING.hero.title}
          {" "}
          <span className="text-white/80">{UNDERGROUND_MINING.hero.titleAccent}</span>
        </h1>

        <p className="um-hero-intro text-xs md:text-sm text-white/90 max-w-xl leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {UNDERGROUND_MINING.hero.intro}
        </p>
      </div>
    </section>
  );
}
