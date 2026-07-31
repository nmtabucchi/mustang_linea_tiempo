"use client";

import { useI18n } from "../lib/I18nProvider";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-16 md:py-16 bg-mustang-dark" aria-label={t("contact.section.aria", "Contacto")}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-mustang-red font-mono text-sm tracking-widest uppercase">
          {t("contact.badge", "Contacto")}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-mustang-white mt-4 mb-6">
          {t("contact.title", "¿Tienes Preguntas?")}
        </h2>
        <p className="text-mustang-silver text-lg mb-12 max-w-2xl mx-auto">
          {t("contact.subtitle", "Si quieres conocer más sobre la historia del Mustang GT o tienes alguna pregunta, no dudes en contactarnos.")}
        </p>
        
        <div className="bg-mustang-dark-secondary rounded-2xl p-8 md:p-12 border border-mustang-border">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder={t("contact.name.placeholder", "Tu nombre")}
                  className="w-full px-5 py-4 bg-mustang-dark border border-mustang-border rounded-xl text-mustang-white placeholder-mustang-gray focus:outline-none focus:border-mustang-blue transition-colors duration-300"
                  aria-label={t("contact.name.aria", "Nombre")}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("contact.email.placeholder", "Tu email")}
                  className="w-full px-5 py-4 bg-mustang-dark border border-mustang-border rounded-xl text-mustang-white placeholder-mustang-gray focus:outline-none focus:border-mustang-blue transition-colors duration-300"
                  aria-label={t("contact.email.aria", "Email")}
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder={t("contact.message.placeholder", "Tu mensaje")}
                rows={5}
                className="w-full px-5 py-4 bg-mustang-dark border border-mustang-border rounded-xl text-mustang-white placeholder-mustang-gray focus:outline-none focus:border-mustang-blue transition-colors duration-300 resize-none"
                aria-label={t("contact.message.aria", "Mensaje")}
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-mustang-red text-mustang-white font-semibold rounded-xl hover:bg-mustang-red-hover transition-all duration-300 hover:shadow-lg hover:shadow-mustang-red/25"
            >
              {t("contact.submit", "Enviar Mensaje")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
