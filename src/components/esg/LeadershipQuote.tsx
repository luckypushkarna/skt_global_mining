import Image from "next/image";

export function LeadershipQuote() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Portrait */}
        <div className="lg:col-span-4 flex lg:justify-end">
          <div>
            <div className="relative inline-block">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-emerald-200" />
              <div className="relative w-48 h-56 lg:w-56 lg:h-64 overflow-hidden bg-slate-100">
                <Image
                  src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125409/skt_global_mining/Raj%20Sir%20Photo.webp"
                  alt="Raj Talreja - Chairman, SKT Global Mining"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 200px, 224px"
                />
              </div>
            </div>
            {/* Name tag */}
            <div className="mt-4">
              <p className="font-bold text-slate-900 text-sm">Raj Talreja</p>
              <p className="text-xs text-slate-500 tracking-widest uppercase mt-0.5">
                Chairman, SKT Global Mining
              </p>
            </div>
          </div>
        </div>

        {/* Right: Quote */}
        <div className="lg:col-span-8">
          {/* Opening quote mark */}
          <div className="text-[80px] leading-none text-emerald-200 font-serif mb-2 select-none">
            &ldquo;
          </div>

          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-slate-900 leading-[1.45] mb-6 -mt-6">
            Sustainability isn&apos;t about checking boxes. It&apos;s about ensuring that
            when we leave, the land is more vibrant, the community is stronger,
            and the people are better skilled.
          </blockquote>

          {/* Closing line */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200 max-w-[60px]" />
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
              From the Chairman&apos;s Statement, ESG Report 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
