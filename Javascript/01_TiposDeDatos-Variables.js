/** Tipos de Datos:
 * - number,
 * - string,
 * - y lógicos (booleanos).
 */
console.log(27, 58)
console.log("Facundo")
console.log()
// undefined y null

//  Tipos de Datos Estructurales
// objeto - object
console.log({
    nombre: 'Facundo',
    edad: 26, 
    fechaDeNacimiento: null,
});

// lista - array
console.log(['Argentina', 'Brasil', 'Uruguay', 'Chile'])
console.log([21, true, {nombre:'Facundo'}, [1,2,3,4,5]])

//---------------//
/**Variables
 * 3 formas de definir variables:
 * - var,
 * - let,
 * - y const.
 */

// variables con VAR
var nombre = 'Facundo';
var x = 2;

var persona = {
    nombre: 'Facundo',
    apellido: 'Lorenzo',
    edad: 26,
    dirección: {
        calle: 'Ricardo Balbín',
        numero: 416,
    },
    localidad: {
        ciudad: 'Rawson',
        provincia: 'Chubut',
        pais: 'Argentina'
    },
    lenguajesConocidos: [
        'JAVA',
        'PHP',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'Axios',
        'Vue.Js',
        'Power BI'
    ]
};
console.log(persona);

var ciudad;
// console.log(ciudad); => imprime: undefinid
ciudad = 'Rawson';
// console.log(ciudad); => imprime: Rawson
ciudad = 13;
ciudad = 'Puerto Madryn';
console.log(ciudad); // => imprime: Puerto Madryn

// variables con LET

/* con let las variables van a funcionar dentro de un bloque de código,
en cambio con var van a funcionar de forma global dentro del archivo */
// Por ejemplo:
{
    let saludo = 'Hola, soy Facundo!';
    console.log(saludo)
}
/*console.log(saludo)*/ // si imprimo afuera, no va a funcionar

// variables con CONST
/* Son variables que no se pueden modificar a lo largo del archivo
y deben estar definidas cuando se crean. */
// Por ejemplo:
const PI = 3.15;
console.log(PI)
/*const PI;
console.log(PI)*/ // esta última me va a dar error

// VAR es la unica que nos permite llamar alguna variable dentro de otras variables.
// Por ejemplo:
var presentación = `Hola,
mi nombre es ${nombre}!`;
console.log(presentación);