import "./globals.css";

export const metadata = {
  title: "Ford Mustang GT - Línea de Tiempo",
  description: "Explora la evolución histórica del Ford Mustang GT desde su primera generación hasta los modelos actuales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
