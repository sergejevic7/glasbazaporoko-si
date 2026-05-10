"use client";

import Link from "next/link";
import { useCookieConsent } from "../context/CookieConsentContext";

export default function CookieConsentBanner() {
  const { consent, acceptEssentialOnly, acceptAnalytics } = useCookieConsent();

  if (consent !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-bone/80 bg-ivory/98 p-4 shadow-[0_-12px_40px_-12px_rgba(26,20,16,0.2)] backdrop-blur-md md:p-6"
    >
      <div className="container-tight flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-3xl">
          <h2
            id="cookie-banner-title"
            className="heading-display text-lg font-medium text-charcoal md:text-xl"
          >
            Piškotki in zasebnost
          </h2>
          <p
            id="cookie-banner-desc"
            className="mt-2 text-sm leading-relaxed text-charcoal/75"
          >
            Za osnovno delovanje strani uporabljamo nujne piškotke. Če
            soglašate, namestimo tudi Google Analytics za zbirno statistiko
            obiska (brez oglaševanja). Svojo izbiro lahko kadarkoli spremenite
            v{" "}
            <Link
              href="/zasebnost"
              className="font-medium text-burgundy underline decoration-burgundy/30 underline-offset-2 hover:decoration-burgundy"
            >
              politiki zasebnosti
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            onClick={acceptEssentialOnly}
            className="rounded-full border border-charcoal/15 bg-cream px-5 py-3 text-sm font-medium text-charcoal transition hover:border-burgundy/35 hover:bg-bone/80"
          >
            Zavrni neesencialne
          </button>
          <button
            type="button"
            onClick={acceptAnalytics}
            className="rounded-full bg-burgundy px-5 py-3 text-sm font-medium text-ivory shadow-[var(--shadow-card)] transition hover:bg-burgundy-deep"
          >
            Sprejmi vse
          </button>
        </div>
      </div>
    </div>
  );
}
