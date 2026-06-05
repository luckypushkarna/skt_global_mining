"use client";

import React, { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoad"> {
  skeletonClassName?: string;
  showSkeleton?: boolean;
  fadeInDuration?: number;
}

export function ImageWithSkeleton({
  src,
  alt,
  className,
  skeletonClassName,
  showSkeleton = true,
  fadeInDuration = 400,
  priority = false,
  ...props
}: ImageWithSkeletonProps) {
  // If priority image, skip skeleton (it loads instantly)
  const [isLoaded, setIsLoaded] = useState(priority);

  return (
    <div className="relative w-full h-full">
      {/* Skeleton (shown until image loads) */}
      {showSkeleton && !isLoaded && (
        <Skeleton
          className={cn(
            "absolute inset-0 z-10",
            skeletonClassName
          )}
        />
      )}

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "transition-opacity",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{
          transitionDuration: `${fadeInDuration}ms`,
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)} // Hide skeleton even on error
        {...props}
      />
    </div>
  );
}
