"use client";
import { useState, useEffect } from "react";
import { UNDERGROUND_WORKSHOP } from "@/data/underground-workshop";

export function WorkshopHero() {
  const { hero } = UNDERGROUND_WORKSHOP;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="relative w-full min-h-[72vh] lg:min-h-[82vh] bg-black overflow-hidden mt-16">
      {/* Background video - raw, no filters */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dxhwcq1eg/video/upload/skt/fleet-hero.mp4"
        poster="https://res.cloudinary.com/dxhwcq1eg/video/upload/f_auto,q_auto,so_0/skt/fleet-hero.jpg"
        crossOrigin="anonymous"
        preload={isMobile ? "none" : "auto"}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-12 min-h-[72vh] lg:min-h-[82vh] flex flex-col justify-end pb-16 lg:pb-24">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {hero.eyebrow}
          </span>
        </div>

        <h1 className="text-xl md:text-2xl tracking-tight text-white max-w-2xl mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-serif font-normal">
          {hero.title}
        </h1>

        <p className="text-xs md:text-sm text-white/90 max-w-xl leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {hero.intro}
        </p>
      </div>
    </section>
  );
}

