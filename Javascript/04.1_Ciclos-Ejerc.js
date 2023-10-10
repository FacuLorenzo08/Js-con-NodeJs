/** Ejercicios - Ciclos
 * 1.1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
Pista: anidamiento.
 * 2.Realice el equivalente con la declaración while y do-while
 */

var a = 2
do {
    var b = 0;
    console.log("--------------");
    console.log(`Tabla del ${a}:`);
    do {
        console.log(`${a}*${b} = ${a*b}`);
        b ++;
    } while (b <= 12);
    a ++;
} while (a <=12);