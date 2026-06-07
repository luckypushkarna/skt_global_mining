"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PresenceOpening() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      linesRef.current.forEach((line, i) => {
        tl.fromTo(
          line,
          {
            opacity: 0,
            y: 80,
            rotateX: 15,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.3,
            ease: "power3.out",
          },
          `-=${i === 0 ? 0.3 : 0.9}`
        );
      });

      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      ).fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" },
        "-=0.4"
      );

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        y: -100,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineLines = ["Operating across", "continents."];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28"
    >
      <div className="max-w-[1600px] w-full mx-auto">
        <span
          ref={labelRef}
          className="inline-block text-[10px] tracking-[0.4em] uppercase text-neutral-400 mb-10 md:mb-14 font-light opacity-0"
        >
          Global Presence
        </span>

        <div className="space-y-0 perspective-[1000px]">
          {headlineLines.map((line, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) linesRef.current[i] = el;
              }}
              className="overflow-hidden opacity-0"
            >
              <h1
                className={`text-[clamp(3rem,9vw,9rem)] font-extralight leading-[1.0] tracking-[-0.04em] ${
                  i === headlineLines.length - 1
                    ? "text-neutral-300"
                    : "text-neutral-900"
                }`}
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        <p
          ref={subtextRef}
          className="mt-12 md:mt-16 text-base md:text-lg text-neutral-400 font-light max-w-lg leading-[1.8] opacity-0"
        >
          From deep underground operations to vast open-pit mines, our presence
          spans the world&apos;s most significant mineral provinces.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400 font-light">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-neutral-200 relative overflow-hidden">
          <div className="absolute inset-x-0 h-1/3 bg-neutral-900 animate-scroll-pulse" />
        </div>
      </div>
    </section>
  );
}
