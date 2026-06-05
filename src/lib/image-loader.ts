/**
 * Custom Next.js Image loader optimized for mobile devices.
 * Returns smaller, faster images for mobile viewports.
 */

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export function mobileOptimizedLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  // Detect mobile by width
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  
  // Adjust quality based on device
  const optimizedQuality = quality || (isMobile ? 70 : isTablet ? 80 : 85);
  
  // For local images, use Next.js default behavior
  if (src.startsWith("/")) {
    return `${src}?w=${width}&q=${optimizedQuality}`;
  }
  
  // For external images (CDN)
  return `${src}?w=${width}&q=${optimizedQuality}&auto=format`;
}

/**
 * Generate srcSet for responsive images
 */
export function generateSrcSet(baseSrc: string): string {
  const widths = [320, 640, 768, 1024, 1280, 1920];
  return widths
    .map((w) => `${mobileOptimizedLoader({ src: baseSrc, width: w })} ${w}w`)
    .join(", ");
}

/**
 * Detect device capabilities for adaptive loading
 */
export function getDeviceCapabilities() {
  if (typeof window === "undefined") {
    return { isMobile: false, isLowEnd: false, prefersReducedData: false };
  }

  const connection = (navigator as any).connection;
  const memory = (navigator as any).deviceMemory;
  
  return {
    isMobile: window.innerWidth <= 768,
    isLowEnd: memory ? memory < 4 : false,
    prefersReducedData: connection?.saveData || false,
    effectiveType: connection?.effectiveType || "4g",
    isSlowConnection: 
      connection?.effectiveType === "slow-2g" || 
      connection?.effectiveType === "2g",
  };
}
