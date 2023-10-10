const data = require('./MOCK_DATA.json');

// nuestro service.js es un modulo que será exportado y por lo tanto, utilizado en diferentes archivos.
// module.exports = objeto
// el objeto va a contener las funciones que se encargarán de manipular nuestros datos
module.exports = {
    getUsers: () => data,
    getUser: (id) => {
        let identificador = Number(id); // Number nos permite pasar nuestro id en un valor numérico
        let user = data.filter((person) => person.id === identificador)[0];
        return user;
    },

    // le solicitamos a nuestra variable que agregue un usuario:
    createUser: (dataUser) => {
        let newUser = { // vamos a agregar los datos del usuario a nuestra variable data
            id: data.length + 1,
            ...dataUser,
        };
        data.push(newUser); // agrega el usuario al array:
        return newUser;
    },

    // modificar un usuario
    updateUser: (id, updateData) => {
        let identificador = Number(id);
        let user = data.find((person) => person.id === identificador); // encontrar la posición del usuario en el array de datos
        user.first_name = updateData.first_name;
        user.last_name = updateData.last_name;
        user.email = updateData.email;
        return updateData;
    },

    // eliminar un usuario
    deleteUser: (id) => {
        let identificador = Number(id);
        let deletedUser = data.filter((user) => user.id === identificador); // si el usuario existe, crear un nuevo array de datos sin ese usuario
        // si el usuario existe, crear un nuevo array de datos sin ese usuario
        let position = data.findIndex((usuario) => usuario.id === id);
        data.splice(position, 1)
        return deletedUser;
    },
};
