// creo una constante, debido a que no debe modificar a lo largo del archivo, y con la función require() almaceno el paquete
// traemos siempre los paquetes en la parte superior del js
const axios = require('axios');
const fs = require('fs').promises; // al paquete fs lo importamos siempre con una promise
// el módulo fs permite trabajar con el sistema de archivos de nuestra computadora
const path = require('path'); 
// el paquete path nos provee utilidades para trabajar con rutas de archivos y directorios.

const main = async () => {
    let response = await axios.get("https://rickandmortyapi.com/api/character")
    // con el get hacemos una petición a nuestro servidor y la almacenamos
    let { data: { results }, } = response; // destructuramos data y trabajaremos con results
    // ahora obtenemos solo el id y nombre de nuestros personajes
    let characters = results.map((character) => {
        return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
        };
    })
    let titles = Object.keys(characters[0]).join(','); // transformamos cada objeto en una cadena con los valores separados por comas
    let files = characters.map((personaje) => Object.values(personaje).join(',')) // obtenemos solamente los valores
    let csv = [titles, ...files].join('\n'); // // Unimos la línea de cabeceras con las filas de datos con un salto de línea con "('\n')"
    
    await fs.writeFile(path.join(__dirname, 'data.csv'), csv);
    // path.join(__dirname, 'data.csv');
    // combinamos los dos parametros y el resultado es una ruta que apunta al archivo creado (data.csv) en el mismo directorio donde ejecutamos
    //console.log(characters);
};

main();