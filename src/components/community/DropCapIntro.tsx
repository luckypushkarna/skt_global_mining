"use client";

import { motion } from "framer-motion";

export function DropCapIntro() {
  return (
    <section className="bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main text - 2 column editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            {/* Drop cap paragraph */}
            <p className="text-slate-700 text-base lg:text-lg leading-[1.9] mb-6">
              <span className="float-left text-[5.5rem] font-black leading-[0.75] mr-3 mt-1 text-amber-600 select-none">
                I
              </span>
              n the copper-rich corridors of Zambia&apos;s Copperbelt, mining has always 
              been about extraction - of metal, of value, of resources. For decades, 
              communities watched companies arrive, dig, and depart. What remained 
              were open pits and broken promises. SKT Global arrived with a different 
              contract.
            </p>

            <p className="text-slate-600 text-base leading-[1.9] mb-6 font-light">
              Twenty percent of net profits. That&apos;s the commitment enshrined in SKT 
              Global&apos;s founding charter - not as a PR target, but as a legally binding 
              community reinvestment obligation. Schools get built. Clinics get staffed. 
              Boreholes go down. And the company stays accountable to the very people 
              beneath whose land they work.
            </p>

            <p className="text-slate-600 text-base leading-[1.9] font-light">
              This is not charity. This is partnership. The distinction matters.
            </p>
          </motion.div>

          {/* Sidebar - sticky stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="border-t-2 border-amber-500 pt-5 space-y-6">
              <p className="text-[9px] font-black tracking-[0.35em] uppercase text-slate-400 mb-4">
                At a Glance
              </p>
              {[
                { value: "$2.4M", label: "Community investment to date" },
                { value: "1,800+", label: "Students in SKT-built schools" },
                { value: "12", label: "Health clinics supported" },
                { value: "5,000+", label: "Residents with clean water access" },
              ].map((s) => (
                <div key={s.value} className="border-b border-slate-200 pb-5">
                  <p className="text-3xl font-black text-amber-600 tracking-tight mb-1">{s.value}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
