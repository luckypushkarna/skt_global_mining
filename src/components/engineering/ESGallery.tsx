import Image from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";

// Using existing project images where available, placeholders for assets not yet shot
const GALLERY_ITEMS = [
  {
    src: "/Engineering & Maintenance-card.webp",
    alt: "Engineering and maintenance work in progress",
    caption: "Planned maintenance cycle — multi-point inspection",
    isReal: true,
  },
  {
    src: "/Underground Workshop-card.webp",
    alt: "Underground workshop interior",
    caption: "Level 850m workshop — heavy equipment bay",
    isReal: true,
  },
  {
    src: "/Safety & Compliance.webp",
    alt: "Safety compliance during engineering work",
    caption: "Safety sign-off before underground access",
    isReal: true,
  },
  {
    label: "Welding in progress",
    hint: "Certified welder on equipment frame, sparks visible, close-up. 800×600px minimum.",
    isReal: false,
  },
  {
    label: "Hydraulic system repair",
    hint: "Engineer working on hydraulic cylinders or valve assembly. 800×600px minimum.",
    isReal: false,
  },
  {
    label: "Component reconditioning",
    hint: "Machined components laid out for inspection, clean workshop setting. 800×600px minimum.",
    isReal: false,
  },
];

export function ESGallery() {
  return (
    <section className="border-b border-slate-200 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        <div className="mb-12 lg:mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-400" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
              In the Field
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
            From the workshop floor.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {GALLERY_ITEMS.map((item, i) =>
            item.isReal ? (
              <figure
                key={i}
                className="group relative aspect-[4/3] bg-slate-200 overflow-hidden"
              >
                <Image
                  src={item.src!}
                  alt={item.alt!}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5">
                    <p className="text-[11px] font-mono text-slate-700 tracking-wide">
                      {item.caption}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ) : (
              <ImagePlaceholder
                key={i}
                label={item.label!}
                hint={item.hint!}
                aspectRatio="aspect-[4/3]"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
