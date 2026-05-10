import { AMBIENT } from "../lib/media";
import { Quote, Star } from "./Icons";
import MediaImage from "./MediaImage";

const TESTIMONIALS = [
  {
    text: "Barbara je s svojo violino popolnoma spremenila najin obred. Ko je zaigrala, smo vsi obstali — še fotograf je za hip pozabil na fotoaparat. Hvala za nepozaben dan.",
    author: "Ana & Matej",
    place: "Poroka, Vila Bled",
  },
  {
    text: "Profesionalno, prijazno in neverjetno čustveno. Pripravila je program točno po naših željah, vse je teklo brezhibno. Priporočamo z vsem srcem.",
    author: "Tina & Luka",
    place: "Grad Mokrice",
  },
  {
    text: "Električna violina za prvi ples je bila najboljša odločitev. Energija, atmosfera in odzivi gostov — še danes nas ustavljajo s komplimenti.",
    author: "Maja & Aljaž",
    place: "Posestvo Pule",
  },
  {
    text: "Barbarin pristop je zares poseben. Prisluhnila je naši zgodbi, izbrala pravo skladbo za pravi trenutek. Glasba je dvignila celoten dan na drugo raven.",
    author: "Katarina & Žiga",
    place: "Cerkveni obred, Ljubljana",
  },
];

export default function Testimonials() {
  return (
    <section
      id="mnenja"
      aria-labelledby="mnenja-naslov"
      className="relative isolate min-h-[520px] overflow-hidden py-20 md:min-h-[560px] md:py-28 lg:py-32"
    >
      <span aria-hidden className="absolute inset-0 -z-30 bg-cream" />
      <MediaImage
        asset={AMBIENT.header}
        sizes="100vw"
        blurDataURL={null}
        quality={60}
        className="absolute inset-0 -z-20"
        imgClassName="object-cover opacity-[0.14]"
        fallbackClassName="bg-cream"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream/92 via-cream/82 to-cream"
      />

      <div className="relative container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="soft-divider" />
            <span className="eyebrow">Mnenja parov</span>
            <span className="soft-divider" />
          </div>
          <h2
            id="mnenja-naslov"
            className="heading-display mt-5 text-4xl text-charcoal md:text-5xl lg:text-6xl"
          >
            Zgodbe, ki <em className="not-italic text-burgundy">še zvenijo</em>.
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-bone/70 bg-ivory px-4 py-2 text-sm text-charcoal/80">
            <span className="flex items-center gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            <span className="ml-1 font-medium">5,0</span>
            <span className="text-charcoal/50">·</span>
            <span className="text-charcoal/60">stotine zadovoljnih parov</span>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.author}
              className={`relative flex flex-col rounded-3xl border border-bone/70 bg-ivory p-7 md:p-8 shadow-[0_1px_2px_rgba(26,20,16,0.03)] ${
                i % 2 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <Quote aria-hidden className="h-8 w-8 text-champagne/70" />
              <blockquote className="heading-display mt-3 text-2xl leading-snug text-charcoal md:text-[1.65rem]">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-bone/70 pt-5">
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cream via-rose/30 to-champagne/40 text-sm font-medium text-burgundy ring-1 ring-bone/70"
                >
                  {t.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .replace("&", "")}
                </span>
                <div>
                  <p className="text-sm font-medium text-charcoal">{t.author}</p>
                  <p className="text-xs text-charcoal/60">{t.place}</p>
                </div>
                <span className="ml-auto flex items-center gap-0.5 text-gold">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="h-3 w-3" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
