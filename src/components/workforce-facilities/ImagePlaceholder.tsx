import { Image as ImageIcon } from "lucide-react";

interface PlaceholderProps {
  label: string;
  hint: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  hint,
  aspectRatio = "aspect-[4/3]",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`relative ${aspectRatio} bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="text-center p-6 max-w-sm">
        <ImageIcon
          className="w-8 h-8 text-slate-300 mx-auto mb-4"
          strokeWidth={1.25}
        />
        <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">
          Image Placeholder
        </p>
        <p className="text-sm font-medium text-slate-700 mb-2">{label}</p>
        <p className="text-xs text-slate-500 leading-relaxed italic">{hint}</p>
      </div>

      {/* Corner marker */}
      <div className="absolute top-3 left-3 px-2 py-0.5 bg-white border border-slate-200 text-[9px] font-mono uppercase tracking-widest text-slate-500">
        Placeholder
      </div>
    </div>
  );
}

export function VideoPlaceholder({
  label,
  hint,
  className = "",
}: {
  label: string;
  hint: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-video bg-slate-900 border border-dashed border-slate-700 flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="text-center p-6 max-w-md">
        {/* Play icon */}
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-6 h-6 text-white/60 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-white/40 mb-2">
          Video Placeholder
        </p>
        <p className="text-base font-medium text-white/80 mb-2">{label}</p>
        <p className="text-xs text-white/50 leading-relaxed italic max-w-sm mx-auto">
          {hint}
        </p>
      </div>

      <div className="absolute top-4 left-4 px-2 py-0.5 bg-white/10 border border-white/20 text-[9px] font-mono uppercase tracking-widest text-white/60">
        Placeholder
      </div>
    </div>
  );
}
