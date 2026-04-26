// Testing: conceptos con ejemplos practicos (sin framework)

export const testing = [
  // ========== 1. Fundamentos de testing ==========
  {
    category: 1,
    categoryTitle: 'Fundamentos de testing',
    id: 't1',
    title: 'Assert basico',
    description: 'Funcion assert(condicion, mensaje) que verifica una condicion.',
    code: {
      php: `<?php
function assert_true(bool $cond, string $msg): void {
    echo $cond ? "PASS: $msg" : "FAIL: $msg";
}

function sumar(int $a, int $b): int {
    return $a + $b;
}

assert_true(sumar(2, 3) == 5, "2+3 es 5");`,
      python: `def assert_true(cond: bool, msg: str):
    print(f"PASS: {msg}" if cond else f"FAIL: {msg}")

def sumar(a: int, b: int) -> int:
    return a + b

assert_true(sumar(2, 3) == 5, "2+3 es 5")`,
      javascript: `function assertTrue(cond, msg) {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function sumar(a, b) {
  return a + b;
}

assertTrue(sumar(2, 3) === 5, "2+3 es 5");`,
      typescript: `function assertTrue(cond: boolean, msg: string): void {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function sumar(a: number, b: number): number {
  return a + b;
}

assertTrue(sumar(2, 3) === 5, "2+3 es 5");`,
      java: `static void assertTrue(boolean cond, String msg) {
    System.out.println(cond ? "PASS: " + msg : "FAIL: " + msg);
}

static int sumar(int a, int b) {
    return a + b;
}

assertTrue(sumar(2, 3) == 5, "2+3 es 5");`,
      csharp: `static void AssertTrue(bool cond, string msg) {
    Console.WriteLine(cond ? $"PASS: {msg}" : $"FAIL: {msg}");
}

static int Sumar(int a, int b) => a + b;

AssertTrue(Sumar(2, 3) == 5, "2+3 es 5");`,
    },
    output: 'PASS: 2+3 es 5',
  },
  {
    category: 1,
    categoryTitle: 'Fundamentos de testing',
    id: 't2',
    title: 'Test de igualdad',
    description: 'assertEquals compara valor esperado con valor actual.',
    code: {
      php: `<?php
function assert_equals(mixed $expected, mixed $actual, string $msg): void {
    if ($expected === $actual) {
        echo "PASS: $msg";
    } else {
        echo "FAIL: se esperaba $expected pero fue $actual";
    }
}

function multiplicar(int $a, int $b): int {
    return $a * $b;
}

assert_equals(20, multiplicar(4, 5), "4*5 = 20");`,
      python: `def assert_equals(expected, actual, msg):
    if expected == actual:
        print(f"PASS: {msg}")
    else:
        print(f"FAIL: se esperaba {expected} pero fue {actual}")

def multiplicar(a: int, b: int) -> int:
    return a * b

assert_equals(20, multiplicar(4, 5), "4*5 = 20")`,
      javascript: `function assertEquals(expected, actual, msg) {
  if (expected === actual) {
    console.log(\`PASS: \${msg}\`);
  } else {
    console.log(\`FAIL: se esperaba \${expected} pero fue \${actual}\`);
  }
}

function multiplicar(a, b) {
  return a * b;
}

assertEquals(20, multiplicar(4, 5), "4*5 = 20");`,
      typescript: `function assertEquals(expected: number, actual: number, msg: string): void {
  if (expected === actual) {
    console.log(\`PASS: \${msg}\`);
  } else {
    console.log(\`FAIL: se esperaba \${expected} pero fue \${actual}\`);
  }
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

assertEquals(20, multiplicar(4, 5), "4*5 = 20");`,
      java: `static void assertEquals(int expected, int actual, String msg) {
    if (expected == actual) {
        System.out.println("PASS: " + msg);
    } else {
        System.out.println("FAIL: se esperaba " + expected + " pero fue " + actual);
    }
}

static int multiplicar(int a, int b) {
    return a * b;
}

assertEquals(20, multiplicar(4, 5), "4*5 = 20");`,
      csharp: `static void AssertEquals(int expected, int actual, string msg) {
    if (expected == actual) {
        Console.WriteLine($"PASS: {msg}");
    } else {
        Console.WriteLine($"FAIL: se esperaba {expected} pero fue {actual}");
    }
}

static int Multiplicar(int a, int b) => a * b;

AssertEquals(20, Multiplicar(4, 5), "4*5 = 20");`,
    },
    output: 'PASS: 4*5 = 20',
  },
  {
    category: 1,
    categoryTitle: 'Fundamentos de testing',
    id: 't3',
    title: 'Test que falla',
    description: 'Que sucede cuando un test no pasa: mensaje de error claro.',
    code: {
      php: `<?php
function assert_equals(mixed $expected, mixed $actual): void {
    if ($expected === $actual) {
        echo "PASS";
    } else {
        echo "FAIL: se esperaba $expected pero fue $actual";
    }
}

function sumar(int $a, int $b): int {
    return $a + $b;
}

assert_equals(5, sumar(2, 2));`,
      python: `def assert_equals(expected, actual):
    if expected == actual:
        print("PASS")
    else:
        print(f"FAIL: se esperaba {expected} pero fue {actual}")

def sumar(a: int, b: int) -> int:
    return a + b

assert_equals(5, sumar(2, 2))`,
      javascript: `function assertEquals(expected, actual) {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(\`FAIL: se esperaba \${expected} pero fue \${actual}\`);
  }
}

function sumar(a, b) {
  return a + b;
}

assertEquals(5, sumar(2, 2));`,
      typescript: `function assertEquals(expected: number, actual: number): void {
  if (expected === actual) {
    console.log("PASS");
  } else {
    console.log(\`FAIL: se esperaba \${expected} pero fue \${actual}\`);
  }
}

function sumar(a: number, b: number): number {
  return a + b;
}

assertEquals(5, sumar(2, 2));`,
      java: `static void assertEquals(int expected, int actual) {
    if (expected == actual) {
        System.out.println("PASS");
    } else {
        System.out.println("FAIL: se esperaba " + expected + " pero fue " + actual);
    }
}

static int sumar(int a, int b) {
    return a + b;
}

assertEquals(5, sumar(2, 2));`,
      csharp: `static void AssertEquals(int expected, int actual) {
    if (expected == actual) {
        Console.WriteLine("PASS");
    } else {
        Console.WriteLine($"FAIL: se esperaba {expected} pero fue {actual}");
    }
}

static int Sumar(int a, int b) => a + b;

AssertEquals(5, Sumar(2, 2));`,
    },
    output: 'FAIL: se esperaba 5 pero fue 4',
  },
  {
    category: 1,
    categoryTitle: 'Fundamentos de testing',
    id: 't4',
    title: 'Multiples tests',
    description: 'Ejecutar varios tests y contar resultados pass/fail.',
    code: {
      php: `<?php
$pass = 0;
$fail = 0;

function test(bool $cond): void {
    global $pass, $fail;
    $cond ? $pass++ : $fail++;
}

function sumar(int $a, int $b): int { return $a + $b; }
function restar(int $a, int $b): int { return $a - $b; }
function multiplicar(int $a, int $b): int { return $a * $b; }

test(sumar(2, 3) === 5);
test(restar(10, 4) === 6);
test(multiplicar(3, 3) === 9);

$total = $pass + $fail;
echo "$total tests: $pass pass, $fail fail";`,
      python: `pass_count = 0
fail_count = 0

def test(cond: bool):
    global pass_count, fail_count
    if cond:
        pass_count += 1
    else:
        fail_count += 1

def sumar(a, b): return a + b
def restar(a, b): return a - b
def multiplicar(a, b): return a * b

test(sumar(2, 3) == 5)
test(restar(10, 4) == 6)
test(multiplicar(3, 3) == 9)

total = pass_count + fail_count
print(f"{total} tests: {pass_count} pass, {fail_count} fail")`,
      javascript: `let pass = 0;
let fail = 0;

function test(cond) {
  cond ? pass++ : fail++;
}

function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }

test(sumar(2, 3) === 5);
test(restar(10, 4) === 6);
test(multiplicar(3, 3) === 9);

const total = pass + fail;
console.log(\`\${total} tests: \${pass} pass, \${fail} fail\`);`,
      typescript: `let pass = 0;
let fail = 0;

function test(cond: boolean): void {
  cond ? pass++ : fail++;
}

function sumar(a: number, b: number): number { return a + b; }
function restar(a: number, b: number): number { return a - b; }
function multiplicar(a: number, b: number): number { return a * b; }

test(sumar(2, 3) === 5);
test(restar(10, 4) === 6);
test(multiplicar(3, 3) === 9);

const total = pass + fail;
console.log(\`\${total} tests: \${pass} pass, \${fail} fail\`);`,
      java: `static int pass = 0, fail = 0;

static void test(boolean cond) {
    if (cond) pass++; else fail++;
}

static int sumar(int a, int b) { return a + b; }
static int restar(int a, int b) { return a - b; }
static int multiplicar(int a, int b) { return a * b; }

test(sumar(2, 3) == 5);
test(restar(10, 4) == 6);
test(multiplicar(3, 3) == 9);

int total = pass + fail;
System.out.println(total + " tests: " + pass + " pass, " + fail + " fail");`,
      csharp: `int pass = 0, fail = 0;

void Test(bool cond) {
    if (cond) pass++; else fail++;
}

int Sumar(int a, int b) => a + b;
int Restar(int a, int b) => a - b;
int Multiplicar(int a, int b) => a * b;

Test(Sumar(2, 3) == 5);
Test(Restar(10, 4) == 6);
Test(Multiplicar(3, 3) == 9);

int total = pass + fail;
Console.WriteLine($"{total} tests: {pass} pass, {fail} fail");`,
    },
    output: '3 tests: 3 pass, 0 fail',
  },

  // ========== 2. Patrones de testing ==========
  {
    category: 2,
    categoryTitle: 'Patrones de testing',
    id: 't5',
    title: 'Arrange-Act-Assert',
    description: 'Patron AAA: preparar datos, ejecutar accion, verificar resultado.',
    code: {
      php: `<?php
function assert_true(bool $cond, string $msg): void {
    echo $cond ? "PASS: $msg" : "FAIL: $msg";
}

class Calculadora {
    public function sumar(int $a, int $b): int {
        return $a + $b;
    }
}

// Arrange
$calc = new Calculadora();

// Act
$resultado = $calc->sumar(3, 7);

// Assert
assert_true($resultado === 10, "sumar funciona");`,
      python: `def assert_true(cond: bool, msg: str):
    print(f"PASS: {msg}" if cond else f"FAIL: {msg}")

class Calculadora:
    def sumar(self, a: int, b: int) -> int:
        return a + b

# Arrange
calc = Calculadora()

# Act
resultado = calc.sumar(3, 7)

# Assert
assert_true(resultado == 10, "sumar funciona")`,
      javascript: `function assertTrue(cond, msg) {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

class Calculadora {
  sumar(a, b) { return a + b; }
}

// Arrange
const calc = new Calculadora();

// Act
const resultado = calc.sumar(3, 7);

// Assert
assertTrue(resultado === 10, "sumar funciona");`,
      typescript: `function assertTrue(cond: boolean, msg: string): void {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

class Calculadora {
  sumar(a: number, b: number): number { return a + b; }
}

// Arrange
const calc = new Calculadora();

// Act
const resultado = calc.sumar(3, 7);

// Assert
assertTrue(resultado === 10, "sumar funciona");`,
      java: `static void assertTrue(boolean cond, String msg) {
    System.out.println(cond ? "PASS: " + msg : "FAIL: " + msg);
}

static int sumar(int a, int b) { return a + b; }

// Arrange
int a = 3, b = 7;

// Act
int resultado = sumar(a, b);

// Assert
assertTrue(resultado == 10, "sumar funciona");`,
      csharp: `static void AssertTrue(bool cond, string msg) {
    Console.WriteLine(cond ? $"PASS: {msg}" : $"FAIL: {msg}");
}

static int Sumar(int a, int b) => a + b;

// Arrange
int a = 3, b = 7;

// Act
int resultado = Sumar(a, b);

// Assert
AssertTrue(resultado == 10, "sumar funciona");`,
    },
    output: 'PASS: sumar funciona',
  },
  {
    category: 2,
    categoryTitle: 'Patrones de testing',
    id: 't6',
    title: 'Test de bordes',
    description: 'Probar casos limite: cero, negativos, numeros grandes.',
    code: {
      php: `<?php
function assert_true(bool $cond, string $msg): void {
    echo $cond ? "PASS: $msg\\n" : "FAIL: $msg\\n";
}

function sumar(int $a, int $b): int {
    return $a + $b;
}

assert_true(sumar(0, 0) === 0, "cero+cero");
assert_true(sumar(-1, 1) === 0, "negativo+positivo");
assert_true(sumar(999999, 1) === 1000000, "numeros grandes");`,
      python: `def assert_true(cond: bool, msg: str):
    print(f"PASS: {msg}" if cond else f"FAIL: {msg}")

def sumar(a: int, b: int) -> int:
    return a + b

assert_true(sumar(0, 0) == 0, "cero+cero")
assert_true(sumar(-1, 1) == 0, "negativo+positivo")
assert_true(sumar(999999, 1) == 1000000, "numeros grandes")`,
      javascript: `function assertTrue(cond, msg) {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function sumar(a, b) {
  return a + b;
}

assertTrue(sumar(0, 0) === 0, "cero+cero");
assertTrue(sumar(-1, 1) === 0, "negativo+positivo");
assertTrue(sumar(999999, 1) === 1000000, "numeros grandes");`,
      typescript: `function assertTrue(cond: boolean, msg: string): void {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function sumar(a: number, b: number): number {
  return a + b;
}

assertTrue(sumar(0, 0) === 0, "cero+cero");
assertTrue(sumar(-1, 1) === 0, "negativo+positivo");
assertTrue(sumar(999999, 1) === 1000000, "numeros grandes");`,
      java: `static void assertTrue(boolean cond, String msg) {
    System.out.println(cond ? "PASS: " + msg : "FAIL: " + msg);
}

static int sumar(int a, int b) { return a + b; }

assertTrue(sumar(0, 0) == 0, "cero+cero");
assertTrue(sumar(-1, 1) == 0, "negativo+positivo");
assertTrue(sumar(999999, 1) == 1000000, "numeros grandes");`,
      csharp: `static void AssertTrue(bool cond, string msg) {
    Console.WriteLine(cond ? $"PASS: {msg}" : $"FAIL: {msg}");
}

static int Sumar(int a, int b) => a + b;

AssertTrue(Sumar(0, 0) == 0, "cero+cero");
AssertTrue(Sumar(-1, 1) == 0, "negativo+positivo");
AssertTrue(Sumar(999999, 1) == 1000000, "numeros grandes");`,
    },
    output: 'PASS: cero+cero\nPASS: negativo+positivo\nPASS: numeros grandes',
  },
  {
    category: 2,
    categoryTitle: 'Patrones de testing',
    id: 't7',
    title: 'Test con Mock',
    description: 'Mock: objeto falso que reemplaza una dependencia real.',
    code: {
      php: `<?php
function assert_true(bool $cond, string $msg): void {
    echo $cond ? "PASS: $msg" : "FAIL: $msg";
}

interface Operacion {
    public function ejecutar(int $a, int $b): int;
}

class MockOperacion implements Operacion {
    public function ejecutar(int $a, int $b): int {
        return 42;
    }
}

class Servicio {
    public function __construct(private Operacion $op) {}
    public function ejecutar(int $a, int $b): int {
        return $this->op->ejecutar($a, $b);
    }
}

$mock = new MockOperacion();
$servicio = new Servicio($mock);
assert_true($servicio->ejecutar(1, 1) === 42, "mock retorna 42");`,
      python: `def assert_true(cond: bool, msg: str):
    print(f"PASS: {msg}" if cond else f"FAIL: {msg}")

class Operacion:
    def ejecutar(self, a: int, b: int) -> int:
        raise NotImplementedError

class MockOperacion(Operacion):
    def ejecutar(self, a: int, b: int) -> int:
        return 42

class Servicio:
    def __init__(self, op: Operacion):
        self.op = op
    def ejecutar(self, a: int, b: int) -> int:
        return self.op.ejecutar(a, b)

mock = MockOperacion()
servicio = Servicio(mock)
assert_true(servicio.ejecutar(1, 1) == 42, "mock retorna 42")`,
      javascript: `function assertTrue(cond, msg) {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

class MockOperacion {
  ejecutar(a, b) { return 42; }
}

class Servicio {
  constructor(op) { this.op = op; }
  ejecutar(a, b) { return this.op.ejecutar(a, b); }
}

const mock = new MockOperacion();
const servicio = new Servicio(mock);
assertTrue(servicio.ejecutar(1, 1) === 42, "mock retorna 42");`,
      typescript: `function assertTrue(cond: boolean, msg: string): void {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

interface Operacion {
  ejecutar(a: number, b: number): number;
}

class MockOperacion implements Operacion {
  ejecutar(a: number, b: number): number { return 42; }
}

class Servicio {
  constructor(private op: Operacion) {}
  ejecutar(a: number, b: number): number {
    return this.op.ejecutar(a, b);
  }
}

const mock = new MockOperacion();
const servicio = new Servicio(mock);
assertTrue(servicio.ejecutar(1, 1) === 42, "mock retorna 42");`,
      java: `static void assertTrue(boolean cond, String msg) {
    System.out.println(cond ? "PASS: " + msg : "FAIL: " + msg);
}

interface Operacion {
    int ejecutar(int a, int b);
}

class MockOperacion implements Operacion {
    public int ejecutar(int a, int b) { return 42; }
}

class Servicio {
    private Operacion op;
    Servicio(Operacion op) { this.op = op; }
    int ejecutar(int a, int b) { return op.ejecutar(a, b); }
}

MockOperacion mock = new MockOperacion();
Servicio servicio = new Servicio(mock);
assertTrue(servicio.ejecutar(1, 1) == 42, "mock retorna 42");`,
      csharp: `static void AssertTrue(bool cond, string msg) {
    Console.WriteLine(cond ? $"PASS: {msg}" : $"FAIL: {msg}");
}

interface IOperacion {
    int Ejecutar(int a, int b);
}

class MockOperacion : IOperacion {
    public int Ejecutar(int a, int b) => 42;
}

class Servicio {
    private IOperacion op;
    public Servicio(IOperacion op) => this.op = op;
    public int Ejecutar(int a, int b) => op.Ejecutar(a, b);
}

var mock = new MockOperacion();
var servicio = new Servicio(mock);
AssertTrue(servicio.Ejecutar(1, 1) == 42, "mock retorna 42");`,
    },
    output: 'PASS: mock retorna 42',
  },
  {
    category: 2,
    categoryTitle: 'Patrones de testing',
    id: 't8',
    title: 'Test de excepciones',
    description: 'Verificar que una funcion lanza error cuando debe.',
    code: {
      php: `<?php
function assert_true(bool $cond, string $msg): void {
    echo $cond ? "PASS: $msg" : "FAIL: $msg";
}

function dividir(int $a, int $b): float {
    if ($b === 0) throw new Exception("division por cero");
    return $a / $b;
}

$lanzoError = false;
try {
    dividir(10, 0);
} catch (Exception $e) {
    $lanzoError = true;
}

assert_true($lanzoError, "division por cero lanza error");`,
      python: `def assert_true(cond: bool, msg: str):
    print(f"PASS: {msg}" if cond else f"FAIL: {msg}")

def dividir(a: int, b: int) -> float:
    if b == 0:
        raise ValueError("division por cero")
    return a / b

lanzo_error = False
try:
    dividir(10, 0)
except ValueError:
    lanzo_error = True

assert_true(lanzo_error, "division por cero lanza error")`,
      javascript: `function assertTrue(cond, msg) {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function dividir(a, b) {
  if (b === 0) throw new Error("division por cero");
  return a / b;
}

let lanzoError = false;
try {
  dividir(10, 0);
} catch (e) {
  lanzoError = true;
}

assertTrue(lanzoError, "division por cero lanza error");`,
      typescript: `function assertTrue(cond: boolean, msg: string): void {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function dividir(a: number, b: number): number {
  if (b === 0) throw new Error("division por cero");
  return a / b;
}

let lanzoError = false;
try {
  dividir(10, 0);
} catch (e) {
  lanzoError = true;
}

assertTrue(lanzoError, "division por cero lanza error");`,
      java: `static void assertTrue(boolean cond, String msg) {
    System.out.println(cond ? "PASS: " + msg : "FAIL: " + msg);
}

static double dividir(int a, int b) {
    if (b == 0) throw new ArithmeticException("division por cero");
    return (double) a / b;
}

boolean lanzoError = false;
try {
    dividir(10, 0);
} catch (ArithmeticException e) {
    lanzoError = true;
}

assertTrue(lanzoError, "division por cero lanza error");`,
      csharp: `static void AssertTrue(bool cond, string msg) {
    Console.WriteLine(cond ? $"PASS: {msg}" : $"FAIL: {msg}");
}

static double Dividir(int a, int b) {
    if (b == 0) throw new DivideByZeroException("division por cero");
    return (double)a / b;
}

bool lanzoError = false;
try {
    Dividir(10, 0);
} catch (DivideByZeroException) {
    lanzoError = true;
}

AssertTrue(lanzoError, "division por cero lanza error");`,
    },
    output: 'PASS: division por cero lanza error',
  },

  // ========== 3. TDD basico ==========
  {
    category: 3,
    categoryTitle: 'TDD basico',
    id: 't9',
    title: 'Red-Green-Refactor',
    description: 'Ciclo TDD: test falla, implementar, test pasa, limpiar.',
    code: {
      php: `<?php
// STEP 1 - RED: la funcion no existe
echo "RED: esPar no existe\\n";

// STEP 2 - GREEN: implementamos
function esPar(int $n): bool {
    return $n % 2 === 0;
}

$resultado = esPar(4) ? "true" : "false";
echo "GREEN: esPar(4) = $resultado\\n";

// STEP 3 - REFACTOR: codigo limpio, nada que cambiar
echo "REFACTOR: limpio";`,
      python: `# STEP 1 - RED: la funcion no existe
print("RED: esPar no existe")

# STEP 2 - GREEN: implementamos
def es_par(n: int) -> bool:
    return n % 2 == 0

print(f"GREEN: esPar(4) = {str(es_par(4)).lower()}")

# STEP 3 - REFACTOR: codigo limpio, nada que cambiar
print("REFACTOR: limpio")`,
      javascript: `// STEP 1 - RED: la funcion no existe
console.log("RED: esPar no existe");

// STEP 2 - GREEN: implementamos
function esPar(n) {
  return n % 2 === 0;
}

console.log(\`GREEN: esPar(4) = \${esPar(4)}\`);

// STEP 3 - REFACTOR: codigo limpio, nada que cambiar
console.log("REFACTOR: limpio");`,
      typescript: `// STEP 1 - RED: la funcion no existe
console.log("RED: esPar no existe");

// STEP 2 - GREEN: implementamos
function esPar(n: number): boolean {
  return n % 2 === 0;
}

console.log(\`GREEN: esPar(4) = \${esPar(4)}\`);

// STEP 3 - REFACTOR: codigo limpio, nada que cambiar
console.log("REFACTOR: limpio");`,
      java: `// STEP 1 - RED: la funcion no existe
System.out.println("RED: esPar no existe");

// STEP 2 - GREEN: implementamos
static boolean esPar(int n) {
    return n % 2 == 0;
}

System.out.println("GREEN: esPar(4) = " + esPar(4));

// STEP 3 - REFACTOR: codigo limpio, nada que cambiar
System.out.println("REFACTOR: limpio");`,
      csharp: `// STEP 1 - RED: la funcion no existe
Console.WriteLine("RED: esPar no existe");

// STEP 2 - GREEN: implementamos
static bool EsPar(int n) => n % 2 == 0;

Console.WriteLine($"GREEN: esPar(4) = {EsPar(4).ToString().ToLower()}");

// STEP 3 - REFACTOR: codigo limpio, nada que cambiar
Console.WriteLine("REFACTOR: limpio");`,
    },
    output: 'RED: esPar no existe\nGREEN: esPar(4) = true\nREFACTOR: limpio',
  },
  {
    category: 3,
    categoryTitle: 'TDD basico',
    id: 't10',
    title: 'Cobertura',
    description: 'Probar todas las ramas de una funcion: cobertura 100%.',
    code: {
      php: `<?php
function assert_true(bool $cond, string $msg): void {
    echo $cond ? "PASS: $msg\\n" : "FAIL: $msg\\n";
}

function clasificar(int $n): string {
    if ($n < 0) return "negativo";
    if ($n === 0) return "cero";
    return "positivo";
}

assert_true(clasificar(-5) === "negativo", "negativo");
assert_true(clasificar(0) === "cero", "cero");
assert_true(clasificar(3) === "positivo", "positivo");
echo "cobertura: 100%";`,
      python: `def assert_true(cond: bool, msg: str):
    print(f"PASS: {msg}" if cond else f"FAIL: {msg}")

def clasificar(n: int) -> str:
    if n < 0: return "negativo"
    if n == 0: return "cero"
    return "positivo"

assert_true(clasificar(-5) == "negativo", "negativo")
assert_true(clasificar(0) == "cero", "cero")
assert_true(clasificar(3) == "positivo", "positivo")
print("cobertura: 100%")`,
      javascript: `function assertTrue(cond, msg) {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function clasificar(n) {
  if (n < 0) return "negativo";
  if (n === 0) return "cero";
  return "positivo";
}

assertTrue(clasificar(-5) === "negativo", "negativo");
assertTrue(clasificar(0) === "cero", "cero");
assertTrue(clasificar(3) === "positivo", "positivo");
console.log("cobertura: 100%");`,
      typescript: `function assertTrue(cond: boolean, msg: string): void {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

function clasificar(n: number): string {
  if (n < 0) return "negativo";
  if (n === 0) return "cero";
  return "positivo";
}

assertTrue(clasificar(-5) === "negativo", "negativo");
assertTrue(clasificar(0) === "cero", "cero");
assertTrue(clasificar(3) === "positivo", "positivo");
console.log("cobertura: 100%");`,
      java: `static void assertTrue(boolean cond, String msg) {
    System.out.println(cond ? "PASS: " + msg : "FAIL: " + msg);
}

static String clasificar(int n) {
    if (n < 0) return "negativo";
    if (n == 0) return "cero";
    return "positivo";
}

assertTrue(clasificar(-5).equals("negativo"), "negativo");
assertTrue(clasificar(0).equals("cero"), "cero");
assertTrue(clasificar(3).equals("positivo"), "positivo");
System.out.println("cobertura: 100%");`,
      csharp: `static void AssertTrue(bool cond, string msg) {
    Console.WriteLine(cond ? $"PASS: {msg}" : $"FAIL: {msg}");
}

static string Clasificar(int n) {
    if (n < 0) return "negativo";
    if (n == 0) return "cero";
    return "positivo";
}

AssertTrue(Clasificar(-5) == "negativo", "negativo");
AssertTrue(Clasificar(0) == "cero", "cero");
AssertTrue(Clasificar(3) == "positivo", "positivo");
Console.WriteLine("cobertura: 100%");`,
    },
    output: 'PASS: negativo\nPASS: cero\nPASS: positivo\ncobertura: 100%',
  },
  {
    category: 3,
    categoryTitle: 'TDD basico',
    id: 't11',
    title: 'Test de integracion',
    description: 'Probar dos componentes reales trabajando juntos.',
    code: {
      php: `<?php
function assert_true(bool $cond, string $msg): void {
    echo $cond ? "PASS: $msg" : "FAIL: $msg";
}

interface Operacion {
    public function ejecutar(int $a, int $b): int;
}

class Sumar implements Operacion {
    public function ejecutar(int $a, int $b): int {
        return $a + $b;
    }
}

class Calculadora {
    public function __construct(private Operacion $op) {}
    public function ejecutar(int $a, int $b): int {
        return $this->op->ejecutar($a, $b);
    }
}

$calc = new Calculadora(new Sumar());
$resultado = $calc->ejecutar(3, 7);
assert_true($resultado === 10, "integracion calculadora+sumar = 10");`,
      python: `def assert_true(cond: bool, msg: str):
    print(f"PASS: {msg}" if cond else f"FAIL: {msg}")

class Operacion:
    def ejecutar(self, a: int, b: int) -> int:
        raise NotImplementedError

class Sumar(Operacion):
    def ejecutar(self, a: int, b: int) -> int:
        return a + b

class Calculadora:
    def __init__(self, op: Operacion):
        self.op = op
    def ejecutar(self, a: int, b: int) -> int:
        return self.op.ejecutar(a, b)

calc = Calculadora(Sumar())
resultado = calc.ejecutar(3, 7)
assert_true(resultado == 10, "integracion calculadora+sumar = 10")`,
      javascript: `function assertTrue(cond, msg) {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

class Sumar {
  ejecutar(a, b) { return a + b; }
}

class Calculadora {
  constructor(op) { this.op = op; }
  ejecutar(a, b) { return this.op.ejecutar(a, b); }
}

const calc = new Calculadora(new Sumar());
const resultado = calc.ejecutar(3, 7);
assertTrue(resultado === 10, "integracion calculadora+sumar = 10");`,
      typescript: `function assertTrue(cond: boolean, msg: string): void {
  console.log(cond ? \`PASS: \${msg}\` : \`FAIL: \${msg}\`);
}

interface Operacion {
  ejecutar(a: number, b: number): number;
}

class Sumar implements Operacion {
  ejecutar(a: number, b: number): number { return a + b; }
}

class Calculadora {
  constructor(private op: Operacion) {}
  ejecutar(a: number, b: number): number {
    return this.op.ejecutar(a, b);
  }
}

const calc = new Calculadora(new Sumar());
const resultado = calc.ejecutar(3, 7);
assertTrue(resultado === 10, "integracion calculadora+sumar = 10");`,
      java: `static void assertTrue(boolean cond, String msg) {
    System.out.println(cond ? "PASS: " + msg : "FAIL: " + msg);
}

interface Operacion {
    int ejecutar(int a, int b);
}

class Sumar implements Operacion {
    public int ejecutar(int a, int b) { return a + b; }
}

class Calculadora {
    private Operacion op;
    Calculadora(Operacion op) { this.op = op; }
    int ejecutar(int a, int b) { return op.ejecutar(a, b); }
}

Calculadora calc = new Calculadora(new Sumar());
int resultado = calc.ejecutar(3, 7);
assertTrue(resultado == 10, "integracion calculadora+sumar = 10");`,
      csharp: `static void AssertTrue(bool cond, string msg) {
    Console.WriteLine(cond ? $"PASS: {msg}" : $"FAIL: {msg}");
}

interface IOperacion {
    int Ejecutar(int a, int b);
}

class Sumar : IOperacion {
    public int Ejecutar(int a, int b) => a + b;
}

class Calculadora {
    private IOperacion op;
    public Calculadora(IOperacion op) => this.op = op;
    public int Ejecutar(int a, int b) => op.Ejecutar(a, b);
}

var calc = new Calculadora(new Sumar());
var resultado = calc.Ejecutar(3, 7);
AssertTrue(resultado == 10, "integracion calculadora+sumar = 10");`,
    },
    output: 'PASS: integracion calculadora+sumar = 10',
  },
];
