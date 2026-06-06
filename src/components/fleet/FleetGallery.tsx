import Image from "next/image";
import { MECHANISED_FLEET } from "@/data/mechanised-fleet";

export function FleetGallery() {
  const { gallery } = MECHANISED_FLEET;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              Fleet in Action
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
            From the field.
          </h2>
        </div>

        {/* 3-column gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {gallery.map((item, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden bg-slate-100"
              style={{
                /* First item spans 2 columns on lg for visual variety */
                gridColumn: i === 0 ? undefined : undefined,
              }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Hover caption overlay */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5">
                    <p className="text-[11px] font-mono text-slate-700 tracking-wide leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
