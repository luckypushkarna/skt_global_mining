"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const eras = [
  {
    label: "Past",
    period: "1968 — 2000",
    title: "Foundation",
    description:
      "From a single exploration license to a regional mining enterprise, the early decades were defined by geological discovery, disciplined capital deployment, and the formation of a safety-first culture that would become our enduring signature.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&h=600&fit=crop",
  },
  {
    label: "Present",
    period: "2000 — 2024",
    title: "Transformation",
    description:
      "A generation of growth across four continents — embracing technology, committing to sustainability, diversifying into infrastructure, and proving that scale and responsibility are not opposing forces but complementary ones.",
    image:
      "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=900&h=600&fit=crop",
  },
  {
    label: "Future",
    period: "2025 — Beyond",
    title: "Legacy",
    description:
      "The chapters ahead will be written by those who understand that mining's greatest contribution is not what we extract, but what we build — for communities, for economies, and for the generations who will inherit both our resources and our responsibilities.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=600&fit=crop",
  },
];

function TimelineEra({
  era,
  index,
}: {
  era: (typeof eras)[0];
  index: number;
}) {
  const eraRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: eraRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eraRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eraRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, eraRef);

    return () => ctx.revert();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={eraRef}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 py-8 md:py-12"
    >
      {/* Vertical line */}
      <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 flex justify-center">
        <div
          ref={lineRef}
          className="w-[1px] h-full bg-neutral-200 origin-top"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      {/* Dot */}
      <div className="absolute left-8 lg:left-1/2 top-8 md:top-12 -translate-x-1/2 z-10">
        <div className="w-3 h-3 rounded-full bg-neutral-900 ring-4 ring-white" />
      </div>

      <div
        ref={contentRef}
        className={`lg:col-span-5 pl-16 lg:pl-0 opacity-0 ${isEven ? "lg:col-start-1 lg:pr-16 lg:text-right" : "lg:col-start-8 lg:pl-16"
          }`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-light">
          {era.label}
        </span>
        <p className="text-sm text-neutral-400 font-light mt-1 mb-6">
          {era.period}
        </p>
        <h3
          className="text-3xl md:text-4xl font-extralight text-neutral-900 tracking-[-0.02em] mb-6"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {era.title}
        </h3>
        <p className="text-base text-neutral-500 font-light leading-[1.8] max-w-lg">
          {era.description}
        </p>
      </div>

      <div
        ref={imageRef}
        className={`lg:col-span-5 pl-16 lg:pl-0 opacity-0 ${isEven ? "lg:col-start-7 lg:pl-16" : "lg:col-start-1 lg:pr-16 lg:row-start-1"
          }`}
      >
        <div className="overflow-hidden">
          <img
            src={era.image}
            alt={era.title}
            className="w-full aspect-[3/2] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function VisualTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
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
      className="py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={titleRef} className="mb-8 md:mb-12 text-center opacity-0">
          <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-neutral-400 mb-6 font-light">
            Our Journey
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 tracking-[-0.02em]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Built through generations
          </h2>
        </div>

        <div className="relative">
          {eras.map((era, i) => (
            <TimelineEra key={i} era={era} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
