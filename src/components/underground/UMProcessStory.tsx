"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMProcessStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".um-stage").forEach((stage, i) => {
        gsap.from(stage, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stage,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-b border-slate-200 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              {UNDERGROUND_MINING.process.eyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            {UNDERGROUND_MINING.process.title}
          </h2>
        </div>

        {/* Stages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {UNDERGROUND_MINING.process.stages.map((stage) => (
            <div
              key={stage.step}
              className="um-stage bg-white p-8 lg:p-10 group hover:bg-slate-50/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs font-semibold text-amber-600 tracking-widest">
                  STAGE {stage.step}
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900 leading-tight mb-3">
                {stage.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process visual using existing public image */}
        <div className="mt-16 relative aspect-[16/9] overflow-hidden bg-slate-900">
          <Image
            src="/Mechanised Fleet.webp"
            alt="Mechanised LHD vehicle at the underground production face"
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-[10px] font-mono text-white/80 tracking-wider uppercase">
              Fig. 01 - Mechanised LHD Vehicle at the Production Face
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
