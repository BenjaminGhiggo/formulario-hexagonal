# Convenciones de estilo — DDD + Clean Code

## Limite de lineas

- **200 lineas maximo por archivo**
- Si un archivo crece mas alla de 150 lineas, evaluar si se puede dividir
- Funciones: maximo 20 lineas
- Maximo 3 parametros por funcion

## Clean Code

### Nombres
- Nombres que revelen intencion: `highlightCode()` no `hl()`
- Componentes en PascalCase: `Section`, `Sidebar`, `LangSelector`
- Funciones y variables en camelCase: `handleNavigate`, `activeId`
- Constantes en UPPER_SNAKE: `LANGS`, `LANG_LABELS`
- Archivos de componentes en PascalCase o camelCase con .jsx

### Funciones
- Una funcion hace UNA cosa
- Sin efectos secundarios ocultos
- Sin numeros magicos (usar constantes con nombre)
- Retorno temprano sobre anidamiento profundo

### Componentes React
- Props destructuradas en la firma: `function Section({ data, lang })`
- Un componente por archivo cuando exceda 50 lineas
- Hooks al inicio del componente, sin condicionales

## DDD (Domain-Driven Design)

### Capas
```
domain/   → NO depende de nada externo
  - Entidades (con identidad): sections con num unico
  - Value Objects (inmutables): formula, meaning, output
  - Interfaces de repositorio (puertos)

app/      → Depende solo de domain/
  - Casos de uso, logica de orquestacion
  - Hooks de estado

infra/    → Implementa los puertos del dominio
  - Componentes React (UI)
  - Highlight engine (adaptador)
  - Layout, sidebar (infraestructura visual)
```

### Reglas DDD
- El dominio NO importa React, CSS ni librerias externas
- Los datos (sections.js) son parte del dominio
- La UI es infraestructura que consume el dominio
- Nuevos lenguajes o secciones se agregan en el dominio, no en la UI

## CSS

- BEM-like con clases planas: `.section-header`, `.lang-btn`
- Sin !important
- Variables CSS para colores repetidos
- Mobile-first con media queries
