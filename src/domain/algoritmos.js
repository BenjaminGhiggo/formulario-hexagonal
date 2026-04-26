export const algoritmos = [
  // ==================== CATEGORY 1: Ordenamiento ====================
  {
    category: "ordenamiento",
    categoryTitle: "Ordenamiento",
    id: "a1",
    title: "Bubble Sort",
    description: "Ordena [5,2,8,1,4] intercambiando elementos adyacentes. Muestra resultado.",
    code: {
      php: `<?php
$arr = [5, 2, 8, 1, 4];
$n = count($arr);
for ($i = 0; $i < $n - 1; $i++) {
    for ($j = 0; $j < $n - $i - 1; $j++) {
        if ($arr[$j] > $arr[$j + 1]) {
            $temp = $arr[$j];
            $arr[$j] = $arr[$j + 1];
            $arr[$j + 1] = $temp;
        }
    }
}
echo implode(" ", $arr);`,
      python: `arr = [5, 2, 8, 1, 4]
n = len(arr)
for i in range(n - 1):
    for j in range(n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
print(" ".join(str(x) for x in arr))`,
      javascript: `let arr = [5, 2, 8, 1, 4];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr.join(" "));`,
      typescript: `let arr: number[] = [5, 2, 8, 1, 4];
let n: number = arr.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp: number = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr.join(" "));`,
      java: `public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 4};
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (i > 0) sb.append(" ");
            sb.append(arr[i]);
        }
        System.out.println(sb.toString());
    }
}`,
      csharp: `using System;
class BubbleSort {
    static void Main() {
        int[] arr = {5, 2, 8, 1, 4};
        int n = arr.Length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        Console.WriteLine(string.Join(" ", arr));
    }
}`
    },
    output: "1 2 4 5 8"
  },
  {
    category: "ordenamiento",
    categoryTitle: "Ordenamiento",
    id: "a2",
    title: "Selection Sort",
    description: "Ordena [5,2,8,1,4] encontrando el minimo en cada pasada.",
    code: {
      php: `<?php
$arr = [5, 2, 8, 1, 4];
$n = count($arr);
for ($i = 0; $i < $n - 1; $i++) {
    $minIdx = $i;
    for ($j = $i + 1; $j < $n; $j++) {
        if ($arr[$j] < $arr[$minIdx]) {
            $minIdx = $j;
        }
    }
    $temp = $arr[$i];
    $arr[$i] = $arr[$minIdx];
    $arr[$minIdx] = $temp;
}
echo implode(" ", $arr);`,
      python: `arr = [5, 2, 8, 1, 4]
n = len(arr)
for i in range(n - 1):
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
print(" ".join(str(x) for x in arr))`,
      javascript: `let arr = [5, 2, 8, 1, 4];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
}
console.log(arr.join(" "));`,
      typescript: `let arr: number[] = [5, 2, 8, 1, 4];
let n: number = arr.length;
for (let i = 0; i < n - 1; i++) {
    let minIdx: number = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    let temp: number = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
}
console.log(arr.join(" "));`,
      java: `public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 4};
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (i > 0) sb.append(" ");
            sb.append(arr[i]);
        }
        System.out.println(sb.toString());
    }
}`,
      csharp: `using System;
class SelectionSort {
    static void Main() {
        int[] arr = {5, 2, 8, 1, 4};
        int n = arr.Length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
        Console.WriteLine(string.Join(" ", arr));
    }
}`
    },
    output: "1 2 4 5 8"
  },
  {
    category: "ordenamiento",
    categoryTitle: "Ordenamiento",
    id: "a3",
    title: "Insertion Sort",
    description: "Ordena [5,2,8,1,4] insertando cada elemento en su posicion correcta.",
    code: {
      php: `<?php
$arr = [5, 2, 8, 1, 4];
$n = count($arr);
for ($i = 1; $i < $n; $i++) {
    $key = $arr[$i];
    $j = $i - 1;
    while ($j >= 0 && $arr[$j] > $key) {
        $arr[$j + 1] = $arr[$j];
        $j--;
    }
    $arr[$j + 1] = $key;
}
echo implode(" ", $arr);`,
      python: `arr = [5, 2, 8, 1, 4]
n = len(arr)
for i in range(1, n):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
print(" ".join(str(x) for x in arr))`,
      javascript: `let arr = [5, 2, 8, 1, 4];
let n = arr.length;
for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
console.log(arr.join(" "));`,
      typescript: `let arr: number[] = [5, 2, 8, 1, 4];
let n: number = arr.length;
for (let i = 1; i < n; i++) {
    let key: number = arr[i];
    let j: number = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
console.log(arr.join(" "));`,
      java: `public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 4};
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (i > 0) sb.append(" ");
            sb.append(arr[i]);
        }
        System.out.println(sb.toString());
    }
}`,
      csharp: `using System;
class InsertionSort {
    static void Main() {
        int[] arr = {5, 2, 8, 1, 4};
        int n = arr.Length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        Console.WriteLine(string.Join(" ", arr));
    }
}`
    },
    output: "1 2 4 5 8"
  },
  {
    category: "ordenamiento",
    categoryTitle: "Ordenamiento",
    id: "a4",
    title: "Merge Sort",
    description: "Ordena [5,2,8,1,4] usando divide y conquista con recursion.",
    code: {
      php: `<?php
function mergeSort($arr) {
    $n = count($arr);
    if ($n <= 1) return $arr;
    $mid = intdiv($n, 2);
    $left = mergeSort(array_slice($arr, 0, $mid));
    $right = mergeSort(array_slice($arr, $mid));
    return merge($left, $right);
}
function merge($left, $right) {
    $result = [];
    $i = 0;
    $j = 0;
    while ($i < count($left) && $j < count($right)) {
        if ($left[$i] <= $right[$j]) {
            $result[] = $left[$i];
            $i++;
        } else {
            $result[] = $right[$j];
            $j++;
        }
    }
    while ($i < count($left)) {
        $result[] = $left[$i];
        $i++;
    }
    while ($j < count($right)) {
        $result[] = $right[$j];
        $j++;
    }
    return $result;
}
$arr = [5, 2, 8, 1, 4];
$sorted = mergeSort($arr);
echo implode(" ", $sorted);`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    while i < len(left):
        result.append(left[i])
        i += 1
    while j < len(right):
        result.append(right[j])
        j += 1
    return result

arr = [5, 2, 8, 1, 4]
sorted_arr = merge_sort(arr)
print(" ".join(str(x) for x in sorted_arr))`,
      javascript: `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) { result.push(left[i]); i++; }
    while (j < right.length) { result.push(right[j]); j++; }
    return result;
}
let arr = [5, 2, 8, 1, 4];
let sorted = mergeSort(arr);
console.log(sorted.join(" "));`,
      typescript: `function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    let mid: number = Math.floor(arr.length / 2);
    let left: number[] = mergeSort(arr.slice(0, mid));
    let right: number[] = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i: number = 0, j: number = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) { result.push(left[i]); i++; }
    while (j < right.length) { result.push(right[j]); j++; }
    return result;
}
let arr: number[] = [5, 2, 8, 1, 4];
let sorted: number[] = mergeSort(arr);
console.log(sorted.join(" "));`,
      java: `public class MergeSort {
    static int[] mergeSort(int[] arr) {
        if (arr.length <= 1) return arr;
        int mid = arr.length / 2;
        int[] left = new int[mid];
        int[] right = new int[arr.length - mid];
        for (int i = 0; i < mid; i++) left[i] = arr[i];
        for (int i = mid; i < arr.length; i++) right[i - mid] = arr[i];
        left = mergeSort(left);
        right = mergeSort(right);
        return merge(left, right);
    }
    static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) { result[k++] = left[i++]; }
            else { result[k++] = right[j++]; }
        }
        while (i < left.length) result[k++] = left[i++];
        while (j < right.length) result[k++] = right[j++];
        return result;
    }
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 4};
        int[] sorted = mergeSort(arr);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < sorted.length; i++) {
            if (i > 0) sb.append(" ");
            sb.append(sorted[i]);
        }
        System.out.println(sb.toString());
    }
}`,
      csharp: `using System;
class MergeSort {
    static int[] MergeSortArr(int[] arr) {
        if (arr.Length <= 1) return arr;
        int mid = arr.Length / 2;
        int[] left = new int[mid];
        int[] right = new int[arr.Length - mid];
        Array.Copy(arr, 0, left, 0, mid);
        Array.Copy(arr, mid, right, 0, arr.Length - mid);
        left = MergeSortArr(left);
        right = MergeSortArr(right);
        return Merge(left, right);
    }
    static int[] Merge(int[] left, int[] right) {
        int[] result = new int[left.Length + right.Length];
        int i = 0, j = 0, k = 0;
        while (i < left.Length && j < right.Length) {
            if (left[i] <= right[j]) result[k++] = left[i++];
            else result[k++] = right[j++];
        }
        while (i < left.Length) result[k++] = left[i++];
        while (j < right.Length) result[k++] = right[j++];
        return result;
    }
    static void Main() {
        int[] arr = {5, 2, 8, 1, 4};
        int[] sorted = MergeSortArr(arr);
        Console.WriteLine(string.Join(" ", sorted));
    }
}`
    },
    output: "1 2 4 5 8"
  },

  // ==================== CATEGORY 2: Busqueda ====================
  {
    category: "busqueda",
    categoryTitle: "Busqueda",
    id: "a5",
    title: "Busqueda lineal",
    description: "Busca el 8 en [5,2,8,1,4]. Retorna el indice.",
    code: {
      php: `<?php
$arr = [5, 2, 8, 1, 4];
$target = 8;
$index = -1;
for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] == $target) {
        $index = $i;
        break;
    }
}
echo "$target encontrado en indice $index";`,
      python: `arr = [5, 2, 8, 1, 4]
target = 8
index = -1
for i in range(len(arr)):
    if arr[i] == target:
        index = i
        break
print(f"{target} encontrado en indice {index}")`,
      javascript: `let arr = [5, 2, 8, 1, 4];
let target = 8;
let index = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break;
    }
}
console.log(target + " encontrado en indice " + index);`,
      typescript: `let arr: number[] = [5, 2, 8, 1, 4];
let target: number = 8;
let index: number = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i;
        break;
    }
}
console.log(target + " encontrado en indice " + index);`,
      java: `public class BusquedaLineal {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 4};
        int target = 8;
        int index = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                index = i;
                break;
            }
        }
        System.out.println(target + " encontrado en indice " + index);
    }
}`,
      csharp: `using System;
class BusquedaLineal {
    static void Main() {
        int[] arr = {5, 2, 8, 1, 4};
        int target = 8;
        int index = -1;
        for (int i = 0; i < arr.Length; i++) {
            if (arr[i] == target) {
                index = i;
                break;
            }
        }
        Console.WriteLine(target + " encontrado en indice " + index);
    }
}`
    },
    output: "8 encontrado en indice 2"
  },
  {
    category: "busqueda",
    categoryTitle: "Busqueda",
    id: "a6",
    title: "Busqueda binaria",
    description: "Busca el 7 en [1,3,5,7,9,11] ordenado. Retorna el indice.",
    code: {
      php: `<?php
$arr = [1, 3, 5, 7, 9, 11];
$target = 7;
$low = 0;
$high = count($arr) - 1;
$index = -1;
while ($low <= $high) {
    $mid = intdiv($low + $high, 2);
    if ($arr[$mid] == $target) {
        $index = $mid;
        break;
    } elseif ($arr[$mid] < $target) {
        $low = $mid + 1;
    } else {
        $high = $mid - 1;
    }
}
echo "$target encontrado en indice $index";`,
      python: `arr = [1, 3, 5, 7, 9, 11]
target = 7
low = 0
high = len(arr) - 1
index = -1
while low <= high:
    mid = (low + high) // 2
    if arr[mid] == target:
        index = mid
        break
    elif arr[mid] < target:
        low = mid + 1
    else:
        high = mid - 1
print(f"{target} encontrado en indice {index}")`,
      javascript: `let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
let low = 0;
let high = arr.length - 1;
let index = -1;
while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        index = mid;
        break;
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
console.log(target + " encontrado en indice " + index);`,
      typescript: `let arr: number[] = [1, 3, 5, 7, 9, 11];
let target: number = 7;
let low: number = 0;
let high: number = arr.length - 1;
let index: number = -1;
while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        index = mid;
        break;
    } else if (arr[mid] < target) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
console.log(target + " encontrado en indice " + index);`,
      java: `public class BusquedaBinaria {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        int target = 7;
        int low = 0;
        int high = arr.length - 1;
        int index = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) {
                index = mid;
                break;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        System.out.println(target + " encontrado en indice " + index);
    }
}`,
      csharp: `using System;
class BusquedaBinaria {
    static void Main() {
        int[] arr = {1, 3, 5, 7, 9, 11};
        int target = 7;
        int low = 0;
        int high = arr.Length - 1;
        int index = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) {
                index = mid;
                break;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        Console.WriteLine(target + " encontrado en indice " + index);
    }
}`
    },
    output: "7 encontrado en indice 3"
  },
  {
    category: "busqueda",
    categoryTitle: "Busqueda",
    id: "a7",
    title: "Busqueda binaria recursiva",
    description: "Busca el 7 en [1,3,5,7,9,11] usando recursion. Retorna el indice.",
    code: {
      php: `<?php
function busquedaBinaria($arr, $target, $low, $high) {
    if ($low > $high) return -1;
    $mid = intdiv($low + $high, 2);
    if ($arr[$mid] == $target) return $mid;
    if ($arr[$mid] < $target) return busquedaBinaria($arr, $target, $mid + 1, $high);
    return busquedaBinaria($arr, $target, $low, $mid - 1);
}
$arr = [1, 3, 5, 7, 9, 11];
$target = 7;
$index = busquedaBinaria($arr, $target, 0, count($arr) - 1);
echo "$target encontrado en indice $index";`,
      python: `def busqueda_binaria(arr, target, low, high):
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    if arr[mid] < target:
        return busqueda_binaria(arr, target, mid + 1, high)
    return busqueda_binaria(arr, target, low, mid - 1)

arr = [1, 3, 5, 7, 9, 11]
target = 7
index = busqueda_binaria(arr, target, 0, len(arr) - 1)
print(f"{target} encontrado en indice {index}")`,
      javascript: `function busquedaBinaria(arr, target, low, high) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return busquedaBinaria(arr, target, mid + 1, high);
    return busquedaBinaria(arr, target, low, mid - 1);
}
let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
let index = busquedaBinaria(arr, target, 0, arr.length - 1);
console.log(target + " encontrado en indice " + index);`,
      typescript: `function busquedaBinaria(arr: number[], target: number, low: number, high: number): number {
    if (low > high) return -1;
    let mid: number = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return busquedaBinaria(arr, target, mid + 1, high);
    return busquedaBinaria(arr, target, low, mid - 1);
}
let arr: number[] = [1, 3, 5, 7, 9, 11];
let target: number = 7;
let index: number = busquedaBinaria(arr, target, 0, arr.length - 1);
console.log(target + " encontrado en indice " + index);`,
      java: `public class BusquedaBinariaRecursiva {
    static int busquedaBinaria(int[] arr, int target, int low, int high) {
        if (low > high) return -1;
        int mid = (low + high) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) return busquedaBinaria(arr, target, mid + 1, high);
        return busquedaBinaria(arr, target, low, mid - 1);
    }
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        int target = 7;
        int index = busquedaBinaria(arr, target, 0, arr.length - 1);
        System.out.println(target + " encontrado en indice " + index);
    }
}`,
      csharp: `using System;
class BusquedaBinariaRecursiva {
    static int BusquedaBinaria(int[] arr, int target, int low, int high) {
        if (low > high) return -1;
        int mid = (low + high) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) return BusquedaBinaria(arr, target, mid + 1, high);
        return BusquedaBinaria(arr, target, low, mid - 1);
    }
    static void Main() {
        int[] arr = {1, 3, 5, 7, 9, 11};
        int target = 7;
        int index = BusquedaBinaria(arr, target, 0, arr.Length - 1);
        Console.WriteLine(target + " encontrado en indice " + index);
    }
}`
    },
    output: "7 encontrado en indice 3"
  },

  // ==================== CATEGORY 3: Recursion ====================
  {
    category: "recursion",
    categoryTitle: "Recursion",
    id: "a8",
    title: "Factorial",
    description: "factorial(5) = 120. Implementacion recursiva.",
    code: {
      php: `<?php
function factorial($n) {
    if ($n <= 1) return 1;
    return $n * factorial($n - 1);
}
$n = 5;
echo "$n! = " . factorial($n);`,
      python: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

n = 5
print(f"{n}! = {factorial(n)}")`,
      javascript: `function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
let n = 5;
console.log(n + "! = " + factorial(n));`,
      typescript: `function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
let n: number = 5;
console.log(n + "! = " + factorial(n));`,
      java: `public class Factorial {
    static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    public static void main(String[] args) {
        int n = 5;
        System.out.println(n + "! = " + factorial(n));
    }
}`,
      csharp: `using System;
class Factorial {
    static int FactorialCalc(int n) {
        if (n <= 1) return 1;
        return n * FactorialCalc(n - 1);
    }
    static void Main() {
        int n = 5;
        Console.WriteLine(n + "! = " + FactorialCalc(n));
    }
}`
    },
    output: "5! = 120"
  },
  {
    category: "recursion",
    categoryTitle: "Recursion",
    id: "a9",
    title: "Fibonacci",
    description: "fibonacci(7) = 13. Muestra los primeros 8 numeros: 0,1,1,2,3,5,8,13.",
    code: {
      php: `<?php
function fibonacci($n) {
    if ($n <= 0) return 0;
    if ($n == 1) return 1;
    return fibonacci($n - 1) + fibonacci($n - 2);
}
$result = [];
for ($i = 0; $i <= 7; $i++) {
    $result[] = fibonacci($i);
}
echo implode(" ", $result);`,
      python: `def fibonacci(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)

result = []
for i in range(8):
    result.append(str(fibonacci(i)))
print(" ".join(result))`,
      javascript: `function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let result = [];
for (let i = 0; i <= 7; i++) {
    result.push(fibonacci(i));
}
console.log(result.join(" "));`,
      typescript: `function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let result: number[] = [];
for (let i = 0; i <= 7; i++) {
    result.push(fibonacci(i));
}
console.log(result.join(" "));`,
      java: `public class Fibonacci {
    static int fibonacci(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i <= 7; i++) {
            if (i > 0) sb.append(" ");
            sb.append(fibonacci(i));
        }
        System.out.println(sb.toString());
    }
}`,
      csharp: `using System;
using System.Collections.Generic;
class Fibonacci {
    static int Fib(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        return Fib(n - 1) + Fib(n - 2);
    }
    static void Main() {
        List<string> result = new List<string>();
        for (int i = 0; i <= 7; i++) {
            result.Add(Fib(i).ToString());
        }
        Console.WriteLine(string.Join(" ", result));
    }
}`
    },
    output: "0 1 1 2 3 5 8 13"
  },
  {
    category: "recursion",
    categoryTitle: "Recursion",
    id: "a10",
    title: "Potencia recursiva",
    description: "potencia(2, 10) = 1024. Implementacion recursiva.",
    code: {
      php: `<?php
function potencia($base, $exp) {
    if ($exp == 0) return 1;
    return $base * potencia($base, $exp - 1);
}
$base = 2;
$exp = 10;
echo "$base^$exp = " . potencia($base, $exp);`,
      python: `def potencia(base, exp):
    if exp == 0:
        return 1
    return base * potencia(base, exp - 1)

base = 2
exp = 10
print(f"{base}^{exp} = {potencia(base, exp)}")`,
      javascript: `function potencia(base, exp) {
    if (exp === 0) return 1;
    return base * potencia(base, exp - 1);
}
let base = 2;
let exp = 10;
console.log(base + "^" + exp + " = " + potencia(base, exp));`,
      typescript: `function potencia(base: number, exp: number): number {
    if (exp === 0) return 1;
    return base * potencia(base, exp - 1);
}
let base: number = 2;
let exp: number = 10;
console.log(base + "^" + exp + " = " + potencia(base, exp));`,
      java: `public class Potencia {
    static int potencia(int base, int exp) {
        if (exp == 0) return 1;
        return base * potencia(base, exp - 1);
    }
    public static void main(String[] args) {
        int base = 2;
        int exp = 10;
        System.out.println(base + "^" + exp + " = " + potencia(base, exp));
    }
}`,
      csharp: `using System;
class Potencia {
    static int PotenciaCalc(int baseNum, int exp) {
        if (exp == 0) return 1;
        return baseNum * PotenciaCalc(baseNum, exp - 1);
    }
    static void Main() {
        int baseNum = 2;
        int exp = 10;
        Console.WriteLine(baseNum + "^" + exp + " = " + PotenciaCalc(baseNum, exp));
    }
}`
    },
    output: "2^10 = 1024"
  },
  {
    category: "recursion",
    categoryTitle: "Recursion",
    id: "a11",
    title: "Suma de array recursiva",
    description: "sumaRecursiva([1,2,3,4,5]) = 15.",
    code: {
      php: `<?php
function sumaRecursiva($arr, $n) {
    if ($n <= 0) return 0;
    return $arr[$n - 1] + sumaRecursiva($arr, $n - 1);
}
$arr = [1, 2, 3, 4, 5];
echo "suma: " . sumaRecursiva($arr, count($arr));`,
      python: `def suma_recursiva(arr, n):
    if n <= 0:
        return 0
    return arr[n - 1] + suma_recursiva(arr, n - 1)

arr = [1, 2, 3, 4, 5]
print(f"suma: {suma_recursiva(arr, len(arr))}")`,
      javascript: `function sumaRecursiva(arr, n) {
    if (n <= 0) return 0;
    return arr[n - 1] + sumaRecursiva(arr, n - 1);
}
let arr = [1, 2, 3, 4, 5];
console.log("suma: " + sumaRecursiva(arr, arr.length));`,
      typescript: `function sumaRecursiva(arr: number[], n: number): number {
    if (n <= 0) return 0;
    return arr[n - 1] + sumaRecursiva(arr, n - 1);
}
let arr: number[] = [1, 2, 3, 4, 5];
console.log("suma: " + sumaRecursiva(arr, arr.length));`,
      java: `public class SumaRecursiva {
    static int sumaRecursiva(int[] arr, int n) {
        if (n <= 0) return 0;
        return arr[n - 1] + sumaRecursiva(arr, n - 1);
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("suma: " + sumaRecursiva(arr, arr.length));
    }
}`,
      csharp: `using System;
class SumaRecursiva {
    static int Suma(int[] arr, int n) {
        if (n <= 0) return 0;
        return arr[n - 1] + Suma(arr, n - 1);
    }
    static void Main() {
        int[] arr = {1, 2, 3, 4, 5};
        Console.WriteLine("suma: " + Suma(arr, arr.Length));
    }
}`
    },
    output: "suma: 15"
  },

  // ==================== CATEGORY 4: Otros ====================
  {
    category: "otros",
    categoryTitle: "Otros",
    id: "a12",
    title: "Invertir string",
    description: "invertir(\"hola mundo\") = \"odnum aloh\". Sin usar reverse built-in.",
    code: {
      php: `<?php
function invertir($str) {
    $result = "";
    for ($i = strlen($str) - 1; $i >= 0; $i--) {
        $result .= $str[$i];
    }
    return $result;
}
echo invertir("hola mundo");`,
      python: `def invertir(s):
    result = ""
    for i in range(len(s) - 1, -1, -1):
        result += s[i]
    return result

print(invertir("hola mundo"))`,
      javascript: `function invertir(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(invertir("hola mundo"));`,
      typescript: `function invertir(str: string): string {
    let result: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(invertir("hola mundo"));`,
      java: `public class InvertirString {
    static String invertir(String str) {
        String result = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            result += str.charAt(i);
        }
        return result;
    }
    public static void main(String[] args) {
        System.out.println(invertir("hola mundo"));
    }
}`,
      csharp: `using System;
class InvertirString {
    static string Invertir(string str) {
        string result = "";
        for (int i = str.Length - 1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
    static void Main() {
        Console.WriteLine(Invertir("hola mundo"));
    }
}`
    },
    output: "odnum aloh"
  },
  {
    category: "otros",
    categoryTitle: "Otros",
    id: "a13",
    title: "Es palindromo",
    description: "Verifica \"anilina\" -> true, \"hola\" -> false. Sin usar reverse built-in.",
    code: {
      php: `<?php
function esPalindromo($str) {
    $n = strlen($str);
    for ($i = 0; $i < intdiv($n, 2); $i++) {
        if ($str[$i] != $str[$n - 1 - $i]) {
            return false;
        }
    }
    return true;
}
echo "anilina: " . (esPalindromo("anilina") ? "si" : "no") . "\\n";
echo "hola: " . (esPalindromo("hola") ? "si" : "no");`,
      python: `def es_palindromo(s):
    n = len(s)
    for i in range(n // 2):
        if s[i] != s[n - 1 - i]:
            return False
    return True

print("anilina: " + ("si" if es_palindromo("anilina") else "no"))
print("hola: " + ("si" if es_palindromo("hola") else "no"))`,
      javascript: `function esPalindromo(str) {
    let n = str.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (str[i] !== str[n - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log("anilina: " + (esPalindromo("anilina") ? "si" : "no"));
console.log("hola: " + (esPalindromo("hola") ? "si" : "no"));`,
      typescript: `function esPalindromo(str: string): boolean {
    let n: number = str.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (str[i] !== str[n - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log("anilina: " + (esPalindromo("anilina") ? "si" : "no"));
console.log("hola: " + (esPalindromo("hola") ? "si" : "no"));`,
      java: `public class EsPalindromo {
    static boolean esPalindromo(String str) {
        int n = str.length();
        for (int i = 0; i < n / 2; i++) {
            if (str.charAt(i) != str.charAt(n - 1 - i)) {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println("anilina: " + (esPalindromo("anilina") ? "si" : "no"));
        System.out.println("hola: " + (esPalindromo("hola") ? "si" : "no"));
    }
}`,
      csharp: `using System;
class EsPalindromo {
    static bool Palindromo(string str) {
        int n = str.Length;
        for (int i = 0; i < n / 2; i++) {
            if (str[i] != str[n - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    static void Main() {
        Console.WriteLine("anilina: " + (Palindromo("anilina") ? "si" : "no"));
        Console.WriteLine("hola: " + (Palindromo("hola") ? "si" : "no"));
    }
}`
    },
    output: "anilina: si\nhola: no"
  },
  {
    category: "otros",
    categoryTitle: "Otros",
    id: "a14",
    title: "MCD (Euclides)",
    description: "mcd(48, 18) = 6. Usando el algoritmo de Euclides.",
    code: {
      php: `<?php
function mcd($a, $b) {
    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    return $a;
}
$a = 48;
$b = 18;
echo "mcd($a,$b) = " . mcd($a, $b);`,
      python: `def mcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

a = 48
b = 18
print(f"mcd({a},{b}) = {mcd(a, b)}")`,
      javascript: `function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let a = 48;
let b = 18;
console.log("mcd(" + a + "," + b + ") = " + mcd(a, b));`,
      typescript: `function mcd(a: number, b: number): number {
    while (b !== 0) {
        let temp: number = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let a: number = 48;
let b: number = 18;
console.log("mcd(" + a + "," + b + ") = " + mcd(a, b));`,
      java: `public class MCD {
    static int mcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    public static void main(String[] args) {
        int a = 48;
        int b = 18;
        System.out.println("mcd(" + a + "," + b + ") = " + mcd(a, b));
    }
}`,
      csharp: `using System;
class MCD {
    static int Mcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    static void Main() {
        int a = 48;
        int b = 18;
        Console.WriteLine("mcd(" + a + "," + b + ") = " + Mcd(a, b));
    }
}`
    },
    output: "mcd(48,18) = 6"
  }
];
