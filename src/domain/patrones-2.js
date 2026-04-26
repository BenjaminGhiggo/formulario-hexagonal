export const patrones2 = [
  // ---- 13. Observer ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p13',
    title: 'Observer',
    description: 'Notifica a multiples objetos cuando ocurre un cambio de estado.',
    code: {
      php: `<?php
class Emisor {
    private array $obs = [];
    private int $valor = 0;
    public function agregar(callable $fn): void {
        $this->obs[] = $fn;
    }
    public function setValor(int $v): void {
        $this->valor = $v;
        foreach ($this->obs as $fn) $fn($v);
    }
}
$emisor = new Emisor();
$emisor->agregar(fn($v) => print("obs1: $v\\n"));
$emisor->agregar(fn($v) => print("obs2: $v\\n"));
$emisor->setValor(42);`,
      python: `class Emisor:
    def __init__(self):
        self._obs = []
        self._valor = 0
    def agregar(self, fn):
        self._obs.append(fn)
    def set_valor(self, v):
        self._valor = v
        for fn in self._obs:
            fn(v)

emisor = Emisor()
emisor.agregar(lambda v: print(f"obs1: {v}"))
emisor.agregar(lambda v: print(f"obs2: {v}"))
emisor.set_valor(42)`,
      javascript: `class Emisor {
  constructor() {
    this.obs = [];
    this.valor = 0;
  }
  agregar(fn) { this.obs.push(fn); }
  setValor(v) {
    this.valor = v;
    this.obs.forEach(fn => fn(v));
  }
}
const emisor = new Emisor();
emisor.agregar(v => console.log(\`obs1: \${v}\`));
emisor.agregar(v => console.log(\`obs2: \${v}\`));
emisor.setValor(42);`,
      typescript: `class Emisor {
  private obs: ((v: number) => void)[] = [];
  private valor = 0;
  agregar(fn: (v: number) => void): void {
    this.obs.push(fn);
  }
  setValor(v: number): void {
    this.valor = v;
    this.obs.forEach(fn => fn(v));
  }
}
const emisor = new Emisor();
emisor.agregar(v => console.log(\`obs1: \${v}\`));
emisor.agregar(v => console.log(\`obs2: \${v}\`));
emisor.setValor(42);`,
      java: `import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

class Emisor {
    private final List<Consumer<Integer>> obs = new ArrayList<>();
    private int valor = 0;
    public void agregar(Consumer<Integer> fn) { obs.add(fn); }
    public void setValor(int v) {
        valor = v;
        for (var fn : obs) fn.accept(v);
    }
}
Emisor emisor = new Emisor();
emisor.agregar(v -> System.out.println("obs1: " + v));
emisor.agregar(v -> System.out.println("obs2: " + v));
emisor.setValor(42);`,
      csharp: `class Emisor {
    private readonly List<Action<int>> _obs = new();
    private int _valor = 0;
    public void Agregar(Action<int> fn) => _obs.Add(fn);
    public void SetValor(int v) {
        _valor = v;
        foreach (var fn in _obs) fn(v);
    }
}
var emisor = new Emisor();
emisor.Agregar(v => Console.WriteLine($"obs1: {v}"));
emisor.Agregar(v => Console.WriteLine($"obs2: {v}"));
emisor.SetValor(42);`,
    },
    output: 'obs1: 42\nobs2: 42',
  },

  // ---- 14. Strategy ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p14',
    title: 'Strategy',
    description: 'Intercambia algoritmos en tiempo de ejecucion.',
    code: {
      php: `<?php
function sumar(int $a, int $b): int { return $a + $b; }
function multiplicar(int $a, int $b): int { return $a * $b; }

class Calculadora {
    private $estrategia;
    public function setEstrategia(callable $fn): void {
        $this->estrategia = $fn;
    }
    public function ejecutar(int $a, int $b): int {
        return ($this->estrategia)($a, $b);
    }
}
$calc = new Calculadora();
$calc->setEstrategia('sumar');
echo "suma: " . $calc->ejecutar(5, 3) . "\\n";
$calc->setEstrategia('multiplicar');
echo "multi: " . $calc->ejecutar(5, 3);`,
      python: `def sumar(a, b):
    return a + b

def multiplicar(a, b):
    return a * b

class Calculadora:
    def __init__(self):
        self._estrategia = None
    def set_estrategia(self, fn):
        self._estrategia = fn
    def ejecutar(self, a, b):
        return self._estrategia(a, b)

calc = Calculadora()
calc.set_estrategia(sumar)
print(f"suma: {calc.ejecutar(5, 3)}")
calc.set_estrategia(multiplicar)
print(f"multi: {calc.ejecutar(5, 3)}")`,
      javascript: `function sumar(a, b) { return a + b; }
function multiplicar(a, b) { return a * b; }

class Calculadora {
  setEstrategia(fn) { this.estrategia = fn; }
  ejecutar(a, b) { return this.estrategia(a, b); }
}
const calc = new Calculadora();
calc.setEstrategia(sumar);
console.log(\`suma: \${calc.ejecutar(5, 3)}\`);
calc.setEstrategia(multiplicar);
console.log(\`multi: \${calc.ejecutar(5, 3)}\`);`,
      typescript: `function sumar(a: number, b: number): number { return a + b; }
function multiplicar(a: number, b: number): number { return a * b; }

class Calculadora {
  private estrategia!: (a: number, b: number) => number;
  setEstrategia(fn: (a: number, b: number) => number): void {
    this.estrategia = fn;
  }
  ejecutar(a: number, b: number): number {
    return this.estrategia(a, b);
  }
}
const calc = new Calculadora();
calc.setEstrategia(sumar);
console.log(\`suma: \${calc.ejecutar(5, 3)}\`);
calc.setEstrategia(multiplicar);
console.log(\`multi: \${calc.ejecutar(5, 3)}\`);`,
      java: `import java.util.function.BiFunction;

class Calculadora {
    private BiFunction<Integer, Integer, Integer> estrategia;
    public void setEstrategia(BiFunction<Integer, Integer, Integer> fn) {
        estrategia = fn;
    }
    public int ejecutar(int a, int b) {
        return estrategia.apply(a, b);
    }
}
static int sumar(int a, int b) { return a + b; }
static int multiplicar(int a, int b) { return a * b; }

Calculadora calc = new Calculadora();
calc.setEstrategia(Main::sumar);
System.out.println("suma: " + calc.ejecutar(5, 3));
calc.setEstrategia(Main::multiplicar);
System.out.println("multi: " + calc.ejecutar(5, 3));`,
      csharp: `static int Sumar(int a, int b) => a + b;
static int Multiplicar(int a, int b) => a * b;

class Calculadora {
    private Func<int, int, int> _estrategia = null!;
    public void SetEstrategia(Func<int, int, int> fn) => _estrategia = fn;
    public int Ejecutar(int a, int b) => _estrategia(a, b);
}
var calc = new Calculadora();
calc.SetEstrategia(Sumar);
Console.WriteLine($"suma: {calc.Ejecutar(5, 3)}");
calc.SetEstrategia(Multiplicar);
Console.WriteLine($"multi: {calc.Ejecutar(5, 3)}");`,
    },
    output: 'suma: 8\nmulti: 15',
  },

  // ---- 15. Command ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p15',
    title: 'Command',
    description: 'Encapsula acciones como objetos para ejecutar y deshacer.',
    code: {
      php: `<?php
class SumarCommand {
    private int $valor;
    public function __construct(int $valor) {
        $this->valor = $valor;
    }
    public function ejecutar(int $n): int {
        return $n + $this->valor;
    }
    public function deshacer(int $n): int {
        return $n - $this->valor;
    }
}
$cmd = new SumarCommand(10);
$resultado = $cmd->ejecutar(5);
echo "ejecutar: $resultado\\n";
echo "deshacer: " . $cmd->deshacer($resultado);`,
      python: `class SumarCommand:
    def __init__(self, valor):
        self.valor = valor
    def ejecutar(self, n):
        return n + self.valor
    def deshacer(self, n):
        return n - self.valor

cmd = SumarCommand(10)
resultado = cmd.ejecutar(5)
print(f"ejecutar: {resultado}")
print(f"deshacer: {cmd.deshacer(resultado)}")`,
      javascript: `class SumarCommand {
  constructor(valor) { this.valor = valor; }
  ejecutar(n) { return n + this.valor; }
  deshacer(n) { return n - this.valor; }
}
const cmd = new SumarCommand(10);
const resultado = cmd.ejecutar(5);
console.log(\`ejecutar: \${resultado}\`);
console.log(\`deshacer: \${cmd.deshacer(resultado)}\`);`,
      typescript: `class SumarCommand {
  constructor(private valor: number) {}
  ejecutar(n: number): number { return n + this.valor; }
  deshacer(n: number): number { return n - this.valor; }
}
const cmd = new SumarCommand(10);
const resultado = cmd.ejecutar(5);
console.log(\`ejecutar: \${resultado}\`);
console.log(\`deshacer: \${cmd.deshacer(resultado)}\`);`,
      java: `class SumarCommand {
    private final int valor;
    public SumarCommand(int valor) { this.valor = valor; }
    public int ejecutar(int n) { return n + valor; }
    public int deshacer(int n) { return n - valor; }
}
SumarCommand cmd = new SumarCommand(10);
int resultado = cmd.ejecutar(5);
System.out.println("ejecutar: " + resultado);
System.out.println("deshacer: " + cmd.deshacer(resultado));`,
      csharp: `class SumarCommand {
    private readonly int _valor;
    public SumarCommand(int valor) => _valor = valor;
    public int Ejecutar(int n) => n + _valor;
    public int Deshacer(int n) => n - _valor;
}
var cmd = new SumarCommand(10);
var resultado = cmd.Ejecutar(5);
Console.WriteLine($"ejecutar: {resultado}");
Console.WriteLine($"deshacer: {cmd.Deshacer(resultado)}");`,
    },
    output: 'ejecutar: 15\ndeshacer: 5',
  },

  // ---- 16. State ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p16',
    title: 'State',
    description: 'Cambia el comportamiento de un objeto segun su estado interno.',
    code: {
      php: `<?php
class Verde {
    public function accion(): string { return "avanzar"; }
    public function siguiente(): object { return new Amarillo(); }
}
class Amarillo {
    public function accion(): string { return "precaucion"; }
    public function siguiente(): object { return new Rojo(); }
}
class Rojo {
    public function accion(): string { return "detenerse"; }
    public function siguiente(): object { return new Verde(); }
}
class Semaforo {
    private object $estado;
    public function __construct() { $this->estado = new Verde(); }
    public function accion(): string { return $this->estado->accion(); }
    public function cambiar(): void { $this->estado = $this->estado->siguiente(); }
}
$sem = new Semaforo();
echo $sem->accion() . "\\n";
$sem->cambiar();
echo $sem->accion() . "\\n";
$sem->cambiar();
echo $sem->accion();`,
      python: `class Verde:
    def accion(self): return "avanzar"
    def siguiente(self): return Amarillo()

class Amarillo:
    def accion(self): return "precaucion"
    def siguiente(self): return Rojo()

class Rojo:
    def accion(self): return "detenerse"
    def siguiente(self): return Verde()

class Semaforo:
    def __init__(self):
        self.estado = Verde()
    def accion(self): return self.estado.accion()
    def cambiar(self): self.estado = self.estado.siguiente()

sem = Semaforo()
print(sem.accion())
sem.cambiar()
print(sem.accion())
sem.cambiar()
print(sem.accion())`,
      javascript: `class Verde {
  accion() { return "avanzar"; }
  siguiente() { return new Amarillo(); }
}
class Amarillo {
  accion() { return "precaucion"; }
  siguiente() { return new Rojo(); }
}
class Rojo {
  accion() { return "detenerse"; }
  siguiente() { return new Verde(); }
}
class Semaforo {
  constructor() { this.estado = new Verde(); }
  accion() { return this.estado.accion(); }
  cambiar() { this.estado = this.estado.siguiente(); }
}
const sem = new Semaforo();
console.log(sem.accion());
sem.cambiar();
console.log(sem.accion());
sem.cambiar();
console.log(sem.accion());`,
      typescript: `interface Estado {
  accion(): string;
  siguiente(): Estado;
}
class Verde implements Estado {
  accion(): string { return "avanzar"; }
  siguiente(): Estado { return new Amarillo(); }
}
class Amarillo implements Estado {
  accion(): string { return "precaucion"; }
  siguiente(): Estado { return new Rojo(); }
}
class Rojo implements Estado {
  accion(): string { return "detenerse"; }
  siguiente(): Estado { return new Verde(); }
}
class Semaforo {
  private estado: Estado = new Verde();
  accion(): string { return this.estado.accion(); }
  cambiar(): void { this.estado = this.estado.siguiente(); }
}
const sem = new Semaforo();
console.log(sem.accion());
sem.cambiar();
console.log(sem.accion());
sem.cambiar();
console.log(sem.accion());`,
      java: `interface Estado {
    String accion();
    Estado siguiente();
}
class Verde implements Estado {
    public String accion() { return "avanzar"; }
    public Estado siguiente() { return new Amarillo(); }
}
class Amarillo implements Estado {
    public String accion() { return "precaucion"; }
    public Estado siguiente() { return new Rojo(); }
}
class Rojo implements Estado {
    public String accion() { return "detenerse"; }
    public Estado siguiente() { return new Verde(); }
}
class Semaforo {
    private Estado estado = new Verde();
    public String accion() { return estado.accion(); }
    public void cambiar() { estado = estado.siguiente(); }
}
Semaforo sem = new Semaforo();
System.out.println(sem.accion());
sem.cambiar();
System.out.println(sem.accion());
sem.cambiar();
System.out.println(sem.accion());`,
      csharp: `interface IEstado {
    string Accion();
    IEstado Siguiente();
}
class Verde : IEstado {
    public string Accion() => "avanzar";
    public IEstado Siguiente() => new Amarillo();
}
class Amarillo : IEstado {
    public string Accion() => "precaucion";
    public IEstado Siguiente() => new Rojo();
}
class Rojo : IEstado {
    public string Accion() => "detenerse";
    public IEstado Siguiente() => new Verde();
}
class Semaforo {
    private IEstado _estado = new Verde();
    public string Accion() => _estado.Accion();
    public void Cambiar() => _estado = _estado.Siguiente();
}
var sem = new Semaforo();
Console.WriteLine(sem.Accion());
sem.Cambiar();
Console.WriteLine(sem.Accion());
sem.Cambiar();
Console.WriteLine(sem.Accion());`,
    },
    output: 'avanzar\nprecaucion\ndetenerse',
  },

  // ---- 17. Template Method ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p17',
    title: 'Template Method',
    description: 'Define el esqueleto de un algoritmo con pasos reemplazables.',
    code: {
      php: `<?php
abstract class Proceso {
    public function ejecutar(): string {
        return $this->paso1() . "\\n" . $this->paso2() . "\\n" . $this->paso3();
    }
    public function paso1(): string { return "inicio"; }
    abstract public function paso2(): string;
    public function paso3(): string { return "fin"; }
}
class ProcesoA extends Proceso {
    public function paso2(): string { return "procesando A"; }
}
class ProcesoB extends Proceso {
    public function paso2(): string { return "procesando B"; }
}
echo (new ProcesoA())->ejecutar() . "\\n";
echo (new ProcesoB())->ejecutar();`,
      python: `from abc import ABC, abstractmethod

class Proceso(ABC):
    def ejecutar(self):
        return f"{self.paso1()}\\n{self.paso2()}\\n{self.paso3()}"
    def paso1(self): return "inicio"
    @abstractmethod
    def paso2(self): ...
    def paso3(self): return "fin"

class ProcesoA(Proceso):
    def paso2(self): return "procesando A"

class ProcesoB(Proceso):
    def paso2(self): return "procesando B"

print(ProcesoA().ejecutar())
print(ProcesoB().ejecutar())`,
      javascript: `class Proceso {
  ejecutar() {
    return \`\${this.paso1()}\\n\${this.paso2()}\\n\${this.paso3()}\`;
  }
  paso1() { return "inicio"; }
  paso3() { return "fin"; }
}
class ProcesoA extends Proceso {
  paso2() { return "procesando A"; }
}
class ProcesoB extends Proceso {
  paso2() { return "procesando B"; }
}
console.log(new ProcesoA().ejecutar());
console.log(new ProcesoB().ejecutar());`,
      typescript: `abstract class Proceso {
  ejecutar(): string {
    return \`\${this.paso1()}\\n\${this.paso2()}\\n\${this.paso3()}\`;
  }
  paso1(): string { return "inicio"; }
  abstract paso2(): string;
  paso3(): string { return "fin"; }
}
class ProcesoA extends Proceso {
  paso2(): string { return "procesando A"; }
}
class ProcesoB extends Proceso {
  paso2(): string { return "procesando B"; }
}
console.log(new ProcesoA().ejecutar());
console.log(new ProcesoB().ejecutar());`,
      java: `abstract class Proceso {
    public String ejecutar() {
        return paso1() + "\\n" + paso2() + "\\n" + paso3();
    }
    public String paso1() { return "inicio"; }
    public abstract String paso2();
    public String paso3() { return "fin"; }
}
class ProcesoA extends Proceso {
    public String paso2() { return "procesando A"; }
}
class ProcesoB extends Proceso {
    public String paso2() { return "procesando B"; }
}
System.out.println(new ProcesoA().ejecutar());
System.out.println(new ProcesoB().ejecutar());`,
      csharp: `abstract class Proceso {
    public string Ejecutar() {
        return $"{Paso1()}\\n{Paso2()}\\n{Paso3()}";
    }
    public virtual string Paso1() => "inicio";
    public abstract string Paso2();
    public virtual string Paso3() => "fin";
}
class ProcesoA : Proceso {
    public override string Paso2() => "procesando A";
}
class ProcesoB : Proceso {
    public override string Paso2() => "procesando B";
}
Console.WriteLine(new ProcesoA().Ejecutar());
Console.WriteLine(new ProcesoB().Ejecutar());`,
    },
    output: 'inicio\nprocesando A\nfin\ninicio\nprocesando B\nfin',
  },

  // ---- 18. Iterator ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p18',
    title: 'Iterator',
    description: 'Recorre una coleccion sin exponer su estructura interna.',
    code: {
      php: `<?php
class Rango {
    private int $actual;
    public function __construct(private int $inicio, private int $fin) {
        $this->actual = $inicio;
    }
    public function hasNext(): bool { return $this->actual <= $this->fin; }
    public function next(): int { return $this->actual++; }
}
$rango = new Rango(1, 5);
$partes = [];
while ($rango->hasNext()) {
    $partes[] = $rango->next();
}
echo implode(" ", $partes);`,
      python: `class Rango:
    def __init__(self, inicio, fin):
        self.actual = inicio
        self.fin = fin
    def has_next(self):
        return self.actual <= self.fin
    def next(self):
        v = self.actual
        self.actual += 1
        return v

rango = Rango(1, 5)
partes = []
while rango.has_next():
    partes.append(str(rango.next()))
print(" ".join(partes))`,
      javascript: `class Rango {
  constructor(inicio, fin) {
    this.actual = inicio;
    this.fin = fin;
  }
  hasNext() { return this.actual <= this.fin; }
  next() { return this.actual++; }
}
const rango = new Rango(1, 5);
const partes = [];
while (rango.hasNext()) {
  partes.push(rango.next());
}
console.log(partes.join(" "));`,
      typescript: `class Rango {
  private actual: number;
  constructor(inicio: number, private fin: number) {
    this.actual = inicio;
  }
  hasNext(): boolean { return this.actual <= this.fin; }
  next(): number { return this.actual++; }
}
const rango = new Rango(1, 5);
const partes: number[] = [];
while (rango.hasNext()) {
  partes.push(rango.next());
}
console.log(partes.join(" "));`,
      java: `class Rango {
    private int actual;
    private final int fin;
    public Rango(int inicio, int fin) {
        this.actual = inicio;
        this.fin = fin;
    }
    public boolean hasNext() { return actual <= fin; }
    public int next() { return actual++; }
}
Rango rango = new Rango(1, 5);
List<String> partes = new ArrayList<>();
while (rango.hasNext()) {
    partes.add(String.valueOf(rango.next()));
}
System.out.println(String.join(" ", partes));`,
      csharp: `class Rango {
    private int _actual;
    private readonly int _fin;
    public Rango(int inicio, int fin) {
        _actual = inicio;
        _fin = fin;
    }
    public bool HasNext() => _actual <= _fin;
    public int Next() => _actual++;
}
var rango = new Rango(1, 5);
var partes = new List<string>();
while (rango.HasNext()) {
    partes.Add(rango.Next().ToString());
}
Console.WriteLine(string.Join(" ", partes));`,
    },
    output: '1 2 3 4 5',
  },

  // ---- 19. Mediator ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p19',
    title: 'Mediator',
    description: 'Centraliza la comunicacion entre componentes.',
    code: {
      php: `<?php
class Mediador {
    private $componenteB = null;
    public function setB(object $b): void { $this->componenteB = $b; }
    public function enviar(int $valor): void {
        $this->componenteB->recibir($valor * 2);
    }
}
class ComponenteA {
    public function __construct(private Mediador $med) {}
    public function enviar(int $v): void { $this->med->enviar($v); }
}
class ComponenteB {
    public function recibir(int $v): void {
        echo "B recibio: $v";
    }
}
$med = new Mediador();
$b = new ComponenteB();
$med->setB($b);
$a = new ComponenteA($med);
$a->enviar(10);`,
      python: `class Mediador:
    def __init__(self):
        self.componente_b = None
    def set_b(self, b):
        self.componente_b = b
    def enviar(self, valor):
        self.componente_b.recibir(valor * 2)

class ComponenteA:
    def __init__(self, med):
        self.med = med
    def enviar(self, v):
        self.med.enviar(v)

class ComponenteB:
    def recibir(self, v):
        print(f"B recibio: {v}")

med = Mediador()
b = ComponenteB()
med.set_b(b)
a = ComponenteA(med)
a.enviar(10)`,
      javascript: `class Mediador {
  setB(b) { this.componenteB = b; }
  enviar(valor) { this.componenteB.recibir(valor * 2); }
}
class ComponenteA {
  constructor(med) { this.med = med; }
  enviar(v) { this.med.enviar(v); }
}
class ComponenteB {
  recibir(v) { console.log(\`B recibio: \${v}\`); }
}
const med = new Mediador();
const b = new ComponenteB();
med.setB(b);
const a = new ComponenteA(med);
a.enviar(10);`,
      typescript: `class Mediador {
  private componenteB!: ComponenteB;
  setB(b: ComponenteB): void { this.componenteB = b; }
  enviar(valor: number): void {
    this.componenteB.recibir(valor * 2);
  }
}
class ComponenteA {
  constructor(private med: Mediador) {}
  enviar(v: number): void { this.med.enviar(v); }
}
class ComponenteB {
  recibir(v: number): void {
    console.log(\`B recibio: \${v}\`);
  }
}
const med = new Mediador();
const b = new ComponenteB();
med.setB(b);
const a = new ComponenteA(med);
a.enviar(10);`,
      java: `class ComponenteB {
    public void recibir(int v) {
        System.out.println("B recibio: " + v);
    }
}
class Mediador {
    private ComponenteB componenteB;
    public void setB(ComponenteB b) { componenteB = b; }
    public void enviar(int valor) { componenteB.recibir(valor * 2); }
}
class ComponenteA {
    private final Mediador med;
    public ComponenteA(Mediador med) { this.med = med; }
    public void enviar(int v) { med.enviar(v); }
}
Mediador med = new Mediador();
ComponenteB b = new ComponenteB();
med.setB(b);
ComponenteA a = new ComponenteA(med);
a.enviar(10);`,
      csharp: `class ComponenteB {
    public void Recibir(int v) {
        Console.WriteLine($"B recibio: {v}");
    }
}
class Mediador {
    private ComponenteB _b = null!;
    public void SetB(ComponenteB b) => _b = b;
    public void Enviar(int valor) => _b.Recibir(valor * 2);
}
class ComponenteA {
    private readonly Mediador _med;
    public ComponenteA(Mediador med) => _med = med;
    public void Enviar(int v) => _med.Enviar(v);
}
var med = new Mediador();
var b = new ComponenteB();
med.SetB(b);
var a = new ComponenteA(med);
a.Enviar(10);`,
    },
    output: 'B recibio: 20',
  },

  // ---- 20. Memento ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p20',
    title: 'Memento',
    description: 'Guarda y restaura el estado previo de un objeto.',
    code: {
      php: `<?php
class Memento {
    public function __construct(public readonly int $valor) {}
}
class Editor {
    public int $valor;
    public function __construct(int $v) { $this->valor = $v; }
    public function guardar(): Memento { return new Memento($this->valor); }
    public function restaurar(Memento $m): void { $this->valor = $m->valor; }
}
$editor = new Editor(42);
echo "actual: {$editor->valor}\\n";
$guardado = $editor->guardar();
$editor->valor = 99;
echo "modificado: {$editor->valor}\\n";
$editor->restaurar($guardado);
echo "restaurado: {$editor->valor}";`,
      python: `class Memento:
    def __init__(self, valor):
        self.valor = valor

class Editor:
    def __init__(self, valor):
        self.valor = valor
    def guardar(self):
        return Memento(self.valor)
    def restaurar(self, m):
        self.valor = m.valor

editor = Editor(42)
print(f"actual: {editor.valor}")
guardado = editor.guardar()
editor.valor = 99
print(f"modificado: {editor.valor}")
editor.restaurar(guardado)
print(f"restaurado: {editor.valor}")`,
      javascript: `class Memento {
  constructor(valor) { this.valor = valor; }
}
class Editor {
  constructor(valor) { this.valor = valor; }
  guardar() { return new Memento(this.valor); }
  restaurar(m) { this.valor = m.valor; }
}
const editor = new Editor(42);
console.log(\`actual: \${editor.valor}\`);
const guardado = editor.guardar();
editor.valor = 99;
console.log(\`modificado: \${editor.valor}\`);
editor.restaurar(guardado);
console.log(\`restaurado: \${editor.valor}\`);`,
      typescript: `class Memento {
  constructor(public readonly valor: number) {}
}
class Editor {
  constructor(public valor: number) {}
  guardar(): Memento { return new Memento(this.valor); }
  restaurar(m: Memento): void { this.valor = m.valor; }
}
const editor = new Editor(42);
console.log(\`actual: \${editor.valor}\`);
const guardado = editor.guardar();
editor.valor = 99;
console.log(\`modificado: \${editor.valor}\`);
editor.restaurar(guardado);
console.log(\`restaurado: \${editor.valor}\`);`,
      java: `class Memento {
    final int valor;
    Memento(int valor) { this.valor = valor; }
}
class Editor {
    int valor;
    Editor(int valor) { this.valor = valor; }
    Memento guardar() { return new Memento(valor); }
    void restaurar(Memento m) { valor = m.valor; }
}
Editor editor = new Editor(42);
System.out.println("actual: " + editor.valor);
Memento guardado = editor.guardar();
editor.valor = 99;
System.out.println("modificado: " + editor.valor);
editor.restaurar(guardado);
System.out.println("restaurado: " + editor.valor);`,
      csharp: `class Memento {
    public int Valor { get; }
    public Memento(int valor) => Valor = valor;
}
class Editor {
    public int Valor { get; set; }
    public Editor(int valor) => Valor = valor;
    public Memento Guardar() => new Memento(Valor);
    public void Restaurar(Memento m) => Valor = m.Valor;
}
var editor = new Editor(42);
Console.WriteLine($"actual: {editor.Valor}");
var guardado = editor.Guardar();
editor.Valor = 99;
Console.WriteLine($"modificado: {editor.Valor}");
editor.Restaurar(guardado);
Console.WriteLine($"restaurado: {editor.Valor}");`,
    },
    output: 'actual: 42\nmodificado: 99\nrestaurado: 42',
  },

  // ---- 21. Chain of Responsibility ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p21',
    title: 'Chain of Responsibility',
    description: 'Pasa una solicitud por una cadena de manejadores hasta resolverla.',
    code: {
      php: `<?php
function handlerNegativo(int $n, ?callable $next): string {
    if ($n < 0) return "negativo: $n";
    return $next ? $next($n) : "sin handler";
}
function handlerMedio(int $n, ?callable $next): string {
    if ($n < 100) return "rango medio: $n";
    return $next ? $next($n) : "sin handler";
}
function handlerAlto(int $n, ?callable $next): string {
    return "alto: $n";
}
function procesar(int $n): string {
    return handlerNegativo($n, fn($v) =>
        handlerMedio($v, fn($v2) =>
            handlerAlto($v2, null)));
}
echo procesar(50);`,
      python: `def handler_negativo(n, siguiente=None):
    if n < 0:
        return f"negativo: {n}"
    return siguiente(n) if siguiente else "sin handler"

def handler_medio(n, siguiente=None):
    if n < 100:
        return f"rango medio: {n}"
    return siguiente(n) if siguiente else "sin handler"

def handler_alto(n, siguiente=None):
    return f"alto: {n}"

def procesar(n):
    return handler_negativo(n,
        lambda v: handler_medio(v,
            lambda v2: handler_alto(v2)))

print(procesar(50))`,
      javascript: `function handlerNegativo(n, next) {
  if (n < 0) return \`negativo: \${n}\`;
  return next ? next(n) : "sin handler";
}
function handlerMedio(n, next) {
  if (n < 100) return \`rango medio: \${n}\`;
  return next ? next(n) : "sin handler";
}
function handlerAlto(n) {
  return \`alto: \${n}\`;
}
function procesar(n) {
  return handlerNegativo(n,
    v => handlerMedio(v,
      v2 => handlerAlto(v2)));
}
console.log(procesar(50));`,
      typescript: `function handlerNegativo(n: number, next?: (v: number) => string): string {
  if (n < 0) return \`negativo: \${n}\`;
  return next ? next(n) : "sin handler";
}
function handlerMedio(n: number, next?: (v: number) => string): string {
  if (n < 100) return \`rango medio: \${n}\`;
  return next ? next(n) : "sin handler";
}
function handlerAlto(n: number): string {
  return \`alto: \${n}\`;
}
function procesar(n: number): string {
  return handlerNegativo(n,
    v => handlerMedio(v,
      v2 => handlerAlto(v2)));
}
console.log(procesar(50));`,
      java: `import java.util.function.Function;

static String handlerNegativo(int n, Function<Integer, String> next) {
    if (n < 0) return "negativo: " + n;
    return next != null ? next.apply(n) : "sin handler";
}
static String handlerMedio(int n, Function<Integer, String> next) {
    if (n < 100) return "rango medio: " + n;
    return next != null ? next.apply(n) : "sin handler";
}
static String handlerAlto(int n) {
    return "alto: " + n;
}
static String procesar(int n) {
    return handlerNegativo(n,
        v -> handlerMedio(v,
            v2 -> handlerAlto(v2)));
}
System.out.println(procesar(50));`,
      csharp: `static string HandlerNegativo(int n, Func<int, string>? next) {
    if (n < 0) return $"negativo: {n}";
    return next != null ? next(n) : "sin handler";
}
static string HandlerMedio(int n, Func<int, string>? next) {
    if (n < 100) return $"rango medio: {n}";
    return next != null ? next(n) : "sin handler";
}
static string HandlerAlto(int n) {
    return $"alto: {n}";
}
static string Procesar(int n) {
    return HandlerNegativo(n,
        v => HandlerMedio(v,
            v2 => HandlerAlto(v2)));
}
Console.WriteLine(Procesar(50));`,
    },
    output: 'rango medio: 50',
  },

  // ---- 22. Visitor ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p22',
    title: 'Visitor',
    description: 'Agrega operaciones a clases sin modificarlas.',
    code: {
      php: `<?php
class Numero {
    public function __construct(public int $valor) {}
    public function aceptar(callable $visitor): string {
        return $visitor('numero', $this->valor);
    }
}
class Texto {
    public function __construct(public string $valor) {}
    public function aceptar(callable $visitor): string {
        return $visitor('texto', $this->valor);
    }
}
function printVisitor(string $tipo, mixed $val): string {
    return "$tipo: $val";
}
$elementos = [new Numero(42), new Texto("hola")];
foreach ($elementos as $el) {
    echo $el->aceptar('printVisitor') . "\\n";
}`,
      python: `class Numero:
    def __init__(self, valor):
        self.valor = valor
    def aceptar(self, visitor):
        return visitor("numero", self.valor)

class Texto:
    def __init__(self, valor):
        self.valor = valor
    def aceptar(self, visitor):
        return visitor("texto", self.valor)

def print_visitor(tipo, val):
    return f"{tipo}: {val}"

elementos = [Numero(42), Texto("hola")]
for el in elementos:
    print(el.aceptar(print_visitor))`,
      javascript: `class Numero {
  constructor(valor) { this.valor = valor; }
  aceptar(visitor) { return visitor("numero", this.valor); }
}
class Texto {
  constructor(valor) { this.valor = valor; }
  aceptar(visitor) { return visitor("texto", this.valor); }
}
function printVisitor(tipo, val) {
  return \`\${tipo}: \${val}\`;
}
const elementos = [new Numero(42), new Texto("hola")];
for (const el of elementos) {
  console.log(el.aceptar(printVisitor));
}`,
      typescript: `class Numero {
  constructor(public valor: number) {}
  aceptar(visitor: (t: string, v: unknown) => string): string {
    return visitor("numero", this.valor);
  }
}
class Texto {
  constructor(public valor: string) {}
  aceptar(visitor: (t: string, v: unknown) => string): string {
    return visitor("texto", this.valor);
  }
}
function printVisitor(tipo: string, val: unknown): string {
  return \`\${tipo}: \${val}\`;
}
const elementos = [new Numero(42), new Texto("hola")];
for (const el of elementos) {
  console.log(el.aceptar(printVisitor));
}`,
      java: `interface Elemento {
    String aceptar(BiFunction<String, Object, String> visitor);
}
class Numero implements Elemento {
    final int valor;
    Numero(int valor) { this.valor = valor; }
    public String aceptar(BiFunction<String, Object, String> visitor) {
        return visitor.apply("numero", valor);
    }
}
class Texto implements Elemento {
    final String valor;
    Texto(String valor) { this.valor = valor; }
    public String aceptar(BiFunction<String, Object, String> visitor) {
        return visitor.apply("texto", valor);
    }
}
BiFunction<String, Object, String> printVisitor = (tipo, val) ->
    tipo + ": " + val;
Elemento[] elementos = { new Numero(42), new Texto("hola") };
for (var el : elementos) {
    System.out.println(el.aceptar(printVisitor));
}`,
      csharp: `interface IElemento {
    string Aceptar(Func<string, object, string> visitor);
}
class Numero : IElemento {
    public int Valor { get; }
    public Numero(int valor) => Valor = valor;
    public string Aceptar(Func<string, object, string> visitor) {
        return visitor("numero", Valor);
    }
}
class Texto : IElemento {
    public string Valor { get; }
    public Texto(string valor) => Valor = valor;
    public string Aceptar(Func<string, object, string> visitor) {
        return visitor("texto", Valor);
    }
}
Func<string, object, string> printVisitor = (tipo, val) =>
    $"{tipo}: {val}";
IElemento[] elementos = { new Numero(42), new Texto("hola") };
foreach (var el in elementos) {
    Console.WriteLine(el.Aceptar(printVisitor));
}`,
    },
    output: 'numero: 42\ntexto: hola',
  },

  // ---- 23. Interpreter ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p23',
    title: 'Interpreter',
    description: 'Evalua expresiones definidas en un lenguaje simple.',
    code: {
      php: `<?php
class NumeroExp {
    public function __construct(private int $valor) {}
    public function interpretar(): int { return $this->valor; }
}
class SumaExp {
    public function __construct(
        private NumeroExp $izq,
        private NumeroExp $der
    ) {}
    public function interpretar(): int {
        return $this->izq->interpretar() + $this->der->interpretar();
    }
}
$expr = new SumaExp(new NumeroExp(3), new NumeroExp(7));
echo $expr->interpretar();`,
      python: `class NumeroExp:
    def __init__(self, valor):
        self.valor = valor
    def interpretar(self):
        return self.valor

class SumaExp:
    def __init__(self, izq, der):
        self.izq = izq
        self.der = der
    def interpretar(self):
        return self.izq.interpretar() + self.der.interpretar()

expr = SumaExp(NumeroExp(3), NumeroExp(7))
print(expr.interpretar())`,
      javascript: `class NumeroExp {
  constructor(valor) { this.valor = valor; }
  interpretar() { return this.valor; }
}
class SumaExp {
  constructor(izq, der) { this.izq = izq; this.der = der; }
  interpretar() {
    return this.izq.interpretar() + this.der.interpretar();
  }
}
const expr = new SumaExp(new NumeroExp(3), new NumeroExp(7));
console.log(expr.interpretar());`,
      typescript: `interface Expresion {
  interpretar(): number;
}
class NumeroExp implements Expresion {
  constructor(private valor: number) {}
  interpretar(): number { return this.valor; }
}
class SumaExp implements Expresion {
  constructor(private izq: Expresion, private der: Expresion) {}
  interpretar(): number {
    return this.izq.interpretar() + this.der.interpretar();
  }
}
const expr = new SumaExp(new NumeroExp(3), new NumeroExp(7));
console.log(expr.interpretar());`,
      java: `interface Expresion {
    int interpretar();
}
class NumeroExp implements Expresion {
    private final int valor;
    NumeroExp(int valor) { this.valor = valor; }
    public int interpretar() { return valor; }
}
class SumaExp implements Expresion {
    private final Expresion izq, der;
    SumaExp(Expresion izq, Expresion der) {
        this.izq = izq;
        this.der = der;
    }
    public int interpretar() {
        return izq.interpretar() + der.interpretar();
    }
}
Expresion expr = new SumaExp(new NumeroExp(3), new NumeroExp(7));
System.out.println(expr.interpretar());`,
      csharp: `interface IExpresion {
    int Interpretar();
}
class NumeroExp : IExpresion {
    private readonly int _valor;
    public NumeroExp(int valor) => _valor = valor;
    public int Interpretar() => _valor;
}
class SumaExp : IExpresion {
    private readonly IExpresion _izq, _der;
    public SumaExp(IExpresion izq, IExpresion der) {
        _izq = izq;
        _der = der;
    }
    public int Interpretar() => _izq.Interpretar() + _der.Interpretar();
}
var expr = new SumaExp(new NumeroExp(3), new NumeroExp(7));
Console.WriteLine(expr.Interpretar());`,
    },
    output: '10',
  },

  // ---- 24. Null Object ----
  {
    category: 'comportamiento',
    categoryTitle: 'De comportamiento',
    id: 'p24',
    title: 'Null Object',
    description: 'Evita chequeos de null usando un objeto vacio con comportamiento neutro.',
    code: {
      php: `<?php
class OperacionReal {
    public function aplicar(int $n): int { return $n * 2; }
}
class OperacionNula {
    public function aplicar(int $n): int { return 0; }
}
function ejecutar(object $op, int $n): string {
    return (string) $op->aplicar($n);
}
echo "real: " . ejecutar(new OperacionReal(), 5) . "\\n";
echo "nula: " . ejecutar(new OperacionNula(), 5);`,
      python: `class OperacionReal:
    def aplicar(self, n):
        return n * 2

class OperacionNula:
    def aplicar(self, n):
        return 0

def ejecutar(op, n):
    return op.aplicar(n)

print(f"real: {ejecutar(OperacionReal(), 5)}")
print(f"nula: {ejecutar(OperacionNula(), 5)}")`,
      javascript: `class OperacionReal {
  aplicar(n) { return n * 2; }
}
class OperacionNula {
  aplicar(n) { return 0; }
}
function ejecutar(op, n) {
  return op.aplicar(n);
}
console.log(\`real: \${ejecutar(new OperacionReal(), 5)}\`);
console.log(\`nula: \${ejecutar(new OperacionNula(), 5)}\`);`,
      typescript: `interface Operacion {
  aplicar(n: number): number;
}
class OperacionReal implements Operacion {
  aplicar(n: number): number { return n * 2; }
}
class OperacionNula implements Operacion {
  aplicar(n: number): number { return 0; }
}
function ejecutar(op: Operacion, n: number): number {
  return op.aplicar(n);
}
console.log(\`real: \${ejecutar(new OperacionReal(), 5)}\`);
console.log(\`nula: \${ejecutar(new OperacionNula(), 5)}\`);`,
      java: `interface Operacion {
    int aplicar(int n);
}
class OperacionReal implements Operacion {
    public int aplicar(int n) { return n * 2; }
}
class OperacionNula implements Operacion {
    public int aplicar(int n) { return 0; }
}
static int ejecutar(Operacion op, int n) {
    return op.aplicar(n);
}
System.out.println("real: " + ejecutar(new OperacionReal(), 5));
System.out.println("nula: " + ejecutar(new OperacionNula(), 5));`,
      csharp: `interface IOperacion {
    int Aplicar(int n);
}
class OperacionReal : IOperacion {
    public int Aplicar(int n) => n * 2;
}
class OperacionNula : IOperacion {
    public int Aplicar(int n) => 0;
}
static int Ejecutar(IOperacion op, int n) => op.Aplicar(n);
Console.WriteLine($"real: {Ejecutar(new OperacionReal(), 5)}");
Console.WriteLine($"nula: {Ejecutar(new OperacionNula(), 5)}");`,
    },
    output: 'real: 10\nnula: 0',
  },
]
