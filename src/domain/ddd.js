// Domain-Driven Design - conceptos con ejemplos aritmeticos

export const ddd = [
  // ============= 1. Bloques de construccion =============
  {
    category: 1,
    categoryTitle: 'Bloques de construccion',
    id: 'd1',
    title: 'Entity (Entidad)',
    description: 'Objeto con identidad unica. Dos entidades con mismos datos pero distinto id son diferentes.',
    code: {
      php: `<?php
function crearOperacion($id, $tipo, $valor) {
    return ["id" => $id, "tipo" => $tipo, "valor" => $valor];
}
function sonIguales($op1, $op2) {
    return $op1["id"] === $op2["id"];
}
$op1 = crearOperacion(1, "suma", 10);
$op2 = crearOperacion(2, "suma", 10);
$igual = sonIguales($op1, $op2) ? "SI" : "NO";
echo "op1 == op2? $igual (distinto id)";`,
      python: `def crear_operacion(id, tipo, valor):
    return {"id": id, "tipo": tipo, "valor": valor}

def son_iguales(op1, op2):
    return op1["id"] == op2["id"]

op1 = crear_operacion(1, "suma", 10)
op2 = crear_operacion(2, "suma", 10)
igual = "SI" if son_iguales(op1, op2) else "NO"
print(f"op1 == op2? {igual} (distinto id)")`,
      javascript: `function crearOperacion(id, tipo, valor) {
  return { id, tipo, valor };
}
function sonIguales(op1, op2) {
  return op1.id === op2.id;
}
const op1 = crearOperacion(1, "suma", 10);
const op2 = crearOperacion(2, "suma", 10);
const igual = sonIguales(op1, op2) ? "SI" : "NO";
console.log("op1 == op2? " + igual + " (distinto id)");`,
      typescript: `function crearOperacion(id: number, tipo: string, valor: number) {
  return { id, tipo, valor };
}
function sonIguales(op1: { id: number }, op2: { id: number }): boolean {
  return op1.id === op2.id;
}
const op1 = crearOperacion(1, "suma", 10);
const op2 = crearOperacion(2, "suma", 10);
const igual = sonIguales(op1, op2) ? "SI" : "NO";
console.log("op1 == op2? " + igual + " (distinto id)");`,
      java: `static int[] crearOperacion(int id, int valor) {
    return new int[]{id, valor};
}
static boolean sonIguales(int[] op1, int[] op2) {
    return op1[0] == op2[0];
}
int[] op1 = crearOperacion(1, 10);
int[] op2 = crearOperacion(2, 10);
String igual = sonIguales(op1, op2) ? "SI" : "NO";
System.out.println("op1 == op2? " + igual + " (distinto id)");`,
      csharp: `static (int id, int valor) CrearOperacion(int id, int valor) {
    return (id, valor);
}
static bool SonIguales((int id, int valor) op1, (int id, int valor) op2) {
    return op1.id == op2.id;
}
var op1 = CrearOperacion(1, 10);
var op2 = CrearOperacion(2, 10);
var igual = SonIguales(op1, op2) ? "SI" : "NO";
Console.WriteLine($"op1 == op2? {igual} (distinto id)");`,
    },
    output: 'op1 == op2? NO (distinto id)',
  },
  {
    category: 1,
    categoryTitle: 'Bloques de construccion',
    id: 'd2',
    title: 'Value Object',
    description: 'Objeto definido por sus atributos, sin identidad. Dos con mismos atributos son iguales. Inmutable.',
    code: {
      php: `<?php
function crearCoordenada($x, $y) {
    return ["x" => $x, "y" => $y];
}
function sonIguales($c1, $c2) {
    return $c1["x"] === $c2["x"] && $c1["y"] === $c2["y"];
}
function distancia($c) {
    return sqrt($c["x"] ** 2 + $c["y"] ** 2);
}
$c1 = crearCoordenada(3, 4);
$c2 = crearCoordenada(3, 4);
$igual = sonIguales($c1, $c2) ? "SI" : "NO";
echo "iguales: $igual\\n";
echo "distancia: " . distancia($c1);`,
      python: `import math

def crear_coordenada(x, y):
    return (x, y)

def son_iguales(c1, c2):
    return c1 == c2

def distancia(c):
    return math.sqrt(c[0] ** 2 + c[1] ** 2)

c1 = crear_coordenada(3, 4)
c2 = crear_coordenada(3, 4)
igual = "SI" if son_iguales(c1, c2) else "NO"
print(f"iguales: {igual}")
print(f"distancia: {int(distancia(c1))}")`,
      javascript: `function crearCoordenada(x, y) {
  return Object.freeze({ x, y });
}
function sonIguales(c1, c2) {
  return c1.x === c2.x && c1.y === c2.y;
}
function distancia(c) {
  return Math.sqrt(c.x ** 2 + c.y ** 2);
}
const c1 = crearCoordenada(3, 4);
const c2 = crearCoordenada(3, 4);
const igual = sonIguales(c1, c2) ? "SI" : "NO";
console.log("iguales: " + igual);
console.log("distancia: " + distancia(c1));`,
      typescript: `function crearCoordenada(x: number, y: number) {
  return Object.freeze({ x, y });
}
function sonIguales(c1: { x: number; y: number }, c2: { x: number; y: number }): boolean {
  return c1.x === c2.x && c1.y === c2.y;
}
function distancia(c: { x: number; y: number }): number {
  return Math.sqrt(c.x ** 2 + c.y ** 2);
}
const c1 = crearCoordenada(3, 4);
const c2 = crearCoordenada(3, 4);
const igual = sonIguales(c1, c2) ? "SI" : "NO";
console.log("iguales: " + igual);
console.log("distancia: " + distancia(c1));`,
      java: `static int[] crearCoordenada(int x, int y) {
    return new int[]{x, y};
}
static boolean sonIguales(int[] c1, int[] c2) {
    return c1[0] == c2[0] && c1[1] == c2[1];
}
static double distancia(int[] c) {
    return Math.sqrt(c[0] * c[0] + c[1] * c[1]);
}
int[] c1 = crearCoordenada(3, 4);
int[] c2 = crearCoordenada(3, 4);
String igual = sonIguales(c1, c2) ? "SI" : "NO";
System.out.println("iguales: " + igual);
System.out.println("distancia: " + (int) distancia(c1));`,
      csharp: `static (int x, int y) CrearCoordenada(int x, int y) {
    return (x, y);
}
static bool SonIguales((int x, int y) c1, (int x, int y) c2) {
    return c1 == c2;
}
static double Distancia((int x, int y) c) {
    return Math.Sqrt(c.x * c.x + c.y * c.y);
}
var c1 = CrearCoordenada(3, 4);
var c2 = CrearCoordenada(3, 4);
var igual = SonIguales(c1, c2) ? "SI" : "NO";
Console.WriteLine($"iguales: {igual}");
Console.WriteLine($"distancia: {(int)Distancia(c1)}");`,
    },
    output: 'iguales: SI\ndistancia: 5',
  },
  {
    category: 1,
    categoryTitle: 'Bloques de construccion',
    id: 'd3',
    title: 'Aggregate',
    description: 'Grupo de entidades/VOs tratados como unidad con una entidad raiz que controla el acceso.',
    code: {
      php: `<?php
function crearGrupo() {
    return ["numeros" => []];
}
function agregar(&$grupo, $n) {
    $grupo["numeros"][] = $n;
}
function total($grupo) {
    return array_sum($grupo["numeros"]);
}
$grupo = crearGrupo();
agregar($grupo, 10);
agregar($grupo, 20);
echo "total: " . total($grupo);`,
      python: `def crear_grupo():
    return {"numeros": []}

def agregar(grupo, n):
    grupo["numeros"].append(n)

def total(grupo):
    return sum(grupo["numeros"])

grupo = crear_grupo()
agregar(grupo, 10)
agregar(grupo, 20)
print(f"total: {total(grupo)}")`,
      javascript: `function crearGrupo() {
  return { numeros: [] };
}
function agregar(grupo, n) {
  grupo.numeros.push(n);
}
function total(grupo) {
  return grupo.numeros.reduce((s, n) => s + n, 0);
}
const grupo = crearGrupo();
agregar(grupo, 10);
agregar(grupo, 20);
console.log("total: " + total(grupo));`,
      typescript: `function crearGrupo(): { numeros: number[] } {
  return { numeros: [] };
}
function agregar(grupo: { numeros: number[] }, n: number): void {
  grupo.numeros.push(n);
}
function total(grupo: { numeros: number[] }): number {
  return grupo.numeros.reduce((s, n) => s + n, 0);
}
const grupo = crearGrupo();
agregar(grupo, 10);
agregar(grupo, 20);
console.log("total: " + total(grupo));`,
      java: `ArrayList<Integer> numeros = new ArrayList<>();

static void agregar(ArrayList<Integer> grupo, int n) {
    grupo.add(n);
}
static int total(ArrayList<Integer> grupo) {
    int suma = 0;
    for (int n : grupo) suma += n;
    return suma;
}
agregar(numeros, 10);
agregar(numeros, 20);
System.out.println("total: " + total(numeros));`,
      csharp: `var numeros = new List<int>();

static void Agregar(List<int> grupo, int n) {
    grupo.Add(n);
}
static int Total(List<int> grupo) {
    int suma = 0;
    foreach (var n in grupo) suma += n;
    return suma;
}
Agregar(numeros, 10);
Agregar(numeros, 20);
Console.WriteLine($"total: {Total(numeros)}");`,
    },
    output: 'total: 30',
  },
  {
    category: 1,
    categoryTitle: 'Bloques de construccion',
    id: 'd4',
    title: 'Domain Event',
    description: 'Algo que ocurrio en el dominio. Cuando se cumple una condicion se emite un evento.',
    code: {
      php: `<?php
function crearContador() {
    return ["valor" => 0, "eventos" => []];
}
function incrementar(&$c, $limite) {
    $c["valor"]++;
    if ($c["valor"] === $limite) {
        $c["eventos"][] = "limite alcanzado en $limite";
    }
}
$c = crearContador();
for ($i = 0; $i < 10; $i++) {
    incrementar($c, 10);
}
echo "evento: " . $c["eventos"][0];`,
      python: `def crear_contador():
    return {"valor": 0, "eventos": []}

def incrementar(c, limite):
    c["valor"] += 1
    if c["valor"] == limite:
        c["eventos"].append(f"limite alcanzado en {limite}")

c = crear_contador()
for _ in range(10):
    incrementar(c, 10)
print(f"evento: {c['eventos'][0]}")`,
      javascript: `function crearContador() {
  return { valor: 0, eventos: [] };
}
function incrementar(c, limite) {
  c.valor++;
  if (c.valor === limite) {
    c.eventos.push("limite alcanzado en " + limite);
  }
}
const c = crearContador();
for (let i = 0; i < 10; i++) {
  incrementar(c, 10);
}
console.log("evento: " + c.eventos[0]);`,
      typescript: `function crearContador(): { valor: number; eventos: string[] } {
  return { valor: 0, eventos: [] };
}
function incrementar(c: { valor: number; eventos: string[] }, limite: number): void {
  c.valor++;
  if (c.valor === limite) {
    c.eventos.push("limite alcanzado en " + limite);
  }
}
const c = crearContador();
for (let i = 0; i < 10; i++) {
  incrementar(c, 10);
}
console.log("evento: " + c.eventos[0]);`,
      java: `int valor = 0;
ArrayList<String> eventos = new ArrayList<>();

static void incrementar(int[] estado, ArrayList<String> eventos, int limite) {
    estado[0]++;
    if (estado[0] == limite) {
        eventos.add("limite alcanzado en " + limite);
    }
}
int[] estado = {0};
for (int i = 0; i < 10; i++) {
    incrementar(estado, eventos, 10);
}
System.out.println("evento: " + eventos.get(0));`,
      csharp: `var valor = 0;
var eventos = new List<string>();

static void Incrementar(ref int valor, List<string> eventos, int limite) {
    valor++;
    if (valor == limite) {
        eventos.Add($"limite alcanzado en {limite}");
    }
}
for (int i = 0; i < 10; i++) {
    Incrementar(ref valor, eventos, 10);
}
Console.WriteLine($"evento: {eventos[0]}");`,
    },
    output: 'evento: limite alcanzado en 10',
  },
  {
    category: 1,
    categoryTitle: 'Bloques de construccion',
    id: 'd5',
    title: 'Factory',
    description: 'Encapsula la creacion de objetos complejos en una funcion dedicada.',
    code: {
      php: `<?php
function crear($tipo, $a, $b) {
    if ($tipo === "suma") return ["tipo" => "suma", "resultado" => $a + $b];
    if ($tipo === "multi") return ["tipo" => "multi", "resultado" => $a * $b];
    return null;
}
$s = crear("suma", 5, 3);
$m = crear("multi", 5, 3);
echo "suma: " . $s["resultado"] . "\\n";
echo "multi: " . $m["resultado"];`,
      python: `def crear(tipo, a, b):
    if tipo == "suma":
        return {"tipo": "suma", "resultado": a + b}
    if tipo == "multi":
        return {"tipo": "multi", "resultado": a * b}
    return None

s = crear("suma", 5, 3)
m = crear("multi", 5, 3)
print(f"suma: {s['resultado']}")
print(f"multi: {m['resultado']}")`,
      javascript: `function crear(tipo, a, b) {
  if (tipo === "suma") return { tipo: "suma", resultado: a + b };
  if (tipo === "multi") return { tipo: "multi", resultado: a * b };
  return null;
}
const s = crear("suma", 5, 3);
const m = crear("multi", 5, 3);
console.log("suma: " + s.resultado);
console.log("multi: " + m.resultado);`,
      typescript: `function crear(tipo: string, a: number, b: number): { tipo: string; resultado: number } | null {
  if (tipo === "suma") return { tipo: "suma", resultado: a + b };
  if (tipo === "multi") return { tipo: "multi", resultado: a * b };
  return null;
}
const s = crear("suma", 5, 3);
const m = crear("multi", 5, 3);
console.log("suma: " + s!.resultado);
console.log("multi: " + m!.resultado);`,
      java: `static int[] crear(String tipo, int a, int b) {
    if (tipo.equals("suma")) return new int[]{a + b};
    if (tipo.equals("multi")) return new int[]{a * b};
    return null;
}
int[] s = crear("suma", 5, 3);
int[] m = crear("multi", 5, 3);
System.out.println("suma: " + s[0]);
System.out.println("multi: " + m[0]);`,
      csharp: `static (string tipo, int resultado) Crear(string tipo, int a, int b) {
    if (tipo == "suma") return ("suma", a + b);
    if (tipo == "multi") return ("multi", a * b);
    return ("", 0);
}
var s = Crear("suma", 5, 3);
var m = Crear("multi", 5, 3);
Console.WriteLine($"suma: {s.resultado}");
Console.WriteLine($"multi: {m.resultado}");`,
    },
    output: 'suma: 8\nmulti: 15',
  },
  {
    category: 1,
    categoryTitle: 'Bloques de construccion',
    id: 'd6',
    title: 'Repository (interfaz)',
    description: 'Abstraccion para almacenar y recuperar agregados. Interfaz sin base de datos.',
    code: {
      php: `<?php
function crearRepositorio() {
    return [];
}
function guardar(&$repo, $id, $valor) {
    $repo[$id] = $valor;
}
function obtener($repo, $id) {
    return $repo[$id] ?? null;
}
$repo = crearRepositorio();
guardar($repo, 1, 42);
echo "obtener(1): " . obtener($repo, 1);`,
      python: `def crear_repositorio():
    return {}

def guardar(repo, id, valor):
    repo[id] = valor

def obtener(repo, id):
    return repo.get(id)

repo = crear_repositorio()
guardar(repo, 1, 42)
print(f"obtener(1): {obtener(repo, 1)}")`,
      javascript: `function crearRepositorio() {
  return {};
}
function guardar(repo, id, valor) {
  repo[id] = valor;
}
function obtener(repo, id) {
  return repo[id] ?? null;
}
const repo = crearRepositorio();
guardar(repo, 1, 42);
console.log("obtener(1): " + obtener(repo, 1));`,
      typescript: `function crearRepositorio(): Record<number, number> {
  return {};
}
function guardar(repo: Record<number, number>, id: number, valor: number): void {
  repo[id] = valor;
}
function obtener(repo: Record<number, number>, id: number): number | null {
  return repo[id] ?? null;
}
const repo = crearRepositorio();
guardar(repo, 1, 42);
console.log("obtener(1): " + obtener(repo, 1));`,
      java: `HashMap<Integer, Integer> repo = new HashMap<>();

static void guardar(HashMap<Integer, Integer> repo, int id, int valor) {
    repo.put(id, valor);
}
static int obtener(HashMap<Integer, Integer> repo, int id) {
    return repo.getOrDefault(id, 0);
}
guardar(repo, 1, 42);
System.out.println("obtener(1): " + obtener(repo, 1));`,
      csharp: `var repo = new Dictionary<int, int>();

static void Guardar(Dictionary<int, int> repo, int id, int valor) {
    repo[id] = valor;
}
static int Obtener(Dictionary<int, int> repo, int id) {
    return repo.ContainsKey(id) ? repo[id] : 0;
}
Guardar(repo, 1, 42);
Console.WriteLine($"obtener(1): {Obtener(repo, 1)}");`,
    },
    output: 'obtener(1): 42',
  },
  // ============= 2. Capas de la arquitectura =============
  {
    category: 2,
    categoryTitle: 'Capas de la arquitectura',
    id: 'd7',
    title: 'Domain Layer',
    description: 'Logica pura del dominio, sin dependencias de infraestructura. Solo matematica.',
    code: {
      php: `<?php
function sumar($a, $b) { return $a + $b; }
function restar($a, $b) { return $a - $b; }
function multiplicar($a, $b) { return $a * $b; }

$r1 = sumar(3, 7);
$r2 = restar($r1, 4);
$r3 = multiplicar($r2, 2);
echo "3+7=$r1\\n";
echo "10-4=$r2\\n";
echo "6*2=$r3";`,
      python: `def sumar(a, b): return a + b
def restar(a, b): return a - b
def multiplicar(a, b): return a * b

r1 = sumar(3, 7)
r2 = restar(r1, 4)
r3 = multiplicar(r2, 2)
print(f"3+7={r1}")
print(f"10-4={r2}")
print(f"6*2={r3}")`,
      javascript: `function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }

const r1 = sumar(3, 7);
const r2 = restar(r1, 4);
const r3 = multiplicar(r2, 2);
console.log("3+7=" + r1);
console.log("10-4=" + r2);
console.log("6*2=" + r3);`,
      typescript: `function sumar(a: number, b: number): number { return a + b; }
function restar(a: number, b: number): number { return a - b; }
function multiplicar(a: number, b: number): number { return a * b; }

const r1 = sumar(3, 7);
const r2 = restar(r1, 4);
const r3 = multiplicar(r2, 2);
console.log("3+7=" + r1);
console.log("10-4=" + r2);
console.log("6*2=" + r3);`,
      java: `static int sumar(int a, int b) { return a + b; }
static int restar(int a, int b) { return a - b; }
static int multiplicar(int a, int b) { return a * b; }

int r1 = sumar(3, 7);
int r2 = restar(r1, 4);
int r3 = multiplicar(r2, 2);
System.out.println("3+7=" + r1);
System.out.println("10-4=" + r2);
System.out.println("6*2=" + r3);`,
      csharp: `static int Sumar(int a, int b) => a + b;
static int Restar(int a, int b) => a - b;
static int Multiplicar(int a, int b) => a * b;

var r1 = Sumar(3, 7);
var r2 = Restar(r1, 4);
var r3 = Multiplicar(r2, 2);
Console.WriteLine($"3+7={r1}");
Console.WriteLine($"10-4={r2}");
Console.WriteLine($"6*2={r3}");`,
    },
    output: '3+7=10\n10-4=6\n6*2=12',
  },
  {
    category: 2,
    categoryTitle: 'Capas de la arquitectura',
    id: 'd8',
    title: 'Application Layer',
    description: 'Orquesta casos de uso: llama al dominio, guarda resultados y los retorna.',
    code: {
      php: `<?php
function sumar($a, $b) { return $a + $b; }
function guardar(&$repo, $id, $val) { $repo[$id] = $val; }

function casoDeUso(&$repo, $a, $b, $id) {
    $resultado = sumar($a, $b);
    guardar($repo, $id, $resultado);
    return $resultado;
}
$repo = [];
$r = casoDeUso($repo, 7, 8, 1);
echo "resultado: $r\\n";
echo "guardado con id: 1";`,
      python: `def sumar(a, b): return a + b
def guardar(repo, id, val): repo[id] = val

def caso_de_uso(repo, a, b, id):
    resultado = sumar(a, b)
    guardar(repo, id, resultado)
    return resultado

repo = {}
r = caso_de_uso(repo, 7, 8, 1)
print(f"resultado: {r}")
print("guardado con id: 1")`,
      javascript: `function sumar(a, b) { return a + b; }
function guardar(repo, id, val) { repo[id] = val; }

function casoDeUso(repo, a, b, id) {
  const resultado = sumar(a, b);
  guardar(repo, id, resultado);
  return resultado;
}
const repo = {};
const r = casoDeUso(repo, 7, 8, 1);
console.log("resultado: " + r);
console.log("guardado con id: 1");`,
      typescript: `function sumar(a: number, b: number): number { return a + b; }
function guardar(repo: Record<number, number>, id: number, val: number): void { repo[id] = val; }

function casoDeUso(repo: Record<number, number>, a: number, b: number, id: number): number {
  const resultado = sumar(a, b);
  guardar(repo, id, resultado);
  return resultado;
}
const repo: Record<number, number> = {};
const r = casoDeUso(repo, 7, 8, 1);
console.log("resultado: " + r);
console.log("guardado con id: 1");`,
      java: `static int sumar(int a, int b) { return a + b; }
static void guardar(HashMap<Integer, Integer> repo, int id, int val) { repo.put(id, val); }

static int casoDeUso(HashMap<Integer, Integer> repo, int a, int b, int id) {
    int resultado = sumar(a, b);
    guardar(repo, id, resultado);
    return resultado;
}
HashMap<Integer, Integer> repo = new HashMap<>();
int r = casoDeUso(repo, 7, 8, 1);
System.out.println("resultado: " + r);
System.out.println("guardado con id: 1");`,
      csharp: `static int Sumar(int a, int b) => a + b;
static void Guardar(Dictionary<int, int> repo, int id, int val) { repo[id] = val; }

static int CasoDeUso(Dictionary<int, int> repo, int a, int b, int id) {
    var resultado = Sumar(a, b);
    Guardar(repo, id, resultado);
    return resultado;
}
var repo = new Dictionary<int, int>();
var r = CasoDeUso(repo, 7, 8, 1);
Console.WriteLine($"resultado: {r}");
Console.WriteLine("guardado con id: 1");`,
    },
    output: 'resultado: 15\nguardado con id: 1',
  },
  {
    category: 2,
    categoryTitle: 'Capas de la arquitectura',
    id: 'd9',
    title: 'Infrastructure Layer',
    description: 'Implementa los puertos. Adaptadores concretos que la capa de aplicacion consume.',
    code: {
      php: `<?php
function crearRepoMemoria() { return []; }
function guardar(&$repo, $id, $val) { $repo[$id] = $val; }
function obtener($repo, $id) { return $repo[$id] ?? null; }

$repo = crearRepoMemoria();
guardar($repo, 1, 42);
echo "guardado: 42\\n";
echo "recuperado: " . obtener($repo, 1);`,
      python: `def crear_repo_memoria():
    return {}

def guardar(repo, id, val):
    repo[id] = val

def obtener(repo, id):
    return repo.get(id)

repo = crear_repo_memoria()
guardar(repo, 1, 42)
print("guardado: 42")
print(f"recuperado: {obtener(repo, 1)}")`,
      javascript: `function crearRepoMemoria() { return {}; }
function guardar(repo, id, val) { repo[id] = val; }
function obtener(repo, id) { return repo[id] ?? null; }

const repo = crearRepoMemoria();
guardar(repo, 1, 42);
console.log("guardado: 42");
console.log("recuperado: " + obtener(repo, 1));`,
      typescript: `function crearRepoMemoria(): Record<number, number> { return {}; }
function guardar(repo: Record<number, number>, id: number, val: number): void { repo[id] = val; }
function obtener(repo: Record<number, number>, id: number): number | null { return repo[id] ?? null; }

const repo = crearRepoMemoria();
guardar(repo, 1, 42);
console.log("guardado: 42");
console.log("recuperado: " + obtener(repo, 1));`,
      java: `HashMap<Integer, Integer> repo = new HashMap<>();

static void guardar(HashMap<Integer, Integer> repo, int id, int val) {
    repo.put(id, val);
}
static int obtener(HashMap<Integer, Integer> repo, int id) {
    return repo.getOrDefault(id, 0);
}
guardar(repo, 1, 42);
System.out.println("guardado: 42");
System.out.println("recuperado: " + obtener(repo, 1));`,
      csharp: `var repo = new Dictionary<int, int>();

static void Guardar(Dictionary<int, int> repo, int id, int val) {
    repo[id] = val;
}
static int Obtener(Dictionary<int, int> repo, int id) {
    return repo.ContainsKey(id) ? repo[id] : 0;
}
Guardar(repo, 1, 42);
Console.WriteLine("guardado: 42");
Console.WriteLine($"recuperado: {Obtener(repo, 1)}");`,
    },
    output: 'guardado: 42\nrecuperado: 42',
  },
  {
    category: 2,
    categoryTitle: 'Capas de la arquitectura',
    id: 'd10',
    title: 'Anti-corruption Layer',
    description: 'Traduce entre tu dominio y sistemas externos, protegiendo tu modelo.',
    code: {
      php: `<?php
function sistemaExterno() {
    return ["result" => "25", "status" => "ok"];
}
function traducir($externo) {
    return [
        "valor" => intval($externo["result"]),
        "exito" => $externo["status"] === "ok"
    ];
}
$externo = sistemaExterno();
$dominio = traducir($externo);
echo "valor: " . $dominio["valor"] . "\\n";
echo "exito: " . ($dominio["exito"] ? "true" : "true");`,
      python: `def sistema_externo():
    return {"result": "25", "status": "ok"}

def traducir(externo):
    return {
        "valor": int(externo["result"]),
        "exito": externo["status"] == "ok"
    }

externo = sistema_externo()
dominio = traducir(externo)
print(f"valor: {dominio['valor']}")
print(f"exito: {str(dominio['exito']).lower()}")`,
      javascript: `function sistemaExterno() {
  return { result: "25", status: "ok" };
}
function traducir(externo) {
  return {
    valor: parseInt(externo.result),
    exito: externo.status === "ok"
  };
}
const externo = sistemaExterno();
const dominio = traducir(externo);
console.log("valor: " + dominio.valor);
console.log("exito: " + dominio.exito);`,
      typescript: `function sistemaExterno(): { result: string; status: string } {
  return { result: "25", status: "ok" };
}
function traducir(externo: { result: string; status: string }): { valor: number; exito: boolean } {
  return {
    valor: parseInt(externo.result),
    exito: externo.status === "ok"
  };
}
const externo = sistemaExterno();
const dominio = traducir(externo);
console.log("valor: " + dominio.valor);
console.log("exito: " + dominio.exito);`,
      java: `static HashMap<String, Object> sistemaExterno() {
    HashMap<String, Object> m = new HashMap<>();
    m.put("result", "25");
    m.put("status", "ok");
    return m;
}
static int[] traducir(HashMap<String, Object> ext) {
    int valor = Integer.parseInt((String) ext.get("result"));
    int exito = ext.get("status").equals("ok") ? 1 : 0;
    return new int[]{valor, exito};
}
var ext = sistemaExterno();
var dom = traducir(ext);
System.out.println("valor: " + dom[0]);
System.out.println("exito: " + (dom[1] == 1 ? "true" : "false"));`,
      csharp: `static (string result, string status) SistemaExterno() {
    return ("25", "ok");
}
static (int valor, bool exito) Traducir((string result, string status) ext) {
    return (int.Parse(ext.result), ext.status == "ok");
}
var ext = SistemaExterno();
var dom = Traducir(ext);
Console.WriteLine($"valor: {dom.valor}");
Console.WriteLine($"exito: {dom.exito.ToString().ToLower()}");`,
    },
    output: 'valor: 25\nexito: true',
  },
  // ============= 3. Patrones estrategicos =============
  {
    category: 3,
    categoryTitle: 'Patrones estrategicos',
    id: 'd11',
    title: 'Bounded Context',
    description: 'La misma palabra significa cosas distintas en contextos diferentes.',
    code: {
      php: `<?php
function puntoGeometria($x, $y) {
    return ["x" => $x, "y" => $y];
}
function puntoPuntaje($valor) {
    return ["valor" => $valor];
}
$geo = puntoGeometria(3, 4);
$puntaje = puntoPuntaje(100);
echo "geo: Punto(" . $geo["x"] . "," . $geo["y"] . ")\\n";
echo "puntaje: Punto(" . $puntaje["valor"] . ")";`,
      python: `def punto_geometria(x, y):
    return {"x": x, "y": y}

def punto_puntaje(valor):
    return {"valor": valor}

geo = punto_geometria(3, 4)
puntaje = punto_puntaje(100)
print(f"geo: Punto({geo['x']},{geo['y']})")
print(f"puntaje: Punto({puntaje['valor']})")`,
      javascript: `function puntoGeometria(x, y) {
  return { x, y };
}
function puntoPuntaje(valor) {
  return { valor };
}
const geo = puntoGeometria(3, 4);
const puntaje = puntoPuntaje(100);
console.log("geo: Punto(" + geo.x + "," + geo.y + ")");
console.log("puntaje: Punto(" + puntaje.valor + ")");`,
      typescript: `function puntoGeometria(x: number, y: number): { x: number; y: number } {
  return { x, y };
}
function puntoPuntaje(valor: number): { valor: number } {
  return { valor };
}
const geo = puntoGeometria(3, 4);
const puntaje = puntoPuntaje(100);
console.log("geo: Punto(" + geo.x + "," + geo.y + ")");
console.log("puntaje: Punto(" + puntaje.valor + ")");`,
      java: `static int[] puntoGeometria(int x, int y) { return new int[]{x, y}; }
static int[] puntoPuntaje(int valor) { return new int[]{valor}; }

int[] geo = puntoGeometria(3, 4);
int[] puntaje = puntoPuntaje(100);
System.out.println("geo: Punto(" + geo[0] + "," + geo[1] + ")");
System.out.println("puntaje: Punto(" + puntaje[0] + ")");`,
      csharp: `static (int x, int y) PuntoGeometria(int x, int y) => (x, y);
static int PuntoPuntaje(int valor) => valor;

var geo = PuntoGeometria(3, 4);
var puntaje = PuntoPuntaje(100);
Console.WriteLine($"geo: Punto({geo.x},{geo.y})");
Console.WriteLine($"puntaje: Punto({puntaje})");`,
    },
    output: 'geo: Punto(3,4)\npuntaje: Punto(100)',
  },
  {
    category: 3,
    categoryTitle: 'Patrones estrategicos',
    id: 'd12',
    title: 'Ubiquitous Language',
    description: 'Todos usan los mismos terminos del dominio. El codigo refleja el lenguaje del negocio.',
    code: {
      php: `<?php
function calcularArea($radio) {
    return round(M_PI * $radio ** 2, 2);
}
function calcularPerimetro($radio) {
    return round(2 * M_PI * $radio, 2);
}
$r = 5;
echo "area: " . calcularArea($r) . "\\n";
echo "perimetro: " . calcularPerimetro($r);`,
      python: `import math

def calcular_area(radio):
    return round(math.pi * radio ** 2, 2)

def calcular_perimetro(radio):
    return round(2 * math.pi * radio, 2)

r = 5
print(f"area: {calcular_area(r)}")
print(f"perimetro: {calcular_perimetro(r)}")`,
      javascript: `function calcularArea(radio) {
  return Math.round(Math.PI * radio ** 2 * 100) / 100;
}
function calcularPerimetro(radio) {
  return Math.round(2 * Math.PI * radio * 100) / 100;
}
const r = 5;
console.log("area: " + calcularArea(r));
console.log("perimetro: " + calcularPerimetro(r));`,
      typescript: `function calcularArea(radio: number): number {
  return Math.round(Math.PI * radio ** 2 * 100) / 100;
}
function calcularPerimetro(radio: number): number {
  return Math.round(2 * Math.PI * radio * 100) / 100;
}
const r = 5;
console.log("area: " + calcularArea(r));
console.log("perimetro: " + calcularPerimetro(r));`,
      java: `static double calcularArea(int radio) {
    return Math.round(Math.PI * radio * radio * 100.0) / 100.0;
}
static double calcularPerimetro(int radio) {
    return Math.round(2 * Math.PI * radio * 100.0) / 100.0;
}
System.out.println("area: " + calcularArea(5));
System.out.println("perimetro: " + calcularPerimetro(5));`,
      csharp: `static double CalcularArea(int radio) {
    return Math.Round(Math.PI * radio * radio, 2);
}
static double CalcularPerimetro(int radio) {
    return Math.Round(2 * Math.PI * radio, 2);
}
Console.WriteLine($"area: {CalcularArea(5)}");
Console.WriteLine($"perimetro: {CalcularPerimetro(5)}");`,
    },
    output: 'area: 78.54\nperimetro: 31.42',
  },
  {
    category: 3,
    categoryTitle: 'Patrones estrategicos',
    id: 'd13',
    title: 'Context Map',
    description: 'Como se relacionan los contextos acotados entre si. Traduccion entre contextos.',
    code: {
      php: `<?php
function contextoCalculo($a, $b) {
    return $a + $b;
}
function contextoFormato($resultado) {
    return "El resultado es $resultado";
}
$calculo = contextoCalculo(20, 22);
$formato = contextoFormato($calculo);
echo "calculo: $calculo\\n";
echo "formato: $formato";`,
      python: `def contexto_calculo(a, b):
    return a + b

def contexto_formato(resultado):
    return f"El resultado es {resultado}"

calculo = contexto_calculo(20, 22)
formato = contexto_formato(calculo)
print(f"calculo: {calculo}")
print(f"formato: {formato}")`,
      javascript: `function contextoCalculo(a, b) {
  return a + b;
}
function contextoFormato(resultado) {
  return "El resultado es " + resultado;
}
const calculo = contextoCalculo(20, 22);
const formato = contextoFormato(calculo);
console.log("calculo: " + calculo);
console.log("formato: " + formato);`,
      typescript: `function contextoCalculo(a: number, b: number): number {
  return a + b;
}
function contextoFormato(resultado: number): string {
  return "El resultado es " + resultado;
}
const calculo = contextoCalculo(20, 22);
const formato = contextoFormato(calculo);
console.log("calculo: " + calculo);
console.log("formato: " + formato);`,
      java: `static int contextoCalculo(int a, int b) { return a + b; }
static String contextoFormato(int resultado) {
    return "El resultado es " + resultado;
}
int calculo = contextoCalculo(20, 22);
String formato = contextoFormato(calculo);
System.out.println("calculo: " + calculo);
System.out.println("formato: " + formato);`,
      csharp: `static int ContextoCalculo(int a, int b) => a + b;
static string ContextoFormato(int resultado) => $"El resultado es {resultado}";

var calculo = ContextoCalculo(20, 22);
var formato = ContextoFormato(calculo);
Console.WriteLine($"calculo: {calculo}");
Console.WriteLine($"formato: {formato}");`,
    },
    output: 'calculo: 42\nformato: El resultado es 42',
  },
  {
    category: 3,
    categoryTitle: 'Patrones estrategicos',
    id: 'd14',
    title: 'Specification Pattern',
    description: 'Encapsula reglas de negocio como objetos combinables que evaluan condiciones.',
    code: {
      php: `<?php
function esMayor($limite) {
    return function($n) use ($limite) { return $n > $limite; };
}
function esPar() {
    return function($n) { return $n % 2 === 0; };
}
function ambas($spec1, $spec2) {
    return function($n) use ($spec1, $spec2) {
        return $spec1($n) && $spec2($n);
    };
}
$spec = ambas(esMayor(10), esPar());
echo "12: " . ($spec(12) ? "cumple" : "no cumple") . "\\n";
echo "11: " . ($spec(11) ? "cumple" : "no cumple") . "\\n";
echo "8: " . ($spec(8) ? "cumple" : "no cumple");`,
      python: `def es_mayor(limite):
    return lambda n: n > limite

def es_par():
    return lambda n: n % 2 == 0

def ambas(spec1, spec2):
    return lambda n: spec1(n) and spec2(n)

spec = ambas(es_mayor(10), es_par())
print(f"12: {'cumple' if spec(12) else 'no cumple'}")
print(f"11: {'cumple' if spec(11) else 'no cumple'}")
print(f"8: {'cumple' if spec(8) else 'no cumple'}")`,
      javascript: `function esMayor(limite) {
  return (n) => n > limite;
}
function esPar() {
  return (n) => n % 2 === 0;
}
function ambas(spec1, spec2) {
  return (n) => spec1(n) && spec2(n);
}
const spec = ambas(esMayor(10), esPar());
console.log("12: " + (spec(12) ? "cumple" : "no cumple"));
console.log("11: " + (spec(11) ? "cumple" : "no cumple"));
console.log("8: " + (spec(8) ? "cumple" : "no cumple"));`,
      typescript: `function esMayor(limite: number): (n: number) => boolean {
  return (n) => n > limite;
}
function esPar(): (n: number) => boolean {
  return (n) => n % 2 === 0;
}
function ambas(spec1: (n: number) => boolean, spec2: (n: number) => boolean): (n: number) => boolean {
  return (n) => spec1(n) && spec2(n);
}
const spec = ambas(esMayor(10), esPar());
console.log("12: " + (spec(12) ? "cumple" : "no cumple"));
console.log("11: " + (spec(11) ? "cumple" : "no cumple"));
console.log("8: " + (spec(8) ? "cumple" : "no cumple"));`,
      java: `import java.util.function.Predicate;
Predicate<Integer> esMayor = n -> n > 10;
Predicate<Integer> esPar = n -> n % 2 == 0;
Predicate<Integer> spec = esMayor.and(esPar);

System.out.println("12: " + (spec.test(12) ? "cumple" : "no cumple"));
System.out.println("11: " + (spec.test(11) ? "cumple" : "no cumple"));
System.out.println("8: " + (spec.test(8) ? "cumple" : "no cumple"));`,
      csharp: `Func<int, bool> esMayor = n => n > 10;
Func<int, bool> esPar = n => n % 2 == 0;
Func<int, bool> spec = n => esMayor(n) && esPar(n);

Console.WriteLine("12: " + (spec(12) ? "cumple" : "no cumple"));
Console.WriteLine("11: " + (spec(11) ? "cumple" : "no cumple"));
Console.WriteLine("8: " + (spec(8) ? "cumple" : "no cumple"));`,
    },
    output: '12: cumple\n11: no cumple\n8: no cumple',
  },
  {
    category: 3,
    categoryTitle: 'Patrones estrategicos',
    id: 'd15',
    title: 'Domain Service',
    description: 'Logica que no pertenece a ninguna entidad. Opera sobre multiples objetos del dominio.',
    code: {
      php: `<?php
function crearPunto($x, $y) {
    return ["x" => $x, "y" => $y];
}
function calcularDistancia($p1, $p2) {
    $dx = $p2["x"] - $p1["x"];
    $dy = $p2["y"] - $p1["y"];
    return sqrt($dx ** 2 + $dy ** 2);
}
$a = crearPunto(0, 0);
$b = crearPunto(3, 4);
echo "distancia: " . intval(calcularDistancia($a, $b));`,
      python: `import math

def crear_punto(x, y):
    return {"x": x, "y": y}

def calcular_distancia(p1, p2):
    dx = p2["x"] - p1["x"]
    dy = p2["y"] - p1["y"]
    return math.sqrt(dx ** 2 + dy ** 2)

a = crear_punto(0, 0)
b = crear_punto(3, 4)
print(f"distancia: {int(calcular_distancia(a, b))}")`,
      javascript: `function crearPunto(x, y) {
  return { x, y };
}
function calcularDistancia(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx ** 2 + dy ** 2);
}
const a = crearPunto(0, 0);
const b = crearPunto(3, 4);
console.log("distancia: " + calcularDistancia(a, b));`,
      typescript: `function crearPunto(x: number, y: number): { x: number; y: number } {
  return { x, y };
}
function calcularDistancia(p1: { x: number; y: number }, p2: { x: number; y: number }): number {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx ** 2 + dy ** 2);
}
const a = crearPunto(0, 0);
const b = crearPunto(3, 4);
console.log("distancia: " + calcularDistancia(a, b));`,
      java: `static int[] crearPunto(int x, int y) { return new int[]{x, y}; }
static double calcularDistancia(int[] p1, int[] p2) {
    int dx = p2[0] - p1[0];
    int dy = p2[1] - p1[1];
    return Math.sqrt(dx * dx + dy * dy);
}
int[] a = crearPunto(0, 0);
int[] b = crearPunto(3, 4);
System.out.println("distancia: " + (int) calcularDistancia(a, b));`,
      csharp: `static (int x, int y) CrearPunto(int x, int y) => (x, y);
static double CalcularDistancia((int x, int y) p1, (int x, int y) p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.Sqrt(dx * dx + dy * dy);
}
var a = CrearPunto(0, 0);
var b = CrearPunto(3, 4);
Console.WriteLine($"distancia: {(int)CalcularDistancia(a, b)}");`,
    },
    output: 'distancia: 5',
  },
];
