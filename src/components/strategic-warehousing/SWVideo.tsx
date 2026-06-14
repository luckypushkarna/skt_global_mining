import { VideoPlaceholder } from "./ImagePlaceholder";

export function SWVideo() {
  return (
    <section className="border-b border-slate-200 bg-slate-950">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/20" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">
                Inside the Workshop
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08]">
              See the work
              <br />
              <span className="text-white/30">behind the work.</span>
            </h2>
          </div>

          <p className="lg:col-span-5 text-base text-white/55 leading-relaxed font-light">
            A short walk through one of our underground workshops during a
            scheduled maintenance cycle.
          </p>
        </div>

        <VideoPlaceholder
          label="Workshop Video"
          hint="30–90 second video of engineers working in underground workshop. Show drilling, welding, hydraulic repair. MP4 format, 1920×1080, no audio required (will play muted)."
        />
      </div>
    </section>
  );
}

