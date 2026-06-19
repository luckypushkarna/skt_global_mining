"use client";

import { useState, useEffect, JSX, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Handshake,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Send,
  AlertCircle,
  X,
} from "lucide-react";
import { Badge } from "@/components/atoms/Badge";

// ─── CONFIG ──────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "386fb841-e18c-4f44-a066-b9ca44646790";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const STATUS_AUTO_HIDE_MS = 6000;
const REQUEST_TIMEOUT_MS = 15000;
// ─────────────────────────────────────────────────────────

type FormStatus = "idle" | "loading" | "success" | "error";

interface ErrorDetails {
  title: string;
  message: string;
  hint?: string;
}

const parseWeb3FormsError = (
  status: number,
  data: any
): ErrorDetails => {
  if (status === 0) {
    return { title: "No internet connection", message: "Please check your network and try again.", hint: "If the issue persists, email us directly." };
  }
  if (status === 400) {
    const msg = data?.message?.toLowerCase() || "";
    if (msg.includes("email")) return { title: "Invalid email address", message: "Please use a valid email format (e.g. name@domain.com).", hint: "Try a different email address." };
    if (msg.includes("required")) return { title: "Missing required fields", message: data?.message || "Some required fields are missing.", hint: "Please fill in all required fields." };
    return { title: "Invalid form data", message: data?.message || "Some fields contain invalid data.", hint: "Please review your inputs and try again." };
  }
  if (status === 401 || status === 403) {
    const msg = data?.message?.toLowerCase() || "";
    if (msg.includes("limit") || msg.includes("exceeded") || msg.includes("quota")) {
      return { title: "Service Temporarily Unavailable", message: "Our servers are experiencing high traffic at the moment.", hint: "Please email us directly." };
    }
    return { title: "Authentication failed", message: "The form access key is invalid or restricted.", hint: "Please contact site administrator." };
  }
  if (status === 404) return { title: "Service unavailable", message: "The contact form endpoint cannot be reached.", hint: "Please contact us directly via email." };
  if (status === 429) return { title: "Too many requests", message: "You've sent too many messages recently.", hint: "Please wait a few minutes before trying again." };
  if (status >= 500) return { title: "Server temporarily unavailable", message: "Our service is having issues right now.", hint: "Please try again in a few minutes." };
  const dataMsg = (data?.message || "").toLowerCase();
  if (dataMsg.includes("spam") || dataMsg.includes("bot")) return { title: "Message flagged as spam", message: "Your message was blocked by our spam filter.", hint: "Avoid excessive links or special characters and try again." };
  return { title: "Something went wrong", message: data?.message || "We couldn't send your message.", hint: "Please try again or email us directly." };
};

const BENEFITS = [
  {
    icon: Globe,
    title: "Global Network",
    desc: "Access international mining and trade networks across Africa and Asia.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    desc: "Scale operations alongside IRH and Mopani's expanding mining footprint.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    desc: "Join a proven ecosystem of mining contractors and resource investors.",
  },
  {
    icon: Building2,
    title: "Infrastructure Support",
    desc: "Leverage existing mining infrastructure and operational systems.",
  },
];

const PARTNERSHIP_TYPES = [
  "Mining Contractor",
  "Equipment Supplier",
  "Logistics & Transport",
  "Technical Consultant",
  "Investment Partner",
  "Other",
];

export default function BecomePartnerPage(): JSX.Element {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorDetails, setErrorDetails] = useState<ErrorDetails | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (status === "success" || status === "error") {
      timer = setTimeout(() => {
        setStatus("idle");
        setErrorDetails(null);
      }, STATUS_AUTO_HIDE_MS);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorDetails(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone || "Not provided",
        partnership_type: data.partnership_type,
        country: data.country,
        message: data.message,
        subject: "New Partnership Application",
        from_name: "SKT Global Partner Form",
        replyto: data.email,
        botcheck: data.botcheck || "",
      };

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let responseData: any = {};
      try {
        responseData = await res.json();
      } catch { }

      if (!res.ok || !responseData.success) {
        const errDetails = parseWeb3FormsError(res.status, responseData);
        setErrorDetails(errDetails);
        setStatus("error");
        return;
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      let errDetails: ErrorDetails;
      if (err.name === "AbortError") {
        errDetails = { title: "Request timed out", message: "The server took too long to respond.", hint: "Check your connection and try again." };
      } else if (err.message?.includes("Failed to fetch") || err.message?.includes("NetworkError")) {
        errDetails = { title: "Network error", message: "Cannot reach the server.", hint: "Check your internet connection." };
      } else {
        errDetails = { title: "Unexpected error", message: err.message || "Something went wrong.", hint: "Please try again or email us directly." };
      }
      setErrorDetails(errDetails);
      setStatus("error");
    }
  };

  return (
    <div className="bg-bg-soft">
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 border-b border-neutral-200/60">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="dot">Partnership Program</Badge>

            <h1 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-normal text-neutral-900 tracking-tight leading-[1.05]">
              Become a{" "}
              <span className="text-neutral-400">Partner</span>
            </h1>

            <p className="mt-5 md:mt-6 text-[15px] sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Join SKT Global&apos;s network of mining contractors, suppliers, and
              investors. Together we power the future of copper production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 border-b border-neutral-200/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mb-10 md:mb-16"
          >
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Why Partner With Us
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-neutral-900 tracking-tight leading-[1.15]">
              Built for sustainable growth
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 md:p-8 bg-white hover:shadow-md border border-neutral-200/80 rounded-2xl transition-all duration-300 group"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 text-neutral-900">
                  <b.icon size={20} className="md:w-6 md:h-6" />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-neutral-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm md:text-[15px] text-neutral-500 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Apply Now
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-neutral-900 tracking-tight leading-[1.15]">
              Start your partnership journey
            </h2>
            <p className="mt-4 text-[15px] md:text-base text-neutral-500 max-w-lg mx-auto leading-relaxed">
              Fill out the form below. Our team will review and respond within
              48 hours.
            </p>
          </motion.div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="bg-white border border-green-200/80 shadow-sm rounded-3xl p-10 md:p-14 text-center max-w-xl mx-auto"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-green-50 mb-6 md:mb-8">
                <CheckCircle className="text-green-600 w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                Application Submitted!
              </h3>
              <p className="mt-3 md:mt-4 text-[15px] md:text-base text-neutral-500 leading-relaxed max-w-md mx-auto">
                Thank you for your interest in partnering with SKT Global. Our
                team will review your application and respond within 48 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white border border-neutral-200/80 shadow-md rounded-3xl p-6 sm:p-8 md:p-12 space-y-6 md:space-y-8"
            >
              {/* Honeypot */}
              <input
                type="checkbox"
                name={"bot" + "check"}
                className="hidden"
                tabIndex={-1}
              />

              {/* Name + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <Field label="Full Name" required>
                  <input
                    name="name"
                    type="text"
                    required
                    disabled={status === "loading"}
                    placeholder="John Smith"
                    className={inputCls}
                  />
                </Field>

                <Field label="Company" required>
                  <input
                    name="company"
                    type="text"
                    required
                    disabled={status === "loading"}
                    placeholder="Company Ltd."
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <Field label="Email" required>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    placeholder="you@company.com"
                    className={inputCls}
                  />
                </Field>

                <Field label="Phone">
                  <input
                    name="phone"
                    type="tel"
                    disabled={status === "loading"}
                    placeholder="+91 98765 43210"
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Partnership Type */}
              <Field label="Partnership Type" required>
                <select
                  name="partnership_type"
                  required
                  disabled={status === "loading"}
                  className={inputCls}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select type...
                  </option>
                  {PARTNERSHIP_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Country */}
              <Field label="Country" required>
                <input
                  name="country"
                  type="text"
                  required
                  disabled={status === "loading"}
                  placeholder="India"
                  className={inputCls}
                />
              </Field>

              {/* Message */}
              <Field label="Tell us about your business" required>
                <textarea
                  name="message"
                  rows={4}
                  required
                  disabled={status === "loading"}
                  placeholder="Brief description of your company, capabilities, and how you'd like to collaborate..."
                  className={`${inputCls} resize-none`}
                />
              </Field>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-4 md:py-3.5 bg-neutral-900 text-white text-[15px] md:text-base font-semibold rounded-xl hover:bg-neutral-800 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all mt-4"
              >
                {status === "loading" ? "Submitting..." : "Submit Application"}
                {status !== "loading" && <Send size={16} />}
              </button>

              <p className="text-[12px] md:text-xs text-neutral-500 text-center leading-relaxed max-w-xs mx-auto">
                By submitting, you agree to our Privacy Policy.
                <br className="hidden md:block" /> We respond to all inquiries within 48 hours.
              </p>
            </motion.form>
          )}
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-neutral-200/60 bg-neutral-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm md:text-base text-neutral-500">
            Already a partner?
          </p>
          <a
            href="/partners/portal"
            className="mt-3 inline-flex items-center gap-2 text-[15px] md:text-base font-semibold text-neutral-900 hover:gap-3 hover:text-neutral-600 transition-all"
          >
            Access Partner Portal
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ─── ERROR TOAST ──────────────────────────────── */}
      <AnimatePresence>
        {status === "error" && errorDetails && (
          <ErrorToast
            details={errorDetails}
            onClose={() => {
              setStatus("idle");
              setErrorDetails(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── ERROR TOAST COMPONENT ─────────────────────────────
function ErrorToast({
  details,
  onClose,
}: {
  details: ErrorDetails;
  onClose: () => void;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[9999]"
      role="alert"
      aria-live="assertive"
    >
      <div className="relative flex items-start gap-3 p-4 bg-white border border-red-200 rounded-xl shadow-xl">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-50 flex items-center justify-center">
          <AlertCircle size={20} className="text-red-600" />
        </div>

        <div className="flex-1 pt-0.5">
          <p className="text-sm font-semibold text-neutral-900">
            {details.title}
          </p>
          <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
            {details.message}
          </p>
          {details.hint && (
            <p className="mt-2 text-xs text-neutral-400 italic leading-relaxed">
              💡 {details.hint}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="flex-shrink-0 text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>

      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: STATUS_AUTO_HIDE_MS / 1000, ease: "linear" }}
        className="h-0.5 bg-red-500 rounded-full mt-0.5"
      />
    </motion.div>
  );
}

// ─── Helpers ─────────────────────────────────────────────
const inputCls =
  "w-full px-4 py-3.5 md:py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-[15px] md:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-4 focus:ring-neutral-900/10 focus:bg-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="space-y-2">
      <label className="block text-[11px] md:text-xs font-semibold tracking-[0.1em] md:tracking-[0.15em] uppercase text-neutral-600">
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}
