"use client";

import { useEffect, useState } from "react";
import { SOCIAL, VIDEOS } from "../lib/media";
import { ArrowRight, Close, Play } from "./Icons";
import MediaImage from "./MediaImage";

const FALLBACKS = [
  "bg-gradient-to-br from-burgundy via-burgundy-deep to-charcoal",
  "bg-gradient-to-br from-rose/60 via-burgundy to-charcoal",
  "bg-gradient-to-br from-gold-deep via-burgundy-deep to-ink",
];

export default function VideoSection() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? VIDEOS[active] : null;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section
      id="nastopi"
      aria-labelledby="nastopi-naslov"
      className="relative overflow-hidden bg-charcoal py-20 text-ivory md:py-28 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,169,106,0.18),transparent_70%),radial-gradient(40%_40%_at_100%_100%,rgba(212,138,138,0.12),transparent_70%)]"
      />

      <div className="relative container-tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-champagne/70" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-champagne">
                Filmska galerija
              </span>
            </div>
            <h2
              id="nastopi-naslov"
              className="heading-display mt-5 text-4xl text-ivory md:text-5xl lg:text-6xl"
            >
              Poslušajta in{" "}
              <em className="not-italic text-champagne">občutita</em>.
              <br />
              Pred besedami govori glasba.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ivory/70 lg:col-span-5 md:text-lg">
            Posnetki s pravih nastopov — od slovesnih obredov do energičnih
            večernih programov. Tako zveni in izgleda, ko pride violina k vama.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((v, i) => {
            const canEmbed = Boolean(v.youtubeId || v.localFile);
            const isExternal = !canEmbed && Boolean(v.externalLink);
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-ivory/30 bg-ivory/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-ivory backdrop-blur">
                    {v.moment}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ivory text-burgundy shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition group-hover:scale-110">
                    {isExternal ? (
                      <>
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">(odpre v novem zavihku)</span>
                      </>
                    ) : (
                      <Play className="h-4 w-4 translate-x-[1px]" />
                    )}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-champagne/90">
                    {v.place}
                  </p>
                  <h3 className="heading-display mt-2 text-2xl text-ivory md:text-[1.6rem]">
                    {v.title}
                  </h3>
                </div>
              </>
            );

            return (
              <article
                key={v.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-ivory/10 transition hover:ring-champagne/40"
              >
                <MediaImage
                  asset={v.poster}
                  sizes="(min-width: 1024px) min(32vw, 400px), min(100vw, 640px)"
                  fallbackClassName={FALLBACKS[i]}
                  className="absolute inset-0 transition duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/40"
                />

                {isExternal && v.externalLink ? (
                  <a
                    href={v.externalLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="absolute inset-0 flex flex-col justify-between p-6 text-left"
                  >
                    {inner}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => canEmbed && setActive(i)}
                    className="absolute inset-0 flex flex-col justify-between p-6 text-left"
                  >
                    {inner}
                  </button>
                )}
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ivory/55">
          Več nastopov najdeta na{" "}
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noreferrer noopener"
            className="underline decoration-champagne/40 underline-offset-4 hover:text-champagne"
          >
            YouTube kanalu
          </a>{" "}
          in{" "}
          <a
            href="https://www.barbarazalaznik.si"
            target="_blank"
            rel="noreferrer noopener"
            className="underline decoration-champagne/40 underline-offset-4 hover:text-champagne"
          >
            barbarazalaznik.si
          </a>
          .
        </p>
      </div>

      {current && (current.youtubeId || current.localFile) && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Zapri video"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-ivory/15 text-ivory ring-1 ring-ivory/20 transition hover:bg-ivory/25"
          >
            <Close className="h-5 w-5" />
          </button>
          <div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black ring-1 ring-ivory/15"
            onClick={(e) => e.stopPropagation()}
          >
            {current.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`}
                title={current.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : current.localFile ? (
              <video
                src={`/videos/${current.localFile}`}
                poster={current.poster.src}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain"
              />
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
