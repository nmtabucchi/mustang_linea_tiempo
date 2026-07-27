import mustangGenerations from "../data/mustang";
import TimelineCard from "./TimelineCard";
import SectionTitle from "./SectionTitle";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-mustang-dark" aria-label="Línea de tiempo del Mustang GT">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Línea de Tiempo"
          subtitle="Siete generaciones de excelencia automotriz"
        />

        <div className="relative" role="list" aria-label="Generaciones del Mustang GT">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-mustang-blue/30 hidden md:block" aria-hidden="true" />

          {mustangGenerations.map((generation, index) => (
            <article key={generation.id} className="relative" role="listitem">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-mustang-blue rounded-full hidden md:block z-10"
                   style={{ top: "50%" }}
                   aria-hidden="true" />
              <TimelineCard
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
