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
    // Services section
    "/Underground Workshop.webp",
    "/Strategic Warehousing.webp",
    "/Mechanised Fleet.webp",
    
    // Gallery section
    "/Production Development.webp",
    "/Safety & Compliance.webp",
    
    // Team section
    "/Sahil Talreja.webp",
    "/Raj Sir Photo.webp",
  ];

  usePrefetchImages({
    images: belowFoldImages,
    priority: "idle",
  });

  return null;
}
