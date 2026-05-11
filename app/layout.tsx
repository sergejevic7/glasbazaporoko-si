import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import CookieConsentBanner from "./components/CookieConsentBanner";
import GatedGoogleAnalytics from "./components/GatedGoogleAnalytics";
import SkipToMain from "./components/SkipToMain";
import { CookieConsentProvider } from "./context/CookieConsentContext";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  SITE_BRAND,
  SITE_BUSINESS_NAME,
  SITE_URL,
} from "./lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "optional",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "optional",
});

/** Primarni SEO naslov (Google SERP + zavihek brskalnika). */
const SITE_TITLE_DEFAULT =
  "Glasba za poroko | Premium poročna glasba" as const;

/** Konverzijsko usmerjen meta opis — ključne fraze za glasbazaporoko.si. */
const SITE_DESCRIPTION =
  "Elegantna in profesionalna glasba za poroke, poročne obrede in slavja po Sloveniji." as const;

/** Podporni ključni pojmi (meta keywords kot kontekstualni signal). */
const SITE_KEYWORDS: readonly string[] = [
  "glasba za poroko",
  "poročna glasba",
  "glasba za poročni obred",
  "glasba za civilni obred",
  "poročni band",
  "glasbenik za poroko",
  "poroka glasba Slovenija",
  "violina na poroki",
  "violinistka za poroko",
  "glasba za sprejem svatov",
  "Barbara Zalaznik",
  "glasbazaporoko",
];

/** OG/Twitter naslov — skladen s primarnim naslovom za deljenje na socialnih omrežjih. */
const SOCIAL_TITLE = SITE_TITLE_DEFAULT;

export const viewport: Viewport = {
  themeColor: "#faf6f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  /** Absolutna baza za OG/Twitter slike in naslove (`/og-image.jpg` → www.glasbazaporoko.si). */
  metadataBase: new URL("https://www.glasbazaporoko.si"),
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE_BRAND}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_BRAND,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: "Barbara Zalaznik", url: SITE_URL }],
  creator: "Barbara Zalaznik",
  publisher: SITE_BRAND,
  alternates: {
    canonical: "/",
    languages: {
      "sl-SI": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: SITE_URL,
    siteName: SITE_BRAND,
    title: SOCIAL_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "music",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_BUSINESS_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "sl-SI",
      publisher: { "@id": `${SITE_URL}#localbusiness` },
    },
    {
      "@type": "MusicGroup",
      "@id": `${SITE_URL}#musicgroup`,
      name: SITE_BUSINESS_NAME,
      url: SITE_URL,
      genre: ["Wedding", "Classical", "Crossover", "Pop", "Film score"],
      member: {
        "@type": "Person",
        name: "Barbara Zalaznik",
        jobTitle: "Violinistka",
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Akademija za glasbo v Ljubljani",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Konzervatorij za glasbo v Celovcu",
          },
        ],
        sameAs: [
          "https://www.barbarazalaznik.si",
          "https://www.youtube.com/@barbarazalaznik-violin",
          "https://www.instagram.com/barbarazalaznik/",
          "https://www.facebook.com/barbara.zalaznik",
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: SITE_BUSINESS_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      areaServed: {
        "@type": "Country",
        name: "Slovenija",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "SI",
      },
      priceRange: "€€",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Koliko stane glasba za poroko?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cena je odvisna od dolžine programa, lokacije in želja para. Po prejemu povpraševanja pripravim transparentno ponudbo na podlagi termina, kraja in želenega obsega nastopa – od krajše spremljave obreda do programa za celotno slavje.",
          },
        },
        {
          "@type": "Question",
          name: "Kdaj je priporočljivo rezervirati termin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Priporočam rezervacijo 6–12 mesecev pred poroko, saj se najbolj zaželeni datumi v sezoni hitro zapolnijo. Tudi pri krajših rokih se vedno potrudim najti rešitev.",
          },
        },
        {
          "@type": "Question",
          name: "Ali izvajate glasbo za civilni obred?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Igram na civilnih in cerkvenih obredih po vsej Sloveniji – v dvoranah, gradovih, na prostem in v cerkvah. Repertoar prilagodim slogu obreda in vašim željam.",
          },
        },
        {
          "@type": "Question",
          name: "Ali lahko izbereva skladbe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seveda. Skupaj sestaviva osebni glasbeni program – od klasičnih poročnih koračnic do moderne pop, filmske ali narodno-zabavne glasbe v elegantni violinski priredbi.",
          },
        },
        {
          "@type": "Question",
          name: "Ali nastopate po vsej Sloveniji?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da, nastopam po vsej Sloveniji in ob predhodnem dogovoru tudi v sosednjih državah. Logistiko in prevoz uskladiva v fazi rezervacije.",
          },
        },
        {
          "@type": "Question",
          name: "Ali nudite ozvočenje?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Da. Za manjše in srednje prostore zagotovim profesionalno, diskretno ozvočenje, ki se lepo zlije s prostorom. Po potrebi se uskladim tudi z vašim DJ-em ali ponudnikom tehnike.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sl"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <SkipToMain />
        <CookieConsentProvider>
          {children}
          <CookieConsentBanner />
          <GatedGoogleAnalytics />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
