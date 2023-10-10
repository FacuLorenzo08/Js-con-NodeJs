/** Ejercicios - Control de Flujos
 * 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 * 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
 * - Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
 * - Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
 * - Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
 * - Si la compra supera los $50 el gasto de envío será gratuito
 * El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

// PUNTO 1, CON IF ELSE
var dia = "Lunes"; // dia = prompt("Ingrese el día de la semana en español para ser traducido:");
if (dia == 'lunes') {
    console.log('Monday');
} else if (dia == 'martes') {
    console.log('Tuesday');
} else if (dia == 'miercoles') {
    console.log('Wednesday');
} else if (dia == 'jueves') {
    console.log('Thursday');
} else if (dia == 'viernes') {
    console.log('Friday');
} else if (dia == 'sabado') {
    console.log('Saturday');
} else if (dia == 'domingo') {
    console.log('Sunday');
} else {
    console.log('El código ingresado no corresponde a un día semanal');
}

// PUNTO 1, CON SWITCH

// ------------------ //
// PUNTO 2, OPCION SWITCH
let valorCompra = true
let valorFinal = 50
switch (true){
    case ( valorFinal <= 10):
        valorFinal = valorFinal + 3,
        console.log(`El precio total sumando los $3 de envío es: $${valorFinal}`);
    break;
    case (valorFinal < 10, valorFinal < 20 ):
        valorFinal = valorFinal + 5
        console.log(`El precio total sumando los $5 de envío es: $${valorFinal} `)
    break;
    case (valorFinal < 20, valorFinal <= 50 ):
        valorFinal = valorFinal + 7
        console.log(`El precio total sumando los $7 de envío es: $${valorFinal} `)
    break;
    case (valorFinal > 50 ):
        valorFinal = valorFinal
        console.log(`El precio total a pagar es: $${valorFinal} (con envío gratis)`)
    break;
}

// PUNTO 2, OPCION ELSE IF
let valorIf = 51;
let valorFinalIf = 0;
let envio = 0;
if (valorIf <= 10){
    envio = 3
    valorFinalIf = valorIf + envio
    console.log(`El precio total a pagar, sumado $${envio} de envío, es: $${valorFinalIf}`)
} else if (valorIf > 10 && valorIf <=20){
    envio = 5
    valorFinalIf = valorIf + envio
    console.log(`El precio total a pagar, sumado $${envio} de envío, es: $${valorFinalIf}`)
}else if (valorIf > 20 && valorIf <= 50){
    envio = 7
    valorFinalIf = valorIf + envio
    console.log(`El precio total a pagar, sumado $${envio} de envío, es: $${valorFinalIf}`)
}else if (valorIf > 50 ){
    envio = 0
    valorFinalIf = valorIf
    console.log(`El precio total a pagar es: $${valorFinalIf}, con envío gratis`)
}