export const estructuras = [
  // ============ 1. Lineales ============
  {
    category: 1,
    categoryTitle: 'Lineales',
    id: 'e1',
    title: 'Pila (Stack)',
    description: 'LIFO: ultimo en entrar, primero en salir.',
    code: {
      php: `<?php
$stack = [];
$top = -1;

$stack[++$top] = 10;
$stack[++$top] = 20;
$stack[++$top] = 30;
echo "push: 10,20,30\\n";

$popped = $stack[$top--];
echo "pop: $popped\\n";

echo "top: " . $stack[$top];`,
      python: `stack = []
top = -1

for v in [10, 20, 30]:
    stack.append(v)
    top += 1
print("push: 10,20,30")

popped = stack[top]
stack.pop()
top -= 1
print(f"pop: {popped}")

print(f"top: {stack[top]}")`,
      javascript: `const stack = [];
let top = -1;

for (const v of [10, 20, 30]) {
  stack[++top] = v;
}
console.log("push: 10,20,30");

const popped = stack[top--];
console.log("pop: " + popped);

console.log("top: " + stack[top]);`,
      typescript: `const stack: number[] = [];
let top: number = -1;

for (const v of [10, 20, 30]) {
  stack[++top] = v;
}
console.log("push: 10,20,30");

const popped: number = stack[top--];
console.log("pop: " + popped);

console.log("top: " + stack[top]);`,
      java: `int[] stack = new int[100];
int top = -1;

stack[++top] = 10;
stack[++top] = 20;
stack[++top] = 30;
System.out.println("push: 10,20,30");

int popped = stack[top--];
System.out.println("pop: " + popped);

System.out.println("top: " + stack[top]);`,
      csharp: `int[] stack = new int[100];
int top = -1;

stack[++top] = 10;
stack[++top] = 20;
stack[++top] = 30;
Console.WriteLine("push: 10,20,30");

int popped = stack[top--];
Console.WriteLine("pop: " + popped);

Console.WriteLine("top: " + stack[top]);`,
    },
    output: 'push: 10,20,30\npop: 30\ntop: 20',
  },
  {
    category: 1,
    categoryTitle: 'Lineales',
    id: 'e2',
    title: 'Cola (Queue)',
    description: 'FIFO: primero en entrar, primero en salir.',
    code: {
      php: `<?php
$queue = [];
$front = 0;
$back = -1;

$queue[++$back] = 10;
$queue[++$back] = 20;
$queue[++$back] = 30;
echo "enqueue: 10,20,30\\n";

$dequeued = $queue[$front++];
echo "dequeue: $dequeued\\n";

echo "front: " . $queue[$front];`,
      python: `queue = []
front = 0

for v in [10, 20, 30]:
    queue.append(v)
print("enqueue: 10,20,30")

dequeued = queue[front]
front += 1
print(f"dequeue: {dequeued}")

print(f"front: {queue[front]}")`,
      javascript: `const queue = [];
let front = 0;
let back = -1;

for (const v of [10, 20, 30]) {
  queue[++back] = v;
}
console.log("enqueue: 10,20,30");

const dequeued = queue[front++];
console.log("dequeue: " + dequeued);

console.log("front: " + queue[front]);`,
      typescript: `const queue: number[] = [];
let front: number = 0;
let back: number = -1;

for (const v of [10, 20, 30]) {
  queue[++back] = v;
}
console.log("enqueue: 10,20,30");

const dequeued: number = queue[front++];
console.log("dequeue: " + dequeued);

console.log("front: " + queue[front]);`,
      java: `int[] queue = new int[100];
int front = 0;
int back = -1;

queue[++back] = 10;
queue[++back] = 20;
queue[++back] = 30;
System.out.println("enqueue: 10,20,30");

int dequeued = queue[front++];
System.out.println("dequeue: " + dequeued);

System.out.println("front: " + queue[front]);`,
      csharp: `int[] queue = new int[100];
int front = 0;
int back = -1;

queue[++back] = 10;
queue[++back] = 20;
queue[++back] = 30;
Console.WriteLine("enqueue: 10,20,30");

int dequeued = queue[front++];
Console.WriteLine("dequeue: " + dequeued);

Console.WriteLine("front: " + queue[front]);`,
    },
    output: 'enqueue: 10,20,30\ndequeue: 10\nfront: 20',
  },
  {
    category: 1,
    categoryTitle: 'Lineales',
    id: 'e3',
    title: 'Lista enlazada',
    description: 'Nodos con puntero al siguiente.',
    code: {
      php: `<?php
$nodes = [];
$next = [];
$head = 0;

$nodes[0] = 10; $next[0] = 1;
$nodes[1] = 20; $next[1] = 2;
$nodes[2] = 30; $next[2] = -1;

$current = $head;
$result = [];
while ($current !== -1) {
    $result[] = $nodes[$current];
    $current = $next[$current];
}
echo implode(" -> ", $result);`,
      python: `nodes = {}
nxt = {}

nodes[0] = 10; nxt[0] = 1
nodes[1] = 20; nxt[1] = 2
nodes[2] = 30; nxt[2] = -1
head = 0

result = []
current = head
while current != -1:
    result.append(str(nodes[current]))
    current = nxt[current]
print(" -> ".join(result))`,
      javascript: `const nodes = {};
const next = {};

nodes[0] = 10; next[0] = 1;
nodes[1] = 20; next[1] = 2;
nodes[2] = 30; next[2] = -1;
let head = 0;

const result = [];
let current = head;
while (current !== -1) {
  result.push(nodes[current]);
  current = next[current];
}
console.log(result.join(" -> "));`,
      typescript: `const nodes: Record<number, number> = {};
const next: Record<number, number> = {};

nodes[0] = 10; next[0] = 1;
nodes[1] = 20; next[1] = 2;
nodes[2] = 30; next[2] = -1;
let head: number = 0;

const result: number[] = [];
let current: number = head;
while (current !== -1) {
  result.push(nodes[current]);
  current = next[current];
}
console.log(result.join(" -> "));`,
      java: `int[] nodes = {10, 20, 30};
int[] next = {1, 2, -1};
int head = 0;

StringBuilder sb = new StringBuilder();
int current = head;
while (current != -1) {
    if (sb.length() > 0) sb.append(" -> ");
    sb.append(nodes[current]);
    current = next[current];
}
System.out.println(sb);`,
      csharp: `int[] nodes = {10, 20, 30};
int[] next = {1, 2, -1};
int head = 0;

var parts = new List<string>();
int current = head;
while (current != -1) {
    parts.Add(nodes[current].ToString());
    current = next[current];
}
Console.WriteLine(string.Join(" -> ", parts));`,
    },
    output: '10 -> 20 -> 30',
  },
  {
    category: 1,
    categoryTitle: 'Lineales',
    id: 'e4',
    title: 'Deque (doble cola)',
    description: 'Insertar y remover por ambos extremos.',
    code: {
      php: `<?php
$deque = array_fill(0, 100, 0);
$front = 50;
$back = 49;

$deque[--$front] = 1;
$deque[++$back] = 2;
$deque[--$front] = 0;

$result = [];
for ($i = $front; $i <= $back; $i++) {
    $result[] = $deque[$i];
}
echo implode(" ", $result);`,
      python: `deque = [0] * 100
front = 50
back = 49

front -= 1
deque[front] = 1

back += 1
deque[back] = 2

front -= 1
deque[front] = 0

result = []
for i in range(front, back + 1):
    result.append(str(deque[i]))
print(" ".join(result))`,
      javascript: `const deque = new Array(100).fill(0);
let front = 50;
let back = 49;

deque[--front] = 1;
deque[++back] = 2;
deque[--front] = 0;

const result = [];
for (let i = front; i <= back; i++) {
  result.push(deque[i]);
}
console.log(result.join(" "));`,
      typescript: `const deque: number[] = new Array(100).fill(0);
let front: number = 50;
let back: number = 49;

deque[--front] = 1;
deque[++back] = 2;
deque[--front] = 0;

const result: number[] = [];
for (let i = front; i <= back; i++) {
  result.push(deque[i]);
}
console.log(result.join(" "));`,
      java: `int[] deque = new int[100];
int front = 50;
int back = 49;

deque[--front] = 1;
deque[++back] = 2;
deque[--front] = 0;

StringBuilder sb = new StringBuilder();
for (int i = front; i <= back; i++) {
    if (i > front) sb.append(" ");
    sb.append(deque[i]);
}
System.out.println(sb);`,
      csharp: `int[] deque = new int[100];
int front = 50;
int back = 49;

deque[--front] = 1;
deque[++back] = 2;
deque[--front] = 0;

var parts = new List<string>();
for (int i = front; i <= back; i++) {
    parts.Add(deque[i].ToString());
}
Console.WriteLine(string.Join(" ", parts));`,
    },
    output: '0 1 2',
  },
  {
    category: 1,
    categoryTitle: 'Lineales',
    id: 'e5',
    title: 'Lista circular',
    description: 'El ultimo nodo apunta al primero.',
    code: {
      php: `<?php
$nodes = [1, 2, 3];
$next = [1, 2, 0];
$head = 0;

$result = [];
$current = $head;
do {
    $result[] = $nodes[$current];
    $current = $next[$current];
} while ($current !== $head);
$result[] = $nodes[$head];
echo implode(" -> ", $result);`,
      python: `nodes = [1, 2, 3]
nxt = [1, 2, 0]
head = 0

result = []
current = head
while True:
    result.append(str(nodes[current]))
    current = nxt[current]
    if current == head:
        break
result.append(str(nodes[head]))
print(" -> ".join(result))`,
      javascript: `const nodes = [1, 2, 3];
const next = [1, 2, 0];
const head = 0;

const result = [];
let current = head;
do {
  result.push(nodes[current]);
  current = next[current];
} while (current !== head);
result.push(nodes[head]);
console.log(result.join(" -> "));`,
      typescript: `const nodes: number[] = [1, 2, 3];
const next: number[] = [1, 2, 0];
const head: number = 0;

const result: string[] = [];
let current: number = head;
do {
  result.push(String(nodes[current]));
  current = next[current];
} while (current !== head);
result.push(String(nodes[head]));
console.log(result.join(" -> "));`,
      java: `int[] nodes = {1, 2, 3};
int[] next = {1, 2, 0};
int head = 0;

StringBuilder sb = new StringBuilder();
int current = head;
do {
    if (sb.length() > 0) sb.append(" -> ");
    sb.append(nodes[current]);
    current = next[current];
} while (current != head);
sb.append(" -> ").append(nodes[head]);
System.out.println(sb);`,
      csharp: `int[] nodes = {1, 2, 3};
int[] next = {1, 2, 0};
int head = 0;

var parts = new List<string>();
int current = head;
do {
    parts.Add(nodes[current].ToString());
    current = next[current];
} while (current != head);
parts.Add(nodes[head].ToString());
Console.WriteLine(string.Join(" -> ", parts));`,
    },
    output: '1 -> 2 -> 3 -> 1',
  },

  // ============ 2. Hash y conjuntos ============
  {
    category: 2,
    categoryTitle: 'Hash y conjuntos',
    id: 'e6',
    title: 'Hash Table',
    description: 'Tabla hash con array de buckets.',
    code: {
      php: `<?php
$size = 10;
$keys = array_fill(0, $size, []);
$vals = array_fill(0, $size, []);

function h($key, $s) { return ord($key[0]) % $s; }

function put(&$keys, &$vals, $k, $v, $s) {
    $i = h($k, $s);
    $keys[$i][] = $k;
    $vals[$i][] = $v;
}

function get($keys, $vals, $k, $s) {
    $i = h($k, $s);
    foreach ($keys[$i] as $j => $stored) {
        if ($stored === $k) return $vals[$i][$j];
    }
    return null;
}

put($keys, $vals, "a", 1, $size);
put($keys, $vals, "b", 2, $size);
echo "get(a): " . get($keys, $vals, "a", $size) . "\\n";
echo "get(b): " . get($keys, $vals, "b", $size);`,
      python: `size = 10
buckets = [[] for _ in range(size)]

def h(key):
    return ord(key[0]) % size

def put(k, v):
    idx = h(k)
    for pair in buckets[idx]:
        if pair[0] == k:
            pair[1] = v
            return
    buckets[idx].append([k, v])

def get(k):
    idx = h(k)
    for pair in buckets[idx]:
        if pair[0] == k:
            return pair[1]
    return None

put("a", 1)
put("b", 2)
print(f"get(a): {get('a')}")
print(f"get(b): {get('b')}")`,
      javascript: `const size = 10;
const buckets = Array.from({length: size}, () => []);

function h(key) {
  return key.charCodeAt(0) % size;
}

function put(k, v) {
  const idx = h(k);
  for (const pair of buckets[idx]) {
    if (pair[0] === k) { pair[1] = v; return; }
  }
  buckets[idx].push([k, v]);
}

function get(k) {
  const idx = h(k);
  for (const pair of buckets[idx]) {
    if (pair[0] === k) return pair[1];
  }
  return null;
}

put("a", 1);
put("b", 2);
console.log("get(a): " + get("a"));
console.log("get(b): " + get("b"));`,
      typescript: `const size: number = 10;
const buckets: [string, number][][] =
  Array.from({length: size}, () => []);

function h(key: string): number {
  return key.charCodeAt(0) % size;
}

function put(k: string, v: number): void {
  const idx = h(k);
  for (const pair of buckets[idx]) {
    if (pair[0] === k) { pair[1] = v; return; }
  }
  buckets[idx].push([k, v]);
}

function get(k: string): number | null {
  const idx = h(k);
  for (const pair of buckets[idx]) {
    if (pair[0] === k) return pair[1];
  }
  return null;
}

put("a", 1);
put("b", 2);
console.log("get(a): " + get("a"));
console.log("get(b): " + get("b"));`,
      java: `int size = 10;
String[][] keys = new String[size][10];
int[][] vals = new int[size][10];
int[] counts = new int[size];

int h(String k) { return k.charAt(0) % size; }

void put(String k, int v) {
    int i = h(k);
    keys[i][counts[i]] = k;
    vals[i][counts[i]] = v;
    counts[i]++;
}

int get(String k) {
    int i = h(k);
    for (int j = 0; j < counts[i]; j++) {
        if (keys[i][j].equals(k)) return vals[i][j];
    }
    return -1;
}

put("a", 1);
put("b", 2);
System.out.println("get(a): " + get("a"));
System.out.println("get(b): " + get("b"));`,
      csharp: `int size = 10;
string[][] keys = new string[size][];
int[][] vals = new int[size][];
int[] counts = new int[size];
for (int i = 0; i < size; i++) {
    keys[i] = new string[10];
    vals[i] = new int[10];
}

int H(string k) => k[0] % size;

void Put(string k, int v) {
    int i = H(k);
    keys[i][counts[i]] = k;
    vals[i][counts[i]] = v;
    counts[i]++;
}

int Get(string k) {
    int i = H(k);
    for (int j = 0; j < counts[i]; j++)
        if (keys[i][j] == k) return vals[i][j];
    return -1;
}

Put("a", 1);
Put("b", 2);
Console.WriteLine("get(a): " + Get("a"));
Console.WriteLine("get(b): " + Get("b"));`,
    },
    output: 'get(a): 1\nget(b): 2',
  },
  {
    category: 2,
    categoryTitle: 'Hash y conjuntos',
    id: 'e7',
    title: 'Set (conjunto)',
    description: 'Coleccion sin duplicados.',
    code: {
      php: `<?php
$data = [];
$count = 0;

function add(&$data, &$count, $val) {
    for ($i = 0; $i < $count; $i++) {
        if ($data[$i] === $val) return;
    }
    $data[$count++] = $val;
}

add($data, $count, 1);
add($data, $count, 2);
add($data, $count, 2);
add($data, $count, 3);

$items = [];
for ($i = 0; $i < $count; $i++) $items[] = $data[$i];
echo "elementos: " . implode(",", $items) . "\\n";

$found = false;
for ($i = 0; $i < $count; $i++) {
    if ($data[$i] === 2) { $found = true; break; }
}
echo "contiene 2: " . ($found ? "true" : "false");`,
      python: `data = []

def add(val):
    for item in data:
        if item == val:
            return
    data.append(val)

add(1)
add(2)
add(2)
add(3)

print("elementos: " + ",".join(str(x) for x in data))

found = False
for item in data:
    if item == 2:
        found = True
        break
print(f"contiene 2: {'true' if found else 'false'}")`,
      javascript: `const data = [];

function add(val) {
  for (const item of data) {
    if (item === val) return;
  }
  data.push(val);
}

add(1);
add(2);
add(2);
add(3);

console.log("elementos: " + data.join(","));

let found = false;
for (const item of data) {
  if (item === 2) { found = true; break; }
}
console.log("contiene 2: " + found);`,
      typescript: `const data: number[] = [];

function add(val: number): void {
  for (const item of data) {
    if (item === val) return;
  }
  data.push(val);
}

add(1);
add(2);
add(2);
add(3);

console.log("elementos: " + data.join(","));

let found: boolean = false;
for (const item of data) {
  if (item === 2) { found = true; break; }
}
console.log("contiene 2: " + found);`,
      java: `int[] data = new int[100];
int count = 0;

void add(int val) {
    for (int i = 0; i < count; i++) {
        if (data[i] == val) return;
    }
    data[count++] = val;
}

add(1);
add(2);
add(2);
add(3);

StringBuilder sb = new StringBuilder();
for (int i = 0; i < count; i++) {
    if (i > 0) sb.append(",");
    sb.append(data[i]);
}
System.out.println("elementos: " + sb);

boolean found = false;
for (int i = 0; i < count; i++) {
    if (data[i] == 2) { found = true; break; }
}
System.out.println("contiene 2: " + found);`,
      csharp: `int[] data = new int[100];
int count = 0;

void Add(int val) {
    for (int i = 0; i < count; i++) {
        if (data[i] == val) return;
    }
    data[count++] = val;
}

Add(1);
Add(2);
Add(2);
Add(3);

var parts = new List<string>();
for (int i = 0; i < count; i++)
    parts.Add(data[i].ToString());
Console.WriteLine("elementos: " + string.Join(",", parts));

bool found = false;
for (int i = 0; i < count; i++) {
    if (data[i] == 2) { found = true; break; }
}
Console.WriteLine("contiene 2: " + found);`,
    },
    output: 'elementos: 1,2,3\ncontiene 2: true',
  },

  // ============ 3. Arboles ============
  {
    category: 3,
    categoryTitle: 'Arboles',
    id: 'e8',
    title: 'Arbol binario',
    description: 'Nodo con hijo izquierdo y derecho. Recorrido inorder.',
    code: {
      php: `<?php
$val = [10, 5, 15];
$left = [1, -1, -1];
$right = [2, -1, -1];
$root = 0;

function inorder($node, $val, $left, $right) {
    if ($node === -1) return "";
    $l = inorder($left[$node], $val, $left, $right);
    $r = inorder($right[$node], $val, $left, $right);
    $res = trim("$l {$val[$node]} $r");
    return $res;
}

echo inorder($root, $val, $left, $right);`,
      python: `val = [10, 5, 15]
left = [1, -1, -1]
right = [2, -1, -1]
root = 0

def inorder(node):
    if node == -1:
        return []
    return inorder(left[node]) + [val[node]] + inorder(right[node])

print(" ".join(str(x) for x in inorder(root)))`,
      javascript: `const val = [10, 5, 15];
const left = [1, -1, -1];
const right = [2, -1, -1];
const root = 0;

function inorder(node) {
  if (node === -1) return [];
  return [
    ...inorder(left[node]),
    val[node],
    ...inorder(right[node])
  ];
}

console.log(inorder(root).join(" "));`,
      typescript: `const val: number[] = [10, 5, 15];
const left: number[] = [1, -1, -1];
const right: number[] = [2, -1, -1];
const root: number = 0;

function inorder(node: number): number[] {
  if (node === -1) return [];
  return [
    ...inorder(left[node]),
    val[node],
    ...inorder(right[node])
  ];
}

console.log(inorder(root).join(" "));`,
      java: `int[] val = {10, 5, 15};
int[] left = {1, -1, -1};
int[] right = {2, -1, -1};
int root = 0;

String inorder(int node) {
    if (node == -1) return "";
    String l = inorder(left[node]);
    String r = inorder(right[node]);
    return (l + " " + val[node] + " " + r).trim();
}

System.out.println(inorder(root));`,
      csharp: `int[] val = {10, 5, 15};
int[] left = {1, -1, -1};
int[] right = {2, -1, -1};
int root = 0;

string Inorder(int node) {
    if (node == -1) return "";
    string l = Inorder(left[node]);
    string r = Inorder(right[node]);
    return (l + " " + val[node] + " " + r).Trim();
}

Console.WriteLine(Inorder(root));`,
    },
    output: '5 10 15',
  },
  {
    category: 3,
    categoryTitle: 'Arboles',
    id: 'e9',
    title: 'BST - insertar y buscar',
    description: 'Arbol binario de busqueda con insercion y busqueda.',
    code: {
      php: `<?php
$val = array_fill(0, 100, 0);
$left = array_fill(0, 100, -1);
$right = array_fill(0, 100, -1);
$count = 0;

function insert(&$val, &$left, &$right, &$count, $v, $node = 0) {
    if ($count === 0) { $val[$count++] = $v; return; }
    if ($v < $val[$node]) {
        if ($left[$node] === -1) { $left[$node] = $count; $val[$count++] = $v; }
        else insert($val, $left, $right, $count, $v, $left[$node]);
    } else {
        if ($right[$node] === -1) { $right[$node] = $count; $val[$count++] = $v; }
        else insert($val, $left, $right, $count, $v, $right[$node]);
    }
}

function search($val, $left, $right, $v, $node = 0) {
    if ($node === -1) return false;
    if ($val[$node] === $v) return true;
    return $v < $val[$node]
        ? search($val, $left, $right, $v, $left[$node])
        : search($val, $left, $right, $v, $right[$node]);
}

foreach ([10, 5, 15, 3, 7] as $v) insert($val, $left, $right, $count, $v);
echo "buscar 7: " . (search($val, $left, $right, 7) ? "encontrado" : "no encontrado") . "\\n";
echo "buscar 99: " . (search($val, $left, $right, 99) ? "encontrado" : "no encontrado");`,
      python: `val = [0] * 100
left = [-1] * 100
right = [-1] * 100
count = 0

def insert(v, node=0):
    global count
    if count == 0:
        val[count] = v; count += 1; return
    if v < val[node]:
        if left[node] == -1:
            left[node] = count; val[count] = v; count += 1
        else:
            insert(v, left[node])
    else:
        if right[node] == -1:
            right[node] = count; val[count] = v; count += 1
        else:
            insert(v, right[node])

def search(v, node=0):
    if node == -1:
        return False
    if val[node] == v:
        return True
    return search(v, left[node]) if v < val[node] else search(v, right[node])

for v in [10, 5, 15, 3, 7]:
    insert(v)
print("buscar 7: " + ("encontrado" if search(7) else "no encontrado"))
print("buscar 99: " + ("encontrado" if search(99) else "no encontrado"))`,
      javascript: `const val = new Array(100).fill(0);
const left = new Array(100).fill(-1);
const right = new Array(100).fill(-1);
let count = 0;

function insert(v, node = 0) {
  if (count === 0) { val[count++] = v; return; }
  if (v < val[node]) {
    if (left[node] === -1) { left[node] = count; val[count++] = v; }
    else insert(v, left[node]);
  } else {
    if (right[node] === -1) { right[node] = count; val[count++] = v; }
    else insert(v, right[node]);
  }
}

function search(v, node = 0) {
  if (node === -1) return false;
  if (val[node] === v) return true;
  return v < val[node] ? search(v, left[node]) : search(v, right[node]);
}

for (const v of [10, 5, 15, 3, 7]) insert(v);
console.log("buscar 7: " + (search(7) ? "encontrado" : "no encontrado"));
console.log("buscar 99: " + (search(99) ? "encontrado" : "no encontrado"));`,
      typescript: `const val: number[] = new Array(100).fill(0);
const left: number[] = new Array(100).fill(-1);
const right: number[] = new Array(100).fill(-1);
let count: number = 0;

function insert(v: number, node: number = 0): void {
  if (count === 0) { val[count++] = v; return; }
  if (v < val[node]) {
    if (left[node] === -1) { left[node] = count; val[count++] = v; }
    else insert(v, left[node]);
  } else {
    if (right[node] === -1) { right[node] = count; val[count++] = v; }
    else insert(v, right[node]);
  }
}

function search(v: number, node: number = 0): boolean {
  if (node === -1) return false;
  if (val[node] === v) return true;
  return v < val[node] ? search(v, left[node]) : search(v, right[node]);
}

for (const v of [10, 5, 15, 3, 7]) insert(v);
console.log("buscar 7: " + (search(7) ? "encontrado" : "no encontrado"));
console.log("buscar 99: " + (search(99) ? "encontrado" : "no encontrado"));`,
      java: `int[] val = new int[100];
int[] left = new int[100];
int[] right = new int[100];
int count = 0;
Arrays.fill(left, -1);
Arrays.fill(right, -1);

void insert(int v, int node) {
    if (count == 0) { val[count++] = v; return; }
    if (v < val[node]) {
        if (left[node] == -1) { left[node] = count; val[count++] = v; }
        else insert(v, left[node]);
    } else {
        if (right[node] == -1) { right[node] = count; val[count++] = v; }
        else insert(v, right[node]);
    }
}

boolean search(int v, int node) {
    if (node == -1) return false;
    if (val[node] == v) return true;
    return v < val[node] ? search(v, left[node]) : search(v, right[node]);
}

for (int v : new int[]{10, 5, 15, 3, 7}) insert(v, 0);
System.out.println("buscar 7: " + (search(7, 0) ? "encontrado" : "no encontrado"));
System.out.println("buscar 99: " + (search(99, 0) ? "encontrado" : "no encontrado"));`,
      csharp: `int[] val = new int[100];
int[] left = new int[100];
int[] right = new int[100];
int count = 0;
Array.Fill(left, -1);
Array.Fill(right, -1);

void Insert(int v, int node = 0) {
    if (count == 0) { val[count++] = v; return; }
    if (v < val[node]) {
        if (left[node] == -1) { left[node] = count; val[count++] = v; }
        else Insert(v, left[node]);
    } else {
        if (right[node] == -1) { right[node] = count; val[count++] = v; }
        else Insert(v, right[node]);
    }
}

bool Search(int v, int node = 0) {
    if (node == -1) return false;
    if (val[node] == v) return true;
    return v < val[node] ? Search(v, left[node]) : Search(v, right[node]);
}

foreach (int v in new[]{10, 5, 15, 3, 7}) Insert(v);
Console.WriteLine("buscar 7: " + (Search(7) ? "encontrado" : "no encontrado"));
Console.WriteLine("buscar 99: " + (Search(99) ? "encontrado" : "no encontrado"));`,
    },
    output: 'buscar 7: encontrado\nbuscar 99: no encontrado',
  },
  {
    category: 3,
    categoryTitle: 'Arboles',
    id: 'e10',
    title: 'Recorridos',
    description: 'Preorder, inorder y postorder de un arbol binario.',
    code: {
      php: `<?php
$val = [1, 2, 3];
$left = [1, -1, -1];
$right = [2, -1, -1];

function pre($n, $v, $l, $r) {
    if ($n === -1) return [];
    return array_merge([$v[$n]], pre($l[$n], $v, $l, $r), pre($r[$n], $v, $l, $r));
}
function ino($n, $v, $l, $r) {
    if ($n === -1) return [];
    return array_merge(ino($l[$n], $v, $l, $r), [$v[$n]], ino($r[$n], $v, $l, $r));
}
function post($n, $v, $l, $r) {
    if ($n === -1) return [];
    return array_merge(post($l[$n], $v, $l, $r), post($r[$n], $v, $l, $r), [$v[$n]]);
}

echo "pre: " . implode(" ", pre(0, $val, $left, $right)) . "\\n";
echo "in: " . implode(" ", ino(0, $val, $left, $right)) . "\\n";
echo "post: " . implode(" ", post(0, $val, $left, $right));`,
      python: `val = [1, 2, 3]
left = [1, -1, -1]
right = [2, -1, -1]

def pre(n):
    if n == -1: return []
    return [val[n]] + pre(left[n]) + pre(right[n])

def ino(n):
    if n == -1: return []
    return ino(left[n]) + [val[n]] + ino(right[n])

def post(n):
    if n == -1: return []
    return post(left[n]) + post(right[n]) + [val[n]]

print("pre: " + " ".join(str(x) for x in pre(0)))
print("in: " + " ".join(str(x) for x in ino(0)))
print("post: " + " ".join(str(x) for x in post(0)))`,
      javascript: `const val = [1, 2, 3];
const left = [1, -1, -1];
const right = [2, -1, -1];

function pre(n) {
  if (n === -1) return [];
  return [val[n], ...pre(left[n]), ...pre(right[n])];
}
function ino(n) {
  if (n === -1) return [];
  return [...ino(left[n]), val[n], ...ino(right[n])];
}
function post(n) {
  if (n === -1) return [];
  return [...post(left[n]), ...post(right[n]), val[n]];
}

console.log("pre: " + pre(0).join(" "));
console.log("in: " + ino(0).join(" "));
console.log("post: " + post(0).join(" "));`,
      typescript: `const val: number[] = [1, 2, 3];
const left: number[] = [1, -1, -1];
const right: number[] = [2, -1, -1];

function pre(n: number): number[] {
  if (n === -1) return [];
  return [val[n], ...pre(left[n]), ...pre(right[n])];
}
function ino(n: number): number[] {
  if (n === -1) return [];
  return [...ino(left[n]), val[n], ...ino(right[n])];
}
function post(n: number): number[] {
  if (n === -1) return [];
  return [...post(left[n]), ...post(right[n]), val[n]];
}

console.log("pre: " + pre(0).join(" "));
console.log("in: " + ino(0).join(" "));
console.log("post: " + post(0).join(" "));`,
      java: `int[] val = {1, 2, 3};
int[] left = {1, -1, -1};
int[] right = {2, -1, -1};

String pre(int n) {
    if (n == -1) return "";
    return (val[n] + " " + pre(left[n]) + " " + pre(right[n])).replaceAll("\\\\s+", " ").trim();
}
String ino(int n) {
    if (n == -1) return "";
    return (ino(left[n]) + " " + val[n] + " " + ino(right[n])).replaceAll("\\\\s+", " ").trim();
}
String post(int n) {
    if (n == -1) return "";
    return (post(left[n]) + " " + post(right[n]) + " " + val[n]).replaceAll("\\\\s+", " ").trim();
}

System.out.println("pre: " + pre(0));
System.out.println("in: " + ino(0));
System.out.println("post: " + post(0));`,
      csharp: `int[] val = {1, 2, 3};
int[] left = {1, -1, -1};
int[] right = {2, -1, -1};

string Pre(int n) {
    if (n == -1) return "";
    return $"{val[n]} {Pre(left[n])} {Pre(right[n])}".Replace("  "," ").Trim();
}
string Ino(int n) {
    if (n == -1) return "";
    return $"{Ino(left[n])} {val[n]} {Ino(right[n])}".Replace("  "," ").Trim();
}
string Post(int n) {
    if (n == -1) return "";
    return $"{Post(left[n])} {Post(right[n])} {val[n]}".Replace("  "," ").Trim();
}

Console.WriteLine("pre: " + Pre(0));
Console.WriteLine("in: " + Ino(0));
Console.WriteLine("post: " + Post(0));`,
    },
    output: 'pre: 1 2 3\nin: 2 1 3\npost: 2 3 1',
  },

  // ============ 4. Grafos ============
  {
    category: 4,
    categoryTitle: 'Grafos',
    id: 'e11',
    title: 'Grafo con lista de adyacencia',
    description: 'Representacion de grafo con listas de vecinos.',
    code: {
      php: `<?php
$graph = [];

function addEdge(&$g, $from, $to) {
    if (!isset($g[$from])) $g[$from] = [];
    $g[$from][] = $to;
}

addEdge($graph, "A", "B");
addEdge($graph, "A", "C");
addEdge($graph, "B", "C");

echo "vecinos de A: " . implode(" ", $graph["A"]);`,
      python: `graph = {}

def add_edge(frm, to):
    if frm not in graph:
        graph[frm] = []
    graph[frm].append(to)

add_edge("A", "B")
add_edge("A", "C")
add_edge("B", "C")

print("vecinos de A: " + " ".join(graph["A"]))`,
      javascript: `const graph = {};

function addEdge(from, to) {
  if (!graph[from]) graph[from] = [];
  graph[from].push(to);
}

addEdge("A", "B");
addEdge("A", "C");
addEdge("B", "C");

console.log("vecinos de A: " + graph["A"].join(" "));`,
      typescript: `const graph: Record<string, string[]> = {};

function addEdge(from: string, to: string): void {
  if (!graph[from]) graph[from] = [];
  graph[from].push(to);
}

addEdge("A", "B");
addEdge("A", "C");
addEdge("B", "C");

console.log("vecinos de A: " + graph["A"].join(" "));`,
      java: `String[][] adj = new String[10][];
int[] adjCount = new int[10];
String[] nodeNames = new String[10];
int nodeCount = 0;

int getNode(String name) {
    for (int i = 0; i < nodeCount; i++)
        if (nodeNames[i].equals(name)) return i;
    nodeNames[nodeCount] = name;
    adj[nodeCount] = new String[10];
    return nodeCount++;
}

void addEdge(String from, String to) {
    int i = getNode(from);
    adj[i][adjCount[i]++] = to;
}

addEdge("A", "B");
addEdge("A", "C");
addEdge("B", "C");

int a = getNode("A");
StringBuilder sb = new StringBuilder();
for (int i = 0; i < adjCount[a]; i++) {
    if (i > 0) sb.append(" ");
    sb.append(adj[a][i]);
}
System.out.println("vecinos de A: " + sb);`,
      csharp: `var adj = new string[10][];
int[] adjCount = new int[10];
string[] nodeNames = new string[10];
int nodeCount = 0;

int GetNode(string name) {
    for (int i = 0; i < nodeCount; i++)
        if (nodeNames[i] == name) return i;
    nodeNames[nodeCount] = name;
    adj[nodeCount] = new string[10];
    return nodeCount++;
}

void AddEdge(string from, string to) {
    int i = GetNode(from);
    adj[i][adjCount[i]++] = to;
}

AddEdge("A", "B");
AddEdge("A", "C");
AddEdge("B", "C");

int a = GetNode("A");
var parts = new List<string>();
for (int i = 0; i < adjCount[a]; i++)
    parts.Add(adj[a][i]);
Console.WriteLine("vecinos de A: " + string.Join(" ", parts));`,
    },
    output: 'vecinos de A: B C',
  },
  {
    category: 4,
    categoryTitle: 'Grafos',
    id: 'e12',
    title: 'BFS (recorrido en anchura)',
    description: 'Recorrido por niveles usando cola.',
    code: {
      php: `<?php
$graph = ["A" => ["B","C"], "B" => ["D"], "C" => ["D"], "D" => []];

$queue = [];
$front = 0;
$visited = [];
$result = [];

$queue[] = "A";
$visited["A"] = true;

while ($front < count($queue)) {
    $node = $queue[$front++];
    $result[] = $node;
    foreach ($graph[$node] as $neighbor) {
        if (!isset($visited[$neighbor])) {
            $visited[$neighbor] = true;
            $queue[] = $neighbor;
        }
    }
}
echo "BFS: " . implode(" ", $result);`,
      python: `graph = {"A": ["B","C"], "B": ["D"], "C": ["D"], "D": []}

queue = ["A"]
front = 0
visited = {"A": True}
result = []

while front < len(queue):
    node = queue[front]
    front += 1
    result.append(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            visited[neighbor] = True
            queue.append(neighbor)

print("BFS: " + " ".join(result))`,
      javascript: `const graph = {A: ["B","C"], B: ["D"], C: ["D"], D: []};

const queue = ["A"];
let front = 0;
const visited = {A: true};
const result = [];

while (front < queue.length) {
  const node = queue[front++];
  result.push(node);
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      queue.push(neighbor);
    }
  }
}
console.log("BFS: " + result.join(" "));`,
      typescript: `const graph: Record<string, string[]> =
  {A: ["B","C"], B: ["D"], C: ["D"], D: []};

const queue: string[] = ["A"];
let front: number = 0;
const visited: Record<string, boolean> = {A: true};
const result: string[] = [];

while (front < queue.length) {
  const node: string = queue[front++];
  result.push(node);
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      queue.push(neighbor);
    }
  }
}
console.log("BFS: " + result.join(" "));`,
      java: `String[][] graph = {{"B","C"}, {"D"}, {"D"}, {}};
String[] names = {"A","B","C","D"};

String[] queue = new String[100];
int front = 0, back = 0;
boolean[] visited = new boolean[4];

queue[back++] = "A";
visited[0] = true;
StringBuilder sb = new StringBuilder();

while (front < back) {
    String node = queue[front++];
    if (sb.length() > 0) sb.append(" ");
    sb.append(node);
    int idx = -1;
    for (int i = 0; i < names.length; i++)
        if (names[i].equals(node)) { idx = i; break; }
    for (String neighbor : graph[idx]) {
        int ni = -1;
        for (int i = 0; i < names.length; i++)
            if (names[i].equals(neighbor)) { ni = i; break; }
        if (!visited[ni]) {
            visited[ni] = true;
            queue[back++] = neighbor;
        }
    }
}
System.out.println("BFS: " + sb);`,
      csharp: `string[][] graph = {
    new[]{"B","C"}, new[]{"D"}, new[]{"D"}, new string[]{}
};
string[] names = {"A","B","C","D"};

string[] queue = new string[100];
int front = 0, back = 0;
bool[] visited = new bool[4];

queue[back++] = "A";
visited[0] = true;
var parts = new List<string>();

while (front < back) {
    string node = queue[front++];
    parts.Add(node);
    int idx = Array.IndexOf(names, node);
    foreach (string neighbor in graph[idx]) {
        int ni = Array.IndexOf(names, neighbor);
        if (!visited[ni]) {
            visited[ni] = true;
            queue[back++] = neighbor;
        }
    }
}
Console.WriteLine("BFS: " + string.Join(" ", parts));`,
    },
    output: 'BFS: A B C D',
  },
];
