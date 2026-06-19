"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Heart } from "lucide-react";

const perks = [
  {
    icon: Users,
    title: "Global Team",
    desc: "Work alongside elite professionals from India, Peru, Nigeria, and Zambia in a diverse, collaborative environment.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Continuous training, high-value certifications, and clear career progression pathways to leadership roles.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Heart,
    title: "Wellbeing First",
    desc: "Comprehensive health benefits, top-tier residential facilities, and 24/7 world-class catering.",
    colSpan: "lg:col-span-3",
  },
];

export default function CareersPerks() {
  return (
    <section className="py-24 md:py-36 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-6"
          >
            Why Join Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-normal text-slate-900 leading-[1.1] tracking-tight"
          >
            Empowering the minds that power the industry.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-white p-8 md:p-12 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-center ${perk.colSpan}`}
            >
              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-8 group-hover:bg-skt-blue group-hover:border-skt-blue transition-colors duration-300">
                <perk.icon className="w-6 h-6 text-skt-blue group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-normal text-slate-900 mb-4">
                {perk.title}
              </h3>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
