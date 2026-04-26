// Fundamentos de programacion - Parte 1 (6 categorias, 24 items)

export const fundamentos1 = [
  // ============= 1. Tipos de datos =============
  {
    category: 1,
    categoryTitle: 'Tipos de datos',
    id: '1.1',
    title: 'Enteros y decimales',
    code: {
      php: `<?php
$entero = 10;
$decimal = 3.14;
echo $entero . "\\n";
echo $decimal;`,
      python: `entero: int = 10
decimal: float = 3.14
print(entero)
print(decimal)`,
      javascript: `const entero = 10;
const decimal = 3.14;
console.log(entero);
console.log(decimal);`,
      typescript: `const entero: number = 10;
const decimal: number = 3.14;
console.log(entero);
console.log(decimal);`,
      java: `int entero = 10;
double decimal = 3.14;
System.out.println(entero);
System.out.println(decimal);`,
      csharp: `int entero = 10;
double decimal = 3.14;
Console.WriteLine(entero);
Console.WriteLine(decimal);`,
    },
    output: '10\n3.14',
  },
  {
    category: 1,
    categoryTitle: 'Tipos de datos',
    id: '1.2',
    title: 'Strings',
    code: {
      php: `<?php
$nombre = "Hola";
$apellido = "Mundo";
echo $nombre . " " . $apellido;`,
      python: `nombre = "Hola"
apellido = "Mundo"
print(nombre + " " + apellido)`,
      javascript: `const nombre = "Hola";
const apellido = "Mundo";
console.log(nombre + " " + apellido);`,
      typescript: `const nombre: string = "Hola";
const apellido: string = "Mundo";
console.log(nombre + " " + apellido);`,
      java: `String nombre = "Hola";
String apellido = "Mundo";
System.out.println(nombre + " " + apellido);`,
      csharp: `string nombre = "Hola";
string apellido = "Mundo";
Console.WriteLine(nombre + " " + apellido);`,
    },
    output: 'Hola Mundo',
  },
  {
    category: 1,
    categoryTitle: 'Tipos de datos',
    id: '1.3',
    title: 'Booleanos',
    code: {
      php: `<?php
$activo = true;
$eliminado = false;
echo $activo ? "true" : "false";
echo "\\n";
echo $eliminado ? "true" : "false";`,
      python: `activo = True
eliminado = False
print(activo)
print(eliminado)`,
      javascript: `const activo = true;
const eliminado = false;
console.log(activo);
console.log(eliminado);`,
      typescript: `const activo: boolean = true;
const eliminado: boolean = false;
console.log(activo);
console.log(eliminado);`,
      java: `boolean activo = true;
boolean eliminado = false;
System.out.println(activo);
System.out.println(eliminado);`,
      csharp: `bool activo = true;
bool eliminado = false;
Console.WriteLine(activo);
Console.WriteLine(eliminado);`,
    },
    output: {
      php: 'true\nfalse',
      python: 'True\nFalse',
      javascript: 'true\nfalse',
      typescript: 'true\nfalse',
      java: 'true\nfalse',
      csharp: 'True\nFalse',
    },
  },
  {
    category: 1,
    categoryTitle: 'Tipos de datos',
    id: '1.4',
    title: 'Null / None',
    code: {
      php: `<?php
$valor = null;
echo is_null($valor) ? "es null" : "no es null";`,
      python: `valor = None
print("es null" if valor is None else "no es null")`,
      javascript: `const valor = null;
console.log(valor === null ? "es null" : "no es null");`,
      typescript: `const valor: string | null = null;
console.log(valor === null ? "es null" : "no es null");`,
      java: `String valor = null;
System.out.println(valor == null ? "es null" : "no es null");`,
      csharp: `string? valor = null;
Console.WriteLine(valor == null ? "es null" : "no es null");`,
    },
    output: 'es null',
  },
  {
    category: 1,
    categoryTitle: 'Tipos de datos',
    id: '1.5',
    title: 'Casting (conversion)',
    code: {
      php: `<?php
$texto = "42";
$numero = (int) $texto;
echo $numero + 1 . "\\n";
$entero = 42;
$cadena = (string) $entero;
echo $cadena . " es string";`,
      python: `texto = "42"
numero = int(texto)
print(numero + 1)
entero = 42
cadena = str(entero)
print(cadena + " es string")`,
      javascript: `const texto = "42";
const numero = Number(texto);
console.log(numero + 1);
const entero = 42;
const cadena = String(entero);
console.log(cadena + " es string");`,
      typescript: `const texto: string = "42";
const numero: number = Number(texto);
console.log(numero + 1);
const entero: number = 42;
const cadena: string = String(entero);
console.log(cadena + " es string");`,
      java: `String texto = "42";
int numero = Integer.parseInt(texto);
System.out.println(numero + 1);
int entero = 42;
String cadena = String.valueOf(entero);
System.out.println(cadena + " es string");`,
      csharp: `string texto = "42";
int numero = int.Parse(texto);
Console.WriteLine(numero + 1);
int entero = 42;
string cadena = entero.ToString();
Console.WriteLine(cadena + " es string");`,
    },
    output: '43\n42 es string',
  },

  // ============= 2. Operadores matematicos =============
  {
    category: 2,
    categoryTitle: 'Operadores matematicos',
    id: '2.1',
    title: 'Suma, resta, multiplicacion, division',
    code: {
      php: `<?php
$a = 10;
$b = 3;
echo $a + $b . "\\n";
echo $a - $b . "\\n";
echo $a * $b . "\\n";
echo $a / $b;`,
      python: `a = 10
b = 3
print(a + b)
print(a - b)
print(a * b)
print(a / b)`,
      javascript: `const a = 10;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);`,
      typescript: `const a: number = 10;
const b: number = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);`,
      java: `int a = 10;
int b = 3;
System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);
System.out.println((double) a / b);`,
      csharp: `int a = 10;
int b = 3;
Console.WriteLine(a + b);
Console.WriteLine(a - b);
Console.WriteLine(a * b);
Console.WriteLine((double) a / b);`,
    },
    output: {
      php: '13\n7\n30\n3.3333333333333',
      python: '13\n7\n30\n3.3333333333333335',
      javascript: '13\n7\n30\n3.3333333333333335',
      typescript: '13\n7\n30\n3.3333333333333335',
      java: '13\n7\n30\n3.3333333333333335',
      csharp: '13\n7\n30\n3.3333333333333335',
    },
  },
  {
    category: 2,
    categoryTitle: 'Operadores matematicos',
    id: '2.2',
    title: 'Modulo (residuo)',
    code: {
      php: `<?php
echo 10 % 3;`,
      python: `print(10 % 3)`,
      javascript: `console.log(10 % 3);`,
      typescript: `console.log(10 % 3);`,
      java: `System.out.println(10 % 3);`,
      csharp: `Console.WriteLine(10 % 3);`,
    },
    output: '1',
  },
  {
    category: 2,
    categoryTitle: 'Operadores matematicos',
    id: '2.3',
    title: 'Potencia',
    code: {
      php: `<?php
echo 2 ** 8;`,
      python: `print(2 ** 8)`,
      javascript: `console.log(2 ** 8);`,
      typescript: `console.log(2 ** 8);`,
      java: `System.out.println((int) Math.pow(2, 8));`,
      csharp: `Console.WriteLine((int) Math.Pow(2, 8));`,
    },
    output: '256',
  },
  {
    category: 2,
    categoryTitle: 'Operadores matematicos',
    id: '2.4',
    title: 'Division entera',
    code: {
      php: `<?php
echo intdiv(7, 2);`,
      python: `print(7 // 2)`,
      javascript: `console.log(Math.floor(7 / 2));`,
      typescript: `console.log(Math.floor(7 / 2));`,
      java: `System.out.println(7 / 2);`,
      csharp: `Console.WriteLine(7 / 2);`,
    },
    output: '3',
  },
  {
    category: 2,
    categoryTitle: 'Operadores matematicos',
    id: '2.5',
    title: 'Incremento y decremento',
    code: {
      php: `<?php
$x = 5;
$x++;
echo $x . "\\n";
$x--;
echo $x;`,
      python: `x = 5
x += 1
print(x)
x -= 1
print(x)`,
      javascript: `let x = 5;
x++;
console.log(x);
x--;
console.log(x);`,
      typescript: `let x: number = 5;
x++;
console.log(x);
x--;
console.log(x);`,
      java: `int x = 5;
x++;
System.out.println(x);
x--;
System.out.println(x);`,
      csharp: `int x = 5;
x++;
Console.WriteLine(x);
x--;
Console.WriteLine(x);`,
    },
    output: '6\n5',
  },

  // ============= 3. Operadores de comparacion =============
  {
    category: 3,
    categoryTitle: 'Operadores de comparacion',
    id: '3.1',
    title: 'Igual y distinto',
    code: {
      php: `<?php
echo (5 == 5) ? "true" : "false";
echo "\\n";
echo (5 != 3) ? "true" : "false";`,
      python: `print(5 == 5)
print(5 != 3)`,
      javascript: `console.log(5 == 5);
console.log(5 != 3);`,
      typescript: `console.log(5 == 5);
console.log(5 != 3);`,
      java: `System.out.println(5 == 5);
System.out.println(5 != 3);`,
      csharp: `Console.WriteLine(5 == 5);
Console.WriteLine(5 != 3);`,
    },
    output: {
      php: 'true\ntrue',
      python: 'True\nTrue',
      javascript: 'true\ntrue',
      typescript: 'true\ntrue',
      java: 'true\ntrue',
      csharp: 'True\nTrue',
    },
  },
  {
    category: 3,
    categoryTitle: 'Operadores de comparacion',
    id: '3.2',
    title: 'Mayor y menor',
    code: {
      php: `<?php
echo (10 > 3) ? "true" : "false";
echo "\\n";
echo (3 < 10) ? "true" : "false";
echo "\\n";
echo (5 >= 5) ? "true" : "false";
echo "\\n";
echo (5 <= 5) ? "true" : "false";`,
      python: `print(10 > 3)
print(3 < 10)
print(5 >= 5)
print(5 <= 5)`,
      javascript: `console.log(10 > 3);
console.log(3 < 10);
console.log(5 >= 5);
console.log(5 <= 5);`,
      typescript: `console.log(10 > 3);
console.log(3 < 10);
console.log(5 >= 5);
console.log(5 <= 5);`,
      java: `System.out.println(10 > 3);
System.out.println(3 < 10);
System.out.println(5 >= 5);
System.out.println(5 <= 5);`,
      csharp: `Console.WriteLine(10 > 3);
Console.WriteLine(3 < 10);
Console.WriteLine(5 >= 5);
Console.WriteLine(5 <= 5);`,
    },
    output: {
      php: 'true\ntrue\ntrue\ntrue',
      python: 'True\nTrue\nTrue\nTrue',
      javascript: 'true\ntrue\ntrue\ntrue',
      typescript: 'true\ntrue\ntrue\ntrue',
      java: 'true\ntrue\ntrue\ntrue',
      csharp: 'True\nTrue\nTrue\nTrue',
    },
  },
  {
    category: 3,
    categoryTitle: 'Operadores de comparacion',
    id: '3.3',
    title: 'Comparacion estricta vs flexible',
    code: {
      php: `<?php
echo ("5" == 5) ? "true" : "false";
echo "\\n";
echo ("5" === 5) ? "true" : "false";`,
      python: `# Python no tiene == flexible, siempre es estricto
print("5" == 5)
print(type("5") == type(5))`,
      javascript: `console.log("5" == 5);
console.log("5" === 5);`,
      typescript: `console.log("5" == 5);
console.log("5" === 5);`,
      java: `// Java: equals() para contenido, == para referencia
String a = "5";
System.out.println(a.equals(String.valueOf(5)));
System.out.println(a == String.valueOf(5));`,
      csharp: `// C#: == compara valor en strings
string a = "5";
Console.WriteLine(a == 5.ToString());
Console.WriteLine(Object.ReferenceEquals(a, 5.ToString()));`,
    },
    output: {
      php: 'true\nfalse',
      python: 'False\nFalse',
      javascript: 'true\nfalse',
      typescript: 'true\nfalse',
      java: 'true\nfalse',
      csharp: 'True\nFalse',
    },
  },

  // ============= 4. Operadores logicos =============
  {
    category: 4,
    categoryTitle: 'Operadores logicos',
    id: '4.1',
    title: 'AND',
    code: {
      php: `<?php
echo (true && false) ? "true" : "false";`,
      python: `print(True and False)`,
      javascript: `console.log(true && false);`,
      typescript: `console.log(true && false);`,
      java: `System.out.println(true && false);`,
      csharp: `Console.WriteLine(true && false);`,
    },
    output: {
      php: 'false',
      python: 'False',
      javascript: 'false',
      typescript: 'false',
      java: 'false',
      csharp: 'False',
    },
  },
  {
    category: 4,
    categoryTitle: 'Operadores logicos',
    id: '4.2',
    title: 'OR',
    code: {
      php: `<?php
echo (true || false) ? "true" : "false";`,
      python: `print(True or False)`,
      javascript: `console.log(true || false);`,
      typescript: `console.log(true || false);`,
      java: `System.out.println(true || false);`,
      csharp: `Console.WriteLine(true || false);`,
    },
    output: {
      php: 'true',
      python: 'True',
      javascript: 'true',
      typescript: 'true',
      java: 'true',
      csharp: 'True',
    },
  },
  {
    category: 4,
    categoryTitle: 'Operadores logicos',
    id: '4.3',
    title: 'NOT',
    code: {
      php: `<?php
echo (!true) ? "true" : "false";`,
      python: `print(not True)`,
      javascript: `console.log(!true);`,
      typescript: `console.log(!true);`,
      java: `System.out.println(!true);`,
      csharp: `Console.WriteLine(!true);`,
    },
    output: {
      php: 'false',
      python: 'False',
      javascript: 'false',
      typescript: 'false',
      java: 'false',
      csharp: 'False',
    },
  },
  {
    category: 4,
    categoryTitle: 'Operadores logicos',
    id: '4.4',
    title: 'Combinados',
    code: {
      php: `<?php
echo ((10 > 5) && (3 < 8)) ? "true" : "false";`,
      python: `print((10 > 5) and (3 < 8))`,
      javascript: `console.log((10 > 5) && (3 < 8));`,
      typescript: `console.log((10 > 5) && (3 < 8));`,
      java: `System.out.println((10 > 5) && (3 < 8));`,
      csharp: `Console.WriteLine((10 > 5) && (3 < 8));`,
    },
    output: {
      php: 'true',
      python: 'True',
      javascript: 'true',
      typescript: 'true',
      java: 'true',
      csharp: 'True',
    },
  },

  // ============= 5. Operadores de asignacion =============
  {
    category: 5,
    categoryTitle: 'Operadores de asignacion',
    id: '5.1',
    title: 'Asignacion basica',
    code: {
      php: `<?php
$x = 10;
echo $x;`,
      python: `x = 10
print(x)`,
      javascript: `const x = 10;
console.log(x);`,
      typescript: `const x: number = 10;
console.log(x);`,
      java: `int x = 10;
System.out.println(x);`,
      csharp: `int x = 10;
Console.WriteLine(x);`,
    },
    output: '10',
  },
  {
    category: 5,
    categoryTitle: 'Operadores de asignacion',
    id: '5.2',
    title: 'Asignacion compuesta',
    code: {
      php: `<?php
$x = 10;
$x += 5;
echo $x . "\\n";
$x -= 2;
echo $x . "\\n";
$x *= 3;
echo $x;`,
      python: `x = 10
x += 5
print(x)
x -= 2
print(x)
x *= 3
print(x)`,
      javascript: `let x = 10;
x += 5;
console.log(x);
x -= 2;
console.log(x);
x *= 3;
console.log(x);`,
      typescript: `let x: number = 10;
x += 5;
console.log(x);
x -= 2;
console.log(x);
x *= 3;
console.log(x);`,
      java: `int x = 10;
x += 5;
System.out.println(x);
x -= 2;
System.out.println(x);
x *= 3;
System.out.println(x);`,
      csharp: `int x = 10;
x += 5;
Console.WriteLine(x);
x -= 2;
Console.WriteLine(x);
x *= 3;
Console.WriteLine(x);`,
    },
    output: '15\n13\n39',
  },
  {
    category: 5,
    categoryTitle: 'Operadores de asignacion',
    id: '5.3',
    title: 'Operador ternario',
    code: {
      php: `<?php
$x = 10;
echo $x > 0 ? "positivo" : "negativo";`,
      python: `x = 10
print("positivo" if x > 0 else "negativo")`,
      javascript: `const x = 10;
console.log(x > 0 ? "positivo" : "negativo");`,
      typescript: `const x: number = 10;
console.log(x > 0 ? "positivo" : "negativo");`,
      java: `int x = 10;
System.out.println(x > 0 ? "positivo" : "negativo");`,
      csharp: `int x = 10;
Console.WriteLine(x > 0 ? "positivo" : "negativo");`,
    },
    output: 'positivo',
  },
  {
    category: 5,
    categoryTitle: 'Operadores de asignacion',
    id: '5.4',
    title: 'Null coalescing',
    code: {
      php: `<?php
$valor = null;
echo $valor ?? "default";`,
      python: `valor = None
print(valor if valor is not None else "default")`,
      javascript: `const valor = null;
console.log(valor ?? "default");`,
      typescript: `const valor: string | null = null;
console.log(valor ?? "default");`,
      java: `String valor = null;
System.out.println(valor != null ? valor : "default");`,
      csharp: `string? valor = null;
Console.WriteLine(valor ?? "default");`,
    },
    output: 'default',
  },

  // ============= 6. Condicionales =============
  {
    category: 6,
    categoryTitle: 'Condicionales',
    id: '6.1',
    title: 'if / else',
    code: {
      php: `<?php
$num = 7;
if ($num > 0) {
    echo "positivo";
} else {
    echo "negativo";
}`,
      python: `num = 7
if num > 0:
    print("positivo")
else:
    print("negativo")`,
      javascript: `const num = 7;
if (num > 0) {
  console.log("positivo");
} else {
  console.log("negativo");
}`,
      typescript: `const num: number = 7;
if (num > 0) {
  console.log("positivo");
} else {
  console.log("negativo");
}`,
      java: `int num = 7;
if (num > 0) {
    System.out.println("positivo");
} else {
    System.out.println("negativo");
}`,
      csharp: `int num = 7;
if (num > 0) {
    Console.WriteLine("positivo");
} else {
    Console.WriteLine("negativo");
}`,
    },
    output: 'positivo',
  },
  {
    category: 6,
    categoryTitle: 'Condicionales',
    id: '6.2',
    title: 'else if / elif',
    code: {
      php: `<?php
$num = 0;
if ($num > 0) {
    echo "positivo";
} elseif ($num === 0) {
    echo "cero";
} else {
    echo "negativo";
}`,
      python: `num = 0
if num > 0:
    print("positivo")
elif num == 0:
    print("cero")
else:
    print("negativo")`,
      javascript: `const num = 0;
if (num > 0) {
  console.log("positivo");
} else if (num === 0) {
  console.log("cero");
} else {
  console.log("negativo");
}`,
      typescript: `const num: number = 0;
if (num > 0) {
  console.log("positivo");
} else if (num === 0) {
  console.log("cero");
} else {
  console.log("negativo");
}`,
      java: `int num = 0;
if (num > 0) {
    System.out.println("positivo");
} else if (num == 0) {
    System.out.println("cero");
} else {
    System.out.println("negativo");
}`,
      csharp: `int num = 0;
if (num > 0) {
    Console.WriteLine("positivo");
} else if (num == 0) {
    Console.WriteLine("cero");
} else {
    Console.WriteLine("negativo");
}`,
    },
    output: 'cero',
  },
  {
    category: 6,
    categoryTitle: 'Condicionales',
    id: '6.3',
    title: 'switch / match',
    code: {
      php: `<?php
$dia = 2;
echo match($dia) {
    1 => "lunes",
    2 => "martes",
    3 => "miercoles",
    default => "otro"
};`,
      python: `dia = 2
match dia:
    case 1:
        print("lunes")
    case 2:
        print("martes")
    case 3:
        print("miercoles")
    case _:
        print("otro")`,
      javascript: `const dia = 2;
switch (dia) {
  case 1: console.log("lunes"); break;
  case 2: console.log("martes"); break;
  case 3: console.log("miercoles"); break;
  default: console.log("otro");
}`,
      typescript: `const dia: number = 2;
switch (dia) {
  case 1: console.log("lunes"); break;
  case 2: console.log("martes"); break;
  case 3: console.log("miercoles"); break;
  default: console.log("otro");
}`,
      java: `int dia = 2;
switch (dia) {
    case 1: System.out.println("lunes"); break;
    case 2: System.out.println("martes"); break;
    case 3: System.out.println("miercoles"); break;
    default: System.out.println("otro");
}`,
      csharp: `int dia = 2;
string nombre = dia switch {
    1 => "lunes",
    2 => "martes",
    3 => "miercoles",
    _ => "otro"
};
Console.WriteLine(nombre);`,
    },
    output: 'martes',
  },
];
