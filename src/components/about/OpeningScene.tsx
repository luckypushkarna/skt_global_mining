"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OpeningScene() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          line1Ref.current,
          { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .fromTo(
          line2Ref.current,
          { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .fromTo(
          line3Ref.current,
          { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .fromTo(
          scrollHintRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=0.3"
        );

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        y: -80,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        <span
          ref={labelRef}
          className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-8 md:mb-12 font-medium opacity-0"
        >
          About
        </span>

        <div className="space-y-1 md:space-y-2">
          <div ref={line1Ref} className="overflow-hidden opacity-0">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] text-slate-900 leading-[1.1] font-serif font-normal"
              
            >
              Setting records in
            </h1>
          </div>
          <div ref={line2Ref} className="overflow-hidden opacity-0">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] text-slate-900 leading-[1.1] font-serif font-normal"
              
            >
              ambition, speed, and
            </h1>
          </div>
          <div ref={line3Ref} className="overflow-hidden opacity-0">
            <h1
              className="text-[clamp(2.5rem,7vw,6.5rem)] text-slate-400 leading-[1.05] tracking-[-0.03em] font-serif font-normal"
              
            >
              excellence.
            </h1>
          </div>
        </div>
      </div>

      <div
        ref={scrollHintRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
      >
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 font-medium">
          Discover
        </span>
        <div className="w-[1px] h-10 bg-neutral-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-neutral-900 animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
