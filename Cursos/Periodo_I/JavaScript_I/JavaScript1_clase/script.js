console.log("Hola mundo")
let dato = 20;
console.log(dato + 2);

dato = "uno";
console.log(dato + 2);

dato = true;
console.log(dato + 2);   

// un comentario de una linea
/*kjfldkjgs
dlfjglkdjg
fdjgd */

//alert(dato)

//let numero = prompt("Ingresa un número");
//console.log(numero);

const dias = 7;

let nombre = "Mauricio";
let apellido = 'Muñoz';

// Template strins: con altgr + } me deja sacar el simbolo de template literal ``

let saludo = `Hola ${nombre} ${ apellido}`;
console.log(saludo);

let persona = {
    nombre: "Jhon",
    edad: 25,
    casado: false,
    telefonos: [123344445, 43565433]
};

console.log(persona.edad);

let personas  = [persona, persona, persona, "Hola", 1, [1, 2, 3]];
console.log(personas[0].telefonos[1]);

console.log(persona[10]);

let dato3 = null;

console.log(typeof persona.casado);

let dato4 = 2;
console.log(dato4++);// valor antes del incremento pero ya se hizo el incremento
console.log(dato4)
console.log(++dato4)// muestra el valor con el incremento.

let mascota = ["Morita", "Blanco", 3];

//let nombre1 = mascota[0];
//let color = mascota[1];
//let edad = mascota[3];

let [nombre1, color, edad] = mascota;
console.log(nombre1);

let mascota2 = {
    nombre2: "Morita",
    color2: "Blanco",
    edad2: 3
};

//let nombre2 = mascota2.nombre2;

let { nombre2, color2, edad2 } = mascota2;
console.log(nombre2);

if(mascota2.edad2 > 4) {
    console.log("La condicion se cumple")
} else {
    console.log("No se cumple")
}

//pedir la edad con prompt
//validar si la edad ingresada por un usuario es:
//edad > 18, eres mayor de edad
//edad < 18, eres menor de edad
// cualqier otro valor, edad no valida

//let edad3 = prompt("Ingrese su edad:");

/*
if (edad3 > 18 ) {
    console.log("Eres mayor de edad")
} else if (edad3 < 18 ) {
    console.log("Eres menor de edad")
} else {
    console.log("Edad no valida")
}
    */

let dia = "Lunes";

switch (dia) {
    case "Lunes":
        console.log("Trabajo en la oficina");
        break;
    case "Martes":
        console.log("Trabajo desde casa");
        break;
    case ("Miercoles", "Jueves"):
        console.log("Reunion");
        break;
    default:
        console.log("descanso");
}
//operador terniario
// (condicion) ? respuesta-condicion-verdadera : respuesta-condicion-falsa

let edad4 = 20;

//edad4 >= 18 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad")
edad4 > 18 
? console.log("Eres mayor de edad") 
: edad4 >= 18 && edad4 <= 70 
? console.log("Eres adulto mayor")
: edad4 < 18
? console.log("Eres menor de edad")
: console.log("Edad invalida");