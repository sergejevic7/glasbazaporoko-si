"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL } from "../lib/contact";
import { ArrowRight, Phone } from "./Icons";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 lg:hidden transition-all duration-500 ${
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
          className="grid h-12 w-12 place-items-center rounded-full bg-cream text-burgundy"
          aria-label="Pokliči"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="#kontakt"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-5 py-3 text-sm font-medium text-ivory"
        >
          Pošljita povpraševanje
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
