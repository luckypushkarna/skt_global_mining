"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const impactImages = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop",
    alt: "Mine site operations",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&h=700&fit=crop",
    alt: "Infrastructure project",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&h=900&fit=crop",
    alt: "Our people",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=700&fit=crop",
    alt: "Environmental stewardship",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&h=900&fit=crop",
    alt: "Engineering excellence",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&h=700&fit=crop",
    alt: "Community landscapes",
    size: "medium",
  },
];

function ImpactImage({
  image,
}: {
  image: (typeof impactImages)[0];
}) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, imgRef);

    return () => ctx.revert();
  }, []);

  const aspectMap: Record<string, string> = {
    tall: "aspect-[3/4]",
    wide: "aspect-[16/10]",
    medium: "aspect-[4/3]",
  };

  return (
    <div ref={imgRef} className="opacity-0">
      <div className={`${aspectMap[image.size]} overflow-hidden bg-neutral-100`}>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[1.5s] ease-out"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function ImpactImagery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={titleRef} className="mb-8 md:mb-12 opacity-0">
          <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-neutral-400 mb-6 font-light">
            Impact
          </span>
          <h2
            className="text-3xl md:text-4xl font-extralight text-neutral-900 tracking-[-0.02em] max-w-xl"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            The world we build, in every frame
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-4 md:space-y-6">
            {impactImages
              .filter((_, i) => i % 2 === 0)
              .map((image, i) => (
                <ImpactImage key={i} image={image} />
              ))}
          </div>
          <div className="space-y-4 md:space-y-6 md:mt-24">
            {impactImages
              .filter((_, i) => i % 2 === 1)
              .map((image, i) => (
                <ImpactImage key={i} image={image} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
