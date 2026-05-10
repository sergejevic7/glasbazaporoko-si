"use client";

import { useState } from "react";
import { RESPONSE_COPY } from "../lib/contact";
import { Minus, Plus } from "./Icons";

const ITEMS = [
  {
    q: "Koliko stane glasba za poroko?",
    a: "Cena je odvisna od dolžine programa, lokacije in želja para. Po prejemu povpraševanja pripravim transparentno ponudbo na podlagi termina, kraja in želenega obsega nastopa — od krajše violinske spremljave obreda do programa za celotno slavje. Brez skritih stroškov, vse na enem mestu.",
  },
  {
    q: "Kdaj je priporočljivo rezervirati termin?",
    a: "Priporočam rezervacijo 6–12 mesecev pred poroko, saj se najbolj zaželeni datumi v sezoni hitro zapolnijo. Tudi pri krajših rokih se vedno potrudim najti rešitev — pišita in skupaj preveriva razpoložljivost.",
  },
  {
    q: "Ali izvajate glasbo za civilni obred?",
    a: "Da. Igram na civilnih in cerkvenih obredih po vsej Sloveniji — v dvoranah, gradovih, na prostem, v cerkvah in na izjemnih posestvih. Repertoar prilagodim slogu obreda in vajinim željam.",
  },
  {
    q: "Ali lahko izbereva skladbe?",
    a: "Seveda. Skupaj sestaviva osebni glasbeni program — od klasičnih poročnih koračnic (Mendelssohn, Wagner, Vivaldi) do filmskih tem in moderne pop, rock ali narodno-zabavne glasbe v elegantni violinski priredbi. Če imata »vajino« pesem, jo skupaj prevedeva v jezik violine.",
  },
  {
    q: "Ali nastopate po vsej Sloveniji?",
    a: "Da, nastopam po vsej Sloveniji — od Primorske do Prekmurja — in ob predhodnem dogovoru tudi v sosednjih državah (Avstrija, Italija, Hrvaška). Logistiko in prevoz uskladiva v fazi rezervacije.",
  },
  {
    q: "Ali nudite ozvočenje?",
    a: "Da. Za manjše in srednje prostore zagotovim profesionalno, diskretno ozvočenje, ki se lepo zlije s prostorom. Za večje dvorane se uskladim z vašim DJ-em ali ponudnikom tehnike, da je zvok brezhiben.",
  },
  {
    q: "Lahko sodelujete z DJ-em ali bendom?",
    a: "Vsekakor. Pogosto pripravljamo skupne točke z DJ-i, pevci ali ansambli — od prvega plesa z filmskim pridihom do energičnih show točk z električno violino. Pred dogodkom uskladim tehnične zahteve in program.",
  },
  {
    q: "Ali nastopate na obletnicah in drugih dogodkih?",
    a: "Da. Poleg porok igram na obletnicah, krstih, poslovnih dogodkih, gala večerih, otvoritvah in zasebnih VIP zabavah. Repertoar prilagodim značaju vsakega dogodka.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="pogosta-vprasanja"
      aria-labelledby="faq-naslov"
      className="relative py-20 md:py-28 lg:py-32"
    >
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3">
                <span className="soft-divider" />
                <span className="eyebrow">Pogosta vprašanja</span>
              </div>
              <h2
                id="faq-naslov"
                className="heading-display mt-5 text-4xl text-charcoal md:text-5xl"
              >
                Vse, kar
                <br />
                <em className="not-italic text-burgundy">vaju zanima</em>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal/70">
                {RESPONSE_COPY.faqAside}
              </p>
              <a
                href="#kontakt"
                className="mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-charcoal/15 bg-ivory px-5 py-3 text-sm font-medium text-charcoal transition hover:border-burgundy/40 hover:text-burgundy focus-visible:outline-offset-4"
              >
                Postavi vprašanje
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-bone/70 overflow-hidden rounded-3xl border border-bone/70 bg-ivory">
              {ITEMS.map((item, i) => {
                const isOpen = open === i;
                const panelId = `faq-panel-${i}`;
                const btnId = `faq-trigger-${i}`;
                return (
                  <li key={item.q}>
                    <h3 className="m-0 text-[inherit] font-normal leading-snug">
                      <button
                        id={btnId}
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-center gap-4 px-6 py-5 text-left transition hover:bg-cream/60 focus-visible:outline-offset-4 md:px-7"
                      >
                        <span className="heading-display flex-1 text-lg text-charcoal md:text-xl">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className={`grid h-9 w-9 flex-none place-items-center rounded-full ring-1 transition ${
                            isOpen
                              ? "bg-burgundy text-ivory ring-burgundy"
                              : "bg-cream text-burgundy ring-bone/70"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="px-6 pb-6 pt-0 text-sm leading-relaxed text-charcoal/75 md:px-7 md:text-base">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
