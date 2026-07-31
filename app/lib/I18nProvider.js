"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { loadTranslations, saveLang, getCurrentLang } from "./i18n";

const I18nContext = createContext(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n debe usarse dentro de I18nProvider");
  return ctx;
}

export default function I18nProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [translations, setTranslations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const saved = getCurrentLang();
    setLang(saved);
    loadTranslations(saved).then(setTranslations).catch(() => {});
  }, []);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(null), 5000);
    return () => clearTimeout(timer);
  }, [error]);

  useEffect(() => {
    if (translations && translations["site.title"]) {
      document.title = translations["site.title"];
    }
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [translations, lang]);

  const changeLanguage = useCallback(async (newLang) => {
    if (newLang === lang) return;
    setError(null);
    setLoading(true);
    try {
      const t = await loadTranslations(newLang);
      setTranslations(t);
      setLang(newLang);
      saveLang(newLang);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [lang]);

  const t = useCallback((key, fallback = "") => {
    if (translations && translations[key]) return translations[key];
    return fallback || key;
  }, [translations]);

  return (
    <I18nContext.Provider value={{ lang, t, changeLanguage, loading, error }}>
      {children}
      {error && (
        <div
          role="alert"
          className="fixed bottom-4 right-4 bg-mustang-red text-mustang-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg z-50"
        >
          {error}
        </div>
      )}
    </I18nContext.Provider>
  );
}
