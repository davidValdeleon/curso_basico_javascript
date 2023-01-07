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