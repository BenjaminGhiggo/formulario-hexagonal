// Programacion Orientada a Objetos - Conceptos con ejemplos aritmeticos

export const poo = [
  // ============= 1. Los 4 pilares =============
  {
    category: 1,
    categoryTitle: 'Los 4 pilares',
    id: 'o1',
    title: 'Encapsulamiento',
    description: 'Atributos privados con acceso controlado via getters y setters.',
    code: {
      php: `<?php
class CuentaBancaria {
    private $saldo = 0;
    public function depositar($monto) {
        $this->saldo += $monto;
    }
    public function retirar($monto) {
        $this->saldo -= $monto;
    }
    public function getSaldo() {
        return $this->saldo;
    }
}
$cuenta = new CuentaBancaria();
$cuenta->depositar(100);
$cuenta->retirar(30);
echo "saldo: " . $cuenta->getSaldo();`,
      python: `class CuentaBancaria:
    def __init__(self):
        self.__saldo = 0
    def depositar(self, monto):
        self.__saldo += monto
    def retirar(self, monto):
        self.__saldo -= monto
    def get_saldo(self):
        return self.__saldo

cuenta = CuentaBancaria()
cuenta.depositar(100)
cuenta.retirar(30)
print(f"saldo: {cuenta.get_saldo()}")`,
      javascript: `class CuentaBancaria {
  #saldo = 0;
  depositar(monto) { this.#saldo += monto; }
  retirar(monto) { this.#saldo -= monto; }
  getSaldo() { return this.#saldo; }
}
const cuenta = new CuentaBancaria();
cuenta.depositar(100);
cuenta.retirar(30);
console.log("saldo: " + cuenta.getSaldo());`,
      typescript: `class CuentaBancaria {
  private saldo: number = 0;
  depositar(monto: number) { this.saldo += monto; }
  retirar(monto: number) { this.saldo -= monto; }
  getSaldo(): number { return this.saldo; }
}
const cuenta = new CuentaBancaria();
cuenta.depositar(100);
cuenta.retirar(30);
console.log("saldo: " + cuenta.getSaldo());`,
      java: `class CuentaBancaria {
    private int saldo = 0;
    public void depositar(int monto) { saldo += monto; }
    public void retirar(int monto) { saldo -= monto; }
    public int getSaldo() { return saldo; }
}
CuentaBancaria cuenta = new CuentaBancaria();
cuenta.depositar(100);
cuenta.retirar(30);
System.out.println("saldo: " + cuenta.getSaldo());`,
      csharp: `class CuentaBancaria {
    private int saldo = 0;
    public void Depositar(int monto) { saldo += monto; }
    public void Retirar(int monto) { saldo -= monto; }
    public int GetSaldo() { return saldo; }
}
var cuenta = new CuentaBancaria();
cuenta.Depositar(100);
cuenta.Retirar(30);
Console.WriteLine("saldo: " + cuenta.GetSaldo());`,
    },
    output: 'saldo: 70',
  },
  {
    category: 1,
    categoryTitle: 'Los 4 pilares',
    id: 'o2',
    title: 'Herencia',
    description: 'Clase hija extiende clase padre reutilizando atributos y metodos.',
    code: {
      php: `<?php
class Figura {
    public $nombre;
    function __construct($nombre) {
        $this->nombre = $nombre;
    }
}
class Circulo extends Figura {
    public $radio;
    function __construct($radio) {
        parent::__construct("circulo");
        $this->radio = $radio;
    }
    function area() {
        return round(M_PI * $this->radio ** 2, 2);
    }
}
class Cuadrado extends Figura {
    public $lado;
    function __construct($lado) {
        parent::__construct("cuadrado");
        $this->lado = $lado;
    }
    function area() { return $this->lado ** 2; }
}
$c = new Circulo(5);
$q = new Cuadrado(5);
echo "circulo area: " . $c->area() . "\\n";
echo "cuadrado area: " . $q->area();`,
      python: `import math

class Figura:
    def __init__(self, nombre):
        self.nombre = nombre

class Circulo(Figura):
    def __init__(self, radio):
        super().__init__("circulo")
        self.radio = radio
    def area(self):
        return round(math.pi * self.radio ** 2, 2)

class Cuadrado(Figura):
    def __init__(self, lado):
        super().__init__("cuadrado")
        self.lado = lado
    def area(self):
        return self.lado ** 2

c = Circulo(5)
q = Cuadrado(5)
print(f"circulo area: {c.area()}")
print(f"cuadrado area: {q.area()}")`,
      javascript: `class Figura {
  constructor(nombre) { this.nombre = nombre; }
}
class Circulo extends Figura {
  constructor(radio) {
    super("circulo");
    this.radio = radio;
  }
  area() {
    return Math.round(Math.PI * this.radio ** 2 * 100) / 100;
  }
}
class Cuadrado extends Figura {
  constructor(lado) {
    super("cuadrado");
    this.lado = lado;
  }
  area() { return this.lado ** 2; }
}
const c = new Circulo(5);
const q = new Cuadrado(5);
console.log("circulo area: " + c.area());
console.log("cuadrado area: " + q.area());`,
      typescript: `class Figura {
  constructor(public nombre: string) {}
}
class Circulo extends Figura {
  constructor(public radio: number) {
    super("circulo");
  }
  area(): number {
    return Math.round(Math.PI * this.radio ** 2 * 100) / 100;
  }
}
class Cuadrado extends Figura {
  constructor(public lado: number) {
    super("cuadrado");
  }
  area(): number { return this.lado ** 2; }
}
const c = new Circulo(5);
const q = new Cuadrado(5);
console.log("circulo area: " + c.area());
console.log("cuadrado area: " + q.area());`,
      java: `class Figura {
    String nombre;
    Figura(String nombre) { this.nombre = nombre; }
}
class Circulo extends Figura {
    double radio;
    Circulo(double radio) {
        super("circulo");
        this.radio = radio;
    }
    double area() {
        return Math.round(Math.PI * radio * radio * 100.0) / 100.0;
    }
}
class Cuadrado extends Figura {
    int lado;
    Cuadrado(int lado) {
        super("cuadrado");
        this.lado = lado;
    }
    int area() { return lado * lado; }
}
Circulo c = new Circulo(5);
Cuadrado q = new Cuadrado(5);
System.out.println("circulo area: " + c.area());
System.out.println("cuadrado area: " + q.area());`,
      csharp: `class Figura {
    public string Nombre;
    public Figura(string nombre) { Nombre = nombre; }
}
class Circulo : Figura {
    public double Radio;
    public Circulo(double radio) : base("circulo") {
        Radio = radio;
    }
    public double Area() {
        return Math.Round(Math.PI * Radio * Radio, 2);
    }
}
class Cuadrado : Figura {
    public int Lado;
    public Cuadrado(int lado) : base("cuadrado") {
        Lado = lado;
    }
    public int Area() { return Lado * Lado; }
}
var c = new Circulo(5);
var q = new Cuadrado(5);
Console.WriteLine("circulo area: " + c.Area());
Console.WriteLine("cuadrado area: " + q.Area());`,
    },
    output: 'circulo area: 78.54\ncuadrado area: 25',
  },
  {
    category: 1,
    categoryTitle: 'Los 4 pilares',
    id: 'o3',
    title: 'Polimorfismo',
    description: 'Mismo metodo en distintas clases produce comportamiento diferente.',
    code: {
      php: `<?php
class Circulo {
    private $radio;
    function __construct($radio) { $this->radio = $radio; }
    function area() {
        return round(M_PI * $this->radio ** 2, 2);
    }
}
class Cuadrado {
    private $lado;
    function __construct($lado) { $this->lado = $lado; }
    function area() { return $this->lado ** 2; }
}
$figuras = [new Circulo(5), new Cuadrado(5)];
foreach ($figuras as $f) {
    echo $f->area() . "\\n";
}`,
      python: `import math

class Circulo:
    def __init__(self, radio):
        self.radio = radio
    def area(self):
        return round(math.pi * self.radio ** 2, 2)

class Cuadrado:
    def __init__(self, lado):
        self.lado = lado
    def area(self):
        return self.lado ** 2

figuras = [Circulo(5), Cuadrado(5)]
for f in figuras:
    print(f.area())`,
      javascript: `class Circulo {
  constructor(radio) { this.radio = radio; }
  area() {
    return Math.round(Math.PI * this.radio ** 2 * 100) / 100;
  }
}
class Cuadrado {
  constructor(lado) { this.lado = lado; }
  area() { return this.lado ** 2; }
}
const figuras = [new Circulo(5), new Cuadrado(5)];
figuras.forEach(f => console.log(f.area()));`,
      typescript: `interface Figura {
  area(): number;
}
class Circulo implements Figura {
  constructor(private radio: number) {}
  area(): number {
    return Math.round(Math.PI * this.radio ** 2 * 100) / 100;
  }
}
class Cuadrado implements Figura {
  constructor(private lado: number) {}
  area(): number { return this.lado ** 2; }
}
const figuras: Figura[] = [new Circulo(5), new Cuadrado(5)];
figuras.forEach(f => console.log(f.area()));`,
      java: `interface Figura {
    double area();
}
class Circulo implements Figura {
    double radio;
    Circulo(double radio) { this.radio = radio; }
    public double area() {
        return Math.round(Math.PI * radio * radio * 100.0) / 100.0;
    }
}
class Cuadrado implements Figura {
    int lado;
    Cuadrado(int lado) { this.lado = lado; }
    public double area() { return lado * lado; }
}
Figura[] figuras = {new Circulo(5), new Cuadrado(5)};
for (Figura f : figuras) {
    System.out.println(f.area());
}`,
      csharp: `interface IFigura {
    double Area();
}
class Circulo : IFigura {
    double radio;
    public Circulo(double radio) { this.radio = radio; }
    public double Area() {
        return Math.Round(Math.PI * radio * radio, 2);
    }
}
class Cuadrado : IFigura {
    int lado;
    public Cuadrado(int lado) { this.lado = lado; }
    public double Area() { return lado * lado; }
}
IFigura[] figuras = {new Circulo(5), new Cuadrado(5)};
foreach (var f in figuras) {
    Console.WriteLine(f.Area());
}`,
    },
    output: '78.54\n25',
  },
  {
    category: 1,
    categoryTitle: 'Los 4 pilares',
    id: 'o4',
    title: 'Abstraccion',
    description: 'Clase abstracta define metodos que las subclases deben implementar.',
    code: {
      php: `<?php
abstract class Vehiculo {
    abstract function velocidadMaxima();
}
class Auto extends Vehiculo {
    function velocidadMaxima() { return 200; }
}
class Bicicleta extends Vehiculo {
    function velocidadMaxima() { return 40; }
}
$auto = new Auto();
$bici = new Bicicleta();
echo "auto: " . $auto->velocidadMaxima() . "\\n";
echo "bici: " . $bici->velocidadMaxima();`,
      python: `from abc import ABC, abstractmethod

class Vehiculo(ABC):
    @abstractmethod
    def velocidad_maxima(self):
        pass

class Auto(Vehiculo):
    def velocidad_maxima(self):
        return 200

class Bicicleta(Vehiculo):
    def velocidad_maxima(self):
        return 40

auto = Auto()
bici = Bicicleta()
print(f"auto: {auto.velocidad_maxima()}")
print(f"bici: {bici.velocidad_maxima()}")`,
      javascript: `class Vehiculo {
  velocidadMaxima() {
    throw new Error("metodo abstracto");
  }
}
class Auto extends Vehiculo {
  velocidadMaxima() { return 200; }
}
class Bicicleta extends Vehiculo {
  velocidadMaxima() { return 40; }
}
const auto = new Auto();
const bici = new Bicicleta();
console.log("auto: " + auto.velocidadMaxima());
console.log("bici: " + bici.velocidadMaxima());`,
      typescript: `abstract class Vehiculo {
  abstract velocidadMaxima(): number;
}
class Auto extends Vehiculo {
  velocidadMaxima(): number { return 200; }
}
class Bicicleta extends Vehiculo {
  velocidadMaxima(): number { return 40; }
}
const auto = new Auto();
const bici = new Bicicleta();
console.log("auto: " + auto.velocidadMaxima());
console.log("bici: " + bici.velocidadMaxima());`,
      java: `abstract class Vehiculo {
    abstract int velocidadMaxima();
}
class Auto extends Vehiculo {
    int velocidadMaxima() { return 200; }
}
class Bicicleta extends Vehiculo {
    int velocidadMaxima() { return 40; }
}
Auto auto = new Auto();
Bicicleta bici = new Bicicleta();
System.out.println("auto: " + auto.velocidadMaxima());
System.out.println("bici: " + bici.velocidadMaxima());`,
      csharp: `abstract class Vehiculo {
    public abstract int VelocidadMaxima();
}
class Auto : Vehiculo {
    public override int VelocidadMaxima() { return 200; }
}
class Bicicleta : Vehiculo {
    public override int VelocidadMaxima() { return 40; }
}
var auto = new Auto();
var bici = new Bicicleta();
Console.WriteLine("auto: " + auto.VelocidadMaxima());
Console.WriteLine("bici: " + bici.VelocidadMaxima());`,
    },
    output: 'auto: 200\nbici: 40',
  },

  // ============= 2. Conceptos adicionales =============
  {
    category: 2,
    categoryTitle: 'Conceptos adicionales',
    id: 'o5',
    title: 'Constructor',
    description: 'Metodo especial que inicializa el objeto con valores al crearlo.',
    code: {
      php: `<?php
class Punto {
    public $x;
    public $y;
    function __construct($x, $y) {
        $this->x = $x;
        $this->y = $y;
    }
}
$p = new Punto(3, 4);
echo "x: " . $p->x . ", y: " . $p->y;`,
      python: `class Punto:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Punto(3, 4)
print(f"x: {p.x}, y: {p.y}")`,
      javascript: `class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const p = new Punto(3, 4);
console.log("x: " + p.x + ", y: " + p.y);`,
      typescript: `class Punto {
  constructor(public x: number, public y: number) {}
}
const p = new Punto(3, 4);
console.log("x: " + p.x + ", y: " + p.y);`,
      java: `class Punto {
    int x, y;
    Punto(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
Punto p = new Punto(3, 4);
System.out.println("x: " + p.x + ", y: " + p.y);`,
      csharp: `class Punto {
    public int X, Y;
    public Punto(int x, int y) {
        X = x;
        Y = y;
    }
}
var p = new Punto(3, 4);
Console.WriteLine("x: " + p.X + ", y: " + p.Y);`,
    },
    output: 'x: 3, y: 4',
  },
  {
    category: 2,
    categoryTitle: 'Conceptos adicionales',
    id: 'o6',
    title: 'Metodos estaticos',
    description: 'Metodos que pertenecen a la clase, no requieren instancia.',
    code: {
      php: `<?php
class Matematica {
    static function sumar($a, $b) {
        return $a + $b;
    }
}
echo Matematica::sumar(3, 7);`,
      python: `class Matematica:
    @staticmethod
    def sumar(a, b):
        return a + b

print(Matematica.sumar(3, 7))`,
      javascript: `class Matematica {
  static sumar(a, b) { return a + b; }
}
console.log(Matematica.sumar(3, 7));`,
      typescript: `class Matematica {
  static sumar(a: number, b: number): number {
    return a + b;
  }
}
console.log(Matematica.sumar(3, 7));`,
      java: `class Matematica {
    static int sumar(int a, int b) {
        return a + b;
    }
}
System.out.println(Matematica.sumar(3, 7));`,
      csharp: `class Matematica {
    public static int Sumar(int a, int b) {
        return a + b;
    }
}
Console.WriteLine(Matematica.Sumar(3, 7));`,
    },
    output: '10',
  },
  {
    category: 2,
    categoryTitle: 'Conceptos adicionales',
    id: 'o7',
    title: 'Sobrecarga de metodos',
    description: 'Mismo nombre de metodo con diferente cantidad de parametros.',
    code: {
      php: `<?php
class Calculadora {
    function sumar(...$nums) {
        return array_sum($nums);
    }
}
$c = new Calculadora();
echo $c->sumar(1, 2) . "\\n";
echo $c->sumar(1, 2, 3);`,
      python: `class Calculadora:
    def sumar(self, a, b, c=0):
        return a + b + c

c = Calculadora()
print(c.sumar(1, 2))
print(c.sumar(1, 2, 3))`,
      javascript: `class Calculadora {
  sumar(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
}
const c = new Calculadora();
console.log(c.sumar(1, 2));
console.log(c.sumar(1, 2, 3));`,
      typescript: `class Calculadora {
  sumar(a: number, b: number): number;
  sumar(a: number, b: number, c: number): number;
  sumar(a: number, b: number, c?: number): number {
    return a + b + (c ?? 0);
  }
}
const calc = new Calculadora();
console.log(calc.sumar(1, 2));
console.log(calc.sumar(1, 2, 3));`,
      java: `class Calculadora {
    int sumar(int a, int b) { return a + b; }
    int sumar(int a, int b, int c) { return a + b + c; }
}
Calculadora c = new Calculadora();
System.out.println(c.sumar(1, 2));
System.out.println(c.sumar(1, 2, 3));`,
      csharp: `class Calculadora {
    public int Sumar(int a, int b) { return a + b; }
    public int Sumar(int a, int b, int c) {
        return a + b + c;
    }
}
var c = new Calculadora();
Console.WriteLine(c.Sumar(1, 2));
Console.WriteLine(c.Sumar(1, 2, 3));`,
    },
    output: '3\n6',
  },
  {
    category: 2,
    categoryTitle: 'Conceptos adicionales',
    id: 'o8',
    title: 'Clases abstractas vs interfaces',
    description: 'Abstractas tienen implementacion parcial, interfaces solo contratos.',
    code: {
      php: `<?php
abstract class FiguraBase {
    abstract function area();
    function perimetroUsaArea() { return $this->area(); }
}
interface Dibujable {
    public function dibujar();
}
class Cuadrado extends FiguraBase implements Dibujable {
    private $lado;
    function __construct($l) { $this->lado = $l; }
    function area() { return $this->lado ** 2; }
    public function dibujar() { return "cuadrado"; }
}
$q = new Cuadrado(5);
echo "area: " . $q->area() . "\\n";
echo "perimetro usa area: " . $q->perimetroUsaArea() . "\\n";
echo "dibujable: " . $q->dibujar();`,
      python: `from abc import ABC, abstractmethod

class FiguraBase(ABC):
    @abstractmethod
    def area(self):
        pass
    def perimetro_usa_area(self):
        return self.area()

class Dibujable(ABC):
    @abstractmethod
    def dibujar(self):
        pass

class Cuadrado(FiguraBase, Dibujable):
    def __init__(self, lado):
        self.lado = lado
    def area(self):
        return self.lado ** 2
    def dibujar(self):
        return "cuadrado"

q = Cuadrado(5)
print(f"area: {q.area()}")
print(f"perimetro usa area: {q.perimetro_usa_area()}")
print(f"dibujable: {q.dibujar()}")`,
      javascript: `class FiguraBase {
  area() { throw new Error("abstracto"); }
  perimetroUsaArea() { return this.area(); }
}
class Cuadrado extends FiguraBase {
  constructor(lado) {
    super();
    this.lado = lado;
  }
  area() { return this.lado ** 2; }
  dibujar() { return "cuadrado"; }
}
const q = new Cuadrado(5);
console.log("area: " + q.area());
console.log("perimetro usa area: " + q.perimetroUsaArea());
console.log("dibujable: " + q.dibujar());`,
      typescript: `abstract class FiguraBase {
  abstract area(): number;
  perimetroUsaArea(): number { return this.area(); }
}
interface Dibujable {
  dibujar(): string;
}
class Cuadrado extends FiguraBase implements Dibujable {
  constructor(private lado: number) { super(); }
  area(): number { return this.lado ** 2; }
  dibujar(): string { return "cuadrado"; }
}
const q = new Cuadrado(5);
console.log("area: " + q.area());
console.log("perimetro usa area: " + q.perimetroUsaArea());
console.log("dibujable: " + q.dibujar());`,
      java: `abstract class FiguraBase {
    abstract int area();
    int perimetroUsaArea() { return area(); }
}
interface Dibujable {
    String dibujar();
}
class Cuadrado extends FiguraBase implements Dibujable {
    int lado;
    Cuadrado(int lado) { this.lado = lado; }
    int area() { return lado * lado; }
    public String dibujar() { return "cuadrado"; }
}
Cuadrado q = new Cuadrado(5);
System.out.println("area: " + q.area());
System.out.println("perimetro usa area: " + q.perimetroUsaArea());
System.out.println("dibujable: " + q.dibujar());`,
      csharp: `abstract class FiguraBase {
    public abstract int Area();
    public int PerimetroUsaArea() { return Area(); }
}
interface IDibujable {
    string Dibujar();
}
class Cuadrado : FiguraBase, IDibujable {
    int lado;
    public Cuadrado(int lado) { this.lado = lado; }
    public override int Area() { return lado * lado; }
    public string Dibujar() { return "cuadrado"; }
}
var q = new Cuadrado(5);
Console.WriteLine("area: " + q.Area());
Console.WriteLine("perimetro usa area: " + q.PerimetroUsaArea());
Console.WriteLine("dibujable: " + q.Dibujar());`,
    },
    output: 'area: 25\nperimetro usa area: 25\ndibujable: cuadrado',
  },
  {
    category: 2,
    categoryTitle: 'Conceptos adicionales',
    id: 'o9',
    title: 'Composicion vs herencia',
    description: 'Composicion: un objeto TIENE otro. Preferible a herencia en muchos casos.',
    code: {
      php: `<?php
class Motor {
    private $caballos;
    function __construct($caballos) {
        $this->caballos = $caballos;
    }
    function potencia() { return $this->caballos; }
}
class Auto {
    private $motor;
    function __construct($motor) {
        $this->motor = $motor;
    }
    function velocidad() {
        return $this->motor->potencia() + 10;
    }
}
$motor = new Motor(200);
$auto = new Auto($motor);
echo "velocidad: " . $auto->velocidad();`,
      python: `class Motor:
    def __init__(self, caballos):
        self.caballos = caballos
    def potencia(self):
        return self.caballos

class Auto:
    def __init__(self, motor):
        self.motor = motor
    def velocidad(self):
        return self.motor.potencia() + 10

motor = Motor(200)
auto = Auto(motor)
print(f"velocidad: {auto.velocidad()}")`,
      javascript: `class Motor {
  constructor(caballos) { this.caballos = caballos; }
  potencia() { return this.caballos; }
}
class Auto {
  constructor(motor) { this.motor = motor; }
  velocidad() {
    return this.motor.potencia() + 10;
  }
}
const motor = new Motor(200);
const auto = new Auto(motor);
console.log("velocidad: " + auto.velocidad());`,
      typescript: `class Motor {
  constructor(private caballos: number) {}
  potencia(): number { return this.caballos; }
}
class Auto {
  constructor(private motor: Motor) {}
  velocidad(): number {
    return this.motor.potencia() + 10;
  }
}
const motor = new Motor(200);
const auto = new Auto(motor);
console.log("velocidad: " + auto.velocidad());`,
      java: `class Motor {
    int caballos;
    Motor(int caballos) { this.caballos = caballos; }
    int potencia() { return caballos; }
}
class Auto {
    Motor motor;
    Auto(Motor motor) { this.motor = motor; }
    int velocidad() { return motor.potencia() + 10; }
}
Motor motor = new Motor(200);
Auto auto = new Auto(motor);
System.out.println("velocidad: " + auto.velocidad());`,
      csharp: `class Motor {
    int caballos;
    public Motor(int caballos) {
        this.caballos = caballos;
    }
    public int Potencia() { return caballos; }
}
class Auto {
    Motor motor;
    public Auto(Motor motor) { this.motor = motor; }
    public int Velocidad() {
        return motor.Potencia() + 10;
    }
}
var motor = new Motor(200);
var auto = new Auto(motor);
Console.WriteLine("velocidad: " + auto.Velocidad());`,
    },
    output: 'velocidad: 210',
  },
  {
    category: 2,
    categoryTitle: 'Conceptos adicionales',
    id: 'o10',
    title: 'Getters y Setters',
    description: 'Acceso controlado a atributos privados con validacion.',
    code: {
      php: `<?php
class Temperatura {
    private $valor;
    function setValor($v) {
        if ($v < -273) {
            throw new Exception("temperatura invalida");
        }
        $this->valor = $v;
    }
    function getValor() { return $this->valor; }
}
$t = new Temperatura();
$t->setValor(25);
echo "temp: " . $t->getValor() . "\\n";
try {
    $t->setValor(-300);
} catch (Exception $e) {
    echo "error: " . $e->getMessage();
}`,
      python: `class Temperatura:
    def __init__(self):
        self.__valor = 0
    def set_valor(self, v):
        if v < -273:
            raise ValueError("temperatura invalida")
        self.__valor = v
    def get_valor(self):
        return self.__valor

t = Temperatura()
t.set_valor(25)
print(f"temp: {t.get_valor()}")
try:
    t.set_valor(-300)
except ValueError as e:
    print(f"error: {e}")`,
      javascript: `class Temperatura {
  #valor = 0;
  setValor(v) {
    if (v < -273) throw new Error("temperatura invalida");
    this.#valor = v;
  }
  getValor() { return this.#valor; }
}
const t = new Temperatura();
t.setValor(25);
console.log("temp: " + t.getValor());
try {
  t.setValor(-300);
} catch (e) {
  console.log("error: " + e.message);
}`,
      typescript: `class Temperatura {
  private valor: number = 0;
  setValor(v: number): void {
    if (v < -273) throw new Error("temperatura invalida");
    this.valor = v;
  }
  getValor(): number { return this.valor; }
}
const t = new Temperatura();
t.setValor(25);
console.log("temp: " + t.getValor());
try {
  t.setValor(-300);
} catch (e) {
  console.log("error: " + (e as Error).message);
}`,
      java: `class Temperatura {
    private int valor;
    void setValor(int v) throws Exception {
        if (v < -273) {
            throw new Exception("temperatura invalida");
        }
        valor = v;
    }
    int getValor() { return valor; }
}
Temperatura t = new Temperatura();
t.setValor(25);
System.out.println("temp: " + t.getValor());
try {
    t.setValor(-300);
} catch (Exception e) {
    System.out.println("error: " + e.getMessage());
}`,
      csharp: `class Temperatura {
    private int valor;
    public void SetValor(int v) {
        if (v < -273)
            throw new Exception("temperatura invalida");
        valor = v;
    }
    public int GetValor() { return valor; }
}
var t = new Temperatura();
t.SetValor(25);
Console.WriteLine("temp: " + t.GetValor());
try {
    t.SetValor(-300);
} catch (Exception e) {
    Console.WriteLine("error: " + e.Message);
}`,
    },
    output: 'temp: 25\nerror: temperatura invalida',
  },
];
