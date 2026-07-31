---

description: "Lista de tareas para la función de i18n multilingüe"
---

# Tareas: multi-language-i18n

**Entrada**: Documentos de diseño desde `specs/001-multi-language-i18n/`
**Prerrequisitos**: spec.md

## Formato: `[ID] [P?] [Story] Descripción`

- **[P]**: Puede ejecutarse en paralelo (archivos diferentes, sin dependencias)
- **[Story]**: A qué historia de usuario pertenece esta tarea (ej. US1, US2, US3)
- Incluir rutas de archivo exactas en las descripciones

---

## Fase 1: Configuración

**Propósito**: Crear archivos de traducción y estructura del proyecto para i18n

- [X] T001 Crear directorio `app/data/translations/` y estructura base
- [X] T002 [P] Crear archivo de traducción español en `app/data/translations/es.json`
- [X] T003 [P] Crear archivo de traducción inglés en `app/data/translations/en.json`
- [X] T004 [P] Crear archivo de traducción portugués en `app/data/translations/pt.json`

---

## Fase 2: Fundacional (Sistema i18n Principal)

**Propósito**: Motor i18n principal que DEBE estar completo antes de implementar cualquier historia de usuario

**⚠️ CRÍTICO**: Todo el trabajo de historias de usuario depende de esta fase

- [X] T005 Crear módulo i18n principal en `app/lib/i18n.js` con carga Fetch API y caché
- [X] T006 Crear envoltorio de contexto I18nProvider en `app/lib/I18nProvider.js` con persistencia localStorage, función `t(key, fallback)` e idioma predeterminado (es)
- [X] T007 Agregar bloque `<script>` de inicialización i18n en `app/layout.js` para arrancar desde localStorage al cargar la página

**Punto de control**: Motor i18n listo - cambiar idioma sin recargar página es posible

---

## Fase 3: Historia de Usuario 1 - Cambiar idioma del sitio (Prioridad: P1) 🎯 MVP

**Objetivo**: El usuario puede seleccionar un idioma desde el header y ver todos los textos actualizados al instante. La preferencia persiste entre sesiones.

**Prueba independiente**: Seleccionar "English" del dropdown del header, verificar que todos los textos visibles cambien a inglés. Recargar página, verificar que inglés sigue seleccionado.

- [X] T008 [US1] Agregar UI de selector de idioma en `app/components/Header.jsx` con opciones ES/EN/PT
- [X] T009 [US1] Conectar selector de idioma al contexto i18n en `app/components/Header.jsx` para activar traducción al seleccionar
- [X] T010 [US1] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/Header.jsx`
- [X] T011 [US1] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/Hero.jsx`

**Punto de control**: MVP completo - usuario puede cambiar idioma desde el header y ver textos del Header/Hero actualizados

---

## Fase 4: Historia de Usuario 2 - Traducción completa de todas las secciones (Prioridad: P1)

**Objetivo**: Todas las secciones del sitio se traducen al cambiar de idioma. Cobertura del 100% de textos visibles.

**Prueba independiente**: Cambiar a inglés, verificar que cada sección (Timeline, About, Sources, Contact, Footer) muestre texto traducido. Cambiar a portugués, repetir.

- [X] T012 [US2] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/Timeline.jsx`
- [X] T013 [US2] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/TimelineCard.jsx`
- [X] T014 [US2] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/About.jsx`
- [X] T015 [US2] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/Sources.jsx`
- [X] T016 [US2] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/Contact.jsx`
- [X] T017 [US2] Reemplazar textos estáticos con `t()` de contexto i18n en `app/components/Footer.jsx`
- [X] T018 [US2] Button.jsx pasa `children` al `<a>`/`<button>` renderizado, compatible con `t()` desde el padre

**Punto de control**: Todas las secciones totalmente traducibles - cobertura 100% de textos

---

## Fase 5: Historia de Usuario 3 - Manejo de errores de carga (Prioridad: P3)

**Objetivo**: Si falla la carga del archivo de traducción, el sitio mantiene el idioma actual y muestra un mensaje de error no intrusivo.

**Prueba independiente**: Bloquear solicitudes de red a archivos de traducción, intentar cambiar idioma, verificar que se mantiene el idioma actual y aparece notificación de error.

- [X] T019 [US3] Agregar manejo de errores en `app/lib/i18n.js` para fallos de Fetch API con fallback al idioma actual
- [X] T020 [US3] Agregar componente de notificación/toast de error en `app/lib/I18nProvider.js` para traducciones fallidas
- [X] T021 [US3] Manejar indisponibilidad de localStorage correctamente (modo incógnito) en `app/lib/I18nProvider.js`

**Punto de control**: Manejo de errores completo - el sitio se degrada correctamente en fallos de traducción

---

## Fase 6: Pulido y aspectos transversales

**Propósito**: Mejoras finales, accesibilidad y verificación

- [X] T022 [P] Verificar que todas las claves de traducción usadas en `t()` coinciden con claves en los tres archivos JSON de traducción
- [X] T023 [P] Agregar navegación por teclado al selector de idioma (flechas, Enter, Escape) en `app/components/Header.jsx`
- [X] T024 [P] Agregar `aria-label` al selector de idioma para lectores de pantalla en `app/components/Header.jsx`
- [X] T025 Verificar que la compilación sea exitosa con `npm run build`

---

## Dependencias y orden de ejecución

### Dependencias de fase

- **Setup (Fase 1)**: Sin dependencias - puede comenzar inmediatamente
- **Fundacional (Fase 2)**: Depende de Setup - BLOQUEA todas las historias de usuario
- **US1 (Fase 3)**: Depende de Fundacional - el i18n principal debe funcionar primero
- **US2 (Fase 4)**: Depende de US1 - todas las secciones necesitan el selector de idioma funcional
- **US3 (Fase 5)**: Depende de US1 - manejo de errores alrededor del cambio de idioma
- **Pulido (Fase 6)**: Depende de todas las historias de usuario completas

### Dependencias de historias de usuario

- **Historia de Usuario 1 (P1)**: MVP - puede comenzar después de Fundacional, sin dependencias de otras historias
- **Historia de Usuario 2 (P1)**: Depende de US1 (necesita el selector de idioma funcionando)
- **Historia de Usuario 3 (P3)**: Depende de US1 (necesita el selector de idioma funcionando)

### Oportunidades en paralelo

- T002, T003, T004 (archivos de traducción) pueden crearse en paralelo
- T022, T023, T024 pueden ejecutarse en paralelo durante la fase de Pulido
- Todas las tareas de componentes en Fase 4 (T012-T018) pueden ejecutarse en paralelo porque modifican archivos diferentes

---

## Ejemplo en paralelo: Fase 4 (Todos los componentes)

```bash
# Ejecutar todas las tareas de traducción de componentes en paralelo:
Tarea: "Agregar data-i18n a Timeline.jsx"
Tarea: "Agregar data-i18n a TimelineCard.jsx"
Tarea: "Agregar data-i18n a About.jsx"
Tarea: "Agregar data-i18n a Sources.jsx"
Tarea: "Agregar data-i18n a Contact.jsx"
Tarea: "Agregar data-i18n a Footer.jsx"
Tarea: "Agregar data-i18n a Button.jsx"
```

---

## Estrategia de implementación

### MVP Primero (Solo US1)

1. Completar Fase 1: Configuración (archivos de traducción)
2. Completar Fase 2: Fundacional (motor i18n)
3. Completar Fase 3: US1 (traducciones Header + Hero)
4. **DETENER y VALIDAR**: El cambio de idioma funciona desde el header
5. Desplegar/demo si está listo

### Entrega incremental

1. Setup + Fundacional → motor i18n listo
2. Agregar US1 → Selector de idioma en header → Desplegar/Demo (MVP)
3. Agregar US2 → Traducción completa del sitio → Desplegar/Demo
4. Agregar US3 → Robustez de manejo de errores → Desplegar/Demo

---

## Notas

- [P] tareas = archivos diferentes, sin dependencias
- La etiqueta [Story] asigna la tarea a una historia de usuario específica para trazabilidad
- Cada historia de usuario debe ser completable y comprobable de forma independiente
- Verificar compilación después de cada fase
- Confirmar (commit) después de cada tarea o grupo lógico
- Detenerse en cualquier punto de control para validar
