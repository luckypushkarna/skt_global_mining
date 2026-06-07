"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface Region {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  layout: "full" | "left" | "right";
}

const regions: Region[] = [
  {
    name: "Western Australia",
    subtitle: "Iron Ore & Gold",
    description:
      "The Pilbara and Goldfields regions form the backbone of our extraction portfolio, where vast open-pit operations meet cutting-edge autonomous technology.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=1000&fit=crop",
    layout: "full",
  },
  {
    name: "South America",
    subtitle: "Copper & Lithium",
    description:
      "High-altitude operations across Chile and Argentina, producing the critical minerals that power the global energy transition.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&h=900&fit=crop",
    layout: "left",
  },
  {
    name: "Southern Africa",
    subtitle: "Platinum & Diamonds",
    description:
      "Deep-level mining expertise developed over decades, combined with strong community partnerships and workforce development programs.",
    image:
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1400&h=900&fit=crop",
    layout: "right",
  },
  {
    name: "Northern Europe",
    subtitle: "Engineering & Technology",
    description:
      "Our technology and engineering centres in Scandinavia drive innovation across autonomous systems, processing efficiency, and environmental solutions.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=1000&fit=crop",
    layout: "full",
  },
];

function RegionBlock({ region }: { region: Region }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(blockRef, { once: false, amount: 0.2 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -50,
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

  const layoutConfig = {
    full: {
      wrapper: "w-full",
      imageAspect: "aspect-[2.2/1]",
      textPosition: "mt-8 md:mt-12",
      textAlign: "",
      grid: "grid grid-cols-1",
    },
    left: {
      wrapper: "w-full",
      imageAspect: "aspect-[3/2]",
      textPosition: "",
      textAlign: "",
      grid: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end",
    },
    right: {
      wrapper: "w-full",
      imageAspect: "aspect-[3/2]",
      textPosition: "",
      textAlign: "lg:text-right",
      grid: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end",
    },
  };

  const config = layoutConfig[region.layout];

  if (region.layout === "full") {
    return (
      <div
        ref={blockRef}
        className="mb-28 md:mb-40 lg:mb-52 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28"
      >
        <motion.div
          ref={imageWrapRef}
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 80, scale: 0.96 }
          }
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden bg-neutral-100"
        >
          <div className={config.imageAspect + " overflow-hidden"}>
            <img
              ref={imageRef}
              src={region.image}
              alt={region.name}
              className="w-full h-[120%] object-cover will-change-transform"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className={config.textPosition}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-light block mb-2">
                {region.subtitle}
              </span>
              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 tracking-[-0.03em]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {region.name}
              </h3>
            </div>
            <p className="text-sm md:text-base text-neutral-400 font-light max-w-lg leading-[1.8] md:text-right">
              {region.description}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  const isLeft = region.layout === "left";

  return (
    <div
      ref={blockRef}
      className="mb-28 md:mb-40 lg:mb-52 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28"
    >
      <div className={config.grid}>
        <motion.div
          ref={imageWrapRef}
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 80, scale: 0.96 }
          }
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`overflow-hidden bg-neutral-100 ${
            isLeft
              ? "lg:col-span-8 lg:col-start-1"
              : "lg:col-span-8 lg:col-start-5 lg:order-2"
          }`}
        >
          <div className={config.imageAspect + " overflow-hidden"}>
            <img
              ref={imageRef}
              src={region.image}
              alt={region.name}
              className="w-full h-[120%] object-cover will-change-transform"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className={`${
            isLeft
              ? "lg:col-span-4 lg:col-start-9"
              : "lg:col-span-4 lg:col-start-1 lg:order-1"
          } ${config.textAlign} self-end pb-2`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-light block mb-2">
            {region.subtitle}
          </span>
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-extralight text-neutral-900 tracking-[-0.03em] mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {region.name}
          </h3>
          <p className="text-sm text-neutral-400 font-light leading-[1.8]">
            {region.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function OperationsShowcase() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-32 md:pt-48 lg:pt-64 pb-8">
      <div
        ref={headerRef}
        className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-28 mb-20 md:mb-28 opacity-0"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 font-light block mb-6">
          Operations
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-900 tracking-[-0.03em] max-w-2xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Where the earth yields its greatest resources
        </h2>
      </div>

      {regions.map((region, i) => (
        <RegionBlock key={i} region={region} />
      ))}
    </section>
  );
}
