"use client";
import { JSX } from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { ArrowRight } from "lucide-react";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";
import DotField from "@/components/ui/DotField";

export function GallerySection(): JSX.Element {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-section-heading"
      className="relative z-[1] bg-skt-navy isolate"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
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

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
              Operations Gallery
            </span>

            <h2
              id="gallery-section-heading"
              className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1]"
            >
              Inside Our
              <br />
              <span className="text-white/40">Operations</span>
            </h2>
          </div>
          
          <Link href="/media/photo-gallery" passHref legacyBehavior>
            <Button variant="secondary" className="shrink-0 group">
              Explore Full Gallery
              <ArrowRight className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Immersive Scroll Gallery */}
      <ImmersiveScrollGallery />
    </section>
  );
}
