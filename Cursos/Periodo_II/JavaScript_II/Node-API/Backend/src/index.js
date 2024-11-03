// llama el paquete de express previamente instalado
const express = require("express"); 
const app = express(); //instancia de express para acceder a sus metodos.
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//Midleware para que la comunicacion se haga a traves de archivos tipos json
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

// esquema o estructura de los documentos de la coleccion de mongoose (el id se genera directamente en mongo)
const libroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
});

//Crear un modelo para realizar las operaciones de CRUD
const Libro = mongoose.model("Libro", libroSchema);

//Rutas de la API

//Traer el listado de todos los libros
app.get("/libros", async(req, res)=>{
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).send("Error al obtener los libros");
    }
});

//Middleware: con headers (parametros que vienen en la request por ejemplo la autorizacion)
app.use((req, res, next) => {
    const authToken = req.headers["authorization"];
    //Se puede usar json web tokens
    if(authToken === "miTokenSecreto123") {
        next();
    } else {
        res.status(401).send("Acceso no autorizado")
    }
});

//Ruta para crear un nuevo libro: post (porque vamos a necesitar datos)
app.post("/libros", async(req, res)=>{
    const libro = new Libro({
        titulo: req.body.titulo,
        autor: req.body.autor, 
    });
    //guardar el libro en la base de datos con metodo mongoose
    try {
        await libro.save();
        res.json(libro);//respuesta al usuario en formato json
    } catch (error) {
        res.status(500).send("Error al guardar el libro");
    }
});

//Ruta traer un libro por id:
app.get("/libros/:id", async (req, res) =>{
    try {
        const id = req.params.id;
        const libro = await Libro.findById(id); //trae el libro y guarda la info en la variable

        if(libro) {
            res.json(libro);
        } else {
            res.status(404).send("Libro no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al buscar el libro");
    }
});

//Ruta para actualizar un libro: findByIdAndUpdate
app.put("/libros/:id", async (req, res) =>{
    try {
        const id = req.params.id;
        const libro = await Libro.findByIdAndUpdate(
            id, 
            {titulo: req.body.titulo,
                autor: req.body.autor, 
            }, {new: true}
        ); 

        if(libro) {
            res.json(libro);
        }else {
            res.status(404).send("Libro no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al actualizar el libro");
    }
});

//Ruta de eliminar un libro:
app.delete("/libros/:id", async (req, res) =>{
    try {
        const id = req.params.id;
        const libro = await Libro.findByIdAndDelete(id);

        if(libro) {
            res.json(libro);
        } else {
            res.status(404).send("Libro no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al borrar el libro");
    }
});

// Crear el servidor
app.listen(3000, () => {
    console.log("Servidor ejecutandose en http://localhost:3000");
});