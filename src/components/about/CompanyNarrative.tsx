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
    "SKT Global Mining & Services Limited, a proud subsidiary of Tyre Technocrats India Private Limited, represents TTIPL's strategic investment and long-term commitment to Zambia's mining sector. From inception, our journey has been defined by ambition, speed, and excellence.";

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-6 md:mb-8 font-medium">
          Our Story
        </span>

        <div ref={wordsRef}>
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.1]"
            
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
