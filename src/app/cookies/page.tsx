import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy of SKT Global Mining & Services Limited. Learn how we utilize cookies and how to manage your choices.",
  path: "/cookies",
});

export default function CookiesPage(): JSX.Element {
  return (
    <div className="bg-white min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-3">
            Legal & Choices
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-none">
            Cookie Policy
          </h1>
          <p className="text-sm text-neutral-500 mt-4">
            Last Updated: June 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed text-[15px]">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">1. What are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you visit websites. They are widely used to make websites work or improve efficiency, as well as to provide reporting information to the website owners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">2. How We Use Cookies</h2>
            <p>
              We use cookies to improve your user experience and maintain site security. The categories of cookies used on our Site are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> These are essential for the operation of the Site. They enable basic functions like navigation and security, and do not store any personally identifiable information. These cannot be disabled.</li>
              <li><strong>Performance & Analytics Cookies:</strong> These help us understand how visitors interact with our Site by collecting and reporting information anonymously. We use these metrics to optimize page load speeds and locate broken links.</li>
              <li><strong>Functionality & Preferences Cookies:</strong> These allow the Site to remember choices you make (such as UI animation options or your cookie consent choices themselves).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">3. Your Consent and Preferences</h2>
            <p>
              When you first visit our Site, a Cookie Consent Banner will appear, allowing you to accept or decline performance/analytics cookies. By choosing &ldquo;Accept All,&rdquo; you consent to the storage of both strictly necessary and analytical cookies. If you choose &ldquo;Reject Non-Essential,&rdquo; only strictly necessary cookies will be active.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">4. Managing Cookies in Your Browser</h2>
            <p>
              You can modify your browser settings to reject or delete cookies. Please refer to your browser&apos;s help documentation for instructions:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google Chrome</li>
              <li>Apple Safari</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
            </ul>
            <p className="mt-2 text-sm text-neutral-500">
              Note: Restricting strictly necessary cookies may prevent certain components of our Site (such as interactive maps or GSAP transitions) from operating correctly.
            </p>
          </section>

          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">5. Contact Policy Officer</h2>
            <p>
              For further queries regarding our Cookie Policy, please reach out to us at:
              <br />
              <a href="mailto:director@sktglobalminings.com" className="text-rose-600 hover:underline">director@sktglobalminings.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
