Valida que el proyecto cumple todas las reglas.

## Checklist

1. **Limite de lineas:** ningun archivo en src/ tiene mas de 200 lineas
   - Ejecutar: `wc -l src/*.jsx src/*.js src/*.css`
2. **Build:** el proyecto compila sin errores
   - Ejecutar: `npm run build`
3. **Secciones completas:** cada seccion tiene los 6 lenguajes
   - Verificar que code tenga: php, python, javascript, typescript, java, csharp
4. **Clean Code:** sin funciones mayores a 20 lineas
5. **Sin dependencias innecesarias:** no se han agregado paquetes de highlighting

Reportar resultado como tabla: regla | estado (OK/FALLO) | detalle
