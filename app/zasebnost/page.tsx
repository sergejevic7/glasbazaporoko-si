import Link from "next/link";
import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import StickyMobileCTA from "../components/StickyMobileCTA";
import {
  CONTACT_EMAIL_DISPLAY,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../lib/contact";
import { SITE_BRAND, SITE_BUSINESS_NAME, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Politika zasebnosti",
  description:
    "Informacije o obdelavi osebnih podatkov, piškotkih in pravicah obiskovalcev spletne strani glasbazaporoko.si v skladu z GDPR in ZVOP-2.",
  alternates: {
    canonical: "/zasebnost",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-ivory pb-28 pt-28 md:pb-36 md:pt-32">
        <div className="container-tight max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
          Pravne informacije
        </p>
        <h1 className="heading-display mt-4 text-4xl text-charcoal md:text-5xl">
          Politika zasebnosti
        </h1>
        <p className="mt-4 text-sm text-charcoal/65">
          Veljavnost: za obiskovalce spletne strani{" "}
          <strong>{SITE_BRAND}</strong> ({SITE_URL}). Zadnja posodobitev:{" "}
          {new Intl.DateTimeFormat("sl-SI", {
            dateStyle: "long",
            timeZone: "Europe/Ljubljana",
          }).format(new Date())}
          .
        </p>

        <article className="prose-zasebnost mt-14 space-y-10 text-base leading-relaxed text-charcoal/85">
          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              1. Uvod
            </h2>
            <p>
              Zavezujemo se k varovanju vaše zasebnosti v skladu z{" "}
              <strong>Splošno uredbo o varstvu podatkov (GDPR)</strong> ter{" "}
              <strong>Zakonom o varstvu osebnih podatkov (ZVOP-2)</strong>. Ta
              stran pojasnjuje, katere podatke obdelujemo ob obisku{" "}
              {SITE_BRAND}, na kateri pravni podlagi in katere pravice imate.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              2. Upravljavec osebnih podatkov
            </h2>
            <p>
              Upravljavec za podatke, zbrane prek te spletne strani, je nosilec
              dejavnosti označen kot{" "}
              <strong>{SITE_BUSINESS_NAME}</strong> (v nadaljevanju:
              upravljavec).
            </p>
            <p>
              Kontakt za vprašanja o varstvu podatkov:{" "}
              <a
                className="font-medium text-burgundy underline decoration-burgundy/35 underline-offset-2 hover:decoration-burgundy"
                href={`mailto:${CONTACT_EMAIL_DISPLAY}`}
              >
                {CONTACT_EMAIL_DISPLAY}
              </a>
              , tel.{" "}
              <a
                className="font-medium text-burgundy underline decoration-burgundy/35 underline-offset-2 hover:decoration-burgundy"
                href={`tel:${PHONE_TEL}`}
              >
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              3. Katere podatke obdelujemo
            </h2>
            <ul className="list-disc space-y-2 pl-6 marker:text-burgundy">
              <li>
                <strong>Obisk spletne strani:</strong> tehnični podatki, ki jih
                običajno obdeluje strežnik ali ponudnik gostovanja (npr. IP
                naslov v dnevnikih, čas dostopa, vrsta brskalnika), v obsegu,
                potrebnem za varnost in delovanje storitve.
              </li>
              <li>
                <strong>Povpraševalni obrazec:</strong> ime in priimek,
                elektronski naslov, telefon, datum in lokacija poroke, izbrana
                storitev ter besedilo sporočila, ki jih posredujete prostovoljno.
              </li>
              <li>
                <strong>Analitika (če soglašate):</strong> podatki o uporabi
                strani prek storitve Google Analytics 4 (GA4), vključno s
                piškotki ali podobnimi tehnologijami, ki jih nastavi Google v
                skladu z njihovo politiko.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              4. Nameni obdelave in pravne podlage
            </h2>
            <ul className="list-disc space-y-2 pl-6 marker:text-burgundy">
              <li>
                <strong>Zagotavljanje delovanja strani in varnost</strong> —
                zakoniti interes upravljavca (člen 6(1)(f) GDPR) oziroma izvedba
                storitve na zahtevo obiskovalca.
              </li>
              <li>
                <strong>Odgovor na povpraševanje</strong> — koraki pred
                sklenitvijo pogodbe oziroma priprava ponudbe (člen 6(1)(b) GDPR)
                ter vaša privolitev skozi oddajo obrazca ob seznanitvi s to
                politiko (člen 6(1)(a) GDPR).
              </li>
              <li>
                <strong>Statistična analitika obiska</strong> — samo če z{" "}
                <strong>izrecnim soglasjem</strong> na pasici za piškotke
                izberete možnost, ki vključuje analitiko (člen 6(1)(a) GDPR).
                Brez soglasja GA4 se ne naloži.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              5. Piškotki
            </h2>
            <p>
              Piškotki so majhne datoteke, ki se shranijo v vašo napravo.
              Uporabljamo jih za delitev med nujnimi (nujni za osnovno delovanje
              ali varnost) in neobveznimi — analitičnimi.
            </p>
            <p>
              Z izbiro <strong>„Zavrni neesencialne“</strong> na pasici
              dovolite zgolj nujno rabo v okviru tega, kar je tehnično potrebno
              za prikaz strani. Z izbiro <strong>„Sprejmi vse“</strong> dodate
              še Google Analytics 4.
            </p>
            <p>
              Svojo izbiro lahko kadarkoli spremenite s povezavo{" "}
              <strong>„Nastavitve piškotkov“</strong> v nogi strani.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              6. Google Analytics 4
            </h2>
            <p>
              Ponudnik: Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irska. Pri obdelavi lahko pride do prenosa podatkov v
              ZDA na podlagi ustreznih zavarovanj (npr. standardnih pogodbenih
              klavzul EU). Več: dokumentacija Google in njihova politika
              zasebnosti.
            </p>
            <p>
              GA4 omogočimo <strong>samo po soglasju</strong>. Če soglasja ne
              podate, skripte za GA na tej strani ne naložimo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              7. E-poštno povpraševanje (Resend)
            </h2>
            <p>
              Sporočila z obrazca posredujemo na naš službeni e-naslov prek
              ponudnika poštne storitve Resend (ZDA / EU infrastruktura po
              ponudnikovi dokumentaciji). Pogodbeno obdelavo izvajamo na podlagi
              pogodbe z obdelovalcem in ustreznih tehničnih ukrepov.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              8. Hramba podatkov
            </h2>
            <p>
              Podatke iz povpraševanja hranimo le toliko časa, kot je potrebno
              za obravnavo zahteve in morebitno pripravo ponudbe ter za uveljavitev,
              izpolnitev ali obrambo pravnih zahtevkov. Po preteku tega obdobja jih
              izbrišemo ali anonimiziramo, razen če zakon ne določa daljšega
              roka.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              9. Vaše pravice
            </h2>
            <p>V skladu z GDPR in ZVOP-2 med drugim lahko zahtevate:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-burgundy">
              <li>dostop do osebnih podatkov in njihov izpis,</li>
              <li>popravek netočnih podatkov,</li>
              <li>izbris („pravica do pozabe“), kadar so izpolnjeni pogoji,</li>
              <li>omejitev obdelave ali ugovor,</li>
              <li>
                prenosljivost podatkov, kjer je to tehnično izvedljivo in
                predpisano,
              </li>
              <li>
                umik soglasja kadar obdelava temelji na soglasju — brez vpliva na
                zakonitost obdelave pred umikom.
              </li>
            </ul>
            <p>
              Zahtevo lahko naslovite na zgoraj navedeni kontaktni e-naslov.
              Upravljavec bo odgovoril v zakonsko predpisanih rokih.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              10. Pravo na pritožbo
            </h2>
            <p>
              Če menite, da obdelava krši predpise o varstvu podatkov, imate
              pravico vložiti pritožbo pri nadzornem organu — v Sloveniji je to{" "}
              <strong>Informacijski pooblaščenec Republike Slovenije</strong> (
              <a
                href="https://www.ip-rs.si"
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-burgundy underline decoration-burgundy/35 underline-offset-2 hover:decoration-burgundy"
              >
                www.ip-rs.si
              </a>
              ).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-display text-2xl text-charcoal">
              11. Spremembe politike
            </h2>
            <p>
              Politiko lahko občasno posodobimo. Datum zadnje posodobitve je
              naveden na vrhu te strani. Pri pomembnih spremembah vas lahko
              obvestimo tudi na drug ustrezen način.
            </p>
          </section>

          <p className="rounded-2xl border border-bone/70 bg-cream/50 p-5 text-sm text-charcoal/70">
            Besedilo je splošnega informacijskega značaja in ne nadomešča
            individualnega pravnega sveta. Za pravno zavezujoče pojasnila se po
            potrebi posvetujte z odvetnikom ali Informacijskim pooblaščencem.
          </p>

          <p className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium text-burgundy underline decoration-burgundy/35 underline-offset-4 hover:decoration-burgundy"
            >
              ← Nazaj na domačo stran
            </Link>
          </p>
        </article>
        </div>
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </>
  );
}
