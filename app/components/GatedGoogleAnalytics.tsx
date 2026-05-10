"use client";

import { Suspense } from "react";
import Script from "next/script";
import GaPageViews from "./GaPageViews";
import { GA_MEASUREMENT_ID, isGoogleAnalyticsEnabled } from "../lib/analytics";
import { useCookieConsent } from "../context/CookieConsentContext";

/**
 * Naloži GA4 šele po izrecnem soglasju za analitiko (ZVOP-2 / GDPR).
 */
export default function GatedGoogleAnalytics() {
  const { consent } = useCookieConsent();

  if (!isGoogleAnalyticsEnabled() || consent !== "analytics") {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`}
      </Script>
      <Suspense fallback={null}>
        <GaPageViews />
      </Suspense>
    </>
  );
}
