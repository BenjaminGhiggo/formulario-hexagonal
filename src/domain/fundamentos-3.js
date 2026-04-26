export const fundamentos3 = [
  // ==================== Categoria 13: Funciones matematicas ====================
  {
    category: 13,
    categoryTitle: "Funciones matematicas",
    id: "13.1",
    title: "Absoluto y redondeo",
    code: {
      php: `<?php
$a = abs(-7);
$b = round(3.7);
echo "abs(-7) = $a\\n";
echo "round(3.7) = $b\\n";`,
      python: `a = abs(-7)
b = round(3.7)
print(f"abs(-7) = {a}")
print(f"round(3.7) = {b}")`,
      javascript: `let a = Math.abs(-7);
let b = Math.round(3.7);
console.log("abs(-7) = " + a);
console.log("round(3.7) = " + b);`,
      typescript: `let a: number = Math.abs(-7);
let b: number = Math.round(3.7);
console.log("abs(-7) = " + a);
console.log("round(3.7) = " + b);`,
      java: `public class Main {
    public static void main(String[] args) {
        int a = Math.abs(-7);
        long b = Math.round(3.7);
        System.out.println("abs(-7) = " + a);
        System.out.println("round(3.7) = " + b);
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        int a = Math.Abs(-7);
        double b = Math.Round(3.7);
        Console.WriteLine("abs(-7) = " + a);
        Console.WriteLine("round(3.7) = " + b);
    }
}`
    },
    output: "abs(-7) = 7\nround(3.7) = 4"
  },
  {
    category: 13,
    categoryTitle: "Funciones matematicas",
    id: "13.2",
    title: "Piso y techo",
    code: {
      php: `<?php
$a = floor(3.7);
$b = ceil(3.2);
echo "floor(3.7) = $a\\n";
echo "ceil(3.2) = $b\\n";`,
      python: `import math
a = math.floor(3.7)
b = math.ceil(3.2)
print(f"floor(3.7) = {a}")
print(f"ceil(3.2) = {b}")`,
      javascript: `let a = Math.floor(3.7);
let b = Math.ceil(3.2);
console.log("floor(3.7) = " + a);
console.log("ceil(3.2) = " + b);`,
      typescript: `let a: number = Math.floor(3.7);
let b: number = Math.ceil(3.2);
console.log("floor(3.7) = " + a);
console.log("ceil(3.2) = " + b);`,
      java: `public class Main {
    public static void main(String[] args) {
        double a = Math.floor(3.7);
        double b = Math.ceil(3.2);
        System.out.println("floor(3.7) = " + (int)a);
        System.out.println("ceil(3.2) = " + (int)b);
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        double a = Math.Floor(3.7);
        double b = Math.Ceiling(3.2);
        Console.WriteLine("floor(3.7) = " + a);
        Console.WriteLine("ceil(3.2) = " + b);
    }
}`
    },
    output: "floor(3.7) = 3\nceil(3.2) = 4"
  },
  {
    category: 13,
    categoryTitle: "Funciones matematicas",
    id: "13.3",
    title: "Maximo y minimo",
    code: {
      php: `<?php
$nums = [3, 7, 1, 9, 2];
echo "max = " . max($nums) . "\\n";
echo "min = " . min($nums) . "\\n";`,
      python: `nums = [3, 7, 1, 9, 2]
print(f"max = {max(nums)}")
print(f"min = {min(nums)}")`,
      javascript: `let nums = [3, 7, 1, 9, 2];
console.log("max = " + Math.max(...nums));
console.log("min = " + Math.min(...nums));`,
      typescript: `let nums: number[] = [3, 7, 1, 9, 2];
console.log("max = " + Math.max(...nums));
console.log("min = " + Math.min(...nums));`,
      java: `import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        int[] nums = {3, 7, 1, 9, 2};
        int max = Arrays.stream(nums).max().getAsInt();
        int min = Arrays.stream(nums).min().getAsInt();
        System.out.println("max = " + max);
        System.out.println("min = " + min);
    }
}`,
      csharp: `using System;
using System.Linq;
class Program {
    static void Main() {
        int[] nums = {3, 7, 1, 9, 2};
        Console.WriteLine("max = " + nums.Max());
        Console.WriteLine("min = " + nums.Min());
    }
}`
    },
    output: "max = 9\nmin = 1"
  },
  {
    category: 13,
    categoryTitle: "Funciones matematicas",
    id: "13.4",
    title: "Raiz y potencia",
    code: {
      php: `<?php
$raiz = sqrt(16);
$pot = pow(2, 10);
echo "sqrt(16) = $raiz\\n";
echo "pow(2,10) = $pot\\n";`,
      python: `import math
raiz = math.sqrt(16)
pot = math.pow(2, 10)
print(f"sqrt(16) = {int(raiz)}")
print(f"pow(2,10) = {int(pot)}")`,
      javascript: `let raiz = Math.sqrt(16);
let pot = Math.pow(2, 10);
console.log("sqrt(16) = " + raiz);
console.log("pow(2,10) = " + pot);`,
      typescript: `let raiz: number = Math.sqrt(16);
let pot: number = Math.pow(2, 10);
console.log("sqrt(16) = " + raiz);
console.log("pow(2,10) = " + pot);`,
      java: `public class Main {
    public static void main(String[] args) {
        double raiz = Math.sqrt(16);
        double pot = Math.pow(2, 10);
        System.out.println("sqrt(16) = " + (int)raiz);
        System.out.println("pow(2,10) = " + (int)pot);
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        double raiz = Math.Sqrt(16);
        double pot = Math.Pow(2, 10);
        Console.WriteLine("sqrt(16) = " + raiz);
        Console.WriteLine("pow(2,10) = " + pot);
    }
}`
    },
    output: "sqrt(16) = 4\npow(2,10) = 1024"
  },
  {
    category: 13,
    categoryTitle: "Funciones matematicas",
    id: "13.5",
    title: "Numero aleatorio",
    code: {
      php: `<?php
$n = rand(1, 100);
echo "Aleatorio: $n\\n";`,
      python: `import random
n = random.randint(1, 100)
print(f"Aleatorio: {n}")`,
      javascript: `let n = Math.floor(Math.random() * 100) + 1;
console.log("Aleatorio: " + n);`,
      typescript: `let n: number = Math.floor(Math.random() * 100) + 1;
console.log("Aleatorio: " + n);`,
      java: `import java.util.Random;
public class Main {
    public static void main(String[] args) {
        int n = new Random().nextInt(100) + 1;
        System.out.println("Aleatorio: " + n);
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        int n = new Random().Next(1, 101);
        Console.WriteLine("Aleatorio: " + n);
    }
}`
    },
    output: "Aleatorio: (numero entre 1 y 100)"
  },

  // ==================== Categoria 14: Manejo de errores ====================
  {
    category: 14,
    categoryTitle: "Manejo de errores",
    id: "14.1",
    title: "Try / catch",
    code: {
      php: `<?php
try {
    $resultado = intdiv(10, 0);
} catch (DivisionByZeroError $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}`,
      python: `try:
    resultado = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")`,
      javascript: `try {
    let obj = JSON.parse("no es json");
} catch (e) {
    console.log("Error: " + e.message);
}`,
      typescript: `try {
    let obj = JSON.parse("no es json");
} catch (e) {
    console.log("Error: " + (e as Error).message);
}`,
      java: `public class Main {
    public static void main(String[] args) {
        try {
            int resultado = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        try {
            int resultado = 10 / int.Parse("0");
        } catch (DivideByZeroException e) {
            Console.WriteLine("Error: " + e.Message);
        }
    }
}`
    },
    output: {
      php: "Error: Division by zero",
      python: "Error: division by zero",
      javascript: "Error: Unexpected token 'o', \"no es json\" is not valid JSON",
      typescript: "Error: Unexpected token 'o', \"no es json\" is not valid JSON",
      java: "Error: / by zero",
      csharp: "Error: Attempted to divide by zero."
    }
  },
  {
    category: 14,
    categoryTitle: "Manejo de errores",
    id: "14.2",
    title: "Lanzar excepcion",
    code: {
      php: `<?php
function validar($valor) {
    if ($valor < 0) {
        throw new Exception("valor invalido");
    }
}
try {
    validar(-1);
} catch (Exception $e) {
    echo "Capturado: " . $e->getMessage() . "\\n";
}`,
      python: `def validar(valor):
    if valor < 0:
        raise ValueError("valor invalido")

try:
    validar(-1)
except ValueError as e:
    print(f"Capturado: {e}")`,
      javascript: `function validar(valor) {
    if (valor < 0) {
        throw new Error("valor invalido");
    }
}
try {
    validar(-1);
} catch (e) {
    console.log("Capturado: " + e.message);
}`,
      typescript: `function validar(valor: number): void {
    if (valor < 0) {
        throw new Error("valor invalido");
    }
}
try {
    validar(-1);
} catch (e) {
    console.log("Capturado: " + (e as Error).message);
}`,
      java: `public class Main {
    static void validar(int valor) throws Exception {
        if (valor < 0) {
            throw new Exception("valor invalido");
        }
    }
    public static void main(String[] args) {
        try {
            validar(-1);
        } catch (Exception e) {
            System.out.println("Capturado: " + e.getMessage());
        }
    }
}`,
      csharp: `using System;
class Program {
    static void Validar(int valor) {
        if (valor < 0) {
            throw new Exception("valor invalido");
        }
    }
    static void Main() {
        try {
            Validar(-1);
        } catch (Exception e) {
            Console.WriteLine("Capturado: " + e.Message);
        }
    }
}`
    },
    output: "Capturado: valor invalido"
  },
  {
    category: 14,
    categoryTitle: "Manejo de errores",
    id: "14.3",
    title: "Finally",
    code: {
      php: `<?php
try {
    echo "Intentando...\\n";
    throw new Exception("error");
} catch (Exception $e) {
    echo "Capturado: " . $e->getMessage() . "\\n";
} finally {
    echo "Finally siempre se ejecuta\\n";
}`,
      python: `try:
    print("Intentando...")
    raise Exception("error")
except Exception as e:
    print(f"Capturado: {e}")
finally:
    print("Finally siempre se ejecuta")`,
      javascript: `try {
    console.log("Intentando...");
    throw new Error("error");
} catch (e) {
    console.log("Capturado: " + e.message);
} finally {
    console.log("Finally siempre se ejecuta");
}`,
      typescript: `try {
    console.log("Intentando...");
    throw new Error("error");
} catch (e) {
    console.log("Capturado: " + (e as Error).message);
} finally {
    console.log("Finally siempre se ejecuta");
}`,
      java: `public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("Intentando...");
            throw new Exception("error");
        } catch (Exception e) {
            System.out.println("Capturado: " + e.getMessage());
        } finally {
            System.out.println("Finally siempre se ejecuta");
        }
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        try {
            Console.WriteLine("Intentando...");
            throw new Exception("error");
        } catch (Exception e) {
            Console.WriteLine("Capturado: " + e.Message);
        } finally {
            Console.WriteLine("Finally siempre se ejecuta");
        }
    }
}`
    },
    output: "Intentando...\nCapturado: error\nFinally siempre se ejecuta"
  },

  // ==================== Categoria 15: Fecha y hora ====================
  {
    category: 15,
    categoryTitle: "Fecha y hora",
    id: "15.1",
    title: "Fecha actual",
    code: {
      php: `<?php
echo "Fecha: " . date("Y-m-d") . "\\n";
echo "Hora: " . date("H:i:s") . "\\n";`,
      python: `from datetime import datetime
ahora = datetime.now()
print(f"Fecha: {ahora.strftime('%Y-%m-%d')}")
print(f"Hora: {ahora.strftime('%H:%M:%S')}")`,
      javascript: `let ahora = new Date();
console.log("Fecha: " + ahora.toISOString().split("T")[0]);
console.log("Hora: " + ahora.toTimeString().split(" ")[0]);`,
      typescript: `let ahora: Date = new Date();
console.log("Fecha: " + ahora.toISOString().split("T")[0]);
console.log("Hora: " + ahora.toTimeString().split(" ")[0]);`,
      java: `import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class Main {
    public static void main(String[] args) {
        LocalDateTime ahora = LocalDateTime.now();
        System.out.println("Fecha: " + ahora.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        System.out.println("Hora: " + ahora.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        DateTime ahora = DateTime.Now;
        Console.WriteLine("Fecha: " + ahora.ToString("yyyy-MM-dd"));
        Console.WriteLine("Hora: " + ahora.ToString("HH:mm:ss"));
    }
}`
    },
    output: "Fecha: (fecha actual)\nHora: (hora actual)"
  },
  {
    category: 15,
    categoryTitle: "Fecha y hora",
    id: "15.2",
    title: "Formatear fecha",
    code: {
      php: `<?php
$fecha = new DateTime("2025-03-15");
echo $fecha->format("d/m/Y") . "\\n";`,
      python: `from datetime import datetime
fecha = datetime(2025, 3, 15)
print(fecha.strftime("%d/%m/%Y"))`,
      javascript: `let fecha = new Date(2025, 2, 15);
let dia = String(fecha.getDate()).padStart(2, "0");
let mes = String(fecha.getMonth() + 1).padStart(2, "0");
let anio = fecha.getFullYear();
console.log(dia + "/" + mes + "/" + anio);`,
      typescript: `let fecha: Date = new Date(2025, 2, 15);
let dia: string = String(fecha.getDate()).padStart(2, "0");
let mes: string = String(fecha.getMonth() + 1).padStart(2, "0");
let anio: number = fecha.getFullYear();
console.log(dia + "/" + mes + "/" + anio);`,
      java: `import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
public class Main {
    public static void main(String[] args) {
        LocalDate fecha = LocalDate.of(2025, 3, 15);
        String fmt = fecha.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        System.out.println(fmt);
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        DateTime fecha = new DateTime(2025, 3, 15);
        Console.WriteLine(fecha.ToString("dd/MM/yyyy"));
    }
}`
    },
    output: "15/03/2025"
  },
  {
    category: 15,
    categoryTitle: "Fecha y hora",
    id: "15.3",
    title: "Diferencia entre fechas",
    code: {
      php: `<?php
$f1 = new DateTime("2025-01-01");
$f2 = new DateTime("2025-03-15");
$diff = $f1->diff($f2);
echo "Diferencia: " . $diff->days . " dias\\n";`,
      python: `from datetime import date
f1 = date(2025, 1, 1)
f2 = date(2025, 3, 15)
diff = (f2 - f1).days
print(f"Diferencia: {diff} dias")`,
      javascript: `let f1 = new Date(2025, 0, 1);
let f2 = new Date(2025, 2, 15);
let diff = Math.floor((f2 - f1) / (1000 * 60 * 60 * 24));
console.log("Diferencia: " + diff + " dias");`,
      typescript: `let f1: Date = new Date(2025, 0, 1);
let f2: Date = new Date(2025, 2, 15);
let diff: number = Math.floor((f2.getTime() - f1.getTime()) / (1000 * 60 * 60 * 24));
console.log("Diferencia: " + diff + " dias");`,
      java: `import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
public class Main {
    public static void main(String[] args) {
        LocalDate f1 = LocalDate.of(2025, 1, 1);
        LocalDate f2 = LocalDate.of(2025, 3, 15);
        long diff = ChronoUnit.DAYS.between(f1, f2);
        System.out.println("Diferencia: " + diff + " dias");
    }
}`,
      csharp: `using System;
class Program {
    static void Main() {
        DateTime f1 = new DateTime(2025, 1, 1);
        DateTime f2 = new DateTime(2025, 3, 15);
        int diff = (f2 - f1).Days;
        Console.WriteLine("Diferencia: " + diff + " dias");
    }
}`
    },
    output: "Diferencia: 73 dias"
  },

  // ==================== Categoria 16: Archivos ====================
  {
    category: 16,
    categoryTitle: "Archivos",
    id: "16.1",
    title: "Escribir archivo",
    code: {
      php: `<?php
file_put_contents("saludo.txt", "hola mundo");
echo "Archivo escrito\\n";`,
      python: `with open("saludo.txt", "w") as f:
    f.write("hola mundo")
print("Archivo escrito")`,
      javascript: `const fs = require("fs");
fs.writeFileSync("saludo.txt", "hola mundo");
console.log("Archivo escrito");`,
      typescript: `import * as fs from "fs";
fs.writeFileSync("saludo.txt", "hola mundo");
console.log("Archivo escrito");`,
      java: `import java.io.FileWriter;
public class Main {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("saludo.txt");
        fw.write("hola mundo");
        fw.close();
        System.out.println("Archivo escrito");
    }
}`,
      csharp: `using System;
using System.IO;
class Program {
    static void Main() {
        File.WriteAllText("saludo.txt", "hola mundo");
        Console.WriteLine("Archivo escrito");
    }
}`
    },
    output: "Archivo escrito"
  },
  {
    category: 16,
    categoryTitle: "Archivos",
    id: "16.2",
    title: "Leer archivo",
    code: {
      php: `<?php
$contenido = file_get_contents("saludo.txt");
echo "Contenido: $contenido\\n";`,
      python: `with open("saludo.txt", "r") as f:
    contenido = f.read()
print(f"Contenido: {contenido}")`,
      javascript: `const fs = require("fs");
let contenido = fs.readFileSync("saludo.txt", "utf8");
console.log("Contenido: " + contenido);`,
      typescript: `import * as fs from "fs";
let contenido: string = fs.readFileSync("saludo.txt", "utf8");
console.log("Contenido: " + contenido);`,
      java: `import java.nio.file.Files;
import java.nio.file.Paths;
public class Main {
    public static void main(String[] args) throws Exception {
        String contenido = Files.readString(Paths.get("saludo.txt"));
        System.out.println("Contenido: " + contenido);
    }
}`,
      csharp: `using System;
using System.IO;
class Program {
    static void Main() {
        string contenido = File.ReadAllText("saludo.txt");
        Console.WriteLine("Contenido: " + contenido);
    }
}`
    },
    output: "Contenido: hola mundo"
  },

  // ==================== Categoria 17: Base de datos ====================
  {
    category: 17,
    categoryTitle: "Base de datos",
    id: "17.1",
    title: "Conectar",
    code: {
      php: `<?php
// Conexion a MySQL con PDO
$host = "localhost";
$db = "mi_base";
$user = "root";
$pass = "";
$pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo "Conectado\\n";`,
      python: `import sqlite3
# Conexion a SQLite (archivo local)
conn = sqlite3.connect("mi_base.db")
cursor = conn.cursor()
print("Conectado")`,
      javascript: `// Usando better-sqlite3
const Database = require("better-sqlite3");
const db = new Database("mi_base.db");
console.log("Conectado");`,
      typescript: `// Usando better-sqlite3
import Database from "better-sqlite3";
const db = new Database("mi_base.db");
console.log("Conectado");`,
      java: `import java.sql.*;
public class Main {
    public static void main(String[] args) throws Exception {
        // Conexion JDBC a MySQL
        String url = "jdbc:mysql://localhost:3306/mi_base";
        Connection conn = DriverManager.getConnection(url, "root", "");
        System.out.println("Conectado");
        conn.close();
    }
}`,
      csharp: `using System;
using System.Data.SqlClient;
class Program {
    static void Main() {
        // Conexion a SQL Server
        string connStr = "Server=localhost;Database=mi_base;User Id=sa;Password=;";
        SqlConnection conn = new SqlConnection(connStr);
        conn.Open();
        Console.WriteLine("Conectado");
        conn.Close();
    }
}`
    },
    output: "Conectado"
  },
  {
    category: 17,
    categoryTitle: "Base de datos",
    id: "17.2",
    title: "SELECT",
    code: {
      php: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=mi_base", "root", "");
$stmt = $pdo->query("SELECT id, nombre FROM usuarios");
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo $row["id"] . " - " . $row["nombre"] . "\\n";
}`,
      python: `import sqlite3
conn = sqlite3.connect("mi_base.db")
cursor = conn.cursor()
cursor.execute("SELECT id, nombre FROM usuarios")
for row in cursor.fetchall():
    print(f"{row[0]} - {row[1]}")
conn.close()`,
      javascript: `const Database = require("better-sqlite3");
const db = new Database("mi_base.db");
const rows = db.prepare("SELECT id, nombre FROM usuarios").all();
for (const row of rows) {
    console.log(row.id + " - " + row.nombre);
}`,
      typescript: `import Database from "better-sqlite3";
const db = new Database("mi_base.db");
interface Usuario { id: number; nombre: string; }
const rows = db.prepare("SELECT id, nombre FROM usuarios").all() as Usuario[];
for (const row of rows) {
    console.log(row.id + " - " + row.nombre);
}`,
      java: `import java.sql.*;
public class Main {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/mi_base", "root", "");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT id, nombre FROM usuarios");
        while (rs.next()) {
            System.out.println(rs.getInt("id") + " - " + rs.getString("nombre"));
        }
        conn.close();
    }
}`,
      csharp: `using System;
using System.Data.SqlClient;
class Program {
    static void Main() {
        var conn = new SqlConnection("Server=localhost;Database=mi_base;User Id=sa;Password=;");
        conn.Open();
        var cmd = new SqlCommand("SELECT id, nombre FROM usuarios", conn);
        var reader = cmd.ExecuteReader();
        while (reader.Read()) {
            Console.WriteLine(reader["id"] + " - " + reader["nombre"]);
        }
        conn.Close();
    }
}`
    },
    output: "1 - Ana\n2 - Luis"
  },
  {
    category: 17,
    categoryTitle: "Base de datos",
    id: "17.3",
    title: "INSERT",
    code: {
      php: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=mi_base", "root", "");
$stmt = $pdo->prepare("INSERT INTO usuarios (nombre, edad) VALUES (?, ?)");
$stmt->execute(["Carlos", 25]);
echo "Insertado, ID: " . $pdo->lastInsertId() . "\\n";`,
      python: `import sqlite3
conn = sqlite3.connect("mi_base.db")
cursor = conn.cursor()
cursor.execute("INSERT INTO usuarios (nombre, edad) VALUES (?, ?)", ("Carlos", 25))
conn.commit()
print(f"Insertado, ID: {cursor.lastrowid}")
conn.close()`,
      javascript: `const Database = require("better-sqlite3");
const db = new Database("mi_base.db");
const result = db.prepare("INSERT INTO usuarios (nombre, edad) VALUES (?, ?)").run("Carlos", 25);
console.log("Insertado, ID: " + result.lastInsertRowid);`,
      typescript: `import Database from "better-sqlite3";
const db = new Database("mi_base.db");
const result = db.prepare("INSERT INTO usuarios (nombre, edad) VALUES (?, ?)").run("Carlos", 25);
console.log("Insertado, ID: " + result.lastInsertRowid);`,
      java: `import java.sql.*;
public class Main {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/mi_base", "root", "");
        PreparedStatement ps = conn.prepareStatement("INSERT INTO usuarios (nombre, edad) VALUES (?, ?)", Statement.RETURN_GENERATED_KEYS);
        ps.setString(1, "Carlos");
        ps.setInt(2, 25);
        ps.executeUpdate();
        ResultSet rs = ps.getGeneratedKeys();
        if (rs.next()) System.out.println("Insertado, ID: " + rs.getInt(1));
        conn.close();
    }
}`,
      csharp: `using System;
using System.Data.SqlClient;
class Program {
    static void Main() {
        var conn = new SqlConnection("Server=localhost;Database=mi_base;User Id=sa;Password=;");
        conn.Open();
        var cmd = new SqlCommand("INSERT INTO usuarios (nombre, edad) VALUES (@n, @e); SELECT SCOPE_IDENTITY();", conn);
        cmd.Parameters.AddWithValue("@n", "Carlos");
        cmd.Parameters.AddWithValue("@e", 25);
        var id = cmd.ExecuteScalar();
        Console.WriteLine("Insertado, ID: " + id);
        conn.Close();
    }
}`
    },
    output: "Insertado, ID: 3"
  },
  {
    category: 17,
    categoryTitle: "Base de datos",
    id: "17.4",
    title: "UPDATE",
    code: {
      php: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=mi_base", "root", "");
$stmt = $pdo->prepare("UPDATE usuarios SET edad = ? WHERE nombre = ?");
$stmt->execute([30, "Carlos"]);
echo "Filas actualizadas: " . $stmt->rowCount() . "\\n";`,
      python: `import sqlite3
conn = sqlite3.connect("mi_base.db")
cursor = conn.cursor()
cursor.execute("UPDATE usuarios SET edad = ? WHERE nombre = ?", (30, "Carlos"))
conn.commit()
print(f"Filas actualizadas: {cursor.rowcount}")
conn.close()`,
      javascript: `const Database = require("better-sqlite3");
const db = new Database("mi_base.db");
const result = db.prepare("UPDATE usuarios SET edad = ? WHERE nombre = ?").run(30, "Carlos");
console.log("Filas actualizadas: " + result.changes);`,
      typescript: `import Database from "better-sqlite3";
const db = new Database("mi_base.db");
const result = db.prepare("UPDATE usuarios SET edad = ? WHERE nombre = ?").run(30, "Carlos");
console.log("Filas actualizadas: " + result.changes);`,
      java: `import java.sql.*;
public class Main {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/mi_base", "root", "");
        PreparedStatement ps = conn.prepareStatement("UPDATE usuarios SET edad = ? WHERE nombre = ?");
        ps.setInt(1, 30);
        ps.setString(2, "Carlos");
        int filas = ps.executeUpdate();
        System.out.println("Filas actualizadas: " + filas);
        conn.close();
    }
}`,
      csharp: `using System;
using System.Data.SqlClient;
class Program {
    static void Main() {
        var conn = new SqlConnection("Server=localhost;Database=mi_base;User Id=sa;Password=;");
        conn.Open();
        var cmd = new SqlCommand("UPDATE usuarios SET edad = @e WHERE nombre = @n", conn);
        cmd.Parameters.AddWithValue("@e", 30);
        cmd.Parameters.AddWithValue("@n", "Carlos");
        int filas = cmd.ExecuteNonQuery();
        Console.WriteLine("Filas actualizadas: " + filas);
        conn.Close();
    }
}`
    },
    output: "Filas actualizadas: 1"
  },
  {
    category: 17,
    categoryTitle: "Base de datos",
    id: "17.5",
    title: "DELETE",
    code: {
      php: `<?php
$pdo = new PDO("mysql:host=localhost;dbname=mi_base", "root", "");
$stmt = $pdo->prepare("DELETE FROM usuarios WHERE nombre = ?");
$stmt->execute(["Carlos"]);
echo "Filas eliminadas: " . $stmt->rowCount() . "\\n";`,
      python: `import sqlite3
conn = sqlite3.connect("mi_base.db")
cursor = conn.cursor()
cursor.execute("DELETE FROM usuarios WHERE nombre = ?", ("Carlos",))
conn.commit()
print(f"Filas eliminadas: {cursor.rowcount}")
conn.close()`,
      javascript: `const Database = require("better-sqlite3");
const db = new Database("mi_base.db");
const result = db.prepare("DELETE FROM usuarios WHERE nombre = ?").run("Carlos");
console.log("Filas eliminadas: " + result.changes);`,
      typescript: `import Database from "better-sqlite3";
const db = new Database("mi_base.db");
const result = db.prepare("DELETE FROM usuarios WHERE nombre = ?").run("Carlos");
console.log("Filas eliminadas: " + result.changes);`,
      java: `import java.sql.*;
public class Main {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/mi_base", "root", "");
        PreparedStatement ps = conn.prepareStatement("DELETE FROM usuarios WHERE nombre = ?");
        ps.setString(1, "Carlos");
        int filas = ps.executeUpdate();
        System.out.println("Filas eliminadas: " + filas);
        conn.close();
    }
}`,
      csharp: `using System;
using System.Data.SqlClient;
class Program {
    static void Main() {
        var conn = new SqlConnection("Server=localhost;Database=mi_base;User Id=sa;Password=;");
        conn.Open();
        var cmd = new SqlCommand("DELETE FROM usuarios WHERE nombre = @n", conn);
        cmd.Parameters.AddWithValue("@n", "Carlos");
        int filas = cmd.ExecuteNonQuery();
        Console.WriteLine("Filas eliminadas: " + filas);
        conn.Close();
    }
}`
    },
    output: "Filas eliminadas: 1"
  },

  // ==================== Categoria 18: Expresiones regulares ====================
  {
    category: 18,
    categoryTitle: "Expresiones regulares",
    id: "18.1",
    title: "Validar patron",
    code: {
      php: `<?php
$email = "usuario@correo.com";
if (preg_match('/^[\\w.-]+@[\\w.-]+\\.\\w+$/', $email)) {
    echo "Email valido\\n";
} else {
    echo "Email invalido\\n";
}`,
      python: `import re
email = "usuario@correo.com"
if re.match(r'^[\\w.-]+@[\\w.-]+\\.\\w+$', email):
    print("Email valido")
else:
    print("Email invalido")`,
      javascript: `let email = "usuario@correo.com";
let regex = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
if (regex.test(email)) {
    console.log("Email valido");
} else {
    console.log("Email invalido");
}`,
      typescript: `let email: string = "usuario@correo.com";
let regex: RegExp = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;
if (regex.test(email)) {
    console.log("Email valido");
} else {
    console.log("Email invalido");
}`,
      java: `import java.util.regex.Pattern;
public class Main {
    public static void main(String[] args) {
        String email = "usuario@correo.com";
        boolean valido = Pattern.matches("^[\\\\w.-]+@[\\\\w.-]+\\\\.\\\\w+$", email);
        if (valido) {
            System.out.println("Email valido");
        } else {
            System.out.println("Email invalido");
        }
    }
}`,
      csharp: `using System;
using System.Text.RegularExpressions;
class Program {
    static void Main() {
        string email = "usuario@correo.com";
        bool valido = Regex.IsMatch(email, @"^[\\w.-]+@[\\w.-]+\\.\\w+$");
        if (valido) {
            Console.WriteLine("Email valido");
        } else {
            Console.WriteLine("Email invalido");
        }
    }
}`
    },
    output: "Email valido"
  },
  {
    category: 18,
    categoryTitle: "Expresiones regulares",
    id: "18.2",
    title: "Buscar coincidencias",
    code: {
      php: `<?php
$texto = "hay 3 gatos y 5 perros";
preg_match_all('/\\d+/', $texto, $matches);
echo "Numeros encontrados: " . implode(", ", $matches[0]) . "\\n";`,
      python: `import re
texto = "hay 3 gatos y 5 perros"
numeros = re.findall(r'\\d+', texto)
print("Numeros encontrados: " + ", ".join(numeros))`,
      javascript: `let texto = "hay 3 gatos y 5 perros";
let numeros = texto.match(/\\d+/g);
console.log("Numeros encontrados: " + numeros.join(", "));`,
      typescript: `let texto: string = "hay 3 gatos y 5 perros";
let numeros: RegExpMatchArray | null = texto.match(/\\d+/g);
console.log("Numeros encontrados: " + numeros?.join(", "));`,
      java: `import java.util.regex.*;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        String texto = "hay 3 gatos y 5 perros";
        Matcher m = Pattern.compile("\\\\d+").matcher(texto);
        ArrayList<String> nums = new ArrayList<>();
        while (m.find()) nums.add(m.group());
        System.out.println("Numeros encontrados: " + String.join(", ", nums));
    }
}`,
      csharp: `using System;
using System.Text.RegularExpressions;
using System.Linq;
class Program {
    static void Main() {
        string texto = "hay 3 gatos y 5 perros";
        var matches = Regex.Matches(texto, @"\\d+");
        var nums = matches.Cast<Match>().Select(m => m.Value);
        Console.WriteLine("Numeros encontrados: " + string.Join(", ", nums));
    }
}`
    },
    output: "Numeros encontrados: 3, 5"
  },
  {
    category: 18,
    categoryTitle: "Expresiones regulares",
    id: "18.3",
    title: "Reemplazar con regex",
    code: {
      php: `<?php
$texto = "abc123def456";
$resultado = preg_replace('/\\d/', '#', $texto);
echo "Resultado: $resultado\\n";`,
      python: `import re
texto = "abc123def456"
resultado = re.sub(r'\\d', '#', texto)
print(f"Resultado: {resultado}")`,
      javascript: `let texto = "abc123def456";
let resultado = texto.replace(/\\d/g, "#");
console.log("Resultado: " + resultado);`,
      typescript: `let texto: string = "abc123def456";
let resultado: string = texto.replace(/\\d/g, "#");
console.log("Resultado: " + resultado);`,
      java: `public class Main {
    public static void main(String[] args) {
        String texto = "abc123def456";
        String resultado = texto.replaceAll("\\\\d", "#");
        System.out.println("Resultado: " + resultado);
    }
}`,
      csharp: `using System;
using System.Text.RegularExpressions;
class Program {
    static void Main() {
        string texto = "abc123def456";
        string resultado = Regex.Replace(texto, @"\\d", "#");
        Console.WriteLine("Resultado: " + resultado);
    }
}`
    },
    output: "Resultado: abc###def###"
  }
];
