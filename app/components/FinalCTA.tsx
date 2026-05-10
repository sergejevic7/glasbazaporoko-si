import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL, RESPONSE_COPY } from "../lib/contact";
import { GALLERY } from "../lib/media";
import { ArrowRight } from "./Icons";

export default function FinalCTA() {
  const bg = GALLERY[3]; // "Prvi ples" – emocionalna poročna fotografija

  return (
    <section
      aria-labelledby="cta-naslov"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div className="container-tight">
        <div className="relative isolate overflow-hidden rounded-[2rem] p-10 text-ivory shadow-[0_40px_100px_-40px_rgba(72,26,41,0.6)] md:p-16 lg:p-20">
          <span
            aria-hidden
            className="absolute inset-0 -z-20 bg-gradient-to-br from-burgundy via-burgundy-deep to-charcoal"
          />
          <Image
            src={bg.src}
            alt={bg.alt}
            fill
            sizes="100vw"
            className="-z-10 object-cover opacity-35 mix-blend-luminosity"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-burgundy/85 via-burgundy-deep/85 to-charcoal/95"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-champagne/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose/20 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-champagne/70" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-champagne">
                  Naj se začne vajina zgodba
                </span>
              </div>
              <h2
                id="cta-naslov"
                className="heading-display mt-5 text-4xl text-ivory md:text-5xl lg:text-6xl"
              >
                Naj bo vajin <em className="not-italic text-champagne">»da«</em>{" "}
                slišan tako, kot si zasluži.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
                {RESPONSE_COPY.finalCtaBody}
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="flex flex-col gap-3">
                <a
                  href="#kontakt"
                  className="group inline-flex items-center justify-between gap-2 rounded-full bg-champagne px-7 py-4 text-base font-medium text-charcoal transition hover:bg-gold"
                >
                  Pošljita povpraševanje
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 bg-ivory/5 px-7 py-4 text-base font-medium text-ivory transition hover:border-ivory/45 hover:bg-ivory/10"
                >
                  Pokliči na {PHONE_DISPLAY}
                </a>
                <p className="mt-2 text-center text-xs text-ivory/55">
                  {RESPONSE_COPY.finalCtaFootnote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
