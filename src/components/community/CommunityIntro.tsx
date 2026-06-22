"use client";

import { motion } from "framer-motion";
import { LiveCounter } from "@/components/ui/live-counter";

export function CommunityIntro() {
  return (
    <section className="bg-white py-20 lg:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-skt-blue" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-skt-blue">
                Our Commitment
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.08] mb-8 font-serif font-normal">
              A different contract for the Copperbelt.
            </h2>

            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                In the copper-rich corridors of Zambia&apos;s Copperbelt, mining has always 
                been about extraction—of metal, of value, of resources. For decades, 
                communities watched companies arrive, dig, and depart. What remained 
                were open pits and broken promises. SKT Global arrived with a different 
                contract.
              </p>
              <p>
                Twenty percent of net profits. That&apos;s the commitment enshrined in SKT 
                Global&apos;s founding charter—not as a PR target, but as a legally binding 
                community reinvestment obligation. Schools get built. Clinics get staffed. 
                Boreholes go down. And the company stays accountable to the very people 
                beneath whose land they work.
              </p>
              <p className="font-medium text-slate-900">
                This is not charity. This is partnership. The distinction matters.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm h-full flex flex-col justify-center">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-8">
                At a Glance
              </p>
              
              <div className="space-y-8">
                {[
                  { value: "2", suffix: ".4M", prefix: "$", label: "Community investment to date" },
                  { value: "1800", suffix: "+", label: "Students in SKT-built schools" },
                  { value: "12", label: "Health clinics supported" },
                  { value: "5000", suffix: "+", label: "Residents with clean water access" },
                ].map((s) => (
                  <div key={s.label} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                    <p className="font-mono text-4xl font-medium text-skt-blue tabular-nums tracking-tight mb-2">
                      {s.prefix}
                      <LiveCounter from={0} to={parseInt(s.value)} suffix={s.suffix} duration={2.5} />
                    </p>
                    <p className="text-sm font-medium tracking-wide text-slate-600">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
