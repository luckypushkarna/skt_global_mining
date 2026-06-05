"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Shield, Settings, Check, X } from "lucide-react";

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  useEffect(() => {
    // Prevent SSR hydration mismatch by checking localStorage on client mount
    const consent = localStorage.getItem("skt_cookie_consent");
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!consent) {
      // Show banner after a brief delay
      timer = setTimeout(() => setIsVisible(true), 1500);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "skt_cookie_consent",
      JSON.stringify({ necessary: true, analytics: true })
    );
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(
      "skt_cookie_consent",
      JSON.stringify({ necessary: true, analytics: false })
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "skt_cookie_consent",
      JSON.stringify({ necessary: true, analytics: analyticsConsent })
    );
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-[99999] max-w-[320px] w-[calc(100vw-2rem)] bg-[#121212] border border-neutral-800/80 text-white rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-3.5 select-none"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-neutral-850 flex items-center justify-center text-neutral-300 border border-neutral-800">
                <Shield size={16} />
              </div>
              <div>
                <h3 className="font-semibold text-xs text-white tracking-tight leading-none">
                  Cookie Preferences
                </h3>
                <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest block mt-1">
                  Privacy Choices
                </span>
              </div>
            </div>
            <button
              onClick={handleRejectAll}
              className="text-neutral-500 hover:text-neutral-300 transition-colors p-0.5"
              aria-label="Close cookie consent banner"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body */}
          <div className="text-[11px] text-neutral-400 leading-relaxed">
            {!showPreferences ? (
              <p>
                We use cookies to analyze web traffic and improve layout performance. Learn details in our{" "}
                <Link href="/cookies" className="text-white underline hover:text-neutral-300 transition-colors">
                  Cookie Policy
                </Link>
                .
              </p>
            ) : (
              <div className="space-y-2 py-1">
                {/* Strictly Necessary */}
                <div className="flex items-center justify-between gap-4 p-2 bg-[#1a1a1a] rounded-lg border border-neutral-850">
                  <div>
                    <p className="font-bold text-white text-[10px]">Strictly Necessary</p>
                    <p className="text-[9px] text-neutral-500 mt-0.5">Required for security & site transitions</p>
                  </div>
                  <span className="text-[8px] font-bold text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">
                    Always On
                  </span>
                </div>

                {/* Performance & Analytics */}
                <div className="flex items-center justify-between gap-4 p-2 bg-[#1a1a1a] rounded-lg border border-neutral-850">
                  <div>
                    <p className="font-bold text-white text-[10px]">Performance & Analytics</p>
                    <p className="text-[9px] text-neutral-500 mt-0.5">Helps monitor site loading speeds</p>
                  </div>
                  <button
                    onClick={() => setAnalyticsConsent(!analyticsConsent)}
                    className={`w-8 h-4 rounded-full p-0.5 transition-colors duration-200 focus:outline-none flex items-center ${
                      analyticsConsent ? "bg-white" : "bg-neutral-700"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-transform duration-200 ${
                        analyticsConsent ? "translate-x-4 bg-skt-navy" : "translate-x-0 bg-neutral-400"
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-neutral-850">
            {!showPreferences ? (
              <>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-neutral-400 hover:text-white transition-colors"
                >
                  <Settings size={12} />
                  <span>Customize</span>
                </button>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleRejectAll}
                    className="text-[10px] font-bold tracking-wider uppercase bg-transparent hover:bg-neutral-850 border border-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md transition-all duration-200 active:scale-95"
                  >
                    Reject
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="text-[10px] font-bold tracking-wider uppercase bg-white hover:bg-neutral-200 text-black px-3.5 py-1.5 rounded-md transition-all duration-200 active:scale-95 font-semibold"
                  >
                    Accept All
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-[10px] font-bold tracking-wider uppercase text-neutral-400 hover:text-white transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="text-[10px] font-bold tracking-wider uppercase bg-white hover:bg-neutral-200 text-black px-4 py-1.5 rounded-md transition-all duration-200 active:scale-95 flex items-center gap-1 font-semibold"
                >
                  <Check size={11} />
                  <span>Save Choices</span>
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
