/**
 * Produkcijska domena — naj bo skladna z DNS in SSL certifikatom.
 * Za staging lahko kasneje uvedete NEXT_PUBLIC_SITE_URL v .env.
 */
export const SITE_URL = "https://www.glasbazaporoko.si" as const;

/** Domena kot blagovna znamka (OG siteName, publisher). */
export const SITE_BRAND = "glasbazaporoko.si" as const;

/** Prikazno ime podjetja / izvajalca (JSON-LD, zaupanje). */
export const SITE_BUSINESS_NAME = "Glasba za poroko – Barbara Zalaznik" as const;

/** Konzistentna predogledna slika za OG/Twitter (javna pot). */
export const OG_IMAGE_PATH = "/og-image.jpg" as const;

export const OG_IMAGE_ALT =
  "Premium poročna glasba in violinistka Barbara Zalaznik — glasba za poroko, poročni obred in slavje v Sloveniji";
