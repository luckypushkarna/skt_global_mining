"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const eras = [
  {
    label: "Inception",
    period: "First 6 Months",
    title: "Mobilisation",
    description:
      "Within an extraordinary period of just six months, SKT successfully mobilised a fleet of underground equipment and recruited more than 1,500 Zambian citizens and expatriate experts.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&h=600&fit=crop",
  },
  {
    label: "Growth",
    period: "10 Months",
    title: "Operational Excellence",
    description:
      "Achieved 50% of development and production targets set by Mopani Copper Mines, supported by an initial investment of over US$50 million and 225 underground mining machines.",
    image:
      "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=900&h=600&fit=crop",
  },
  {
    label: "Future",
    period: "Beyond",
    title: "Expansion",
    description:
      "Positioning ourselves for substantial year-on-year growth across Zambia, India, the DRC, and South Africa, while pioneering innovation in mining.",
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
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 font-medium">
          {era.label}
        </span>
        <p className="text-sm text-slate-400 font-medium mt-1 mb-6">
          {era.period}
        </p>
        <h3
          className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6"
          
        >
          {era.title}
        </h3>
        <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal leading-[1.8] max-w-lg">
          {era.description}
        </p>
      </div>

      <div
        ref={imageRef}
        className={`lg:col-span-5 pl-16 lg:pl-0 opacity-0 ${isEven ? "lg:col-start-7 lg:pl-16" : "lg:col-start-1 lg:pr-16 lg:row-start-1"
          }`}
      >
        <div className="relative overflow-hidden w-full aspect-[3/2]">
          <Image
            src={era.image}
            alt={era.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
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
          <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-6 font-medium">
            Our Journey
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight font-serif font-normal"
            
          >
            A Journey of Ambition and Speed
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
