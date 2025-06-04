// aqui podemos poner comentarios en una sola fila

/*ya 
puedo
poner
comentarios
multi-linea */

/* console.log  LA MANERA DE MOSTRAR COSAS EN CONSOLA */

console.log("HOLA MUNDO");

console.log(3 + 2);

console.log("hola mundo y amigos de funval");

let var1 = 12;

console.log(var1);

/* CREACION DE VARIABLES Y CONSTANTES */

// var
var pepito = "hola pepito"; //NO DEBE USARSE POR EL SCOPE GLOBAL Q TIENE
console.log(pepito);
// let
let juanito = "hola juanito";
console.log(juanito);
juanito = 77;
console.log(juanito);
//const
const pedrito = "hola pedrito";
console.log(pedrito);
// pedrito = "hola kevin"; NO SE PUEDE REASIGNAR UNA CONSTANTE!!!!!!
/* lower CAMEL CASE */
let apellidoPaterno;
let apellidoMaterno;
let apellidoPaternoAbuelo;

/* TIPOS DE DATOS PRIMITIVOS */
// TENEMOS 7 TIPOS DE DATOS PRIMITIVOS

/* STRING */
let nombre = "Kevin"; // string o cadena de texto
let apellido = "Rodriguez Calderon"; // se toma todos los caracteres incluyendo los espacios

/* NUMBER */
let enteros = 12; //enteros
let decimales = 45.5; //flotantes o decimales
let negativo = -15; //negativos

/* BOOLEAN */
let johan = true; //o es verdadero
let nojohan = false; // o es falso

/* UNDEFINED */
let indefinida;

/* NULL */
let valor_null = null;

/* symbol */
let simbolo = Symbol("numerico2");

/* BIG INT */
let numeroGrande = 21348734958439567349879813749812798347129847912847n;
let numeroGrande2 = BigInt(21348734958439567349879813749812798347129847912847);

console.log(typeof nombre);
console.log(typeof enteros);
console.log(typeof johan);
console.log(typeof indefinida);
console.log(typeof valor_null);
console.log(typeof simbolo);
console.log(typeof numeroGrande);

// 1. Escribe un comentario en una línea
//dfsdfsdfsdf

// 2. Escribe un comentario en varias líneas
/*asdasdasd
asdasdasdasd
sadasdasd
sdasdasdasd */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let miNombre = "alan";
let edad = 29;
let isHumano = true;
let sinDefinir
let nulo = null;


// 4. Imprime por consola el valor de todas las variables
console.log(miNombre, edad, isHumano, sinDefinir, nulo)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof miNombre, typeof edad, typeof isHumano, typeof sinDefinir, typeof nulo)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
miNombre = "yoel";
edad = 30;
isHumano = false;


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

miNombre = 17;
edad = "treinta";
isHumano = "no";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse