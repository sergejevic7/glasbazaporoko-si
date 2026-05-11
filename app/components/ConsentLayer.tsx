"use client";

import dynamic from "next/dynamic";

const CookieConsentBanner = dynamic(
  () => import("./CookieConsentBanner"),
  { ssr: false }
);

const GatedGoogleAnalytics = dynamic(
  () => import("./GatedGoogleAnalytics"),
  { ssr: false }
);

export default function ConsentLayer() {
  return (
    <>
      <CookieConsentBanner />
      <GatedGoogleAnalytics />
    </>
  );
}
