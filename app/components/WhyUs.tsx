import { Award, Heart, Music, Sparkle, Star, Violin } from "./Icons";

const PILLARS = [
  {
    icon: Award,
    title: "Profesionalnost vrhunskega kova",
    text: "Akademska izobrazba, mednarodna mojstrska izpopolnjevanja in osem let v Orkestru Slovenske filharmonije. Glasba, ki sloni na resničnem znanju.",
  },
  {
    icon: Heart,
    title: "Čustvo, ki obstane v spominu",
    text: "Vsaka skladba je odigrana z občutkom za par, prostor in trenutek. Glasba, ki ne le zveni — diha skupaj z vajino zgodbo.",
  },
  {
    icon: Violin,
    title: "Brezhibna izvedba",
    text: "Točnost, mirnost in zanesljivost. Pripravljen načrt, rezerve, profesionalna oprema — vse za to, da vidva ne razmišljata o glasbi.",
  },
  {
    icon: Music,
    title: "Program, prilagojen vajinim željam",
    text: "Klasične poročne koračnice, filmske teme, sodoben pop in rock ali narodno-zabavna glasba — vse v elegantni violinski podobi.",
  },
  {
    icon: Sparkle,
    title: "Slovesnost s pridihom luksuza",
    text: "Električna violina, diskretno ozvočenje, premišljena postavitev. Vizualno in akustično doživetje, ki se prilega prestižnemu prizorišču.",
  },
  {
    icon: Star,
    title: "Stotine zadovoljnih parov",
    text: "Od intimnih obredov v gradovih do velikih svatb v vinogradih — referenc je veliko, vsaka pa je drugačna in posebna.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="zakaj"
      aria-labelledby="zakaj-naslov"
      className="relative py-20 md:py-28 lg:py-32"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="soft-divider" />
            <span className="eyebrow">Zakaj naju izbrati</span>
            <span className="soft-divider" />
          </div>
          <h2
            id="zakaj-naslov"
            className="heading-display mt-5 text-4xl text-charcoal md:text-5xl lg:text-6xl"
          >
            Glasba, ki zveni{" "}
            <em className="not-italic text-burgundy">brezhibno</em>
            <br />— in se sliši, kot da je za vaju napisana.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
            Poročni dan se zgodi enkrat. Zato vsak detajl glasbenega programa
            pripravim z mislijo na vajin slog, prostor in čustvo, ki ga želita
            ohraniti za vse življenje.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-bone/70 bg-ivory p-7 shadow-[0_1px_2px_rgba(26,20,16,0.03)] transition hover:-translate-y-1 hover:border-champagne/60 hover:shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent opacity-0 transition group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cream to-bone text-burgundy ring-1 ring-bone/60 transition group-hover:from-champagne/30 group-hover:to-rose/30"
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="heading-display mt-5 text-2xl text-charcoal">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
