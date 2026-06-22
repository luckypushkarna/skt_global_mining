"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Droplet } from "lucide-react";

const INITIATIVES = [
  {
    id: "01",
    label: "Education",
    icon: GraduationCap,
    headline: "Three Schools Built. 1,800 Students Enrolled.",
    body: "In Chingola, Kitwe, and Mufulira, SKT Global funded the construction and staffing of three primary schools. Combined enrolment now exceeds 1,800 students. Engineering scholarships send the brightest into technical training. The knowledge stays in Zambia.",
    stat: "200+ scholarship recipients annually",
    image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp",
  },
  {
    id: "02",
    label: "Healthcare",
    icon: Heart,
    headline: "Twelve Clinics. Free Maternal Care.",
    body: "Mobile clinics and fixed-site facilities across the operational zone offer basic care, vaccinations, and maternal health services. Every expectant mother in the surrounding communities receives free prenatal and postnatal care—no exceptions.",
    stat: "12 community clinics supported",
    image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp",
  },
  {
    id: "03",
    label: "Clean Water",
    icon: Droplet,
    headline: "Boreholes, Purification, & Pipe Networks.",
    body: "Clean water was the most urgent ask from every community consultation. SKT funded 14 borehole installations and two purification systems serving over 5,000 residents. Waterborne illness rates in target villages fell 60% within the first year.",
    stat: "5,000+ residents with safe water access",
    image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp",
  },
];

export function CommunityInitiatives() {
  return (
    <section className="bg-bg-soft py-20 lg:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-24 lg:space-y-32">
          {INITIATIVES.map((item, i) => {
            const Icon = item.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                  
                  {/* Image Block */}
                  <div className="lg:[direction:ltr]">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                      <Image
                        src={item.image}
                        alt={item.headline}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 rounded-2xl" />
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className={`lg:[direction:ltr] ${!isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-skt-blue">
                        <Icon size={16} />
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-skt-blue">
                        {item.label}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl text-slate-900 leading-[1.1] tracking-tight mb-6 font-serif font-normal">
                      {item.headline}
                    </h2>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                      {item.body}
                    </p>

                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-xs font-semibold text-slate-900 uppercase tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-skt-blue animate-pulse" />
                      {item.stat}
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
