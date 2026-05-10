import { RESPONSE_COPY } from "../lib/contact";
import { ArrowRight } from "./Icons";

const STEPS = [
  {
    n: "01",
    t: "Pošljeta povpraševanje",
    d: RESPONSE_COPY.processStep1,
  },
  {
    n: "02",
    t: "Uskladiva termin in želje",
    d: "Pogovor o slogu obreda, prostoru, akustiki in pričakovanjih. Skupaj določiva, kako naj zveni vajin dan.",
  },
  {
    n: "03",
    t: "Pripravim glasbeni program",
    d: "Iz najinega pogovora pripravim osebni izbor skladb — od koračnice do prvega plesa, vse v eni elegantni dramaturgiji.",
  },
  {
    n: "04",
    t: "Izvedba na poročni dan",
    d: "Profesionalna oprema, tih prihod, brezhibna izvedba. Vidva uživata, glasba pa skrbi, da ta dan obstane v spominu.",
  },
];

export default function Process() {
  return (
    <section
      id="proces"
      aria-labelledby="proces-naslov"
      className="relative py-20 md:py-28 lg:py-32"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="soft-divider" />
            <span className="eyebrow">Kako poteka sodelovanje</span>
            <span className="soft-divider" />
          </div>
          <h2
            id="proces-naslov"
            className="heading-display mt-5 text-4xl text-charcoal md:text-5xl lg:text-6xl"
          >
            Štirje koraki do <em className="not-italic text-burgundy">popolne</em>{" "}
            poročne glasbe.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
            Preprost, oseben in transparenten proces — od prvega sporočila do
            zadnjega tona, ki bo zaključil vajin dan.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-8 lg:grid-cols-4">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent lg:block"
          />
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="relative flex flex-col items-start"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span
                aria-hidden
                className="relative grid h-24 w-24 place-items-center"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cream to-bone ring-1 ring-bone/70" />
                <span className="absolute inset-2 rounded-full border border-champagne/50" />
                <span className="heading-display relative z-10 text-3xl text-burgundy">
                  {s.n}
                </span>
              </span>
              <h3 className="heading-display mt-6 text-2xl text-charcoal">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {s.d}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-medium text-ivory transition hover:bg-ink"
          >
            Začniva pri prvem koraku
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
