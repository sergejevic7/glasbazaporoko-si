"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/contact";
import { siteHashHref } from "../lib/hash-link";
import { ArrowRight, Phone } from "./Icons";

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 z-40 lg:hidden transition-all duration-500 bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      role="region"
      aria-label="Hiter kontakt"
    >
      <div className="flex items-center gap-2 rounded-full border border-bone/70 bg-ivory/95 p-1.5 shadow-[0_18px_40px_-18px_rgba(26,20,16,0.45)] backdrop-blur">
        <a
          href={`tel:${PHONE_TEL}`}
          className="grid min-h-[48px] min-w-[48px] shrink-0 place-items-center rounded-full bg-cream text-burgundy transition hover:bg-champagne/35 focus-visible:outline-offset-4"
          aria-label={`Pokliči ${PHONE_DISPLAY}`}
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={siteHashHref(pathname, "#kontakt")}
          className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-burgundy px-5 py-3 text-sm font-medium text-ivory transition hover:bg-burgundy-deep focus-visible:outline-offset-4"
        >
          Pošljita povpraševanje
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
