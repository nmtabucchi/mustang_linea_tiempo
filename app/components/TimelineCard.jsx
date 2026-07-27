import Image from "next/image";

export default function TimelineCard({ year, name, image, description, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    }`}>
      <div className="w-full md:w-1/2">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group">
          <Image
            src={image}
            alt={`${name} - Ford Mustang GT (${year})`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-mustang-dark/20 group-hover:bg-mustang-dark/10 transition-colors duration-500" />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="text-mustang-blue font-semibold text-lg mb-2" aria-hidden="true">{year}</div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{name}</h3>
        <p className="text-mustang-silver leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
