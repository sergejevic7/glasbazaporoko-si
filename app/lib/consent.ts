/** Ključ v localStorage za izbiro piškotkov (GDPR / ZVOP-2). */
export const COOKIE_CONSENT_STORAGE_KEY = "glasbazaporoko-cookie-consent" as const;

/** Obiskovalec je zavrnil neobvezne piškotke (brez analitike). */
export type CookieConsentEssential = "essential";

/** Obiskovalec je dovolil tudi statistično analitiko (npr. Google Analytics). */
export type CookieConsentAnalytics = "analytics";

export type StoredCookieConsent =
  | CookieConsentEssential
  | CookieConsentAnalytics;

export function isStoredConsent(v: string | null): v is StoredCookieConsent {
  return v === "essential" || v === "analytics";
}

/** Dogodek po spremembi izbire piškotkov (isti zavihek). */
export const COOKIE_CONSENT_CHANGED_EVENT =
  "glasbazaporoko:cookie-consent" as const;
