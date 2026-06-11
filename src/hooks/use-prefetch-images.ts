"use client";

import React, { useEffect } from "react";

interface UsePrefetchImagesOptions {
  images: string[];
  enabled?: boolean;
  /**
   * Priority - when to start prefetching
   * - 'immediate' = right away
   * - 'idle' = when browser is idle
   * - 'visible' = when section is near viewport
   */
  priority?: "immediate" | "idle" | "visible";
  targetRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Preloads images in the background for snappy page transitions.
 * Mobile-optimized with idle scheduling.
 */
export function usePrefetchImages({
  images,
  enabled = true,
  priority = "idle",
  targetRef,
}: UsePrefetchImagesOptions) {
  useEffect(() => {
    if (!enabled || images.length === 0) return;
    if (typeof window === "undefined") return;

    // Check if user has data-saver enabled (respect mobile users)
    const connection = (navigator as any).connection;
    if (connection?.saveData) {
      console.log("Data saver enabled - skipping image prefetch");
      return;
    }

    // Check connection speed - skip on slow networks
    if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
      console.log("Slow connection - skipping image prefetch");
      return;
    }

    const prefetchImages = () => {
      images.forEach((src) => {
        // Avoid prefetching same image multiple times
        if (document.querySelector(`link[href="${src}"]`)) return;

        const link = document.createElement("link");
        link.rel = "prefetch";
        link.as = "image";
        link.href = src;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    let cleanupFn: (() => void) | undefined = undefined;

    // ── PRIORITY: IMMEDIATE ──
    if (priority === "immediate") {
      prefetchImages();
    }

    // ── PRIORITY: IDLE ──
    else if (priority === "idle") {
      if ("requestIdleCallback" in window) {
        const idleId = (window as any).requestIdleCallback(prefetchImages, {
          timeout: 2000,
        });
        cleanupFn = () => (window as any).cancelIdleCallback(idleId);
      } else {
        // Fallback for browsers without requestIdleCallback
        const timeoutId = setTimeout(prefetchImages, 1500);
        cleanupFn = () => clearTimeout(timeoutId);
      }
    }

    // ── PRIORITY: VISIBLE (Intersection Observer) ──
    else if (priority === "visible" && targetRef?.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              prefetchImages();
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: "200px", // Start prefetching 200px before visible
          threshold: 0.01,
        }
      );

      observer.observe(targetRef.current);
      cleanupFn = () => observer.disconnect();
    }

    return cleanupFn;
  }, [images, enabled, priority, targetRef]);
}

// ═══════════════════════════════════════════════════════════
// PRELOAD SINGLE IMAGE (Higher priority than prefetch)
// ═══════════════════════════════════════════════════════════

export function preloadImage(src: string) {
  if (typeof window === "undefined") return;
  
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  link.fetchPriority = "high";
  document.head.appendChild(link);
}
