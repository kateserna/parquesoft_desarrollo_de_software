let tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Leer un libro"];
//push: nos permite agregar un elemento al final del arreglo
tareas.push("Limpiar la casa");

//unshift: nos permite agregar un elemento al principio del arreglo
tareas.unshift("Estudiar DOM")

console.log(tareas.length);

console.log(tareas)
//Pop elimina el ultimo elemento del arreglo
//tareas.pop();
//shift elimina el primer elemento del arreglo
//tareas.shift();
console.log(tareas)

//Metodos que reciben funciones
//forEach: nos sirve para recorrer un arreglo, te muestra uno a uno los elementos del arreglo. Recibe un callback es decir una expresion de funcion o un arrow funcion
tareas.forEach((tarea) => {
    console.log(tarea)
})

//filter para hacer filtrados
let numeros = [1,2,3,4,5,6,7,8,9,10];

let numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(numerosPares);
console.log(numeros);
// seleccion por id
let titulo = document.getElementById("titulo");
console.log(titulo)
// seleccion por clase
let titulos = document.getElementsByClassName("titulo2");
console.log(titulos);

// querySelector: seleccion por css de clases y id. Solo devuelve el primer elemento que coincide con el selector.
let parrafo = document.querySelector("#miContenedor .miClase");
console.log(parrafo);

// querySelectorAll: seleccion por css de clases y id. Devuelve una lista de elementos que coincide con el selector.
let input = document.querySelectorAll("#miFormulario input");
console.log(input);

//para seleccionar la lista donde quiero meter las tareas
let lista = document.getElementById("miLista");

//Recorrer un arreglode tareas
tareas.forEach((tarea) => {
    let item = document.createElement("li");
    item.textContent = tarea;
    lista.appendChild(item);
});

//Crear un evento click al boton 
let btn = document.getElementById("btn");
let mostrarMensaje = () => {
    console.log("Hola Mundo");    
};

btn.addEventListener("click", mostrarMensaje);


 

