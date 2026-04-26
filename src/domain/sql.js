// Conceptos SQL - 23 items en 6 categorias

const sqlCode = (query) => ({
  php: query,
  python: query,
  javascript: query,
  typescript: query,
  java: query,
  csharp: query,
});

export const sql = [
  // ===================== 1. DDL - Estructura =====================
  {
    category: 1,
    categoryTitle: 'DDL - Estructura',
    id: 'q1',
    title: 'CREATE TABLE',
    description: 'Crear tabla productos con columnas basicas.',
    code: sqlCode(
`CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    cantidad INT DEFAULT 0
);`
    ),
    output: 'Tabla productos creada',
  },
  {
    category: 1,
    categoryTitle: 'DDL - Estructura',
    id: 'q2',
    title: 'ALTER TABLE',
    description: 'Agregar columna categoria a la tabla productos.',
    code: sqlCode(
`ALTER TABLE productos
ADD COLUMN categoria VARCHAR(50);`
    ),
    output: 'Columna categoria agregada',
  },
  {
    category: 1,
    categoryTitle: 'DDL - Estructura',
    id: 'q3',
    title: 'DROP TABLE',
    description: 'Eliminar la tabla productos.',
    code: sqlCode(
`DROP TABLE productos;`
    ),
    output: 'Tabla productos eliminada',
  },

  // ===================== 2. DML - Datos basicos =====================
  {
    category: 2,
    categoryTitle: 'DML - Datos basicos',
    id: 'q4',
    title: 'INSERT',
    description: 'Insertar 3 filas en la tabla productos.',
    code: sqlCode(
`INSERT INTO productos (nombre, precio, cantidad)
VALUES
    ('Laptop', 999.00, 10),
    ('Mouse', 25.00, 50),
    ('Teclado', 45.00, 30);`
    ),
    output: '3 filas insertadas',
  },
  {
    category: 2,
    categoryTitle: 'DML - Datos basicos',
    id: 'q5',
    title: 'SELECT',
    description: 'Seleccionar todos los productos.',
    code: sqlCode(
`SELECT id, nombre, precio
FROM productos;`
    ),
    output: 'id | nombre | precio\n1 | Laptop | 999\n2 | Mouse | 25\n3 | Teclado | 45',
  },
  {
    category: 2,
    categoryTitle: 'DML - Datos basicos',
    id: 'q6',
    title: 'UPDATE',
    description: 'Actualizar el precio del Mouse a 30.',
    code: sqlCode(
`UPDATE productos
SET precio = 30.00
WHERE nombre = 'Mouse';`
    ),
    output: '1 fila actualizada',
  },
  {
    category: 2,
    categoryTitle: 'DML - Datos basicos',
    id: 'q7',
    title: 'DELETE',
    description: 'Eliminar productos con precio menor a 30.',
    code: sqlCode(
`DELETE FROM productos
WHERE precio < 30;`
    ),
    output: '1 fila eliminada',
  },

  // ===================== 3. Filtros y orden =====================
  {
    category: 3,
    categoryTitle: 'Filtros y orden',
    id: 'q8',
    title: 'WHERE',
    description: 'Seleccionar productos con precio mayor a 50.',
    code: sqlCode(
`SELECT nombre, precio
FROM productos
WHERE precio > 50;`
    ),
    output: 'Laptop | 999',
  },
  {
    category: 3,
    categoryTitle: 'Filtros y orden',
    id: 'q9',
    title: 'ORDER BY',
    description: 'Seleccionar todos ordenados por precio descendente.',
    code: sqlCode(
`SELECT nombre, precio
FROM productos
ORDER BY precio DESC;`
    ),
    output: 'Laptop 999\nTeclado 45\nMouse 25',
  },
  {
    category: 3,
    categoryTitle: 'Filtros y orden',
    id: 'q10',
    title: 'LIMIT',
    description: 'Seleccionar los 2 productos mas caros.',
    code: sqlCode(
`SELECT nombre, precio
FROM productos
ORDER BY precio DESC
LIMIT 2;`
    ),
    output: 'Laptop 999\nTeclado 45',
  },
  {
    category: 3,
    categoryTitle: 'Filtros y orden',
    id: 'q11',
    title: 'LIKE',
    description: 'Buscar productos cuyo nombre empiece con M.',
    code: sqlCode(
`SELECT nombre, precio
FROM productos
WHERE nombre LIKE 'M%';`
    ),
    output: 'Mouse | 25',
  },

  // ===================== 4. Funciones agregadas =====================
  {
    category: 4,
    categoryTitle: 'Funciones agregadas',
    id: 'q12',
    title: 'COUNT',
    description: 'Contar todos los productos.',
    code: sqlCode(
`SELECT COUNT(*) AS total
FROM productos;`
    ),
    output: 'total: 3',
  },
  {
    category: 4,
    categoryTitle: 'Funciones agregadas',
    id: 'q13',
    title: 'SUM y AVG',
    description: 'Calcular suma y promedio de precios.',
    code: sqlCode(
`SELECT
    SUM(precio) AS suma,
    AVG(precio) AS promedio
FROM productos;`
    ),
    output: 'suma: 1069\npromedio: 356.33',
  },
  {
    category: 4,
    categoryTitle: 'Funciones agregadas',
    id: 'q14',
    title: 'MIN y MAX',
    description: 'Obtener precio minimo y maximo.',
    code: sqlCode(
`SELECT
    MIN(precio) AS min_precio,
    MAX(precio) AS max_precio
FROM productos;`
    ),
    output: 'min: 25\nmax: 999',
  },
  {
    category: 4,
    categoryTitle: 'Funciones agregadas',
    id: 'q15',
    title: 'GROUP BY',
    description: 'Agrupar y contar productos por categoria.',
    code: sqlCode(
`SELECT categoria, COUNT(*) AS total
FROM productos
GROUP BY categoria;`
    ),
    output: 'electronicos: 2\nperifericos: 1',
  },

  // ===================== 5. JOINs =====================
  {
    category: 5,
    categoryTitle: 'JOINs',
    id: 'q16',
    title: 'INNER JOIN',
    description: 'Unir productos con categorias donde haya coincidencia.',
    code: sqlCode(
`SELECT p.nombre, c.nombre AS categoria
FROM productos p
INNER JOIN categorias c
    ON p.categoria_id = c.id;`
    ),
    output: 'Laptop | Electronicos\nMouse | Perifericos',
  },
  {
    category: 5,
    categoryTitle: 'JOINs',
    id: 'q17',
    title: 'LEFT JOIN',
    description: 'Todos los productos aunque no tengan categoria.',
    code: sqlCode(
`SELECT p.nombre, c.nombre AS categoria
FROM productos p
LEFT JOIN categorias c
    ON p.categoria_id = c.id;`
    ),
    output: 'Laptop | Electronicos\nMouse | Perifericos\nCable | NULL',
  },
  {
    category: 5,
    categoryTitle: 'JOINs',
    id: 'q18',
    title: 'RIGHT JOIN',
    description: 'Todas las categorias aunque no tengan productos.',
    code: sqlCode(
`SELECT p.nombre, c.nombre AS categoria
FROM productos p
RIGHT JOIN categorias c
    ON p.categoria_id = c.id;`
    ),
    output: 'Laptop | Electronicos\nNULL | Ropa',
  },
  {
    category: 5,
    categoryTitle: 'JOINs',
    id: 'q19',
    title: 'Subquery',
    description: 'Productos con precio mayor al promedio.',
    code: sqlCode(
`SELECT nombre, precio
FROM productos
WHERE precio > (
    SELECT AVG(precio)
    FROM productos
);`
    ),
    output: 'Laptop | 999',
  },

  // ===================== 6. Avanzado =====================
  {
    category: 6,
    categoryTitle: 'Avanzado',
    id: 'q20',
    title: 'HAVING',
    description: 'Categorias con mas de un producto.',
    code: sqlCode(
`SELECT categoria, COUNT(*) AS total
FROM productos
GROUP BY categoria
HAVING COUNT(*) > 1;`
    ),
    output: 'electronicos: 2',
  },
  {
    category: 6,
    categoryTitle: 'Avanzado',
    id: 'q21',
    title: 'DISTINCT',
    description: 'Obtener categorias unicas sin repetir.',
    code: sqlCode(
`SELECT DISTINCT categoria
FROM productos;`
    ),
    output: 'electronicos\nperifericos',
  },
  {
    category: 6,
    categoryTitle: 'Avanzado',
    id: 'q22',
    title: 'IN y BETWEEN',
    description: 'Filtrar por rango de precio y lista de IDs.',
    code: sqlCode(
`SELECT nombre, precio
FROM productos
WHERE precio BETWEEN 20 AND 50;

SELECT nombre, precio
FROM productos
WHERE id IN (1, 3);`
    ),
    output: 'Mouse 25\nTeclado 45',
  },
  {
    category: 6,
    categoryTitle: 'Avanzado',
    id: 'q23',
    title: 'CREATE INDEX y TRANSACTION',
    description: 'Crear indice y usar transaccion.',
    code: sqlCode(
`CREATE INDEX idx_precio
ON productos (precio);

BEGIN TRANSACTION;
UPDATE productos SET precio = 999 WHERE id = 1;
UPDATE productos SET cantidad = 5 WHERE id = 1;
COMMIT;`
    ),
    output: 'indice creado\ntransaccion completada',
  },
];
