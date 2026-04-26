// Ejemplos secciones 1-4 (3 ejemplos cada una)

export const examples1 = [
  // ===================== 1. CLASE =====================
  {
    section: 1,
    sectionTitle: 'CLASE (tipo concreto)',
    id: '1a',
    enunciado: 'Crea un objeto que guarde un numero y devuelva su doble.',
    code: {
      php: `<?php
class Doble {
    public function __construct(private int $x) {}
    public function resultado(): int {
        return $this->x * 2;
    }
}
$d = new Doble(7);
echo $d->resultado();`,
      python: `class Doble:
    def __init__(self, x: int):
        self.x = x
    def resultado(self) -> int:
        return self.x * 2

d = Doble(7)
print(d.resultado())`,
      javascript: `class Doble {
  constructor(x) { this.x = x; }
  resultado() { return this.x * 2; }
}
const d = new Doble(7);
console.log(d.resultado());`,
      typescript: `class Doble {
  constructor(private x: number) {}
  resultado(): number { return this.x * 2; }
}
const d = new Doble(7);
console.log(d.resultado());`,
      java: `class Doble {
    private int x;
    Doble(int x) { this.x = x; }
    int resultado() { return x * 2; }
}
Doble d = new Doble(7);
System.out.println(d.resultado());`,
      csharp: `class Doble {
    private int x;
    public Doble(int x) => this.x = x;
    public int Resultado() => x * 2;
}
var d = new Doble(7);
Console.WriteLine(d.Resultado());`,
    },
    output: '14',
  },
  {
    section: 1,
    sectionTitle: 'CLASE (tipo concreto)',
    id: '1b',
    enunciado: 'Crea un objeto que guarde dos numeros y devuelva su suma.',
    code: {
      php: `<?php
class Suma {
    public function __construct(
        private int $a,
        private int $b
    ) {}
    public function resultado(): int {
        return $this->a + $this->b;
    }
}
$s = new Suma(3, 8);
echo $s->resultado();`,
      python: `class Suma:
    def __init__(self, a: int, b: int):
        self.a = a
        self.b = b
    def resultado(self) -> int:
        return self.a + self.b

s = Suma(3, 8)
print(s.resultado())`,
      javascript: `class Suma {
  constructor(a, b) { this.a = a; this.b = b; }
  resultado() { return this.a + this.b; }
}
const s = new Suma(3, 8);
console.log(s.resultado());`,
      typescript: `class Suma {
  constructor(private a: number, private b: number) {}
  resultado(): number { return this.a + this.b; }
}
const s = new Suma(3, 8);
console.log(s.resultado());`,
      java: `class Suma {
    private int a, b;
    Suma(int a, int b) { this.a = a; this.b = b; }
    int resultado() { return a + b; }
}
Suma s = new Suma(3, 8);
System.out.println(s.resultado());`,
      csharp: `class Suma {
    private int a, b;
    public Suma(int a, int b) { this.a = a; this.b = b; }
    public int Resultado() => a + b;
}
var s = new Suma(3, 8);
Console.WriteLine(s.Resultado());`,
    },
    output: '11',
  },
  {
    section: 1,
    sectionTitle: 'CLASE (tipo concreto)',
    id: '1c',
    enunciado: 'Crea un objeto que guarde un numero y diga si es par o impar.',
    code: {
      php: `<?php
class ParImpar {
    public function __construct(private int $n) {}
    public function esPar(): bool {
        return $this->n % 2 === 0;
    }
}
$p = new ParImpar(6);
echo $p->esPar() ? "par" : "impar";`,
      python: `class ParImpar:
    def __init__(self, n: int):
        self.n = n
    def es_par(self) -> bool:
        return self.n % 2 == 0

p = ParImpar(6)
print("par" if p.es_par() else "impar")`,
      javascript: `class ParImpar {
  constructor(n) { this.n = n; }
  esPar() { return this.n % 2 === 0; }
}
const p = new ParImpar(6);
console.log(p.esPar() ? "par" : "impar");`,
      typescript: `class ParImpar {
  constructor(private n: number) {}
  esPar(): boolean { return this.n % 2 === 0; }
}
const p = new ParImpar(6);
console.log(p.esPar() ? "par" : "impar");`,
      java: `class ParImpar {
    private int n;
    ParImpar(int n) { this.n = n; }
    boolean esPar() { return n % 2 == 0; }
}
ParImpar p = new ParImpar(6);
System.out.println(p.esPar() ? "par" : "impar");`,
      csharp: `class ParImpar {
    private int n;
    public ParImpar(int n) => this.n = n;
    public bool EsPar() => n % 2 == 0;
}
var p = new ParImpar(6);
Console.WriteLine(p.EsPar() ? "par" : "impar");`,
    },
    output: 'par',
  },

  // ===================== 2. INTERFAZ =====================
  {
    section: 2,
    sectionTitle: 'INTERFAZ P (puerto)',
    id: '2a',
    enunciado: 'Define un contrato: toda operacion recibe un entero y devuelve un entero.',
    code: {
      php: `<?php
interface Operacion {
    public function aplicar(int $n): int;
}
// Cualquier clase que implemente Operacion
// DEBE tener el metodo aplicar(int): int`,
      python: `from abc import ABC, abstractmethod

class Operacion(ABC):
    @abstractmethod
    def aplicar(self, n: int) -> int: ...
# Cualquier clase hija de Operacion
# DEBE implementar aplicar(n) -> int`,
      javascript: `// En JS el contrato es por convencion:
// toda clase debe tener aplicar(n) -> number
//
// No hay keyword "interface",
// se confía en que el objeto tenga el metodo`,
      typescript: `interface Operacion {
  aplicar(n: number): number;
}
// Cualquier clase que diga "implements Operacion"
// DEBE tener el metodo aplicar(n): number`,
      java: `interface Operacion {
    int aplicar(int n);
}
// Cualquier clase que diga "implements Operacion"
// DEBE tener el metodo aplicar(int): int`,
      csharp: `interface IOperacion {
    int Aplicar(int n);
}
// Cualquier clase que diga ": IOperacion"
// DEBE tener el metodo Aplicar(int): int`,
    },
    output: '(contrato definido, no ejecuta nada)',
  },
  {
    section: 2,
    sectionTitle: 'INTERFAZ P (puerto)',
    id: '2b',
    enunciado: 'Define un contrato para comparar: recibe dos enteros, devuelve bool.',
    code: {
      php: `<?php
interface Comparador {
    public function comparar(int $a, int $b): bool;
}`,
      python: `from abc import ABC, abstractmethod

class Comparador(ABC):
    @abstractmethod
    def comparar(self, a: int, b: int) -> bool: ...`,
      javascript: `// Contrato por convencion:
// comparar(a, b) -> boolean`,
      typescript: `interface Comparador {
  comparar(a: number, b: number): boolean;
}`,
      java: `interface Comparador {
    boolean comparar(int a, int b);
}`,
      csharp: `interface IComparador {
    bool Comparar(int a, int b);
}`,
    },
    output: '(contrato definido, no ejecuta nada)',
  },
  {
    section: 2,
    sectionTitle: 'INTERFAZ P (puerto)',
    id: '2c',
    enunciado: 'Define un contrato para transformar texto: recibe string, devuelve string.',
    code: {
      php: `<?php
interface Transformador {
    public function transformar(string $texto): string;
}`,
      python: `from abc import ABC, abstractmethod

class Transformador(ABC):
    @abstractmethod
    def transformar(self, texto: str) -> str: ...`,
      javascript: `// Contrato por convencion:
// transformar(texto) -> string`,
      typescript: `interface Transformador {
  transformar(texto: string): string;
}`,
      java: `interface Transformador {
    String transformar(String texto);
}`,
      csharp: `interface ITransformador {
    string Transformar(string texto);
}`,
    },
    output: '(contrato definido, no ejecuta nada)',
  },

  // ===================== 3. POLIMORFISMO =====================
  {
    section: 3,
    sectionTitle: 'POLIMORFISMO',
    id: '3a',
    enunciado:
      'Dos clases cumplen el mismo contrato: una suma 10, otra multiplica por 3. Pasa ambas a la misma funcion.',
    code: {
      php: `<?php
interface Operacion {
    public function aplicar(int $n): int;
}
class Sumar10 implements Operacion {
    public function aplicar(int $n): int {
        return $n + 10;
    }
}
class Multiplicar3 implements Operacion {
    public function aplicar(int $n): int {
        return $n * 3;
    }
}
function ejecutar(Operacion $op, int $x): int {
    return $op->aplicar($x);
}
echo ejecutar(new Sumar10(), 5) . "\\n";
echo ejecutar(new Multiplicar3(), 5);`,
      python: `from abc import ABC, abstractmethod

class Operacion(ABC):
    @abstractmethod
    def aplicar(self, n: int) -> int: ...

class Sumar10(Operacion):
    def aplicar(self, n: int) -> int:
        return n + 10

class Multiplicar3(Operacion):
    def aplicar(self, n: int) -> int:
        return n * 3

def ejecutar(op: Operacion, x: int) -> int:
    return op.aplicar(x)

print(ejecutar(Sumar10(), 5))
print(ejecutar(Multiplicar3(), 5))`,
      javascript: `class Sumar10 {
  aplicar(n) { return n + 10; }
}
class Multiplicar3 {
  aplicar(n) { return n * 3; }
}
function ejecutar(op, x) {
  return op.aplicar(x);
}
console.log(ejecutar(new Sumar10(), 5));
console.log(ejecutar(new Multiplicar3(), 5));`,
      typescript: `interface Operacion {
  aplicar(n: number): number;
}
class Sumar10 implements Operacion {
  aplicar(n: number): number { return n + 10; }
}
class Multiplicar3 implements Operacion {
  aplicar(n: number): number { return n * 3; }
}
function ejecutar(op: Operacion, x: number): number {
  return op.aplicar(x);
}
console.log(ejecutar(new Sumar10(), 5));
console.log(ejecutar(new Multiplicar3(), 5));`,
      java: `interface Operacion {
    int aplicar(int n);
}
class Sumar10 implements Operacion {
    public int aplicar(int n) { return n + 10; }
}
class Multiplicar3 implements Operacion {
    public int aplicar(int n) { return n * 3; }
}
static int ejecutar(Operacion op, int x) {
    return op.aplicar(x);
}
System.out.println(ejecutar(new Sumar10(), 5));
System.out.println(ejecutar(new Multiplicar3(), 5));`,
      csharp: `interface IOperacion {
    int Aplicar(int n);
}
class Sumar10 : IOperacion {
    public int Aplicar(int n) => n + 10;
}
class Multiplicar3 : IOperacion {
    public int Aplicar(int n) => n * 3;
}
static int Ejecutar(IOperacion op, int x) {
    return op.Aplicar(x);
}
Console.WriteLine(Ejecutar(new Sumar10(), 5));
Console.WriteLine(Ejecutar(new Multiplicar3(), 5));`,
    },
    output: '15\n15',
  },
  {
    section: 3,
    sectionTitle: 'POLIMORFISMO',
    id: '3b',
    enunciado:
      'Dos clases comparan numeros: una verifica si a > b, otra si a == b. Usa la misma funcion para ambas.',
    code: {
      php: `<?php
interface Comparador {
    public function comparar(int $a, int $b): bool;
}
class EsMayor implements Comparador {
    public function comparar(int $a, int $b): bool {
        return $a > $b;
    }
}
class EsIgual implements Comparador {
    public function comparar(int $a, int $b): bool {
        return $a === $b;
    }
}
function verificar(Comparador $c, int $a, int $b): string {
    return $c->comparar($a, $b) ? "SI" : "NO";
}
echo verificar(new EsMayor(), 10, 3) . "\\n";
echo verificar(new EsIgual(), 10, 3);`,
      python: `from abc import ABC, abstractmethod

class Comparador(ABC):
    @abstractmethod
    def comparar(self, a: int, b: int) -> bool: ...

class EsMayor(Comparador):
    def comparar(self, a: int, b: int) -> bool:
        return a > b

class EsIgual(Comparador):
    def comparar(self, a: int, b: int) -> bool:
        return a == b

def verificar(c: Comparador, a: int, b: int) -> str:
    return "SI" if c.comparar(a, b) else "NO"

print(verificar(EsMayor(), 10, 3))
print(verificar(EsIgual(), 10, 3))`,
      javascript: `class EsMayor {
  comparar(a, b) { return a > b; }
}
class EsIgual {
  comparar(a, b) { return a === b; }
}
function verificar(c, a, b) {
  return c.comparar(a, b) ? "SI" : "NO";
}
console.log(verificar(new EsMayor(), 10, 3));
console.log(verificar(new EsIgual(), 10, 3));`,
      typescript: `interface Comparador {
  comparar(a: number, b: number): boolean;
}
class EsMayor implements Comparador {
  comparar(a: number, b: number): boolean { return a > b; }
}
class EsIgual implements Comparador {
  comparar(a: number, b: number): boolean { return a === b; }
}
function verificar(c: Comparador, a: number, b: number): string {
  return c.comparar(a, b) ? "SI" : "NO";
}
console.log(verificar(new EsMayor(), 10, 3));
console.log(verificar(new EsIgual(), 10, 3));`,
      java: `interface Comparador {
    boolean comparar(int a, int b);
}
class EsMayor implements Comparador {
    public boolean comparar(int a, int b) { return a > b; }
}
class EsIgual implements Comparador {
    public boolean comparar(int a, int b) { return a == b; }
}
static String verificar(Comparador c, int a, int b) {
    return c.comparar(a, b) ? "SI" : "NO";
}
System.out.println(verificar(new EsMayor(), 10, 3));
System.out.println(verificar(new EsIgual(), 10, 3));`,
      csharp: `interface IComparador {
    bool Comparar(int a, int b);
}
class EsMayor : IComparador {
    public bool Comparar(int a, int b) => a > b;
}
class EsIgual : IComparador {
    public bool Comparar(int a, int b) => a == b;
}
static string Verificar(IComparador c, int a, int b) {
    return c.Comparar(a, b) ? "SI" : "NO";
}
Console.WriteLine(Verificar(new EsMayor(), 10, 3));
Console.WriteLine(Verificar(new EsIgual(), 10, 3));`,
    },
    output: 'SI\nNO',
  },
  {
    section: 3,
    sectionTitle: 'POLIMORFISMO',
    id: '3c',
    enunciado:
      'Dos transformadores de texto: uno pone en mayusculas, otro cuenta las letras. Misma funcion los usa.',
    code: {
      php: `<?php
interface Transformador {
    public function transformar(string $t): string;
}
class AMayusculas implements Transformador {
    public function transformar(string $t): string {
        return strtoupper($t);
    }
}
class ContarLetras implements Transformador {
    public function transformar(string $t): string {
        return (string) strlen($t);
    }
}
function procesar(Transformador $tr, string $txt): string {
    return $tr->transformar($txt);
}
echo procesar(new AMayusculas(), "hola") . "\\n";
echo procesar(new ContarLetras(), "hola");`,
      python: `from abc import ABC, abstractmethod

class Transformador(ABC):
    @abstractmethod
    def transformar(self, t: str) -> str: ...

class AMayusculas(Transformador):
    def transformar(self, t: str) -> str:
        return t.upper()

class ContarLetras(Transformador):
    def transformar(self, t: str) -> str:
        return str(len(t))

def procesar(tr: Transformador, txt: str) -> str:
    return tr.transformar(txt)

print(procesar(AMayusculas(), "hola"))
print(procesar(ContarLetras(), "hola"))`,
      javascript: `class AMayusculas {
  transformar(t) { return t.toUpperCase(); }
}
class ContarLetras {
  transformar(t) { return String(t.length); }
}
function procesar(tr, txt) {
  return tr.transformar(txt);
}
console.log(procesar(new AMayusculas(), "hola"));
console.log(procesar(new ContarLetras(), "hola"));`,
      typescript: `interface Transformador {
  transformar(t: string): string;
}
class AMayusculas implements Transformador {
  transformar(t: string): string { return t.toUpperCase(); }
}
class ContarLetras implements Transformador {
  transformar(t: string): string { return String(t.length); }
}
function procesar(tr: Transformador, txt: string): string {
  return tr.transformar(txt);
}
console.log(procesar(new AMayusculas(), "hola"));
console.log(procesar(new ContarLetras(), "hola"));`,
      java: `interface Transformador {
    String transformar(String t);
}
class AMayusculas implements Transformador {
    public String transformar(String t) {
        return t.toUpperCase();
    }
}
class ContarLetras implements Transformador {
    public String transformar(String t) {
        return String.valueOf(t.length());
    }
}
static String procesar(Transformador tr, String txt) {
    return tr.transformar(txt);
}
System.out.println(procesar(new AMayusculas(), "hola"));
System.out.println(procesar(new ContarLetras(), "hola"));`,
      csharp: `interface ITransformador {
    string Transformar(string t);
}
class AMayusculas : ITransformador {
    public string Transformar(string t) => t.ToUpper();
}
class ContarLetras : ITransformador {
    public string Transformar(string t)
        => t.Length.ToString();
}
static string Procesar(ITransformador tr, string txt) {
    return tr.Transformar(txt);
}
Console.WriteLine(Procesar(new AMayusculas(), "hola"));
Console.WriteLine(Procesar(new ContarLetras(), "hola"));`,
    },
    output: 'HOLA\n4',
  },

  // ===================== 4. INVERSION DE DEPENDENCIAS =====================
  {
    section: 4,
    sectionTitle: 'INVERSION DE DEPENDENCIAS (DIP)',
    id: '4a',
    enunciado:
      'Un servicio recibe una operacion desde afuera y la aplica. El no decide cual operacion usar.',
    code: {
      php: `<?php
interface Operacion {
    public function aplicar(int $n): int;
}
class Sumar10 implements Operacion {
    public function aplicar(int $n): int {
        return $n + 10;
    }
}
class Servicio {
    public function __construct(private Operacion $op) {}
    public function ejecutar(int $x): int {
        return $this->op->aplicar($x);
    }
}
$s = new Servicio(new Sumar10());
echo $s->ejecutar(5);`,
      python: `from abc import ABC, abstractmethod

class Operacion(ABC):
    @abstractmethod
    def aplicar(self, n: int) -> int: ...

class Sumar10(Operacion):
    def aplicar(self, n: int) -> int:
        return n + 10

class Servicio:
    def __init__(self, op: Operacion):
        self.op = op
    def ejecutar(self, x: int) -> int:
        return self.op.aplicar(x)

s = Servicio(Sumar10())
print(s.ejecutar(5))`,
      javascript: `class Sumar10 {
  aplicar(n) { return n + 10; }
}
class Servicio {
  constructor(op) { this.op = op; }
  ejecutar(x) { return this.op.aplicar(x); }
}
const s = new Servicio(new Sumar10());
console.log(s.ejecutar(5));`,
      typescript: `interface Operacion {
  aplicar(n: number): number;
}
class Sumar10 implements Operacion {
  aplicar(n: number): number { return n + 10; }
}
class Servicio {
  constructor(private op: Operacion) {}
  ejecutar(x: number): number {
      return this.op.aplicar(x);
  }
}
const s = new Servicio(new Sumar10());
console.log(s.ejecutar(5));`,
      java: `interface Operacion {
    int aplicar(int n);
}
class Sumar10 implements Operacion {
    public int aplicar(int n) { return n + 10; }
}
class Servicio {
    private Operacion op;
    Servicio(Operacion op) { this.op = op; }
    int ejecutar(int x) { return op.aplicar(x); }
}
Servicio s = new Servicio(new Sumar10());
System.out.println(s.ejecutar(5));`,
      csharp: `interface IOperacion {
    int Aplicar(int n);
}
class Sumar10 : IOperacion {
    public int Aplicar(int n) => n + 10;
}
class Servicio {
    private readonly IOperacion op;
    public Servicio(IOperacion op) => this.op = op;
    public int Ejecutar(int x) => op.Aplicar(x);
}
var s = new Servicio(new Sumar10());
Console.WriteLine(s.Ejecutar(5));`,
    },
    output: '15',
  },
  {
    section: 4,
    sectionTitle: 'INVERSION DE DEPENDENCIAS (DIP)',
    id: '4b',
    enunciado:
      'Mismo servicio, pero ahora le inyectas Multiplicar3 en vez de Sumar10. Sin tocar el servicio.',
    code: {
      php: `<?php
// Operacion y Servicio ya definidos arriba
class Multiplicar3 implements Operacion {
    public function aplicar(int $n): int {
        return $n * 3;
    }
}
$s = new Servicio(new Multiplicar3());
echo $s->ejecutar(5);`,
      python: `# Operacion y Servicio ya definidos arriba
class Multiplicar3(Operacion):
    def aplicar(self, n: int) -> int:
        return n * 3

s = Servicio(Multiplicar3())
print(s.ejecutar(5))`,
      javascript: `// Servicio ya definido arriba
class Multiplicar3 {
  aplicar(n) { return n * 3; }
}
const s = new Servicio(new Multiplicar3());
console.log(s.ejecutar(5));`,
      typescript: `// Operacion y Servicio ya definidos arriba
class Multiplicar3 implements Operacion {
  aplicar(n: number): number { return n * 3; }
}
const s = new Servicio(new Multiplicar3());
console.log(s.ejecutar(5));`,
      java: `// Operacion y Servicio ya definidos arriba
class Multiplicar3 implements Operacion {
    public int aplicar(int n) { return n * 3; }
}
Servicio s = new Servicio(new Multiplicar3());
System.out.println(s.ejecutar(5));`,
      csharp: `// IOperacion y Servicio ya definidos arriba
class Multiplicar3 : IOperacion {
    public int Aplicar(int n) => n * 3;
}
var s = new Servicio(new Multiplicar3());
Console.WriteLine(s.Ejecutar(5));`,
    },
    output: '15',
  },
  {
    section: 4,
    sectionTitle: 'INVERSION DE DEPENDENCIAS (DIP)',
    id: '4c',
    enunciado:
      'Crea un servicio que reciba un Comparador y diga si 10 es mayor que 3.',
    code: {
      php: `<?php
interface Comparador {
    public function comparar(int $a, int $b): bool;
}
class EsMayor implements Comparador {
    public function comparar(int $a, int $b): bool {
        return $a > $b;
    }
}
class ServicioComp {
    public function __construct(private Comparador $c) {}
    public function verificar(int $a, int $b): string {
        return $this->c->comparar($a, $b) ? "SI" : "NO";
    }
}
$sc = new ServicioComp(new EsMayor());
echo $sc->verificar(10, 3);`,
      python: `from abc import ABC, abstractmethod

class Comparador(ABC):
    @abstractmethod
    def comparar(self, a: int, b: int) -> bool: ...

class EsMayor(Comparador):
    def comparar(self, a: int, b: int) -> bool:
        return a > b

class ServicioComp:
    def __init__(self, c: Comparador):
        self.c = c
    def verificar(self, a: int, b: int) -> str:
        return "SI" if self.c.comparar(a, b) else "NO"

sc = ServicioComp(EsMayor())
print(sc.verificar(10, 3))`,
      javascript: `class EsMayor {
  comparar(a, b) { return a > b; }
}
class ServicioComp {
  constructor(c) { this.c = c; }
  verificar(a, b) {
    return this.c.comparar(a, b) ? "SI" : "NO";
  }
}
const sc = new ServicioComp(new EsMayor());
console.log(sc.verificar(10, 3));`,
      typescript: `interface Comparador {
  comparar(a: number, b: number): boolean;
}
class EsMayor implements Comparador {
  comparar(a: number, b: number): boolean {
    return a > b;
  }
}
class ServicioComp {
  constructor(private c: Comparador) {}
  verificar(a: number, b: number): string {
    return this.c.comparar(a, b) ? "SI" : "NO";
  }
}
const sc = new ServicioComp(new EsMayor());
console.log(sc.verificar(10, 3));`,
      java: `interface Comparador {
    boolean comparar(int a, int b);
}
class EsMayor implements Comparador {
    public boolean comparar(int a, int b) {
        return a > b;
    }
}
class ServicioComp {
    private Comparador c;
    ServicioComp(Comparador c) { this.c = c; }
    String verificar(int a, int b) {
        return c.comparar(a, b) ? "SI" : "NO";
    }
}
ServicioComp sc = new ServicioComp(new EsMayor());
System.out.println(sc.verificar(10, 3));`,
      csharp: `interface IComparador {
    bool Comparar(int a, int b);
}
class EsMayor : IComparador {
    public bool Comparar(int a, int b) => a > b;
}
class ServicioComp {
    private readonly IComparador c;
    public ServicioComp(IComparador c) => this.c = c;
    public string Verificar(int a, int b)
        => c.Comparar(a, b) ? "SI" : "NO";
}
var sc = new ServicioComp(new EsMayor());
Console.WriteLine(sc.Verificar(10, 3));`,
    },
    output: 'SI',
  },
]
