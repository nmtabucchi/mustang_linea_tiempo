import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-mustang-dark overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/mustang/hero.jpg"
          alt="Ford Mustang GT clásico en color rojo"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mustang-dark/80 via-mustang-dark/50 to-mustang-dark" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-mustang-red font-semibold text-sm tracking-widest uppercase mb-4">
          Interactive Portfolio
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-mustang-white mb-6 leading-tight">
          Ford Mustang GT
        </h1>
        
        <p className="text-mustang-silver text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Explora la evolución histórica del pony car más icónico de América.
          Desde 1964 hasta la actualidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#timeline" variant="primary">
            Explorar Línea de Tiempo
          </Button>
          <Button href="#about" variant="secondary">
            Conocer Más
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#timeline"
          className="flex flex-col items-center gap-2 text-mustang-silver hover:text-mustang-white transition-colors duration-300"
          aria-label="Desplazarse a la línea de tiempo"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
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
