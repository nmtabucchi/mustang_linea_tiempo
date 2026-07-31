const cache = {};

export async function loadTranslations(lang) {
  if (cache[lang]) return cache[lang];
  try {
    const response = await fetch(`/data/translations/${lang}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    cache[lang] = await response.json();
    return cache[lang];
  } catch (err) {
    throw new Error(`Error al cargar traducciones: ${lang} — ${err.message}`);
  }
}

export function getCurrentLang() {
  if (typeof window === "undefined") return "es";
  try {
    return localStorage.getItem("lang") || "es";
  } catch {
    return "es";
  }
}

export function saveLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {
  }
}
