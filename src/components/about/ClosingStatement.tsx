"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClosingStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "power3.out",
        }
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
          line2Ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-36 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 bg-neutral-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={line1Ref} className="overflow-hidden opacity-0">
          <p
            className="text-[clamp(1.8rem,5vw,4.5rem)] font-extralight text-white leading-[1.15] tracking-[-0.03em]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            The resources we develop today will shape the world our children
            inherit tomorrow.
          </p>
        </div>

        <div
          ref={dividerRef}
          className="w-20 h-[1px] bg-white/20 mx-auto my-10 md:my-14 origin-center"
          style={{ transform: "scaleX(0)" }}
        />

        <div ref={line2Ref} className="opacity-0">
          <p
            className="text-xl md:text-2xl font-extralight text-white/40 tracking-[-0.01em]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            This is why we exist.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-light">
          Est. 1968
        </p>
      </div>
    </section>
  );
}
