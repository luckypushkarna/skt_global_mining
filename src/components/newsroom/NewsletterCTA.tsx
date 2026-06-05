"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-16 mb-8"
    >
      <div className="relative bg-gradient-to-br from-skt-navy via-skt-blue to-slate-800 rounded-2xl overflow-hidden">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-skt-red" />

        {/* Background decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }} />
        </div>

        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Left content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={15} className="text-white" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-300">
                  Newsletter
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                Stay Informed with SKT Global
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                Subscribe to receive the latest press releases, operational updates, and
                sustainability reports directly in your inbox.
              </p>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-auto">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl px-5 py-4"
                >
                  <CheckCircle size={18} className="text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">You&apos;re subscribed!</p>
                    <p className="text-xs text-slate-300">Thank you for joining our newsletter.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 min-w-[320px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 bg-skt-red hover:bg-red-700 disabled:opacity-70 text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-xl transition-colors duration-200 shrink-0"
                  >
                    {status === "loading" ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : null}
                    Subscribe
                  </button>
                </form>
              )}
              <p className="text-[10px] text-slate-500 mt-2">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
