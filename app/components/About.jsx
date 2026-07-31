"use client";

import Image from "next/image";
import { useI18n } from "../lib/I18nProvider";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-16 md:py-16 bg-mustang-dark-secondary" aria-label={t("about.section.aria", "Sobre el Mustang GT")}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-mustang-white mt-4 mb-6">
              {t("about.title", "La Leyenda Americana")}
            </h2>
            <p className="text-mustang-silver text-lg leading-relaxed mb-6">
              {t("about.paragraph1", "El Ford Mustang es más que un automóvil; es un ícono cultural que ha definido generaciones de entusiastas del automovilismo. Desde su lanzamiento en 1964, el Mustang ha sido sinónimo de libertad, potencia y espíritu americano.")}
            </p>
            <p className="text-mustang-silver text-lg leading-relaxed mb-8">
              {t("about.paragraph2", "Con siete generaciones de evolución, cada Mustang GT representa la perfecta combinación de diseño atrevido, ingeniería avanzada y el inconfundible rugido de un motor V8.")}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">7</div>
                <div className="text-mustang-silver text-sm">{t("about.stat.generations", "Generaciones")}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">60+</div>
                <div className="text-mustang-silver text-sm">{t("about.stat.years", "Años de Historia")}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">V8</div>
                <div className="text-mustang-silver text-sm">{t("about.stat.engine", "Motor icónico")}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">10M+</div>
                <div className="text-mustang-silver text-sm">{t("about.stat.sold", "Unidades vendidas")}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/mustang/hero.jpg"
                alt={t("about.image.alt", "Ford Mustang GT clásico")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-mustang-red text-mustang-white px-6 py-4 rounded-xl">
              <div className="text-2xl font-bold">1964</div>
              <div className="text-sm opacity-90">{t("about.badge.year", "Año de inicio")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
