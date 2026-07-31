"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useI18n } from "../lib/I18nProvider";

const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [langFocusIndex, setLangFocusIndex] = useState(-1);
  const langRef = useRef(null);
  const langButtonRef = useRef(null);
  const langOptionRefs = useRef([]);
  const { lang, t, changeLanguage } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape" && isLangOpen) {
        setIsLangOpen(false);
        langButtonRef.current?.focus();
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isLangOpen]);

  const handleLangKeyDown = useCallback((e) => {
    if (!isLangOpen) return;
    const maxIndex = languages.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setLangFocusIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setLangFocusIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (langFocusIndex >= 0) {
          changeLanguage(languages[langFocusIndex].code);
          setIsLangOpen(false);
          langButtonRef.current?.focus();
        }
        break;
    }
  }, [isLangOpen, langFocusIndex, changeLanguage]);

  useEffect(() => {
    if (langFocusIndex >= 0 && langOptionRefs.current[langFocusIndex]) {
      langOptionRefs.current[langFocusIndex].focus();
    }
  }, [langFocusIndex]);

  const navLinks = [
    { key: "header.nav.home", href: "#hero", label: "Inicio" },
    { key: "header.nav.timeline", href: "#timeline", label: "Línea de Tiempo" },
    { key: "header.nav.about", href: "#about", label: "Historia" },
    { key: "header.nav.sources", href: "#sources", label: "Fuentes" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-mustang-dark/95 backdrop-blur-md border-b border-mustang-border" 
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between" aria-label={t("header.nav.aria", "Navegación principal")}>
        <a
          href="#hero"
          className="text-xl font-bold text-mustang-white hover:text-mustang-blue transition-colors duration-300"
        >
          {t("header.logo", "Mustang GT")}
        </a>

        <ul className="hidden md:flex items-center gap-10" role="menubar">
          {navLinks.map((link) => (
            <li key={link.key} role="none">
              <a
                href={link.href}
                className="text-mustang-silver hover:text-mustang-white text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-mustang-red after:transition-all after:duration-300 hover:after:w-full"
                role="menuitem"
              >
                {t(link.key, link.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="relative" ref={langRef}>
            <button
              ref={langButtonRef}
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setLangFocusIndex(-1);
              }}
              className="flex items-center gap-1 text-mustang-silver hover:text-mustang-white text-sm font-medium transition-colors duration-300 px-2 py-1 border border-mustang-border rounded-md"
              aria-label="language.selector.aria"
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{lang.toUpperCase()}</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangOpen && (
              <div
                className="absolute right-0 mt-2 w-32 bg-mustang-dark-secondary border border-mustang-border rounded-lg shadow-xl overflow-hidden z-50"
                role="listbox"
              aria-label={t("language.selector.aria", "Seleccionar idioma")}
                onKeyDown={handleLangKeyDown}
              >
                {languages.map((l, i) => (
                  <button
                    key={l.code}
                    ref={(el) => (langOptionRefs.current[i] = el)}
                    role="option"
                    aria-selected={lang === l.code}
                    onClick={() => {
                      changeLanguage(l.code);
                      setIsLangOpen(false);
                      langButtonRef.current?.focus();
                    }}
                    onMouseEnter={() => setLangFocusIndex(i)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 ${
                      lang === l.code
                        ? "text-mustang-red bg-mustang-red/10"
                        : "text-mustang-silver hover:text-mustang-white hover:bg-mustang-dark"
                    } ${langFocusIndex === i ? "ring-1 ring-mustang-red/50" : ""}`}
                  >
                    {t(`language.${l.code}`, l.label)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="md:hidden text-mustang-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t("header.menu.aria", "Menu")}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-mustang-dark/95 backdrop-blur-md border-t border-mustang-border">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="block text-mustang-silver hover:text-mustang-white text-lg font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.key, link.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
