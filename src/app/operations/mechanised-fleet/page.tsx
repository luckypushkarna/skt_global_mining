"use client";

import Link from "next/link";
import { ArrowLeft, Truck } from "lucide-react";
import { motion } from "framer-motion";
import type { JSX } from "react";

export default function MechanisedFleetPage(): JSX.Element {
  return (
    <div className="min-h-[70vh] bg-bg-tint flex items-center justify-center py-24 md:py-32">
      <div className="max-w-xl w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-soft relative overflow-hidden"
        >
          {/* Decorative branding accent lines */}
          <div className="absolute top-0 inset-x-0 h-1 flex">
            <div className="h-full w-1/3 bg-skt-red" />
            <div className="h-full w-1/3 bg-skt-blue" />
            <div className="h-full w-1/3 bg-skt-navy" />
          </div>

          <div className="space-y-6">
            {/* Tag */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-skt-blue/10 flex items-center justify-center text-skt-blue shrink-0">
                <Truck size={14} />
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-soft">
                Operations
              </span>
            </div>

            {/* Page Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-ink">
                Mechanised Fleet
              </h1>
              <p className="text-xs text-ink-soft">
                You are currently viewing the Mechanised Fleet sub-page.
              </p>
            </div>

            {/* Back Button */}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-skt-blue hover:text-skt-blue-deep transition-all duration-200 group"
              >
                <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
