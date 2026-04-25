# Formato de seccion

Cada seccion en `sections.js` sigue esta estructura exacta:

```javascript
{
  num: 1,                          // entero unico incremental
  title: 'NOMBRE DEL CONCEPTO',   // mayusculas, breve
  formula: 'A := ...',            // notacion algebraica
  meaning: 'A = descripcion...',  // significado de cada variable
  code: {
    php:        `...`,             // codigo PHP funcional
    python:     `...`,             // codigo Python funcional
    javascript: `...`,             // codigo JavaScript funcional
    typescript: `...`,             // codigo TypeScript funcional
    java:       `...`,             // codigo Java funcional
    csharp:     `...`,             // codigo C# funcional
  },
  output: 'resultado esperado',   // puede tener \n para multilinea
}
```

## Reglas del contenido

- La **formula** usa notacion algebraica: `:=`, `->`, `forall`, `|`
- El **meaning** explica cada letra/variable de la formula
- El **code** debe ser ejecutable (no pseudocodigo)
- El **output** debe coincidir con lo que el codigo realmente produce
- Todos los lenguajes deben producir la misma logica equivalente
