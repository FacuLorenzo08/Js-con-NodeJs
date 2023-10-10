const express = require('express'); // llamamos express y lo almacenamos en una constante para crear una aplicación

const Service = require('./src/service');

const app = express();
const PORT = 3000; // generamos un puerto para trabajar con la aplicación

// le damos la capacidad para recibir datos de tipo json
app.use(express.json());

// llamamos la base de datos
app.get('/', (req, res) => {
    res.json({
        message: 'Lista de usuarios',
        body: Service.getUsers(),
    });
});

// llamamos a un usuario de la base de datos
app.get('/:id', (req, res) => {
    let {
        params : { id }
    } = req;
    res.json({
        message: `Usuario ${id}`,
        body: Service.getUser(id),
    });
});

// agregar un nuevo usuario
app.post('/', (req, res) => {
    let { body: newUser } = req;
    res.status(201).json({
        message: 'Usuario creado',
        body: Service.createUser(newUser), // traemos el usuario creado
    })
});

// modificar un usuario
app.put('/:id', (req, res) => { // obtener el id del usuario que se quiere modificar
    let {
        params: { id }
    } = req; // convertir el id a número
    let { body: updateData } = req; // encontrar la posición del usuario en el array de datos
    res.json({
        message: `Usuario ${id} modificado`,
        body: Service.updateUser(id, updateData)
    });
});

// eliminar un usuario
app.delete('/:id', (req, res) => { // obtener el id del usuario que se quiere eliminar
    let {
        params: { id }
    } = req; // convertir el id a número
    let { body: deletedUser } = req;
    res.json({
        message: `Usuario ${id} eliminado`,
        body: Service.deleteUser(deletedUser),
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

