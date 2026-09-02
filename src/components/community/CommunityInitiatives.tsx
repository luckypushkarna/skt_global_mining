"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Droplet } from "lucide-react";

const INITIATIVES = [
  {
    id: "01",
    label: "Education",
    icon: GraduationCap,
    headline: "Planning Local Schools & Training.",
    body: "In key operational zones across the Copperbelt, SKT Global is developing frameworks to support the construction and staffing of local schools. We are also structuring engineering scholarship programs to send the brightest into technical training, ensuring knowledge stays in Zambia.",
    stat: "Structuring scholarship frameworks",
    image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125372/skt_global_mining/Continuous%20Training.webp",
  },
  {
    id: "02",
    label: "Healthcare",
    icon: Heart,
    headline: "Designing Healthcare Support Networks.",
    body: "We are actively exploring partnerships to support mobile clinics and fixed-site facilities across our operational footprint. Our long-term goal includes providing reliable basic care, vaccinations, and maternal health services for surrounding communities.",
    stat: "Targeting future clinic partnerships",
    image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125472/skt_global_mining/Workforce%20Facilities.webp",
  },
  {
    id: "03",
    label: "Clean Water",
    icon: Droplet,
    headline: "Initiating Clean Water Infrastructure.",
    body: "Clean water is the most urgent ask from our early community consultations. SKT is in the planning stages for borehole installations and purification systems to serve local residents. Our goal is to establish reliable, safe water access for our neighbours.",
    stat: "Designing safe water access networks",
    image: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125371/skt_global_mining/Community%20Safety%20Culture.webp",
  },
];

export function CommunityInitiatives() {
  return (
    <section className="bg-bg-soft py-20 lg:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {INITIATIVES.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-skt-blue shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-skt-blue">
                    {item.label}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl text-slate-900 leading-[1.2] tracking-tight mb-6 font-serif font-normal">
                  {item.headline}
                </h2>

                <p className="text-slate-600 leading-relaxed mb-8 font-light flex-grow">
                  {item.body}
                </p>

                <div className="inline-flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-900 uppercase tracking-wide w-fit mt-auto">
                  <div className="w-1.5 h-1.5 rounded-full bg-skt-blue animate-pulse" />
                  {item.stat}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
