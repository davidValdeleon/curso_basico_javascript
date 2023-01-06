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


