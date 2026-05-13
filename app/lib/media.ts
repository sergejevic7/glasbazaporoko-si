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

/** Hero — glavna vizualna fotografija desno (lokalna datoteka, brez WordPress hotlink). */
export const HERO: MediaAsset = {
  src: "/images/hero-barbara-zalaznik.jpg",
  source: "local/upload",
  alt: "Barbara Zalaznik pri nastopu z violino — violinistka in premium poročna glasba za poroko; glasba za poroko v živo",
  width: 1066,
  height: 1600,
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
    src: "/images/galerija-cerkveni-obred.jpg",
    source: "local/upload",
    alt: "Glasba za cerkveni poročni obred — violinistka z violino v modri obleki med nastopom v cerkveni kapeli",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/galerija-civilni-obred-vrt.jpg",
    source: "",
    alt: "Glasba za civilni obred na prostem — violina in elegantna poročna glasba v vrtnem prostoru",
    width: 1440,
    height: 1080,
  },
  {
    src: "/images/galerija-hotel-lobby.jpg",
    source: "",
    alt: "Glasba za sprejem v luksuznem hotelu — violinistka med sprejemom svatov v elegantnem prostoru",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/galerija-grand-hotel-bled.jpg",
    source: "",
    alt: "Nastop violinistke v parku Grand Hotela Bled — glasba za poroko na premijskem slovenskem prizorišču",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/galerija-elektricni-show-planina.jpg",
    source: "",
    alt: "Električna violina na Veliki Planini — edinstven električni show violinistke pod dramatičnim nebom",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/galerija-vrtna-poroka.jpg",
    source: "",
    alt: "Glasba za poroko v vrtnem prizorišču — violinistka med nastopom med cvetočimi vrtnicami",
    width: 1600,
    height: 1200,
  },
];

/** Video posters (used until /videos/*.mp4 or YouTube IDs are wired in). */
export const VIDEO_POSTERS: MediaAsset[] = [
  {
    src: "/images/nastop-4.jpg",
    source: "local/upload",
    alt: "Violinski nastop iz repertoarja — violinistka v rožnati obleki z električno violino pred zgodovinsko graščino; glasba za poroko",
    width: 1277,
    height: 1600,
  },
  {
    src: "/images/nastop-5.jpg",
    source: "",
    alt: "Klasična violina za poročni obred v vrtnem prostoru — glasbenik za poroko",
    width: 1440,
    height: 1080,
  },
  {
    src: "/images/nastop-6.jpg",
    source: "",
    alt: "Violinistka med nastopom v elegantni poročni dvorani — glasba za poroko in slavje",
    width: 1600,
    height: 1200,
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
