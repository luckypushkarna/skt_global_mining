import type React from "react";
import { generateMetadata } from "@/lib/seo";
import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel";

export const metadata = generateMetadata({
  title: "Chairperson's Message",
  description: "A message from the Chairperson of SKT Global Mining & Services Limited on sustainable extraction, human potential, and safe operations.",
  path: "/about/chairperson-message",
});

export default function ChairpersonMessagePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Page header — constrained, centred, above the grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-10">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
            <span className="w-4 h-px bg-neutral-300 inline-block" />
            Leadership Vision
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1]">
            Chairperson&apos;s<br />
            <span className="text-neutral-400">Message</span>
          </h1>
        </div>
      </div>

      {/* Full-bleed enterprise grid — aligns with nav's max-width via inner padding */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pb-20">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
