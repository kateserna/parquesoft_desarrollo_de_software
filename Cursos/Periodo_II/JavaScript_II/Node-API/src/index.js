// llama el paquete de express previmente instalado
const express = require("express"); 
const app = express(); //instancia de express para acceder a sus metodos.

app.use(express.json()); // permite usar middleware para que la aplicacion sepa que todo lo q va a compartir y tanto al recibir o enviar va a ser en formato json

//simulacion de base de datos
const libros = [
    {id:1, titulo: "1984", autor: "George Orwell"},
    {id:2, titulo: "Cien años de soledad", autor: "Gabriel García Marquez"},
];

// ruta para mostrar listado de libros
app.get("/libros", (req, res) =>{
    res.json(libros)
});

// Crear el servidor
app.listen(3000, () => {
    console.log("Servidor ejecutandose en http://localhost:3000");
});