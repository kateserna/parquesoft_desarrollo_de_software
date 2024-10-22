//Ejercicio de push() y pop()
let colores = [];
colores.push("amarillo", "azul", "rojo");
colores.pop();
console.log(colores);

//Ejercicio de unshift() y shift()
let deportes = ["natación", "ciclismo", "patinaje"];
deportes.unshift("rugby", "voleyball");
deportes.shift();
console.log(deportes);

// Ejercicio de concat()
let numero = [1, 2, 3];
let vocales = ['a', 'e', 'i'];
let nuevoArray = numero.concat(vocales);
console.log(nuevoArray);


//Ejercicio de slice()
let nombres = ["Claudia", "Amelia", "Isaac", "Katerine","Leonardo"];
let subNombres = nombres.slice( 1, 4);
console.log(subNombres);

//Ejercicio de splice()
let notasMusicales = ["do", "re", "mi", "fa", "sol"];
notasMusicales.splice( 2, 2, 'a', 'b');
console.log(notasMusicales);

//Ejercicio de indexOf() y lastIndexOf()
let edadesJardin = [2, 4, 3, 5, 4];
let primerIndice = edadesJardin.indexOf(4);
console.log(primerIndice);

let ultimoIndice = edadesJardin.lastIndexOf(4);
console.log(ultimoIndice);