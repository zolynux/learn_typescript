# Aprender typescript desde cero en YouTube

---

¡Claro! TypeScript es un lenguaje de programación desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript que agrega tipado estático y algunas características adicionales que facilitan el desarrollo de aplicaciones grandes y complejas. Aquí hay una introducción básica a TypeScript:

### 1. **Qué es TypeScript**
TypeScript es un lenguaje que se transpila a JavaScript. Esto significa que el código TypeScript se convierte en JavaScript antes de ser ejecutado en el navegador o en un entorno de Node.js. TypeScript agrega tipos estáticos, lo que ayuda a detectar errores en tiempo de compilación en lugar de en tiempo de ejecución.

### 2. **Instalación**
Para comenzar a usar TypeScript, primero necesitas instalarlo. Esto se puede hacer a través de npm (Node Package Manager):

```bash
npm install -g typescript
```

Después de instalar TypeScript, puedes verificar la instalación y la versión utilizando el siguiente comando:

```bash
tsc --version
```

### 3. **Primer Archivo TypeScript**
Crea un archivo con extensión `.ts` (por ejemplo, `app.ts`) y escribe el siguiente código:

```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "World";

console.log(greeter(user));
```

### 4. **Compilación**
Para convertir el archivo TypeScript (`app.ts`) a JavaScript, usa el comando `tsc`:

```bash
tsc app.ts
```

Esto generará un archivo `app.js` que contiene el JavaScript equivalente.

### 5. **Tipos Básicos**
TypeScript agrega varios tipos básicos que no están presentes en JavaScript:

- **Tipos Primitivos**: `boolean`, `number`, `string`, `null`, `undefined`
- **Array**: `number[]` o `Array<number>`
- **Tuplas**: `[string, number]`
- **Enum**: `enum Color {Red, Green, Blue}`
- **Any**: Permite desactivar el chequeo de tipos
- **Void**: Para funciones que no retornan un valor

### 6. **Interfaces**
Las interfaces son una forma de definir contratos en tu código, permitiendo una tipificación más estricta.

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "John", lastName: "Doe" };

console.log(greeter(user));
```

### 7. **Clases**
TypeScript soporta la programación orientada a objetos con clases y herencia.

```typescript
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "Doe");

console.log(greeter(user));
```

### 8. **Módulos**
TypeScript utiliza módulos para organizar y encapsular el código.

```typescript
// greeter.ts
export function greeter(person: string) {
    return "Hello, " + person;
}

// main.ts
import { greeter } from './greeter';

let user = "World";

console.log(greeter(user));
```

### 9. **Configuración de TypeScript**
Puedes configurar el compilador TypeScript mediante un archivo `tsconfig.json`. Este archivo permite definir las opciones de compilación.

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true
    }
}
```

### 10. **Herramientas y Ecosistema**
TypeScript se integra bien con muchas herramientas y frameworks populares, como React, Angular, Vue, y Node.js. Muchas IDEs y editores de texto como Visual Studio Code, WebStorm, y Sublime Text tienen un excelente soporte para TypeScript, ofreciendo características como autocompletado, refactorización y depuración.

### Beneficios de TypeScript

1. **Mejor Mantenimiento**: El tipado estático ayuda a encontrar errores temprano y facilita la refactorización.
2. **Escalabilidad**: TypeScript es ideal para proyectos grandes y equipos múltiples.
3. **Ecosistema y Herramientas**: Integración con IDEs, herramientas de construcción, y frameworks.
4. **Interoperabilidad**: Puedes usar bibliotecas JavaScript existentes sin problemas.

### Conclusión
TypeScript agrega poderosas características a JavaScript, permitiendo un desarrollo más robusto y mantenible. Aprender TypeScript puede mejorar significativamente la calidad de tu código y la productividad de tu equipo.

¿Te gustaría profundizar en algún aspecto específico de TypeScript?

---

## Modo Observador

El modo observador en TypeScript es una característica que permite a `tsc` (el compilador de TypeScript) vigilar los archivos `.ts` para detectar cambios y recompilarlos automáticamente. Esto es especialmente útil durante el desarrollo, ya que no necesitas ejecutar manualmente el comando de compilación cada vez que haces un cambio en tu código.

### Usar el Modo Observador

Para usar el modo observador, simplemente agrega la opción `-w` (o `--watch`) al comando `tsc`. Por ejemplo, si tienes un archivo `script.ts` y deseas que el compilador lo observe, ejecuta:

```bash
tsc script.ts -w
```

Cuando ejecutas este comando, `tsc` comienza a observar el archivo `script.ts` y cualquier otro archivo que dependa de él. Cada vez que guardas cambios en cualquiera de estos archivos, `tsc` los recompilará automáticamente.

### Ejemplo Práctico

Supongamos que tienes dos archivos:

**1. greeter.ts**

```typescript
export function greeter(person: string) {
    return "Hello, " + person;
}
```

**2. main.ts**

```typescript
import { greeter } from './greeter';

let user = "World";
console.log(greeter(user));
```

Para compilar estos archivos en modo observador, primero debes tener un archivo `tsconfig.json` que defina las opciones de compilación:

**tsconfig.json**

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist"
    },
    "include": ["./*.ts"]
}
```

Luego, ejecuta el siguiente comando en el terminal en el directorio donde se encuentra el `tsconfig.json`:

```bash
tsc -w
```

### Beneficios del Modo Observador

1. **Ahorro de Tiempo**: No necesitas ejecutar el comando de compilación manualmente después de cada cambio, lo que ahorra tiempo y facilita el flujo de trabajo.
2. **Feedback Inmediato**: Obtienes retroalimentación inmediata sobre errores de compilación, lo que te ayuda a corregirlos rápidamente.
3. **Mejora la Productividad**: Mantiene un ciclo de desarrollo más rápido y eficiente, ya que puedes concentrarte en escribir código sin preocuparte por la compilación.

### Salida de Consola

Cuando ejecutas `tsc -w`, verás una salida en la consola similar a esta:

```plaintext
> tsc -w
12:00:00 AM - File change detected. Starting incremental compilation...
12:00:02 AM - Compilation complete. Watching for file changes.
```

Cada vez que guardas un archivo, el compilador detecta el cambio y recompila automáticamente:

```plaintext
12:01:00 AM - File change detected. Starting incremental compilation...
12:01:02 AM - Compilation complete. Watching for file changes.
```

El archivo `tsconfig.json` es fundamental para cualquier proyecto de TypeScript. Este archivo permite configurar las opciones del compilador de TypeScript y especificar los archivos que se deben incluir en el proyecto. A continuación, se presenta una explicación detallada sobre la estructura y las opciones más comunes del archivo `tsconfig.json`.

### Estructura Básica de `tsconfig.json`

El archivo `tsconfig.json` es un archivo JSON que puede contener varias secciones. Aquí hay un ejemplo básico:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "sourceMap": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Sección `compilerOptions`

Esta sección contiene las opciones del compilador de TypeScript. Aquí están algunas de las opciones más comunes:

- **`target`**: Especifica la versión de JavaScript a la que se debe compilar el código. Ejemplos: `es5`, `es6`, `es2016`, `es2017`, etc.
  
  ```json
  "target": "es5"
  ```

- **`module`**: Especifica el sistema de módulos a utilizar. Ejemplos: `commonjs`, `amd`, `es6`, `esnext`.

  ```json
  "module": "commonjs"
  ```

- **`strict`**: Habilita todas las verificaciones estrictas de tipo. Esto incluye varias opciones como `strictNullChecks`, `noImplicitAny`, etc.

  ```json
  "strict": true
  ```

- **`esModuleInterop`**: Habilita la interoperabilidad de módulos ES para su uso con módulos CommonJS.

  ```json
  "esModuleInterop": true
  ```

- **`outDir`**: Especifica el directorio donde se colocarán los archivos JavaScript compilados.

  ```json
  "outDir": "./dist"
  ```

- **`rootDir`**: Especifica el directorio raíz de entrada de los archivos de origen.

  ```json
  "rootDir": "./src"
  ```

- **`sourceMap`**: Genera archivos `.map` para el código fuente, lo que facilita la depuración.

  ```json
  "sourceMap": true
  ```

### Sección `include`

Esta sección especifica los archivos y directorios que deben incluirse en el proyecto de TypeScript.

```json
"include": ["src/**/*"]
```

### Sección `exclude`

Esta sección especifica los archivos y directorios que deben excluirse del proyecto de TypeScript.

```json
"exclude": ["node_modules", "**/*.spec.ts"]
```

### Otras Opciones de `compilerOptions`

Aquí hay algunas otras opciones importantes que puedes encontrar en `compilerOptions`:

- **`lib`**: Especifica las bibliotecas que deben incluirse en la compilación. Por ejemplo, `["dom", "es2015", "es2017.object"]`.

  ```json
  "lib": ["dom", "es2015"]
  ```

- **`declaration`**: Genera archivos `.d.ts` que contienen las definiciones de tipo para el código compilado.

  ```json
  "declaration": true
  ```

- **`removeComments`**: Elimina los comentarios de los archivos JavaScript generados.

  ```json
  "removeComments": true
  ```

- **`noImplicitAny`**: Lanza un error cuando el compilador no puede inferir el tipo de una variable y la asigna a `any`.

  ```json
  "noImplicitAny": true
  ```

- **`strictNullChecks`**: Habilita la verificación estricta de null y undefined.

  ```json
  "strictNullChecks": true
  ```

- **`jsx`**: Soporte para archivos JSX en proyectos de React. Opciones: `react`, `react-native`, `preserve`.

  ```json
  "jsx": "react"
  ```

### Ejemplo Completo de `tsconfig.json`

Aquí tienes un ejemplo más completo que muestra varias de las opciones mencionadas:

```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "sourceMap": true,
        "declaration": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "removeComments": true,
        "lib": ["dom", "es2015"],
        "jsx": "react"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Conclusión

El archivo `tsconfig.json` es una herramienta poderosa que te permite configurar cómo TypeScript debe compilar tu proyecto. Proporciona una gran cantidad de opciones para ajustar el comportamiento del compilador, especificar qué archivos incluir y excluir, y más. Entender y configurar correctamente `tsconfig.json` es crucial para aprovechar al máximo las capacidades de TypeScript en tus proyectos.


### Conclusión

El modo observador de TypeScript es una herramienta poderosa que mejora significativamente la experiencia de desarrollo. Permite una compilación continua y automática de los archivos TypeScript, proporcionando un flujo de trabajo más eficiente y productivo.

---

## Tipos de datos en Typescript

¡Claro! TypeScript, al ser un superconjunto de JavaScript, incluye todos los tipos de datos disponibles en JavaScript y agrega algunos adicionales para mejorar la seguridad y la claridad del código. Aquí tienes un resumen de los principales tipos de datos en TypeScript:

### Tipos Primitivos

1. **Booleano (`boolean`)**
   Representa valores verdaderos y falsos.

   ```typescript
   let isDone: boolean = true;
   ```

2. **Números (`number`)**
   Representa tanto números enteros como de punto flotante.

   ```typescript
   let decimal: number = 6;
   let hex: number = 0xf00d;
   let binary: number = 0b1010;
   let octal: number = 0o744;
   ```

3. **Cadenas de texto (`string`)**
   Representa secuencias de caracteres.

   ```typescript
   let color: string = "blue";
   let fullName: string = `John Doe`;
   let age: number = 30;
   let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
   ```

4. **Arreglos (`Array`)**
   Representa una colección de elementos del mismo tipo.

   ```typescript
   let list: number[] = [1, 2, 3];
   let listGeneric: Array<number> = [1, 2, 3];
   ```

5. **Tuplas (`[type1, type2, ...]`)**
   Representa un arreglo con una cantidad fija de elementos de tipos específicos.

   ```typescript
   let x: [string, number];
   x = ["hello", 10]; // Correcto
   // x = [10, "hello"]; // Error
   ```

6. **Enums (`enum`)**
   Representa un conjunto de valores con nombre.

   ```typescript
   enum Color {Red, Green, Blue}
   let c: Color = Color.Green;
   ```

7. **Any (`any`)**
   Representa cualquier tipo. Útil cuando se trabaja con código de terceros o cuando se necesita deshabilitar la verificación de tipos.

   ```typescript
   let notSure: any = 4;
   notSure = "maybe a string instead";
   notSure = false; // OK
   ```

8. **Void (`void`)**
   Representa la ausencia de un tipo. Utilizado generalmente en las funciones que no retornan un valor.

   ```typescript
   function warnUser(): void {
       console.log("This is my warning message");
   }
   ```

9. **Null y Undefined (`null` y `undefined`)**
   Representan valores nulos o indefinidos.

   ```typescript
   let u: undefined = undefined;
   let n: null = null;
   ```

10. **Never (`never`)**
    Representa el tipo de valores que nunca ocurren. Utilizado para funciones que nunca retornan (como aquellas que lanzan excepciones o que tienen un bucle infinito).

    ```typescript
    function error(message: string): never {
        throw new Error(message);
    }
    ```

### Tipos de Datos Adicionales

1. **Objetos (`object`)**
   Representa tipos no primitivos, como funciones, arreglos, etc.

   ```typescript
   let obj: object = { name: "John", age: 30 };
   ```

2. **Uniones (`|`)**
   Permite que una variable tenga uno de varios tipos.

   ```typescript
   let id: number | string;
   id = 10; // Correcto
   id = "123"; // Correcto
   ```

3. **Alias de Tipo (`type`)**
   Permite crear un nombre para un tipo de datos.

   ```typescript
   type StringOrNumber = string | number;
   let sample: StringOrNumber;
   sample = "hello"; // Correcto
   sample = 10; // Correcto
   ```

4. **Intersecciones (`&`)**
   Combina múltiples tipos en uno solo.

   ```typescript
   interface Person {
       name: string;
   }

   interface Employee {
       id: number;
   }

   type EmployeePerson = Person & Employee;

   let emp: EmployeePerson = {
       name: "John",
       id: 123
   };
   ```

### Inferencia de Tipos

TypeScript es capaz de inferir el tipo de una variable basada en su valor inicial, lo que puede reducir la necesidad de anotaciones explícitas.

```typescript
let someValue = "this is a string"; // Inferido como string
```

### Anotaciones de Funciones

Puedes especificar tipos para los parámetros y el tipo de retorno de las funciones.

```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

### Interfaces y Clases

TypeScript permite definir estructuras de datos más complejas utilizando interfaces y clases.

**Interfaces:**

```typescript
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}
```

**Clases:**

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let dog = new Animal("Dog");
dog.move(10);
```

### Conclusión

TypeScript amplía el sistema de tipos de JavaScript, proporcionando mayor seguridad y herramientas para el desarrollo de aplicaciones robustas. Estos tipos ayudan a detectar errores temprano en el ciclo de desarrollo y a documentar mejor el código. 

Claro, ¿hay algún tipo de dato o característica específica de TypeScript sobre la que te gustaría profundizar? Puedo proporcionarte más detalles sobre temas como:

1. **Interfaces y Tipos**: Diferencias, uso avanzado, y cómo extenderlos.
2. **Clases y Herencia**: Cómo funcionan las clases, herencia, modificadores de acceso, y abstract classes.
3. **Generics**: Cómo usar tipos genéricos para crear componentes y funciones reutilizables.
4. **Decorators**: Qué son los decoradores, cómo funcionan y ejemplos de uso.
5. **Modules**: Cómo organizar y modularizar tu código usando import/export.
6. **Advanced Types**: Uso de mapped types, conditional types, y otras características avanzadas del sistema de tipos.
7. **Type Guards**: Cómo refinar tipos usando type guards y type assertions.

---

