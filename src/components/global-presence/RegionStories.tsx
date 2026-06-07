"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
    caption: "Rehabilitation programs restoring land to its natural state",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1100&fit=crop",
    caption: "Infrastructure that serves communities for generations",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop",
    caption: "Protecting the landscapes we are privileged to operate within",
  },
] as const;

export default function RegionStories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(
          img,
          {
            opacity: 0,
            y: 100,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const innerImg = img.querySelector("img");
        if (innerImg) {
          gsap.to(innerImg, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 xl:px-28"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* First image — large landscape */}
          <div
            ref={(el) => {
              imagesRef.current[0] = el;
            }}
            className="lg:col-span-8 opacity-0"
          >
            <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
              <img
                src={stories[0].image}
                alt={stories[0].caption}
                className="w-full h-[115%] object-cover will-change-transform"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-light">
              {stories[0].caption}
            </p>
          </div>

          {/* Second image — tall portrait */}
          <div
            ref={(el) => {
              imagesRef.current[1] = el;
            }}
            className="lg:col-span-4 opacity-0"
          >
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
              <img
                src={stories[1].image}
                alt={stories[1].caption}
                className="w-full h-[115%] object-cover will-change-transform"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-light">
              {stories[1].caption}
            </p>
          </div>

          {/* Third image — full width */}
          <div
            ref={(el) => {
              imagesRef.current[2] = el;
            }}
            className="lg:col-span-12 mt-8 md:mt-12 opacity-0"
          >
            <div className="aspect-[21/9] overflow-hidden bg-neutral-100">
              <img
                src={stories[2].image}
                alt={stories[2].caption}
                className="w-full h-[115%] object-cover will-change-transform"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-light">
              {stories[2].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
