import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from "./lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const DESCRIPTION =
  "Vrhunska violinistka za poročni obred, sprejem svatov in slavnostne trenutke. Klasična in električna violina, prilagojen program in dolgoletne izkušnje na poročnih dogodkih po Sloveniji.";

export const viewport: Viewport = {
  themeColor: "#faf6f1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Glasba za poroko | Violinistka Barbara Zalaznik – poročni obred & sprejem",
    template: "%s | Glasba za poroko",
  },
  description: DESCRIPTION,
  authors: [{ name: "Barbara Zalaznik" }],
  creator: "Barbara Zalaznik",
  publisher: "Glasba za poroko",
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
    siteName: SITE_NAME,
    title:
      "Glasba za poroko – violinistka Barbara Zalaznik | Poročni obred in sprejem",
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_PATH,
        alt: OG_IMAGE_ALT,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glasba za poroko – violinistka Barbara Zalaznik",
    description: DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Wedding music",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      "@id": `${SITE_URL}#musicgroup`,
      name: "Barbara Zalaznik – Glasba za poroko",
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
      name: SITE_NAME,
      url: SITE_URL,
      description: DESCRIPTION,
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
        {children}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  );
}
