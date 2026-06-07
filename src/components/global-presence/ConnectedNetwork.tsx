"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const connections = [
  {
    label: "Operations",
    locations: "Australia · Chile · South Africa · Canada",
    detail: "Extraction and processing across four continental platforms",
  },
  {
    label: "Logistics",
    locations: "Singapore · Rotterdam · Perth · São Paulo",
    detail: "Integrated supply chain connecting mine to market",
  },
  {
    label: "Engineering",
    locations: "Stockholm · Melbourne · Santiago",
    detail: "Technical centres driving innovation and automation",
  },
  {
    label: "Workforce",
    locations: "42 nationalities across all regions",
    detail: "A global community united by shared purpose",
  },
];

export default function ConnectedNetwork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      linesRef.current.forEach((line) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      if (orbRef.current) {
        gsap.to(orbRef.current, {
          rotation: 360,
          duration: 120,
          repeat: -1,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 lg:py-64 px-6 md:px-12 lg:px-20 xl:px-28 bg-neutral-950 relative overflow-hidden"
    >
      {/* Subtle orbital decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.04] pointer-events-none">
        <div ref={orbRef} className="w-[800px] h-[800px] relative">
          <div className="absolute inset-0 rounded-full border border-white" />
          <div className="absolute inset-12 rounded-full border border-white" />
          <div className="absolute inset-24 rounded-full border border-white" />
          <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
          <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-white translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div ref={headerRef} className="mb-20 md:mb-28 opacity-0">
          <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-600 font-light block mb-6">
            Connected Network
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-white tracking-[-0.03em] max-w-3xl leading-[1.15]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Four dimensions of global
            <br />
            integration
          </h2>
        </div>

        <div className="space-y-0">
          {connections.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                linesRef.current[i] = el;
              }}
              className="border-t border-white/10 py-10 md:py-14 opacity-0 group cursor-default"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 font-light block mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-extralight text-white tracking-[-0.02em] group-hover:text-neutral-300 transition-colors duration-700"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {item.label}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm text-neutral-500 font-light leading-[1.7]">
                    {item.locations}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-neutral-500 font-light leading-[1.7]">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
