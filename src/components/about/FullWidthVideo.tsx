"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FullWidthVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoWrapRef.current,
        {
          scale: 0.85,
          borderRadius: "24px",
          opacity: 0,
        },
        {
          scale: 1,
          borderRadius: "0px",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0.6 },
        {
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-8 md:py-0">
      <div ref={videoWrapRef} className="relative w-full overflow-hidden">
        <div className="aspect-video w-full bg-neutral-100 relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=1920&h=1080&fit=crop"
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

          <div className="absolute inset-0 flex items-end p-8 md:p-16">
            <p className="text-white/70 text-[11px] tracking-[0.25em] uppercase font-medium">
              Our Operations - Global Reach
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
