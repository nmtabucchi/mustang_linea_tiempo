const mustangGenerations = [
  {
    id: 1,
    year: "1964-1973",
    name: "Primera Generación",
    image: "/images/mustang/1st-gen.jpg",
    description:
      "El Ford Mustang fue presentado el 17 de abril de 1964 en la Feria Mundial de Nueva York. Revolucionó la industria automotriz al crear el segmento de los pony cars con un diseño deportivo asequible. Diseñado bajo la dirección de Lee Iacocca, produjo más de un millón de unidades en sus primeros dos años. Se convirtió en un ícono cultural de la década de 1960, apareciendo en películas como Bullitt. Ofrecía motores desde un seis cilindros hasta un potente V8 de 289 pulgadas cúbicas.",
    sources: {
      information: [
        { name: "Ford Motor Company - Official History", url: "https://www.ford.com" },
        { name: "Mustang Club of America", url: "https://www.mustang.org" },
        { name: "Hot Rod Network - First Generation Mustang", url: "https://www.hotrod.com" }
      ],
      images: [
        { name: "Unsplash - Free Stock Photo", url: "https://unsplash.com" }
      ]
    }
  },
  {
    id: 2,
    year: "1974-1978",
    name: "Segunda Generación (Mustang II)",
    image: "/images/mustang/2nd-gen.jpg",
    description:
      "Respondió a la crisis del petróleo de 1973 con un diseño más compacto y eficiente. A pesar de ser más pequeño, mantuvo el espíritu deportivo de la marca. Ganó el Motor Trend Car of the Year en 1974, demostrando que un Mustang podía adaptarse a los tiempos difíciles. Disponible como hatchback y fastback, ofrecía motores más eficientes incluyendo una versión V8 de 302 pulgadas cúbicas.",
    sources: {
      information: [
        { name: "Motor Trend - Mustang II History", url: "https://www.motortrend.com" },
        { name: "Ford Media Center", url: "https://media.ford.com" }
      ],
      images: [
        { name: "Pexels - Free Stock Photo", url: "https://pexels.com" }
      ]
    }
  },
  {
    id: 3,
    year: "1979-1993",
    name: "Tercera Generación (Fox Body)",
    image: "/images/mustang/3rd-gen.jpg",
    description:
      "Basado en la plataforma Fox, reintrodujo el rendimiento con variantes como la Mustang GT 5.0. Se convirtió en un ícono de la cultura automotriz de los 80. El Mustang SVO ofrecía turboalimentación para los entusiastas de alto rendimiento. El motor V8 de 5.0 litros (302 pulgadas cúbicas) se legendario por su sonido y potencia modificable. Esta generación mantuvo vivo el legado del Mustang durante una época de cambios en la industria.",
    sources: {
      information: [
        { name: "Mustang Monthly - Fox Body Guide", url: "https://www.mustangmonthly.com" },
        { name: "Ford Performance - Heritage", url: "https://performance.ford.com" }
      ],
      images: [
        { name: "Wikimedia Commons - CC License", url: "https://commons.wikimedia.org" }
      ]
    }
  },
  {
    id: 4,
    year: "1994-2004",
    name: "Cuarta Generación",
    image: "/images/mustang/4th-gen.jpg",
    description:
      "Presentó un diseño más redondeado y moderno con líneas suaves. El Mustang Cobra de 1993 estableció nuevos estándares de rendimiento con su motor V8 de 320 caballos. Incluyó el icónico Mustang Mach 1 como edición especial. El Mustang SVT Cobra R se convirtió en una leyenda de la pista. Esta generación mantuvo la esencia deportiva mientras se adaptaba a los estándares de seguridad y emisiones modernos.",
    sources: {
      information: [
        { name: "Car and Driver - Fourth Gen Mustang", url: "https://www.caranddriver.com" },
        { name: "Edmunds - Mustang History", url: "https://www.edmunds.com" }
      ],
      images: [
        { name: "Unsplash - Free Stock Photo", url: "https://unsplash.com" }
      ]
    }
  },
  {
    id: 5,
    year: "2005-2014",
    name: "Quinta Generación (Retro-Futurista)",
    image: "/images/mustang/5th-gen.jpg",
    description:
      "Regresó a las raíces con un diseño retro-futurista inspirado en los modelos clásicos. El Mustang GT 2005 marcó el renacimiento del pony car americano. El Mustang Shelby GT500 rendía más de 500 caballos de fuerza, mientras que el Mustang Boss 302 y el Mustang Laguna Seca se convirtieron en leyendas de la pista. Esta generación revivió el espíritu del Mustang original con prestaciones contemporáneas.",
    sources: {
      information: [
        { name: "Road & Track - S197 Mustang", url: "https://www.roadandtrack.com" },
        { name: "Mustang6G Forum", url: "https://www.mustang6g.com" }
      ],
      images: [
        { name: "Unsplash - Free Stock Photo", url: "https://unsplash.com" }
      ]
    }
  },
  {
    id: 6,
    year: "2015-2023",
    name: "Sexta Generación (S550)",
    image: "/images/mustang/6th-gen.jpg",
    description:
      "Primera generación con suspensión trasera independiente, mejorando drásticamente el manejo. El Mustang GT incorporó el motor V8 Coyote de 5.0 litros con 435 caballos, mientras que el Mustang EcoBoost introdujo turboalimentación cuatro cilindros. El Mustang Shelby GT350 y GT500 establecieron nuevos estándares de rendimiento. Disponible globalmente por primera vez en la historia del Mustang.",
    sources: {
      information: [
        { name: "MotorTrend - S550 Mustang Review", url: "https://www.motortrend.com" },
        { name: "Ford Performance - Mustang GT", url: "https://performance.ford.com" }
      ],
      images: [
        { name: "Wikimedia Commons - CC License", url: "https://commons.wikimedia.org" }
      ]
    }
  },
  {
    id: 7,
    year: "2024-Presente",
    name: "Séptima Generación (S650)",
    image: "/images/mustang/7th-gen.jpg",
    description:
      "La generación actual combina tecnología moderna con el legado del Mustang. El Mustang GT 2024 cuenta con un motor Coyote 5.0L V8 de 480 caballos. Interior con pantalla digital de 13.2 pulgadas y sistema SYNC 4. El Mustang Dark Horse representa la máxima expresión de rendimiento sin ser un Shelby. Primer Mustang con transmisión manual de 6 velocidades estándar en el GT.",
    sources: {
      information: [
        { name: "Ford.com - 2024 Mustang", url: "https://www.ford.com/mustang" },
        { name: "Car and Driver - 2024 Mustang Review", url: "https://www.caranddriver.com" }
      ],
      images: [
        { name: "Pexels - Free Stock Photo", url: "https://pexels.com" }
      ]
    }
  },
];

export default mustangGenerations;
