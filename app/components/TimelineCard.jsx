import Image from "next/image";

export default function TimelineCard({ year, name, image, description, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
      isEven ? "md:flex-row" : "md:flex-row-reverse"
    }`}>
      <div className="w-full md:w-1/2">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={image}
            alt={`${name} - Ford Mustang GT`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="text-mustang-blue font-semibold text-lg mb-2">{year}</div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{name}</h3>
        <p className="text-mustang-silver leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
