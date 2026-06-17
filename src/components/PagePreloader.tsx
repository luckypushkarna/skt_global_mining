"use client";

import { usePrefetchImages } from "@/hooks/use-prefetch-images";

/**
 * Sits at the top of your homepage to prefetch images 
 * needed in below-the-fold sections.
 * 
 * Smart enough to:
 * - Skip on slow connections
 * - Skip if user has data-saver
 * - Wait for browser idle time
 * - Only prefetch what's actually needed
 */
export function PagePreloader() {
  // Critical images for below-the-fold sections
  const belowFoldImages = [
    // Services section (marquee cards)
    "/Underground Workshop-card.webp",
    "/Strategic Warehousing.webp",
    "/Mechanised Fleet-card.webp",
    
    // Services Section
    "/Production Development-card.webp",
    
    // Team & Chairman section
    "/Sahil Talreja.webp",
    "/Raj Sir Photo.webp",
  ];

  usePrefetchImages({
    images: belowFoldImages,
    priority: "idle",
  });

  return null;
}
