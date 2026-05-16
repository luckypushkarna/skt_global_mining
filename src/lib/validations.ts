import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters")
    .transform((val) => val.trim()),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email must not exceed 254 characters")
    .transform((val) => val.toLowerCase().trim()),

  company: z
    .string()
    .max(200, "Company name must not exceed 200 characters")
    .transform((val) => val.trim())
    .optional(),

  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      message: "Please enter a valid phone number",
    })
    .optional()
    .or(z.literal("")),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must not exceed 200 characters")
    .transform((val) => val.trim()),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(5000, "Message must not exceed 5000 characters")
    .transform((val) => val.trim()),

  honeypot: z.string().max(0, "Bot detected").optional(),
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
