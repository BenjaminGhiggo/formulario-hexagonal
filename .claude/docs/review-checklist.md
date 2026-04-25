# Checklist de revision de codigo

## Antes de aprobar cualquier cambio verificar:

### Clean Code
- [ ] Nombres descriptivos (no abreviaturas crípticas)
- [ ] Funciones de una sola responsabilidad
- [ ] Funciones menores a 20 lineas
- [ ] Sin numeros magicos
- [ ] Sin codigo duplicado
- [ ] Sin comentarios que repitan lo que el codigo ya dice

### Limites
- [ ] Ningun archivo excede 200 lineas
- [ ] Maximo 3 parametros por funcion
- [ ] Maximo 2 niveles de anidamiento

### DDD
- [ ] Los datos del dominio no importan React
- [ ] Los componentes UI no contienen logica de negocio
- [ ] Nuevas secciones/lenguajes se agregan en el dominio (sections.js)

### Integridad
- [ ] Las 12 secciones tienen los 6 lenguajes
- [ ] El codigo de ejemplo es funcional (no pseudocodigo)
- [ ] El output coincide con la ejecucion real del codigo
- [ ] `npm run build` pasa sin errores
