"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CompanyNarrative() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!wordsRef.current) return;

      const words = wordsRef.current.querySelectorAll(".narrative-word");

      gsap.set(words, { opacity: 0.08 });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const narrativeText =
    "We are a global mining and infrastructure corporation built on the conviction that responsible resource development can transform communities, power economies, and shape a more sustainable future. For over five decades, we have operated with discipline, integrity, and an unwavering commitment to the people and environments we touch.";

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-neutral-400 mb-6 md:mb-8 font-light">
          Our Story
        </span>

        <div ref={wordsRef}>
          <p
            className="text-[clamp(1.5rem,3.5vw,3.2rem)] font-extralight text-neutral-900 leading-[1.4] tracking-[-0.01em]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {narrativeText.split(" ").map((word, i) => (
              <span key={i} className="narrative-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
