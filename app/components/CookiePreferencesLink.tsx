"use client";

import { useCookieConsent } from "../context/CookieConsentContext";

/** Povezava v nogi za ponovno odpiranje izbire piškotkov. */
export default function CookiePreferencesLink() {
  const { reopenPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={reopenPreferences}
      className="text-ivory/75 underline decoration-ivory/25 underline-offset-[5px] transition hover:text-champagne hover:decoration-champagne/60"
    >
      Nastavitve piškotkov
    </button>
  );
}
