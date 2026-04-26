// Ejemplos secciones 9-12 (3 ejemplos cada una)

export const examples3 = [
  // ===================== 9. REPOSITORIO =====================
  {
    section: 9,
    sectionTitle: 'REPOSITORIO',
    id: '9a',
    enunciado:
      'Guarda numeros en un diccionario con clave y recuperalos por clave.',
    code: {
      php: `class Almacen {
    private array $datos = [];
    public function guardar(int $clave, int $valor): void {
        $this->datos[$clave] = $valor;
    }
    public function obtener(int $clave): int {
        return $this->datos[$clave];
    }
}
$a = new Almacen();
$a->guardar(1, 42);
$a->guardar(2, 99);
echo $a->obtener(1) . "\\n";
echo $a->obtener(2);`,
      python: `class Almacen:
    def __init__(self):
        self.datos = {}
    def guardar(self, clave: int, valor: int):
        self.datos[clave] = valor
    def obtener(self, clave: int) -> int:
        return self.datos[clave]

a = Almacen()
a.guardar(1, 42)
a.guardar(2, 99)
print(a.obtener(1))
print(a.obtener(2))`,
      javascript: `class Almacen {
  constructor() { this.datos = {}; }
  guardar(clave, valor) { this.datos[clave] = valor; }
  obtener(clave) { return this.datos[clave]; }
}
const a = new Almacen();
a.guardar(1, 42);
a.guardar(2, 99);
console.log(a.obtener(1));
console.log(a.obtener(2));`,
      typescript: `class Almacen {
  private datos: Record<number, number> = {};
  guardar(clave: number, valor: number): void {
    this.datos[clave] = valor;
  }
  obtener(clave: number): number {
    return this.datos[clave];
  }
}
const a = new Almacen();
a.guardar(1, 42);
a.guardar(2, 99);
console.log(a.obtener(1));
console.log(a.obtener(2));`,
      java: `class Almacen {
    private Map<Integer, Integer> datos = new HashMap<>();
    void guardar(int clave, int valor) {
        datos.put(clave, valor);
    }
    int obtener(int clave) { return datos.get(clave); }
}
Almacen a = new Almacen();
a.guardar(1, 42);
a.guardar(2, 99);
System.out.println(a.obtener(1));
System.out.println(a.obtener(2));`,
      csharp: `class Almacen {
    private Dictionary<int, int> datos = new();
    public void Guardar(int clave, int valor)
        => datos[clave] = valor;
    public int Obtener(int clave) => datos[clave];
}
var a = new Almacen();
a.Guardar(1, 42);
a.Guardar(2, 99);
Console.WriteLine(a.Obtener(1));
Console.WriteLine(a.Obtener(2));`,
    },
    output: '42\n99',
  },
  {
    section: 9,
    sectionTitle: 'REPOSITORIO',
    id: '9b',
    enunciado:
      'Repositorio con interfaz: define guardar/obtener como contrato y crea una implementacion en memoria.',
    code: {
      php: `interface Repositorio {
    public function guardar(int $clave, int $valor): void;
    public function obtener(int $clave): int;
}
class RepoMemoria implements Repositorio {
    private array $datos = [];
    public function guardar(int $clave, int $valor): void {
        $this->datos[$clave] = $valor;
    }
    public function obtener(int $clave): int {
        return $this->datos[$clave];
    }
}
$repo = new RepoMemoria();
$repo->guardar(5, 200);
echo $repo->obtener(5);`,
      python: `from abc import ABC, abstractmethod

class Repositorio(ABC):
    @abstractmethod
    def guardar(self, clave: int, valor: int): ...
    @abstractmethod
    def obtener(self, clave: int) -> int: ...

class RepoMemoria(Repositorio):
    def __init__(self):
        self.datos = {}
    def guardar(self, clave, valor):
        self.datos[clave] = valor
    def obtener(self, clave) -> int:
        return self.datos[clave]

repo = RepoMemoria()
repo.guardar(5, 200)
print(repo.obtener(5))`,
      javascript: `class RepoMemoria {
  constructor() { this.datos = {}; }
  guardar(clave, valor) { this.datos[clave] = valor; }
  obtener(clave) { return this.datos[clave]; }
}
const repo = new RepoMemoria();
repo.guardar(5, 200);
console.log(repo.obtener(5));`,
      typescript: `interface Repositorio {
  guardar(clave: number, valor: number): void;
  obtener(clave: number): number;
}
class RepoMemoria implements Repositorio {
  private datos: Record<number, number> = {};
  guardar(clave: number, valor: number) {
    this.datos[clave] = valor;
  }
  obtener(clave: number) { return this.datos[clave]; }
}
const repo = new RepoMemoria();
repo.guardar(5, 200);
console.log(repo.obtener(5));`,
      java: `interface Repositorio {
    void guardar(int clave, int valor);
    int obtener(int clave);
}
class RepoMemoria implements Repositorio {
    private Map<Integer,Integer> datos = new HashMap<>();
    public void guardar(int c, int v) { datos.put(c, v); }
    public int obtener(int c) { return datos.get(c); }
}
RepoMemoria repo = new RepoMemoria();
repo.guardar(5, 200);
System.out.println(repo.obtener(5));`,
      csharp: `interface IRepositorio {
    void Guardar(int clave, int valor);
    int Obtener(int clave);
}
class RepoMemoria : IRepositorio {
    private Dictionary<int,int> datos = new();
    public void Guardar(int c, int v) => datos[c] = v;
    public int Obtener(int c) => datos[c];
}
var repo = new RepoMemoria();
repo.Guardar(5, 200);
Console.WriteLine(repo.Obtener(5));`,
    },
    output: '200',
  },
  {
    section: 9,
    sectionTitle: 'REPOSITORIO',
    id: '9c',
    enunciado:
      'Verifica si una clave existe en el repositorio antes de obtenerla.',
    code: {
      php: `class RepoSeguro {
    private array $datos = [];
    public function guardar(int $c, int $v): void {
        $this->datos[$c] = $v;
    }
    public function existe(int $c): bool {
        return isset($this->datos[$c]);
    }
    public function obtener(int $c): int {
        return $this->datos[$c];
    }
}
$r = new RepoSeguro();
$r->guardar(1, 50);
echo $r->existe(1) ? "existe" : "no existe";
echo "\\n";
echo $r->existe(99) ? "existe" : "no existe";`,
      python: `class RepoSeguro:
    def __init__(self):
        self.datos = {}
    def guardar(self, c: int, v: int):
        self.datos[c] = v
    def existe(self, c: int) -> bool:
        return c in self.datos
    def obtener(self, c: int) -> int:
        return self.datos[c]

r = RepoSeguro()
r.guardar(1, 50)
print("existe" if r.existe(1) else "no existe")
print("existe" if r.existe(99) else "no existe")`,
      javascript: `class RepoSeguro {
  constructor() { this.datos = {}; }
  guardar(c, v) { this.datos[c] = v; }
  existe(c) { return c in this.datos; }
  obtener(c) { return this.datos[c]; }
}
const r = new RepoSeguro();
r.guardar(1, 50);
console.log(r.existe(1) ? "existe" : "no existe");
console.log(r.existe(99) ? "existe" : "no existe");`,
      typescript: `class RepoSeguro {
  private datos: Record<number, number> = {};
  guardar(c: number, v: number) { this.datos[c] = v; }
  existe(c: number): boolean { return c in this.datos; }
  obtener(c: number): number { return this.datos[c]; }
}
const r = new RepoSeguro();
r.guardar(1, 50);
console.log(r.existe(1) ? "existe" : "no existe");
console.log(r.existe(99) ? "existe" : "no existe");`,
      java: `class RepoSeguro {
    private Map<Integer,Integer> datos = new HashMap<>();
    void guardar(int c, int v) { datos.put(c, v); }
    boolean existe(int c) { return datos.containsKey(c); }
    int obtener(int c) { return datos.get(c); }
}
RepoSeguro r = new RepoSeguro();
r.guardar(1, 50);
System.out.println(r.existe(1) ? "existe" : "no existe");
System.out.println(r.existe(99) ? "existe" : "no existe");`,
      csharp: `class RepoSeguro {
    private Dictionary<int,int> datos = new();
    public void Guardar(int c, int v) => datos[c] = v;
    public bool Existe(int c) => datos.ContainsKey(c);
    public int Obtener(int c) => datos[c];
}
var r = new RepoSeguro();
r.Guardar(1, 50);
Console.WriteLine(r.Existe(1) ? "existe" : "no existe");
Console.WriteLine(r.Existe(99) ? "existe" : "no existe");`,
    },
    output: 'existe\nno existe',
  },

  // ===================== 10. ENTIDAD vs VALUE OBJECT =====================
  {
    section: 10,
    sectionTitle: 'ENTIDAD vs VALUE OBJECT',
    id: '10a',
    enunciado:
      'Dos cajas con el mismo contenido (10, 20). Compara por identidad y por valor.',
    code: {
      php: `class Caja {
    public function __construct(
        public int $id, public int $contenido
    ) {}
}
class Punto {
    public function __construct(public int $x, public int $y) {}
    public function igualA(Punto $otro): bool {
        return $this->x === $otro->x && $this->y === $otro->y;
    }
}
$c1 = new Caja(1, 100);
$c2 = new Caja(2, 100);
echo ($c1 === $c2 ? "misma" : "distinta") . " caja\\n";
$p1 = new Punto(10, 20);
$p2 = new Punto(10, 20);
echo ($p1->igualA($p2) ? "mismo" : "distinto") . " punto";`,
      python: `class Caja:
    def __init__(self, id: int, contenido: int):
        self.id = id
        self.contenido = contenido

class Punto:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y
    def igual_a(self, otro) -> bool:
        return self.x == otro.x and self.y == otro.y

c1 = Caja(1, 100)
c2 = Caja(2, 100)
print("misma" if c1 is c2 else "distinta", "caja")
p1 = Punto(10, 20)
p2 = Punto(10, 20)
print("mismo" if p1.igual_a(p2) else "distinto", "punto")`,
      javascript: `class Caja {
  constructor(id, contenido) { this.id = id; this.contenido = contenido; }
}
class Punto {
  constructor(x, y) { this.x = x; this.y = y; }
  igualA(otro) { return this.x === otro.x && this.y === otro.y; }
}
const c1 = new Caja(1, 100);
const c2 = new Caja(2, 100);
console.log(c1 === c2 ? "misma" : "distinta", "caja");
const p1 = new Punto(10, 20);
const p2 = new Punto(10, 20);
console.log(p1.igualA(p2) ? "mismo" : "distinto", "punto");`,
      typescript: `class Caja {
  constructor(public id: number, public contenido: number) {}
}
class Punto {
  constructor(public x: number, public y: number) {}
  igualA(otro: Punto): boolean {
    return this.x === otro.x && this.y === otro.y;
  }
}
const c1 = new Caja(1, 100), c2 = new Caja(2, 100);
console.log(c1 === c2 ? "misma" : "distinta", "caja");
const p1 = new Punto(10, 20), p2 = new Punto(10, 20);
console.log(p1.igualA(p2) ? "mismo" : "distinto", "punto");`,
      java: `class Caja {
    int id, contenido;
    Caja(int id, int c) { this.id = id; contenido = c; }
}
class Punto {
    int x, y;
    Punto(int x, int y) { this.x = x; this.y = y; }
    boolean igualA(Punto o) { return x == o.x && y == o.y; }
}
Caja c1 = new Caja(1, 100), c2 = new Caja(2, 100);
System.out.println((c1 == c2 ? "misma" : "distinta") + " caja");
Punto p1 = new Punto(10, 20), p2 = new Punto(10, 20);
System.out.println((p1.igualA(p2) ? "mismo":"distinto") + " punto");`,
      csharp: `class Caja {
    public int Id, Contenido;
    public Caja(int id, int c) { Id = id; Contenido = c; }
}
class Punto {
    public int X, Y;
    public Punto(int x, int y) { X = x; Y = y; }
    public bool IgualA(Punto o) => X == o.X && Y == o.Y;
}
var c1 = new Caja(1, 100); var c2 = new Caja(2, 100);
Console.WriteLine((c1 == c2 ? "misma" : "distinta") + " caja");
var p1 = new Punto(10, 20); var p2 = new Punto(10, 20);
Console.WriteLine((p1.IgualA(p2) ? "mismo":"distinto") + " punto");`,
    },
    output: 'distinta caja\nmismo punto',
  },
  {
    section: 10, sectionTitle: 'ENTIDAD vs VALUE OBJECT', id: '10b',
    enunciado: 'Crea un Value Object "Moneda" con cantidad y tipo. Dos monedas iguales deben ser iguales.',
    code: {
      php: `class Moneda {
    public function __construct(
        public int $cantidad, public string $tipo
    ) {}
    public function igualA(Moneda $o): bool {
        return $this->cantidad === $o->cantidad
            && $this->tipo === $o->tipo;
    }
}
$m1 = new Moneda(100, "USD");
$m2 = new Moneda(100, "USD");
$m3 = new Moneda(100, "EUR");
echo $m1->igualA($m2) ? "iguales" : "distintas";
echo "\\n";
echo $m1->igualA($m3) ? "iguales" : "distintas";`,
      python: `class Moneda:
    def __init__(self, cantidad: int, tipo: str):
        self.cantidad = cantidad
        self.tipo = tipo
    def igual_a(self, o) -> bool:
        return self.cantidad == o.cantidad and self.tipo == o.tipo

m1 = Moneda(100, "USD")
m2 = Moneda(100, "USD")
m3 = Moneda(100, "EUR")
print("iguales" if m1.igual_a(m2) else "distintas")
print("iguales" if m1.igual_a(m3) else "distintas")`,
      javascript: `class Moneda {
  constructor(cantidad, tipo) { this.cantidad = cantidad; this.tipo = tipo; }
  igualA(o) { return this.cantidad === o.cantidad && this.tipo === o.tipo; }
}
const m1 = new Moneda(100, "USD");
const m2 = new Moneda(100, "USD");
const m3 = new Moneda(100, "EUR");
console.log(m1.igualA(m2) ? "iguales" : "distintas");
console.log(m1.igualA(m3) ? "iguales" : "distintas");`,
      typescript: `class Moneda {
  constructor(public cantidad: number, public tipo: string) {}
  igualA(o: Moneda): boolean {
    return this.cantidad === o.cantidad && this.tipo === o.tipo;
  }
}
const m1 = new Moneda(100, "USD");
const m2 = new Moneda(100, "USD");
const m3 = new Moneda(100, "EUR");
console.log(m1.igualA(m2) ? "iguales" : "distintas");
console.log(m1.igualA(m3) ? "iguales" : "distintas");`,
      java: `class Moneda {
    int cantidad; String tipo;
    Moneda(int c, String t) { cantidad = c; tipo = t; }
    boolean igualA(Moneda o) {
        return cantidad == o.cantidad && tipo.equals(o.tipo);
    }
}
Moneda m1 = new Moneda(100, "USD");
Moneda m2 = new Moneda(100, "USD");
Moneda m3 = new Moneda(100, "EUR");
System.out.println(m1.igualA(m2) ? "iguales" : "distintas");
System.out.println(m1.igualA(m3) ? "iguales" : "distintas");`,
      csharp: `class Moneda {
    public int Cantidad; public string Tipo;
    public Moneda(int c, string t) { Cantidad = c; Tipo = t; }
    public bool IgualA(Moneda o)
        => Cantidad == o.Cantidad && Tipo == o.Tipo;
}
var m1 = new Moneda(100, "USD");
var m2 = new Moneda(100, "USD");
var m3 = new Moneda(100, "EUR");
Console.WriteLine(m1.IgualA(m2) ? "iguales" : "distintas");
Console.WriteLine(m1.IgualA(m3) ? "iguales" : "distintas");`,
    },
    output: 'iguales\ndistintas',
  },
  {
    section: 10, sectionTitle: 'ENTIDAD vs VALUE OBJECT', id: '10c',
    enunciado: 'Dos entidades con mismo nombre pero distinto id. Son diferentes.',
    code: {
      php: `class Persona {
    public function __construct(
        public int $id, public string $nombre
    ) {}
    public function mismaQue(Persona $o): bool {
        return $this->id === $o->id;
    }
}
$a = new Persona(1, "Ana");
$b = new Persona(2, "Ana");
echo $a->mismaQue($b) ? "misma" : "diferente";`,
      python: `class Persona:
    def __init__(self, id: int, nombre: str):
        self.id = id
        self.nombre = nombre
    def misma_que(self, o) -> bool:
        return self.id == o.id

a = Persona(1, "Ana")
b = Persona(2, "Ana")
print("misma" if a.misma_que(b) else "diferente")`,
      javascript: `class Persona {
  constructor(id, nombre) { this.id = id; this.nombre = nombre; }
  mismaQue(o) { return this.id === o.id; }
}
const a = new Persona(1, "Ana");
const b = new Persona(2, "Ana");
console.log(a.mismaQue(b) ? "misma" : "diferente");`,
      typescript: `class Persona {
  constructor(public id: number, public nombre: string) {}
  mismaQue(o: Persona): boolean { return this.id === o.id; }
}
const a = new Persona(1, "Ana");
const b = new Persona(2, "Ana");
console.log(a.mismaQue(b) ? "misma" : "diferente");`,
      java: `class Persona {
    int id; String nombre;
    Persona(int id, String n) { this.id = id; nombre = n; }
    boolean mismaQue(Persona o) { return id == o.id; }
}
Persona a = new Persona(1, "Ana");
Persona b = new Persona(2, "Ana");
System.out.println(a.mismaQue(b) ? "misma" : "diferente");`,
      csharp: `class Persona {
    public int Id; public string Nombre;
    public Persona(int id, string n) { Id = id; Nombre = n; }
    public bool MismaQue(Persona o) => Id == o.Id;
}
var a = new Persona(1, "Ana");
var b = new Persona(2, "Ana");
Console.WriteLine(a.MismaQue(b) ? "misma" : "diferente");`,
    },
    output: 'diferente',
  },

  // ===================== 11. COMPOSICION =====================
  {
    section: 11, sectionTitle: 'COMPOSICION (sobre herencia)', id: '11a',
    enunciado: 'Un Sumador usa un Multiplicador internamente: resultado = multiplicar(x) + x.',
    code: {
      php: `class Multiplicador {
    public function multiplicar(int $n, int $por): int {
        return $n * $por;
    }
}
class Sumador {
    private Multiplicador $m;
    public function __construct() {
        $this->m = new Multiplicador();
    }
    public function calcular(int $x): int {
        return $this->m->multiplicar($x, 3) + $x;
    }
}
$s = new Sumador();
echo $s->calcular(5);`,
      python: `class Multiplicador:
    def multiplicar(self, n: int, por: int) -> int:
        return n * por

class Sumador:
    def __init__(self):
        self.m = Multiplicador()
    def calcular(self, x: int) -> int:
        return self.m.multiplicar(x, 3) + x

s = Sumador()
print(s.calcular(5))`,
      javascript: `class Multiplicador {
  multiplicar(n, por) { return n * por; }
}
class Sumador {
  constructor() { this.m = new Multiplicador(); }
  calcular(x) { return this.m.multiplicar(x, 3) + x; }
}
const s = new Sumador();
console.log(s.calcular(5));`,
      typescript: `class Multiplicador {
  multiplicar(n: number, por: number): number { return n * por; }
}
class Sumador {
  private m = new Multiplicador();
  calcular(x: number): number {
    return this.m.multiplicar(x, 3) + x;
  }
}
const s = new Sumador();
console.log(s.calcular(5));`,
      java: `class Multiplicador {
    int multiplicar(int n, int por) { return n * por; }
}
class Sumador {
    private Multiplicador m = new Multiplicador();
    int calcular(int x) { return m.multiplicar(x, 3) + x; }
}
Sumador s = new Sumador();
System.out.println(s.calcular(5));`,
      csharp: `class Multiplicador {
    public int Multiplicar(int n, int por) => n * por;
}
class Sumador {
    private Multiplicador m = new();
    public int Calcular(int x) => m.Multiplicar(x, 3) + x;
}
var s = new Sumador();
Console.WriteLine(s.Calcular(5));`,
    },
    output: '20',
  },
  {
    section: 11, sectionTitle: 'COMPOSICION (sobre herencia)', id: '11b',
    enunciado: 'Un Motor calcula potencia. Un Auto tiene un Motor y lo usa para calcular velocidad.',
    code: {
      php: `class Motor {
    public function potencia(int $rpm): int {
        return $rpm * 2;
    }
}
class Auto {
    private Motor $motor;
    public function __construct() {
        $this->motor = new Motor();
    }
    public function velocidad(int $rpm): int {
        return $this->motor->potencia($rpm) + 10;
    }
}
$auto = new Auto();
echo $auto->velocidad(50);`,
      python: `class Motor:
    def potencia(self, rpm: int) -> int:
        return rpm * 2

class Auto:
    def __init__(self):
        self.motor = Motor()
    def velocidad(self, rpm: int) -> int:
        return self.motor.potencia(rpm) + 10

auto = Auto()
print(auto.velocidad(50))`,
      javascript: `class Motor {
  potencia(rpm) { return rpm * 2; }
}
class Auto {
  constructor() { this.motor = new Motor(); }
  velocidad(rpm) { return this.motor.potencia(rpm) + 10; }
}
const auto = new Auto();
console.log(auto.velocidad(50));`,
      typescript: `class Motor {
  potencia(rpm: number): number { return rpm * 2; }
}
class Auto {
  private motor = new Motor();
  velocidad(rpm: number): number {
    return this.motor.potencia(rpm) + 10;
  }
}
const auto = new Auto();
console.log(auto.velocidad(50));`,
      java: `class Motor {
    int potencia(int rpm) { return rpm * 2; }
}
class Auto {
    private Motor motor = new Motor();
    int velocidad(int rpm) { return motor.potencia(rpm) + 10; }
}
Auto auto_ = new Auto();
System.out.println(auto_.velocidad(50));`,
      csharp: `class Motor {
    public int Potencia(int rpm) => rpm * 2;
}
class Auto {
    private Motor motor = new();
    public int Velocidad(int rpm) => motor.Potencia(rpm) + 10;
}
var auto = new Auto();
Console.WriteLine(auto.Velocidad(50));`,
    },
    output: '110',
  },
  {
    section: 11, sectionTitle: 'COMPOSICION (sobre herencia)', id: '11c',
    enunciado: 'Un Filtro usa un Evaluador. Si el numero pasa la evaluacion, lo devuelve; si no, devuelve 0.',
    code: {
      php: `class Evaluador {
    public function esMayor(int $n, int $limite): bool {
        return $n > $limite;
    }
}
class Filtro {
    private Evaluador $ev;
    public function __construct() {
        $this->ev = new Evaluador();
    }
    public function filtrar(int $n): int {
        return $this->ev->esMayor($n, 10) ? $n : 0;
    }
}
$f = new Filtro();
echo $f->filtrar(15) . "\\n";
echo $f->filtrar(3);`,
      python: `class Evaluador:
    def es_mayor(self, n: int, limite: int) -> bool:
        return n > limite

class Filtro:
    def __init__(self):
        self.ev = Evaluador()
    def filtrar(self, n: int) -> int:
        return n if self.ev.es_mayor(n, 10) else 0

f = Filtro()
print(f.filtrar(15))
print(f.filtrar(3))`,
      javascript: `class Evaluador {
  esMayor(n, limite) { return n > limite; }
}
class Filtro {
  constructor() { this.ev = new Evaluador(); }
  filtrar(n) { return this.ev.esMayor(n, 10) ? n : 0; }
}
const f = new Filtro();
console.log(f.filtrar(15));
console.log(f.filtrar(3));`,
      typescript: `class Evaluador {
  esMayor(n: number, limite: number): boolean {
    return n > limite;
  }
}
class Filtro {
  private ev = new Evaluador();
  filtrar(n: number): number {
    return this.ev.esMayor(n, 10) ? n : 0;
  }
}
const f = new Filtro();
console.log(f.filtrar(15));
console.log(f.filtrar(3));`,
      java: `class Evaluador {
    boolean esMayor(int n, int limite) { return n > limite; }
}
class Filtro {
    private Evaluador ev = new Evaluador();
    int filtrar(int n) {
        return ev.esMayor(n, 10) ? n : 0;
    }
}
Filtro f = new Filtro();
System.out.println(f.filtrar(15));
System.out.println(f.filtrar(3));`,
      csharp: `class Evaluador {
    public bool EsMayor(int n, int limite) => n > limite;
}
class Filtro {
    private Evaluador ev = new();
    public int Filtrar(int n) => ev.EsMayor(n, 10) ? n : 0;
}
var f = new Filtro();
Console.WriteLine(f.Filtrar(15));
Console.WriteLine(f.Filtrar(3));`,
    },
    output: '15\n0',
  },

  // ===================== 12. HEXAGONO =====================
  {
    section: 12, sectionTitle: 'HEXAGONO (Puerto y Adaptador)', id: '12a',
    enunciado: 'Dominio puro: aplica resultado = operacion(x) * 2. Sin saber que operacion es.',
    code: {
      php: `interface Puerto {
    public function operar(int $x): int;
}
class Sumar100 implements Puerto {
    public function operar(int $x): int { return $x + 100; }
}
class Dominio {
    public function __construct(private Puerto $p) {}
    public function calcular(int $v): int {
        return $this->p->operar($v) * 2;
    }
}
$d = new Dominio(new Sumar100());
echo $d->calcular(5);`,
      python: `from abc import ABC, abstractmethod

class Puerto(ABC):
    @abstractmethod
    def operar(self, x: int) -> int: ...

class Sumar100(Puerto):
    def operar(self, x: int) -> int: return x + 100

class Dominio:
    def __init__(self, p: Puerto):
        self.p = p
    def calcular(self, v: int) -> int:
        return self.p.operar(v) * 2

d = Dominio(Sumar100())
print(d.calcular(5))`,
      javascript: `class Sumar100 {
  operar(x) { return x + 100; }
}
class Dominio {
  constructor(p) { this.p = p; }
  calcular(v) { return this.p.operar(v) * 2; }
}
const d = new Dominio(new Sumar100());
console.log(d.calcular(5));`,
      typescript: `interface Puerto {
  operar(x: number): number;
}
class Sumar100 implements Puerto {
  operar(x: number): number { return x + 100; }
}
class Dominio {
  constructor(private p: Puerto) {}
  calcular(v: number): number { return this.p.operar(v) * 2; }
}
const d = new Dominio(new Sumar100());
console.log(d.calcular(5));`,
      java: `interface Puerto {
    int operar(int x);
}
class Sumar100 implements Puerto {
    public int operar(int x) { return x + 100; }
}
class Dominio {
    private Puerto p;
    Dominio(Puerto p) { this.p = p; }
    int calcular(int v) { return p.operar(v) * 2; }
}
Dominio d = new Dominio(new Sumar100());
System.out.println(d.calcular(5));`,
      csharp: `interface IPuerto {
    int Operar(int x);
}
class Sumar100 : IPuerto {
    public int Operar(int x) => x + 100;
}
class Dominio {
    private readonly IPuerto p;
    public Dominio(IPuerto p) => this.p = p;
    public int Calcular(int v) => p.Operar(v) * 2;
}
var d = new Dominio(new Sumar100());
Console.WriteLine(d.Calcular(5));`,
    },
    output: '210',
  },
  {
    section: 12, sectionTitle: 'HEXAGONO (Puerto y Adaptador)', id: '12b',
    enunciado: 'Cambia el adaptador a Multiplicar10 sin tocar el Dominio. El resultado cambia.',
    code: {
      php: `class Multiplicar10 implements Puerto {
    public function operar(int $x): int { return $x * 10; }
}
$d = new Dominio(new Multiplicar10());
echo $d->calcular(5);`,
      python: `class Multiplicar10(Puerto):
    def operar(self, x: int) -> int: return x * 10

d = Dominio(Multiplicar10())
print(d.calcular(5))`,
      javascript: `class Multiplicar10 {
  operar(x) { return x * 10; }
}
const d = new Dominio(new Multiplicar10());
console.log(d.calcular(5));`,
      typescript: `class Multiplicar10 implements Puerto {
  operar(x: number): number { return x * 10; }
}
const d = new Dominio(new Multiplicar10());
console.log(d.calcular(5));`,
      java: `class Multiplicar10 implements Puerto {
    public int operar(int x) { return x * 10; }
}
Dominio d = new Dominio(new Multiplicar10());
System.out.println(d.calcular(5));`,
      csharp: `class Multiplicar10 : IPuerto {
    public int Operar(int x) => x * 10;
}
var d = new Dominio(new Multiplicar10());
Console.WriteLine(d.Calcular(5));`,
    },
    output: '100',
  },
  {
    section: 12, sectionTitle: 'HEXAGONO (Puerto y Adaptador)', id: '12c',
    enunciado: 'Hexagono completo: puerto, dos adaptadores, dominio con regla (op(a) + op(b)) / 2.',
    code: {
      php: `interface Puerto {
    public function operar(int $x): int;
}
class Doble implements Puerto {
    public function operar(int $x): int { return $x * 2; }
}
class MasCien implements Puerto {
    public function operar(int $x): int { return $x + 100; }
}
class Dominio {
    public function __construct(private Puerto $p) {}
    public function promedio(int $a, int $b): int {
        return ($this->p->operar($a) + $this->p->operar($b)) / 2;
    }
}
echo (new Dominio(new Doble()))->promedio(10, 20) . "\\n";
echo (new Dominio(new MasCien()))->promedio(10, 20);`,
      python: `from abc import ABC, abstractmethod

class Puerto(ABC):
    @abstractmethod
    def operar(self, x: int) -> int: ...

class Doble(Puerto):
    def operar(self, x): return x * 2
class MasCien(Puerto):
    def operar(self, x): return x + 100

class Dominio:
    def __init__(self, p: Puerto):
        self.p = p
    def promedio(self, a: int, b: int) -> int:
        return (self.p.operar(a) + self.p.operar(b)) // 2

print(Dominio(Doble()).promedio(10, 20))
print(Dominio(MasCien()).promedio(10, 20))`,
      javascript: `class Doble { operar(x) { return x * 2; } }
class MasCien { operar(x) { return x + 100; } }
class Dominio {
  constructor(p) { this.p = p; }
  promedio(a, b) {
    return (this.p.operar(a) + this.p.operar(b)) / 2;
  }
}
console.log(new Dominio(new Doble()).promedio(10, 20));
console.log(new Dominio(new MasCien()).promedio(10, 20));`,
      typescript: `interface Puerto { operar(x: number): number; }
class Doble implements Puerto {
  operar(x: number) { return x * 2; }
}
class MasCien implements Puerto {
  operar(x: number) { return x + 100; }
}
class Dominio {
  constructor(private p: Puerto) {}
  promedio(a: number, b: number): number {
    return (this.p.operar(a) + this.p.operar(b)) / 2;
  }
}
console.log(new Dominio(new Doble()).promedio(10, 20));
console.log(new Dominio(new MasCien()).promedio(10, 20));`,
      java: `interface Puerto { int operar(int x); }
class Doble implements Puerto {
    public int operar(int x) { return x * 2; }
}
class MasCien implements Puerto {
    public int operar(int x) { return x + 100; }
}
class Dominio {
    private Puerto p;
    Dominio(Puerto p) { this.p = p; }
    int promedio(int a, int b) {
        return (p.operar(a) + p.operar(b)) / 2;
    }
}
System.out.println(new Dominio(new Doble()).promedio(10, 20));
System.out.println(new Dominio(new MasCien()).promedio(10, 20));`,
      csharp: `interface IPuerto { int Operar(int x); }
class Doble : IPuerto {
    public int Operar(int x) => x * 2;
}
class MasCien : IPuerto {
    public int Operar(int x) => x + 100;
}
class Dominio {
    private readonly IPuerto p;
    public Dominio(IPuerto p) => this.p = p;
    public int Promedio(int a, int b)
        => (p.Operar(a) + p.Operar(b)) / 2;
}
Console.WriteLine(new Dominio(new Doble()).Promedio(10, 20));
Console.WriteLine(new Dominio(new MasCien()).Promedio(10, 20));`,
    },
    output: '30\n115',
  },
]
