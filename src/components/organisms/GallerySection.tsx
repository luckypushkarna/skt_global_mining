"use client";

import { JSX } from "react";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";

export function GallerySection(): JSX.Element {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-section-heading"
      className="relative z-[1] bg-bg-soft border-t border-slate-200 isolate"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-12">
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
            Operations Gallery
          </span>

          <h2
            id="gallery-section-heading"
            className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-5"
          >
            Inside Our
            <br />
            <span className="text-neutral-300">Operations</span>
          </h2>
        </div>
      </div>

      {/* Immersive Scroll Gallery */}
      <ImmersiveScrollGallery />
    </section>
  );
}
