"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  submitContactForm,
  type ContactField,
  type ContactFormState,
} from "../actions/contact";
import {
  CONTACT_EMAIL_DISPLAY,
  INQUIRY_SERVICE_OPTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  RESPONSE_COPY,
} from "../lib/contact";
import { ArrowRight, Mail, MapPin, Phone } from "./Icons";

const initialFormState: ContactFormState = { ok: false };

function inputClass(invalid: boolean) {
  return [
    "mt-2 w-full rounded-2xl border bg-ivory px-4 py-3 text-base text-charcoal placeholder:text-charcoal/40 outline-none transition sm:text-sm",
    "focus:ring-2 focus:ring-burgundy/15",
    invalid
      ? "border-rose/70 focus:border-rose"
      : "border-bone/70 focus:border-burgundy/60",
  ].join(" ");
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialFormState,
  );

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  const fieldError = (key: ContactField) => state.errors?.[key];

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
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream text-burgundy ring-1 ring-bone/70">
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
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream text-burgundy ring-1 ring-bone/70">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                    E-pošta
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL_DISPLAY}`}
                    className="mt-1 block text-base font-medium text-charcoal hover:text-burgundy"
                  >
                    {CONTACT_EMAIL_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream text-burgundy ring-1 ring-bone/70">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold-deep">
                    Pokritost
                  </p>
                  <p className="mt-1 text-base font-medium text-charcoal">
                    Vsa Slovenija &amp; sosednje države
                  </p>
                </div>
              </li>
            </ul>

            <p className="mt-10 text-xs text-charcoal/70">
              Vsa povpraševanja so brez obveznosti. Vajini podatki ostanejo
              zaupni in se ne posredujejo tretjim osebam.
            </p>
          </div>

          <div className="lg:col-span-7">
            <form
              ref={formRef}
              action={formAction}
              className="relative flex flex-col gap-6"
              aria-busy={isPending}
            >
              {/* Honeypot — naj ostane prazno */}
              <div
                className="pointer-events-none absolute left-[-10000px] h-px w-px overflow-hidden opacity-0"
                aria-hidden="true"
              >
                <label htmlFor="company_website">Company website</label>
                <input
                  id="company_website"
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              <p id="form-required-hint" className="sr-only">
                Polja označena z obveznico so obvezna.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Ime in priimek"
                  name="name"
                  autoComplete="name"
                  placeholder="Ana Novak"
                  requiredMark
                  error={fieldError("name")}
                  disabled={isPending}
                />
                <Field
                  id="email"
                  label="E-pošta"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="ana@primer.si"
                  requiredMark
                  error={fieldError("email")}
                  disabled={isPending}
                />
                <Field
                  id="phone"
                  label="Telefon"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={PHONE_DISPLAY}
                  requiredMark
                  error={fieldError("phone")}
                  disabled={isPending}
                />
                <Field
                  id="weddingDate"
                  label="Datum poroke"
                  name="weddingDate"
                  type="date"
                  requiredMark
                  error={fieldError("weddingDate")}
                  disabled={isPending}
                />
                <Field
                  id="weddingLocation"
                  label="Lokacija poroke"
                  name="weddingLocation"
                  autoComplete="street-address"
                  placeholder="npr. Vila Bled, Ljubljana …"
                  requiredMark
                  error={fieldError("weddingLocation")}
                  className="sm:col-span-2"
                  disabled={isPending}
                />

                <div className="sm:col-span-2">
                  <label
                    htmlFor="serviceType"
                    className="text-[10px] uppercase tracking-[0.28em] text-gold-deep"
                  >
                    Vrsta storitve{" "}
                    <span className="text-burgundy" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    disabled={isPending}
                    aria-invalid={Boolean(fieldError("serviceType"))}
                    aria-describedby={
                      fieldError("serviceType")
                        ? "serviceType-error"
                        : undefined
                    }
                    defaultValue=""
                    className={inputClass(Boolean(fieldError("serviceType")))}
                  >
                    <option value="" disabled>
                      Izberite storitev …
                    </option>
                    {INQUIRY_SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {fieldError("serviceType") ? (
                    <p
                      id="serviceType-error"
                      className="mt-1.5 text-sm text-burgundy-deep"
                      role="alert"
                    >
                      {fieldError("serviceType")}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-[0.28em] text-gold-deep"
                  >
                    Sporočilo{" "}
                    <span className="text-burgundy" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={isPending}
                    placeholder="Povejta o slogu poroke, željah in posebnostih …"
                    aria-invalid={Boolean(fieldError("message"))}
                    aria-describedby={
                      fieldError("message") ? "message-error" : undefined
                    }
                    className={inputClass(Boolean(fieldError("message")))}
                  />
                  {fieldError("message") ? (
                    <p
                      id="message-error"
                      className="mt-1.5 text-sm text-burgundy-deep"
                      role="alert"
                    >
                      {fieldError("message")}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-bone/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isPending}
                  className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-burgundy px-8 py-3.5 text-sm font-medium text-ivory shadow-[var(--shadow-card)] transition hover:bg-burgundy-deep disabled:pointer-events-none disabled:opacity-65"
                >
                  {isPending ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-ivory/30 border-t-ivory"
                        aria-hidden
                      />
                      Pošiljam …
                    </>
                  ) : (
                    <>
                      Pošlji povpraševanje
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <div
                  className="min-h-[3rem] flex-1 text-sm sm:text-right"
                  aria-live="polite"
                >
                  {state.ok ? (
                    <p
                      role="status"
                      className="rounded-2xl border border-champagne/40 bg-champagne/15 px-4 py-3 text-left text-charcoal sm:text-right"
                    >
                      {RESPONSE_COPY.formSuccess}
                    </p>
                  ) : null}
                  {!state.ok && state.message ? (
                    <p
                      role="alert"
                      className="rounded-2xl border border-rose/50 bg-rose/10 px-4 py-3 text-left text-burgundy-deep sm:text-right"
                    >
                      {state.message}
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  placeholder,
  requiredMark,
  error,
  className,
  disabled,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  requiredMark?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
  autoComplete?: string;
}) {
  const errId = `${id}-error`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-[10px] uppercase tracking-[0.28em] text-gold-deep"
      >
        {label}{" "}
        {requiredMark ? (
          <span className="text-burgundy" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={Boolean(requiredMark)}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errId : undefined}
        className={inputClass(Boolean(error))}
      />
      {error ? (
        <p id={errId} className="mt-1.5 text-sm text-burgundy-deep" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
