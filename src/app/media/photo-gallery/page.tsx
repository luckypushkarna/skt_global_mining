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
  { id: 3, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125408/skt_global_mining/Production%20Development.webp", alt: "Development work" },
  { id: 4, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance.webp", alt: "Engineering & Maintenance" },
  { id: 5, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", alt: "Logistics Network" },
  { id: 6, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/operational-command-new.webp", alt: "Operational Command" },
  { id: 7, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp", alt: "Rescue Systems" },
  { id: 8, src: "/Safety & Compliance.webp", alt: "Safety & Compliance" },
  { id: 9, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", alt: "Infrastructure Systems" },
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
  { id: 28, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-1.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 29, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-10.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 30, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-11.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 31, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-2.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 32, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-3.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 33, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-4.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 34, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-5.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 35, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-6.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 36, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-7.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 37, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-8.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 38, src: "/gallery-updates/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-9.jpeg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 39, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-1.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 40, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-2.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 41, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-3.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 42, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-4.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 43, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-5.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 44, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-6.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 45, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-7.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 46, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-8.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 47, src: "/gallery-updates/csr-supporting-kantanshi-tennis-club-9.jpeg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 48, src: "/gallery-updates/collecting-boulder-2.jpeg", alt: "Collecting boulder 2" },
  { id: 49, src: "/gallery-updates/collecting-boulder.jpeg", alt: "Collecting boulder" },
  { id: 50, src: "/gallery-updates/dump-box-cleaning-time.jpeg", alt: "Dump box cleaning time" },
  { id: 51, src: "/gallery-updates/grading-work.jpeg", alt: "Grading work" },
  { id: 52, src: "/gallery-updates/hazard-elimination-1.jpeg", alt: "Hazard Elimination" },
  { id: 53, src: "/gallery-updates/hazard-elimination-2.jpeg", alt: "Hazard Elimination" },
  { id: 54, src: "/gallery-updates/hazard-elimination-3.jpeg", alt: "Hazard Elimination" },
  { id: 55, src: "/gallery-updates/hazard-elimination-4.jpeg", alt: "Hazard Elimination" },
  { id: 56, src: "/gallery-updates/hazard-elimination-5.jpeg", alt: "Hazard Elimination" },
  { id: 57, src: "/gallery-updates/hazard-elimination-6.jpeg", alt: "Hazard Elimination" },
  { id: 58, src: "/gallery-updates/skt-mufurila-engineering-team-1.png", alt: "SKT - Mufurila engineering team" },
  { id: 59, src: "/gallery-updates/skt-mufurila-engineering-team-10.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 60, src: "/gallery-updates/skt-mufurila-engineering-team-11.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 61, src: "/gallery-updates/skt-mufurila-engineering-team-12.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 62, src: "/gallery-updates/skt-mufurila-engineering-team-13.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 63, src: "/gallery-updates/skt-mufurila-engineering-team-14.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 64, src: "/gallery-updates/skt-mufurila-engineering-team-15.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 65, src: "/gallery-updates/skt-mufurila-engineering-team-16.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 66, src: "/gallery-updates/skt-mufurila-engineering-team-17.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 67, src: "/gallery-updates/skt-mufurila-engineering-team-18.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 68, src: "/gallery-updates/skt-mufurila-engineering-team-19.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 69, src: "/gallery-updates/skt-mufurila-engineering-team-2.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 70, src: "/gallery-updates/skt-mufurila-engineering-team-20.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 71, src: "/gallery-updates/skt-mufurila-engineering-team-21.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 72, src: "/gallery-updates/skt-mufurila-engineering-team-22.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 73, src: "/gallery-updates/skt-mufurila-engineering-team-23.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 74, src: "/gallery-updates/skt-mufurila-engineering-team-24.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 75, src: "/gallery-updates/skt-mufurila-engineering-team-25.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 76, src: "/gallery-updates/skt-mufurila-engineering-team-26.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 77, src: "/gallery-updates/skt-mufurila-engineering-team-27.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 78, src: "/gallery-updates/skt-mufurila-engineering-team-28.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 79, src: "/gallery-updates/skt-mufurila-engineering-team-29.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 80, src: "/gallery-updates/skt-mufurila-engineering-team-3.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 81, src: "/gallery-updates/skt-mufurila-engineering-team-30.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 82, src: "/gallery-updates/skt-mufurila-engineering-team-31.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 83, src: "/gallery-updates/skt-mufurila-engineering-team-32.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 84, src: "/gallery-updates/skt-mufurila-engineering-team-4.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 85, src: "/gallery-updates/skt-mufurila-engineering-team-5.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 86, src: "/gallery-updates/skt-mufurila-engineering-team-6.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 87, src: "/gallery-updates/skt-mufurila-engineering-team-7.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 88, src: "/gallery-updates/skt-mufurila-engineering-team-8.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 89, src: "/gallery-updates/skt-mufurila-engineering-team-9.jpeg", alt: "SKT - Mufurila engineering team" },
  { id: 90, src: "/gallery-updates/skt-starts-here.jpeg", alt: "SKT starts here" },
  { id: 91, src: "/gallery-updates/sob-site-appreciation-meeting-1.jpeg", alt: "SOB site appreciation meeting " },
  { id: 92, src: "/gallery-updates/sob-site-appreciation-meeting-10.jpeg", alt: "SOB site appreciation meeting " },
  { id: 93, src: "/gallery-updates/sob-site-appreciation-meeting-11.jpeg", alt: "SOB site appreciation meeting " },
  { id: 94, src: "/gallery-updates/sob-site-appreciation-meeting-12.jpeg", alt: "SOB site appreciation meeting " },
  { id: 95, src: "/gallery-updates/sob-site-appreciation-meeting-13.jpeg", alt: "SOB site appreciation meeting " },
  { id: 96, src: "/gallery-updates/sob-site-appreciation-meeting-2.jpeg", alt: "SOB site appreciation meeting " },
  { id: 97, src: "/gallery-updates/sob-site-appreciation-meeting-3.jpeg", alt: "SOB site appreciation meeting " },
  { id: 98, src: "/gallery-updates/sob-site-appreciation-meeting-4.jpeg", alt: "SOB site appreciation meeting " },
  { id: 99, src: "/gallery-updates/sob-site-appreciation-meeting-5.jpeg", alt: "SOB site appreciation meeting " },
  { id: 100, src: "/gallery-updates/sob-site-appreciation-meeting-6.jpeg", alt: "SOB site appreciation meeting " },
  { id: 101, src: "/gallery-updates/sob-site-appreciation-meeting-7.jpeg", alt: "SOB site appreciation meeting " },
  { id: 102, src: "/gallery-updates/sob-site-appreciation-meeting-8.jpeg", alt: "SOB site appreciation meeting " },
  { id: 103, src: "/gallery-updates/sob-site-appreciation-meeting-9.jpeg", alt: "SOB site appreciation meeting " },
  { id: 104, src: "/gallery-updates/sob-site-appreciation-meeting-video.mp4", alt: "SOB site appreciation meeting " },
  { id: 105, src: "/gallery-updates/shaft-road-underground-1.jpeg", alt: "Shaft road Underground" },
  { id: 106, src: "/gallery-updates/shaft-road-underground-10.jpeg", alt: "Shaft road Underground" },
  { id: 107, src: "/gallery-updates/shaft-road-underground-11.jpeg", alt: "Shaft road Underground" },
  { id: 108, src: "/gallery-updates/shaft-road-underground-12.jpeg", alt: "Shaft road Underground" },
  { id: 109, src: "/gallery-updates/shaft-road-underground-13.jpeg", alt: "Shaft road Underground" },
  { id: 110, src: "/gallery-updates/shaft-road-underground-14.jpeg", alt: "Shaft road Underground" },
  { id: 111, src: "/gallery-updates/shaft-road-underground-15.jpeg", alt: "Shaft road Underground" },
  { id: 112, src: "/gallery-updates/shaft-road-underground-16.jpeg", alt: "Shaft road Underground" },
  { id: 113, src: "/gallery-updates/shaft-road-underground-17.jpeg", alt: "Shaft road Underground" },
  { id: 114, src: "/gallery-updates/shaft-road-underground-18.jpeg", alt: "Shaft road Underground" },
  { id: 115, src: "/gallery-updates/shaft-road-underground-19.jpeg", alt: "Shaft road Underground" },
  { id: 116, src: "/gallery-updates/shaft-road-underground-2.jpeg", alt: "Shaft road Underground" },
  { id: 117, src: "/gallery-updates/shaft-road-underground-20.jpeg", alt: "Shaft road Underground" },
  { id: 118, src: "/gallery-updates/shaft-road-underground-21.jpeg", alt: "Shaft road Underground" },
  { id: 119, src: "/gallery-updates/shaft-road-underground-22.jpeg", alt: "Shaft road Underground" },
  { id: 120, src: "/gallery-updates/shaft-road-underground-23.jpeg", alt: "Shaft road Underground" },
  { id: 121, src: "/gallery-updates/shaft-road-underground-24.jpeg", alt: "Shaft road Underground" },
  { id: 122, src: "/gallery-updates/shaft-road-underground-25.jpeg", alt: "Shaft road Underground" },
  { id: 123, src: "/gallery-updates/shaft-road-underground-26.jpeg", alt: "Shaft road Underground" },
  { id: 124, src: "/gallery-updates/shaft-road-underground-27.jpeg", alt: "Shaft road Underground" },
  { id: 125, src: "/gallery-updates/shaft-road-underground-28.jpeg", alt: "Shaft road Underground" },
  { id: 126, src: "/gallery-updates/shaft-road-underground-29.jpeg", alt: "Shaft road Underground" },
  { id: 127, src: "/gallery-updates/shaft-road-underground-3.jpeg", alt: "Shaft road Underground" },
  { id: 128, src: "/gallery-updates/shaft-road-underground-30.jpeg", alt: "Shaft road Underground" },
  { id: 129, src: "/gallery-updates/shaft-road-underground-31.jpeg", alt: "Shaft road Underground" },
  { id: 130, src: "/gallery-updates/shaft-road-underground-32.jpeg", alt: "Shaft road Underground" },
  { id: 131, src: "/gallery-updates/shaft-road-underground-33.jpeg", alt: "Shaft road Underground" },
  { id: 132, src: "/gallery-updates/shaft-road-underground-34.jpeg", alt: "Shaft road Underground" },
  { id: 133, src: "/gallery-updates/shaft-road-underground-4.jpeg", alt: "Shaft road Underground" },
  { id: 134, src: "/gallery-updates/shaft-road-underground-5.jpeg", alt: "Shaft road Underground" },
  { id: 135, src: "/gallery-updates/shaft-road-underground-6.jpeg", alt: "Shaft road Underground" },
  { id: 136, src: "/gallery-updates/shaft-road-underground-7.jpeg", alt: "Shaft road Underground" },
  { id: 137, src: "/gallery-updates/shaft-road-underground-8.jpeg", alt: "Shaft road Underground" },
  { id: 138, src: "/gallery-updates/shaft-road-underground-9.jpeg", alt: "Shaft road Underground" },
  { id: 139, src: "/gallery-updates/tag-board-and-blasting-point.jpeg", alt: "Tag board and blasting point" },
  { id: 140, src: "/gallery-updates/tyre-workshop-and-management-office-1.jpeg", alt: "Tyre workshop and management office" },
  { id: 141, src: "/gallery-updates/tyre-workshop-and-management-office-2.jpeg", alt: "Tyre workshop and management office" },
  { id: 142, src: "/gallery-updates/tyre-workshop-and-management-office-3.jpeg", alt: "Tyre workshop and management office" },
  { id: 143, src: "/gallery-updates/tyre-workshop-and-management-office-4.jpeg", alt: "Tyre workshop and management office" },
  { id: 144, src: "/gallery-updates/tyre-workshop-and-management-office-5.jpeg", alt: "Tyre workshop and management office" },
  { id: 145, src: "/gallery-updates/drill-point.jpeg", alt: "drill point" },
  { id: 146, src: "/gallery-updates/loaded-truck.jpeg", alt: "loaded truck" },
  { id: 147, src: "/gallery-updates/loading-the-truck.jpeg", alt: "loading the truck" },
  { id: 148, src: "/gallery-updates/underground-water-1.jpeg", alt: "underground water 1" },
  { id: 149, src: "/gallery-updates/underground-water-2.jpeg", alt: "underground water 2" },
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
