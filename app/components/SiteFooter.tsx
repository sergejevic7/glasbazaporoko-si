import { PHONE_DISPLAY, PHONE_TEL } from "../lib/contact";
import { SOCIAL } from "../lib/media";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "./Icons";

const NAV = [
  { href: "#zakaj", label: "Zakaj violinistka" },
  { href: "#storitve", label: "Storitve" },
  { href: "#nastopi", label: "Nastopi" },
  { href: "#galerija", label: "Galerija" },
  { href: "#proces", label: "Proces" },
  { href: "#mnenja", label: "Mnenja" },
  { href: "#pogosta-vprasanja", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-charcoal text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_80%_0%,rgba(201,169,106,0.12),transparent_70%)]"
      />
      <div className="relative container-tight py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-11 w-11 place-items-center rounded-full border border-champagne/40 bg-ivory/5 text-champagne"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M14.5 3.5c1.5 1.5 1.5 4 0 5.5l-7 7c-1.5 1.5-4 1.5-5.5 0s-1.5-4 0-5.5l7-7c1.5-1.5 4-1.5 5.5 0z" />
                  <path d="M16 8l4-4M19 11l3.5-3.5" />
                  <circle cx="6" cy="18" r="1.2" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="heading-display text-xl text-ivory">
                  Glasba za poroko
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-champagne">
                  Barbara Zalaznik · Violina
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Vrhunska violinistka za poročni obred, sprejem svatov in
              slavnostne trenutke. Vsaki poroki posvetim glasbo, ki jo bosta
              ohranila za vse življenje.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
                { Icon: Facebook, href: SOCIAL.facebook, label: "Facebook" },
                { Icon: Youtube, href: SOCIAL.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Barbara Zalaznik na ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory/15 bg-ivory/5 text-ivory/80 transition hover:border-champagne/50 hover:text-champagne"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Hitre povezave"
            className="lg:col-span-3"
          >
            <h3 className="text-[10px] uppercase tracking-[0.32em] text-champagne">
              Hitre povezave
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-ivory/75 lg:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="transition hover:text-champagne"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.32em] text-champagne">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-champagne" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-ivory/85 hover:text-champagne"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-champagne" />
                <a
                  href="mailto:info@glasbazaporoko.si"
                  className="text-ivory/85 hover:text-champagne"
                >
                  info@glasbazaporoko.si
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-champagne" />
                <span className="text-ivory/85">
                  Vsa Slovenija &amp; sosednje države
                </span>
              </li>
            </ul>

            <a
              href="#kontakt"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm font-medium text-charcoal transition hover:bg-gold"
            >
              Pošljita povpraševanje
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/55 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Glasba za poroko · Barbara Zalaznik.
            Vse pravice pridržane.
          </p>
          <p>
            Spletni avtor:{" "}
            <a
              href="#"
              className="underline decoration-ivory/20 underline-offset-4 hover:text-champagne"
            >
              www.glasbazaporoko.si
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
