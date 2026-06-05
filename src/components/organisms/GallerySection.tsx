"use client";

import { JSX } from "react";
import ImmersiveScrollGallery from "@/components/ui/immersive-scroll-gallery";

export function GallerySection(): JSX.Element {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-section-heading"
      className="relative z-[1] bg-bg-soft border-t border-slate-200"
      style={{ isolation: "isolate" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-12">
        <div className="mb-6">
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
              Operations Gallery
            </span>
          </div>

          <h2
            id="gallery-section-heading"
            className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-5"
          >
            Inside Our
            <br />
            <span className="text-neutral-300">Operations</span>
          </h2>

          <p className="text-neutral-600 font-light max-w-xl text-[15px] md:text-base leading-relaxed">
            Scroll down to explore our operations through an immersive visual
            experience.
          </p>
        </div>
      </div>

      {/* Immersive Scroll Gallery */}
      <ImmersiveScrollGallery />
    </section>
  );
}
