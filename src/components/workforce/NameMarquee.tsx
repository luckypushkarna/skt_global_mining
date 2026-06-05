"use client";

const NAMES_LIST = [
  "Mulenga Mutati", "Charles Sakanya", "Safeli Maxim Chipulu", "Toms Joseph", 
  "Anand Kolappa Pillai", "Kiran Kumar Reddy", "Sahil Talreja", "Sanjay Kumar Sharma",
  "Mwansa Mwansa", "Mwape Chileshe", "Chanda Musonda", "Kabwe Mulenga", 
  "Mwelwa Chilufya", "Mwamba Bwalya", "Mutale Mwila", "Tembo Phiri", 
  "Banda Mwanza", "Zulu Lungu", "Soko Daka", "Goma Mtonga",
  "Kapambwe Lombe", "Chewe Kalunga", "Kunda Kabaso", "Chibuye Mpundu", 
  "Sampa Sinkala", "Mwila Mumba", "Kasonde Musonda", "Bwalya Mubanga",
  "Kakoma Chiponda", "Kapata Mwewa", "Kanyembo Kasolo", "Chanda Bwalya", 
  "Mwale Mwale", "Nkhoma Phiri", "Lungu Sakala", "Moyo Tembo",
  "Phiri Zulu", "Chilufya Mwape", "Mubanga Chansa", "Mulenga Kabwe",
  "Kasolo Kakoma", "Mumba Sampa", "Bwalya Chanda", "Chileshe Mwansa"
];

export function NameMarquee() {
  // Triple the list to ensure smooth infinite loop
  const scrollingNames = [...NAMES_LIST, ...NAMES_LIST, ...NAMES_LIST];

  return (
    <section className="bg-zinc-950 text-white py-24 md:py-32 border-t border-zinc-900 overflow-hidden relative">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Editorial Context */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block">
            ── Roll Call Monument
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            THE ROLL CALL
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Every name engraved here represents a skilled artisan, mining engineer, 
            safety auditor, or logistics coordinator working on the Copperbelt. We 
            celebrate every individual contribution to our zero-harm, high-yield operation.
          </p>
          <div className="pt-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            Total active workforce: 1,420 operators
          </div>
        </div>

        {/* Right Side: Slow Scrolling Vertical Marquee */}
        <div className="lg:col-span-7 h-96 border border-zinc-800 bg-zinc-950/50 relative overflow-hidden flex justify-around py-4">
          {/* Fade overlays at top and bottom to mask scroll */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

          {/* Column 1 */}
          <div className="w-1/2 overflow-hidden relative h-full">
            <div className="marquee-column space-y-4 font-mono text-xs text-zinc-400 uppercase tracking-wider">
              {scrollingNames.slice(0, 44).map((name, i) => (
                <div key={`${name}-col1-${i}`} className="hover:text-sky-400 transition-colors duration-200 cursor-default flex items-center gap-3">
                  <span className="text-[10px] text-zinc-600">{(i % 44 + 1).toString().padStart(3, '0')}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 (scrolling slightly offset or opposite speed) */}
          <div className="w-1/2 overflow-hidden relative h-full border-l border-zinc-900 pl-6">
            <div className="marquee-column-reverse space-y-4 font-mono text-xs text-zinc-400 uppercase tracking-wider">
              {scrollingNames.slice(20, 64).map((name, i) => (
                <div key={`${name}-col2-${i}`} className="hover:text-sky-400 transition-colors duration-200 cursor-default flex items-center gap-3">
                  <span className="text-[10px] text-zinc-600">{(i % 44 + 45).toString().padStart(3, '0')}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-column {
          display: flex;
          flex-direction: column;
          animation: scrollUp 40s linear infinite;
        }

        .marquee-column-reverse {
          display: flex;
          flex-direction: column;
          animation: scrollDown 45s linear infinite;
        }

        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }

        @keyframes scrollDown {
          0% { transform: translateY(-33.33%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
