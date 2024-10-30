//URL base del servidor
const baseURL = "http://localhost:3000";

//Elementos del DOM
const libroForm = document.getElementById("libroForm");
const libroIdInput = document.getElementById("libroId");
const libroTitleInput = document.getElementById("libroTitle");
const libroAutorInput = document.getElementById("libroAutor");
const librosTableBody = document.getElementById("librosTableBody");
const saveBtn = document.getElementById("saveBtn");
const updateBtn = document.getElementById("updateBtn");

let librosData = [];

async function fetchLibros() {
    const response = await fetch(`${baseURL}/libros`);
    librosData = await response.json();//pasa la respuesta de json a un arreglo que es un formato que poemos manejar 
    librosTableBody.innerHTML = "";
    
    librosData.forEach((libro) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>
                <button onclick="editarLibro('${libro._id}')">Editar</button>
                <button onclick="eliminarLibro('${libro._id}')">Eliminar</button>
            </td>
        `;
       librosTableBody.appendChild(row) 
    });
}

fetchLibros();



