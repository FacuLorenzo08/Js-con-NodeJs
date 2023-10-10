/**
 * PROMISES
 * son objetos que representan el resultado potencial de una operación asíncrona y permiten encadenar acciones posteriores.
 * operación asíncrona, quiere decir, que puede demorar en completarse o fallar
*/
// getData1 = es igual a una nueva función que rotorna una nueva promesa, le podemos pasar un nuevo parametro
// const getData1 = () => new Promise((resolve, reject) => { })

// getData2 = es igual a una nueva promesa, no le podemos pasar parametros
// const getData2 = new Promise((resolve, reject) => { })

/**
 * formas de manejar el resultado de una promesa en JavaScript:
 * THEN / CATCH
 * El método .then() recibe una función como argumento, que se ejecuta cuando la promesa se resuelve satisfactoriamente. 
 * El método .catch() también recibe una función como argumento, que se ejecuta cuando la promesa se rechaza.
 * Esta función puede recibir el valor que devuelve la promesa, y puede devolver otro valor o una nueva promesa.
 */
const getData = (error) => new Promise((resolve, reject) => { 
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: "Facundo",
                apellido: "Lorenzo",
            })
        }, 3000);
    } else {
        reject('No se pudo obtener los datos')
    }
});
// console.log("Inicio");
// getData(false)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
// });
// console.log("Fin");

// EJEMPLO GET DATA 2
const getData2 = (error) => new Promise((resolve, reject) => { 
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: "Sofía",
                apellido: "Chavez",
            })
        }, 3000);
    } else {
        reject('No se pudo obtener los datos de data 2')
    }
});
console.log("Inicio");
getData(false)
    .then((data) => {
        console.log(data);
        return getData2(true)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
});
console.log("Fin");


// ---------------------- //
/**
 * formas de manejar el resultado de una promesa en JavaScript:
 * ASYNC / AWAIT
 * permiten escribir código asíncrono de forma más sencilla y legible, haciendo que una función espere a que se resuelva una promesa antes de continuar.
 */
const getData3 = (error) => new Promise((resolve, reject) => { 
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: "Facundo",
                apellido: "Lorenzo",
            })
        }, 3000);
    } else {
        reject('No se pudo obtener los datos')
    }
});
const getData4 = (error) => new Promise((resolve, reject) => { 
    if (!error){
        setTimeout(() => {
            resolve({
                nombre: "Sofía",
                apellido: "Chavez",
            })
        }, 3000);
    } else {
        reject('No se pudo obtener los datos de data 2')
    }
});
// sin manejo de error:
/**
 * const main = async() => {
 *     let resultado = await getData3(false);
 *     let resultado2 = await getData4(false);
 *     console.log(resultado);
 *     console.log(resultado2);
 * };
 * main();
 */
// Async/Await - con manejo de error (try - catch)
const main = async() => {
    try {
        let resultado = await getData3(false);
        let resultado2 = await getData4(true);
        console.log(resultado);
        console.log(resultado2);
    } catch (error) {
        console.log(error);
    }
};
main();