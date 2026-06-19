"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClosing() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  const headingText = "We are more than a mining company. We are a partner in progress and a catalyst for economic growth.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!wordsRef.current) return;

      const words = wordsRef.current.querySelectorAll(".narrative-word");

      gsap.set(words, { opacity: 0.1 });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-neutral-950 text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={wordsRef} className="mb-8">
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.2] tracking-tight drop-shadow-md"
            style={{ WebkitTextStroke: "0.5px white" }}
          >
            {headingText.split(" ").map((word, i) => (
              <span key={i} className="narrative-word inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
          </h2>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/90 font-light mb-16"
        >
          Creating sustainable value for all stakeholders across the global mining sector.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/careers"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
          >
            Join Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/partners/become-partner"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
