# AGENTS.md — Mustang GT Timeline

## Resumen del proyecto

Sitio de una sola página construido con Next.js App Router que muestra las generaciones del Ford Mustang GT. Contenido estático con i18n del lado del cliente (ES/EN/PT). Sin autenticación, sin rutas API, sin base de datos.

---

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo (puerto 3000) |
| `npm run build` | Build de producción (ejecutar antes de hacer commit) |
| `npm run start` | Iniciar servidor de producción |
| `npm run lint` | ESLint (`eslint-config-next/core-web-vitals`) |

**No hay framework de testing configurado.** No hay archivos de test, ni scripts de test.

---

## Estilo de código — JavaScript

### Lenguaje y configuración
- **Solo JavaScript** — Sin TypeScript, sin `.ts`/`.tsx`
- **JSX** solo en archivos `.jsx`
- Alias de ruta `@/*` mapea a la raíz del proyecto

### Framework
- **Next.js App Router** — directorio `app/`, enrutamiento basado en archivos
- **React 19** — hooks, server components por defecto
- **`"use client"`** — Requerido al inicio de componentes que usen: `useState`, `useEffect`, `useContext`, `useRef`, event handlers, APIs del navegador, o `useI18n()`

### Imports (orden: externos → libs/datos internos → componentes hermanos → estilos)
```js
import Image from "next/image";
import { useState, useEffect } from "react";

import { useI18n } from "../lib/I18nProvider";
import mustangGenerations from "../data/mustang";
import Button from "./Button";

import "./globals.css";
```
- Sin archivos barrel (`index.js`)
- Solo imports relativos (no usar `@/`)

### Patrones de exportación
```js
// Componente — export por defecto, archivo PascalCase
export default function Button({ children, variant = "primary", ...rest }) { ... }

// Hook — export nombrado, camelCase
export function useI18n() { ... }

// Utilidad — export nombrado, camelCase
export async function loadTranslations(lang) { ... }

// Context — export nombrado + por defecto
export function useI18n() { ... }
export default function I18nProvider({ children }) { ... }
```

### Nombres
| Cosa | Convención | Ejemplo |
|------|-----------|---------|
| Componentes | PascalCase | `TimelineCard` |
| Archivos de componentes | PascalCase.jsx | `TimelineCard.jsx` |
| Hooks | camelCase, prefijo `use` | `useI18n` |
| Utilidades | camelCase | `loadTranslations`, `saveLang` |
| Claves de traducción | notación de puntos | `"header.nav.home"`, `"generation.3.name"` |
| CSS | Solo utilidades Tailwind | sin nombres de clase personalizados |

### Patrón del cuerpo del componente
```jsx
export default function TimelineCard({ id, year, name, image, description, index }) {
  const { t } = useI18n();
  const isEven = index % 2 === 0;   // derivar antes del return

  return (
    <div className={`flex ... ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
```
- Calcular valores derivados en el cuerpo de la función, no en el JSX
- Desestructurar props con valores por defecto
- Propagar `{...rest}` para enviar `data-*` o event handlers al DOM

### i18n — `t(key, fallback)`
```jsx
<h2>{t("timeline.title", "Línea de Tiempo")}</h2>
<h3>{t(`generation.${id}.name`, name)}</h3>
<nav aria-label={t("header.nav.aria", "Navegación principal")}>
<input placeholder={t("contact.name.placeholder", "Tu nombre")} />
```
- Siempre proporcionar el fallback en español como segundo argumento
- El fallback se muestra mientras cargan las traducciones y sirve como idioma por defecto
- Template literals para claves dinámicas: `` t(`generation.${id}.name`, name) ``

### Tailwind CSS
- **Sin CSS inline** (excepto el `dangerouslySetInnerHTML` del script bootstrap en layout.js)
- **Sin CSS modules, sin styled-components**
- Colores personalizados: `mustang-dark`, `mustang-dark-secondary`, `mustang-white`, `mustang-silver`, `mustang-gray`, `mustang-red`, `mustang-red-hover`, `mustang-blue`, `mustang-border`
- Responsive: `md:` (tablet), `lg:` (laptop), `xl:` (desktop)
- Transiciones: `transition-colors duration-300`, `transition-all duration-300`

### Manejo de errores
```js
// Mensajes con significado, en español para el usuario
try {
  const response = await fetch(`/data/translations/${lang}.json`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
} catch (err) {
  throw new Error(`Error al cargar traducciones: ${lang} — ${err.message}`);
}

// Catch silencioso para operaciones no críticas (localStorage en incógnito)
try { localStorage.setItem("lang", lang); } catch { }
```
- Toast de error en I18nProvider se auto-descarta después de 5s
- Fallos no críticos son silenciosos

### Accesibilidad
- HTML semántico: `<nav>`, `<section>`, `<article>`, `<footer>`, `<header>`
- `aria-label` en secciones y controles interactivos (mediante `t()`)
- `aria-expanded` en toggles, `aria-hidden` en SVGs decorativos
- Roles: `list`/`listitem`, `alert`, `banner`, `contentinfo`, `menubar`/`menuitem`, `listbox`/`option`
- Todas las imágenes usan `alt` (mediante `next/image`)

---

## Arquitectura

### Estructura de directorios
```
app/
  layout.js          # Raíz — I18nProvider + script bootstrap
  page.js            # Compone todas las secciones
  globals.css        # Directivas Tailwind + colores @theme personalizados
  components/        # 10 componentes (Header, Hero, Timeline, etc.)
  lib/               # i18n.js, I18nProvider.js
  data/              # mustang.js, translations/{es,en,pt}.json
public/
  data/translations/ # Copia del JSON para servirlo como estático
  images/mustang/    # 7 imágenes de generaciones
```

### Flujo de datos
```
layout.js ──<html lang>──> script bootstrap establece lang desde localStorage
  └── I18nProvider (cliente) ──loadTranslations()──> estado translations
        └── useI18n() ──{ lang, t, changeLanguage }──> todos los componentes
              └── t(key, fallback) renderiza el texto traducido
```

### Dependencias
- **next** 16.2.12, **react**/**react-dom** 19.2.4, **tailwindcss** 4, **@tailwindcss/postcss**, **eslint-config-next**

Sin otras dependencias.

---

## Flujo de trabajo Spec-Driven

1. **Define** — Especificación en `specs/<id>-<nombre>/spec.md`
2. **Revisa** — Valida contra `specs/constitution.md`
3. **Implementa** — Construye según la especificación aprobada
4. **Verifica** — `npm run build` debe pasar

Nunca hacer commit salvo que se pida explícitamente. Nunca hacer push sin instrucción explícita.

Leer `specs/constitution.md` al inicio de cada sesión.
