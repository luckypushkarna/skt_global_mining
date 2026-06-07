"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PresenceVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          scale: 0.82,
          borderRadius: "28px",
          opacity: 0,
        },
        {
          scale: 1,
          borderRadius: "0px",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 5%",
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0.7 },
        {
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        captionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: captionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pb-8 md:pb-0">
      <div ref={containerRef} className="relative w-full overflow-hidden opacity-0">
        <div className="aspect-[21/9] w-full bg-neutral-100 relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=1920&h=820&fit=crop"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-mine-48877-large.mp4"
              type="video/mp4"
            />
          </video>
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-neutral-900 pointer-events-none"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors duration-500 group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-1 group-hover:scale-110 transition-transform duration-300"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={captionRef}
        className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28 mt-8 md:mt-12 opacity-0"
      >
        <p className="text-sm md:text-base text-neutral-400 font-light max-w-2xl leading-[1.8]">
          Our global footprint encompasses mining operations, processing
          facilities, logistics networks, and community partnerships across some
          of the earth&apos;s most remarkable geological formations.
        </p>
      </div>
    </section>
  );
}
