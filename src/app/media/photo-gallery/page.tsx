"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import DotField from "@/components/ui/DotField";

// Placeholder photos array, replicating the 6 gallery images to show 24 images for masonry testing
const GALLERY_IMAGES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  src: `/Operation gallery/${(i % 6) + 1}.png`,
  alt: `Gallery image ${(i % 6) + 1}`,
}));

export default function PhotoGalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % GALLERY_IMAGES.length));
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <div className="relative bg-skt-navy min-h-screen text-white overflow-hidden isolate pt-32 pb-20">
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="#0F1729"
          gradientTo="#1E6F9F"
          glowColor="rgba(20, 90, 133, 0.4)"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-skt-blue inline-block" />
              Media
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl font-light">
              A visual journey through SKT Global&apos;s operations, facilities, and the people driving our success.
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="relative break-inside-avoid overflow-hidden rounded-xl bg-neutral-900 group cursor-pointer border border-white/5"
              onClick={() => openLightbox(idx)}
            >
              <div 
                className="relative w-full overflow-hidden" 
                style={{ 
                  aspectRatio: idx % 5 === 0 ? "4/5" : idx % 3 === 0 ? "1/1" : "3/2" 
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-skt-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">
                  Expand
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && GALLERY_IMAGES[lightboxIndex] && (
        <div className="fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 text-white">
            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </div>
  );
}
