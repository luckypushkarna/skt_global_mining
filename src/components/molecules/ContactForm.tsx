"use client";

import { useState, useCallback, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

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
    <div className="space-y-2">
      <label className="block text-xs font-semibold tracking-widest uppercase text-neutral-500">
        {label}
        {required && <span className="text-neutral-900 ml-1">*</span>}
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
  "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all duration-200";

export function ContactForm(): JSX.Element {
  const [status, setStatus] = useState<FormStatus>("idle");

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

  const onSubmit = useCallback(
    async (data: ContactFormSchema) => {
      if (data.honeypot) return; // Bot detection

      setStatus("loading");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        setStatus("success");
        reset();

        setTimeout(() => setStatus("idle"), 5000);
      } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    },
    [reset]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
      aria-label="Contact form"
    >
      {/* Honeypot - hidden from humans */}
      <input
        type="text"
        tabIndex={-1}
        className="absolute -left-full opacity-0 pointer-events-none"
        aria-hidden="true"
        autoComplete="off"
        {...register("honeypot")}
      />

      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Full Name" required error={errors.name?.message}>
          <input
            type="text"
            placeholder="John Smith"
            autoComplete="name"
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
            className={inputBase}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </InputField>
      </div>

      {/* Company & Phone Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Company" error={errors.company?.message}>
          <input
            type="text"
            placeholder="Company Name"
            autoComplete="organization"
            className={inputBase}
            {...register("company")}
          />
        </InputField>

        <InputField label="Phone Number" error={errors.phone?.message}>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
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
          className={inputBase}
          aria-invalid={!!errors.subject}
          {...register("subject")}
        />
      </InputField>

      {/* Message */}
      <InputField label="Message" required error={errors.message?.message}>
        <textarea
          rows={6}
          placeholder="Tell us about your project or inquiry..."
          className={cn(inputBase, "resize-none")}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </InputField>

      {/* Status Messages */}
      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 bg-neutral-50 border border-neutral-200"
            role="status"
            aria-live="polite"
          >
            <CheckCircle size={16} className="text-neutral-700 flex-shrink-0" />
            <p className="text-sm text-neutral-700">
              Message sent successfully. We&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-200"
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
            <p className="text-sm text-red-600">
              Something went wrong. Please try again or email us directly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting || status === "loading"}
        rightIcon={<Send size={16} />}
      >
        Send Message
      </Button>

      <p className="text-xs text-neutral-400 text-center">
        By submitting this form, you agree to our Privacy Policy. We never share
        your information.
      </p>
    </form>
  );
}
