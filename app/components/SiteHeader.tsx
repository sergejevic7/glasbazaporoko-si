"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMarkIcon } from "./BrandMark";
import { siteHashHref, siteHomeHref } from "../lib/hash-link";
import { Close, Menu } from "./Icons";

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

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-bone/70 shadow-[0_1px_24px_-12px_rgba(26,20,16,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex items-center justify-between py-4 md:py-5">
        <Link
          href={siteHomeHref(pathname)}
          className="group flex items-center gap-3"
          aria-label="Glasba za poroko – domov"
        >
          <span
            aria-hidden
            className="grid h-10 w-10 shrink-0 place-items-center overflow-visible rounded-full border border-champagne/60 bg-ivory/70 text-burgundy transition group-hover:border-champagne"
          >
            <BrandMarkIcon className="h-5 w-5 shrink-0 overflow-visible" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="heading-display text-lg text-charcoal md:text-xl">
              Glasba za poroko
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-gold-deep">
              Barbara Zalaznik · Violina
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Glavni meni">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={siteHashHref(pathname, item.href)}
              className="text-sm text-charcoal/70 transition hover:text-burgundy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteHashHref(pathname, "#kontakt")}
            className="inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 text-sm font-medium text-ivory shadow-[var(--shadow-card)] transition hover:bg-burgundy-deep"
          >
            Pošljita povpraševanje
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Zapri meni" : "Odpri meni"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-full border border-bone/80 bg-ivory/60 text-charcoal lg:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-0 top-[72px] bg-ivory/98 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav
            className="container-tight flex flex-col gap-1 pt-8"
            aria-label="Mobilni meni"
          >
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={siteHashHref(pathname, item.href)}
                onClick={() => setOpen(false)}
                className="border-b border-bone/60 py-4 heading-display text-3xl text-charcoal"
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteHashHref(pathname, "#kontakt")}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-burgundy px-6 py-4 text-base font-medium text-ivory shadow-[var(--shadow-card)]"
            >
              Pošljita povpraševanje
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
