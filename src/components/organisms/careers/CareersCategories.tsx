"use client";

import { JSX, useState } from "react";
import { Badge } from "@/components/atoms/Badge";
import { HardHat, Settings, Zap, Shield, Users, Landmark, BarChart3, Wrench, Truck, Building2 } from "lucide-react";

const CATEGORIES = [
  { name: "Underground Mining", icon: HardHat, count: 45 },
  { name: "Mechanical Engineering", icon: Settings, count: 32 },
  { name: "Electrical Engineering", icon: Zap, count: 28 },
  { name: "Safety & HSE", icon: Shield, count: 18 },
  { name: "Human Resources", icon: Users, count: 12 },
  { name: "Finance & Accounting", icon: Landmark, count: 15 },
  { name: "Global Operations", icon: BarChart3, count: 38 },
  { name: "Maintenance & Repair", icon: Wrench, count: 42 },
  { name: "Logistics & Supply", icon: Truck, count: 22 },
  { name: "Civil Infrastructure", icon: Building2, count: 19 },
] as const;

export function CareersCategories(): JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-neutral-50 relative border-t border-b border-neutral-200/60 overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <Badge variant="dot" className="mb-5">
              Career Paths
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-none">
              Explore Our <br />
              Core <span className="text-neutral-300">Disciplines.</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
            From technical execution beneath the surface to executive control centers,
            find the discipline tailored to your unique expertise.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
        {/* Soft fading overlays for cinematic depth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
          {/* First loop of categories */}
          {CATEGORIES.map((cat, idx) => {
            const IconComp = cat.icon;
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={`cat-1-${cat.name}`}
                className="inline-block w-[300px] flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="bg-white border border-neutral-200/80 hover:border-neutral-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{
                    transform: isHovered ? "translateY(-4px)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100">
                      <IconComp size={18} className="text-neutral-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-2xl font-black text-neutral-900 tracking-tight">
                      {cat.count}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1.5 whitespace-normal">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                      Open Positions
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Duplicated loop of categories for infinite scroll */}
          {CATEGORIES.map((cat, idx) => {
            const IconComp = cat.icon;
            const isHovered = hoveredIndex === idx + CATEGORIES.length;
            return (
              <div
                key={`cat-2-${cat.name}`}
                className="inline-block w-[300px] flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(idx + CATEGORIES.length)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="bg-white border border-neutral-200/80 hover:border-neutral-900 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{
                    transform: isHovered ? "translateY(-4px)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100">
                      <IconComp size={18} className="text-neutral-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-2xl font-black text-neutral-900 tracking-tight">
                      {cat.count}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1.5 whitespace-normal">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                      Open Positions
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tailwind marquee animation rules injected directly */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
