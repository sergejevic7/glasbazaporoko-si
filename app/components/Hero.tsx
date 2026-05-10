import { HERO } from "../lib/media";
import { ArrowRight, Play, Star } from "./Icons";
import MediaImage from "./MediaImage";

export default function Hero() {
  return (
    <section
      id="vrh"
      className="relative isolate overflow-hidden pt-28 md:pt-32 lg:pt-36"
      aria-label="Glasba za poroko – Barbara Zalaznik"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(201,169,106,0.22),transparent_60%),radial-gradient(80%_60%_at_85%_30%,rgba(212,138,138,0.18),transparent_70%),linear-gradient(180deg,#faf6f1_0%,#f3ece3_100%)]"
      />

      <div className="container-tight grid gap-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7">
          <div className="flex items-center gap-3 animate-fade-up">
            <span className="soft-divider" />
            <span className="eyebrow">Vrhunska violinistka za poroko</span>
          </div>

          <h1 className="heading-display mt-6 text-[clamp(2.6rem,6.4vw,5rem)] text-charcoal animate-fade-up delay-100">
            Glasba, ki <em className="not-italic text-burgundy">spremeni</em>
            <br />
            vajin trenutek <span className="italic text-gold-deep">»da«</span>{" "}
            v večnost.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/75 md:text-lg animate-fade-up delay-200">
            Eleganten in čustven violinski program za poročni obred, sprejem
            svatov in prvi ples — prilagojen vajini zgodbi. Dolgoletne izkušnje
            na slovenskih in mednarodnih odrih, vključno z osmimi leti v
            Orkestru Slovenske filharmonije.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-up delay-300">
            <a
              href="#kontakt"
              className="group inline-flex min-h-[48px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3.5 text-sm font-medium text-ivory shadow-[var(--shadow-card)] transition hover:bg-burgundy-deep focus-visible:outline-offset-4"
            >
              Pošljita povpraševanje
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#nastopi"
              className="group inline-flex min-h-[48px] min-w-[44px] items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-ivory/70 px-6 py-3.5 text-sm font-medium text-charcoal backdrop-blur transition hover:border-burgundy/40 hover:text-burgundy focus-visible:outline-offset-4"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-burgundy text-ivory transition group-hover:scale-110">
                <Play className="h-3 w-3 translate-x-px" />
              </span>
              Oglejta si nastope
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3 sm:gap-6 animate-fade-up delay-400">
            <div className="flex flex-col">
              <dt className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                Izkušnje
              </dt>
              <dd className="heading-display mt-1 text-2xl text-charcoal sm:text-3xl md:text-4xl">
                Dolgoletne
              </dd>
              <span className="mt-1 text-xs text-charcoal/60">
                na odrih
              </span>
            </div>
            <div className="flex flex-col">
              <dt className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                Filharmonija
              </dt>
              <dd className="heading-display mt-1 text-2xl text-charcoal sm:text-3xl md:text-4xl">
                8 let
              </dd>
              <span className="mt-1 text-xs text-charcoal/60">Orkester SF</span>
            </div>
            <div className="flex flex-col">
              <dt className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                Pokritost
              </dt>
              <dd className="heading-display mt-1 text-2xl text-charcoal sm:text-3xl md:text-4xl">
                SI &amp; EU
              </dd>
              <span className="mt-1 text-xs text-charcoal/60">
                vsa Slovenija
              </span>
            </div>
          </dl>

          <div className="mt-6 animate-fade-up delay-500">
            <a
              href="#mnenja"
              className="group inline-flex max-w-xl flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl px-3 py-2 text-charcoal/75 transition hover:bg-charcoal/[0.04] hover:text-charcoal md:-mx-3 md:px-3"
            >
              <span className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5" />
                ))}
                <span className="ml-1 text-xs font-medium text-charcoal">
                  5,0
                </span>
              </span>
              <span className="hidden h-3 w-px bg-charcoal/15 sm:inline" aria-hidden />
              <span className="text-xs leading-snug text-charcoal/60 underline-offset-2 group-hover:text-burgundy group-hover:underline">
                Stotine očaranih parov — preberita mnenja
              </span>
            </a>
          </div>
        </div>

        {/* Right visual — REAL image from glasbazaporoko.si */}
        <div className="relative lg:col-span-5">
          <MediaImage
            asset={HERO}
            priority
            sizes="(min-width: 1024px) min(38vw, 520px), min(92vw, 560px)"
            fallbackClassName="bg-gradient-to-br from-burgundy-deep via-burgundy to-charcoal"
            className="relative aspect-[4/5] w-full rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(72,26,41,0.55)] animate-fade-in ring-1 ring-bone/40"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-8">
            <div className="rounded-2xl bg-charcoal/30 p-4 backdrop-blur-md ring-1 ring-ivory/15">
              <p className="heading-display text-xl text-ivory md:text-2xl">
                &ldquo;Igram tako, kot začutim vajino zgodbo.&rdquo;
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-champagne">
                Barbara Zalaznik
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-ivory"
      />
    </section>
  );
}
