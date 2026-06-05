"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ACCENT = {
  emerald: { line: "bg-emerald-500", mark: "text-emerald-500/15" },
  sky: { line: "bg-sky-500", mark: "text-sky-500/15" },
  amber: { line: "bg-amber-500", mark: "text-amber-500/15" },
};

interface StoryBlockProps {
  quote: string;
  author: string;
  role: string;
  accent: keyof typeof ACCENT;
}

export function StoryBlock({ quote, author, role, accent }: StoryBlockProps) {
  const colors = ACCENT[accent];

  return (
    <section className="bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative opening quote */}
          <div className={cn("text-8xl lg:text-9xl font-serif leading-none mb-4 select-none", colors.mark)}>
            &ldquo;
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-slate-900 leading-[1.45] italic mb-10 -mt-6">
            {quote}
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4">
            <div className={cn("h-px w-12 shrink-0", colors.line)} />
            <div>
              <p className="text-sm font-bold text-slate-900">{author}</p>
              <p className="text-xs text-slate-500 tracking-wide mt-0.5">{role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
