"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UNDERGROUND_MINING } from "@/data/underground-mining";

export function UMIntroNarrative() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".um-narrative-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Section label */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
                Introduction
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-tight text-slate-900">
              The work below.
            </h2>
          </div>

          {/* Right: Narrative blocks */}
          <div className="lg:col-span-9 space-y-12 lg:space-y-16">
            {UNDERGROUND_MINING.narrative.map((item) => (
              <div key={item.number} className="um-narrative-item">
                <div className="flex items-baseline gap-6 mb-4">
                  <span className="font-mono text-xs font-semibold text-amber-600 tracking-widest flex-shrink-0">
                    {item.number}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light max-w-3xl pl-0 lg:pl-12">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
