"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Droplet } from "lucide-react";

const CHAPTERS = [
  {
    number: "01",
    label: "Education",
    icon: GraduationCap,
    headline: "Three Schools Built. Eighteen Hundred Students.",
    body: "In Chingola, Kitwe, and Mufulira, SKT Global funded the construction and staffing of three primary schools. Combined enrolment now exceeds 1,800 students. Engineering scholarships send the brightest into technical training. The knowledge stays in Zambia.",
    stat: "200+ scholarship recipients annually",
    image: "/Continuous Training.webp",
  },
  {
    number: "02",
    label: "Healthcare",
    icon: Heart,
    headline: "Twelve Clinics. Zero Charge for Maternal Care.",
    body: "Mobile clinics and fixed-site facilities across the operational zone offer basic care, vaccinations, and maternal health services. Every expectant mother in the surrounding communities receives free prenatal and postnatal care - no exceptions.",
    stat: "12 community clinics supported",
    image: "/Workforce Facilities.webp",
  },
  {
    number: "03",
    label: "Clean Water",
    icon: Droplet,
    headline: "Boreholes, Purification, Pipe Networks.",
    body: "Clean water was the most urgent ask from every community consultation. SKT funded 14 borehole installations and two purification systems serving over 5,000 residents. Waterborne illness rates in target villages fell 60% within the first year.",
    stat: "5,000+ residents with safe water access",
    image: "/Community Safety Culture.webp",
  },
];

export function ChapterSection() {
  return (
    <section className="bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-28">
        <div className="space-y-24 lg:space-y-32">
          {CHAPTERS.map((chapter, i) => {
            const Icon = chapter.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Chapter label - editorial */}
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase text-amber-600">
                    Chapter {chapter.number} - {chapter.label}
                  </span>
                  <div className="flex-1 h-px bg-amber-200" />
                  <Icon size={14} className="text-amber-400" />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                  {/* Polaroid-style image */}
                  <div className="lg:col-span-5 lg:[direction:ltr]">
                    <div className="bg-white p-3 pb-10 shadow-md rotate-1 hover:rotate-0 transition-transform duration-500">
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <Image
                          src={chapter.image}
                          alt={chapter.label}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 42vw"
                        />
                      </div>
                      <p className="text-center text-xs text-slate-400 italic mt-3 px-2">
                        {chapter.label} initiative, Copperbelt Region · 2025
                      </p>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`lg:col-span-7 lg:[direction:ltr] ${isEven ? "lg:pt-6" : "lg:pt-6"}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
                      {chapter.headline}
                    </h2>
                    <p className="text-slate-600 text-base leading-[1.85] mb-6 font-light">
                      {chapter.body}
                    </p>
                    <div className="inline-flex items-center gap-3 text-xs text-amber-700 font-bold tracking-wide border-b-2 border-amber-300 pb-1">
                      <Icon size={12} />
                      {chapter.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
