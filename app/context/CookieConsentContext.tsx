"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  type StoredCookieConsent,
  isStoredConsent,
} from "../lib/consent";

export type CookieConsentUiState = "pending" | StoredCookieConsent;

type CookieConsentContextValue = {
  consent: CookieConsentUiState;
  acceptEssentialOnly: () => void;
  acceptAnalytics: () => void;
  reopenPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

function getConsentFromStorage(): CookieConsentUiState {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return isStoredConsent(raw) ? raw : "pending";
  } catch {
    return "pending";
  }
}

function subscribeConsent(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => onStoreChange();
  window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function getConsentSnapshot(): CookieConsentUiState {
  if (typeof window === "undefined") return "pending";
  return getConsentFromStorage();
}

function getServerConsentSnapshot(): CookieConsentUiState {
  return "pending";
}

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  const persist = useCallback((value: StoredCookieConsent) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    } catch {
      /* zasebni način ipd. */
    }
    window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
  }, []);

  const acceptEssentialOnly = useCallback(() => {
    persist("essential");
  }, [persist]);

  const acceptAnalytics = useCallback(() => {
    persist("analytics");
  }, [persist]);

  const reopenPreferences = useCallback(() => {
    try {
      localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    } catch {
      /* */
    }
    window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));
  }, []);

  const value = useMemo(
    (): CookieConsentContextValue => ({
      consent,
      acceptEssentialOnly,
      acceptAnalytics,
      reopenPreferences,
    }),
    [consent, acceptEssentialOnly, acceptAnalytics, reopenPreferences],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error(
      "useCookieConsent mora biti znotraj CookieConsentProvider.",
    );
  }
  return ctx;
}

/** Ali naj se naloži Google Analytics (samo po izrecnem soglasju). */
export function useAnalyticsCookiesAllowed(): boolean {
  const ctx = useContext(CookieConsentContext);
  return ctx?.consent === "analytics";
}
