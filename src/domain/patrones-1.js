// Patrones de diseno - Parte 1: Creacionales (5) y Estructurales (7)

export const patrones1 = [
  // ============= 1. Creacionales =============
  {
    category: 1,
    categoryTitle: 'Creacionales',
    id: 'p1',
    title: 'Singleton',
    description: 'Garantiza que una clase tenga una unica instancia compartida en todo el programa',
    code: {
      php: `<?php
function getContador() {
    static $instancia = null;
    if ($instancia === null) {
        $instancia = (object)["valor" => 0];
    }
    return $instancia;
}
$c1 = getContador();
$c1->valor++;
$c2 = getContador();
$c2->valor++;
$c3 = getContador();
$c3->valor++;
echo $c3->valor;`,
      python: `class Contador:
    _instancia = None
    def __new__(cls):
        if cls._instancia is None:
            cls._instancia = super().__new__(cls)
            cls._instancia.valor = 0
        return cls._instancia

c1 = Contador()
c1.valor += 1
c2 = Contador()
c2.valor += 1
c3 = Contador()
c3.valor += 1
print(c3.valor)`,
      javascript: `const Contador = (() => {
  let instancia = null;
  return function() {
    if (!instancia) {
      instancia = { valor: 0 };
    }
    return instancia;
  };
})();

const c1 = Contador();
c1.valor++;
const c2 = Contador();
c2.valor++;
const c3 = Contador();
c3.valor++;
console.log(c3.valor);`,
      typescript: `const Contador = (() => {
  let instancia: { valor: number } | null = null;
  return function(): { valor: number } {
    if (!instancia) {
      instancia = { valor: 0 };
    }
    return instancia;
  };
})();

const c1 = Contador();
c1.valor++;
const c2 = Contador();
c2.valor++;
const c3 = Contador();
c3.valor++;
console.log(c3.valor);`,
      java: `class Contador {
    private static Contador instancia = null;
    int valor = 0;
    private Contador() {}
    static Contador obtener() {
        if (instancia == null) instancia = new Contador();
        return instancia;
    }
}
Contador c1 = Contador.obtener();
c1.valor++;
Contador c2 = Contador.obtener();
c2.valor++;
Contador c3 = Contador.obtener();
c3.valor++;
System.out.println(c3.valor);`,
      csharp: `class Contador {
    private static Contador instancia = null;
    public int Valor = 0;
    private Contador() {}
    public static Contador Obtener() {
        if (instancia == null) instancia = new Contador();
        return instancia;
    }
}
var c1 = Contador.Obtener();
c1.Valor++;
var c2 = Contador.Obtener();
c2.Valor++;
var c3 = Contador.Obtener();
c3.Valor++;
Console.WriteLine(c3.Valor);`,
    },
    output: '3',
  },
  {
    category: 1,
    categoryTitle: 'Creacionales',
    id: 'p2',
    title: 'Factory Method',
    description: 'Delega la creacion de objetos a una funcion que decide cual clase instanciar',
    code: {
      php: `<?php
function sumador() { return function($a, $b) { return $a + $b; }; }
function multiplicador() { return function($a, $b) { return $a * $b; }; }
function crearOperacion($tipo) {
    if ($tipo === "suma") return sumador();
    if ($tipo === "multi") return multiplicador();
}
$s = crearOperacion("suma");
$m = crearOperacion("multi");
echo $s(3, 4) . "\\n";
echo $m(3, 4);`,
      python: `def sumador(a, b): return a + b
def multiplicador(a, b): return a * b

def crear_operacion(tipo):
    if tipo == "suma": return sumador
    if tipo == "multi": return multiplicador

s = crear_operacion("suma")
m = crear_operacion("multi")
print(s(3, 4))
print(m(3, 4))`,
      javascript: `function sumador(a, b) { return a + b; }
function multiplicador(a, b) { return a * b; }

function crearOperacion(tipo) {
  if (tipo === "suma") return sumador;
  if (tipo === "multi") return multiplicador;
}

const s = crearOperacion("suma");
const m = crearOperacion("multi");
console.log(s(3, 4));
console.log(m(3, 4));`,
      typescript: `function sumador(a: number, b: number): number { return a + b; }
function multiplicador(a: number, b: number): number { return a * b; }

function crearOperacion(tipo: string): (a: number, b: number) => number {
  if (tipo === "suma") return sumador;
  return multiplicador;
}

const s = crearOperacion("suma");
const m = crearOperacion("multi");
console.log(s(3, 4));
console.log(m(3, 4));`,
      java: `interface Operacion {
    int calcular(int a, int b);
}
class Sumador implements Operacion {
    public int calcular(int a, int b) { return a + b; }
}
class Multiplicador implements Operacion {
    public int calcular(int a, int b) { return a * b; }
}
static Operacion crearOperacion(String tipo) {
    if (tipo.equals("suma")) return new Sumador();
    return new Multiplicador();
}
Operacion s = crearOperacion("suma");
Operacion m = crearOperacion("multi");
System.out.println(s.calcular(3, 4));
System.out.println(m.calcular(3, 4));`,
      csharp: `Func<int,int,int> Sumador = (a, b) => a + b;
Func<int,int,int> Multiplicador = (a, b) => a * b;

Func<int,int,int> CrearOperacion(string tipo) {
    if (tipo == "suma") return Sumador;
    return Multiplicador;
}
var s = CrearOperacion("suma");
var m = CrearOperacion("multi");
Console.WriteLine(s(3, 4));
Console.WriteLine(m(3, 4));`,
    },
    output: '7\n12',
  },
  {
    category: 1,
    categoryTitle: 'Creacionales',
    id: 'p3',
    title: 'Abstract Factory',
    description: 'Crea familias de objetos relacionados sin especificar sus clases concretas',
    code: {
      php: `<?php
function fabricaBasica() {
    return [
        "suma" => function($a, $b) { return $a + $b; },
        "resta" => function($a, $b) { return $a - $b; },
    ];
}
$fabrica = fabricaBasica();
$suma = $fabrica["suma"];
$resta = $fabrica["resta"];
echo $suma(10, 3) . "\\n";
echo $resta(10, 3);`,
      python: `def fabrica_basica():
    def suma(a, b): return a + b
    def resta(a, b): return a - b
    return {"suma": suma, "resta": resta}

fabrica = fabrica_basica()
print(fabrica["suma"](10, 3))
print(fabrica["resta"](10, 3))`,
      javascript: `function fabricaBasica() {
  return {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
  };
}
const fabrica = fabricaBasica();
console.log(fabrica.suma(10, 3));
console.log(fabrica.resta(10, 3));`,
      typescript: `interface Fabrica {
  suma: (a: number, b: number) => number;
  resta: (a: number, b: number) => number;
}
function fabricaBasica(): Fabrica {
  return {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
  };
}
const fabrica = fabricaBasica();
console.log(fabrica.suma(10, 3));
console.log(fabrica.resta(10, 3));`,
      java: `interface Fabrica {
    int suma(int a, int b);
    int resta(int a, int b);
}
class FabricaBasica implements Fabrica {
    public int suma(int a, int b) { return a + b; }
    public int resta(int a, int b) { return a - b; }
}
Fabrica fabrica = new FabricaBasica();
System.out.println(fabrica.suma(10, 3));
System.out.println(fabrica.resta(10, 3));`,
      csharp: `interface IFabrica {
    int Suma(int a, int b);
    int Resta(int a, int b);
}
class FabricaBasica : IFabrica {
    public int Suma(int a, int b) => a + b;
    public int Resta(int a, int b) => a - b;
}
IFabrica fabrica = new FabricaBasica();
Console.WriteLine(fabrica.Suma(10, 3));
Console.WriteLine(fabrica.Resta(10, 3));`,
    },
    output: '13\n7',
  },
  {
    category: 1,
    categoryTitle: 'Creacionales',
    id: 'p4',
    title: 'Builder',
    description: 'Construye objetos complejos paso a paso encadenando metodos',
    code: {
      php: `<?php
function crearBuilder($base) {
    $valor = $base;
    $ops = [];
    $b = [];
    $b["sumar"] = function($n) use (&$ops, &$b) {
        $ops[] = function($v) use ($n) { return $v + $n; };
        return $b;
    };
    $b["multiplicar"] = function($n) use (&$ops, &$b) {
        $ops[] = function($v) use ($n) { return $v * $n; };
        return $b;
    };
    $b["resultado"] = function() use (&$valor, &$ops) {
        foreach ($ops as $op) $valor = $op($valor);
        return $valor;
    };
    return $b;
}
$r = crearBuilder(10)["sumar"](5)["multiplicar"](2)["resultado"]();
echo $r;`,
      python: `class Builder:
    def __init__(self, base):
        self.valor = base
    def sumar(self, n):
        self.valor += n
        return self
    def multiplicar(self, n):
        self.valor *= n
        return self
    def resultado(self):
        return self.valor

r = Builder(10).sumar(5).multiplicar(2).resultado()
print(r)`,
      javascript: `function crearBuilder(base) {
  let valor = base;
  return {
    sumar(n) { valor += n; return this; },
    multiplicar(n) { valor *= n; return this; },
    resultado() { return valor; },
  };
}
const r = crearBuilder(10).sumar(5).multiplicar(2).resultado();
console.log(r);`,
      typescript: `interface Builder {
  sumar(n: number): Builder;
  multiplicar(n: number): Builder;
  resultado(): number;
}
function crearBuilder(base: number): Builder {
  let valor = base;
  return {
    sumar(n) { valor += n; return this; },
    multiplicar(n) { valor *= n; return this; },
    resultado() { return valor; },
  };
}
const r = crearBuilder(10).sumar(5).multiplicar(2).resultado();
console.log(r);`,
      java: `class Builder {
    int valor;
    Builder(int base) { valor = base; }
    Builder sumar(int n) { valor += n; return this; }
    Builder multiplicar(int n) { valor *= n; return this; }
    int resultado() { return valor; }
}
int r = new Builder(10).sumar(5).multiplicar(2).resultado();
System.out.println(r);`,
      csharp: `class Builder {
    int valor;
    public Builder(int b) { valor = b; }
    public Builder Sumar(int n) { valor += n; return this; }
    public Builder Multiplicar(int n) { valor *= n; return this; }
    public int Resultado() { return valor; }
}
int r = new Builder(10).Sumar(5).Multiplicar(2).Resultado();
Console.WriteLine(r);`,
    },
    output: '30',
  },
  {
    category: 1,
    categoryTitle: 'Creacionales',
    id: 'p5',
    title: 'Prototype',
    description: 'Crea nuevos objetos clonando una instancia existente en vez de construir desde cero',
    code: {
      php: `<?php
$original = ["x" => 10, "y" => 20];
$clon = $original;
$clon["x"] = 99;
echo "original: " . $original["x"] . "\\n";
echo "clon: " . $clon["x"];`,
      python: `original = {"x": 10, "y": 20}
clon = original.copy()
clon["x"] = 99
print(f"original: {original['x']}")
print(f"clon: {clon['x']}")`,
      javascript: `const original = { x: 10, y: 20 };
const clon = { ...original };
clon.x = 99;
console.log("original: " + original.x);
console.log("clon: " + clon.x);`,
      typescript: `const original: { x: number; y: number } = { x: 10, y: 20 };
const clon: { x: number; y: number } = { ...original };
clon.x = 99;
console.log("original: " + original.x);
console.log("clon: " + clon.x);`,
      java: `import java.util.HashMap;
HashMap<String,Integer> original = new HashMap<>();
original.put("x", 10);
original.put("y", 20);
HashMap<String,Integer> clon = new HashMap<>(original);
clon.put("x", 99);
System.out.println("original: " + original.get("x"));
System.out.println("clon: " + clon.get("x"));`,
      csharp: `var original = new Dictionary<string,int> { ["x"] = 10, ["y"] = 20 };
var clon = new Dictionary<string,int>(original);
clon["x"] = 99;
Console.WriteLine("original: " + original["x"]);
Console.WriteLine("clon: " + clon["x"]);`,
    },
    output: 'original: 10\nclon: 99',
  },
  // ============= 2. Estructurales =============
  {
    category: 2,
    categoryTitle: 'Estructurales',
    id: 'p6',
    title: 'Adapter',
    description: 'Convierte la interfaz de un objeto para que sea compatible con otra esperada',
    code: {
      php: `<?php
function viejaCalculadora($a, $b) {
    return $a + $b;
}
function adaptador($fn, $n) {
    return $fn($n, 10);
}
echo adaptador("viejaCalculadora", 5);`,
      python: `def vieja_calculadora(a, b):
    return a + b

def adaptador(fn, n):
    return fn(n, 10)

print(adaptador(vieja_calculadora, 5))`,
      javascript: `function viejaCalculadora(a, b) {
  return a + b;
}
function adaptador(fn, n) {
  return fn(n, 10);
}
console.log(adaptador(viejaCalculadora, 5));`,
      typescript: `function viejaCalculadora(a: number, b: number): number {
  return a + b;
}
function adaptador(fn: (a: number, b: number) => number, n: number): number {
  return fn(n, 10);
}
console.log(adaptador(viejaCalculadora, 5));`,
      java: `interface Operacion { int aplicar(int n); }
static int viejaCalculadora(int a, int b) { return a + b; }
static Operacion adaptador() {
    return (n) -> viejaCalculadora(n, 10);
}
Operacion op = adaptador();
System.out.println(op.aplicar(5));`,
      csharp: `static int ViejaCalculadora(int a, int b) => a + b;
Func<int,int> adaptador = n => ViejaCalculadora(n, 10);
Console.WriteLine(adaptador(5));`,
    },
    output: '15',
  },
  {
    category: 2,
    categoryTitle: 'Estructurales',
    id: 'p7',
    title: 'Decorator',
    description: 'Agrega comportamiento extra a un objeto sin modificar su clase original',
    code: {
      php: `<?php
function base($n) { return $n * 2; }
function decoradorSuma($fn, $n) { return $fn($n) + 10; }
function decoradorLog($fn, $n) {
    $r = $fn($n);
    echo "log: " . $r . "\\n";
    return $r;
}
$r = decoradorSuma("base", 5);
decoradorLog(function($n) use ($r) { return $r; }, 5);
echo $r;`,
      python: `def base(n): return n * 2

def decorador_suma(fn):
    def wrapper(n): return fn(n) + 10
    return wrapper

def decorador_log(fn):
    def wrapper(n):
        r = fn(n)
        print(f"log: {r}")
        return r
    return wrapper

operacion = decorador_log(decorador_suma(base))
r = operacion(5)
print(r)`,
      javascript: `function base(n) { return n * 2; }

function decoradorSuma(fn) {
  return (n) => fn(n) + 10;
}
function decoradorLog(fn) {
  return (n) => {
    const r = fn(n);
    console.log("log: " + r);
    return r;
  };
}
const operacion = decoradorLog(decoradorSuma(base));
const r = operacion(5);
console.log(r);`,
      typescript: `function base(n: number): number { return n * 2; }

function decoradorSuma(fn: (n: number) => number) {
  return (n: number): number => fn(n) + 10;
}
function decoradorLog(fn: (n: number) => number) {
  return (n: number): number => {
    const r = fn(n);
    console.log("log: " + r);
    return r;
  };
}
const operacion = decoradorLog(decoradorSuma(base));
const r = operacion(5);
console.log(r);`,
      java: `import java.util.function.IntUnaryOperator;
static int base(int n) { return n * 2; }
IntUnaryOperator decoradorSuma = n -> base(n) + 10;
IntUnaryOperator decoradorLog = n -> {
    int r = decoradorSuma.applyAsInt(n);
    System.out.println("log: " + r);
    return r;
};
int r = decoradorLog.applyAsInt(5);
System.out.println(r);`,
      csharp: `static int Base(int n) => n * 2;
Func<int,int> decoradorSuma = n => Base(n) + 10;
Func<int,int> decoradorLog = n => {
    int r = decoradorSuma(n);
    Console.WriteLine("log: " + r);
    return r;
};
int r = decoradorLog(5);
Console.WriteLine(r);`,
    },
    output: 'log: 20\n20',
  },
  {
    category: 2,
    categoryTitle: 'Estructurales',
    id: 'p8',
    title: 'Facade',
    description: 'Simplifica una interfaz compleja ofreciendo un punto de acceso unificado',
    code: {
      php: `<?php
function validar($n) { return $n >= 0; }
function calcular($n) { return $n * $n; }
function formatear($n) { return "Resultado: " . $n; }
function mathFacade($n) {
    if (!validar($n)) return "Error";
    return formatear(calcular($n));
}
echo mathFacade(5);`,
      python: `def validar(n): return n >= 0
def calcular(n): return n * n
def formatear(n): return f"Resultado: {n}"

def math_facade(n):
    if not validar(n): return "Error"
    return formatear(calcular(n))

print(math_facade(5))`,
      javascript: `function validar(n) { return n >= 0; }
function calcular(n) { return n * n; }
function formatear(n) { return "Resultado: " + n; }

function mathFacade(n) {
  if (!validar(n)) return "Error";
  return formatear(calcular(n));
}
console.log(mathFacade(5));`,
      typescript: `function validar(n: number): boolean { return n >= 0; }
function calcular(n: number): number { return n * n; }
function formatear(n: number): string { return "Resultado: " + n; }

function mathFacade(n: number): string {
  if (!validar(n)) return "Error";
  return formatear(calcular(n));
}
console.log(mathFacade(5));`,
      java: `static boolean validar(int n) { return n >= 0; }
static int calcular(int n) { return n * n; }
static String formatear(int n) { return "Resultado: " + n; }
static String mathFacade(int n) {
    if (!validar(n)) return "Error";
    return formatear(calcular(n));
}
System.out.println(mathFacade(5));`,
      csharp: `static bool Validar(int n) => n >= 0;
static int Calcular(int n) => n * n;
static string Formatear(int n) => "Resultado: " + n;
static string MathFacade(int n) {
    if (!Validar(n)) return "Error";
    return Formatear(Calcular(n));
}
Console.WriteLine(MathFacade(5));`,
    },
    output: 'Resultado: 25',
  },
  {
    category: 2,
    categoryTitle: 'Estructurales',
    id: 'p9',
    title: 'Proxy',
    description: 'Controla el acceso a un objeto interponiendo un intermediario',
    code: {
      php: `<?php
function calculadora($n) { return $n * $n; }
function proxy($n) {
    if ($n < 0) {
        echo "Bloqueado: negativo\\n";
        return null;
    }
    return calculadora($n);
}
echo proxy(4) . "\\n";
proxy(-3);`,
      python: `def calculadora(n): return n * n

def proxy(n):
    if n < 0:
        print("Bloqueado: negativo")
        return None
    return calculadora(n)

print(proxy(4))
proxy(-3)`,
      javascript: `function calculadora(n) { return n * n; }

function proxy(n) {
  if (n < 0) {
    console.log("Bloqueado: negativo");
    return null;
  }
  return calculadora(n);
}
console.log(proxy(4));
proxy(-3);`,
      typescript: `function calculadora(n: number): number { return n * n; }

function proxy(n: number): number | null {
  if (n < 0) {
    console.log("Bloqueado: negativo");
    return null;
  }
  return calculadora(n);
}
console.log(proxy(4));
proxy(-3);`,
      java: `static int calculadora(int n) { return n * n; }
static Integer proxy(int n) {
    if (n < 0) {
        System.out.println("Bloqueado: negativo");
        return null;
    }
    return calculadora(n);
}
System.out.println(proxy(4));
proxy(-3);`,
      csharp: `static int? Proxy(int n) {
    if (n < 0) {
        Console.WriteLine("Bloqueado: negativo");
        return null;
    }
    return n * n;
}
Console.WriteLine(Proxy(4));
Proxy(-3);`,
    },
    output: '16\nBloqueado: negativo',
  },
  {
    category: 2,
    categoryTitle: 'Estructurales',
    id: 'p10',
    title: 'Composite',
    description: 'Trata objetos individuales y grupos de objetos de forma uniforme',
    code: {
      php: `<?php
function numero($n) { return ["valor" => function() use ($n) { return $n; }]; }
function grupo($hijos) {
    return ["valor" => function() use ($hijos) {
        $s = 0;
        foreach ($hijos as $h) $s += $h["valor"]();
        return $s;
    }];
}
$a = numero(5);
$g = grupo([numero(3), numero(7)]);
echo $a["valor"]() . "\\n";
echo $g["valor"]();`,
      python: `class Numero:
    def __init__(self, n): self.n = n
    def valor(self): return self.n

class Grupo:
    def __init__(self, hijos): self.hijos = hijos
    def valor(self): return sum(h.valor() for h in self.hijos)

a = Numero(5)
g = Grupo([Numero(3), Numero(7)])
print(a.valor())
print(g.valor())`,
      javascript: `function numero(n) {
  return { valor: () => n };
}
function grupo(hijos) {
  return { valor: () => hijos.reduce((s, h) => s + h.valor(), 0) };
}
const a = numero(5);
const g = grupo([numero(3), numero(7)]);
console.log(a.valor());
console.log(g.valor());`,
      typescript: `interface Componente { valor(): number; }
function numero(n: number): Componente {
  return { valor: () => n };
}
function grupo(hijos: Componente[]): Componente {
  return { valor: () => hijos.reduce((s, h) => s + h.valor(), 0) };
}
const a = numero(5);
const g = grupo([numero(3), numero(7)]);
console.log(a.valor());
console.log(g.valor());`,
      java: `interface Componente { int valor(); }
class Numero implements Componente {
    int n;
    Numero(int n) { this.n = n; }
    public int valor() { return n; }
}
class Grupo implements Componente {
    Componente[] hijos;
    Grupo(Componente... h) { hijos = h; }
    public int valor() {
        int s = 0;
        for (Componente h : hijos) s += h.valor();
        return s;
    }
}
Componente a = new Numero(5);
Componente g = new Grupo(new Numero(3), new Numero(7));
System.out.println(a.valor());
System.out.println(g.valor());`,
      csharp: `interface IComponente { int Valor(); }
class Numero : IComponente {
    int n;
    public Numero(int n) { this.n = n; }
    public int Valor() => n;
}
class Grupo : IComponente {
    IComponente[] hijos;
    public Grupo(params IComponente[] h) { hijos = h; }
    public int Valor() {
        int s = 0;
        foreach (var h in hijos) s += h.Valor();
        return s;
    }
}
IComponente a = new Numero(5);
IComponente g = new Grupo(new Numero(3), new Numero(7));
Console.WriteLine(a.Valor());
Console.WriteLine(g.Valor());`,
    },
    output: '5\n10',
  },
  {
    category: 2,
    categoryTitle: 'Estructurales',
    id: 'p11',
    title: 'Bridge',
    description: 'Separa la abstraccion de su implementacion para que varien de forma independiente',
    code: {
      php: `<?php
function circuloRender($nombre) { return "Dibujando circulo: " . $nombre; }
function cuadradoRender($nombre) { return "Dibujando cuadrado: " . $nombre; }
function forma($renderizador, $nombre) {
    return $renderizador($nombre);
}
echo forma("circuloRender", "A") . "\\n";
echo forma("cuadradoRender", "B");`,
      python: `def circulo_render(nombre): return f"Dibujando circulo: {nombre}"
def cuadrado_render(nombre): return f"Dibujando cuadrado: {nombre}"

def forma(renderizador, nombre):
    return renderizador(nombre)

print(forma(circulo_render, "A"))
print(forma(cuadrado_render, "B"))`,
      javascript: `function circuloRender(nombre) { return "Dibujando circulo: " + nombre; }
function cuadradoRender(nombre) { return "Dibujando cuadrado: " + nombre; }

function forma(renderizador, nombre) {
  return renderizador(nombre);
}
console.log(forma(circuloRender, "A"));
console.log(forma(cuadradoRender, "B"));`,
      typescript: `type Renderizador = (nombre: string) => string;
function circuloRender(nombre: string): string {
  return "Dibujando circulo: " + nombre;
}
function cuadradoRender(nombre: string): string {
  return "Dibujando cuadrado: " + nombre;
}
function forma(renderizador: Renderizador, nombre: string): string {
  return renderizador(nombre);
}
console.log(forma(circuloRender, "A"));
console.log(forma(cuadradoRender, "B"));`,
      java: `interface Renderizador { String dibujar(String nombre); }
static String circuloRender(String n) { return "Dibujando circulo: " + n; }
static String cuadradoRender(String n) { return "Dibujando cuadrado: " + n; }
Renderizador r1 = n -> circuloRender(n);
Renderizador r2 = n -> cuadradoRender(n);
System.out.println(r1.dibujar("A"));
System.out.println(r2.dibujar("B"));`,
      csharp: `Func<string,string> circuloRender = n => "Dibujando circulo: " + n;
Func<string,string> cuadradoRender = n => "Dibujando cuadrado: " + n;
string Forma(Func<string,string> render, string nombre) => render(nombre);
Console.WriteLine(Forma(circuloRender, "A"));
Console.WriteLine(Forma(cuadradoRender, "B"));`,
    },
    output: 'Dibujando circulo: A\nDibujando cuadrado: B',
  },
  {
    category: 2,
    categoryTitle: 'Estructurales',
    id: 'p12',
    title: 'Flyweight',
    description: 'Comparte instancias para evitar duplicar objetos con el mismo estado',
    code: {
      php: `<?php
$pool = [];
function getColor($nombre) {
    global $pool;
    if (!isset($pool[$nombre])) {
        $pool[$nombre] = ["nombre" => $nombre, "id" => count($pool) + 1];
    }
    return $pool[$nombre];
}
$a = getColor("rojo");
$b = getColor("azul");
$c = getColor("rojo");
echo $a["id"] . "\\n";
echo $b["id"] . "\\n";
echo $c["id"] . "\\n";
echo ($a === $c) ? "true" : "false";`,
      python: `pool = {}
def get_color(nombre):
    if nombre not in pool:
        pool[nombre] = {"nombre": nombre, "id": len(pool) + 1}
    return pool[nombre]

a = get_color("rojo")
b = get_color("azul")
c = get_color("rojo")
print(a["id"])
print(b["id"])
print(c["id"])
print(a is c)`,
      javascript: `const pool = {};
function getColor(nombre) {
  if (!pool[nombre]) {
    pool[nombre] = { nombre, id: Object.keys(pool).length + 1 };
  }
  return pool[nombre];
}
const a = getColor("rojo");
const b = getColor("azul");
const c = getColor("rojo");
console.log(a.id);
console.log(b.id);
console.log(c.id);
console.log(a === c);`,
      typescript: `const pool: Record<string, { nombre: string; id: number }> = {};
function getColor(nombre: string): { nombre: string; id: number } {
  if (!pool[nombre]) {
    pool[nombre] = { nombre, id: Object.keys(pool).length + 1 };
  }
  return pool[nombre];
}
const a = getColor("rojo");
const b = getColor("azul");
const c = getColor("rojo");
console.log(a.id);
console.log(b.id);
console.log(c.id);
console.log(a === c);`,
      java: `import java.util.HashMap;
HashMap<String,int[]> pool = new HashMap<>();
int counter = 0;
int[] getColor(String nombre) {
    if (!pool.containsKey(nombre)) {
        pool.put(nombre, new int[]{++counter});
    }
    return pool.get(nombre);
}
int[] a = getColor("rojo");
int[] b = getColor("azul");
int[] c = getColor("rojo");
System.out.println(a[0]);
System.out.println(b[0]);
System.out.println(c[0]);
System.out.println(a == c);`,
      csharp: `var pool = new Dictionary<string, (string nombre, int id)>();
int counter = 0;
(string, int) GetColor(string nombre) {
    if (!pool.ContainsKey(nombre))
        pool[nombre] = (nombre, ++counter);
    return pool[nombre];
}
var a = GetColor("rojo");
var b = GetColor("azul");
var c = GetColor("rojo");
Console.WriteLine(a.Item2);
Console.WriteLine(b.Item2);
Console.WriteLine(c.Item2);
Console.WriteLine(a.Equals(c));`,
    },
    output: {
      php: '1\n2\n1\ntrue',
      python: '1\n2\n1\nTrue',
      javascript: '1\n2\n1\ntrue',
      typescript: '1\n2\n1\ntrue',
      java: '1\n2\n1\ntrue',
      csharp: '1\n2\n1\nTrue',
    },
  },
];
