/**
 * Centralized real-media references.
 *
 * Every entry maps a local file path (under /public/images or /public/videos)
 * to the original source URL on glasbazaporoko.si. To populate the assets,
 * run:
 *
 *   npm run download:assets
 *
 * (or follow `public/images/README.md` for manual instructions).
 *
 * The `alt` text is written in Slovenian and includes target SEO keywords:
 * glasba za poroko, poročna glasba, glasba za poročni obred, violinistka za
 * poroko, glasbenik za poroko, poroka Slovenija.
 */

export type MediaAsset = {
  /** Local public path used by next/image src */
  src: string;
  /** Source URL on the original site (for download script + README) */
  source: string;
  /** Slovenian alt text – do not leave empty, include keywords */
  alt: string;
  /** Approximate intrinsic width if known (used by some sizing helpers) */
  width?: number;
  /** Approximate intrinsic height if known */
  height?: number;
};

const SRC = "https://www.glasbazaporoko.si/wp-content/uploads";

/** Hero — main visual on the right of the fold. */
export const HERO: MediaAsset = {
  src: "/images/hero-glasba-za-poroko.jpg",
  source: `${SRC}/2022/11/Barbara-Zalaznik-Matos-glasba-na-poroki-1.jpg`,
  alt: "Violinistka Barbara Zalaznik igra na poročnem obredu – glasba za poroko v živo",
};

/** About — Barbara portrait. */
export const PORTRAIT: MediaAsset = {
  src: "/images/barbara-zalaznik-portret.jpg",
  source: `${SRC}/2022/11/glasba-na-poroki-barbara.jpg`,
  alt: "Barbara Zalaznik – violinistka in glasbenica za poročni obred",
};

/** Gallery (6 tiles, in display order). */
export const GALLERY: MediaAsset[] = [
  {
    src: "/images/galerija-1-porocni-obred.jpg",
    source: `${SRC}/2022/11/Poroka-violina-1.jpg`,
    alt: "Poročni obred z violinsko spremljavo – glasba za poročni obred",
  },
  {
    src: "/images/galerija-2-civilni-obred.jpg",
    source: `${SRC}/2022/11/glasba-na-poroki-12.jpg`,
    alt: "Glasba na civilnem obredu – violina na poroki",
  },
  {
    src: "/images/galerija-3-sprejem-svatov.jpg",
    source: `${SRC}/2022/11/glasba-za-poroko-15.jpg`,
    alt: "Sprejem svatov ob violinski glasbi – poročna glasba",
  },
  {
    src: "/images/galerija-4-prvi-ples.jpg",
    source: `${SRC}/2022/11/glasba-za-poroko-17.jpg`,
    alt: "Prvi ples mladoporočencev ob violini – glasbenik za poroko",
  },
  {
    src: "/images/galerija-5-elektricna-violina.jpg",
    source: `${SRC}/2022/11/violinistka-novoletna-zabava.jpg`,
    alt: "Električna violina – Barbara Zalaznik na slavnostnem dogodku",
  },
  {
    src: "/images/galerija-6-poroka.jpg",
    source: `${SRC}/2022/11/glasba-na-poroki-14.jpg`,
    alt: "Poroka v Sloveniji – glasba na poroki, violina v živo",
  },
];

/** Video posters (used until /videos/*.mp4 or YouTube IDs are wired in). */
export const VIDEO_POSTERS: MediaAsset[] = [
  {
    src: "/images/nastop-1.jpg",
    source: `${SRC}/2022/11/Barbara-Zalaznik-Matos-10.jpg`,
    alt: "Poročni nastop violinistke – filmsko oblikovana poročna glasba",
  },
  {
    src: "/images/nastop-2.jpg",
    source: `${SRC}/2022/11/barbara-zalaznik-events.jpg`,
    alt: "Klasična violina za civilni obred – Barbara Zalaznik",
  },
  {
    src: "/images/nastop-3.webp",
    source: `${SRC}/2022/11/Barbara-Zalaznik-Matos-glasba-na-poroki.webp`,
    alt: "Električna violina za prvi ples – energičen poročni nastop",
  },
];

/**
 * Video sources. Three ways to use, in priority order:
 * 1) `youtubeId` → embedded via youtube-nocookie iframe (preferred).
 * 2) `localFile` → /public/videos/<file> rendered with <video controls>.
 * 3) `externalLink` → tile becomes a link that opens in a new tab.
 */
export type VideoSource = {
  poster: MediaAsset;
  /** Local file in /public/videos (e.g. "nastop-1.mp4") */
  localFile?: string;
  /** YouTube video ID (e.g. "dQw4w9WgXcQ") */
  youtubeId?: string;
  /** External URL – opens in a new tab, used when no embed is set */
  externalLink?: string;
  title: string;
  place: string;
  moment: string;
};

/**
 * Real videos from Barbara Zalaznik's public YouTube channel
 * (https://www.youtube.com/@barbarazalaznik-violin). Replace with
 * wedding-specific videos when available.
 */
export const VIDEOS: VideoSource[] = [
  {
    poster: VIDEO_POSTERS[0],
    youtubeId: "RrymFl0S2VA",
    title: "Phantom of the Opera – violinski medley",
    place: "Lindsey Stirling priredba",
    moment: "Iz repertoarja",
  },
  {
    poster: VIDEO_POSTERS[1],
    youtubeId: "9fiOQh4_hDk",
    title: "Električni violinski cover",
    place: "Sodobna priredba",
    moment: "Iz repertoarja",
  },
  {
    poster: VIDEO_POSTERS[2],
    externalLink: "https://www.youtube.com/@barbarazalaznik-violin/videos",
    title: "Celoten kanal nastopov",
    place: "@barbarazalaznik-violin",
    moment: "Več videov",
  },
];

/** Public links to social platforms (used in Footer + structured data). */
export const SOCIAL = {
  facebook: "https://www.facebook.com/barbara.zalaznik",
  instagram: "https://www.instagram.com/barbarazalaznik/",
  youtube: "https://www.youtube.com/@barbarazalaznik-violin",
} as const;

/** Subtle ambient backgrounds. */
export const AMBIENT: Record<"header" | "footer", MediaAsset> = {
  header: {
    src: "/images/ambient-header.jpg",
    source: `${SRC}/2020/11/header-background-scaled-1.jpg`,
    alt: "",
  },
  footer: {
    src: "/images/ambient-footer.jpg",
    source: `${SRC}/2020/11/footer-background-scaled-1.jpg`,
    alt: "",
  },
};

/** Logo (optional – the header currently uses an elegant inline SVG mark). */
export const LOGO: MediaAsset = {
  src: "/images/logo-bz.png",
  source: `${SRC}/2022/11/LOGO-BZ.png`,
  alt: "Barbara Zalaznik – Glasba za poroko",
};

/** Aggregated download manifest used by scripts/download-assets.mjs. */
export const ALL_ASSETS: MediaAsset[] = [
  HERO,
  PORTRAIT,
  ...GALLERY,
  ...VIDEO_POSTERS,
  AMBIENT.header,
  AMBIENT.footer,
  LOGO,
];
