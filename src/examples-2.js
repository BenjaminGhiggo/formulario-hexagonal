// Ejemplos secciones 5-8 (3 ejemplos cada una)

export const examples2 = [
  // ===================== 5. LISKOV =====================
  {
    section: 5,
    sectionTitle: 'SUSTITUCION DE LISKOV (LSP)',
    id: '5a',
    enunciado:
      'Reemplaza Sumar10 por Multiplicar3 en el mismo Servicio. El servicio no se rompe.',
    code: {
      php: `interface Operacion {
    public function aplicar(int $n): int;
}
class Sumar10 implements Operacion {
    public function aplicar(int $n): int { return $n + 10; }
}
class Multiplicar3 implements Operacion {
    public function aplicar(int $n): int { return $n * 3; }
}
class Servicio {
    public function __construct(private Operacion $op) {}
    public function ejecutar(int $x): int {
        return $this->op->aplicar($x);
    }
}
echo (new Servicio(new Sumar10()))->ejecutar(5) . "\\n";
echo (new Servicio(new Multiplicar3()))->ejecutar(5);`,
      python: `from abc import ABC, abstractmethod

class Operacion(ABC):
    @abstractmethod
    def aplicar(self, n: int) -> int: ...

class Sumar10(Operacion):
    def aplicar(self, n: int) -> int: return n + 10

class Multiplicar3(Operacion):
    def aplicar(self, n: int) -> int: return n * 3

class Servicio:
    def __init__(self, op: Operacion):
        self.op = op
    def ejecutar(self, x: int) -> int:
        return self.op.aplicar(x)

print(Servicio(Sumar10()).ejecutar(5))
print(Servicio(Multiplicar3()).ejecutar(5))`,
      javascript: `class Sumar10 {
  aplicar(n) { return n + 10; }
}
class Multiplicar3 {
  aplicar(n) { return n * 3; }
}
class Servicio {
  constructor(op) { this.op = op; }
  ejecutar(x) { return this.op.aplicar(x); }
}
console.log(new Servicio(new Sumar10()).ejecutar(5));
console.log(new Servicio(new Multiplicar3()).ejecutar(5));`,
      typescript: `interface Operacion {
  aplicar(n: number): number;
}
class Sumar10 implements Operacion {
  aplicar(n: number) { return n + 10; }
}
class Multiplicar3 implements Operacion {
  aplicar(n: number) { return n * 3; }
}
class Servicio {
  constructor(private op: Operacion) {}
  ejecutar(x: number) { return this.op.aplicar(x); }
}
console.log(new Servicio(new Sumar10()).ejecutar(5));
console.log(new Servicio(new Multiplicar3()).ejecutar(5));`,
      java: `// Operacion, Sumar10, Multiplicar3, Servicio ya definidos
System.out.println(new Servicio(new Sumar10()).ejecutar(5));
System.out.println(new Servicio(new Multiplicar3()).ejecutar(5));
// Ambos funcionan sin modificar Servicio`,
      csharp: `// IOperacion, Sumar10, Multiplicar3, Servicio ya definidos
Console.WriteLine(new Servicio(new Sumar10()).Ejecutar(5));
Console.WriteLine(new Servicio(new Multiplicar3()).Ejecutar(5));
// Ambos funcionan sin modificar Servicio`,
    },
    output: '15\n15',
  },
  {
    section: 5,
    sectionTitle: 'SUSTITUCION DE LISKOV (LSP)',
    id: '5b',
    enunciado:
      'Tres comparadores distintos pasan por la misma funcion. Todos son intercambiables.',
    code: {
      php: `interface Comparador {
    public function comparar(int $a, int $b): bool;
}
class Mayor implements Comparador {
    public function comparar(int $a, int $b): bool { return $a > $b; }
}
class Menor implements Comparador {
    public function comparar(int $a, int $b): bool { return $a < $b; }
}
class Igual implements Comparador {
    public function comparar(int $a, int $b): bool { return $a === $b; }
}
function test(Comparador $c): string {
    return $c->comparar(5, 3) ? "SI" : "NO";
}
echo test(new Mayor()) . " " . test(new Menor()) . " " . test(new Igual());`,
      python: `from abc import ABC, abstractmethod

class Comparador(ABC):
    @abstractmethod
    def comparar(self, a: int, b: int) -> bool: ...

class Mayor(Comparador):
    def comparar(self, a, b): return a > b
class Menor(Comparador):
    def comparar(self, a, b): return a < b
class Igual(Comparador):
    def comparar(self, a, b): return a == b

def test(c: Comparador) -> str:
    return "SI" if c.comparar(5, 3) else "NO"

print(test(Mayor()), test(Menor()), test(Igual()))`,
      javascript: `class Mayor { comparar(a, b) { return a > b; } }
class Menor { comparar(a, b) { return a < b; } }
class Igual { comparar(a, b) { return a === b; } }

function test(c) {
  return c.comparar(5, 3) ? "SI" : "NO";
}
console.log(test(new Mayor()), test(new Menor()), test(new Igual()));`,
      typescript: `interface Comparador {
  comparar(a: number, b: number): boolean;
}
class Mayor implements Comparador {
  comparar(a: number, b: number) { return a > b; }
}
class Menor implements Comparador {
  comparar(a: number, b: number) { return a < b; }
}
class Igual implements Comparador {
  comparar(a: number, b: number) { return a === b; }
}
function test(c: Comparador): string {
  return c.comparar(5, 3) ? "SI" : "NO";
}
console.log(test(new Mayor()), test(new Menor()), test(new Igual()));`,
      java: `// Mayor, Menor, Igual implementan Comparador
static String test(Comparador c) {
    return c.comparar(5, 3) ? "SI" : "NO";
}
System.out.println(
    test(new Mayor()) + " " +
    test(new Menor()) + " " +
    test(new Igual()));`,
      csharp: `// Mayor, Menor, Igual implementan IComparador
static string Test(IComparador c)
    => c.Comparar(5, 3) ? "SI" : "NO";

Console.WriteLine(
    Test(new Mayor()) + " " +
    Test(new Menor()) + " " +
    Test(new Igual()));`,
    },
    output: 'SI NO NO',
  },
  {
    section: 5,
    sectionTitle: 'SUSTITUCION DE LISKOV (LSP)',
    id: '5c',
    enunciado:
      'Dos formateadores de numeros (como texto y como doble) se usan en la misma funcion sin cambiarla.',
    code: {
      php: `interface Formateador {
    public function formatear(int $n): string;
}
class ComoTexto implements Formateador {
    public function formatear(int $n): string {
        return "El numero es: $n";
    }
}
class ComoDoble implements Formateador {
    public function formatear(int $n): string {
        return "El doble es: " . ($n * 2);
    }
}
function mostrar(Formateador $f, int $x): string {
    return $f->formatear($x);
}
echo mostrar(new ComoTexto(), 7) . "\\n";
echo mostrar(new ComoDoble(), 7);`,
      python: `from abc import ABC, abstractmethod

class Formateador(ABC):
    @abstractmethod
    def formatear(self, n: int) -> str: ...

class ComoTexto(Formateador):
    def formatear(self, n: int) -> str:
        return f"El numero es: {n}"

class ComoDoble(Formateador):
    def formatear(self, n: int) -> str:
        return f"El doble es: {n * 2}"

def mostrar(f: Formateador, x: int) -> str:
    return f.formatear(x)

print(mostrar(ComoTexto(), 7))
print(mostrar(ComoDoble(), 7))`,
      javascript: `class ComoTexto {
  formatear(n) { return \`El numero es: \${n}\`; }
}
class ComoDoble {
  formatear(n) { return \`El doble es: \${n * 2}\`; }
}
function mostrar(f, x) { return f.formatear(x); }
console.log(mostrar(new ComoTexto(), 7));
console.log(mostrar(new ComoDoble(), 7));`,
      typescript: `interface Formateador {
  formatear(n: number): string;
}
class ComoTexto implements Formateador {
  formatear(n: number) { return \`El numero es: \${n}\`; }
}
class ComoDoble implements Formateador {
  formatear(n: number) { return \`El doble es: \${n * 2}\`; }
}
function mostrar(f: Formateador, x: number): string {
  return f.formatear(x);
}
console.log(mostrar(new ComoTexto(), 7));
console.log(mostrar(new ComoDoble(), 7));`,
      java: `interface Formateador {
    String formatear(int n);
}
class ComoTexto implements Formateador {
    public String formatear(int n) {
        return "El numero es: " + n;
    }
}
class ComoDoble implements Formateador {
    public String formatear(int n) {
        return "El doble es: " + (n * 2);
    }
}
static String mostrar(Formateador f, int x) {
    return f.formatear(x);
}
System.out.println(mostrar(new ComoTexto(), 7));
System.out.println(mostrar(new ComoDoble(), 7));`,
      csharp: `interface IFormateador {
    string Formatear(int n);
}
class ComoTexto : IFormateador {
    public string Formatear(int n) => $"El numero es: {n}";
}
class ComoDoble : IFormateador {
    public string Formatear(int n) => $"El doble es: {n * 2}";
}
static string Mostrar(IFormateador f, int x)
    => f.Formatear(x);
Console.WriteLine(Mostrar(new ComoTexto(), 7));
Console.WriteLine(Mostrar(new ComoDoble(), 7));`,
    },
    output: 'El numero es: 7\nEl doble es: 14',
  },

  // ===================== 6. ADAPTER =====================
  {
    section: 6,
    sectionTitle: 'ADAPTER',
    id: '6a',
    enunciado:
      'Tienes una calculadora vieja con calcular(a, b). Adaptala al contrato que solo recibe un numero.',
    code: {
      php: `interface Operacion {
    public function aplicar(int $n): int;
}
class CalculadoraVieja {
    public function calcular(int $a, int $b): int {
        return $a + $b;
    }
}
class Adaptador implements Operacion {
    private CalculadoraVieja $vieja;
    public function __construct() {
        $this->vieja = new CalculadoraVieja();
    }
    public function aplicar(int $n): int {
        return $this->vieja->calcular($n, 100);
    }
}
$a = new Adaptador();
echo $a->aplicar(5);`,
      python: `from abc import ABC, abstractmethod

class Operacion(ABC):
    @abstractmethod
    def aplicar(self, n: int) -> int: ...

class CalculadoraVieja:
    def calcular(self, a: int, b: int) -> int:
        return a + b

class Adaptador(Operacion):
    def __init__(self):
        self.vieja = CalculadoraVieja()
    def aplicar(self, n: int) -> int:
        return self.vieja.calcular(n, 100)

a = Adaptador()
print(a.aplicar(5))`,
      javascript: `class CalculadoraVieja {
  calcular(a, b) { return a + b; }
}
class Adaptador {
  constructor() { this.vieja = new CalculadoraVieja(); }
  aplicar(n) { return this.vieja.calcular(n, 100); }
}
const a = new Adaptador();
console.log(a.aplicar(5));`,
      typescript: `interface Operacion {
  aplicar(n: number): number;
}
class CalculadoraVieja {
  calcular(a: number, b: number): number { return a + b; }
}
class Adaptador implements Operacion {
  private vieja = new CalculadoraVieja();
  aplicar(n: number): number {
    return this.vieja.calcular(n, 100);
  }
}
const a = new Adaptador();
console.log(a.aplicar(5));`,
      java: `class CalculadoraVieja {
    int calcular(int a, int b) { return a + b; }
}
class Adaptador implements Operacion {
    private CalculadoraVieja vieja = new CalculadoraVieja();
    public int aplicar(int n) {
        return vieja.calcular(n, 100);
    }
}
Adaptador a = new Adaptador();
System.out.println(a.aplicar(5));`,
      csharp: `class CalculadoraVieja {
    public int Calcular(int a, int b) => a + b;
}
class Adaptador : IOperacion {
    private CalculadoraVieja vieja = new();
    public int Aplicar(int n) => vieja.Calcular(n, 100);
}
var a = new Adaptador();
Console.WriteLine(a.Aplicar(5));`,
    },
    output: '105',
  },
  {
    section: 6,
    sectionTitle: 'ADAPTER',
    id: '6b',
    enunciado:
      'Una libreria devuelve el resultado como texto "42". Adaptala para que devuelva un entero.',
    code: {
      php: `interface Operacion {
    public function aplicar(int $n): int;
}
class LibreriaTexto {
    public function procesar(int $n): string {
        return (string)($n * 6);
    }
}
class AdaptadorTexto implements Operacion {
    private LibreriaTexto $lib;
    public function __construct() {
        $this->lib = new LibreriaTexto();
    }
    public function aplicar(int $n): int {
        $texto = $this->lib->procesar($n);
        return (int)$texto;
    }
}
$a = new AdaptadorTexto();
echo $a->aplicar(7);`,
      python: `class LibreriaTexto:
    def procesar(self, n: int) -> str:
        return str(n * 6)

class AdaptadorTexto(Operacion):
    def __init__(self):
        self.lib = LibreriaTexto()
    def aplicar(self, n: int) -> int:
        texto = self.lib.procesar(n)
        return int(texto)

a = AdaptadorTexto()
print(a.aplicar(7))`,
      javascript: `class LibreriaTexto {
  procesar(n) { return String(n * 6); }
}
class AdaptadorTexto {
  constructor() { this.lib = new LibreriaTexto(); }
  aplicar(n) {
    const texto = this.lib.procesar(n);
    return Number(texto);
  }
}
const a = new AdaptadorTexto();
console.log(a.aplicar(7));`,
      typescript: `class LibreriaTexto {
  procesar(n: number): string { return String(n * 6); }
}
class AdaptadorTexto implements Operacion {
  private lib = new LibreriaTexto();
  aplicar(n: number): number {
    const texto = this.lib.procesar(n);
    return Number(texto);
  }
}
const a = new AdaptadorTexto();
console.log(a.aplicar(7));`,
      java: `class LibreriaTexto {
    String procesar(int n) {
        return String.valueOf(n * 6);
    }
}
class AdaptadorTexto implements Operacion {
    private LibreriaTexto lib = new LibreriaTexto();
    public int aplicar(int n) {
        String texto = lib.procesar(n);
        return Integer.parseInt(texto);
    }
}
AdaptadorTexto a = new AdaptadorTexto();
System.out.println(a.aplicar(7));`,
      csharp: `class LibreriaTexto {
    public string Procesar(int n) => (n * 6).ToString();
}
class AdaptadorTexto : IOperacion {
    private LibreriaTexto lib = new();
    public int Aplicar(int n) {
        string texto = lib.Procesar(n);
        return int.Parse(texto);
    }
}
var a = new AdaptadorTexto();
Console.WriteLine(a.Aplicar(7));`,
    },
    output: '42',
  },
  {
    section: 6,
    sectionTitle: 'ADAPTER',
    id: '6c',
    enunciado:
      'Una funcion externa resta en orden inverso: resta(b, a). Adaptala para que reste en orden normal: a - b.',
    code: {
      php: `interface Operacion {
    public function aplicar(int $n): int;
}
class RestaInversa {
    public function resta(int $b, int $a): int {
        return $a - $b;
    }
}
class AdaptadorResta implements Operacion {
    private RestaInversa $ri;
    public function __construct(private int $base) {
        $this->ri = new RestaInversa();
    }
    public function aplicar(int $n): int {
        return $this->ri->resta($this->base, $n);
    }
}
$a = new AdaptadorResta(3);
echo $a->aplicar(10);`,
      python: `class RestaInversa:
    def resta(self, b: int, a: int) -> int:
        return a - b

class AdaptadorResta(Operacion):
    def __init__(self, base: int):
        self.ri = RestaInversa()
        self.base = base
    def aplicar(self, n: int) -> int:
        return self.ri.resta(self.base, n)

a = AdaptadorResta(3)
print(a.aplicar(10))`,
      javascript: `class RestaInversa {
  resta(b, a) { return a - b; }
}
class AdaptadorResta {
  constructor(base) {
    this.ri = new RestaInversa();
    this.base = base;
  }
  aplicar(n) { return this.ri.resta(this.base, n); }
}
const a = new AdaptadorResta(3);
console.log(a.aplicar(10));`,
      typescript: `class RestaInversa {
  resta(b: number, a: number): number { return a - b; }
}
class AdaptadorResta implements Operacion {
  private ri = new RestaInversa();
  constructor(private base: number) {}
  aplicar(n: number): number {
    return this.ri.resta(this.base, n);
  }
}
const a = new AdaptadorResta(3);
console.log(a.aplicar(10));`,
      java: `class RestaInversa {
    int resta(int b, int a) { return a - b; }
}
class AdaptadorResta implements Operacion {
    private RestaInversa ri = new RestaInversa();
    private int base;
    AdaptadorResta(int base) { this.base = base; }
    public int aplicar(int n) {
        return ri.resta(base, n);
    }
}
AdaptadorResta a = new AdaptadorResta(3);
System.out.println(a.aplicar(10));`,
      csharp: `class RestaInversa {
    public int Resta(int b, int a) => a - b;
}
class AdaptadorResta : IOperacion {
    private RestaInversa ri = new();
    private int bas;
    public AdaptadorResta(int b) => bas = b;
    public int Aplicar(int n) => ri.Resta(bas, n);
}
var a = new AdaptadorResta(3);
Console.WriteLine(a.Aplicar(10));`,
    },
    output: '7',
  },

  // ===================== 7. INYECCION DE DEPENDENCIAS =====================
  {
    section: 7,
    sectionTitle: 'INYECCION DE DEPENDENCIAS',
    id: '7a',
    enunciado:
      'Construye una calculadora que no decide que operacion usa. Se la inyectan al crearla.',
    code: {
      php: `interface Operacion {
    public function aplicar(int $n): int;
}
class Duplicar implements Operacion {
    public function aplicar(int $n): int { return $n * 2; }
}
class Calculadora {
    public function __construct(private Operacion $op) {}
    public function calcular(int $x): int {
        return $this->op->aplicar($x);
    }
}
$calc = new Calculadora(new Duplicar());
echo $calc->calcular(8);`,
      python: `class Duplicar(Operacion):
    def aplicar(self, n: int) -> int: return n * 2

class Calculadora:
    def __init__(self, op: Operacion):
        self.op = op
    def calcular(self, x: int) -> int:
        return self.op.aplicar(x)

calc = Calculadora(Duplicar())
print(calc.calcular(8))`,
      javascript: `class Duplicar {
  aplicar(n) { return n * 2; }
}
class Calculadora {
  constructor(op) { this.op = op; }
  calcular(x) { return this.op.aplicar(x); }
}
const calc = new Calculadora(new Duplicar());
console.log(calc.calcular(8));`,
      typescript: `class Duplicar implements Operacion {
  aplicar(n: number): number { return n * 2; }
}
class Calculadora {
  constructor(private op: Operacion) {}
  calcular(x: number): number {
    return this.op.aplicar(x);
  }
}
const calc = new Calculadora(new Duplicar());
console.log(calc.calcular(8));`,
      java: `class Duplicar implements Operacion {
    public int aplicar(int n) { return n * 2; }
}
class Calculadora {
    private Operacion op;
    Calculadora(Operacion op) { this.op = op; }
    int calcular(int x) { return op.aplicar(x); }
}
Calculadora calc = new Calculadora(new Duplicar());
System.out.println(calc.calcular(8));`,
      csharp: `class Duplicar : IOperacion {
    public int Aplicar(int n) => n * 2;
}
class Calculadora {
    private readonly IOperacion op;
    public Calculadora(IOperacion op) => this.op = op;
    public int Calcular(int x) => op.Aplicar(x);
}
var calc = new Calculadora(new Duplicar());
Console.WriteLine(calc.Calcular(8));`,
    },
    output: '16',
  },
  {
    section: 7,
    sectionTitle: 'INYECCION DE DEPENDENCIAS',
    id: '7b',
    enunciado:
      'Inyecta dos operaciones distintas a la misma calculadora (en momentos diferentes).',
    code: {
      php: `class Triplicar implements Operacion {
    public function aplicar(int $n): int { return $n * 3; }
}
$c1 = new Calculadora(new Duplicar());
$c2 = new Calculadora(new Triplicar());
echo $c1->calcular(4) . "\\n";
echo $c2->calcular(4);`,
      python: `class Triplicar(Operacion):
    def aplicar(self, n: int) -> int: return n * 3

c1 = Calculadora(Duplicar())
c2 = Calculadora(Triplicar())
print(c1.calcular(4))
print(c2.calcular(4))`,
      javascript: `class Triplicar {
  aplicar(n) { return n * 3; }
}
const c1 = new Calculadora(new Duplicar());
const c2 = new Calculadora(new Triplicar());
console.log(c1.calcular(4));
console.log(c2.calcular(4));`,
      typescript: `class Triplicar implements Operacion {
  aplicar(n: number) { return n * 3; }
}
const c1 = new Calculadora(new Duplicar());
const c2 = new Calculadora(new Triplicar());
console.log(c1.calcular(4));
console.log(c2.calcular(4));`,
      java: `class Triplicar implements Operacion {
    public int aplicar(int n) { return n * 3; }
}
Calculadora c1 = new Calculadora(new Duplicar());
Calculadora c2 = new Calculadora(new Triplicar());
System.out.println(c1.calcular(4));
System.out.println(c2.calcular(4));`,
      csharp: `class Triplicar : IOperacion {
    public int Aplicar(int n) => n * 3;
}
var c1 = new Calculadora(new Duplicar());
var c2 = new Calculadora(new Triplicar());
Console.WriteLine(c1.Calcular(4));
Console.WriteLine(c2.Calcular(4));`,
    },
    output: '8\n12',
  },
  {
    section: 7,
    sectionTitle: 'INYECCION DE DEPENDENCIAS',
    id: '7c',
    enunciado:
      'Inyecta un Comparador a un Validador. El validador no sabe que comparacion hace.',
    code: {
      php: `interface Comparador {
    public function comparar(int $a, int $b): bool;
}
class MayorQue implements Comparador {
    public function comparar(int $a, int $b): bool {
        return $a > $b;
    }
}
class Validador {
    public function __construct(private Comparador $c) {}
    public function validar(int $a, int $b): string {
        return $this->c->comparar($a, $b) ? "valido" : "invalido";
    }
}
$v = new Validador(new MayorQue());
echo $v->validar(10, 2);`,
      python: `from abc import ABC, abstractmethod

class Comparador(ABC):
    @abstractmethod
    def comparar(self, a: int, b: int) -> bool: ...

class MayorQue(Comparador):
    def comparar(self, a, b): return a > b

class Validador:
    def __init__(self, c: Comparador):
        self.c = c
    def validar(self, a: int, b: int) -> str:
        return "valido" if self.c.comparar(a, b) else "invalido"

v = Validador(MayorQue())
print(v.validar(10, 2))`,
      javascript: `class MayorQue {
  comparar(a, b) { return a > b; }
}
class Validador {
  constructor(c) { this.c = c; }
  validar(a, b) {
    return this.c.comparar(a, b) ? "valido" : "invalido";
  }
}
const v = new Validador(new MayorQue());
console.log(v.validar(10, 2));`,
      typescript: `interface Comparador {
  comparar(a: number, b: number): boolean;
}
class MayorQue implements Comparador {
  comparar(a: number, b: number) { return a > b; }
}
class Validador {
  constructor(private c: Comparador) {}
  validar(a: number, b: number): string {
    return this.c.comparar(a, b) ? "valido" : "invalido";
  }
}
const v = new Validador(new MayorQue());
console.log(v.validar(10, 2));`,
      java: `class MayorQue implements Comparador {
    public boolean comparar(int a, int b) { return a > b; }
}
class Validador {
    private Comparador c;
    Validador(Comparador c) { this.c = c; }
    String validar(int a, int b) {
        return c.comparar(a, b) ? "valido" : "invalido";
    }
}
Validador v = new Validador(new MayorQue());
System.out.println(v.validar(10, 2));`,
      csharp: `class MayorQue : IComparador {
    public bool Comparar(int a, int b) => a > b;
}
class Validador {
    private readonly IComparador c;
    public Validador(IComparador c) => this.c = c;
    public string Validar(int a, int b)
        => c.Comparar(a, b) ? "valido" : "invalido";
}
var v = new Validador(new MayorQue());
Console.WriteLine(v.Validar(10, 2));`,
    },
    output: 'valido',
  },

  // ===================== 8. MOCK =====================
  {
    section: 8,
    sectionTitle: 'MOCK (simulacion para pruebas)',
    id: '8a',
    enunciado:
      'Simula una operacion que siempre devuelve 99 sin importar que reciba.',
    code: {
      php: `interface Operacion {
    public function aplicar(int $n): int;
}
class MockOperacion implements Operacion {
    public function aplicar(int $n): int {
        return 99;
    }
}
class Servicio {
    public function __construct(private Operacion $op) {}
    public function ejecutar(int $x): int {
        return $this->op->aplicar($x);
    }
}
$s = new Servicio(new MockOperacion());
echo $s->ejecutar(1234);`,
      python: `class MockOperacion(Operacion):
    def aplicar(self, n: int) -> int:
        return 99

class Servicio:
    def __init__(self, op: Operacion):
        self.op = op
    def ejecutar(self, x: int) -> int:
        return self.op.aplicar(x)

s = Servicio(MockOperacion())
print(s.ejecutar(1234))`,
      javascript: `class MockOperacion {
  aplicar(n) { return 99; }
}
class Servicio {
  constructor(op) { this.op = op; }
  ejecutar(x) { return this.op.aplicar(x); }
}
const s = new Servicio(new MockOperacion());
console.log(s.ejecutar(1234));`,
      typescript: `class MockOperacion implements Operacion {
  aplicar(n: number): number { return 99; }
}
class Servicio {
  constructor(private op: Operacion) {}
  ejecutar(x: number): number {
    return this.op.aplicar(x);
  }
}
const s = new Servicio(new MockOperacion());
console.log(s.ejecutar(1234));`,
      java: `class MockOperacion implements Operacion {
    public int aplicar(int n) { return 99; }
}
Servicio s = new Servicio(new MockOperacion());
System.out.println(s.ejecutar(1234));`,
      csharp: `class MockOperacion : IOperacion {
    public int Aplicar(int n) => 99;
}
var s = new Servicio(new MockOperacion());
Console.WriteLine(s.Ejecutar(1234));`,
    },
    output: '99',
  },
  {
    section: 8,
    sectionTitle: 'MOCK (simulacion para pruebas)',
    id: '8b',
    enunciado:
      'Mock configurable: le dices que valor devolver antes de usarlo.',
    code: {
      php: `class MockConfigurable implements Operacion {
    private int $retorno;
    public function configurar(int $valor): void {
        $this->retorno = $valor;
    }
    public function aplicar(int $n): int {
        return $this->retorno;
    }
}
$mock = new MockConfigurable();
$mock->configurar(42);
$s = new Servicio($mock);
echo $s->ejecutar(0);`,
      python: `class MockConfigurable(Operacion):
    def __init__(self):
        self.retorno = 0
    def configurar(self, valor: int):
        self.retorno = valor
    def aplicar(self, n: int) -> int:
        return self.retorno

mock = MockConfigurable()
mock.configurar(42)
s = Servicio(mock)
print(s.ejecutar(0))`,
      javascript: `class MockConfigurable {
  configurar(valor) { this.retorno = valor; }
  aplicar(n) { return this.retorno; }
}
const mock = new MockConfigurable();
mock.configurar(42);
const s = new Servicio(mock);
console.log(s.ejecutar(0));`,
      typescript: `class MockConfigurable implements Operacion {
  private retorno = 0;
  configurar(valor: number) { this.retorno = valor; }
  aplicar(n: number): number { return this.retorno; }
}
const mock = new MockConfigurable();
mock.configurar(42);
const s = new Servicio(mock);
console.log(s.ejecutar(0));`,
      java: `class MockConfigurable implements Operacion {
    private int retorno;
    void configurar(int valor) { retorno = valor; }
    public int aplicar(int n) { return retorno; }
}
MockConfigurable mock = new MockConfigurable();
mock.configurar(42);
Servicio s = new Servicio(mock);
System.out.println(s.ejecutar(0));`,
      csharp: `class MockConfigurable : IOperacion {
    private int retorno;
    public void Configurar(int valor) => retorno = valor;
    public int Aplicar(int n) => retorno;
}
var mock = new MockConfigurable();
mock.Configurar(42);
var s = new Servicio(mock);
Console.WriteLine(s.Ejecutar(0));`,
    },
    output: '42',
  },
  {
    section: 8,
    sectionTitle: 'MOCK (simulacion para pruebas)',
    id: '8c',
    enunciado:
      'Mock que cuenta cuantas veces fue llamado (spy).',
    code: {
      php: `class MockSpy implements Operacion {
    public int $llamadas = 0;
    public function aplicar(int $n): int {
        $this->llamadas++;
        return $n;
    }
}
$spy = new MockSpy();
$s = new Servicio($spy);
$s->ejecutar(1);
$s->ejecutar(2);
$s->ejecutar(3);
echo "llamadas: " . $spy->llamadas;`,
      python: `class MockSpy(Operacion):
    def __init__(self):
        self.llamadas = 0
    def aplicar(self, n: int) -> int:
        self.llamadas += 1
        return n

spy = MockSpy()
s = Servicio(spy)
s.ejecutar(1)
s.ejecutar(2)
s.ejecutar(3)
print(f"llamadas: {spy.llamadas}")`,
      javascript: `class MockSpy {
  constructor() { this.llamadas = 0; }
  aplicar(n) { this.llamadas++; return n; }
}
const spy = new MockSpy();
const s = new Servicio(spy);
s.ejecutar(1);
s.ejecutar(2);
s.ejecutar(3);
console.log("llamadas: " + spy.llamadas);`,
      typescript: `class MockSpy implements Operacion {
  llamadas = 0;
  aplicar(n: number): number {
    this.llamadas++;
    return n;
  }
}
const spy = new MockSpy();
const s = new Servicio(spy);
s.ejecutar(1);
s.ejecutar(2);
s.ejecutar(3);
console.log("llamadas: " + spy.llamadas);`,
      java: `class MockSpy implements Operacion {
    int llamadas = 0;
    public int aplicar(int n) { llamadas++; return n; }
}
MockSpy spy = new MockSpy();
Servicio s = new Servicio(spy);
s.ejecutar(1);
s.ejecutar(2);
s.ejecutar(3);
System.out.println("llamadas: " + spy.llamadas);`,
      csharp: `class MockSpy : IOperacion {
    public int Llamadas { get; private set; }
    public int Aplicar(int n) { Llamadas++; return n; }
}
var spy = new MockSpy();
var s = new Servicio(spy);
s.Ejecutar(1);
s.Ejecutar(2);
s.Ejecutar(3);
Console.WriteLine($"llamadas: {spy.Llamadas}");`,
    },
    output: 'llamadas: 3',
  },
]
