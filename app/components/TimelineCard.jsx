"use client";

import Image from "next/image";
import { useI18n } from "../lib/I18nProvider";

export default function TimelineCard({ id, year, name, image, description, index }) {
  const { t } = useI18n();
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20 ${
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    }`}>
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
          <Image
            src={image}
            alt={`${t(`generation.${id}.name`, name)} - Ford Mustang GT (${year})`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mustang-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <span className="inline-block text-mustang-red font-mono text-sm tracking-widest mb-3">
          {year}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-mustang-white mb-4 leading-tight">
          {t(`generation.${id}.name`, name)}
        </h3>
        <p className="text-mustang-silver leading-relaxed text-lg">
          {t(`generation.${id}.description`, description)}
        </p>
        <div className="mt-6">
          <a 
            href="#" 
            className="inline-flex items-center text-mustang-red hover:text-mustang-red-hover font-medium transition-colors duration-300"
          >
            <span>{t("timeline.card.explore", "Explorar Generación")}</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
