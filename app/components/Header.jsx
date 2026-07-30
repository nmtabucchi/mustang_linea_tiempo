"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Línea de Tiempo", href: "#timeline" },
    { name: "Historia", href: "#about" },
    { name: "Fuentes", href: "#sources" },
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
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between" aria-label="Navegación principal">
        <a
          href="#hero"
          className="text-xl font-bold text-mustang-white hover:text-mustang-blue transition-colors duration-300"
        >
          Mustang GT
        </a>

        <ul className="hidden md:flex items-center gap-10" role="menubar">
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <a
                href={link.href}
                className="text-mustang-silver hover:text-mustang-white text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-mustang-red after:transition-all after:duration-300 hover:after:w-full"
                role="menuitem"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-mustang-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
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
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-mustang-dark/95 backdrop-blur-md border-t border-mustang-border">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-mustang-silver hover:text-mustang-white text-lg font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
