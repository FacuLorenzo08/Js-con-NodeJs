/**
 * ASINCRONISMO
 * El asincronismo es la capacidad de ejecutar código sin bloquear el flujo principal de la aplicación, es decir,
 * sin esperar a que una operación termine para continuar con la siguiente.
 * Permite que varias tareas progresen simultáneamente, aprovechando mejor los recursos disponibles y mejorando la experiencia de usuario
 */
// ---------------------//
/**
 * “Event loop” es un bucle infinito que se encarga de extraer las tareas de la cola de eventos y colocarlas en la pila de ejecución cuando ésta está vacía.
 */
// Por ejemplo
console.log('Tarea 1');
console.log('Tarea 2');
console.log('Tarea 3');
setTimeout(() => { console.log('Tarea 4'); }, 2000) // espera 2 segundos para ejecutar la acción, mientras tanto continua con las de abajo
console.log('Tarea 5');
console.log('Tarea 6');


// ---------------------//
/**
 * CALLBACKS
 * son funciones que se pasan como argumentos a otras funciones y se ejecutan cuando se cumple una condición o se recibe una respuesta.
 * son unas de las formas que nos permiten implementar el asincronismo en Js.
 */
// Ejemplo SIN Callbacks
var suma = (a,b) => {
    return a + b;
};
var resultado = suma(1,2,)
console.log(resultado);

// Ejemplo CON Callbacks
// utilizamos funciones que se pasan como parametro dentro de otras funciones
// callbacks = cb, es la forma de llamarlo comunmente
const suma = (a, b, cb) => cb(a + b);
const imprimir = (data) => console.log(data);
suma(1,2, imprimir);

// Ejemplo CON Callbacks 2
const getDataCb = (cb) => {
    setTimeout(() => {
        cb({
            nombre: "Facundo",
            apellido: "Lorenzo",
        })
    }, 3000);
};
const imprimirDataCb = (data) => console.log(data);
getDataCb(imprimirDataCb)


// ---------------------//
/**
 * PROMISES
 * son objetos que representan el resultado potencial de una operación asíncrona y permiten encadenar acciones posteriores.
 */
// si tuvieramos un error:
const getData = (cb, cbError) => {
    if(false) {
        setTimeout(() => {
            cb({
                nombre: "Facundo",
                apellido: "Lorenzo",
            })
        }, 3000);
    } else {
        cbError(new Error("ERROR! No se pudo ejecutar el código"))
    }
};
const imprimirData = (data) => console.log(data);
const errorHandler = (error) => console.log(error);
getData(imprimirData, errorHandler)

// ---------------------//
// ---------------------//