/**
 * Produkcijska domena — naj bo skladna z DNS in SSL certifikatom.
 * Za staging lahko kasneje uvedete NEXT_PUBLIC_SITE_URL v .env.
 */
export const SITE_URL = "https://www.glasbazaporoko.si" as const;

export const SITE_NAME = "Glasba za poroko – Barbara Zalaznik" as const;

/** Predogledna slika za deljenje (Facebook, LinkedIn, X …) — datoteka v public/images/. */
export const OG_IMAGE_PATH = "/images/hero-glasba-za-poroko.jpg" as const;

export const OG_IMAGE_ALT =
  "Violinistka Barbara Zalaznik pri poročnem nastopu — glasba za poroko, poročna glasba Slovenija";
