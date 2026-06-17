"use client";

import { useRef } from "react";
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
    src: "https://res.cloudinary.com/dxhwcq1eg/video/upload/f_auto,q_auto/skt/center-video.mp4",
    type: "video",
    scale: null,
  },
  {
    src: "/Operation gallery/1.webp?v=3",
    type: "image",
    scale: null,
  },
  {
    src: "/Operation gallery/2.webp?v=3",
    type: "image",
    scale: null,
  },
  {
    src: "/Operation gallery/3.webp?v=3",
    type: "image",
    scale: null,
  },
  {
    src: "/Operation gallery/4.webp?v=3",
    type: "image",
    scale: null,
  },
  {
    src: "/Operation gallery/5.webp?v=3",
    type: "image",
    scale: null,
  },
  {
    src: "/Operation gallery/6.webp?v=3",
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
export default function ImmersiveScrollGallery({
  images = DEFAULT_IMAGES,
  className = "",
}: iImmersiveScrollGalleryProps) {
  // Refs
  const container = useRef<HTMLDivElement | null>(null);

  // Scroll and transform hooks
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Transform values
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
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
      className={`relative ${className}`}
      style={{ height: "300vh", contain: "layout style paint" }}
    >
      {/* ⚡ Optimized: Removed willChange: "transform" from this wrapper to prevent a massive GPU layer from being allocated permanently for a non-animated sticky element */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Zooming Images */}
        {pictures.map(({ src, type = "image", scale, opacity }, index) => {
          if (!scale) return null;

          return (
            <motion.div
              key={index}
              style={{ scale, opacity, willChange: "transform, opacity" }}
              className="absolute flex items-center justify-center w-full h-full top-0"
            >
              <div className={`relative ${IMAGE_STYLES[index]}`}>
                {type === "video" ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="object-cover w-full h-full"
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
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
