import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-mustang-dark-secondary" aria-label="Sobre el Mustang GT">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-mustang-red font-mono text-sm tracking-widest uppercase">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-mustang-white mt-4 mb-6">
              La Leyenda Americana
            </h2>
            <p className="text-mustang-silver text-lg leading-relaxed mb-6">
              El Ford Mustang es más que un automóvil; es un ícono cultural que ha 
              definido generaciones de entusiastas del automovilismo. Desde su 
              lanzamiento en 1964, el Mustang ha sido sinónimo de libertad, 
              potencia y espíritu americano.
            </p>
            <p className="text-mustang-silver text-lg leading-relaxed mb-8">
              Con siete generaciones de evolución, cada Mustang GT representa 
              la perfecta combinación de diseño atrevido, ingeniería avanzada 
              y el inconfundible rugido de un motor V8.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">7</div>
                <div className="text-mustang-silver text-sm">Generaciones</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">60+</div>
                <div className="text-mustang-silver text-sm">Años de Historia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">V8</div>
                <div className="text-mustang-silver text-sm">Motor icónico</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mustang-red mb-2">10M+</div>
                <div className="text-mustang-silver text-sm">Unidades vendidas</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/mustang/hero.jpg"
                alt="Ford Mustang GT clásico"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-mustang-red text-mustang-white px-6 py-4 rounded-xl">
              <div className="text-2xl font-bold">1964</div>
              <div className="text-sm opacity-90">Año de inicio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
