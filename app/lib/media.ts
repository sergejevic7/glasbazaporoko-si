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
 * Intrinsic width/height help Next/Image reserve space (CLS). Alt text is
 * Slovenian with natural keyword use (glasba za poroko, poročna glasba, …).
 */

export type MediaAsset = {
  /** Local public path used by next/image src */
  src: string;
  /** Source URL on the original site (for download script + README) */
  source: string;
  /** Slovenian alt text – meaningful for SEO & accessibility */
  alt: string;
  /** Intrinsic width in pixels (from source file) */
  width?: number;
  /** Intrinsic height in pixels */
  height?: number;
};

const SRC = "https://www.glasbazaporoko.si/wp-content/uploads";

/** Hero — main visual on the right of the fold. */
export const HERO: MediaAsset = {
  src: "/images/hero-glasba-za-poroko.jpg",
  source: `${SRC}/2022/11/Barbara-Zalaznik-Matos-glasba-na-poroki-1.jpg`,
  alt: "Barbara Zalaznik — violinistka in glasbenik za poroko pri poročnem nastopu; glasba za poroko in poročna glasba v živo",
  width: 1066,
  height: 1515,
};

/** About — Barbara portrait. */
export const PORTRAIT: MediaAsset = {
  src: "/images/barbara-zalaznik-portret.jpg",
  source: `${SRC}/2022/11/glasba-na-poroki-barbara.jpg`,
  alt: "Barbara Zalaznik, violinistka za poroko — glasba za poročni obred in elegantna poročna glasba",
  width: 873,
  height: 1024,
};

/** Gallery (6 tiles, in display order). */
export const GALLERY: MediaAsset[] = [
  {
    src: "/images/galerija-1-porocni-obred.jpg",
    source: `${SRC}/2022/11/Poroka-violina-1.jpg`,
    alt: "Glasba za poročni obred v cerkvi — poročni nastop violinistke in poročna glasba",
    width: 1079,
    height: 577,
  },
  {
    src: "/images/galerija-2-civilni-obred.jpg",
    source: `${SRC}/2022/11/glasba-na-poroki-12.jpg`,
    alt: "Glasba za civilni obred na poroki — violina in profesionalna poročna glasba",
    width: 696,
    height: 1024,
  },
  {
    src: "/images/galerija-3-sprejem-svatov.jpg",
    source: `${SRC}/2022/11/glasba-za-poroko-15.jpg`,
    alt: "Sprejem svatov ob poročni glasbi — glasba za poroko in violinistka za poroko",
    width: 1000,
    height: 667,
  },
  {
    src: "/images/galerija-4-prvi-ples.jpg",
    source: `${SRC}/2022/11/glasba-za-poroko-17.jpg`,
    alt: "Prvi ples — poročni nastop z violino; glasbenik za poroko in poročna glasba za slavje",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/galerija-5-elektricna-violina.jpg",
    source: `${SRC}/2022/11/violinistka-novoletna-zabava.jpg`,
    alt: "Električna violina na poročnem nastopu — energična glasba za poroko",
    width: 683,
    height: 1024,
  },
  {
    src: "/images/galerija-6-poroka.jpg",
    source: `${SRC}/2022/11/glasba-na-poroki-14.jpg`,
    alt: "Poroka v Sloveniji — glasba za poroko z violino v živo",
    width: 1024,
    height: 683,
  },
];

/** Video posters (used until /videos/*.mp4 or YouTube IDs are wired in). */
export const VIDEO_POSTERS: MediaAsset[] = [
  {
    src: "/images/nastop-1.jpg",
    source: `${SRC}/2022/11/Barbara-Zalaznik-Matos-10.jpg`,
    alt: "Poročni nastop violinistke — poročna glasba in glasba za poroko ob obredu",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/nastop-2.jpg",
    source: `${SRC}/2022/11/barbara-zalaznik-events.jpg`,
    alt: "Klasična violina za civilni ali cerkveni obred — glasbenik za poroko",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/nastop-3.webp",
    source: `${SRC}/2022/11/Barbara-Zalaznik-Matos-glasba-na-poroki.webp`,
    alt: "Električna violina za prvi ples — poročni nastop in glasba za poroko",
    width: 1000,
    height: 1154,
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
 * Vdelani posnetki z YouTube (youtube-nocookie). Prvi dva sta „iz repertoarja“;
 * tretja ploščica vodi na celoten kanal.
 *
 * Posnetki (zadnja dva URL-ja za repertoar):
 * - https://youtu.be/sGru03hdcQY
 * - https://youtu.be/8hJcwhoeju8
 */
export const VIDEOS: VideoSource[] = [
  {
    poster: VIDEO_POSTERS[0],
    youtubeId: "sGru03hdcQY",
    title: "Violinski nastop iz repertoarja",
    place: "YouTube posnetek",
    moment: "Iz repertoarja",
  },
  {
    poster: VIDEO_POSTERS[1],
    youtubeId: "8hJcwhoeju8",
    title: "Električni nastop iz repertoarja",
    place: "YouTube posnetek",
    moment: "Iz repertoarja",
  },
  {
    poster: VIDEO_POSTERS[2],
    externalLink: "https://www.youtube.com/@barbarazalaznik-violin",
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
    width: 2560,
    height: 352,
  },
  footer: {
    src: "/images/ambient-footer.jpg",
    source: `${SRC}/2020/11/footer-background-scaled-1.jpg`,
    alt: "",
    width: 2560,
    height: 1120,
  },
};

/** Logo (optional – the header currently uses an elegant inline SVG mark). */
export const LOGO: MediaAsset = {
  src: "/images/logo-bz.png",
  source: `${SRC}/2022/11/LOGO-BZ.png`,
  alt: "Barbara Zalaznik — glasba za poroko in premium poročna glasba",
  width: 744,
  height: 1052,
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
