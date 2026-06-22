"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export function CommunityClosing() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="bg-bg-tint rounded-[2.5rem] p-8 md:p-16 lg:p-24 text-center border border-slate-200 shadow-sm relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-skt-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-400/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100 text-skt-blue">
              <FileText size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-6 font-serif font-normal leading-[1.1]">
              Read the Full Impact Report
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12 max-w-2xl">
              Dive deeper into our ESG frameworks, localized community partnerships, and 
              long-term sustainability metrics.
            </p>

            <a
              href="/sustainability/esg-framework"
              className="inline-flex items-center gap-3 px-8 py-4 bg-skt-navy text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors group whitespace-nowrap shadow-md hover:shadow-lg"
            >
              View ESG Framework
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight
                  className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform"
                  strokeWidth={2}
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
