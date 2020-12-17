const express = require("express");
const port = 8080;
const serverInstance = express();
const moduleUsers = require("./usersService.js");
serverInstance.use(express.static('public'));
console.log(moduleUsers.usersList);


serverInstance.get('/users-location', (req,res) => {
    res.json(moduleUsers.usersList);
})

serverInstance.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`);
})

// REST API
// Leer el recurso
// GET /users-location

// Escribir un nuevo recurso
// POST /users-location
// { "name":"Ignacio", "githubUser":"ignaciodelgado" ... }

// Actualizar un recurso
// PUT /users-location/000001
// { "githubUser":"ignaciodelgado_1" }

// Borrar un recurso
// DELETE /users-location/000001