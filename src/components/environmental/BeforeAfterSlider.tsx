"use client";

import { useState } from "react";
import Image from "next/image";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="bg-slate-950 border border-slate-900 p-6 lg:p-8 rounded-none">
      <div className="mb-6">
        <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase block mb-1">
          ── Land Reclamation
        </span>
        <h3 className="text-2xl font-bold text-white tracking-tight">Ecosystem Rehabilitation</h3>
        <p className="text-slate-400 text-xs font-light mt-2 max-w-xl leading-relaxed">
          Interactive slider showing the transition from active extraction area to a fully restored, biologically diverse forest ecosystem.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden select-none border border-slate-800">
        {/* Before Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Underground Workshop.webp"
            alt="Before rehabilitation - Active Mining Site"
            fill
            sizes="100vw"
            className="object-cover filter grayscale contrast-125"
          />
          {/* Label Before */}
          <div className="absolute bottom-4 left-4 z-10 bg-slate-950/80 border border-slate-800 backdrop-blur-sm px-3 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Before: Active Mine Workings (2020)
          </div>
        </div>

        {/* After Image (Clipped overlay) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 ease-out"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src="/Community Safety Culture.webp"
            alt="After rehabilitation - Reclaimed Land"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Label After */}
          <div className="absolute bottom-4 right-4 z-10 bg-emerald-950/90 border border-emerald-900 backdrop-blur-sm px-3 py-1 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
            After: Replanted Native Forest (2026)
          </div>
        </div>

        {/* Slider Handle line & circle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border border-white flex items-center justify-center shadow-2xl">
            <span className="text-[10px] text-white select-none">↔</span>
          </div>
        </div>

        {/* Input Range Overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label="Before-after comparison slider"
        />
      </div>

      <div className="flex justify-between items-center mt-4 text-[9px] font-mono text-slate-500">
        <span>Site Reference: Chambishi East reclamation plot B</span>
        <span>Drag center handle left/right to view</span>
      </div>
    </div>
  );
}
