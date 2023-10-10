/**
 * Funciones
 * Son un conjunto de sentencias que podemos utilizar para realizar ciertas acciones específicas dentro de un programa,
 * Ademas, pueden ser guardada en variables como un valor.
 */
// --------------------------- //
// DECLARATIVAS -- [function() {  }]
// function nombreDeLaFuncion(params) {
    // cuerpo de nuestra funcion;
// }
//nombreDeLaFuncion(params);
function saludar(nombre) {
    console.log(`Hola, soy ${nombre}!`);
}
saludar('Facundo');

function saludo(nombre) {
    return `Hola, soy ${nombre}!`;
}
var saludar = saludo('Facu');
console.log(saludar);
console.log(saludo('Facundo'));

// --------------------------- //
// EXPRESION (o Anonimas) --[variable = function() {  }]
var suma = function(a, b) {
    return a + b;
}
console.log(suma(2,5));

// --------------------------- //
// ARROW FUNCTION -- [variable = () => {    }]
// opcion 1: para funciones con un cuerpo más amplio
var resta = (a,b) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a - b;
    } else {
        return 'Error: Solo se puede restar números.';
    }
};
console.log(resta(4,'2'));
// opcion 2: para funciones de pocas líneas
var multiplicar = (a,b) => a * b;
console.log(multiplicar(3,2));