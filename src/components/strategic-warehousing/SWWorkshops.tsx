import Image from "next/image";
import { STRATEGIC_WAREHOUSING } from "@/data/strategic-warehousing";

export function SWWorkshops() {
  const { workshops } = STRATEGIC_WAREHOUSING;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Image using existing asset */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125466/skt_global_mining/Underground%20Workshop.webp"
                alt="Underground engineering workshop - SKT Global operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-slate-400" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
                Workshop Network
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 leading-[1.08] mb-5 font-serif font-normal">
              {workshops.title}
            </h2>

            <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light mb-10">
              {workshops.body}
            </p>

            {/* Workshop list */}
            <div className="border-t border-slate-200">
              {workshops.list.map((ws, i) => (
                <div
                  key={ws.location}
                  className="py-6 border-b border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
                >
                  <div className="md:col-span-4">
                    <span className="font-mono text-[10px] font-semibold text-slate-400 tracking-widest block mb-1.5">
                      0{i + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-900">
                      {ws.location}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-sm font-medium text-slate-700 mb-1">
                      {ws.type}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {ws.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

