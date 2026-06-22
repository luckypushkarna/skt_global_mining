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
    "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125465/skt_global_mining/Underground%20Workshop-card.webp",
    "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp",
    "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125388/skt_global_mining/Mechanised%20Fleet-card.webp",
    
    // Services Section
    "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125406/skt_global_mining/Production%20Development-card.webp",
    
    // Team & Chairman section
    "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125422/skt_global_mining/Sahil%20Talreja.webp",
    "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125409/skt_global_mining/Raj%20Sir%20Photo.webp",
  ];

  usePrefetchImages({
    images: belowFoldImages,
    priority: "idle",
  });

  return null;
}
