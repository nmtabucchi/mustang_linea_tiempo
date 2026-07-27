import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-mustang-dark"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/mustang/hero.jpg"
          alt="Ford Mustang GT clásico en color rojo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mustang-dark/70 to-mustang-dark" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <SectionTitle
          title="Ford Mustang GT"
          subtitle="Explora la evolución histórica del pony car más icónico de América"
        />

        <p className="text-mustang-silver text-lg mb-8 max-w-2xl mx-auto">
          Desde 1964 hasta la actualidad, descubre siete generaciones de potencia,
          diseño y pasión automotriz que han definido un legado.
        </p>

        <Button href="#timeline" variant="primary">
          Explorar Línea de Tiempo
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a
          href="#timeline"
          className="focus:outline-none focus:ring-2 focus:ring-mustang-blue focus:ring-offset-2 focus:ring-offset-mustang-dark rounded"
          aria-label="Desplazarse a la línea de tiempo"
        >
          <svg
            className="w-8 h-8 text-mustang-silver"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
