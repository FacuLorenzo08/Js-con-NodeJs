/**
 * Ciclos
 */
// --------------------------- //
// WHILE ( condicion que debe validar los ciclos ) {   }
// var contador = 0;
// while (contador <= 100) {
//     console.log("Hola mundo!!");
// } Obtenemos un bucle infinito, que no es lo que queremos
// var contador = 0;
var contador = 11;
while (contador <= 10) {
    console.log(`Hola mundo!! ${contador++}`);
    // contador = 1;
}

// --------------------------- //
// DO { } WHILE ( condicion que debe validar los ciclos )
var contador = 11;
do {
    console.log(`Hola mundo!! ${contador++}`);
    // contador += 1
} while (contador <= 5);
/* se imprime una vez y luego no repite porque la condición no la cumple,
diferente al anterior que directamente no lo imrpimiría */

// FOR (expresiónInicial; expresiónCondicional; expresiónDeActualización){  }
for (let i = 0; i <= 5; i++) {
    console.log(`Hola mundo!! ${i}`);
}

// --------------------------- //
// FOR - IN (variable operador:IN objeto) { }
var persona = {
    nombre: 'Facundo',
    apellido: 'Lorenzo',
    edad: 26,
    dirección: {
        calle: 'Ricardo Balbín',
        numero: 416,
    },
};
for (let clave in persona) { // in nos va a entregar un resultado booleano
    console.log(clave, persona[clave]);
}

// --------------------------- //
// FOR - OF (variable operador:OF objeto iterable) { }
var arreglo = [1,2,3,4,5];
var persona = {
    nombre: 'Facundo',
    apellido: 'Lorenzo',
    edad: 26,
};
var nombre = "Facundo";
// for (let valor of nombre) { // Nombre si puede ir, pero no persona. Tiene que ser un arreglo o un string
for (let valor of arreglo) {
    console.log(valor);
};
