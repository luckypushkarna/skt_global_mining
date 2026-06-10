"use client";

import { useState, useCallback, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Send, X } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

// ─── CONFIG ──────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgdrwzz";
const STATUS_AUTO_HIDE_MS = 6000;
// ─────────────────────────────────────────────────────────

type FormStatus = "idle" | "loading" | "success" | "error";

interface ErrorDetails {
  title: string;
  message: string;
  hint?: string;
}

interface InputFieldProps {
  readonly label: string;
  readonly error?: string | undefined;
  readonly required?: boolean;
  readonly children: React.ReactNode;
}

function InputField({
  label,
  error,
  required = false,
  children,
}: InputFieldProps): JSX.Element {
  return (
    <div className="space-y-1.5 md:space-y-2 w-full">
      <label className="block text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
        {label}
        {required && <span className="text-neutral-950 ml-1">*</span>}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 text-xs text-red-500"
            role="alert"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase =
  "w-full px-4 py-2.5 md:py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all duration-200";

// ─── ERROR PARSER ────────────────────────────────────────
const parseFormspreeError = (
  status: number,
  data: any
): ErrorDetails => {
  // Network / no internet
  if (status === 0) {
    return {
      title: "No internet connection",
      message: "Please check your network and try again.",
      hint: "If the issue persists, email us directly.",
    };
  }

  // Bad request — validation issues
  if (status === 400) {
    const errors = data?.errors?.[0];
    if (errors?.message?.toLowerCase().includes("email")) {
      return {
        title: "Invalid email address",
        message: "Please use a valid email format (e.g. name@domain.com).",
        hint: "Try a different email address.",
      };
    }
    return {
      title: "Invalid form data",
      message: errors?.message || "Some fields contain invalid data.",
      hint: "Please review your inputs and try again.",
    };
  }

  // Forbidden — usually unverified email or restricted form
  if (status === 403) {
    return {
      title: "Email not verified",
      message:
        "The admin email hasn't been verified with Formspree yet.",
      hint: "Please verify your email in Formspree dashboard or contact support.",
    };
  }

  // Not found — wrong form ID
  if (status === 404) {
    return {
      title: "Form not configured",
      message: "The contact form endpoint cannot be reached.",
      hint: "Please contact us directly via email.",
    };
  }

  // Too many requests — Formspree rate limit
  if (status === 429) {
    return {
      title: "Too many requests",
      message: "You've sent too many messages recently.",
      hint: "Please wait a few minutes before trying again.",
    };
  }

  // Server error
  if (status >= 500) {
    return {
      title: "Server temporarily unavailable",
      message: "Our service is having issues right now.",
      hint: "Please try again in a few minutes.",
    };
  }

  // Same-email block (some users use admin email)
  if (data?.error?.toLowerCase().includes("same email")) {
    return {
      title: "Cannot use admin email",
      message: "Please use a different email address from the admin's.",
      hint: "Use your personal or business email instead.",
    };
  }

  // Spam detection
  if (data?.error?.toLowerCase().includes("spam")) {
    return {
      title: "Message flagged as spam",
      message: "Your message was blocked by our spam filter.",
      hint: "Avoid excessive links or special characters and try again.",
    };
  }

  // Default fallback
  return {
    title: "Something went wrong",
    message: data?.error || "We couldn't send your message.",
    hint: "Please try again or email us directly.",
  };
};

// ─── MAIN COMPONENT ──────────────────────────────────────
export function ContactForm(): JSX.Element {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorDetails, setErrorDetails] = useState<ErrorDetails | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  // ─── Auto-hide status ──────────────────────────────────
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
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

  // ─── Submit handler ────────────────────────────────────
  const onSubmit = useCallback(
    async (data: ContactFormSchema) => {
      // Bot honeypot check
      if (data.honeypot) {
        setStatus("error");
        setErrorDetails({
          title: "Bot detected",
          message: "Submission blocked.",
        });
        return;
      }

      setStatus("loading");
      setErrorDetails(null);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.company || "Not provided",
            phone: data.phone || "Not provided",
            subject: data.subject,
            message: data.message,
            _replyto: data.email,            // Formspree: reply to user
            _subject: `New Contact: ${data.subject}`, // email subject line
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        // Try to parse response (Formspree returns JSON)
        let responseData: any = {};
        try {
          responseData = await response.json();
        } catch {
          // If parsing fails, use empty object
        }

        if (!response.ok) {
          const errDetails = parseFormspreeError(response.status, responseData);
          setErrorDetails(errDetails);
          setStatus("error");

          // Log for debugging
          console.error("Formspree error:", {
            status: response.status,
            data: responseData,
          });
          return;
        }

        // ✅ Success
        setStatus("success");
        reset();
      } catch (err: any) {
        let errDetails: ErrorDetails;

        if (err.name === "AbortError") {
          errDetails = {
            title: "Request timed out",
            message: "The server took too long to respond.",
            hint: "Check your connection and try again.",
          };
        } else if (
          err.message?.includes("Failed to fetch") ||
          err.message?.includes("NetworkError")
        ) {
          errDetails = {
            title: "Network error",
            message: "Cannot reach the server.",
            hint: "Check your internet connection.",
          };
        } else {
          errDetails = {
            title: "Unexpected error",
            message: err.message || "Something went wrong.",
            hint: "Please try again or email us directly.",
          };
        }

        setErrorDetails(errDetails);
        setStatus("error");
        console.error("Submit error:", err);
      }
    },
    [reset]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5 md:gap-6 w-full"
        aria-label="Contact form"
      >
        {/* Honeypot */}
        <input
          type="text"
          tabIndex={-1}
          className="absolute -left-full opacity-0 pointer-events-none"
          aria-hidden="true"
          autoComplete="off"
          {...register("honeypot")}
        />

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
          <InputField label="Full Name" required error={errors.name?.message}>
            <input
              type="text"
              placeholder="John Smith"
              autoComplete="name"
              disabled={isSubmitting}
              className={inputBase}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
          </InputField>

          <InputField label="Email Address" required error={errors.email?.message}>
            <input
              type="email"
              placeholder="john@company.com"
              autoComplete="email"
              disabled={isSubmitting}
              className={inputBase}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
          </InputField>
        </div>

        {/* Company & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
          <InputField label="Company" error={errors.company?.message}>
            <input
              type="text"
              placeholder="Company Name"
              autoComplete="organization"
              disabled={isSubmitting}
              className={inputBase}
              {...register("company")}
            />
          </InputField>

          <InputField label="Phone Number" error={errors.phone?.message}>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              disabled={isSubmitting}
              className={inputBase}
              {...register("phone")}
            />
          </InputField>
        </div>

        {/* Subject */}
        <InputField label="Subject" required error={errors.subject?.message}>
          <input
            type="text"
            placeholder="How can we help you?"
            disabled={isSubmitting}
            className={inputBase}
            aria-invalid={!!errors.subject}
            {...register("subject")}
          />
        </InputField>

        {/* Message */}
        <InputField label="Message" required error={errors.message?.message}>
          <textarea
            rows={5}
            placeholder="Tell us about your project or inquiry..."
            disabled={isSubmitting}
            className={cn(inputBase, "resize-none md:min-h-[140px]")}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        </InputField>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full md:w-auto"
            isLoading={isSubmitting || status === "loading"}
            rightIcon={<Send size={14} />}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </div>

        <p className="text-[10px] md:text-xs text-neutral-400 text-center px-4">
          By submitting this form, you agree to our Privacy Policy. We never
          share your information.
        </p>
      </form>

      {/* ─── TOAST POPUP (Success / Error) ──────────────── */}
      <AnimatePresence>
        {status === "success" && (
          <SuccessToast onClose={() => setStatus("idle")} />
        )}

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
    </>
  );
}

// ─── SUCCESS TOAST ───────────────────────────────────────
function SuccessToast({ onClose }: { onClose: () => void }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[9999]"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-start gap-3 p-4 bg-white border border-green-200 rounded-xl shadow-xl">
        {/* Success icon */}
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle size={20} className="text-green-600" />
        </div>

        {/* Content */}
        <div className="flex-1 pt-0.5">
          <p className="text-sm font-semibold text-neutral-900">
            Message sent successfully!
          </p>
          <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
            Thank you for reaching out. We&apos;ll respond within 24 hours.
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="flex-shrink-0 text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: STATUS_AUTO_HIDE_MS / 1000, ease: "linear" }}
        className="h-0.5 bg-green-500 rounded-full mt-0.5"
      />
    </motion.div>
  );
}

// ─── ERROR TOAST ─────────────────────────────────────────
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
        {/* Error icon */}
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-50 flex items-center justify-center">
          <AlertCircle size={20} className="text-red-600" />
        </div>

        {/* Content */}
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

        {/* Close button */}
        <button
          onClick={onClose}
          className="flex-shrink-0 text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
      </div>

      {/* Progress bar */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: STATUS_AUTO_HIDE_MS / 1000, ease: "linear" }}
        className="h-0.5 bg-red-500 rounded-full mt-0.5"
      />
    </motion.div>
  );
}
