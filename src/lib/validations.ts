import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address")
    .max(254, "Email must not exceed 254 characters"),

  company: z
    .string()
    .trim()
    .max(200, "Company name must not exceed 200 characters")
    .optional(),

  phone: z
    .string()
    .trim()
    .refine((val) => val === "" || /^\+?[0-9\s\-\(\)]{7,20}$/.test(val), {
      message: "Please enter a valid phone number",
    })
    .optional(),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must not exceed 200 characters"),

  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters")
    .max(5000, "Message must not exceed 5000 characters"),

  honeypot: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
};
