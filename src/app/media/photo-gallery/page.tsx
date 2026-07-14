"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import DotField from "@/components/ui/DotField";

const GALLERY_IMAGES = [
  { id: 1, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", alt: "Mechanised Fleet" },
  { id: 2, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", alt: "Underground Workshop" },
  { id: 3, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125408/skt_global_mining/Production%20Development.webp", alt: "Production Development" },
  { id: 4, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance.webp", alt: "Engineering & Maintenance" },
  { id: 5, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125387/skt_global_mining/Logistics%20Network.webp", alt: "Logistics Network" },
  { id: 6, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125405/skt_global_mining/Operational%20Command.webp", alt: "Operational Command" },
  { id: 7, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp", alt: "Rescue Systems" },
  { id: 8, src: "/Safety & Compliance.webp", alt: "Safety & Compliance" },
  { id: 9, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125382/skt_global_mining/Infrastructure%20Systems.webp", alt: "Infrastructure Systems" },
  { id: 10, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125377/skt_global_mining/Future%20Expansion.webp", alt: "Future Expansion" },
  { id: 11, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", alt: "Strategic Warehousing" },
  { id: 12, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp", alt: "Workforce Facilities" },
  { id: 13, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125379/skt_global_mining/Hazard%20Elimination.webp", alt: "Hazard Elimination" },
  { id: 14, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125469/skt_global_mining/Worker%20Protection%20Systems.webp", alt: "Worker Protection Systems" },
  { id: 15, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp", alt: "Community Safety Culture" },
  { id: 16, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp", alt: "Continuous Training" },
  { id: 17, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125373/skt_global_mining/Emergency%20Readiness.webp", alt: "Emergency Readiness" },
  { id: 18, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125479/skt_global_mining/diesel-bowser.jpg", alt: "Diesel Bowser" },
  { id: 19, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125502/skt_global_mining/lmv-monitoring.jpg", alt: "LMV Monitoring" },
  { id: 20, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125518/skt_global_mining/passenger-carrier.jpg", alt: "Passenger Carrier" },
  { id: 21, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125527/skt_global_mining/utility-vehicle.jpg", alt: "Utility Vehicle" },
  { id: 22, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125492/skt_global_mining/gaadi-jcb.webp", alt: "Mining Equipment" },
  { id: 23, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125478/skt_global_mining/bolter-support.webp", alt: "Bolter Support" },
  { id: 24, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125481/skt_global_mining/drill-rig.webp", alt: "Drill Rig" },
  { id: 25, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125501/skt_global_mining/lhd-loader.webp", alt: "LHD Loader" },
  { id: 26, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125523/skt_global_mining/underground-truck.webp", alt: "Underground Truck" },
  { id: 27, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125513/skt_global_mining/newsroom-hero-bg.webp", alt: "Operations Overview" },
];

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
    <div className="relative bg-neutral-950 min-h-screen text-white overflow-hidden isolate pt-32 pb-32">
      <div className="fixed inset-0 z-0 pointer-events-auto opacity-40">
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

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-neutral-600" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400">
                Media Center
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6 font-serif font-normal">
              Photo Gallery
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
              A visual journey through SKT Global&apos;s underground operations, high-tech facilities, and the people driving our success across the Copperbelt.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-4xl font-serif text-white">{GALLERY_IMAGES.length}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mt-2">Total Captures</p>
          </div>
        </div>

        {/* Premium Bento Box Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 grid-flow-dense auto-rows-[200px] md:auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, idx) => {
            const isLarge = idx % 8 === 0;
            const isWide = idx % 7 === 4 && !isLarge;
            const isTall = idx % 5 === 2 && !isLarge && !isWide;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (idx % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden group cursor-pointer bg-neutral-900 border border-white/5 ${
                  isLarge ? "col-span-2 row-span-2" : 
                  isWide ? "col-span-2 row-span-1" : 
                  isTall ? "col-span-1 row-span-2" : 
                  "col-span-1 row-span-1"
                }`}
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-white text-lg md:text-xl font-light tracking-wide">{img.alt}</span>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest mt-2 font-bold flex items-center gap-2">
                    <span className="w-4 h-px bg-neutral-400" /> View Image
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && GALLERY_IMAGES[lightboxIndex] && (
        <div className="fixed inset-0 z-[100] bg-neutral-950/98 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white"
          >
            <X className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-[80vw] h-full max-h-[85vh] rounded-xl overflow-hidden shadow-2xl bg-neutral-900/50 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-1">
              <Image
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="p-6 bg-neutral-900 border-t border-white/10 flex justify-between items-center">
              <span className="text-white text-lg font-light tracking-wide">{GALLERY_IMAGES[lightboxIndex].alt}</span>
              <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-[0.2em] text-white">
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
