/**
 * Manipulacion de Arreglos
 */
// --------------------------- //
// FOR EACH -- recibe una función de parametro y lo recorre
// array.forEach(element => {
// });
var letras = ['a','b','c','d','e'];
for (let i = 0; i < letras.length; i++) { // con letras.length obtenemos el número total de objetos dentro de un array o de una variable
    const element = letras[i];
    console.log(element);
}
letras.forEach(element => console.log(element));


// --------------------------- //
// PUSH / SHIFT / POP
var letras = ['a','b','c','d','e'];
letras.push('f'); // agregamos letra f
letras.shift(); // obtenemos pero elimina el primer elemento,
var primerLetra = letras.shift();// luego lo podemos almacenar en otra variable
letras.pop(); // obtenemos y, también elimina, el último elemento
console.log(primerLetra);
console.log(letras);


// --------------------------- //
// MAP
// este elemento es inmutable, transforma un arreglo y nos devuelve un nuevo arreglo, no lo modifica.
// por lo que lo debemos almacenar en una nueva variable
// tambien, map, debe retornar el elemento modificado
var estudiantes = ['Facundo', 'Sofia', 'Belen', 'Nahuel']
var asistencia = estudiantes.map((element) => {
    return {
        nombre: `${element}.`,
        curso: '1ro'
    }
})
console.log(estudiantes);
console.log(asistencia);

// error que suele ocurrir
var productos = [
    { nombre: 'camiseta', precio: 8000},
    { nombre: 'zapatilla', precio: 15000},
    { nombre: 'pantalon', precio: 12000}
];
/** var productosIVA = productos.map((producto) => {
 * producto.impuesto = producto.precio*0.21;
 * return producto
 * });
 * console.log(productos);
 */ //de esta forma estamos modificando la variable "productos", entonces:
var productosIVA = productos.map((producto) => {
    let iva = producto.iva;
    iva = producto.precio*0.21;
    return {
        ...producto,
        iva,
        precioFinal : iva + producto.precio,
    }
});
console.log(productos);
console.log(productosIVA);

// tambien podemos tomar solo un valor
var precios = productos.map((element) => element.precio)
console.log(precios);


// --------------------------- //
// FILTER
// metodo inmutable que nos ayuda a filtrar elementos dentro un arreglo que en base a una condición debe devolver un valor lógico
var estudiantes = [
    { nombre: 'Facundo', edad: 20, matriculado: true },
    { nombre: 'Sofia', edad: 17, matriculado: true },
    { nombre: 'Belen', edad: 21, matriculado: true },
    { nombre: 'Nahuel', edad: 22, matriculado: false },
    { nombre: 'Camila', edad: 16, matriculado: false },
];
var estudiantesMenores = estudiantes.filter((student) => student.edad < 18 && !student.matriculado);
console.log(estudiantesMenores);


// --------------------------- //
// REDUCE
// nos ayuda a reducir todo un array a un solo valor, puede ser num, string, booleano, etc.
// reduce((params1, params2) => )
var calificaciones = [3,6,8,5,9,10,8]
var suma = calificaciones.reduce((acumulador,calificacion) => acumulador + calificacion, 0);
// el 2do parametro es el estado inicial del acumulador, que debe iniciar en 0 para poder hacer la suma de las calificaciones
console.log(calificaciones);
console.log(suma);
var promedio = suma / calificaciones.length;
console.log(promedio);

//ejemplo 2: necesitamos que nos devuelva la cantidad de estudiantes que tienen la misma edad
var estudiantes = [
    { nombre: 'Facundo', edad: 20},
    { nombre: 'Sofia', edad: 17},
    { nombre: 'Belen', edad: 21},
    { nombre: 'Nahuel', edad: 20},
    { nombre: 'Camila', edad: 16},
    { nombre: 'Benja', edad: 16},
    { nombre: 'Benja', edad: 18},
    { nombre: 'Lio', edad: 20},
];
var resultado = estudiantes
    .map((estudiante) => estudiante.edad)
    .reduce((acumulador, edades) =>{
        if (edades >= 18) {
            acumulador.mayores += 1
        } else {
            acumulador.menores += 1
        }
        return acumulador
    },{mayores: 0, menores: 0})
console.log(estudiantes);
console.log(resultado);

var resultado = estudiantes.reduce((acumulador, persona) =>{
    if (!acumulador[persona.edad]) {
        acumulador[persona.edad] = 1
    } else {
        acumulador[persona.edad] += 1
    }
    return acumulador // es necesario el "return acumulador" porque si no, no nos devuelve nada
},{})
console.log(estudiantes);
console.log(resultado);

// ejemplo 3
var productos = [
    { nombre: 'camiseta', precio: 8000, totalVendido: 5},
    { nombre: 'zapatilla', precio: 15000, totalVendido: 5},
    { nombre: 'pantalon', precio: 12000, totalVendido: 5}
];
var ventas = productos.reduce((acumulador,producto) => {
    let ventaTotal = producto.precio * producto.totalVendido;
    acumulador[producto.nombre] = `Se recaudo: $ ${ventaTotal}`;
    return acumulador
},{})
console.log(productos);
console.log(ventas);


// --------------------------- //
// SOME / EVERY
// SOME: nos permitirá saber si alguno de los elementos que contiene un array cumple con una condicion especifica y nos retornará un array
var numeros = [1,2,3,4,5,6,7,8,9,10] //buscaremos si hay algun número par
var hayPares = numeros.some((num) => num % 2 === 0);
console.log(hayPares);

// EVERY: nos permitirá saber si todos los elementos de un array cumplen con una condicion especifica y nos retornará valor lógico
//buscaremos si todos son pares
var sonPares = numeros.every((num) => num % 2 === 0);
console.log(sonPares)


// --------------------------- //
// FIND / findIndex
// find: se va a encargar de buscar un solo elemento dentro de un array que coincida con una condición y nos lo va a retornar
// tener en cuenta, que nos va a retornar al primer elemento que coincida con la búsqueda. Diferencia que tiene con .filter()
var clientes = [
    { id: 1, nombre: 'Facundo',},
    { id: 2, nombre: 'Sofia',},
    { id: 3, nombre: 'Belen',},
    { id: 4, nombre: 'Nahuel',},
    { id: 5, nombre: 'Camila',},
    { id: 6, nombre: 'Facundo',},
];
var cliente = clientes.find((persona) => persona.nombre = "Facundo");
var clienteFilter = clientes.filter((persona) => persona.nombre === "Facundo");
console.log(cliente);
console.log(clienteFilter);

// findIndex se va a encargar de buscar un elemento dentro de un array que coincida con una condición y nos va a retornar su posicion
var posicion = clientes.findIndex((persona) => persona.nombre = "Facundo");
console.log(posicion); // nos imprime la posición
console.log(clientes[posicion]); // nos imprime el objeto con sus datos


// --------------------------- //
// INCLUDES
// esta funcion nos va ayudar a determinar si en un arreglo existe algun elemento especifico, y nos va a devolver un booleano
// una particularidad es que no va a recibir una función como parámetro sino que, el valor que queremos buscar en forma de string
var perros = ['milo', 'cuba', 'dibu', 'dexter'];
var resultado = perros.includes('cuba');
console.log(resultado);
console.log('Facundo'.includes('facu'));
// ejemplo 2, queremos realizar un buscador. Entonces utilizamos la función .includes() dentro de la función .filter()
var buscador = (params) => {
    let clientes = [
        { id: 1, nombre: 'Facundo',},
        { id: 2, nombre: 'Sofia',},
        { id: 3, nombre: 'Belen',},
        { id: 4, nombre: 'Nahuel',},
        { id: 5, nombre: 'Camila',},
        { id: 6, nombre: 'Facundo',},
    ];
    return clientes.filter((cliente) => cliente.nombre.includes(params))
}
console.log(buscador('Facundo'));


// --------------------------- //
// JOIN
// es un metodo que nos va ayudar a unir todos los elementos de un array y generar un string a partir de esa unión
var elementos = ['aire', 'fuego', 'agua'];
//var resultado = elementos.join("")
// puede, o no, recibir un parametro que separe los elementos del array, por default usará la coma
var resultado = elementos.join(" / ")
console.log(resultado);
// más ejemplos, si quisieramos trabajar con un archivo .csv
var clientes = [
    { id: 1, nombre: 'Facundo',},
    { id: 2, nombre: 'Sofia',},
    { id: 3, nombre: 'Belen',},
    { id: 4, nombre: 'Nahuel',},
    { id: 5, nombre: 'Camila',},
    { id: 6, nombre: 'Facundo',},
];
console.log(clientes.join());
console.log(Object.values({id:5, nombre:'Camila'}));
console.log(Object.keys({id:5, nombre:'Camila'}));
//var csvGenerator = (array, separator) => {
var csvGenerator = (array, separator = ",") => {
    let headers = Object.keys(array[0]).join(separator)
    let data = array.map((element) => Object.values(element).join(separator))
    console.log(headers.toUpperCase()); // pasamos los titulos a mayuscula
    data.forEach(element => console.log(element))
}
//csvGenerator(clientes, "/")
csvGenerator(clientes)


// --------------------------- //
// CONCAT / SORT / SLICE / SPLICE
// CONCAT es un metodo que nos permite concatenar dos arrays
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3 = array1.concat(array2);
var array3b = [...array1, ...array2]; // opcion 2
console.log(array3b);
console.log(array2);
console.log(array1);

// SORT es método de ordenamiento
console.log(array3.sort());
// ordena en base al código ASCII, nos puede ordenar los meses pero los números los ordena en base al primer dígito
// Ejemplo ASCII
//var meses = ['Dic', 'Nov', 'Ene', 'Mar', 'May', 'Jul', 'Jun', 'Feb', 'Ago', 'Sep', 'Oct', 'Abr'];
var nombres = ['Facundo','Sofia','Belen','Nahuel','Camila'] ;
console.log(nombres.sort()); // nos lo ordena por orden alfabetico
// Ejemplo No ASCII
var nums = [1,1000,24,27,38,45,4,8];
var ordenadoNoASCII = nums.sort((a,b) => a - b);
console.log(ordenadoNoASCII);

// SPLICE nos ayuda a remover o modificar un elemento de un array, o al array en sí. Puede recibir hasta 3 parametros,
// .splice(elemento que llamamos, números que nos removemos dentro del array, lo qué haremos con el segundo parametro)
var nombres = ['Facundo','Sofia','Belen','Nahuel','Camila'] ;
nombres.splice(1,4, "Lionel"); // llamamos Facundo, removimos los 4 nombres seguidos del array y agregamos "Lionel"
console.log(nombres); // .splice() modifica el arreglo

// SLICE nos va a retornar una copia de una parte más pequeña del array. recibe 2 parametros,
// .slice(inicio, y hasta dónde llegará el llamado)
var nombres = ['Facundo','Sofia','Belen','Nahuel','Camila'];
var resultado = nombres.slice(0,2); // no incluye la última posición
console.log(resultado); // .slice() NO modifica el arreglo