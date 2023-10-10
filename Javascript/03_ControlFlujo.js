/**
 * Control de flujo
 */
// --------------------------- //
// Estructura IF
// if(condicion){ }
var llueve = false;
if (llueve) {
    console.log("Necesito un paragua.");
} else {
    console.log("Esta soleado.");
}

var adminsitrador = "administrador";
if (adminsitrador === "administrador") {
    console.log("Bienvenido al sistema.");
} else {
    console.log("Error de ingreso.");
}

var semaforo = "Verde";
if (semaforo = "verde") {
    console.log("Arrancar")
} else if (semaforo == "amarillo"){
    console.log("Listo")
} else if (semaforo == "rojo") {
    console.log("Motores apagados")
} else {
    console.log("Color no identificado")
}

// --------------------------- //
// SWITCH
var producto = "naranja";
switch (producto) {
    case "banana":
        // codigo
        console.log("las bananas cuestan $1000 cada kg.")
        // break; // sin el break, no corta y continua imprimiendo los siguientes console.log()
    case "naranja":
        // codigo
        console.log("las bananas y naranjas cuestan $1000 cada kg.")
        break;
    case "kiwi":
        // codigo
        console.log("los kiwis cuestan $1200 cada kg.")
        break;
    default:
        console.log("No disponemos de ese producto");
}