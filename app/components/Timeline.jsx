"use client";

import mustangGenerations from "../data/mustang";
import TimelineCard from "./TimelineCard";
import { useI18n } from "../lib/I18nProvider";

export default function Timeline() {
  const { t } = useI18n();

  return (
    <section id="timeline" className="py-16 md:py-16 bg-mustang-dark" aria-label={t("timeline.section.aria", "Línea de tiempo del Mustang GT")}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-mustang-white mt-4 mb-6">
            {t("timeline.title", "Línea de Tiempo")}
          </h2>
          <p className="text-mustang-silver text-lg max-w-2xl mx-auto">
            {t("timeline.subtitle", "Siete generaciones de excelencia automotriz")}
          </p>
        </div>

        <div className="relative" role="list" aria-label={t("timeline.list.aria", "Generaciones del Mustang GT")}>
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-mustang-red/50 via-mustang-red/20 to-transparent hidden md:block" aria-hidden="true" />

          {mustangGenerations.map((generation, index) => (
            <article key={generation.id} className="relative" role="listitem">
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-mustang-red rounded-full hidden md:block z-10 ring-4 ring-mustang-dark"
                   style={{ top: "50%" }}
                   aria-hidden="true" />
              <TimelineCard
                id={generation.id}
                year={generation.year}
                name={generation.name}
                image={generation.image}
                description={generation.description}
                index={index}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
