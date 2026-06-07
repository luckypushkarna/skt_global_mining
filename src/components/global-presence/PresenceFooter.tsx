"use client";

export default function PresenceFooter() {
  return (
    <footer className="bg-white border-t border-neutral-100 py-14 md:py-18 px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p
              className="text-base font-extralight text-neutral-900 tracking-[-0.01em] mb-3"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Global Mining &
              <br />
              Infrastructure Corporation
            </p>
            <p className="text-xs text-neutral-400 font-light leading-[1.8] max-w-xs">
              Responsible resource development across four continents.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3 font-light">
              Explore
            </p>
            <nav className="space-y-2.5">
              {["About", "Leadership", "Operations", "Sustainability", "Global Presence"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-xs text-neutral-500 hover:text-neutral-900 transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3 font-light">
              Resources
            </p>
            <nav className="space-y-2.5">
              {["Annual Report", "Investor Relations", "Media Centre", "Careers", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-xs text-neutral-500 hover:text-neutral-900 transition-colors duration-300 font-light"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3 font-light">
              Connect
            </p>
            <nav className="space-y-2.5">
              {["LinkedIn", "Twitter", "YouTube", "Instagram"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-xs text-neutral-500 hover:text-neutral-900 transition-colors duration-300 font-light"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-neutral-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[10px] text-neutral-400 font-light">
            © 2024 Global Mining & Infrastructure Corporation. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy", "Terms", "Cookies", "Accessibility"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] text-neutral-400 hover:text-neutral-700 transition-colors duration-300 font-light"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
