//funcion nombrada 
function areaCuadrado(lado) {
    let resultado = lado * lado;
    //return resultado;
    alert(resultado)
}

//console.log(areaCuadrado(12))
areaCuadrado(12);

// Expresion de funcion
const areaCuadradoExp = function (lado) {
    //return lado + lado;
    alert(lado*lado)
}

areaCuadradoExp(25);

//arrow function. puedo hacerlo asi o si es una sola linea puedo quitar las {}.

let areaCuadradoArrow = (lado) => {
    alert(lado*lado);
}

areaCuadradoArrow(45);

// uso de funciones como paramtros dentro de otra funcion
const calcular = function (lado) {
    return lado * lado;
}

const imprimir = (valor) => {
    alert(`El resultado es: ${valor}`)
}

const imprimirConsole = (valor) => {
    console.log(`El resultado es: ${valor}`)
}

function pedirDato (funcion1, funcion2) {
    const dato = prompt("Ingresa un dato del cuadrado");
    const resultado = funcion1(dato);
    funcion2(resultado);
}

pedirDato(calcular, imprimir);
pedirDato(calcular, imprimirConsole);

