"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PresenceClosing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: "power3.out",
          transformOrigin: "top",
        }
      )
        .fromTo(
          mainRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.6"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 xl:px-28 relative bg-stone-50"
    >
      <div
        ref={lineRef}
        className="absolute top-0 left-1/2 w-[1px] h-24 bg-neutral-300 origin-top"
        style={{ transform: "scaleY(0)" }}
      />

      <div className="text-center max-w-4xl mx-auto">
        <h2
          ref={mainRef}
          className="text-[clamp(2rem,6vw,5.5rem)] font-extralight text-neutral-900 leading-[1.1] tracking-[-0.04em] opacity-0"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Building resources
          <br />
          for generations.
        </h2>

        <div
          ref={dividerRef}
          className="w-16 h-[1px] bg-neutral-300 mx-auto my-10 md:my-14 origin-center"
          style={{ transform: "scaleX(0)" }}
        />

        <p
          ref={subRef}
          className="text-base md:text-lg text-neutral-400 font-light max-w-xl mx-auto leading-[1.8] opacity-0"
        >
          Our presence is measured not by the number of countries on a map, but
          by the depth of our commitment to each community, each landscape, and
          each person we serve.
        </p>
      </div>

      <div className="absolute bottom-12">
        <p className="text-[9px] tracking-[0.35em] uppercase text-neutral-300 font-light">
          Global Mining Corporation
        </p>
      </div>
    </section>
  );
}
