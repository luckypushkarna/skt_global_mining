"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StoryImage {
  src: string;
  alt: string;
  layout: "full" | "left" | "right" | "portrait-left" | "portrait-right";
  caption?: string;
}

const images: StoryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop",
    alt: "Mining operations at dawn",
    layout: "full",
    caption: "Sunrise over our flagship operations",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop",
    alt: "Infrastructure development",
    layout: "left",
    caption: "Building infrastructure that endures",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=1200&fit=crop",
    alt: "Engineering precision",
    layout: "portrait-right",
    caption: "Precision in every detail",
  },
  {
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&h=900&fit=crop",
    alt: "Sustainable landscape",
    layout: "full",
    caption: "Landscapes we protect",
  },
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop",
    alt: "Heavy machinery",
    layout: "right",
    caption: "Scale meets precision",
  },
];

function StoryImageBlock({ image }: { image: StoryImage }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          scale: 1.15,
          opacity: 0,
          y: 60,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (captionRef.current) {
        gsap.fromTo(
          captionRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: blockRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const imgTarget = imgRef.current?.querySelector("img");
      if (imgTarget) {
        gsap.to(imgTarget, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, blockRef);

    return () => ctx.revert();
  }, []);

  const layoutClasses: Record<string, string> = {
    full: "w-full",
    left: "w-full md:w-[70%] md:mr-auto",
    right: "w-full md:w-[70%] md:ml-auto",
    "portrait-left": "w-full md:w-[45%] md:mr-auto",
    "portrait-right": "w-full md:w-[45%] md:ml-auto",
  };

  const aspectClasses: Record<string, string> = {
    full: "aspect-[16/9]",
    left: "aspect-[3/2]",
    right: "aspect-[3/2]",
    "portrait-left": "aspect-[3/4]",
    "portrait-right": "aspect-[3/4]",
  };

  return (
    <div
      ref={blockRef}
      className={`${layoutClasses[image.layout]} mb-20 md:mb-32 lg:mb-40`}
    >
      <div
        ref={imgRef}
        className={`relative ${aspectClasses[image.layout]} overflow-hidden bg-neutral-100`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover scale-[1.1]"
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
      </div>
      {image.caption && (
        <p
          ref={captionRef}
          className="mt-4 md:mt-6 text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 font-medium opacity-0"
        >
          {image.caption}
        </p>
      )}
    </div>
  );
}

export default function ImageStorySequence() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        {images.map((image, index) => (
          <StoryImageBlock key={index} image={image} />
        ))}
      </div>
    </section>
  );
}
