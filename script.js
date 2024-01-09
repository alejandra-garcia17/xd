//1

function sum(x, y) {
    return x + y;
}

//                                    LECCION TRES

// Acceso a personajes 

// Puede acceder a un carácter específico en una cadena utilizando la sintaxis de corchetes [].

// Debes proporcionar el índice del personaje al que deseas acceder, comenzando desde 0.

// Tomemos un ejemplo donde la variable languagetiene el valor: "JavaScript". Así es como accedes 
// al primer personaje, al segundo y al tercero:

const language1 = "JavaScript";

language1[0]; //first character
language1[1]; //second character
language1[2]; //third character

// Si desea depurar su código y ver el resultado language[1]en la consola, debe registrarlo en la 
// consola de la siguiente manera:

console.log(language1[1]);

// Combinándolo con largo
// También puede combinar el acceso al carácter con la propiedad .length . Entonces, usando la 
// misma languagevariable, así es como se obtiene el penúltimo carácter:


const language2 = "JavaScript";

language2[ language2.length - 2 ]; // "p" porque es el penúltimo carácter de "JavaScript"

// Tenga en cuenta que esto language[ language.length ]se debe undefineda que el acceso a los 
// caracteres comienza en 0.
// Entonces, para una cadena de 9 caracteres, 8 es la posición del último carácter.

// Tenga en cuenta que language[ language.length ] será indefinido porque el acceso a caracteres 
// comienza en 0.
// Así que para una cadena de 9 caracteres, 8 es la posición del último carácter.

// El .at(index)método
// Desde 2022, JavaScript ahora tiene un .at()método que lee el carácter en un índice determinado, 
// que también puede ser negativo.

// Echemos un vistazo a algunos ejemplos:

const language3 = "JavaScript";
language3.at(0); // "J"
language3.at(1); // "a"
language3.at(-1); // "t"
language3.at(-2); // "p"

// El caso de uso principal del .at()método son los índices negativos, lo que lo hace más fácil que 
// depender de la .lengthpropiedad. Sin embargo, puede utilizar el enfoque que prefiera.

// Cuando se especifica un índice negativo, se empieza a contar desde el final. -1es el último 
// carácter, -2es el anterior, etc.

// Puede continuar usando la sintaxis de corchetes para todos los demás casos de uso, sabiendo que 
// language[-1]devuelve undefinido. Entonces, siempre que quieras usar un índice negativo, debes 
// usar el .at()método.

// JSDoc
// A estas alturas, probablemente hayas notado que la mayoría de los desafíos comienzan con algunos 
// comentarios como este:

/**
   @param {string} name
 */

// Estos comentarios se utilizan para mejorar su experiencia de codificación. Le permiten al editor 
// de código saber qué métodos sugerirle mientras escribe. Entonces puedes ignorar estos comentarios. 
// Nunca tendrás que cambiarlos ni agregarlos y no afectan las pruebas.

// ¿Qué es el "Uso de muestra"?
// También habrás notado que cada desafío tiene un código de uso de muestra al final. Por ejemplo, para la función 
// getCharCount, teníamos:

// Sample usage - do not modify
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15

// El objetivo del uso de muestra es mostrarle las diversas formas en que esperamos llamar a la función. A veces, 
// le mostramos el resultado esperado junto a él en un comentario.

// Tenga en cuenta que en las pruebas terminamos llamando a su función con más ejemplos que no son visibles en el 
// código de muestra. El objetivo de esto es asegurarse de haber proporcionado una respuesta correcta que funcione en 
// varios escenarios, no solo en uno o dos escenarios.

// Resumen
// - Los corchetes [index]se utilizan para acceder a un índice específico desde una cadena.
// - El índice comienza en 0. Entonces el primer carácter es el índice 0.
// - Puedes combinarlo con la longitud de una cadena para colocar otro carácter en otra posición.
// - El .at()método le permite leer un carácter en un índice (que también puede ser negativo).

// Ejercicio 1
function getFirstCharacter(name) {
    return name[0]
    }
    // Sample usage do not modify
    console.log(getFirstCharacter("Amsterdam")); // "A"
    console.log(getFirstCharacter("Japan")); // "J"

// ejercicio 2 
/** Curso
 * @param {string} name
 */
function getLastCharacter(name) {
    return name.at(-1);
    // alternatively:
    // return name[name.length - 1];
}

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

//mio
function getLastCharacter(name) {
    return name[name.length - 1 ];
    }
    
    // Sample usage - do not modify
    console.log(getLastCharacter("Sam")); // "m"
    console.log(getLastCharacter("Alex")); // "x"
    console.log(getLastCharacter("Charley")); // "y"

//                    SUB CADENA
// Una subcadena es una parte o porción de una cadena. Por ejemplo, "rain" es una subcadena de la cadena "brain" porque 
// puedes obtenerla "rain" tomando los últimos 4 caracteres.

// Cuando se trabaja con cadenas, a menudo es necesario obtener algunos caracteres de una cadena en lugar de todos. Por 
// eso utilizamos el substringmétodo.

// Firma de subcadena
// Una firma de función le brinda una explicación de los parámetros que debe pasar para ese método. Echemos un vistazo a 
// la firma de substring:

someString.substring(indexStart, indexEnd)

// Esto significa que cuando llamas a una subcadena, puedes darle 2 parámetros, el primero para indexStarty el segundo 
// para indexEnd.

// - indexStart: la posición del primer carácter que deseas incluir
// - indexEnd: la posición del primer carácter que deseas ignorar
// Esto significa que un indexEnd de 5 solo incluirá hasta el carácter en la posición 4 .

// La combinación de estos 2 te dará una subcadena.

// Tomemos un ejemplo con una variable nombrada languagecon un valor JavaScripty obtengamos la subcadena con indexStart 
// de 1 y indexEnd de 4 . Esto devolverá una cadena formada por todos los caracteres de las posiciones 1 a 3 porque 4 es 
// el primer carácter que se ignora:

// El resultado de dicha subcadena es "ava".

// Así es como lo escribirías en JavaScript:


const language4 = "JavaScript";
language4.substring(1, 4); //"ava"

// Parámetros opcionales
// El indexEnd parámetro es opcional, lo que significa que puede pasar indexStart y asumirá que indexEndes la misma que 
// la longitud de la cadena. He aquí un ejemplo:


language.substring(4); //"Script"

// Se asumió que indexEndes la longitud de la cadena ( 10 en este ejemplo).

// Nota heredada
// Si ya conoce un poco de JavaScript, es posible que haya utilizado otro método que obtenga un resultado similar. Puede 
// encontrar el nombre de la función a continuación, pero no recomendamos que la use porque está en desuso.

// - No utilice este .substrmétodo, ya que está en desuso y funciona de manera diferente. Utilice siempre el .substring 
// método.

// Resumen
// - Una subcadena es una parte o porción de una cadena.
// - string.substring(indexStart, indexEnd)se utiliza para devolver una parte de la cadena.
// - indexStart : la posición del primer carácter que desea incluir .
// - indexEnd : la posición del primer carácter que desea ignorar .
// - el argumento indexEnd es opcional, lo que significa que puede omitirlo.

//Ejercicio 1
function skipFirstCharacter(text) {
    return text.substring(1)
    }
    
    // Sample usage - do not modify
    console.log(skipFirstCharacter("Xcode")); // "code"
    console.log(skipFirstCharacter("Hello")); // "ello"
// Ejercicio 2
export function getDescription(text) {
    return text.substring(0, 10);
}

//                                                   Operador plus 

// Buen trabajo al terminar tu primer desafío del mundo real. Revisaremos este proyecto de elipsis de texto varias veces 
// en los siguientes capítulos para mejorarlo.

// En JavaScript, el operador más (+) se comportará de manera diferente según los tipos de valores con los que lo use.

// Ya has visto que te 1 + 3 devolverá el número 4.

// Sin embargo, también puedes usar +para concatenar 2 cadenas, lo que significa fusionarlas en 1 cadena.

// He aquí un ejemplo:
"Hello" + "World" //"HelloWorld"

// Devolverá una cadena: "HelloWorld". Esto sería útil si desea concatenar 2 o más cadenas. Por ejemplo:

let prefix = "Mrs.";
let name1 = "Sam";
let string = prefix + " " + name1; // "Mrs. Sam"

// También es posible hacer lo anterior con la interpolación de cadenas, que se trata en la siguiente lección.

// += operador
// Digamos que tiene el siguiente código:

let name2 = "Sam";
name2 = name2 + " Blue";
console.log(name2); // "Sam Blue"

// Puedes reescribir el name = name + de una manera más corta usando el += operador:

let name3 = "Sam";
name3 += " Blue";
console.log(name3); // "Sam Blue"

// Resumen de la lección
// - El + operador se utiliza para sumar 2 números.
// - El + operador se utiliza para concatenar 2 cadenas.

//EJERCICIO 1
function concatInitials(firstNameInitial, lastNameInitial) {
    // Concatena las iniciales y devuelve el resultado
    return firstNameInitial + lastNameInitial;
}

// Ejemplo de uso
console.log(concatInitials("J", "D")); // Esto imprimirá "JD" en la consola
console.log(concatInitials("S", "B")); // Esto imprimirá "SB" en la consola

// ejercicio 2 - mio
export function getDescription(text) {
    // Toma los primeros 10 caracteres y añade puntos suspensivos
    const shortenedText = text.substring(0, 10);
    return shortenedText + '...';
}

// Ejemplo de uso
console.log(getDescription("Write something")); // Esto imprimirá "Write som..." en la consola
console.log(getDescription("Hello")); // Esto imprimirá "Hello....." en la consola

// curso
export function getDescription(text) {
    return text.substring(0, 10) + "...";
}

//                                              Cadenas de plantilla 

// Ya sabes que puedes crear cadenas con comillas dobles o comillas simples, pero como ya sabes, estas cadenas no admiten 
// interpolación.

// Sin embargo, las cadenas de plantilla admiten la interpolación y otras funciones ingeniosas.

// Tu primera cadena de plantilla

`This is a template string`

// La única diferencia es que las cadenas de plantilla comienzan y terminan con un `carácter de comilla invertida.

// La comilla invertida está encima de la tecla de tabulación en las distribuciones de teclado internacionales. Para 
// otros teclados, consulte estos hilos para Windows/Linux y Mac y busque la distribución de su teclado.

// Cadenas multilínea
// A diferencia de las cadenas de comillas simples y dobles, las cadenas de plantilla pueden abarcar varias líneas. He 
// aquí un ejemplo:

let text1 = `This is a multiline
string that
just works!`

// Mientras que esto no habría sido posible con una cadena normal (comillas simples o dobles).

// Interpolación
// ¡Las cadenas de plantillas admiten la interpolación! Esto significa que puedes escribir una variable en tu cadena y 
// obtener su valor. La sintaxis es sencilla: envuelve el nombre de tu variable con un signo de dólar y llaves. Tomemos 
// un ejemplo donde tenemos una variable language con un valor de JavaScript.


let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";

// Recuerde que la interpolación de cadenas sólo funciona con comillas invertidas . Si alguna vez lo intentas y no 
// funciona, verifica que estés usando comillas invertidas en lugar de comillas simples o dobles.

// Cómo escribir una cadena multilínea en JavaScript
const text2 = `Using the backtick character
you can define a string that
spans multiple lines.`;

// Cómo interpolar en JavaScript
const name = "John";

console.log(`Welcome ${name}.
You have ${2 * 5} new notifications!`);

// Resumen
// - Una cadena de plantilla es una cadena creada con el carácter de acento grave:`
// - Las cadenas de plantilla pueden abarcar varias líneas
// - Las cadenas de plantilla admiten la interpolación con la ${variableName} sintaxis.

// EJERCICIO 1
function sayHello(name) {
    return `Hello ${name}`
    }
    // Sample usage do not modify
    console.log(sayHello("Alex")); // "Hello Alex"
    console.log(sayHello("Sam")); // "Hello Sam"

// ejercicio 2
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Sample usage - do not modify
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

// ejercicio 3
function getMultilineString() {
    return `I am learning JavaScript
and I found it to be
quite fun!`;
}

// Sample usage - do not modify
console.log(getMultilineString());

// ejercicio 4

export function renderTableRow(label, value) {
    console.log(label, value);
    return `<tr>
    <td>${label}</td>
    <td>${value}</td>
</tr>`;
}

//ejercicio 5

function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"


