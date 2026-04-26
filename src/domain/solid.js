// Principios SOLID - antes (mal) y despues (bien)

export const solid = [
  // ============ S - Single Responsibility ============
  {
    category: 1,
    categoryTitle: 'Principios SOLID',
    id: 's1',
    title: 'S - Responsabilidad Unica',
    description:
      'Una clase debe tener una sola razon para cambiar. Si hace varias cosas, separar en clases distintas.',
    codeBad: {
      php: `<?php
class Calculadora {
    public function sumar(int $a, int $b): int {
        if ($a < 0 || $b < 0) {
            echo "Error: negativos\\n";
            return 0;
        }
        $r = $a + $b;
        echo "Resultado: $r\\n";
        return $r;
    }
}
$c = new Calculadora();
$c->sumar(3, 5);
$c->sumar(-1, 5);`,
      python: `class Calculadora:
    def sumar(self, a, b):
        if a < 0 or b < 0:
            print("Error: negativos")
            return 0
        r = a + b
        print(f"Resultado: {r}")
        return r

c = Calculadora()
c.sumar(3, 5)
c.sumar(-1, 5)`,
      javascript: `class Calculadora {
  sumar(a, b) {
    if (a < 0 || b < 0) {
      console.log("Error: negativos");
      return 0;
    }
    const r = a + b;
    console.log("Resultado: " + r);
    return r;
  }
}
const c = new Calculadora();
c.sumar(3, 5);
c.sumar(-1, 5);`,
      typescript: `class Calculadora {
  sumar(a: number, b: number): number {
    if (a < 0 || b < 0) {
      console.log("Error: negativos");
      return 0;
    }
    const r = a + b;
    console.log("Resultado: " + r);
    return r;
  }
}
const c = new Calculadora();
c.sumar(3, 5);
c.sumar(-1, 5);`,
      java: `class Calculadora {
    int sumar(int a, int b) {
        if (a < 0 || b < 0) {
            System.out.println("Error: negativos");
            return 0;
        }
        int r = a + b;
        System.out.println("Resultado: " + r);
        return r;
    }
}
Calculadora c = new Calculadora();
c.sumar(3, 5);
c.sumar(-1, 5);`,
      csharp: `class Calculadora {
    public int Sumar(int a, int b) {
        if (a < 0 || b < 0) {
            Console.WriteLine("Error: negativos");
            return 0;
        }
        int r = a + b;
        Console.WriteLine("Resultado: " + r);
        return r;
    }
}
var c = new Calculadora();
c.Sumar(3, 5);
c.Sumar(-1, 5);`,
    },
    code: {
      php: `<?php
class Validador {
    public function esValido(int $a, int $b): bool {
        return $a >= 0 && $b >= 0;
    }
}
class Calculadora {
    public function sumar(int $a, int $b): int {
        return $a + $b;
    }
}
class Impresora {
    public function mostrar(string $msg): void {
        echo "$msg\\n";
    }
}
$v = new Validador();
$calc = new Calculadora();
$imp = new Impresora();
if ($v->esValido(3, 5)) {
    $imp->mostrar("Resultado: " . $calc->sumar(3, 5));
}
if (!$v->esValido(-1, 5)) {
    $imp->mostrar("Error: negativos");
}`,
      python: `class Validador:
    def es_valido(self, a, b):
        return a >= 0 and b >= 0

class Calculadora:
    def sumar(self, a, b):
        return a + b

class Impresora:
    def mostrar(self, msg):
        print(msg)

v = Validador()
calc = Calculadora()
imp = Impresora()
if v.es_valido(3, 5):
    imp.mostrar(f"Resultado: {calc.sumar(3, 5)}")
if not v.es_valido(-1, 5):
    imp.mostrar("Error: negativos")`,
      javascript: `class Validador {
  esValido(a, b) { return a >= 0 && b >= 0; }
}
class Calculadora {
  sumar(a, b) { return a + b; }
}
class Impresora {
  mostrar(msg) { console.log(msg); }
}
const v = new Validador();
const calc = new Calculadora();
const imp = new Impresora();
if (v.esValido(3, 5)) {
  imp.mostrar("Resultado: " + calc.sumar(3, 5));
}
if (!v.esValido(-1, 5)) {
  imp.mostrar("Error: negativos");
}`,
      typescript: `class Validador {
  esValido(a: number, b: number): boolean {
    return a >= 0 && b >= 0;
  }
}
class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }
}
class Impresora {
  mostrar(msg: string): void { console.log(msg); }
}
const v = new Validador();
const calc = new Calculadora();
const imp = new Impresora();
if (v.esValido(3, 5)) {
  imp.mostrar("Resultado: " + calc.sumar(3, 5));
}
if (!v.esValido(-1, 5)) {
  imp.mostrar("Error: negativos");
}`,
      java: `class Validador {
    boolean esValido(int a, int b) {
        return a >= 0 && b >= 0;
    }
}
class Calculadora {
    int sumar(int a, int b) { return a + b; }
}
class Impresora {
    void mostrar(String msg) {
        System.out.println(msg);
    }
}
Validador v = new Validador();
Calculadora calc = new Calculadora();
Impresora imp = new Impresora();
if (v.esValido(3, 5)) {
    imp.mostrar("Resultado: " + calc.sumar(3, 5));
}
if (!v.esValido(-1, 5)) {
    imp.mostrar("Error: negativos");
}`,
      csharp: `class Validador {
    public bool EsValido(int a, int b) =>
        a >= 0 && b >= 0;
}
class Calculadora {
    public int Sumar(int a, int b) => a + b;
}
class Impresora {
    public void Mostrar(string msg) =>
        Console.WriteLine(msg);
}
var v = new Validador();
var calc = new Calculadora();
var imp = new Impresora();
if (v.EsValido(3, 5))
    imp.Mostrar("Resultado: " + calc.Sumar(3, 5));
if (!v.EsValido(-1, 5))
    imp.Mostrar("Error: negativos");`,
    },
    outputBad: 'Resultado: 8\nError: negativos',
    output: 'Resultado: 8\nError: negativos',
  },

  // ============ O - Open/Closed ============
  {
    category: 1,
    categoryTitle: 'Principios SOLID',
    id: 's2',
    title: 'O - Abierto/Cerrado',
    description:
      'Las clases deben estar abiertas a extension pero cerradas a modificacion. Agregar comportamiento sin tocar codigo existente.',
    codeBad: {
      php: `<?php
function calcular(string $op, int $a, int $b): int {
    if ($op === "suma") {
        return $a + $b;
    } elseif ($op === "resta") {
        return $a - $b;
    } elseif ($op === "multi") {
        return $a * $b;
    }
    return 0;
}
echo calcular("suma", 4, 3) . "\\n";
echo calcular("resta", 10, 6) . "\\n";
echo calcular("multi", 5, 2) . "\\n";`,
      python: `def calcular(op, a, b):
    if op == "suma":
        return a + b
    elif op == "resta":
        return a - b
    elif op == "multi":
        return a * b
    return 0

print(calcular("suma", 4, 3))
print(calcular("resta", 10, 6))
print(calcular("multi", 5, 2))`,
      javascript: `function calcular(op, a, b) {
  if (op === "suma") return a + b;
  if (op === "resta") return a - b;
  if (op === "multi") return a * b;
  return 0;
}
console.log(calcular("suma", 4, 3));
console.log(calcular("resta", 10, 6));
console.log(calcular("multi", 5, 2));`,
      typescript: `function calcular(op: string, a: number, b: number): number {
  if (op === "suma") return a + b;
  if (op === "resta") return a - b;
  if (op === "multi") return a * b;
  return 0;
}
console.log(calcular("suma", 4, 3));
console.log(calcular("resta", 10, 6));
console.log(calcular("multi", 5, 2));`,
      java: `static int calcular(String op, int a, int b) {
    if (op.equals("suma")) return a + b;
    if (op.equals("resta")) return a - b;
    if (op.equals("multi")) return a * b;
    return 0;
}
System.out.println(calcular("suma", 4, 3));
System.out.println(calcular("resta", 10, 6));
System.out.println(calcular("multi", 5, 2));`,
      csharp: `static int Calcular(string op, int a, int b) {
    if (op == "suma") return a + b;
    if (op == "resta") return a - b;
    if (op == "multi") return a * b;
    return 0;
}
Console.WriteLine(Calcular("suma", 4, 3));
Console.WriteLine(Calcular("resta", 10, 6));
Console.WriteLine(Calcular("multi", 5, 2));`,
    },
    code: {
      php: `<?php
interface Operacion {
    public function ejecutar(int $a, int $b): int;
}
class Suma implements Operacion {
    public function ejecutar(int $a, int $b): int {
        return $a + $b;
    }
}
class Resta implements Operacion {
    public function ejecutar(int $a, int $b): int {
        return $a - $b;
    }
}
class Multi implements Operacion {
    public function ejecutar(int $a, int $b): int {
        return $a * $b;
    }
}
function calcular(Operacion $op, int $a, int $b): int {
    return $op->ejecutar($a, $b);
}
echo calcular(new Suma(), 4, 3) . "\\n";
echo calcular(new Resta(), 10, 6) . "\\n";
echo calcular(new Multi(), 5, 2) . "\\n";`,
      python: `from abc import ABC, abstractmethod

class Operacion(ABC):
    @abstractmethod
    def ejecutar(self, a, b): pass

class Suma(Operacion):
    def ejecutar(self, a, b): return a + b

class Resta(Operacion):
    def ejecutar(self, a, b): return a - b

class Multi(Operacion):
    def ejecutar(self, a, b): return a * b

def calcular(op, a, b):
    return op.ejecutar(a, b)

print(calcular(Suma(), 4, 3))
print(calcular(Resta(), 10, 6))
print(calcular(Multi(), 5, 2))`,
      javascript: `class Suma {
  ejecutar(a, b) { return a + b; }
}
class Resta {
  ejecutar(a, b) { return a - b; }
}
class Multi {
  ejecutar(a, b) { return a * b; }
}
function calcular(op, a, b) {
  return op.ejecutar(a, b);
}
console.log(calcular(new Suma(), 4, 3));
console.log(calcular(new Resta(), 10, 6));
console.log(calcular(new Multi(), 5, 2));`,
      typescript: `interface Operacion {
  ejecutar(a: number, b: number): number;
}
class Suma implements Operacion {
  ejecutar(a: number, b: number) { return a + b; }
}
class Resta implements Operacion {
  ejecutar(a: number, b: number) { return a - b; }
}
class Multi implements Operacion {
  ejecutar(a: number, b: number) { return a * b; }
}
function calcular(op: Operacion, a: number, b: number) {
  return op.ejecutar(a, b);
}
console.log(calcular(new Suma(), 4, 3));
console.log(calcular(new Resta(), 10, 6));
console.log(calcular(new Multi(), 5, 2));`,
      java: `interface Operacion {
    int ejecutar(int a, int b);
}
class Suma implements Operacion {
    public int ejecutar(int a, int b) {
        return a + b;
    }
}
class Resta implements Operacion {
    public int ejecutar(int a, int b) {
        return a - b;
    }
}
class Multi implements Operacion {
    public int ejecutar(int a, int b) {
        return a * b;
    }
}
Operacion op = new Suma();
System.out.println(op.ejecutar(4, 3));
op = new Resta();
System.out.println(op.ejecutar(10, 6));
op = new Multi();
System.out.println(op.ejecutar(5, 2));`,
      csharp: `interface IOperacion {
    int Ejecutar(int a, int b);
}
class Suma : IOperacion {
    public int Ejecutar(int a, int b) => a + b;
}
class Resta : IOperacion {
    public int Ejecutar(int a, int b) => a - b;
}
class Multi : IOperacion {
    public int Ejecutar(int a, int b) => a * b;
}
IOperacion op = new Suma();
Console.WriteLine(op.Ejecutar(4, 3));
op = new Resta();
Console.WriteLine(op.Ejecutar(10, 6));
op = new Multi();
Console.WriteLine(op.Ejecutar(5, 2));`,
    },
    outputBad: '7\n4\n10',
    output: '7\n4\n10',
  },

  // ============ L - Liskov Substitution ============
  {
    category: 1,
    categoryTitle: 'Principios SOLID',
    id: 's3',
    title: 'L - Sustitucion de Liskov',
    description:
      'Las subclases deben poder usarse en lugar de la clase base sin romper el comportamiento esperado.',
    codeBad: {
      php: `<?php
class Rectangulo {
    protected int $ancho;
    protected int $alto;
    public function setAncho(int $v): void { $this->ancho = $v; }
    public function setAlto(int $v): void { $this->alto = $v; }
    public function area(): int {
        return $this->ancho * $this->alto;
    }
}
class Cuadrado extends Rectangulo {
    public function setAncho(int $v): void {
        $this->ancho = $v;
        $this->alto = $v;
    }
    public function setAlto(int $v): void {
        $this->ancho = $v;
        $this->alto = $v;
    }
}
$r = new Cuadrado();
$r->setAncho(5);
$r->setAlto(3);
echo $r->area();`,
      python: `class Rectangulo:
    def __init__(self):
        self.ancho = 0
        self.alto = 0
    def set_ancho(self, v):
        self.ancho = v
    def set_alto(self, v):
        self.alto = v
    def area(self):
        return self.ancho * self.alto

class Cuadrado(Rectangulo):
    def set_ancho(self, v):
        self.ancho = v
        self.alto = v
    def set_alto(self, v):
        self.ancho = v
        self.alto = v

r = Cuadrado()
r.set_ancho(5)
r.set_alto(3)
print(r.area())`,
      javascript: `class Rectangulo {
  constructor() { this.ancho = 0; this.alto = 0; }
  setAncho(v) { this.ancho = v; }
  setAlto(v) { this.alto = v; }
  area() { return this.ancho * this.alto; }
}
class Cuadrado extends Rectangulo {
  setAncho(v) { this.ancho = v; this.alto = v; }
  setAlto(v) { this.ancho = v; this.alto = v; }
}
const r = new Cuadrado();
r.setAncho(5);
r.setAlto(3);
console.log(r.area());`,
      typescript: `class Rectangulo {
  protected ancho = 0;
  protected alto = 0;
  setAncho(v: number) { this.ancho = v; }
  setAlto(v: number) { this.alto = v; }
  area(): number { return this.ancho * this.alto; }
}
class Cuadrado extends Rectangulo {
  setAncho(v: number) { this.ancho = v; this.alto = v; }
  setAlto(v: number) { this.ancho = v; this.alto = v; }
}
const r: Rectangulo = new Cuadrado();
r.setAncho(5);
r.setAlto(3);
console.log(r.area());`,
      java: `class Rectangulo {
    protected int ancho, alto;
    void setAncho(int v) { ancho = v; }
    void setAlto(int v) { alto = v; }
    int area() { return ancho * alto; }
}
class Cuadrado extends Rectangulo {
    void setAncho(int v) { ancho = v; alto = v; }
    void setAlto(int v) { ancho = v; alto = v; }
}
Rectangulo r = new Cuadrado();
r.setAncho(5);
r.setAlto(3);
System.out.println(r.area());`,
      csharp: `class Rectangulo {
    protected int ancho, alto;
    public virtual void SetAncho(int v) { ancho = v; }
    public virtual void SetAlto(int v) { alto = v; }
    public int Area() => ancho * alto;
}
class Cuadrado : Rectangulo {
    public override void SetAncho(int v) {
        ancho = v; alto = v;
    }
    public override void SetAlto(int v) {
        ancho = v; alto = v;
    }
}
Rectangulo r = new Cuadrado();
r.SetAncho(5);
r.SetAlto(3);
Console.WriteLine(r.Area());`,
    },
    code: {
      php: `<?php
interface Forma {
    public function area(): int;
}
class Rectangulo implements Forma {
    public function __construct(
        private int $ancho,
        private int $alto
    ) {}
    public function area(): int {
        return $this->ancho * $this->alto;
    }
}
class Cuadrado implements Forma {
    public function __construct(private int $lado) {}
    public function area(): int {
        return $this->lado * $this->lado;
    }
}
function mostrarArea(Forma $f): void {
    echo $f->area() . "\\n";
}
mostrarArea(new Rectangulo(5, 3));
mostrarArea(new Cuadrado(4));`,
      python: `from abc import ABC, abstractmethod

class Forma(ABC):
    @abstractmethod
    def area(self): pass

class Rectangulo(Forma):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto
    def area(self):
        return self.ancho * self.alto

class Cuadrado(Forma):
    def __init__(self, lado):
        self.lado = lado
    def area(self):
        return self.lado * self.lado

def mostrar_area(f):
    print(f.area())

mostrar_area(Rectangulo(5, 3))
mostrar_area(Cuadrado(4))`,
      javascript: `class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  area() { return this.ancho * this.alto; }
}
class Cuadrado {
  constructor(lado) { this.lado = lado; }
  area() { return this.lado * this.lado; }
}
function mostrarArea(f) {
  console.log(f.area());
}
mostrarArea(new Rectangulo(5, 3));
mostrarArea(new Cuadrado(4));`,
      typescript: `interface Forma {
  area(): number;
}
class Rectangulo implements Forma {
  constructor(private ancho: number, private alto: number) {}
  area(): number { return this.ancho * this.alto; }
}
class Cuadrado implements Forma {
  constructor(private lado: number) {}
  area(): number { return this.lado * this.lado; }
}
function mostrarArea(f: Forma): void {
  console.log(f.area());
}
mostrarArea(new Rectangulo(5, 3));
mostrarArea(new Cuadrado(4));`,
      java: `interface Forma {
    int area();
}
class Rectangulo implements Forma {
    private int ancho, alto;
    Rectangulo(int ancho, int alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    public int area() { return ancho * alto; }
}
class Cuadrado implements Forma {
    private int lado;
    Cuadrado(int lado) { this.lado = lado; }
    public int area() { return lado * lado; }
}
Forma f = new Rectangulo(5, 3);
System.out.println(f.area());
f = new Cuadrado(4);
System.out.println(f.area());`,
      csharp: `interface IForma {
    int Area();
}
class Rectangulo : IForma {
    private int ancho, alto;
    public Rectangulo(int ancho, int alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    public int Area() => ancho * alto;
}
class Cuadrado : IForma {
    private int lado;
    public Cuadrado(int lado) => this.lado = lado;
    public int Area() => lado * lado;
}
IForma f = new Rectangulo(5, 3);
Console.WriteLine(f.Area());
f = new Cuadrado(4);
Console.WriteLine(f.Area());`,
    },
    outputBad: '9',
    output: '15\n16',
  },

  // ============ I - Interface Segregation ============
  {
    category: 1,
    categoryTitle: 'Principios SOLID',
    id: 's4',
    title: 'I - Segregacion de Interfaces',
    description:
      'No obligar a una clase a implementar metodos que no necesita. Dividir interfaces grandes en pequenas y especificas.',
    codeBad: {
      php: `<?php
interface Trabajador {
    public function trabajar(): string;
    public function comer(): string;
    public function dormir(): string;
}
class Humano implements Trabajador {
    public function trabajar(): string { return "trabajando"; }
    public function comer(): string { return "comiendo"; }
    public function dormir(): string { return "durmiendo"; }
}
class Robot implements Trabajador {
    public function trabajar(): string { return "trabajando"; }
    public function comer(): string { return "N/A"; }
    public function dormir(): string { return "N/A"; }
}
$r = new Robot();
echo $r->trabajar() . "\\n";
echo $r->comer() . "\\n";
echo $r->dormir();`,
      python: `from abc import ABC, abstractmethod

class Trabajador(ABC):
    @abstractmethod
    def trabajar(self): pass
    @abstractmethod
    def comer(self): pass
    @abstractmethod
    def dormir(self): pass

class Humano(Trabajador):
    def trabajar(self): return "trabajando"
    def comer(self): return "comiendo"
    def dormir(self): return "durmiendo"

class Robot(Trabajador):
    def trabajar(self): return "trabajando"
    def comer(self): return "N/A"
    def dormir(self): return "N/A"

r = Robot()
print(r.trabajar())
print(r.comer())
print(r.dormir())`,
      javascript: `class Humano {
  trabajar() { return "trabajando"; }
  comer() { return "comiendo"; }
  dormir() { return "durmiendo"; }
}
class Robot {
  trabajar() { return "trabajando"; }
  comer() { return "N/A"; }
  dormir() { return "N/A"; }
}
const r = new Robot();
console.log(r.trabajar());
console.log(r.comer());
console.log(r.dormir());`,
      typescript: `interface Trabajador {
  trabajar(): string;
  comer(): string;
  dormir(): string;
}
class Humano implements Trabajador {
  trabajar() { return "trabajando"; }
  comer() { return "comiendo"; }
  dormir() { return "durmiendo"; }
}
class Robot implements Trabajador {
  trabajar() { return "trabajando"; }
  comer() { return "N/A"; }
  dormir() { return "N/A"; }
}
const r: Trabajador = new Robot();
console.log(r.trabajar());
console.log(r.comer());
console.log(r.dormir());`,
      java: `interface Trabajador {
    String trabajar();
    String comer();
    String dormir();
}
class Humano implements Trabajador {
    public String trabajar() { return "trabajando"; }
    public String comer() { return "comiendo"; }
    public String dormir() { return "durmiendo"; }
}
class Robot implements Trabajador {
    public String trabajar() { return "trabajando"; }
    public String comer() { return "N/A"; }
    public String dormir() { return "N/A"; }
}
Trabajador r = new Robot();
System.out.println(r.trabajar());
System.out.println(r.comer());
System.out.println(r.dormir());`,
      csharp: `interface ITrabajador {
    string Trabajar();
    string Comer();
    string Dormir();
}
class Humano : ITrabajador {
    public string Trabajar() => "trabajando";
    public string Comer() => "comiendo";
    public string Dormir() => "durmiendo";
}
class Robot : ITrabajador {
    public string Trabajar() => "trabajando";
    public string Comer() => "N/A";
    public string Dormir() => "N/A";
}
ITrabajador r = new Robot();
Console.WriteLine(r.Trabajar());
Console.WriteLine(r.Comer());
Console.WriteLine(r.Dormir());`,
    },
    code: {
      php: `<?php
interface Trabajable {
    public function trabajar(): string;
}
interface Alimentable {
    public function comer(): string;
    public function dormir(): string;
}
class Humano implements Trabajable, Alimentable {
    public function trabajar(): string { return "trabajando"; }
    public function comer(): string { return "comiendo"; }
    public function dormir(): string { return "durmiendo"; }
}
class Robot implements Trabajable {
    public function trabajar(): string { return "trabajando"; }
}
$h = new Humano();
echo $h->trabajar() . "\\n";
echo $h->comer() . "\\n";
$r = new Robot();
echo $r->trabajar();`,
      python: `from abc import ABC, abstractmethod

class Trabajable(ABC):
    @abstractmethod
    def trabajar(self): pass

class Alimentable(ABC):
    @abstractmethod
    def comer(self): pass
    @abstractmethod
    def dormir(self): pass

class Humano(Trabajable, Alimentable):
    def trabajar(self): return "trabajando"
    def comer(self): return "comiendo"
    def dormir(self): return "durmiendo"

class Robot(Trabajable):
    def trabajar(self): return "trabajando"

h = Humano()
print(h.trabajar())
print(h.comer())
r = Robot()
print(r.trabajar())`,
      javascript: `class Humano {
  trabajar() { return "trabajando"; }
  comer() { return "comiendo"; }
  dormir() { return "durmiendo"; }
}
class Robot {
  trabajar() { return "trabajando"; }
}
const h = new Humano();
console.log(h.trabajar());
console.log(h.comer());
const r = new Robot();
console.log(r.trabajar());`,
      typescript: `interface Trabajable {
  trabajar(): string;
}
interface Alimentable {
  comer(): string;
  dormir(): string;
}
class Humano implements Trabajable, Alimentable {
  trabajar() { return "trabajando"; }
  comer() { return "comiendo"; }
  dormir() { return "durmiendo"; }
}
class Robot implements Trabajable {
  trabajar() { return "trabajando"; }
}
const h: Trabajable & Alimentable = new Humano();
console.log(h.trabajar());
console.log(h.comer());
const r: Trabajable = new Robot();
console.log(r.trabajar());`,
      java: `interface Trabajable {
    String trabajar();
}
interface Alimentable {
    String comer();
    String dormir();
}
class Humano implements Trabajable, Alimentable {
    public String trabajar() { return "trabajando"; }
    public String comer() { return "comiendo"; }
    public String dormir() { return "durmiendo"; }
}
class Robot implements Trabajable {
    public String trabajar() { return "trabajando"; }
}
Humano h = new Humano();
System.out.println(h.trabajar());
System.out.println(h.comer());
Robot r = new Robot();
System.out.println(r.trabajar());`,
      csharp: `interface ITrabajable {
    string Trabajar();
}
interface IAlimentable {
    string Comer();
    string Dormir();
}
class Humano : ITrabajable, IAlimentable {
    public string Trabajar() => "trabajando";
    public string Comer() => "comiendo";
    public string Dormir() => "durmiendo";
}
class Robot : ITrabajable {
    public string Trabajar() => "trabajando";
}
var h = new Humano();
Console.WriteLine(h.Trabajar());
Console.WriteLine(h.Comer());
var r = new Robot();
Console.WriteLine(r.Trabajar());`,
    },
    outputBad: 'trabajando\nN/A\nN/A',
    output: 'trabajando\ncomiendo\ntrabajando',
  },

  // ============ D - Dependency Inversion ============
  {
    category: 1,
    categoryTitle: 'Principios SOLID',
    id: 's5',
    title: 'D - Inversion de Dependencias',
    description:
      'Los modulos de alto nivel no deben depender de modulos de bajo nivel. Ambos deben depender de abstracciones (interfaces).',
    codeBad: {
      php: `<?php
class Sumar10 {
    public function ejecutar(int $x): int {
        return $x + 10;
    }
}
class Servicio {
    private Sumar10 $op;
    public function __construct() {
        $this->op = new Sumar10();
    }
    public function procesar(int $x): int {
        return $this->op->ejecutar($x);
    }
}
$s = new Servicio();
echo $s->procesar(5);`,
      python: `class Sumar10:
    def ejecutar(self, x):
        return x + 10

class Servicio:
    def __init__(self):
        self.op = Sumar10()
    def procesar(self, x):
        return self.op.ejecutar(x)

s = Servicio()
print(s.procesar(5))`,
      javascript: `class Sumar10 {
  ejecutar(x) { return x + 10; }
}
class Servicio {
  constructor() {
    this.op = new Sumar10();
  }
  procesar(x) { return this.op.ejecutar(x); }
}
const s = new Servicio();
console.log(s.procesar(5));`,
      typescript: `class Sumar10 {
  ejecutar(x: number): number { return x + 10; }
}
class Servicio {
  private op: Sumar10;
  constructor() {
    this.op = new Sumar10();
  }
  procesar(x: number): number {
    return this.op.ejecutar(x);
  }
}
const s = new Servicio();
console.log(s.procesar(5));`,
      java: `class Sumar10 {
    int ejecutar(int x) { return x + 10; }
}
class Servicio {
    private Sumar10 op;
    Servicio() {
        this.op = new Sumar10();
    }
    int procesar(int x) { return op.ejecutar(x); }
}
Servicio s = new Servicio();
System.out.println(s.procesar(5));`,
      csharp: `class Sumar10 {
    public int Ejecutar(int x) => x + 10;
}
class Servicio {
    private Sumar10 op;
    public Servicio() {
        op = new Sumar10();
    }
    public int Procesar(int x) => op.Ejecutar(x);
}
var s = new Servicio();
Console.WriteLine(s.Procesar(5));`,
    },
    code: {
      php: `<?php
interface Operacion {
    public function ejecutar(int $x): int;
}
class Sumar10 implements Operacion {
    public function ejecutar(int $x): int {
        return $x + 10;
    }
}
class Multiplicar3 implements Operacion {
    public function ejecutar(int $x): int {
        return $x * 3;
    }
}
class Servicio {
    public function __construct(
        private Operacion $op
    ) {}
    public function procesar(int $x): int {
        return $this->op->ejecutar($x);
    }
}
$s1 = new Servicio(new Sumar10());
echo $s1->procesar(5) . "\\n";
$s2 = new Servicio(new Multiplicar3());
echo $s2->procesar(5);`,
      python: `from abc import ABC, abstractmethod

class Operacion(ABC):
    @abstractmethod
    def ejecutar(self, x): pass

class Sumar10(Operacion):
    def ejecutar(self, x): return x + 10

class Multiplicar3(Operacion):
    def ejecutar(self, x): return x * 3

class Servicio:
    def __init__(self, op):
        self.op = op
    def procesar(self, x):
        return self.op.ejecutar(x)

s1 = Servicio(Sumar10())
print(s1.procesar(5))
s2 = Servicio(Multiplicar3())
print(s2.procesar(5))`,
      javascript: `class Sumar10 {
  ejecutar(x) { return x + 10; }
}
class Multiplicar3 {
  ejecutar(x) { return x * 3; }
}
class Servicio {
  constructor(op) { this.op = op; }
  procesar(x) { return this.op.ejecutar(x); }
}
const s1 = new Servicio(new Sumar10());
console.log(s1.procesar(5));
const s2 = new Servicio(new Multiplicar3());
console.log(s2.procesar(5));`,
      typescript: `interface Operacion {
  ejecutar(x: number): number;
}
class Sumar10 implements Operacion {
  ejecutar(x: number) { return x + 10; }
}
class Multiplicar3 implements Operacion {
  ejecutar(x: number) { return x * 3; }
}
class Servicio {
  constructor(private op: Operacion) {}
  procesar(x: number): number {
    return this.op.ejecutar(x);
  }
}
const s1 = new Servicio(new Sumar10());
console.log(s1.procesar(5));
const s2 = new Servicio(new Multiplicar3());
console.log(s2.procesar(5));`,
      java: `interface Operacion {
    int ejecutar(int x);
}
class Sumar10 implements Operacion {
    public int ejecutar(int x) { return x + 10; }
}
class Multiplicar3 implements Operacion {
    public int ejecutar(int x) { return x * 3; }
}
class Servicio {
    private Operacion op;
    Servicio(Operacion op) { this.op = op; }
    int procesar(int x) { return op.ejecutar(x); }
}
Servicio s1 = new Servicio(new Sumar10());
System.out.println(s1.procesar(5));
Servicio s2 = new Servicio(new Multiplicar3());
System.out.println(s2.procesar(5));`,
      csharp: `interface IOperacion {
    int Ejecutar(int x);
}
class Sumar10 : IOperacion {
    public int Ejecutar(int x) => x + 10;
}
class Multiplicar3 : IOperacion {
    public int Ejecutar(int x) => x * 3;
}
class Servicio {
    private IOperacion op;
    public Servicio(IOperacion op) => this.op = op;
    public int Procesar(int x) => op.Ejecutar(x);
}
var s1 = new Servicio(new Sumar10());
Console.WriteLine(s1.Procesar(5));
var s2 = new Servicio(new Multiplicar3());
Console.WriteLine(s2.Procesar(5));`,
    },
    outputBad: '15',
    output: '15\n15',
  },
];
