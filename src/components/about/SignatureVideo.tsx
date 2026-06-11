"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SignatureVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: stickyRef.current,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        maskRef.current,
        {
          clipPath: "inset(15% 25% 15% 25% round 16px)",
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          duration: 0.6,
          ease: "power2.inOut",
        }
      )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          0.4
        )
        .to(
          textRef.current,
          { opacity: 0, y: -20, duration: 0.2, ease: "power2.in" },
          0.8
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div ref={stickyRef} className="h-screen relative overflow-hidden">
        <div ref={maskRef} className="absolute inset-0">
          <div ref={videoRef} className="w-full h-full bg-neutral-900 relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
              poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-industrial-machinery-702-large.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-neutral-900/30" />
          </div>
        </div>

        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center z-10 opacity-0"
        >
          <div className="text-center px-6">
            <p className="text-[11px] tracking-[0.35em] uppercase text-white/50 mb-6 font-medium">
              Our World
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08] max-w-3xl mx-auto"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Where ambition meets
              <br />
              the earth
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
