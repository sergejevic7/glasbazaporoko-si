import { PORTRAIT } from "../lib/media";
import { Award, Sparkle, Star } from "./Icons";
import MediaImage from "./MediaImage";

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "Akademsko izšolana violinistka",
    text: "Diploma z odliko na Akademiji za glasbo v Ljubljani; izpopolnjevanje na Konzervatoriju za glasbo v Celovcu.",
  },
  {
    icon: Star,
    title: "8 let v Orkestru SF",
    text: "Osem sezon kot redna članica Orkestra Slovenske filharmonije — vrhunska disciplina in muzikalnost.",
  },
  {
    icon: Sparkle,
    title: "Mednarodne izkušnje",
    text: "Mojstrski tečaji pri prof. Igorju Ozimu, Vaslavu Snitilu, Tomažu Lorenzu in drugih svetovno priznanih pedagogih.",
  },
];

export default function AboutBarbara() {
  return (
    <section
      id="o-meni"
      aria-labelledby="o-meni-naslov"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_85%_30%,rgba(201,169,106,0.14),transparent_70%),radial-gradient(40%_30%_at_15%_70%,rgba(212,138,138,0.12),transparent_70%)]"
      />
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <MediaImage
              asset={PORTRAIT}
              sizes="(min-width: 1024px) min(34vw, 440px), min(92vw, 520px)"
              fallbackClassName="bg-gradient-to-br from-cream via-bone to-champagne/40"
              className="relative aspect-[4/5] rounded-[2rem] shadow-[var(--shadow-elegant)] ring-1 ring-bone/70"
            />

            <div className="absolute -right-3 bottom-8 hidden rounded-2xl bg-ivory/95 p-4 shadow-[var(--shadow-card)] ring-1 ring-bone/70 backdrop-blur sm:block">
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                Akademija za glasbo
              </p>
              <p className="heading-display mt-1 text-xl text-charcoal">
                Diploma z odliko
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="soft-divider" />
              <span className="eyebrow">O meni</span>
            </div>
            <h2
              id="o-meni-naslov"
              className="heading-display mt-5 text-4xl text-charcoal md:text-5xl lg:text-6xl"
            >
              Barbara Zalaznik —{" "}
              <em className="not-italic text-burgundy">violinistka</em>, ki
              razume vajin trenutek.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/75">
              <p>
                Z violino sem začela na vrhniški glasbeni šoli, šolanje
                nadaljevala na Srednji glasbeni in baletni šoli v Ljubljani v
                razredu prof. Cirila Veroneka, pri šestnajstih pa kot
                Ozimova štipendistka odšla v razred prof. Briana Finlaysna
                na Konzervatoriju za glasbo v Celovcu.
              </p>
              <p>
                Z odliko sem diplomirala na Akademiji za glasbo v Ljubljani
                pri prof. Dejanu Bravničarju in prof. Vasiliju Meljnikovu.
                Izpopolnjevala sem se na mednarodnih mojstrskih tečajih pri
                prof. Igorju Ozimu, Vaslavu Snitilu, Tomažu Lorenzu in drugih
                priznanih pedagogih.
              </p>
              <p>
                Osem let sem bila redna članica Orkestra Slovenske
                filharmonije, danes pa kot samostojna umetnica združujem
                klasiko, sodobno in električno violino v glasbenih programih,
                ki dvignejo vsak dogodek na drugo raven.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-bone/70 bg-ivory p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-burgundy ring-1 ring-bone/60">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="heading-display mt-4 text-lg text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-charcoal/70">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
