import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Anti-Bribery & Corruption Policy",
  description: "Anti-Bribery & Corruption Policy of SKT Global Mining & Services Limited.",
  path: "/anti-bribery",
});

export default function AntiBriberyPage(): JSX.Element {
  return (
    <div className="bg-white min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-3">
            Ethics & Governance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-none">
            Anti-Bribery Policy
          </h1>
          <p className="text-sm text-neutral-500 mt-4">
            Last Updated: June 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed text-[15px]">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">1. Policy Statement</h2>
            <p>
              SKT Global Mining & Services Limited maintains a zero-tolerance stance toward all forms of bribery and corruption. We are committed to conducting our business operations ethically, transparently, and with integrity. This Policy applies to all directors, officers, employees, agents, and contractors across all global and local offices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">2. Legal Frameworks</h2>
            <p>
              Our operations are subject to strict anti-corruption laws, and we comply fully with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The <strong>Zambian Anti-Corruption Act No. 3 of 2012</strong>.</li>
              <li>The <strong>Indian Prevention of Corruption Act 1988</strong> (governing our parent company).</li>
              <li>International frameworks, including the <strong>US Foreign Corrupt Practices Act (FCPA)</strong> and the <strong>UK Bribery Act 2010</strong>.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">3. Prohibited Conduct</h2>
            <p>
              Under this Policy, the following activities are strictly prohibited:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inappropriate Payments:</strong> Offering, giving, receiving, or soliciting bribes, kickbacks, or unauthorized facilitation payments to speed up governmental processes.</li>
              <li><strong>Government Officials:</strong> Providing gifts, meals, or expensive hospitality to government officials (such as mining department inspectors, tax auditors, or port authorities) to obtain or retain business advantages.</li>
              <li><strong>Conflicts of Interest:</strong> Engaging in activities where personal relationships interfere with operational procurement decisions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">4. Gift & Hospitality Standards</h2>
            <p>
              Gifts or corporate hospitality may only be offered or accepted if they are nominal in value, occur infrequently, comply with local laws, and are logged transparently in the Corporate Gift Register. Cash or cash-equivalent gifts are prohibited under all circumstances.
            </p>
          </section>

          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">5. Reporting & Whistleblowing</h2>
            <p>
              We protect whistleblowers who report suspected violations in good faith. Reports can be filed anonymously and are handled through our internal audit compliance department:
              <br />
              Email: <a href="mailto:integrity@sktglobal.com" className="text-rose-600 hover:underline">integrity@sktglobal.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
