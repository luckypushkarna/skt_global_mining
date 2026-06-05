"use client";

import { Download, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function DownloadReport() {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-none relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto my-12">
      {/* Decorative background grid element */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.05] pointer-events-none" />

      <div className="flex items-start gap-5 relative z-10">
        <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-900 flex items-center justify-center text-emerald-400 shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase block mb-1">
            ── Public Disclosures
          </span>
          <h4 className="text-xl font-bold text-white tracking-tight">Environmental & Rehabilitation Report 2026</h4>
          <p className="text-slate-400 text-xs font-light mt-1.5 max-w-xl leading-relaxed">
            Full compliance documentation containing raw telemetry data, Soil Reclamation Index (SRI) logs, and third-party laboratory verification notes.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 font-mono text-[10px] text-slate-500">
            <span>FORMAT: PDF (24.8 MB)</span>
            <span>PAGES: 142</span>
            <span>VERIFIED: Q1 2026</span>
            <span className="flex items-center gap-1 text-emerald-500">
              <CheckCircle className="w-3 h-3" /> SHA-256 SECURED
            </span>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 w-full md:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors cursor-pointer shrink-0 rounded-none"
      >
        <Download className="w-4 h-4" /> Download Report
      </motion.button>
    </div>
  );
}
