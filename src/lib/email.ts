import nodemailer from "nodemailer";
import { env } from "@/env";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_PORT === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${data.name}" <${env.SMTP_USER}>`,
    to: env.CONTACT_EMAIL,
    replyTo: data.email,
    subject: `New Contact Form Submission: ${data.subject}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Company: ${data.company || "N/A"}
      Phone: ${data.phone || "N/A"}
      Subject: ${data.subject}
      
      Message:
      ${data.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "N/A"}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}
