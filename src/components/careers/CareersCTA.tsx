"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/skt-global-mining-service-limited/";
const LINKEDIN_JOBS_URL = "https://www.linkedin.com/company/skt-global-mining-service-limited/jobs/";

export default function CareersCTA() {
  return (
    <section className="py-32 md:py-48 bg-neutral-950 text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-6"
        >
          Don&apos;t see your role?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.2] tracking-tight mb-8 drop-shadow-md"
          style={{ WebkitTextStroke: "0.5px white" }}
        >
          We&apos;re always looking for great talent.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/90 font-light mb-16 max-w-2xl mx-auto"
        >
          If you don&apos;t see a role that fits right now, follow our company page or reach out. We&apos;ll keep you in mind for future opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={LINKEDIN_JOBS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0077b5] text-white font-medium hover:bg-[#005a8c] transition-colors flex items-center justify-center gap-2"
          >
            <Linkedin className="w-5 h-5 fill-current" />
            View LinkedIn Openings
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            Follow Company Page
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
