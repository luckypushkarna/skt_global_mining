"use client";

import { motion } from "framer-motion";
import { Wrench, ShieldCheck, GraduationCap, Handshake, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Wrench,
    title: "Mechanised Mining",
    desc: "A world-class fleet of 225+ machines including drill rigs, telehandlers, and service vehicles, positioning us as the premier mechanised mining contractor.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Safety is not merely a priority—it is our core value. We foster a culture where every employee returns home safely each day.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    desc: "Accelerating development at Mopani Copper Mines through technical excellence, financial discipline, and strategic alignment with IRH.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: GraduationCap,
    title: "Talent Development",
    desc: "Nurturing future leaders and empowering Zambians to rise to the highest levels of professional excellence within our organisation.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: HeartHandshake,
    title: "Social Responsibility",
    desc: "In recognition of the support from the Zambian people, SKT allocates 20% of net profits to CSR initiatives to strengthen communities and livelihoods.",
    colSpan: "lg:col-span-1",
  },
];

export default function StrategicPillars() {
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
            Core Disciplines
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-normal text-slate-900 leading-[1.1] tracking-tight"
          >
            Five pillars. One unwavering purpose.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-white p-8 md:p-10 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow group ${pillar.colSpan}`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 mb-8 group-hover:bg-skt-blue group-hover:border-skt-blue transition-colors duration-300">
                <pillar.icon className="w-5 h-5 text-skt-blue group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-normal text-slate-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
