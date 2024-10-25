// llama el paquete de express previamente instalado
const express = require("express"); 
const app = express(); //instancia de express para acceder a sus metodos.
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


//Midleware
app.use(express.json()); // permite usar middleware para que la aplicacion sepa que todo lo q va a compartir y tanto al recibir o enviar va a ser en formato json
app.use(cors());// para manejar origenes cruzados. 

const mongoUri = process.env.MONGODB_URI;

//conexion a la base de datos usando mongoose
try {
    mongoose.connect(mongoUri);
    console.log("Conectado a MongoDB")
} catch (error) {
    console.error("Error de conexion", error) 
}

/*// ruta para mostrar listado de libros
app.get("/libros", (req, res) =>{
    res.json(libros)
});*/

// Crear el servidor
app.listen(3000, () => {
    console.log("Servidor ejecutandose en http://localhost:3000");
});