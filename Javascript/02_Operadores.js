/**
* Operadores de asignación
 */
// Operador de asignación (=)
var x = 2;
var z = true;

var y = 1;
var a = 2;
var b = 3;
var c = 4;
var d = 5;
// Operador de asignación de adición (+=)
b += a;
console.log(b)
// Operador de asignación de resta (-=)
x -= y;
console.log(x)
// Operador de asignación de multiplicación (*=)
y *= x;
console.log(y)
// Operador de asignación de división (/=)
a /= c;
console.log(a)
// Operador de asignación de residuo (%=)
c %= a;
console.log(c)
// Operador de asignación de exponenciación (**=)
d **= a;
console.log(d)

//---------------//
/**
 * Operadores de comparación
 * (siempre retornaran valores lógicos)
 */
// Operador igual ( == )
console.log(3 == 3); // true
console.log(3 == '3'); // true
console.log(3 == '2'); // false
// Operador no es igual ( != )
console.log(3 != 3); // false
// Operador estrictamente igual ( === )
console.log(3 === '3'); // false
// Operador desigualdad estricta ( !== )
console.log(3 !== '3'); // true
console.log(3 != '3'); // false
// Operadores >, >=, <, <=

//---------------//
/**
 * Operadores aritméticos
 * +, -, *, /, %, **
 * (siempre retornaran valores numéricos)
 */

// Operadores de incremento (++)
var numero = 0;
console.log(++numero); // incrementa e imprime: 1
var numero = 0;
console.log(numero++); // imprime: 0, pero incrementa un número para su próximo uso
console.log(numero); // ahora imprime: 1

//---------------//
/**
 * Operadores lógicos
 * AND = &&
 * OR = ||
 * NOT = !
 */
// --------------------------- //
// Operadores de cadema o concatenación (string + string)
var nombre = "Facundo";
var apellido = "Lorenzo";
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// --------------------------- //
// Operador condicional (condicion ? valor1 : valor2)
console.log(2 > 3 ? 'Es mayor' : 'Es menor');
console.log(2 > 1 ? 'Es mayor' : 'Es menor');

// --------------------------- //
// Operador de desestructuración
var persona = {
    nombre: 'Facundo',
    apellido: 'Lorenzo',
    edad: 26,
    dirección: {
        calle: 'Ricardo Balbín',
        numero: 416,
    }
};
var { nombre:facu, edad } = persona;
//console.log(nombre); // error
console.log(facu); // imprime el nombre: Facundo
console.log(edad);
console.log(persona);

// --------------------------- //
// Desestructuración de arreglos
var arreglo = [1,2,3,4,5]
var [primerNumero, segundo] = arreglo;
console.log(primerNumero);
console.log(segundo);

// --------------------------- //
// Operador de miembro o acceso de propiedad
var persona = {
    nombre: 'Facundo',
    apellido: 'Lorenzo',
    edad: 26,
    dirección: {
        calle: 'Ricardo Balbín',
        numero: 416,
    }
};
console.log(persona.nombre); // nos imprime: Facundo
// tambien se puede usar Notación por corchetes
console.log(persona["dirección"]["calle"]); // nos imprime: Ricardo Balbin
// Notación por corchetes en array
var arreglo = [1,2,3,4,5]
console.log(arreglo[1]); // nos imprime: 2

// --------------------------- //
// Opreación de determinación de tipo de dato ( typeof )
console.log(typeof "Facundo"); // nos imprime: string
console.log(typeof persona); // nos imprime: object
console.log(typeof arreglo); // nos imprime: object
console.log(typeof 21); // nos imprime: number
console.log(typeof true); // nos imprime: boolean