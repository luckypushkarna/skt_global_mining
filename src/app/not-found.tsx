import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | SKT Global",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-[#050505] text-white px-6 py-28 overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-rose-900/10 blur-[140px] pointer-events-none -top-20 -left-20"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500 mb-4">
          404 — Not Found
        </p>

        <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-white mb-6">
          Page Not Found
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto font-light">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-neutral-900 hover:bg-neutral-200 transition-colors shadow-lg"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/15 border border-white/15 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
