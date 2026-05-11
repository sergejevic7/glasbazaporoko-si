"use server";

import { Resend } from "resend";

export type ContactField =
  | "name"
  | "email"
  | "phone"
  | "weddingDate"
  | "weddingLocation"
  | "message";

export type ContactFormState = {
  ok: boolean;
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("company_website") ?? "").trim();
  if (honeypot.length > 0) {
    return { ok: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const weddingDate = String(formData.get("weddingDate") ?? "").trim();
  const weddingLocation = String(formData.get("weddingLocation") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Partial<Record<ContactField, string>> = {};

  if (!name) errors.name = "Vnesite ime in priimek.";
  if (!email) errors.email = "Vnesite e-poštni naslov.";
  else if (!EMAIL_RE.test(email)) errors.email = "E-poštni naslov ni veljaven.";
  if (!phone) errors.phone = "Vnesite telefonsko številko.";
  if (!weddingDate) errors.weddingDate = "Izberite datum poroke.";
  if (!weddingLocation) errors.weddingLocation = "Vnesite lokacijo poroke.";
  if (!message) errors.message = "Napišite kratko sporočilo.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? "info@glasbazaporoko.si";
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey) {
    console.error("submitContactForm: RESEND_API_KEY is not set");
    return {
      ok: false,
      message:
        "Pošiljanje trenutno ni na voljo. Pokličite nas ali pišite neposredno na info@glasbazaporoko.si.",
    };
  }

  if (!from) {
    console.error("submitContactForm: RESEND_FROM_EMAIL is not set");
    return {
      ok: false,
      message:
        "Pošiljanje trenutno ni na voljo. Kontaktirajte nas po telefonu ali e-pošti.",
    };
  }

  const submittedAtIso = new Date().toISOString();
  const submittedAtLocal = new Intl.DateTimeFormat("sl-SI", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Europe/Ljubljana",
  }).format(new Date());

  const lines = [
    `Ime: ${name}`,
    `E-pošta: ${email}`,
    `Telefon: ${phone}`,
    `Datum poroke: ${weddingDate}`,
    `Lokacija poroke: ${weddingLocation}`,
    "",
    "Sporočilo:",
    message,
    "",
    "Vir: kontaktni obrazec na glasbazaporoko.si",
    "",
    `Čas oddaje (ISO): ${submittedAtIso}`,
    `Čas oddaje (Slovenija): ${submittedAtLocal}`,
  ];

  const htmlRows = [
    ["Ime", name],
    ["E-pošta", email],
    ["Telefon", phone],
    ["Datum poroke", weddingDate],
    ["Lokacija poroke", weddingLocation],
    ["Sporočilo", message],
    ["Vir", "Kontaktni obrazec — glasbazaporoko.si"],
    ["Čas oddaje (ISO)", submittedAtIso],
    ["Čas oddaje (Slovenija)", submittedAtLocal],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e8e0d8;font-weight:600;background:#faf6f1">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e8e0d8">${typeof v === "string" ? escapeHtml(v).replace(/\n/g, "<br />") : ""}</td></tr>`,
    )
    .join("");

  const html = `<!DOCTYPE html><html><body style="font-family:Georgia,serif;line-height:1.5;color:#1a1410">
<p style="font-size:14px;color:#6b2b3e"><strong>Novo povpraševanje</strong> — glasbazaporoko.si</p>
<table style="border-collapse:collapse;max-width:560px">${htmlRows}</table>
</body></html>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: "Novo povpraševanje - glasbazaporoko.si",
      text: lines.join("\n"),
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message:
          "Sporočila ni bilo mogoče poslati. Poskusite znova pozneje ali nas kontaktirajte neposredno.",
      };
    }

    return { ok: true };
  } catch (e) {
    console.error("submitContactForm:", e);
    return {
      ok: false,
      message:
        "Prišlo je do napake. Poskusite znova ali nas pokličite.",
    };
  }
}
