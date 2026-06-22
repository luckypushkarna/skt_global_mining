import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Infrastructure Projects",
  description:
    "Explore SKT Global's mining infrastructure projects and operational systems.",
  path: "/projects",
});

export default function ProjectsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-skt-navy text-white">
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-white/40 uppercase mb-6">
              Infrastructure
            </p>
            <h1 className="text-6xl md:text-8xl tracking-tight leading-none mb-8 font-serif font-normal">
              Projects
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
              Mining infrastructure built around mechanised operations,
              workforce systems, logistics, and continuous underground support.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-skt-navy aspect-square shadow-2xl">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="https://res.cloudinary.com/dxhwcq1eg/video/upload/v1782125539/skt_global_mining/videos/projects-infrastructure-optimized.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-white/5" />
          </div>
        </div>
      </section>
    </main>
  );
}
