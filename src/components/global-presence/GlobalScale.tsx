"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scaleWords = [
  "Discover",
  "Extract",
  "Process",
  "Transport",
  "Deliver",
];

export default function GlobalScale() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      wordsRef.current.forEach((word) => {
        if (!word) return;
        gsap.fromTo(
          word,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: word,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      if (connectorRef.current) {
        gsap.fromTo(
          connectorRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 lg:py-64 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20 md:mb-28">
          <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 font-light">
            Value Chain
          </span>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-1/2 left-0 right-0 hidden md:block">
            <div
              ref={connectorRef}
              className="h-[1px] bg-neutral-200 origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative">
            {scaleWords.map((word, i) => (
              <div
                key={i}
                ref={(el) => {
                  wordsRef.current[i] = el;
                }}
                className="flex flex-col items-center gap-4 opacity-0 relative z-10"
              >
                <div className="w-3 h-3 rounded-full bg-neutral-900 hidden md:block" />
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 tracking-[-0.03em]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {word}
                </h3>
                {i < scaleWords.length - 1 && (
                  <div className="md:hidden w-[1px] h-8 bg-neutral-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20 md:mt-28">
          <p className="text-sm text-neutral-400 font-light max-w-lg mx-auto leading-[1.8]">
            A seamless chain of expertise, from geological exploration to global
            delivery, unified by a single standard of excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
