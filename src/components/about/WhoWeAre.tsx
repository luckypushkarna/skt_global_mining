"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
  {
    word: "Mining",
    description: "Extracting value from the earth with precision and care",
  },
  {
    word: "Engineering",
    description: "Solving complex challenges through technical excellence",
  },
  {
    word: "Infrastructure",
    description: "Building systems that connect and empower communities",
  },
  {
    word: "People",
    description: "Investing in the talent that drives everything we do",
  },
  {
    word: "Sustainability",
    description: "Ensuring our legacy extends far beyond extraction",
  },
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (itemsRef.current) {
        const items = itemsRef.current.querySelectorAll(".discipline-item");
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div ref={headerRef} className="lg:col-span-4 opacity-0">
            <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-6 font-medium">
              Who We Are
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.1]"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Five disciplines.
              <br />
              One purpose.
            </h2>
          </div>

          <div ref={itemsRef} className="lg:col-span-7 lg:col-start-6">
            {disciplines.map((d, i) => (
              <div
                key={i}
                className="discipline-item border-t border-neutral-100 py-5 md:py-7 opacity-0 group"
              >
                <div className="flex items-baseline justify-between gap-8">
                  <div>
                    <h3
                      className="text-2xl lg:text-3xl font-extrabold tracking-[-0.03em] text-slate-900 leading-tight mb-3 group-hover:text-slate-600 transition-colors duration-500"
                      style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                      }}
                    >
                      {d.word}
                    </h3>
                    <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal max-w-md">
                      {d.description}
                    </p>
                  </div>
                  <span className="text-[11px] tracking-[0.2em] text-slate-300 font-medium hidden md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t border-neutral-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
