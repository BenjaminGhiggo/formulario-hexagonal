# Arquitectura del proyecto

## Proposito

Aplicacion educativa que enseña arquitectura hexagonal mostrando
12 conceptos con formulas algebraicas y codigo en 6 lenguajes.

## Capas (DDD)

```
┌─────────────────────────────────┐
│          INFRAESTRUCTURA        │
│  App.jsx, Sidebar, Section,    │
│  HighlightedCode, CSS          │
├─────────────────────────────────┤
│          APLICACION             │
│  Estado (useState), navegacion, │
│  IntersectionObserver           │
├─────────────────────────────────┤
│            DOMINIO              │
│  sections.js (datos puros),     │
│  LANGS, LANG_LABELS             │
└─────────────────────────────────┘
```

## Flujo de datos

1. `sections.js` exporta los datos (dominio)
2. `App.jsx` gestiona estado: seccion activa, lenguaje, sidebar (aplicacion)
3. `Section` y `Sidebar` renderizan los datos (infraestructura)
4. `highlight.jsx` tokeniza y colorea codigo (adaptador)

## Decisiones de diseno

- **Sin dependencias de highlighting** (Prism, Highlight.js): modulo propio
  con regex por lenguaje. Mas ligero y controlable.
- **Datos como objetos planos**: sections.js es un array de objetos,
  no clases. Simplicidad sobre ceremonia.
- **CSS vanilla**: sin Tailwind ni CSS-in-JS. El proyecto es educativo,
  no necesita complejidad de tooling.
