"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
  text: string;
  href: string;
}

export function CallToAction({ text, href }: CallToActionProps) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <Link
          href={href}
          className="group flex items-center justify-between gap-6 py-6 border-y border-white/10 hover:border-white/25 transition-colors duration-300"
        >
          <div>
            <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/35 mb-2">
              Continue Reading
            </p>
            <p className="text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors duration-200">
              {text}
            </p>
          </div>

          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white text-slate-950 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <ArrowRight className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </section>
  );
}
