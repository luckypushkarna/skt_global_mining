"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import DotField from "@/components/ui/DotField";

const GALLERY_IMAGES = [
  { id: 8, src: "/Safety & Compliance.webp", alt: "Safety & Compliance" },
  { id: 28, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410511/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-1.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 29, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410512/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-10.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 30, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410513/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-11.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 31, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410516/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-2.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 32, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410517/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-3.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 33, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410518/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-4.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 34, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410519/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-5.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 35, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410521/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-6.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 36, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410522/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-7.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 37, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410524/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-8.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 38, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410525/skt_global_mining/a-tour-at-skt-facility-by-our-area-mp-hon-abel-banda-mr-9.jpg", alt: "A tour at SKT facility by our area MP Hon. Abel Banda (Mr.)" },
  { id: 39, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410528/skt_global_mining/csr-supporting-kantanshi-tennis-club-1.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 40, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410530/skt_global_mining/csr-supporting-kantanshi-tennis-club-2.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 41, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410531/skt_global_mining/csr-supporting-kantanshi-tennis-club-3.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 42, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410532/skt_global_mining/csr-supporting-kantanshi-tennis-club-4.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 43, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410533/skt_global_mining/csr-supporting-kantanshi-tennis-club-5.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 44, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410535/skt_global_mining/csr-supporting-kantanshi-tennis-club-6.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 45, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410536/skt_global_mining/csr-supporting-kantanshi-tennis-club-7.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 46, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410537/skt_global_mining/csr-supporting-kantanshi-tennis-club-8.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 47, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410538/skt_global_mining/csr-supporting-kantanshi-tennis-club-9.jpg", alt: "CSR (supporting kantanshi tennis club)" },
  { id: 48, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410526/skt_global_mining/collecting-boulder-2.jpg", alt: "Collecting boulder 2" },
  { id: 49, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410527/skt_global_mining/collecting-boulder.jpg", alt: "Collecting boulder" },
  { id: 50, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410540/skt_global_mining/dump-box-cleaning-time.jpg", alt: "Dump box cleaning time" },
  { id: 51, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410541/skt_global_mining/grading-work.jpg", alt: "Grading work" },
  { id: 52, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410542/skt_global_mining/hazard-elimination-1.jpg", alt: "Hazard Elimination" },
  { id: 53, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410544/skt_global_mining/hazard-elimination-2.jpg", alt: "Hazard Elimination" },
  { id: 54, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410545/skt_global_mining/hazard-elimination-3.jpg", alt: "Hazard Elimination" },
  { id: 55, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410546/skt_global_mining/hazard-elimination-4.jpg", alt: "Hazard Elimination" },
  { id: 56, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410549/skt_global_mining/hazard-elimination-5.jpg", alt: "Hazard Elimination" },
  { id: 57, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410550/skt_global_mining/hazard-elimination-6.jpg", alt: "Hazard Elimination" },
  { id: 58, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410615/skt_global_mining/skt-mufurila-engineering-team-1.png", alt: "SKT - Mufurila engineering team" },
  { id: 59, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410616/skt_global_mining/skt-mufurila-engineering-team-10.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 60, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410618/skt_global_mining/skt-mufurila-engineering-team-11.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 61, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410619/skt_global_mining/skt-mufurila-engineering-team-12.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 62, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410620/skt_global_mining/skt-mufurila-engineering-team-13.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 63, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410622/skt_global_mining/skt-mufurila-engineering-team-14.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 64, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410624/skt_global_mining/skt-mufurila-engineering-team-15.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 65, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410626/skt_global_mining/skt-mufurila-engineering-team-16.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 66, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410627/skt_global_mining/skt-mufurila-engineering-team-17.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 67, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410628/skt_global_mining/skt-mufurila-engineering-team-18.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 68, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410630/skt_global_mining/skt-mufurila-engineering-team-19.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 69, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410632/skt_global_mining/skt-mufurila-engineering-team-2.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 70, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410634/skt_global_mining/skt-mufurila-engineering-team-20.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 71, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410636/skt_global_mining/skt-mufurila-engineering-team-21.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 72, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410637/skt_global_mining/skt-mufurila-engineering-team-22.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 73, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410638/skt_global_mining/skt-mufurila-engineering-team-23.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 74, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410639/skt_global_mining/skt-mufurila-engineering-team-24.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 76, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410641/skt_global_mining/skt-mufurila-engineering-team-26.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 77, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410642/skt_global_mining/skt-mufurila-engineering-team-27.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 78, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410643/skt_global_mining/skt-mufurila-engineering-team-28.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 79, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410644/skt_global_mining/skt-mufurila-engineering-team-29.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 80, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410645/skt_global_mining/skt-mufurila-engineering-team-3.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 81, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410647/skt_global_mining/skt-mufurila-engineering-team-30.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 82, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410649/skt_global_mining/skt-mufurila-engineering-team-31.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 83, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410651/skt_global_mining/skt-mufurila-engineering-team-32.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 84, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410652/skt_global_mining/skt-mufurila-engineering-team-4.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 85, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410653/skt_global_mining/skt-mufurila-engineering-team-5.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 86, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410654/skt_global_mining/skt-mufurila-engineering-team-6.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 87, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410655/skt_global_mining/skt-mufurila-engineering-team-7.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 88, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410658/skt_global_mining/skt-mufurila-engineering-team-8.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 89, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410659/skt_global_mining/skt-mufurila-engineering-team-9.jpg", alt: "SKT - Mufurila engineering team" },
  { id: 90, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410660/skt_global_mining/skt-starts-here.jpg", alt: "SKT starts here" },
  { id: 91, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410661/skt_global_mining/sob-site-appreciation-meeting-1.jpg", alt: "SOB site appreciation meeting " },
  { id: 92, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410662/skt_global_mining/sob-site-appreciation-meeting-10.jpg", alt: "SOB site appreciation meeting " },
  { id: 93, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410663/skt_global_mining/sob-site-appreciation-meeting-11.jpg", alt: "SOB site appreciation meeting " },
  { id: 94, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410664/skt_global_mining/sob-site-appreciation-meeting-12.jpg", alt: "SOB site appreciation meeting " },
  { id: 95, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410665/skt_global_mining/sob-site-appreciation-meeting-13.jpg", alt: "SOB site appreciation meeting " },
  { id: 96, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410666/skt_global_mining/sob-site-appreciation-meeting-2.jpg", alt: "SOB site appreciation meeting " },
  { id: 97, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410667/skt_global_mining/sob-site-appreciation-meeting-3.jpg", alt: "SOB site appreciation meeting " },
  { id: 98, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410668/skt_global_mining/sob-site-appreciation-meeting-4.jpg", alt: "SOB site appreciation meeting " },
  { id: 99, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410669/skt_global_mining/sob-site-appreciation-meeting-5.jpg", alt: "SOB site appreciation meeting " },
  { id: 100, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410670/skt_global_mining/sob-site-appreciation-meeting-6.jpg", alt: "SOB site appreciation meeting " },
  { id: 101, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410672/skt_global_mining/sob-site-appreciation-meeting-7.jpg", alt: "SOB site appreciation meeting " },
  { id: 102, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410673/skt_global_mining/sob-site-appreciation-meeting-8.jpg", alt: "SOB site appreciation meeting " },
  { id: 103, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410674/skt_global_mining/sob-site-appreciation-meeting-9.jpg", alt: "SOB site appreciation meeting " },
  { id: 105, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410555/skt_global_mining/shaft-road-underground-1.jpg", alt: "Shaft road Underground" },
  { id: 106, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410557/skt_global_mining/shaft-road-underground-10.jpg", alt: "Shaft road Underground" },
  { id: 107, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410558/skt_global_mining/shaft-road-underground-11.jpg", alt: "Shaft road Underground" },
  { id: 108, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410560/skt_global_mining/shaft-road-underground-12.jpg", alt: "Shaft road Underground" },
  { id: 109, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410563/skt_global_mining/shaft-road-underground-13.jpg", alt: "Shaft road Underground" },
  { id: 110, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410564/skt_global_mining/shaft-road-underground-14.jpg", alt: "Shaft road Underground" },
  { id: 111, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410565/skt_global_mining/shaft-road-underground-15.jpg", alt: "Shaft road Underground" },
  { id: 112, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410566/skt_global_mining/shaft-road-underground-16.jpg", alt: "Shaft road Underground" },
  { id: 113, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410567/skt_global_mining/shaft-road-underground-17.jpg", alt: "Shaft road Underground" },
  { id: 114, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410568/skt_global_mining/shaft-road-underground-18.jpg", alt: "Shaft road Underground" },
  { id: 115, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410570/skt_global_mining/shaft-road-underground-19.jpg", alt: "Shaft road Underground" },
  { id: 116, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410572/skt_global_mining/shaft-road-underground-2.jpg", alt: "Shaft road Underground" },
  { id: 117, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410573/skt_global_mining/shaft-road-underground-20.jpg", alt: "Shaft road Underground" },
  { id: 118, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410575/skt_global_mining/shaft-road-underground-21.jpg", alt: "Shaft road Underground" },
  { id: 119, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410576/skt_global_mining/shaft-road-underground-22.jpg", alt: "Shaft road Underground" },
  { id: 120, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410577/skt_global_mining/shaft-road-underground-23.jpg", alt: "Shaft road Underground" },
  { id: 121, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410578/skt_global_mining/shaft-road-underground-24.jpg", alt: "Shaft road Underground" },
  { id: 122, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410579/skt_global_mining/shaft-road-underground-25.jpg", alt: "Shaft road Underground" },
  { id: 123, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410580/skt_global_mining/shaft-road-underground-26.jpg", alt: "Shaft road Underground" },
  { id: 124, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410582/skt_global_mining/shaft-road-underground-27.jpg", alt: "Shaft road Underground" },
  { id: 125, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410582/skt_global_mining/shaft-road-underground-28.jpg", alt: "Shaft road Underground" },
  { id: 126, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410585/skt_global_mining/shaft-road-underground-29.jpg", alt: "Shaft road Underground" },
  { id: 127, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410586/skt_global_mining/shaft-road-underground-3.jpg", alt: "Shaft road Underground" },
  { id: 128, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410588/skt_global_mining/shaft-road-underground-30.jpg", alt: "Shaft road Underground" },
  { id: 129, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410589/skt_global_mining/shaft-road-underground-31.jpg", alt: "Shaft road Underground" },
  { id: 130, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410590/skt_global_mining/shaft-road-underground-32.jpg", alt: "Shaft road Underground" },
  { id: 131, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410592/skt_global_mining/shaft-road-underground-33.jpg", alt: "Shaft road Underground" },
  { id: 132, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410594/skt_global_mining/shaft-road-underground-34.jpg", alt: "Shaft road Underground" },
  { id: 133, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410596/skt_global_mining/shaft-road-underground-4.jpg", alt: "Shaft road Underground" },
  { id: 134, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410597/skt_global_mining/shaft-road-underground-5.jpg", alt: "Shaft road Underground" },
  { id: 135, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410599/skt_global_mining/shaft-road-underground-6.jpg", alt: "Shaft road Underground" },
  { id: 136, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410600/skt_global_mining/shaft-road-underground-7.jpg", alt: "Shaft road Underground" },
  { id: 137, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410602/skt_global_mining/shaft-road-underground-8.jpg", alt: "Shaft road Underground" },
  { id: 138, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410604/skt_global_mining/shaft-road-underground-9.jpg", alt: "Shaft road Underground" },
  { id: 139, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410675/skt_global_mining/tag-board-and-blasting-point.jpg", alt: "Tag board and blasting point" },
  { id: 140, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410677/skt_global_mining/tyre-workshop-and-management-office-1.jpg", alt: "Tyre workshop and management office" },
  { id: 142, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410679/skt_global_mining/tyre-workshop-and-management-office-3.jpg", alt: "Tyre workshop and management office" },
  { id: 143, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410681/skt_global_mining/tyre-workshop-and-management-office-4.jpg", alt: "Tyre workshop and management office" },
  { id: 144, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410682/skt_global_mining/tyre-workshop-and-management-office-5.jpg", alt: "Tyre workshop and management office" },
  { id: 145, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410539/skt_global_mining/drill-point.jpg", alt: "drill point" },
  { id: 146, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410553/skt_global_mining/loaded-truck.jpg", alt: "loaded truck" },
  { id: 147, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410554/skt_global_mining/loading-the-truck.jpg", alt: "loading the truck" },
  { id: 150, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410497/skt_global_mining/diesel-bowser.jpg", alt: "Underground Refueling Bowser" },
  { id: 151, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410507/skt_global_mining/scaling-jumbo.jpg", alt: "KDT 450 HA Scaling Rig" },
  { id: 152, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410498/skt_global_mining/drill-rig.jpg", alt: "Huatai Underground Drill Rig" },
  { id: 153, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410509/skt_global_mining/wj-4-loader.jpg", alt: "WJ-4 LHD Loader" },
  { id: 154, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410508/skt_global_mining/underground-truck.jpg", alt: "Articulated Underground Haul Truck" },
  { id: 155, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410501/skt_global_mining/huatai-bolter.jpg", alt: "Huatai Cable Bolter Rig" },
  { id: 156, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410504/skt_global_mining/lmv-fleet.jpg", alt: "SKT Custom LMV Fleet" },
  { id: 157, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1788410505/skt_global_mining/motor-grader.jpg", alt: "CASE VHP Motor Grader" },
  { id: 1, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125389/skt_global_mining/Mechanised%20Fleet.webp", alt: "Mechanised Fleet" },
  { id: 2, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp", alt: "Underground Workshop" },
  { id: 3, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125408/skt_global_mining/Production%20Development.webp", alt: "Development work" },
  { id: 4, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance.webp", alt: "Engineering & Maintenance" },
  { id: 5, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/logistic-network-new.webp", alt: "Logistics Network" },
  { id: 7, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125412/skt_global_mining/Rescue%20Systems.webp", alt: "Rescue Systems" },
  { id: 9, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/f_auto,q_auto/v1/skt_global_mining/infrastructure-new.webp", alt: "Infrastructure Systems" },
  { id: 11, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125460/skt_global_mining/Strategic%20Warehousing.webp", alt: "Strategic Warehousing" },
  { id: 13, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125379/skt_global_mining/Hazard%20Elimination.webp", alt: "Hazard Elimination" },
  { id: 14, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125469/skt_global_mining/Worker%20Protection%20Systems.webp", alt: "Worker Protection Systems" },
  { id: 15, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp", alt: "Community Safety Culture" },
  { id: 16, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp", alt: "Continuous Training" },
  { id: 17, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125373/skt_global_mining/Emergency%20Readiness.webp", alt: "Emergency Readiness" },
  { id: 18, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125479/skt_global_mining/diesel-bowser.jpg", alt: "Diesel Bowser" },
  { id: 19, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125502/skt_global_mining/lmv-monitoring.jpg", alt: "LMV Monitoring" },
  { id: 20, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125518/skt_global_mining/passenger-carrier.jpg", alt: "Passenger Carrier" },
  { id: 21, src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125527/skt_global_mining/utility-vehicle.jpg", alt: "Utility Vehicle" },
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
