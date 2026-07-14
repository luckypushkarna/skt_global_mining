import Image from "next/image";
import { INFRASTRUCTURE_SYSTEMS } from "@/data/infrastructure-systems";

export function InfraHero() {
  const { hero } = INFRASTRUCTURE_SYSTEMS;

  return (
    <section className="relative w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Left: Text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900 mb-6 font-serif font-normal">
              {hero.title}
            </h1>

            <p className="text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed font-light">
              {hero.intro}
            </p>
          </div>

          {/* Right: Hero image using existing asset */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance.webp"
                alt="SKT Global engineering team performing maintenance on underground mining equipment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

