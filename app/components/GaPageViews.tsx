"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { GA_MEASUREMENT_ID } from "../lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Pošlje GA4 `page_view` ob client navigaciji, ko je analitika omogočena
 * (`GatedGoogleAnalytics` + soglasje za piškotke).
 */
export default function GaPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const skipInitial = useRef(true);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const query = searchParams?.toString() ?? "";
    const pagePath = query.length ? `${pathname}?${query}` : pathname;

    if (skipInitial.current) {
      skipInitial.current = false;
      return;
    }

    const gtag = window.gtag;
    if (typeof gtag !== "function") return;

    gtag("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
    });
  }, [pathname, searchParams]);

  return null;
}
