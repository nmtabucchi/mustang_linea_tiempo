import "./globals.css";
import I18nProvider from "./lib/I18nProvider";
import { getCurrentLang } from "./lib/i18n";

export const metadata = {
  title: "Ford Mustang GT - Línea de Tiempo",
  description: "Explora la evolución histórica del Ford Mustang GT desde su primera generación hasta los modelos actuales.",
};

export default function RootLayout({ children }) {
  const defaultLang = getCurrentLang();

  return (
    <html lang={defaultLang} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var lang = localStorage.getItem('lang') || 'es';
                document.documentElement.lang = lang;
              })();
            `,
          }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
