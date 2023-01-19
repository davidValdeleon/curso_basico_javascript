// VARIABLES (1)
var nombre = "David";

// Declarar
var edad;

//inicializar = Para eso se necesita poner un igual
edad = 30;

edad

// Estas son variables con cosas adentro

var elementos = ['computadora', 'celular'];

// Estas son variables con variables adentro que tienen diferentes asignaciones entre si

var persona = {
    nombre: 'David',
    edad: 30
}

//FUNCIONES (2)

//Funciones declarativas

// la funcion inicializa la operación y retorna un valor que en este caso es 3

function miFuncion() {
    return 3;
}

miFuncion();

// Funciones expresivas o expresadas

var miFuncion = function(a, b) {
    return a + b;
}

miFuncion();

function personaje (nombre, edad) {
    console.log (`hola soy ${nombre} y tengo ${edad} años`)
}

var personajeDos = function (nombre, edad) {
    console.log (`Hola soy ${nombre} y tengo ${edad} años`)
}


// HOISTING (3)

//Con las variables pasa cuando una variable no se ha declarado antes de ser usada, aparece el valor undefined

console.log(miNombre)

var miNombre = "David";

//Para funciones. En este caso se inicializa la función en cualquier momento, no importa si es antes o después de declararla.

hola();

function hola(){
    console.log("Hola " + miNombre);
}

//IF (4) Condicionales

if (false) {
    console.log("hello")
} else {
    console.log("Soy falso");
}

//Ejemplo de ua variable con condicional If donde si el usuario tiene

var edad = 18

if (edad === 18) {
    console.log("Puedes votar, sera tu primera votación");
} else if (edad >18) {
    console.log("Puedes votar");  
} else {
    console.log("No Puedes votar");  
}

// Otra forma de hacer condicionales

// No es necesario hacer toda una estructura de condicional para este tipo de función sencillas.

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No soy un uno";

// vamos a hacer un juego de piedra papel o tijera

// Primero se crea una constante con las opciones que se pueden escoger, luego se obtiene lo que el usuario escoja a partir de un prompt y por último se crea una opcion aleatoria por medio de Math.floor y el Math.random. Por ultimo se pone un if con los condicionales necesarios para poder validar quien gana o quien pierde

const options = ['piedra','papel', 'tijera']
const user = prompt('Elige piedra, papel o tijera');
const pc = options[Math.floor(Math.random() * options.length)];

if (user === pc){
    console.log("Empate");
} else if (
user === 'piedra' && pc === 'tijera' ||
user === 'papel' && pc === 'piedra' || 
user === 'tijera' && pc === 'papel'){
    console.log("ganaste");
} else {
    console.log("perdiste")
}

//SWITCH (5) 

var numero = 1;

switch(numero) {
    case 1:
        console.log("Soy uno!")
        break;
    case 10:
        console.log("Soy un diez!")
        break;
    case 100:
        console.log("Soy un cien!")
        break;
    default:
        console.log("No soy nada");
}

//Ahora el juego de piedra papel o tijera pero con el switch

//INTENTO 1

const options2 = ['piedra','papel', 'tijera']
const user2 = prompt('Elige piedra, papel o tijera');
const pc2 = 'piedra'
// const pc2 = options2[Math.floor(Math.random() * options2.length)];


switch(user2, pc2) {
    case 'piedra','piedra':
        console.log("empate")
        break;
    case 'papel','papel':
        console.log("empate")
        break;
    case 'tijera','tijera':
        console.log("empate")
        break;

    case 'piedra','tijera':
        console.log("ganaste")
        break;
    case 'papel','piedra':
        console.log("ganaste")
        break;
    case 'tijera','papel':
        console.log("ganaste")
        break;
    default:
        console.log("perdiste");
}

//INTENTO 2

const options3 = ['piedra','papel', 'tijera'];
const user3 = prompt('Elige piedra, papel o tijera');
const pc3 = 'piedra';
// options3[Math.floor(Math.random() * options3.length)];;


switch(user3 === pc3) {
    case 'piedra' === 'piedra'||'papel' === 'papel'||'tijera' === 'tijera':
        console.log("empate");
        break;
    case 'piedra' === 'tijera':
    case 'papel' === 'piedra':
    case 'tijera' === 'papel':
        console.log("ganaste");
        break;
    case 'piedra' === 'papel':
    case 'papel' === 'tijera':
    case 'tijera' === 'piedra':
        console.log("perdiste");
        break;
    
    default:
        console.log("opcion invalida");
}

//ARRAYS
// Los arrays son conjuntos de elementos que estan dentro de un objeto

var frutas = ['manzana', 'pera', 'banana'];

// Para llegar a cada uno de los elementos, se utilizan indicativos desde el 0 en adelante luego de llamar la variable, en este caso sería.

frutas [0];
// Esto llamara el elemento de 'manzana'

frutas [1];
// Esto llamara el elemento de 'manzana'

frutas [2];
// Esto llamara el elemento de 'banana'


// Por otro lado para saber cual es la longitud de los arrays, se puede utilizar el .length

console.log(frutas.length);

// Para agregar más elementos al array, se utiliza la variable .push()

var masFrutas = frutas.push('uvas');
//Luego de estó el array de frutas quedaria de la conformado por 'manzana', 'pera', 'banana''uvas'

// Ahora si quiero quitar el último elemento del array vamos a usar el .pop(), funcionaría de la siguiente manera

var quitarUltimaFruta = frutas.pop();
// De tal manera que al momento de ejecutarlo, dentro del array quedaría el siguiente contenido: 'manzana', 'pera', 'banana'

// Si quiero agregar más elementos pero quiero que aparezcan de primeras en la lista, vamos a usar el .unshift()

var nuevaLongitud = frutas.unshift('Limon');
//la lista quedaría de la siguiente manera 'Limon' 'manzana', 'pera', 'banana'

// Ahora bien, para eliminar el primer elemento de la fila de elementos se usa el .shift de la siguiente manera

var borrarFruta = frutas.shift('Limon');
//Esto solo elimina el primer elemento de cada fila, por más que cambiemos el nombre, siempre elimina el primero del array que le indiquemos

// Para obtener el index de los arrays con el nombre vamos a usar .indexOf("nombre") con el nomnbre que querramos traer

var posicion = frutas.indexOf('manzana');

//LOOPS FOR - FOR..OF

//En este caso los for sirven para recorrer arrays, en el siguiente ejemplo, el array es estudiantes

var estudiantes = ['Maria', 'Rosa', 'David', 'juan'];

//Luego se va a acrear la función que se va a ejecutar luego de recorrer el array

function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

//Por último se crea el ciclo for, donde la variable i se inicia con 0, luego se da la condición, donde se dice que se va a ejecutar el código, cada vez que i sea menor a la longitud de el array que en este caso es 'estudiantes' por lo tanto se utiliza estudiantes.length, por último se crea la condición que debe seguir el for luego de verificar que el número sea menor que la longitud del array y se haya ejecutado el código, en este caso, la condición que debe seguir es aumentar un número a la 'i' y volver a repetir todo el ciclo.

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//La segunda opción para operar un ciclo dentro de un array es a partir de un for.. of , esto se usa de la siguiente manera, se crea una variable en singular que servira cómo el index que se va a recorrer, luego se pone la palabra 'of' y por ultimo se pone el array que se va  a recorrer, en la medida de lo posible en plural, esto ayuda a minimizar la cantidad de código que vamos a escribir y nos ayuda a agilizar el proceso, en este caso no es necesario definir una variable 0 y poner un limite a esta variable cómo si se hace en el primer ejemplo del ciclo for, ahora bien, la variable en singular antes del 'of' sive para definir esa variable 'i' y para indicar que se va a detener el ciclo cuando ya no hayan más elementos dentro del array

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}



