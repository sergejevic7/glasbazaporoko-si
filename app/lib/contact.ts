/** Možnosti storitve — morajo ustrezati obrazcu in server akciji. */
export const INQUIRY_SERVICE_OPTIONS = [
  "Glasba za civilni obred",
  "Glasba za cerkveni obred",
  "Glasba za pogostitev",
  "Glasba za poročno slavje",
  "Celoten poročni paket",
  "Drugo",
] as const;

export type InquiryServiceOption = (typeof INQUIRY_SERVICE_OPTIONS)[number];

/** Prejemnik povpraševanj (nadomestek z CONTACT_EMAIL v okolju). */
export const CONTACT_EMAIL_DISPLAY = "info@glasbazaporoko.si";

/** Mobitel za povpraševanja (prikaz + href za tel:) */
export const PHONE_DISPLAY = "041 756 543";
export const PHONE_TEL = "+38641756543";

/** Besedilo o času odgovora (skladno na več mestih) */
export const RESPONSE_COPY = {
  /** Kontakt – uvodni odstavek */
  contactIntro:
    "Datum poroke, prizorišče in želje — pišita prostorno. Vsako povpraševanje obravnavam osebno; odgovorim v najkrajšem možnem roku.",
  /** Zapiranje CTA bloka */
  finalCtaBody:
    "Začniva z datumom in lokacijo — že iz prvega sporočila vesta, da je za vaju rezerviran čas. Brez obveznosti: najprej poslušam, nato predlagam.",
  /** Kratka vrstica pod gumbi */
  finalCtaFootnote: "Oseben odgovor · brez obveznosti · diskretna obravnava",
  /** Proces, korak 1 */
  processStep1:
    "Sporočita datum, lokacijo in svojo vizijo. Odgovorim, kakor hitro uspem.",
  /** FAQ sidebar */
  faqAside:
    "Česar tu ni, razložim po e-pošti ali na kratkem klicu — brez obveznosti in brez pritiska.",
  /** Po uspešnem oddaji obrazca */
  formSuccess: "Hvala — odgovorim, kakor hitro uspem.",
} as const;
