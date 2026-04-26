// Fundamentos de programacion parte 2: categorias 7-12

export const fundamentos2 = [
  // ===================== 7. BUCLES =====================
  {
    category: 7,
    categoryTitle: 'Bucles',
    id: '7.1',
    title: 'for clasico',
    code: {
      php: `<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i . "\\n";
}`,
      python: `for i in range(1, 6):
    print(i)`,
      javascript: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
      typescript: `for (let i: number = 1; i <= 5; i++) {
  console.log(i);
}`,
      java: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
      csharp: `for (int i = 1; i <= 5; i++) {
    Console.WriteLine(i);
}`,
    },
    output: '1\n2\n3\n4\n5',
  },
  {
    category: 7,
    categoryTitle: 'Bucles',
    id: '7.2',
    title: 'while',
    code: {
      php: `<?php
$i = 1;
while ($i <= 5) {
    echo $i . "\\n";
    $i++;
}`,
      python: `i = 1
while i <= 5:
    print(i)
    i += 1`,
      javascript: `let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}`,
      typescript: `let i: number = 1;
while (i <= 5) {
  console.log(i);
  i++;
}`,
      java: `int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}`,
      csharp: `int i = 1;
while (i <= 5) {
    Console.WriteLine(i);
    i++;
}`,
    },
    output: '1\n2\n3\n4\n5',
  },
  {
    category: 7,
    categoryTitle: 'Bucles',
    id: '7.3',
    title: 'foreach / for-in',
    code: {
      php: `<?php
$nums = [10, 20, 30];
foreach ($nums as $n) {
    echo $n . "\\n";
}`,
      python: `nums = [10, 20, 30]
for n in nums:
    print(n)`,
      javascript: `const nums = [10, 20, 30];
for (const n of nums) {
  console.log(n);
}`,
      typescript: `const nums: number[] = [10, 20, 30];
for (const n of nums) {
  console.log(n);
}`,
      java: `int[] nums = {10, 20, 30};
for (int n : nums) {
    System.out.println(n);
}`,
      csharp: `int[] nums = {10, 20, 30};
foreach (int n in nums) {
    Console.WriteLine(n);
}`,
    },
    output: '10\n20\n30',
  },
  {
    category: 7,
    categoryTitle: 'Bucles',
    id: '7.4',
    title: 'break y continue',
    code: {
      php: `<?php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) continue;
    if ($i == 8) break;
    echo $i . "\\n";
}`,
      python: `for i in range(1, 11):
    if i == 5:
        continue
    if i == 8:
        break
    print(i)`,
      javascript: `for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}`,
      typescript: `for (let i: number = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}`,
      java: `for (int i = 1; i <= 10; i++) {
    if (i == 5) continue;
    if (i == 8) break;
    System.out.println(i);
}`,
      csharp: `for (int i = 1; i <= 10; i++) {
    if (i == 5) continue;
    if (i == 8) break;
    Console.WriteLine(i);
}`,
    },
    output: '1\n2\n3\n4\n6\n7',
  },

  // ===================== 8. STRINGS =====================
  {
    category: 8,
    categoryTitle: 'Strings',
    id: '8.1',
    title: 'Concatenar',
    code: {
      php: `<?php
$resultado = "hola" . " " . "mundo";
echo $resultado;`,
      python: `resultado = "hola" + " " + "mundo"
print(resultado)`,
      javascript: `const resultado = "hola" + " " + "mundo";
console.log(resultado);`,
      typescript: `const resultado: string = "hola" + " " + "mundo";
console.log(resultado);`,
      java: `String resultado = "hola" + " " + "mundo";
System.out.println(resultado);`,
      csharp: `string resultado = "hola" + " " + "mundo";
Console.WriteLine(resultado);`,
    },
    output: 'hola mundo',
  },
  {
    category: 8,
    categoryTitle: 'Strings',
    id: '8.2',
    title: 'Longitud',
    code: {
      php: `<?php
$texto = "programacion";
echo strlen($texto);`,
      python: `texto = "programacion"
print(len(texto))`,
      javascript: `const texto = "programacion";
console.log(texto.length);`,
      typescript: `const texto: string = "programacion";
console.log(texto.length);`,
      java: `String texto = "programacion";
System.out.println(texto.length());`,
      csharp: `string texto = "programacion";
Console.WriteLine(texto.Length);`,
    },
    output: '12',
  },
  {
    category: 8,
    categoryTitle: 'Strings',
    id: '8.3',
    title: 'Substring / slice',
    code: {
      php: `<?php
$texto = "hola mundo";
echo substr($texto, 5);`,
      python: `texto = "hola mundo"
print(texto[5:])`,
      javascript: `const texto = "hola mundo";
console.log(texto.slice(5));`,
      typescript: `const texto: string = "hola mundo";
console.log(texto.slice(5));`,
      java: `String texto = "hola mundo";
System.out.println(texto.substring(5));`,
      csharp: `string texto = "hola mundo";
Console.WriteLine(texto.Substring(5));`,
    },
    output: 'mundo',
  },
  {
    category: 8,
    categoryTitle: 'Strings',
    id: '8.4',
    title: 'Buscar en string',
    code: {
      php: `<?php
$texto = "hola mundo";
echo strpos($texto, "mundo");`,
      python: `texto = "hola mundo"
print(texto.find("mundo"))`,
      javascript: `const texto = "hola mundo";
console.log(texto.indexOf("mundo"));`,
      typescript: `const texto: string = "hola mundo";
console.log(texto.indexOf("mundo"));`,
      java: `String texto = "hola mundo";
System.out.println(texto.indexOf("mundo"));`,
      csharp: `string texto = "hola mundo";
Console.WriteLine(texto.IndexOf("mundo"));`,
    },
    output: '5',
  },
  {
    category: 8,
    categoryTitle: 'Strings',
    id: '8.5',
    title: 'Reemplazar',
    code: {
      php: `<?php
$texto = "hola mundo";
echo str_replace("mundo", "PHP", $texto);`,
      python: `texto = "hola mundo"
print(texto.replace("mundo", "Python"))`,
      javascript: `const texto = "hola mundo";
console.log(texto.replace("mundo", "JavaScript"));`,
      typescript: `const texto: string = "hola mundo";
console.log(texto.replace("mundo", "TypeScript"));`,
      java: `String texto = "hola mundo";
System.out.println(texto.replace("mundo", "Java"));`,
      csharp: `string texto = "hola mundo";
Console.WriteLine(texto.Replace("mundo", "C#"));`,
    },
    output: {
      php: 'hola PHP',
      python: 'hola Python',
      javascript: 'hola JavaScript',
      typescript: 'hola TypeScript',
      java: 'hola Java',
      csharp: 'hola C#',
    },
  },
  {
    category: 8,
    categoryTitle: 'Strings',
    id: '8.6',
    title: 'Mayusculas y minusculas',
    code: {
      php: `<?php
$texto = "Hola Mundo";
echo strtoupper($texto) . "\\n";
echo strtolower($texto);`,
      python: `texto = "Hola Mundo"
print(texto.upper())
print(texto.lower())`,
      javascript: `const texto = "Hola Mundo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());`,
      typescript: `const texto: string = "Hola Mundo";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());`,
      java: `String texto = "Hola Mundo";
System.out.println(texto.toUpperCase());
System.out.println(texto.toLowerCase());`,
      csharp: `string texto = "Hola Mundo";
Console.WriteLine(texto.ToUpper());
Console.WriteLine(texto.ToLower());`,
    },
    output: 'HOLA MUNDO\nhola mundo',
  },
  {
    category: 8,
    categoryTitle: 'Strings',
    id: '8.7',
    title: 'Split y join',
    code: {
      php: `<?php
$partes = explode(",", "a,b,c");
echo implode("-", $partes);`,
      python: `partes = "a,b,c".split(",")
print("-".join(partes))`,
      javascript: `const partes = "a,b,c".split(",");
console.log(partes.join("-"));`,
      typescript: `const partes: string[] = "a,b,c".split(",");
console.log(partes.join("-"));`,
      java: `String[] partes = "a,b,c".split(",");
System.out.println(String.join("-", partes));`,
      csharp: `string[] partes = "a,b,c".Split(',');
Console.WriteLine(string.Join("-", partes));`,
    },
    output: 'a-b-c',
  },

  // ===================== 9. ARRAYS / LISTAS =====================
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.1',
    title: 'Crear y acceder',
    code: {
      php: `<?php
$arr = [10, 20, 30, 40, 50];
echo $arr[0] . "\\n";
echo $arr[2];`,
      python: `arr = [10, 20, 30, 40, 50]
print(arr[0])
print(arr[2])`,
      javascript: `const arr = [10, 20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[2]);`,
      typescript: `const arr: number[] = [10, 20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[2]);`,
      java: `int[] arr = {10, 20, 30, 40, 50};
System.out.println(arr[0]);
System.out.println(arr[2]);`,
      csharp: `int[] arr = {10, 20, 30, 40, 50};
Console.WriteLine(arr[0]);
Console.WriteLine(arr[2]);`,
    },
    output: '10\n30',
  },
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.2',
    title: 'Agregar elemento',
    code: {
      php: `<?php
$arr = [10, 20, 30, 40, 50];
$arr[] = 60;
echo implode(", ", $arr);`,
      python: `arr = [10, 20, 30, 40, 50]
arr.append(60)
print(arr)`,
      javascript: `const arr = [10, 20, 30, 40, 50];
arr.push(60);
console.log(arr);`,
      typescript: `const arr: number[] = [10, 20, 30, 40, 50];
arr.push(60);
console.log(arr);`,
      java: `import java.util.ArrayList;
import java.util.Arrays;

ArrayList<Integer> arr = new ArrayList<>(
    Arrays.asList(10, 20, 30, 40, 50)
);
arr.add(60);
System.out.println(arr);`,
      csharp: `using System.Collections.Generic;

List<int> arr = new List<int> {10, 20, 30, 40, 50};
arr.Add(60);
Console.WriteLine(string.Join(", ", arr));`,
    },
    output: {
      php: '10, 20, 30, 40, 50, 60',
      python: '[10, 20, 30, 40, 50, 60]',
      javascript: '[10, 20, 30, 40, 50, 60]',
      typescript: '[10, 20, 30, 40, 50, 60]',
      java: '[10, 20, 30, 40, 50, 60]',
      csharp: '10, 20, 30, 40, 50, 60',
    },
  },
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.3',
    title: 'Eliminar elemento',
    code: {
      php: `<?php
$arr = [10, 20, 30, 40, 50];
array_pop($arr);
echo implode(", ", $arr);`,
      python: `arr = [10, 20, 30, 40, 50]
arr.pop()
print(arr)`,
      javascript: `const arr = [10, 20, 30, 40, 50];
arr.pop();
console.log(arr);`,
      typescript: `const arr: number[] = [10, 20, 30, 40, 50];
arr.pop();
console.log(arr);`,
      java: `import java.util.ArrayList;
import java.util.Arrays;

ArrayList<Integer> arr = new ArrayList<>(
    Arrays.asList(10, 20, 30, 40, 50)
);
arr.remove(arr.size() - 1);
System.out.println(arr);`,
      csharp: `using System.Collections.Generic;

List<int> arr = new List<int> {10, 20, 30, 40, 50};
arr.RemoveAt(arr.Count - 1);
Console.WriteLine(string.Join(", ", arr));`,
    },
    output: {
      php: '10, 20, 30, 40',
      python: '[10, 20, 30, 40]',
      javascript: '[10, 20, 30, 40]',
      typescript: '[10, 20, 30, 40]',
      java: '[10, 20, 30, 40]',
      csharp: '10, 20, 30, 40',
    },
  },
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.4',
    title: 'Longitud',
    code: {
      php: `<?php
$arr = [10, 20, 30, 40, 50];
echo count($arr);`,
      python: `arr = [10, 20, 30, 40, 50]
print(len(arr))`,
      javascript: `const arr = [10, 20, 30, 40, 50];
console.log(arr.length);`,
      typescript: `const arr: number[] = [10, 20, 30, 40, 50];
console.log(arr.length);`,
      java: `int[] arr = {10, 20, 30, 40, 50};
System.out.println(arr.length);`,
      csharp: `int[] arr = {10, 20, 30, 40, 50};
Console.WriteLine(arr.Length);`,
    },
    output: '5',
  },
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.5',
    title: 'Recorrer',
    code: {
      php: `<?php
$arr = [1, 2, 3, 4, 5];
foreach ($arr as $n) {
    echo $n . "\\n";
}`,
      python: `arr = [1, 2, 3, 4, 5]
for n in arr:
    print(n)`,
      javascript: `const arr = [1, 2, 3, 4, 5];
arr.forEach(n => console.log(n));`,
      typescript: `const arr: number[] = [1, 2, 3, 4, 5];
arr.forEach((n: number) => console.log(n));`,
      java: `int[] arr = {1, 2, 3, 4, 5};
for (int n : arr) {
    System.out.println(n);
}`,
      csharp: `int[] arr = {1, 2, 3, 4, 5};
foreach (int n in arr) {
    Console.WriteLine(n);
}`,
    },
    output: '1\n2\n3\n4\n5',
  },
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.6',
    title: 'Buscar elemento',
    code: {
      php: `<?php
$arr = [10, 20, 30, 40, 50];
if (in_array(30, $arr)) {
    echo "Encontrado";
}`,
      python: `arr = [10, 20, 30, 40, 50]
if 30 in arr:
    print("Encontrado")`,
      javascript: `const arr = [10, 20, 30, 40, 50];
if (arr.includes(30)) {
  console.log("Encontrado");
}`,
      typescript: `const arr: number[] = [10, 20, 30, 40, 50];
if (arr.includes(30)) {
  console.log("Encontrado");
}`,
      java: `import java.util.Arrays;
import java.util.List;

List<Integer> arr = Arrays.asList(10, 20, 30, 40, 50);
if (arr.contains(30)) {
    System.out.println("Encontrado");
}`,
      csharp: `int[] arr = {10, 20, 30, 40, 50};
if (arr.Contains(30)) {
    Console.WriteLine("Encontrado");
}`,
    },
    output: 'Encontrado',
  },
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.7',
    title: 'Ordenar',
    code: {
      php: `<?php
$arr = [5, 2, 8, 1, 4];
sort($arr);
echo implode(", ", $arr);`,
      python: `arr = [5, 2, 8, 1, 4]
arr.sort()
print(arr)`,
      javascript: `const arr = [5, 2, 8, 1, 4];
arr.sort((a, b) => a - b);
console.log(arr);`,
      typescript: `const arr: number[] = [5, 2, 8, 1, 4];
arr.sort((a: number, b: number) => a - b);
console.log(arr);`,
      java: `import java.util.Arrays;

int[] arr = {5, 2, 8, 1, 4};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));`,
      csharp: `int[] arr = {5, 2, 8, 1, 4};
Array.Sort(arr);
Console.WriteLine(string.Join(", ", arr));`,
    },
    output: {
      php: '1, 2, 4, 5, 8',
      python: '[1, 2, 4, 5, 8]',
      javascript: '[1, 2, 4, 5, 8]',
      typescript: '[1, 2, 4, 5, 8]',
      java: '[1, 2, 4, 5, 8]',
      csharp: '1, 2, 4, 5, 8',
    },
  },
  {
    category: 9,
    categoryTitle: 'Arrays / listas',
    id: '9.8',
    title: 'Filtrar y mapear',
    code: {
      php: `<?php
$arr = [1, 2, 3, 4, 5, 6];
$pares = array_filter($arr, fn($n) => $n % 2 == 0);
$dobles = array_map(fn($n) => $n * 2, $pares);
echo implode(", ", $dobles);`,
      python: `arr = [1, 2, 3, 4, 5, 6]
pares = [n for n in arr if n % 2 == 0]
dobles = [n * 2 for n in pares]
print(dobles)`,
      javascript: `const arr = [1, 2, 3, 4, 5, 6];
const dobles = arr
  .filter(n => n % 2 === 0)
  .map(n => n * 2);
console.log(dobles);`,
      typescript: `const arr: number[] = [1, 2, 3, 4, 5, 6];
const dobles: number[] = arr
  .filter((n: number) => n % 2 === 0)
  .map((n: number) => n * 2);
console.log(dobles);`,
      java: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<Integer> arr = Arrays.asList(1, 2, 3, 4, 5, 6);
List<Integer> dobles = arr.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .collect(Collectors.toList());
System.out.println(dobles);`,
      csharp: `using System.Linq;

int[] arr = {1, 2, 3, 4, 5, 6};
var dobles = arr
    .Where(n => n % 2 == 0)
    .Select(n => n * 2)
    .ToList();
Console.WriteLine(string.Join(", ", dobles));`,
    },
    output: {
      php: '4, 8, 12',
      python: '[4, 8, 12]',
      javascript: '[4, 8, 12]',
      typescript: '[4, 8, 12]',
      java: '[4, 8, 12]',
      csharp: '4, 8, 12',
    },
  },

  // ===================== 10. DICCIONARIOS =====================
  {
    category: 10,
    categoryTitle: 'Diccionarios / arrays asociativos',
    id: '10.1',
    title: 'Crear y acceder',
    code: {
      php: `<?php
$persona = ["nombre" => "Ana", "edad" => 25];
echo $persona["nombre"];`,
      python: `persona = {"nombre": "Ana", "edad": 25}
print(persona["nombre"])`,
      javascript: `const persona = {nombre: "Ana", edad: 25};
console.log(persona.nombre);`,
      typescript: `const persona: {nombre: string; edad: number} = {
  nombre: "Ana", edad: 25
};
console.log(persona.nombre);`,
      java: `import java.util.HashMap;

HashMap<String, Object> persona = new HashMap<>();
persona.put("nombre", "Ana");
persona.put("edad", 25);
System.out.println(persona.get("nombre"));`,
      csharp: `using System.Collections.Generic;

Dictionary<string, object> persona = new Dictionary<string, object> {
    {"nombre", "Ana"},
    {"edad", 25}
};
Console.WriteLine(persona["nombre"]);`,
    },
    output: 'Ana',
  },
  {
    category: 10,
    categoryTitle: 'Diccionarios / arrays asociativos',
    id: '10.2',
    title: 'Agregar y eliminar',
    code: {
      php: `<?php
$persona = ["nombre" => "Ana", "edad" => 25];
$persona["ciudad"] = "Lima";
unset($persona["edad"]);
print_r($persona);`,
      python: `persona = {"nombre": "Ana", "edad": 25}
persona["ciudad"] = "Lima"
del persona["edad"]
print(persona)`,
      javascript: `const persona = {nombre: "Ana", edad: 25};
persona.ciudad = "Lima";
delete persona.edad;
console.log(persona);`,
      typescript: `const persona: Record<string, any> = {
  nombre: "Ana", edad: 25
};
persona.ciudad = "Lima";
delete persona.edad;
console.log(persona);`,
      java: `import java.util.HashMap;

HashMap<String, Object> persona = new HashMap<>();
persona.put("nombre", "Ana");
persona.put("edad", 25);
persona.put("ciudad", "Lima");
persona.remove("edad");
System.out.println(persona);`,
      csharp: `using System.Collections.Generic;

Dictionary<string, object> persona = new Dictionary<string, object> {
    {"nombre", "Ana"},
    {"edad", 25}
};
persona["ciudad"] = "Lima";
persona.Remove("edad");
foreach (var p in persona)
    Console.WriteLine(p.Key + ": " + p.Value);`,
    },
    output: {
      php: 'Array\n(\n    [nombre] => Ana\n    [ciudad] => Lima\n)',
      python: "{'nombre': 'Ana', 'ciudad': 'Lima'}",
      javascript: '{ nombre: \'Ana\', ciudad: \'Lima\' }',
      typescript: '{ nombre: \'Ana\', ciudad: \'Lima\' }',
      java: '{nombre=Ana, ciudad=Lima}',
      csharp: 'nombre: Ana\nciudad: Lima',
    },
  },
  {
    category: 10,
    categoryTitle: 'Diccionarios / arrays asociativos',
    id: '10.3',
    title: 'Verificar si clave existe',
    code: {
      php: `<?php
$persona = ["nombre" => "Ana", "edad" => 25];
if (array_key_exists("nombre", $persona)) {
    echo "Existe";
}`,
      python: `persona = {"nombre": "Ana", "edad": 25}
if "nombre" in persona:
    print("Existe")`,
      javascript: `const persona = {nombre: "Ana", edad: 25};
if ("nombre" in persona) {
  console.log("Existe");
}`,
      typescript: `const persona: Record<string, any> = {
  nombre: "Ana", edad: 25
};
if ("nombre" in persona) {
  console.log("Existe");
}`,
      java: `import java.util.HashMap;

HashMap<String, Object> persona = new HashMap<>();
persona.put("nombre", "Ana");
persona.put("edad", 25);
if (persona.containsKey("nombre")) {
    System.out.println("Existe");
}`,
      csharp: `using System.Collections.Generic;

Dictionary<string, object> persona = new Dictionary<string, object> {
    {"nombre", "Ana"},
    {"edad", 25}
};
if (persona.ContainsKey("nombre")) {
    Console.WriteLine("Existe");
}`,
    },
    output: 'Existe',
  },
  {
    category: 10,
    categoryTitle: 'Diccionarios / arrays asociativos',
    id: '10.4',
    title: 'Recorrer claves y valores',
    code: {
      php: `<?php
$persona = ["nombre" => "Ana", "edad" => 25];
foreach ($persona as $clave => $valor) {
    echo "$clave: $valor\\n";
}`,
      python: `persona = {"nombre": "Ana", "edad": 25}
for clave, valor in persona.items():
    print(f"{clave}: {valor}")`,
      javascript: `const persona = {nombre: "Ana", edad: 25};
for (const [clave, valor] of Object.entries(persona)) {
  console.log(\`\${clave}: \${valor}\`);
}`,
      typescript: `const persona: Record<string, any> = {
  nombre: "Ana", edad: 25
};
for (const [clave, valor] of Object.entries(persona)) {
  console.log(\`\${clave}: \${valor}\`);
}`,
      java: `import java.util.HashMap;

HashMap<String, Object> persona = new HashMap<>();
persona.put("nombre", "Ana");
persona.put("edad", 25);
for (var entry : persona.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`,
      csharp: `using System.Collections.Generic;

Dictionary<string, object> persona = new Dictionary<string, object> {
    {"nombre", "Ana"},
    {"edad", 25}
};
foreach (var par in persona) {
    Console.WriteLine($"{par.Key}: {par.Value}");
}`,
    },
    output: 'nombre: Ana\nedad: 25',
  },

  // ===================== 11. MATRICES =====================
  {
    category: 11,
    categoryTitle: 'Matrices / arrays 2D',
    id: '11.1',
    title: 'Crear matriz',
    code: {
      php: `<?php
$matriz = [[1, 2, 3], [4, 5, 6]];
print_r($matriz);`,
      python: `matriz = [[1, 2, 3], [4, 5, 6]]
print(matriz)`,
      javascript: `const matriz = [[1, 2, 3], [4, 5, 6]];
console.log(matriz);`,
      typescript: `const matriz: number[][] = [[1, 2, 3], [4, 5, 6]];
console.log(matriz);`,
      java: `int[][] matriz = {{1, 2, 3}, {4, 5, 6}};
for (int[] fila : matriz) {
    System.out.println(java.util.Arrays.toString(fila));
}`,
      csharp: `int[,] matriz = {{1, 2, 3}, {4, 5, 6}};
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++)
        Console.Write(matriz[i, j] + " ");
    Console.WriteLine();
}`,
    },
    output: {
      php: 'Array\n(\n    [0] => Array\n        (\n            [0] => 1\n            [1] => 2\n            [2] => 3\n        )\n    [1] => Array\n        (\n            [0] => 4\n            [1] => 5\n            [2] => 6\n        )\n)',
      python: '[[1, 2, 3], [4, 5, 6]]',
      javascript: '[[1, 2, 3], [4, 5, 6]]',
      typescript: '[[1, 2, 3], [4, 5, 6]]',
      java: '[1, 2, 3]\n[4, 5, 6]',
      csharp: '1 2 3 \n4 5 6 ',
    },
  },
  {
    category: 11,
    categoryTitle: 'Matrices / arrays 2D',
    id: '11.2',
    title: 'Acceder a elemento',
    code: {
      php: `<?php
$matriz = [[1, 2, 3], [4, 5, 6]];
echo $matriz[1][2];`,
      python: `matriz = [[1, 2, 3], [4, 5, 6]]
print(matriz[1][2])`,
      javascript: `const matriz = [[1, 2, 3], [4, 5, 6]];
console.log(matriz[1][2]);`,
      typescript: `const matriz: number[][] = [[1, 2, 3], [4, 5, 6]];
console.log(matriz[1][2]);`,
      java: `int[][] matriz = {{1, 2, 3}, {4, 5, 6}};
System.out.println(matriz[1][2]);`,
      csharp: `int[,] matriz = {{1, 2, 3}, {4, 5, 6}};
Console.WriteLine(matriz[1, 2]);`,
    },
    output: '6',
  },
  {
    category: 11,
    categoryTitle: 'Matrices / arrays 2D',
    id: '11.3',
    title: 'Recorrer matriz',
    code: {
      php: `<?php
$matriz = [[1, 2, 3], [4, 5, 6]];
foreach ($matriz as $fila) {
    foreach ($fila as $val) {
        echo $val . " ";
    }
    echo "\\n";
}`,
      python: `matriz = [[1, 2, 3], [4, 5, 6]]
for fila in matriz:
    for val in fila:
        print(val, end=" ")
    print()`,
      javascript: `const matriz = [[1, 2, 3], [4, 5, 6]];
for (const fila of matriz) {
  for (const val of fila) {
    process.stdout.write(val + " ");
  }
  console.log();
}`,
      typescript: `const matriz: number[][] = [[1, 2, 3], [4, 5, 6]];
for (const fila of matriz) {
  for (const val of fila) {
    process.stdout.write(val + " ");
  }
  console.log();
}`,
      java: `int[][] matriz = {{1, 2, 3}, {4, 5, 6}};
for (int[] fila : matriz) {
    for (int val : fila) {
        System.out.print(val + " ");
    }
    System.out.println();
}`,
      csharp: `int[,] matriz = {{1, 2, 3}, {4, 5, 6}};
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++)
        Console.Write(matriz[i, j] + " ");
    Console.WriteLine();
}`,
    },
    output: '1 2 3 \n4 5 6 ',
  },

  // ===================== 12. FUNCIONES =====================
  {
    category: 12,
    categoryTitle: 'Funciones',
    id: '12.1',
    title: 'Definir y llamar',
    code: {
      php: `<?php
function sumar($a, $b) {
    return $a + $b;
}
echo sumar(3, 7);`,
      python: `def sumar(a, b):
    return a + b

print(sumar(3, 7))`,
      javascript: `function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 7));`,
      typescript: `function sumar(a: number, b: number): number {
  return a + b;
}
console.log(sumar(3, 7));`,
      java: `static int sumar(int a, int b) {
    return a + b;
}
System.out.println(sumar(3, 7));`,
      csharp: `static int Sumar(int a, int b) {
    return a + b;
}
Console.WriteLine(Sumar(3, 7));`,
    },
    output: '10',
  },
  {
    category: 12,
    categoryTitle: 'Funciones',
    id: '12.2',
    title: 'Parametros por defecto',
    code: {
      php: `<?php
function saludar($nombre = "mundo") {
    echo "hola $nombre";
}
saludar();`,
      python: `def saludar(nombre="mundo"):
    print(f"hola {nombre}")

saludar()`,
      javascript: `function saludar(nombre = "mundo") {
  console.log("hola " + nombre);
}
saludar();`,
      typescript: `function saludar(nombre: string = "mundo"): void {
  console.log("hola " + nombre);
}
saludar();`,
      java: `static void saludar(String nombre) {
    System.out.println("hola " + nombre);
}
static void saludar() {
    saludar("mundo");
}
saludar();`,
      csharp: `static void Saludar(string nombre = "mundo") {
    Console.WriteLine("hola " + nombre);
}
Saludar();`,
    },
    output: 'hola mundo',
  },
  {
    category: 12,
    categoryTitle: 'Funciones',
    id: '12.3',
    title: 'Retornar multiples valores',
    code: {
      php: `<?php
function minMax($a, $b) {
    return [min($a, $b), max($a, $b)];
}
[$menor, $mayor] = minMax(8, 3);
echo "min: $menor, max: $mayor";`,
      python: `def min_max(a, b):
    return min(a, b), max(a, b)

menor, mayor = min_max(8, 3)
print(f"min: {menor}, max: {mayor}")`,
      javascript: `function minMax(a, b) {
  return [Math.min(a, b), Math.max(a, b)];
}
const [menor, mayor] = minMax(8, 3);
console.log(\`min: \${menor}, max: \${mayor}\`);`,
      typescript: `function minMax(a: number, b: number): [number, number] {
  return [Math.min(a, b), Math.max(a, b)];
}
const [menor, mayor] = minMax(8, 3);
console.log(\`min: \${menor}, max: \${mayor}\`);`,
      java: `static int[] minMax(int a, int b) {
    return new int[]{Math.min(a, b), Math.max(a, b)};
}
int[] resultado = minMax(8, 3);
System.out.println("min: " + resultado[0] + ", max: " + resultado[1]);`,
      csharp: `static (int, int) MinMax(int a, int b) {
    return (Math.Min(a, b), Math.Max(a, b));
}
var (menor, mayor) = MinMax(8, 3);
Console.WriteLine($"min: {menor}, max: {mayor}");`,
    },
    output: 'min: 3, max: 8',
  },
  {
    category: 12,
    categoryTitle: 'Funciones',
    id: '12.4',
    title: 'Funciones anonimas / lambda',
    code: {
      php: `<?php
$doble = fn($n) => $n * 2;
echo $doble(5);`,
      python: `doble = lambda n: n * 2
print(doble(5))`,
      javascript: `const doble = (n) => n * 2;
console.log(doble(5));`,
      typescript: `const doble = (n: number): number => n * 2;
console.log(doble(5));`,
      java: `import java.util.function.Function;

Function<Integer, Integer> doble = n -> n * 2;
System.out.println(doble.apply(5));`,
      csharp: `Func<int, int> doble = n => n * 2;
Console.WriteLine(doble(5));`,
    },
    output: '10',
  },
];
