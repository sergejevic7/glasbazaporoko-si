const SERVICES = [
  {
    tag: "Obred",
    title: "Glasba za civilni obred",
    text: "Eleganten violinski program, ki napolni dvorano, grad ali vrt z dostojanstvom in čustvom. Od slovesne koračnice do skladbe, ki je za vaju posebna.",
    points: [
      "Slovesni vstop in izstop iz obreda",
      "Spremljevalna glasba med ceremonijo",
      "Prilagojeno klasičnim ali modernim željam",
    ],
  },
  {
    tag: "Cerkev",
    title: "Glasba za cerkveni obred",
    text: "Sakralno občutje, izbrane poročne skladbe in subtilna izvedba, ki se zlije z arhitekturo in svetostjo prostora.",
    points: [
      "Wagner / Mendelssohn klasiki",
      "Repertoar po dogovoru",
    ],
  },
  {
    tag: "Sprejem",
    title: "Glasba ob sprejemu svatov",
    text: "Topel, prepoznaven aperitivni pridih. Violina pričara prefinjeno, slavnostno vzdušje že v prvem trenutku, ko svati prestopijo prag.",
    points: [
      "Sprejem ob aperitivu in prigrizkih",
      "Ozvočenje primerno prostoru",
    ],
  },
  {
    tag: "Prvi ples",
    title: "Prvi ples – violinska priredba",
    text: "Vajina najljubša pesem, prevedena v jezik violine. Filmsko, intimno in povsem osebno — trenutek, ki bo na fotografijah žarel.",
    points: [
      "Klasična ali sodobna priredba",
      "Akustična ali električna violina",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="storitve"
      aria-labelledby="storitve-naslov"
      className="relative bg-cream py-20 md:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent"
      />
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="soft-divider" />
              <span className="eyebrow">Storitve</span>
            </div>
            <h2
              id="storitve-naslov"
              className="heading-display mt-5 text-4xl text-charcoal md:text-5xl lg:text-6xl"
            >
              Violinska glasba za <br className="hidden sm:block" />
              vsak <em className="not-italic text-burgundy">trenutek</em>{" "}
              poročnega dne.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-charcoal/70 lg:col-span-5 md:text-lg">
            Od slovesnega vstopa neveste do zadnjega tona prvega plesa — vsak
            del poročnega dne ima svoj glasbeni jezik. Pomagam vama izbrati
            pravo skladbo za pravi trenutek.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => (
            <li
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-bone/70 bg-ivory p-7 shadow-[0_1px_2px_rgba(26,20,16,0.03)] transition hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[var(--shadow-card)] md:p-8"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-cream px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold-deep ring-1 ring-bone/60">
                {s.tag}
              </span>
              <h3 className="heading-display mt-5 text-2xl text-charcoal md:text-[1.7rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70 md:text-base">
                {s.text}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-charcoal/80">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-3 flex-none rounded-full bg-burgundy"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
