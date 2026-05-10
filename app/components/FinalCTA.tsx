import { PHONE_DISPLAY, PHONE_TEL, RESPONSE_COPY } from "../lib/contact";
import { GALLERY } from "../lib/media";
import { ArrowRight } from "./Icons";
import MediaImage from "./MediaImage";

export default function FinalCTA() {
  const bg = GALLERY[3]; // "Prvi ples" – emocionalna poročna fotografija

  return (
    <section
      id="rezerviraj-term"
      aria-labelledby="cta-naslov"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div className="container-tight">
        <div className="relative isolate min-h-[280px] overflow-hidden rounded-[2rem] p-10 shadow-[0_40px_100px_-40px_rgba(72,26,41,0.6)] md:min-h-[320px] md:p-16 lg:min-h-[340px] lg:p-20">
          <span
            aria-hidden
            className="absolute inset-0 -z-30 bg-gradient-to-br from-burgundy via-burgundy-deep to-charcoal"
          />
          <MediaImage
            asset={bg}
            sizes="(max-width: 768px) 100vw, min(1152px, 92vw)"
            quality={68}
            blurDataURL={null}
            className="absolute inset-0 -z-20 rounded-[2rem]"
            imgClassName="opacity-35 mix-blend-luminosity"
            fallbackClassName="bg-gradient-to-br from-burgundy-deep via-burgundy to-charcoal"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-burgundy/85 via-burgundy-deep/85 to-charcoal/95"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-champagne/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose/20 blur-3xl"
          />

          <div className="relative grid gap-10 text-ivory lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-champagne/70" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-champagne">
                  Naj se začne vajina zgodba
                </span>
              </div>
              <h2
                id="cta-naslov"
                className="heading-display mt-5 text-4xl md:text-5xl lg:text-6xl"
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
                  className="group inline-flex min-h-[52px] items-center justify-between gap-2 rounded-full bg-champagne px-7 py-4 text-base font-medium text-charcoal transition hover:bg-gold focus-visible:outline-offset-4"
                >
                  Pošljita povpraševanje
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-ivory/25 bg-ivory/5 px-7 py-4 text-base font-medium text-ivory transition hover:border-ivory/45 hover:bg-ivory/10 focus-visible:outline-offset-4"
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
