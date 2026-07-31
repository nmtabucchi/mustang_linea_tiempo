"use client";

import mustangGenerations from "../data/mustang";
import { useI18n } from "../lib/I18nProvider";

export default function Sources() {
  const { t } = useI18n();

  return (
    <section id="sources" className="py-16 md:py-16 bg-mustang-dark-secondary" aria-label={t("sources.section.aria", "Fuentes y referencias")}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mustang-white mt-4 mb-6">
            {t("sources.title", "Fuentes y Referencias")}
          </h2>
          <p className="text-mustang-silver text-lg max-w-2xl mx-auto">
            {t("sources.subtitle", "Información obtenida de fuentes confiables y verificadas")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mustangGenerations.map((generation) => (
            <article
              key={generation.id}
              className="bg-mustang-dark rounded-2xl p-6 border border-mustang-border hover:border-mustang-red/50 transition-colors duration-300"
            >
              <div className="mb-4">
                <span className="text-mustang-red font-mono text-xs tracking-widest">
                  {generation.year}
                </span>
                <h3 className="text-xl font-bold text-mustang-white mt-1">
                  {t(`generation.${generation.id}.name`, generation.name)}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-mustang-silver uppercase tracking-wider mb-2">
                    {t("sources.information", "Información")}
                  </h4>
                  <ul className="space-y-2">
                    {generation.sources.information.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mustang-silver hover:text-mustang-red text-sm transition-colors duration-300 inline-flex items-center gap-2"
                        >
                          <svg
                            className="w-3 h-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {source.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-mustang-silver uppercase tracking-wider mb-2">
                    {t("sources.images", "Imágenes")}
                  </h4>
                  <ul className="space-y-2">
                    {generation.sources.images.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mustang-silver hover:text-mustang-red text-sm transition-colors duration-300 inline-flex items-center gap-2"
                        >
                          <svg
                            className="w-3 h-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {source.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-mustang-gray text-sm">
            {t("sources.license", "Las imágenes utilizadas son de fuentes libres de derechos (Unsplash, Pexels, Wikimedia Commons) bajo licencias Creative Commons o dominio público.")}
          </p>
        </div>
      </div>
    </section>
  );
}
