/**
 * Google Analytics 4 — Measurement ID from env only (`NEXT_PUBLIC_GA_ID`).
 * Ne vtikajte ID v izvorno kodo; nastavite v `.env.local` ali na Vercelu.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";

export function isGoogleAnalyticsEnabled(): boolean {
  return GA_MEASUREMENT_ID.length > 0;
}
