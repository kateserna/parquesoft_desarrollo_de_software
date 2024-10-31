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

async function createLibro() { // validar que tenga un valor el form
    const titulo = libroTitleInput.value;
    const autor = libroAutorInput.value;
    const libro = {titulo, autor};

    await fetch(`${baseURL}/libros`, {
        method: "POST", 
        headers: {"Authorization": "miTokenSecreto123",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(libro), //pasa los datos  del libro a formato json 
    })
    
    libroForm.reset();
    fetchLibros();
}

async function updateLibro() { // validar que tenga titulo y autor
    const id = libroIdInput.value;
    const titulo = libroTitleInput.value;
    const autor = libroAutorInput.value;
    const libro = { titulo, autor };

    await fetch(`${baseURL}/libros/${id}`, {
        method: "PUT",
        headers: {Authorization: "miTokenSecreto123",
        "Content-Type": "application/json"},
        body: JSON.stringify(libro),
    });

    libroForm.reset();
    libroIdInput.value = "";
    saveBtn.style.display = "inline-block";
    updateBtn.style.display = "none";
    fetchLibros();
}

function editarLibro(id) {
    const libro = librosData.find((libro) => libro._id === id);
    libroIdInput.value = libro._id;
    libroTitleInput.value = libro.titulo;
    libroAutorInput.value = libro.autor;

    saveBtn.style.display = "none";
    updateBtn.style.display = "inline-block";
}

updateBtn.addEventListener("click", updateLibro);
saveBtn.addEventListener("click", createLibro);

fetchLibros();



