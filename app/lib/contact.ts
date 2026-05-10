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
    "Sporočita datum, lokacijo in želje — odgovorim, kakor hitro uspem.",
  /** Zapiranje CTA bloka */
  finalCtaBody:
    "Pošljita kratko sporočilo z datumom in lokacijo. Odgovorim, kakor hitro uspem. Vsako povpraševanje obravnavam osebno.",
  /** Kratka vrstica pod gumbi */
  finalCtaFootnote: "Odgovorim, kakor hitro uspem · brez obveznosti",
  /** Proces, korak 1 */
  processStep1:
    "Sporočita datum, lokacijo in svojo vizijo. Odgovorim, kakor hitro uspem.",
  /** FAQ sidebar */
  faqAside:
    "Če pri katerem od odgovorov ostane kaj nedorečenega, mi z veseljem napišita — odgovorim, kakor hitro uspem.",
  /** Po uspešnem oddaji obrazca */
  formSuccess: "Hvala — odgovorim, kakor hitro uspem.",
} as const;
