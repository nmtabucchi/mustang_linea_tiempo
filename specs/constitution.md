# Constitution: Mustang - Linea de Tiempo

## Rol del equipo

Actuar como un equipo de desarrollo Frontend Senior especializado en aplicaciones web modernas utilizando Next.js. El equipo aplica buenas prácticas de arquitectura, accesibilidad, rendimiento y mantenibilidad.

El objetivo es construir una aplicación profesional siguiendo un enfoque **Spec-Driven Development (SDD)**, donde las decisiones técnicas estén documentadas y validadas antes de implementar funcionalidades.

---

## Principios técnicos

### Framework principal

- Utilizar Next.js con App Router.
- Utilizar React siguiendo patrones recomendados oficialmente.
- Utilizar JavaScript exclusivamente.
- No utilizar TypeScript.
- Consultar Context7 para validar documentación y buenas prácticas actualizadas.

### Estilos y UI

- Utilizar Tailwind CSS como único sistema de estilos.
- No utilizar CSS inline salvo casos excepcionales.
- Diseñar componentes reutilizables.
- Mantener consistencia visual en toda la aplicación.
- Priorizar una interfaz moderna, minimalista y profesional.

**Referencia visual principal:**
"Interactive Portfolio Website: Figma UI Design Tutorial for Beginners | Step-by-Step Guide"

El diseño debe respetar:
- Jerarquía visual
- Espaciado
- Tipografía
- Composición
- Uso de colores

Los cambios respecto al diseño original solo deben realizarse por:
- Responsividad
- Accesibilidad
- Mejoras de experiencia de usuario

---

## Arquitectura del proyecto

Mantener una estructura escalable:

```
/app
  /components
  /public
  /styles
  /lib
  /data
```

Separar claramente:
- Componentes visuales
- Datos estáticos
- Lógica de negocio
- Configuración

---

## Componentización

Crear componentes pequeños, reutilizables y enfocados en una única responsabilidad.

**Ejemplos:**
- Header
- Hero
- Timeline
- TimelineCard
- Button
- SectionTitle

Evitar componentes monolíticos.

---

## Calidad del código

Todo código debe cumplir:
- Fácil lectura
- Bajo acoplamiento
- Sin duplicación innecesaria
- Nombres descriptivos
- Comentarios únicamente cuando agreguen contexto
- Código preparado para futuras extensiones

---

## Responsive Design

La aplicación debe funcionar correctamente en:
- Mobile
- Tablet
- Laptop
- Desktop

Utilizar únicamente Tailwind CSS para responsive design.

---

## Accesibilidad

Cumplir buenas prácticas:
- HTML semántico
- Navegación clara
- Contraste adecuado
- Imágenes con atributo alt

---

## Performance

Optimizar para producción:
- Uso correcto de next/image
- Lazy loading cuando corresponda
- Evitar renderizados innecesarios
- Componentes eficientes
- Código optimizado

---

## Interacciones

Implementar solamente interacciones necesarias:
- Hover states
- Transiciones suaves
- Smooth scroll
- Navbar fija

Evitar animaciones excesivas.

---

## Restricciones

No utilizar:
- TypeScript
- Librerías innecesarias
- Frameworks CSS adicionales
- Animaciones complejas sin justificación

---

## Objetivo final

Construir aplicaciones web profesionales, escalables y mantenibles siguiendo las mejores prácticas actuales de Next.js y React.

---

## Spec-Driven Development Workflow

1. **Define** - Documentar la especificación antes de la implementación
2. **Review** - Validar la especificación contra estos principios
3. **Implement** - Construir siguiendo la especificación validada
4. **Verify** - Asegurar que la implementación cumple con la especificación

---

*Last updated: 2026-07-27*