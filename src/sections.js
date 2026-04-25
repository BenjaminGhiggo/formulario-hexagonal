const LANGS = ['php', 'python', 'javascript', 'typescript', 'java', 'csharp']

const LANG_LABELS = {
  php: 'PHP',
  python: 'Python',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  java: 'Java',
  csharp: '.NET (C#)',
}

const sections = [
  // ---- 1. CLASE ----
  {
    num: 1,
    title: 'CLASE (tipo concreto)',
    formula: 'A := (x: Z) -> { f: Z -> Z | f(x) = 2x }',
    meaning: 'A = clase concreta, x = atributo entero (estado), f = metodo que duplica x',
    code: {
      php: `class A {
    public function __construct(public int $x) {}
    public function f(): int { return $this->x * 2; }
}
$a = new A(5);
echo "a->f() = {$a->f()}";`,
      python: `class A:
    def __init__(self, x: int):
        self.x = x
    def f(self) -> int:
        return self.x * 2

a = A(5)
print(f"a.f() = {a.f()}")`,
      javascript: `class A {
  constructor(x) {
    this.x = x;
  }
  f() {
    return this.x * 2;
  }
}
const a = new A(5);
console.log(\`a.f() = \${a.f()}\`);`,
      typescript: `class A {
  constructor(public x: number) {}
  f(): number {
    return this.x * 2;
  }
}
const a = new A(5);
console.log(\`a.f() = \${a.f()}\`);`,
      java: `class A {
    private final int x;
    public A(int x) { this.x = x; }
    public int f() { return this.x * 2; }
}

A a = new A(5);
System.out.println("a.f() = " + a.f());`,
      csharp: `class A {
    public int X { get; }
    public A(int x) => X = x;
    public int F() => X * 2;
}

var a = new A(5);
Console.WriteLine($"a.F() = {a.F()}");`,
    },
    output: 'a.f() = 10',
  },

  // ---- 2. INTERFAZ ----
  {
    num: 2,
    title: 'INTERFAZ P (puerto)',
    formula: 'P := { m: Z -> S }',
    meaning: 'P = interfaz (puerto), m = metodo abstracto, Z = entero, S = string',
    code: {
      php: `interface P {
    public function m(int $a): string;
}`,
      python: `from abc import ABC, abstractmethod

class P(ABC):
    @abstractmethod
    def m(self, a: int) -> str: ...`,
      javascript: `// En JS no hay interfaces nativas,
// se usa convención / duck typing
// P = cualquier objeto con método m(a) -> string`,
      typescript: `interface P {
  m(a: number): string;
}`,
      java: `interface P {
    String m(int a);
}`,
      csharp: `interface IP {
    string M(int a);
}`,
    },
    output: '(define contrato abstracto)',
  },

  // ---- 3. POLIMORFISMO ----
  {
    num: 3,
    title: 'POLIMORFISMO',
    formula: 'Q, R : P  |  usar(P, x) -> p.m(x)',
    meaning: 'Q, R = implementaciones concretas de P; usar = funcion polimorfica',
    code: {
      php: `class Q implements P {
    public function m(int $a): string { return "Q: $a"; }
}
class R implements P {
    public function m(int $a): string { return "R: " . ($a * 2); }
}
function usar(P $p, int $x): string {
    return $p->m($x);
}
echo usar(new Q(), 3);
echo usar(new R(), 3);`,
      python: `class Q(P):
    def m(self, a: int) -> str:
        return f"Q: {a}"

class R(P):
    def m(self, a: int) -> str:
        return f"R: {a * 2}"

def usar(p: P, x: int) -> str:
    return p.m(x)

print(usar(Q(), 3))
print(usar(R(), 3))`,
      javascript: `class Q {
  m(a) { return \`Q: \${a}\`; }
}
class R {
  m(a) { return \`R: \${a * 2}\`; }
}
function usar(p, x) {
  return p.m(x);
}
console.log(usar(new Q(), 3));
console.log(usar(new R(), 3));`,
      typescript: `class Q implements P {
  m(a: number): string { return \`Q: \${a}\`; }
}
class R implements P {
  m(a: number): string { return \`R: \${a * 2}\`; }
}
function usar(p: P, x: number): string {
  return p.m(x);
}
console.log(usar(new Q(), 3));
console.log(usar(new R(), 3));`,
      java: `class Q implements P {
    public String m(int a) { return "Q: " + a; }
}
class R implements P {
    public String m(int a) { return "R: " + (a * 2); }
}
static String usar(P p, int x) {
    return p.m(x);
}
System.out.println(usar(new Q(), 3));
System.out.println(usar(new R(), 3));`,
      csharp: `class Q : IP {
    public string M(int a) => $"Q: {a}";
}
class R : IP {
    public string M(int a) => $"R: {a * 2}";
}
static string Usar(IP p, int x) => p.M(x);

Console.WriteLine(Usar(new Q(), 3));
Console.WriteLine(Usar(new R(), 3));`,
    },
    output: 'Q: 3\nR: 6',
  },

  // ---- 4. INVERSION DE DEPENDENCIAS ----
  {
    num: 4,
    title: 'INVERSION DE DEPENDENCIAS (DIP)',
    formula: 'S = (p: P) -> hacer(x: Z): S = p.m(x)',
    meaning: 'S = modulo de alto nivel, p = dependencia abstracta (P)',
    code: {
      php: `class S {
    public function __construct(private P $p) {}
    public function hacer(int $x): string {
        return $this->p->m($x);
    }
}
$servicio = new S(new Q());
echo $servicio->hacer(7);`,
      python: `class S:
    def __init__(self, p: P):
        self._p = p
    def hacer(self, x: int) -> str:
        return self._p.m(x)

servicio = S(Q())
print(servicio.hacer(7))`,
      javascript: `class S {
  constructor(p) {
    this.p = p;
  }
  hacer(x) {
    return this.p.m(x);
  }
}
const servicio = new S(new Q());
console.log(servicio.hacer(7));`,
      typescript: `class S {
  constructor(private p: P) {}
  hacer(x: number): string {
    return this.p.m(x);
  }
}
const servicio = new S(new Q());
console.log(servicio.hacer(7));`,
      java: `class S {
    private final P p;
    public S(P p) { this.p = p; }
    public String hacer(int x) { return p.m(x); }
}
S servicio = new S(new Q());
System.out.println(servicio.hacer(7));`,
      csharp: `class S {
    private readonly IP _p;
    public S(IP p) => _p = p;
    public string Hacer(int x) => _p.M(x);
}
var servicio = new S(new Q());
Console.WriteLine(servicio.Hacer(7));`,
    },
    output: 'Q: 7',
  },

  // ---- 5. LISKOV ----
  {
    num: 5,
    title: 'SUSTITUCION DE LISKOV (LSP)',
    formula: 'forall Q,R : P . (forall S con P) . S(Q) === S(R) en comportamiento',
    meaning: 'Q y R son intercambiables donde se espere P, sin romper S',
    code: {
      php: `function procesar(P $p, int $v): string {
    return (new S($p))->hacer($v);
}
echo procesar(new Q(), 4);
echo procesar(new R(), 4);`,
      python: `def procesar(p: P, v: int) -> str:
    return S(p).hacer(v)

print(procesar(Q(), 4))
print(procesar(R(), 4))`,
      javascript: `function procesar(p, v) {
  return new S(p).hacer(v);
}
console.log(procesar(new Q(), 4));
console.log(procesar(new R(), 4));`,
      typescript: `function procesar(p: P, v: number): string {
  return new S(p).hacer(v);
}
console.log(procesar(new Q(), 4));
console.log(procesar(new R(), 4));`,
      java: `static String procesar(P p, int v) {
    return new S(p).hacer(v);
}
System.out.println(procesar(new Q(), 4));
System.out.println(procesar(new R(), 4));`,
      csharp: `static string Procesar(IP p, int v)
    => new S(p).Hacer(v);

Console.WriteLine(Procesar(new Q(), 4));
Console.WriteLine(Procesar(new R(), 4));`,
    },
    output: 'Q: 4\nR: 8',
  },

  // ---- 6. ADAPTER ----
  {
    num: 6,
    title: 'ADAPTER',
    formula: 'L: Z -> S (otro); Adaptador: P con m(a) = L.otro(a)',
    meaning: 'L = libreria externa con interfaz incompatible, Adaptador = convierte L en P',
    code: {
      php: `class L {
    public function otro(int $b): string {
        return "[ext] " . ($b + 100);
    }
}
class Adaptador implements P {
    public function __construct(private L $l) {}
    public function m(int $a): string {
        return $this->l->otro($a);
    }
}
$adapter = new Adaptador(new L());
echo $adapter->m(5);`,
      python: `class L:
    def otro(self, b: int) -> str:
        return f"[ext] {b + 100}"

class Adaptador(P):
    def __init__(self, l: L):
        self._l = l
    def m(self, a: int) -> str:
        return self._l.otro(a)

adapter = Adaptador(L())
print(adapter.m(5))`,
      javascript: `class L {
  otro(b) { return \`[ext] \${b + 100}\`; }
}
class Adaptador {
  constructor(l) { this.l = l; }
  m(a) { return this.l.otro(a); }
}
const adapter = new Adaptador(new L());
console.log(adapter.m(5));`,
      typescript: `class L {
  otro(b: number): string { return \`[ext] \${b + 100}\`; }
}
class Adaptador implements P {
  constructor(private l: L) {}
  m(a: number): string { return this.l.otro(a); }
}
const adapter = new Adaptador(new L());
console.log(adapter.m(5));`,
      java: `class L {
    public String otro(int b) { return "[ext] " + (b + 100); }
}
class Adaptador implements P {
    private final L l;
    public Adaptador(L l) { this.l = l; }
    public String m(int a) { return l.otro(a); }
}
Adaptador adapter = new Adaptador(new L());
System.out.println(adapter.m(5));`,
      csharp: `class L {
    public string Otro(int b) => $"[ext] {b + 100}";
}
class Adaptador : IP {
    private readonly L _l;
    public Adaptador(L l) => _l = l;
    public string M(int a) => _l.Otro(a);
}
var adapter = new Adaptador(new L());
Console.WriteLine(adapter.M(5));`,
    },
    output: '[ext] 105',
  },

  // ---- 7. INYECCION DE DEPENDENCIAS ----
  {
    num: 7,
    title: 'INYECCION DE DEPENDENCIAS',
    formula: 'T := (dep: P) -> ejecutar(x) = dep.m(x)',
    meaning: 'T = clase cualquiera, dep = dependencia inyectada desde fuera',
    code: {
      php: `class T {
    public function __construct(private P $dep) {}
    public function ejecutar(int $x): string {
        return $this->dep->m($x);
    }
}
$inyectado = new T(new Q());
echo $inyectado->ejecutar(10);`,
      python: `class T:
    def __init__(self, dep: P):
        self._dep = dep
    def ejecutar(self, x: int) -> str:
        return self._dep.m(x)

inyectado = T(Q())
print(inyectado.ejecutar(10))`,
      javascript: `class T {
  constructor(dep) { this.dep = dep; }
  ejecutar(x) { return this.dep.m(x); }
}
const inyectado = new T(new Q());
console.log(inyectado.ejecutar(10));`,
      typescript: `class T {
  constructor(private dep: P) {}
  ejecutar(x: number): string {
    return this.dep.m(x);
  }
}
const inyectado = new T(new Q());
console.log(inyectado.ejecutar(10));`,
      java: `class T {
    private final P dep;
    public T(P dep) { this.dep = dep; }
    public String ejecutar(int x) { return dep.m(x); }
}
T inyectado = new T(new Q());
System.out.println(inyectado.ejecutar(10));`,
      csharp: `class T {
    private readonly IP _dep;
    public T(IP dep) => _dep = dep;
    public string Ejecutar(int x) => _dep.M(x);
}
var inyectado = new T(new Q());
Console.WriteLine(inyectado.Ejecutar(10));`,
    },
    output: 'Q: 10',
  },

  // ---- 8. MOCK ----
  {
    num: 8,
    title: 'MOCK (simulacion para pruebas)',
    formula: 'Mock := { m(x) |-> valor_fijo }',
    meaning: 'Mock = objeto que implementa P con comportamiento programable (sustituto controlable)',
    code: {
      php: `class MockP implements P {
    private string $return;
    public function setReturn(string $s): void {
        $this->return = $s;
    }
    public function m(int $a): string {
        return $this->return;
    }
}
$mock = new MockP();
$mock->setReturn("MOCK");
$sMock = new S($mock);
echo $sMock->hacer(999);`,
      python: `class MockP(P):
    def __init__(self):
        self._ret = ""
    def set_return(self, s: str):
        self._ret = s
    def m(self, a: int) -> str:
        return self._ret

mock = MockP()
mock.set_return("MOCK")
s_mock = S(mock)
print(s_mock.hacer(999))`,
      javascript: `class MockP {
  setReturn(s) { this.ret = s; }
  m(a) { return this.ret; }
}
const mock = new MockP();
mock.setReturn("MOCK");
const sMock = new S(mock);
console.log(sMock.hacer(999));`,
      typescript: `class MockP implements P {
  private ret = "";
  setReturn(s: string) { this.ret = s; }
  m(a: number): string { return this.ret; }
}
const mock = new MockP();
mock.setReturn("MOCK");
const sMock = new S(mock);
console.log(sMock.hacer(999));`,
      java: `class MockP implements P {
    private String ret;
    public void setReturn(String s) { ret = s; }
    public String m(int a) { return ret; }
}
MockP mock = new MockP();
mock.setReturn("MOCK");
S sMock = new S(mock);
System.out.println(sMock.hacer(999));`,
      csharp: `class MockP : IP {
    private string _ret = "";
    public void SetReturn(string s) => _ret = s;
    public string M(int a) => _ret;
}
var mock = new MockP();
mock.SetReturn("MOCK");
var sMock = new S(mock);
Console.WriteLine(sMock.Hacer(999));`,
    },
    output: 'MOCK',
  },

  // ---- 9. REPOSITORIO ----
  {
    num: 9,
    title: 'REPOSITORIO',
    formula: 'Repo := { get(id: Z) -> O, put(id: Z, obj: O) -> void }',
    meaning: 'Repo = contrato de repositorio, id = clave entera, O = objeto generico',
    code: {
      php: `interface Repo {
    public function get(int $id): object;
    public function put(int $id, object $obj): void;
}
class RepoMem implements Repo {
    private array $data = [];
    public function get(int $id): object {
        return $this->data[$id];
    }
    public function put(int $id, object $obj): void {
        $this->data[$id] = $obj;
    }
}
$repo = new RepoMem();
$repo->put(1, new stdClass());
echo get_class($repo->get(1));`,
      python: `from abc import ABC, abstractmethod

class Repo(ABC):
    @abstractmethod
    def get(self, id: int) -> object: ...
    @abstractmethod
    def put(self, id: int, obj: object) -> None: ...

class RepoMem(Repo):
    def __init__(self):
        self._data = {}
    def get(self, id: int) -> object:
        return self._data[id]
    def put(self, id: int, obj: object) -> None:
        self._data[id] = obj

repo = RepoMem()
repo.put(1, object())
print(type(repo.get(1)).__name__)`,
      javascript: `class RepoMem {
  constructor() { this.data = {}; }
  get(id) { return this.data[id]; }
  put(id, obj) { this.data[id] = obj; }
}
const repo = new RepoMem();
repo.put(1, { tipo: "stdClass" });
console.log(typeof repo.get(1));`,
      typescript: `interface Repo {
  get(id: number): object;
  put(id: number, obj: object): void;
}
class RepoMem implements Repo {
  private data: Record<number, object> = {};
  get(id: number): object { return this.data[id]; }
  put(id: number, obj: object): void { this.data[id] = obj; }
}
const repo = new RepoMem();
repo.put(1, {});
console.log(typeof repo.get(1));`,
      java: `interface Repo {
    Object get(int id);
    void put(int id, Object obj);
}
class RepoMem implements Repo {
    private final Map<Integer, Object> data = new HashMap<>();
    public Object get(int id) { return data.get(id); }
    public void put(int id, Object obj) { data.put(id, obj); }
}
RepoMem repo = new RepoMem();
repo.put(1, new Object());
System.out.println(repo.get(1).getClass().getSimpleName());`,
      csharp: `interface IRepo {
    object Get(int id);
    void Put(int id, object obj);
}
class RepoMem : IRepo {
    private readonly Dictionary<int, object> _data = new();
    public object Get(int id) => _data[id];
    public void Put(int id, object obj) => _data[id] = obj;
}
var repo = new RepoMem();
repo.Put(1, new object());
Console.WriteLine(repo.Get(1).GetType().Name);`,
    },
    output: 'Repo guarda stdClass: stdClass',
  },

  // ---- 10. ENTIDAD vs VALUE OBJECT ----
  {
    num: 10,
    title: 'ENTIDAD vs VALUE OBJECT',
    formula: 'Ent tiene id (identidad)  |  Val = { x,y } con igualdad estructural',
    meaning: 'Ent = entidad (identidad propia), Val = objeto valor (compara por contenido)',
    code: {
      php: `class Ent {
    public function __construct(
        public int $id, public int $x
    ) {}
}
class Val {
    public function __construct(
        public int $x, public int $y
    ) {}
    public function equals(Val $o): bool {
        return $this->x == $o->x
            && $this->y == $o->y;
    }
}
$e1 = new Ent(1, 100);
$e2 = new Ent(2, 100);
$v1 = new Val(10, 20);
$v2 = new Val(10, 20);`,
      python: `class Ent:
    def __init__(self, id: int, x: int):
        self.id = id
        self.x = x

class Val:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y
    def __eq__(self, o):
        return self.x == o.x and self.y == o.y

e1, e2 = Ent(1, 100), Ent(2, 100)
v1, v2 = Val(10, 20), Val(10, 20)
print(f"e1 is e2 ? {'SI' if e1 is e2 else 'NO'}")
print(f"v1 == v2 ? {'SI' if v1 == v2 else 'NO'}")`,
      javascript: `class Ent {
  constructor(id, x) { this.id = id; this.x = x; }
}
class Val {
  constructor(x, y) { this.x = x; this.y = y; }
  equals(o) { return this.x === o.x && this.y === o.y; }
}
const e1 = new Ent(1, 100);
const e2 = new Ent(2, 100);
const v1 = new Val(10, 20);
const v2 = new Val(10, 20);
console.log("e1 === e2 ?", e1 === e2 ? "SI" : "NO");
console.log("v1 equals v2 ?", v1.equals(v2) ? "SI" : "NO");`,
      typescript: `class Ent {
  constructor(public id: number, public x: number) {}
}
class Val {
  constructor(public x: number, public y: number) {}
  equals(o: Val): boolean {
    return this.x === o.x && this.y === o.y;
  }
}
const e1 = new Ent(1, 100);
const e2 = new Ent(2, 100);
const v1 = new Val(10, 20);
const v2 = new Val(10, 20);
console.log("e1 === e2 ?", e1 === e2 ? "SI" : "NO");
console.log("v1 equals v2 ?", v1.equals(v2) ? "SI" : "NO");`,
      java: `class Ent {
    final int id, x;
    Ent(int id, int x) { this.id = id; this.x = x; }
}
class Val {
    final int x, y;
    Val(int x, int y) { this.x = x; this.y = y; }
    boolean equals(Val o) { return x == o.x && y == o.y; }
}
Ent e1 = new Ent(1, 100), e2 = new Ent(2, 100);
Val v1 = new Val(10, 20), v2 = new Val(10, 20);
System.out.println("e1 == e2 ? " + (e1 == e2 ? "SI" : "NO"));
System.out.println("v1.equals(v2) ? " + (v1.equals(v2) ? "SI" : "NO"));`,
      csharp: `class Ent {
    public int Id { get; }
    public int X { get; }
    public Ent(int id, int x) { Id = id; X = x; }
}
record Val(int X, int Y); // igualdad estructural

var e1 = new Ent(1, 100);
var e2 = new Ent(2, 100);
var v1 = new Val(10, 20);
var v2 = new Val(10, 20);
Console.WriteLine($"e1 == e2 ? {(e1 == e2 ? "SI" : "NO")}");
Console.WriteLine($"v1 == v2 ? {(v1 == v2 ? "SI" : "NO")}");`,
    },
    output: 'e1 === e2 ? NO\nv1 equals v2 ? SI',
  },

  // ---- 11. COMPOSICION ----
  {
    num: 11,
    title: 'COMPOSICION (sobre herencia)',
    formula: 'M (componente), C := { m: M } -> f() = m.ejec()',
    meaning: 'M = componente interno, C = clase que compone M (no hereda)',
    code: {
      php: `class M {
    public function ejec(): int { return 42; }
}
class C {
    public function __construct(private M $m) {}
    public function f(): int {
        return $this->m->ejec();
    }
}
$comp = new C(new M());
echo "comp->f() = {$comp->f()}";`,
      python: `class M:
    def ejec(self) -> int:
        return 42

class C:
    def __init__(self, m: M):
        self._m = m
    def f(self) -> int:
        return self._m.ejec()

comp = C(M())
print(f"comp.f() = {comp.f()}")`,
      javascript: `class M {
  ejec() { return 42; }
}
class C {
  constructor(m) { this.m = m; }
  f() { return this.m.ejec(); }
}
const comp = new C(new M());
console.log(\`comp.f() = \${comp.f()}\`);`,
      typescript: `class M {
  ejec(): number { return 42; }
}
class C {
  constructor(private m: M) {}
  f(): number { return this.m.ejec(); }
}
const comp = new C(new M());
console.log(\`comp.f() = \${comp.f()}\`);`,
      java: `class M {
    public int ejec() { return 42; }
}
class C {
    private final M m;
    public C(M m) { this.m = m; }
    public int f() { return m.ejec(); }
}
C comp = new C(new M());
System.out.println("comp.f() = " + comp.f());`,
      csharp: `class M {
    public int Ejec() => 42;
}
class C {
    private readonly M _m;
    public C(M m) => _m = m;
    public int F() => _m.Ejec();
}
var comp = new C(new M());
Console.WriteLine($"comp.F() = {comp.F()}");`,
    },
    output: 'comp.f() = 42',
  },

  // ---- 12. HEXAGONO ----
  {
    num: 12,
    title: 'HEXAGONO (Puerto y Adaptador)',
    formula: 'Dominio -> Puerto <- AdaptadorConcreto\nPuerto(op: Z->Z), Dominio.algo(v) = 2 * puerto.op(v)',
    meaning: 'Dominio = logica de negocio, Puerto = abstraccion, Adaptador = implementacion',
    code: {
      php: `interface Puerto {
    public function op(int $x): int;
}
class AdaptadorHex implements Puerto {
    public function op(int $x): int {
        return $x + 100;
    }
}
class Dominio {
    public function __construct(private Puerto $p) {}
    public function algo(int $v): int {
        return $this->p->op($v) * 2;
    }
}
$hex = new Dominio(new AdaptadorHex());
echo "dominio.algo(5) = {$hex->algo(5)}";`,
      python: `from abc import ABC, abstractmethod

class Puerto(ABC):
    @abstractmethod
    def op(self, x: int) -> int: ...

class AdaptadorHex(Puerto):
    def op(self, x: int) -> int:
        return x + 100

class Dominio:
    def __init__(self, p: Puerto):
        self._p = p
    def algo(self, v: int) -> int:
        return self._p.op(v) * 2

hex_ = Dominio(AdaptadorHex())
print(f"dominio.algo(5) = {hex_.algo(5)}")`,
      javascript: `class AdaptadorHex {
  op(x) { return x + 100; }
}
class Dominio {
  constructor(p) { this.p = p; }
  algo(v) { return this.p.op(v) * 2; }
}
const hex = new Dominio(new AdaptadorHex());
console.log(\`dominio.algo(5) = \${hex.algo(5)}\`);`,
      typescript: `interface Puerto {
  op(x: number): number;
}
class AdaptadorHex implements Puerto {
  op(x: number): number { return x + 100; }
}
class Dominio {
  constructor(private p: Puerto) {}
  algo(v: number): number { return this.p.op(v) * 2; }
}
const hex = new Dominio(new AdaptadorHex());
console.log(\`dominio.algo(5) = \${hex.algo(5)}\`);`,
      java: `interface Puerto {
    int op(int x);
}
class AdaptadorHex implements Puerto {
    public int op(int x) { return x + 100; }
}
class Dominio {
    private final Puerto p;
    public Dominio(Puerto p) { this.p = p; }
    public int algo(int v) { return p.op(v) * 2; }
}
Dominio hex = new Dominio(new AdaptadorHex());
System.out.println("dominio.algo(5) = " + hex.algo(5));`,
      csharp: `interface IPuerto {
    int Op(int x);
}
class AdaptadorHex : IPuerto {
    public int Op(int x) => x + 100;
}
class Dominio {
    private readonly IPuerto _p;
    public Dominio(IPuerto p) => _p = p;
    public int Algo(int v) => _p.Op(v) * 2;
}
var hex = new Dominio(new AdaptadorHex());
Console.WriteLine($"dominio.Algo(5) = {hex.Algo(5)}");`,
    },
    output: 'dominio.algo(5) = 210  // (5+100)*2',
  },
]

export { sections, LANGS, LANG_LABELS }
