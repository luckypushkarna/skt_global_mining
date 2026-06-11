"use client";

import React from "react";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════
// BASE SKELETON
// ═══════════════════════════════════════════════════════════

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "text" | "circle" | "rectangle" | "image";
}

export function Skeleton({
  className,
  variant = "default",
  ...props
}: SkeletonProps) {
  const variantStyles = {
    default: "rounded-lg",
    text: "rounded-md h-4",
    circle: "rounded-full aspect-square",
    rectangle: "rounded-xl",
    image: "rounded-xl aspect-[4/3]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-100",
        "before:absolute before:inset-0",
        "before:-translate-x-full",
        "before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r",
        "before:from-transparent before:via-white/60 before:to-transparent",
        variantStyles[variant],
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

// ═══════════════════════════════════════════════════════════
// PRESET SKELETONS - For common UI patterns
// ═══════════════════════════════════════════════════════════

// ── Card Skeleton (Services, Capabilities) ──
export function CardSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-neutral-200 rounded-2xl">
      <Skeleton variant="circle" className="w-10 h-10" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-full" />
        <Skeleton variant="text" className="w-5/6" />
      </div>
    </div>
  );
}

// ── Image Card Skeleton (Gallery, Hero cards) ──
export function ImageCardSkeleton({ aspectRatio = "aspect-[4/3]" }: { aspectRatio?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className={cn("w-full rounded-xl", aspectRatio)} />
      <Skeleton variant="text" className="w-3/4 h-3" />
      <Skeleton variant="text" className="w-1/2 h-3" />
    </div>
  );
}

// ── Team Member Skeleton ──
export function TeamMemberSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full aspect-[3/4] rounded-xl" />
      <div className="space-y-2">
        <Skeleton variant="text" className="w-2/3" />
        <Skeleton variant="text" className="w-1/2 h-3" />
      </div>
    </div>
  );
}

// ── Stat Skeleton ──
export function StatSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-24 h-12" />
      <Skeleton variant="text" className="w-32 h-3" />
    </div>
  );
}

// ── Text Block Skeleton ──
export function TextBlockSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn(
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

// ── Section Header Skeleton ──
export function SectionHeaderSkeleton() {
  return (
    <div className="space-y-4 mb-12">
      <Skeleton variant="text" className="w-32 h-3" />
      <Skeleton className="w-2/3 h-10" />
      <Skeleton variant="text" className="w-1/2 h-4" />
    </div>
  );
}

// ── Map Skeleton ──
export function MapSkeleton() {
  return (
    <div className="w-full h-[500px] lg:h-[600px] rounded-2xl bg-neutral-100 relative overflow-hidden border border-neutral-200">
      <div className="absolute inset-0 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent" />
      
      {/* Fake map markers */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-neutral-300" />
      <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-neutral-400" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-neutral-300" />
    </div>
  );
}

// ── Hero Skeleton ──
export function HeroSkeleton() {
  return (
    <div className="w-full h-screen min-h-[600px] bg-skt-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900" />
      
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col justify-end pb-20">
        <div className="space-y-4">
          <div className="w-32 h-3 bg-white/10 rounded animate-pulse" />
          <div className="w-2/3 h-16 bg-white/10 rounded animate-pulse" />
          <div className="w-1/2 h-16 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
