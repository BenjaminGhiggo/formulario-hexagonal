# Formulario de Arquitectura Hexagonal

Proyecto educativo en React + Vite que muestra 12 conceptos de arquitectura hexagonal
con ejemplos en 6 lenguajes (PHP, Python, JavaScript, TypeScript, Java, C#).

## Reglas estrictas

- **Maximo 200 lineas por archivo.** Si un archivo se acerca al limite, refactorizar
  extrayendo modulos. Sin excepciones.
- **Clean Code obligatorio:** nombres descriptivos, funciones cortas (<20 lineas),
  sin comentarios obvios, sin numeros magicos.
- **DDD (Domain-Driven Design):** separar dominio, aplicacion e infraestructura.

## Estructura del proyecto

```
src/
  domain/       → datos puros, entidades, value objects (sections, langs)
  app/          → logica de aplicacion, hooks, estado
  infra/        → componentes React, UI, adaptadores (highlight, layout)
```

## Convenciones

- Un componente por archivo
- Datos (sections.js) separados de presentacion (App.jsx)
- No instalar dependencias externas para syntax highlighting (se usa modulo propio)
- Al agregar secciones nuevas, incluir los 6 lenguajes obligatoriamente
- Cada seccion: `{ num, title, formula, meaning, code: {6 langs}, output }`

## Stack

- React 18 + Vite 5
- Sin TypeScript (JSX puro)
- Sin frameworks CSS (CSS vanilla)

## Comandos

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de produccion
