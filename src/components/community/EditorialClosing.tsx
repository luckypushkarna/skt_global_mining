"use client";

import { motion } from "framer-motion";

export function EditorialClosing() {
  return (
    <section className="bg-[#FAF8F5] border-t border-amber-200/50">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-8">
                Closing Reflection
              </p>

              <p className="text-slate-600 text-base leading-[1.9] mb-5 font-light italic">
                The copper comes out of the ground regardless. The question has always 
                been who benefits, who bears the cost, and who is left standing when 
                the last truck rolls out. At SKT Global, these aren&apos;t abstract 
                governance questions. They are operational commitments, audited, 
                reported, and felt - in classrooms, clinics, and kitchens across 
                the Copperbelt.
              </p>

              <p className="text-slate-600 text-base leading-[1.9] font-light italic">
                That is the SKT difference. Not a pledge. A practice.
              </p>

              {/* Author signature line */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-amber-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">SKT Editorial Desk</p>
                    <p className="text-xs text-slate-400 italic mt-0.5">Community Impact Report · June 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Related topics */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-400 border-t-2 border-amber-500 pt-4 mb-6">
                Continue Reading
              </p>
              {[
                { href: "/sustainability/safety-first", label: "Safety First", sub: "Zero harm philosophy" },
                { href: "/sustainability/environmental-care", label: "Environmental Care", sub: "Land stewardship" },
                { href: "/sustainability/local-workforce", label: "Local Workforce", sub: "Ubuntu mentorship" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block border-b border-slate-200 py-4 group hover:border-amber-300 transition-colors"
                >
                  <p className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{link.sub}</p>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
