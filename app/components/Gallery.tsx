import { GALLERY } from "../lib/media";
import MediaImage from "./MediaImage";

const TILES = [
  { moment: "Vstop neveste", venue: "Cerkev sv. Jakoba, Ljubljana", span: "lg:col-span-2 lg:row-span-2 aspect-[4/5]" },
  { moment: "Civilni obred", venue: "Vila Bled", span: "aspect-square" },
  { moment: "Sprejem svatov", venue: "Posestvo Pule", span: "aspect-square" },
  { moment: "Prvi ples", venue: "Grad Mokrice", span: "lg:col-span-2 aspect-[4/3]" },
  { moment: "Električni show", venue: "Otvoritveni gala", span: "aspect-square" },
  { moment: "Sprejem svatov", venue: "Hotel Kempinski", span: "aspect-square" },
];

const FALLBACKS = [
  "bg-gradient-to-br from-rose/40 via-cream to-bone",
  "bg-gradient-to-br from-burgundy/80 via-burgundy-deep to-charcoal",
  "bg-gradient-to-br from-champagne/60 via-cream to-bone",
  "bg-gradient-to-br from-burgundy via-rose/60 to-cream",
  "bg-gradient-to-br from-charcoal via-burgundy-deep to-burgundy",
  "bg-gradient-to-br from-bone via-cream to-champagne/40",
];

export default function Gallery() {
  return (
    <section
      id="galerija"
      aria-labelledby="galerija-naslov"
      className="relative py-20 md:py-28 lg:py-32"
    >
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="soft-divider" />
              <span className="eyebrow">Galerija</span>
            </div>
            <h2
              id="galerija-naslov"
              className="heading-display mt-5 text-4xl text-charcoal md:text-5xl lg:text-6xl"
            >
              Trenutki, ki <em className="not-italic text-burgundy">žarijo</em>{" "}
              v glasbi.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-charcoal/70 lg:col-span-5 md:text-lg">
            Izbor prizorov s poročnih dni — gradovi, vrtovi, vinogradi in
            cerkve. Vsak kraj je dobil svoj zvok, vsak par svojo skladbo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {GALLERY.map((asset, i) => {
            const t = TILES[i];
            return (
              <figure
                key={asset.src}
                className={`group relative isolate overflow-hidden rounded-3xl ring-1 ring-bone/70 ${t.span}`}
              >
                <MediaImage
                  asset={asset}
                  sizes="(min-width: 1024px) min(28vw, 520px), min(48vw, 560px)"
                  fallbackClassName={FALLBACKS[i]}
                  className="absolute inset-0 transition duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-champagne/90">
                    {t.venue}
                  </p>
                  <p className="heading-display mt-1 text-xl md:text-2xl">
                    {t.moment}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
