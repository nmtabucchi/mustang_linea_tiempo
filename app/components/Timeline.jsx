import mustangGenerations from "../data/mustang";
import TimelineCard from "./TimelineCard";
import SectionTitle from "./SectionTitle";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-mustang-dark">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Línea de Tiempo"
          subtitle="Siete generaciones de excelencia automotriz"
        />

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-mustang-blue/30 hidden md:block" />

          {mustangGenerations.map((generation, index) => (
            <div key={generation.id} className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-mustang-blue rounded-full hidden md:block z-10"
                   style={{ top: "50%" }} />
              <TimelineCard
                year={generation.year}
                name={generation.name}
                image={generation.image}
                description={generation.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
