"use client";

import { Users, UserCheck } from "lucide-react";

export function UbuntuProgram() {
  return (
    <section className="bg-zinc-950 text-white py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block">
              ── Collaborative Growth
            </span>
            <h2 className="text-4xl md:text-5xl uppercase tracking-tight font-serif font-normal">
              THE UBUNTU PROGRAM
            </h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Based on the traditional philosophy of community stewardship, our mentorship pairing matching system ensures that technical knowledge is passed down directly on-site.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
                <span className="font-mono text-[11px] text-zinc-500 uppercase">MENTORSHIP RATIO</span>
                <span className="font-mono text-sm text-sky-300 font-bold">1 Mentor : 2 Trainees</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
                <span className="font-mono text-[11px] text-zinc-500 uppercase">GRADUATES YTD</span>
                <span className="font-mono text-sm text-white font-bold">334 Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Diagram */}
          <div className="lg:col-span-7 bg-zinc-900/20 border border-zinc-800 p-8 md:p-12 relative flex flex-col items-center">
            {/* Diagram Heading */}
            <div className="w-full text-center mb-10 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              ── Mentorship Architecture Schematic ──
            </div>

            {/* Mentor Block */}
            <div className="flex flex-col items-center relative z-10 w-full max-w-[200px]">
              <div className="bg-sky-950 border border-sky-500/40 p-4 w-full text-center flex flex-col items-center">
                <UserCheck className="w-6 h-6 text-sky-400 mb-2" />
                <span className="font-mono text-[10px] text-sky-300 font-bold uppercase tracking-wider">
                  01. Senior Mentor
                </span>
                <span className="text-xs text-white mt-1">10+ Years Experience</span>
              </div>
            </div>

            {/* Connecting lines using SVG */}
            <div className="w-full h-16 max-w-[320px] relative select-none">
              <svg className="w-full h-full text-zinc-800 stroke-current" fill="none">
                {/* Vertical line from mentor */}
                <path d="M 160,0 L 160,30" strokeWidth="2" />
                {/* Horizontal split */}
                <path d="M 60,30 L 260,30" strokeWidth="2" />
                {/* Drop lines to trainees */}
                <path d="M 60,30 L 60,60" strokeWidth="2" />
                <path d="M 260,30 L 260,60" strokeWidth="2" />
              </svg>
            </div>

            {/* Trainees row */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-[480px] relative z-10">
              {/* Trainee 1 */}
              <div className="bg-zinc-950 border border-zinc-800 p-4 text-center flex flex-col items-center">
                <Users className="w-5 h-5 text-zinc-500 mb-2" />
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                  Trainee A
                </span>
                <span className="text-xs text-zinc-300 mt-1">Apprentice Operator</span>
              </div>

              {/* Trainee 2 */}
              <div className="bg-zinc-950 border border-zinc-800 p-4 text-center flex flex-col items-center">
                <Users className="w-5 h-5 text-zinc-500 mb-2" />
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                  Trainee B
                </span>
                <span className="text-xs text-zinc-300 mt-1">Refinery Intern</span>
              </div>
            </div>

            {/* Program Impact Stats Bar */}
            <div className="w-full mt-10 pt-8 border-t border-zinc-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">78</p>
                <p className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider mt-1">2024 Graduates</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">114</p>
                <p className="font-mono text-[8px] text-zinc-500 uppercase tracking-wider mt-1">2025 Graduates</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-sky-400 tracking-tight">142</p>
                <p className="font-mono text-[8px] text-sky-400 uppercase tracking-wider mt-1">2026 Target</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
