# Plan técnico: línea de tiempo interactiva del Ford Mustang GT

## Fase 1: configuración del proyecto

### 1.1 Inicializar el proyecto de Next.js

```bash
npx create-next-app@latest . --js --app --tailwind --eslint --no-src-dir --import-alias "@/*"
```

**Indicadores:**
- `--js`: solo JavaScript (sin TypeScript)
- `--app`: App Router
- `--tailwind`: Tailwind CSS
- `--no-src-dir`: usar `/app` directamente

### 1.2 Estructura de directorios

```
/
├── app/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Timeline.jsx
│   │   ├── TimelineCard.jsx
│   │   ├── Button.jsx
│   │   └── SectionTitle.jsx
│   ├── data/
│   │   └── mustang.js
│   ├── layout.js
│   └── page.js
├── public/
│   └── images/
│       └── mustang/
│           ├── hero.jpg
│           ├── 1st-gen.jpg
│           ├── 2nd-gen.jpg
│           ├── 3rd-gen.jpg
│           ├── 4th-gen.jpg
│           ├── 5th-gen.jpg
│           ├── 6th-gen.jpg
│           └── 7th-gen.jpg
├── specs/
│   ├── constitution.md
│   ├── specification.md
│   └── plan.md
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Fase 2: arquitectura de componentes

### 2.1 Jerarquía de componentes

```
page.js
├── Header (fijo)
├── Hero
│   ├── SectionTitle
│   └── Button
└── Timeline
    └── TimelineCard (×7)
        └── Button
```

### 2.2 Especificaciones de los componentes

#### Header.jsx

```jsx
// Props: ninguno (navegación estática)
// Comportamiento: posición fija, enlaces con desplazamiento suave
// Accesibilidad: nav semántico, etiquetas aria
```

**Responsabilidades:**
- Barra de navegación fija en la parte superior
- Logo o nombre de la marca
- Enlaces de navegación (Inicio, Línea de tiempo, Acerca de)
- Desplazamiento suave hacia las secciones

#### Hero.jsx

```jsx
// Props: title, description, buttonText, imageSrc
// Comportamiento: altura completa de la ventana, botón CTA
// Accesibilidad: texto alternativo, estructura semántica
```

**Responsabilidades:**
- Sección hero de pantalla completa
- Imagen de fondo con superposición
- Título y descripción
- Botón de llamada a la acción con desplazamiento suave

#### Timeline.jsx

```jsx
// Props: generations (arreglo desde los datos)
// Comportamiento: renderizar la lista de TimelineCard
// Accesibilidad: lista semántica, encabezado adecuado
```

**Responsabilidades:**
- Renderizar la colección de componentes TimelineCard
- Pasar los datos a cada tarjeta
- Mantener el orden cronológico

#### TimelineCard.jsx

```jsx
// Props: year, name, image, description
// Comportamiento: mostrar la información de una generación
// Accesibilidad: texto alternativo, marcado semántico
```

**Responsabilidades:**
- Mostrar el año de la generación
- Mostrar el nombre del modelo
- Mostrar la imagen
- Mostrar la descripción histórica
- Diseño responsivo (apilado en móvil, lateral en escritorio)

#### Button.jsx

```jsx
// Props: children, onClick, variant, href
// Comportamiento: componente reutilizable de botón
// Accesibilidad: estados de enfoque, etiquetas aria
```

**Responsabilidades:**
- Componente reutilizable de botón
- Soportar distintas variantes (primaria, secundaria)
- Soportar href para navegación
- Estados hover y transiciones

#### SectionTitle.jsx

```jsx
// Props: title, subtitle
// Comportamiento: mostrar el encabezado de sección
// Accesibilidad: niveles semánticos de encabezado
```

**Responsabilidades:**
- Mostrar el título de la sección
- Subtítulo opcional
- Tipografía consistente

---

## Fase 3: flujo de datos

### 3.1 Estructura de datos

```javascript
// app/data/mustang.js
const mustangGenerations = [
  {
    id: 1,
    year: "1964-1973",
    name: "Primera generación",
    image: "/images/mustang/1st-gen.jpg",
    description: "..."
  },
  // ... más generaciones
];

export default mustangGenerations;
```

### 3.2 Patrón de flujo de datos

```
data/mustang.js
    ↓ (import)
page.js
    ↓ (props)
Timeline.jsx
    ↓ (props)
TimelineCard.jsx
```

**Principio clave:** los datos fluyen de arriba hacia abajo. Los componentes son funciones puras de sus props.

---

## Fase 4: estrategia de estilos

### 4.1 Configuración de Tailwind

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mustang': {
          'dark': '#1a1a1a',
          'blue': '#003478',
          'silver': '#c0c0c0',
          'white': '#ffffff',
        }
      },
      fontFamily: {
        'display': ['var(--font-display)'],
        'body': ['var(--font-body)'],
      }
    },
  },
  plugins: [],
}
```

### 4.2 Puntos de interrupción responsivos

| Punto de interrupción | Prefijo de Tailwind | Anchura |
|------------|-----------------|-------|
| Móvil | (predeterminado) | < 768px |
| Tableta | `md:` | 768px+ |
| Portátil | `lg:` | 1024px+ |
| Escritorio | `xl:` | 1280px+ |

### 4.3 Tokens de diseño (clases de Tailwind)

**Colores:**
- Fondo: `bg-mustang-dark`
- Primario: `bg-mustang-blue`
- Texto: `text-white`, `text-mustang-silver`
- Acentos: `hover:bg-mustang-blue/80`

**Tipografía:**
- Display: `font-display text-4xl md:text-6xl font-bold`
- Cuerpo: `font-body text-lg text-mustang-silver`

**Espaciado:**
- Relleno de sección: `py-16 md:py-16`
- Contenedor: `max-w-7xl mx-auto px-4`

---

## Fase 5: orden de implementación

### Paso 1: inicialización del proyecto
- [ ] Crear el proyecto de Next.js
- [ ] Verificar que Tailwind esté configurado
- [ ] Preparar la estructura de directorios

### Paso 2: capa de datos
- [ ] Crear `app/data/mustang.js`
- [ ] Agregar las 7 generaciones con datos
- [ ] Verificar que la exportación funcione correctamente

### Paso 3: componentes atómicos
- [ ] Construir `Button.jsx`
- [ ] Construir `SectionTitle.jsx`
- [ ] Probar los componentes de forma aislada

### Paso 4: componentes de funciones
- [ ] Construir `Header.jsx`
- [ ] Construir `Hero.jsx`
- [ ] Construir `TimelineCard.jsx`
- [ ] Construir `Timeline.jsx`

### Paso 5: ensamblaje de la página
- [ ] Importar todos los componentes en `page.js`
- [ ] Pasar los datos a Timeline
- [ ] Verificar que el diseño se renderice correctamente

### Paso 6: estilo y pulido
- [ ] Aplicar clases de Tailwind
- [ ] Probar los puntos de interrupción responsivos
- [ ] Agregar estados hover y transiciones

### Paso 7: accesibilidad y rendimiento
- [ ] Agregar HTML semántico
- [ ] Agregar texto alternativo a las imágenes
- [ ] Probar la navegación por teclado
- [ ] Optimizar las imágenes con next/image

---

## Fase 6: lista de validación

### Cumplimiento de la constitución
- [ ] JavaScript únicamente (sin TypeScript)
- [ ] Tailwind CSS únicamente (sin CSS en línea)
- [ ] App Router de Next.js
- [ ] Los componentes son pequeños y reutilizables
- [ ] Los datos están separados de los componentes
- [ ] El código es legible y mantenible

### Cumplimiento de la especificación
- [ ] Sección hero con CTA
- [ ] Línea de tiempo con 7 generaciones
- [ ] Se implementaron los 6 componentes
- [ ] Navegación con desplazamiento suave
- [ ] Diseño responsivo en todos los puntos de interrupción
- [ ] Requisitos de accesibilidad cumplidos

### Rendimiento
- [ ] Imágenes optimizadas con next/image
- [ ] Carga diferida del contenido por debajo de la pantalla
- [ ] Sin re-renderizados innecesarios
- [ ] Código limpio y listo para producción

---

*Última actualización: 2026-07-27*