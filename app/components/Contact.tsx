"use client";

import { type FormEvent, useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, RESPONSE_COPY } from "../lib/contact";
import { ArrowRight, Mail, MapPin, Phone } from "./Icons";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // The form is intentionally a static layout. Wire up to a backend / email
    // service (e.g. Resend, Formspree, Vercel Postmark) when deploying.
    setTimeout(() => setStatus("success"), 700);
  }

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-naslov"
      className="relative bg-cream py-20 md:py-28 lg:py-32"
    >
      <div className="container-tight">
        <div className="grid gap-10 rounded-[2rem] border border-bone/70 bg-ivory p-6 shadow-[0_30px_80px_-40px_rgba(26,20,16,0.25)] md:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="soft-divider" />
              <span className="eyebrow">Kontakt</span>
            </div>
            <h2
              id="kontakt-naslov"
              className="heading-display mt-5 text-4xl text-charcoal md:text-5xl"
            >
              Pišita.{" "}
              <em className="not-italic text-burgundy">
                Začniva najino zgodbo.
              </em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70">
              {RESPONSE_COPY.contactIntro}
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream text-burgundy ring-1 ring-bone/70">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                    Telefon
                  </p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-1 block text-base font-medium text-charcoal hover:text-burgundy"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream text-burgundy ring-1 ring-bone/70">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                    E-pošta
                  </p>
                  <a
                    href="mailto:info@glasbazaporoko.si"
                    className="mt-1 block text-base font-medium text-charcoal hover:text-burgundy"
                  >
                    info@glasbazaporoko.si
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream text-burgundy ring-1 ring-bone/70">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                    Pokritost
                  </p>
                  <p className="mt-1 text-base font-medium text-charcoal">
                    Vsa Slovenija &amp; sosednje države
                  </p>
                  <p className="mt-1 text-xs text-charcoal/60">
                    Izhodišče: Ljubljana / Vrhnika
                  </p>
                </div>
              </li>
            </ul>

            <p className="mt-10 text-xs text-charcoal/55">
              Vsa povpraševanja so brez obveznosti. Vajini podatki ostanejo
              zaupni in se ne posredujejo tretjim osebam.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-7"
            aria-describedby="form-help"
          >
            <p id="form-help" className="sr-only">
              Polje označeno z * je obvezno.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Ime in priimek"
                name="ime"
                placeholder="Ana Novak"
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="ana@primer.si"
                required
              />
              <Field
                label="Telefon"
                name="telefon"
                type="tel"
                placeholder={PHONE_DISPLAY}
              />
              <Field
                label="Datum poroke"
                name="datum"
                type="date"
              />
              <Field
                label="Lokacija / prizorišče"
                name="lokacija"
                placeholder="npr. Vila Bled"
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="storitev"
                  className="text-[10px] uppercase tracking-[0.28em] text-gold-deep"
                >
                  Kateri del dne vaju zanima?
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    "Civilni obred",
                    "Cerkveni obred",
                    "Sprejem svatov",
                    "Prvi ples",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-bone/70 bg-ivory px-3 py-2 text-xs text-charcoal/80 transition hover:border-burgundy/40 has-[:checked]:border-burgundy has-[:checked]:bg-burgundy/5 has-[:checked]:text-burgundy"
                    >
                      <input
                        type="checkbox"
                        name="storitve"
                        value={opt}
                        className="h-3.5 w-3.5 accent-burgundy"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="sporocilo"
                  className="text-[10px] uppercase tracking-[0.28em] text-gold-deep"
                >
                  Sporočilo
                </label>
                <textarea
                  id="sporocilo"
                  name="sporocilo"
                  rows={5}
                  placeholder="Povejta mi kaj o najini poroki — slog, vzdušje, posebne želje..."
                  className="mt-2 w-full rounded-2xl border border-bone/70 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition focus:border-burgundy/60 focus:ring-2 focus:ring-burgundy/15"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 text-sm font-medium text-ivory shadow-[var(--shadow-card)] transition hover:bg-burgundy-deep disabled:opacity-70"
              >
                {status === "submitting" ? "Pošiljam…" : "Pošlji povpraševanje"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              {status === "success" && (
                <p
                  role="status"
                  className="text-sm text-burgundy"
                >
                  {RESPONSE_COPY.formSuccess}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-bone/70 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition focus:border-burgundy/60 focus:ring-2 focus:ring-burgundy/15"
      />
    </label>
  );
}
