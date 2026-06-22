import { PartnersSection } from "@/components/organisms/PartnersSection";
import Image from "next/image";

export const metadata = {
  title: "Partners | SKT Global Mining",
  description: "Strategic Partnership Ecosystem at SKT Global Mining.",
};

export default function PartnersPage() {
  return (
    <main className="flex-1 pt-16">
      {/* Hero Section for Partners */}
      <section className="bg-white text-slate-900 py-24 relative overflow-hidden border-b border-slate-100">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 bg-slate-100 rounded-full mb-6">
            Trusted Partnerships
          </span>
          <h1 className="text-4xl md:text-6xl tracking-tight mb-6 leading-tight text-slate-900 font-serif font-normal">
            Collaborating with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-skt-blue to-skt-blue-deep">
              Industry Leaders
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed mb-16">
            We work alongside the world&apos;s most innovative organizations to
            deliver excellence in mining and operational infrastructure.
          </p>

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 pt-12 border-t border-slate-100">
            <div className="relative h-16 md:h-20 w-48 md:w-64">
              <Image src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125499/skt_global_mining/irh-logo.webp" alt="International Resources Holding" fill className="object-contain brightness-0 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <div className="relative h-16 md:h-20 w-48 md:w-64">
              <Image src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125511/skt_global_mining/mopani-logo.webp" alt="Mopani Copper Mines" fill className="object-contain brightness-0 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* About Our Partners Details */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Partner 1: IRH */}
            <div>
              <h2 className="text-2xl md:text-3xl text-slate-900 mb-3 font-serif font-normal">
                International Resources Holding (IRH)
              </h2>
              <p className="text-slate-600 mb-6 font-medium text-[15px]">
                A global natural resources investment platform dedicated to securing critical minerals.
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-skt-blue mb-1.5">Strategic Vision</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    IRH operates across the entire mining value chain to secure resources essential for the global energy transition.
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-skt-blue mb-1.5">Key Investment</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    As the 51% majority shareholder of Mopani Copper Mines, IRH is revitalizing operations to drive production efficiency and profitability.
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-skt-blue mb-1.5">Sustainability</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    Committed to rigorous Environmental, Social, and Governance (ESG) standards, ensuring ethical and responsible mining practices worldwide.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Partner 2: Mopani */}
            <div>
              <h2 className="text-2xl md:text-3xl text-slate-900 mb-3 font-serif font-normal">
                Mopani Copper Mines (MCM)
              </h2>
              <p className="text-slate-600 mb-6 font-medium text-[15px]">
                One of the most significant integrated copper and cobalt producers globally, located in Zambia&apos;s Copperbelt.
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-skt-blue mb-1.5">Scale of Operations</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    Operates vast underground mining shafts in Mufulira and Nkana alongside concentrators, a smelter, and a major refinery.
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-skt-blue mb-1.5">Modernization</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    Partnering with SKT Global to implement advanced underground mechanization and operational infrastructure to scale output.
                  </p>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-skt-blue mb-1.5">Community Impact</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    A cornerstone of the Zambian economy, deeply invested in local employment, safety, and community development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Ecosystem Section */}
      <PartnersSection />
    </main>
  );
}
