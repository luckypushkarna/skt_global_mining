"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// Types
interface iIPicture {
  src: string;
  type?: "image" | "video";
  scale: MotionValue<number> | null;
}

interface iImmersiveScrollGalleryProps {
  images?: iIPicture[]; // Optional custom images array
  className?: string; // Optional className for container customization
}

// Constants
const DEFAULT_IMAGES: iIPicture[] = [
  {
    src: "/videos/gallery-sustainability2-optimized.mp4",
    type: "video",
    scale: null,
  },
  {
    src: "/Safety & Compliance.webp",
    type: "image",
    scale: null,
  },
  {
    src: "/Underground Workshop.webp",
    type: "image",
    scale: null,
  },
  {
    src: "/Worker Protection Systems.webp",
    type: "image",
    scale: null,
  },
  {
    src: "/Workforce Facilities.webp",
    type: "image",
    scale: null,
  },
  {
    src: "/Strategic Warehousing.webp",
    type: "image",
    scale: null,
  },
  {
    src: "/Rescue Systems-card.webp",
    type: "image",
    scale: null,
  },
];

const IMAGE_STYLES = [
  "w-[25vw] h-[25vh]", // index 0: center video
  "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
  "w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]",
  "w-[25vw] h-[25vh] left-[27.5vw]",
  "w-[20vw] h-[30vh] top-[30vh] left-[5vw]",
  "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]",
  "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
];

/**
 * ImmersiveScrollGallery Component
 *
 * A scroll-based image zoom effect component that creates a parallax-like experience.
 * Images scale up as the user scrolls, creating an immersive visual effect.
 *
 * @param {ImmersiveScrollGalleryProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images = DEFAULT_IMAGES,
  className = "",
}) => {
  // Refs
  const container = useRef<HTMLDivElement | null>(null);

  // Scroll and transform hooks
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Transform values (Optimized capped scales to prevent giant bitmap repaints and maximize GPU rendering FPS)
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 4.2]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
  const opacityOther = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Assign scales and opacities to images
  const pictures = images.map((img, index) => {
    const isCenter = index === 0;
    const imgScale = [scale4, scale5, scale6, scale5, scale6, scale8, scale9][
      index % 7
    ];
    return {
      ...img,
      scale: imgScale,
      opacity: isCenter ? 1 : opacityOther,
    };
  });

  return (
    <div
      ref={container}
      className={`relative bg-neutral-50 ${className}`}
      style={{ height: "300vh", contain: "layout style paint" }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-50"
        style={{ willChange: "transform" }}
      >
        {/* Zooming Images */}
        {pictures.map(({ src, type = "image", scale, opacity }, index) => {
          if (!scale) return null;

          return (
            <motion.div
              key={index}
              style={{ 
                scale, 
                opacity, 
                translateZ: 0,
                willChange: "transform, opacity",
              }}
              className="absolute flex items-center justify-center w-full h-full top-0"
            >
              <div 
                className={`relative ${IMAGE_STYLES[index]} overflow-hidden rounded-xl border border-neutral-200/10 shadow-2xl`}
                style={{
                  transform: "translate3d(0, 0, 0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              >
                {type === "video" ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="object-cover w-full h-full"
                    style={{
                      transform: "translate3d(0, 0, 0)",
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  />
                ) : (
                  <Image
                    src={src}
                    alt={`Zoom image ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 40vw, 30vw"
                    className="object-cover"
                    loading={index < 3 ? undefined : "lazy"}
                    priority={index < 3}
                    style={{
                      transform: "translate3d(0, 0, 0)",
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
