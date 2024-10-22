for (let i = 0; i <= 5; i++){
    console.log(i)
}

let i = 0;
while(i<=5) {
    console.log(i)
    i++
}

let numeros = [3, 7, 4, 16, 2, 25, 9, 14];
console.log(numeros.length)

let contadorPares = 0
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0) {
        contadorPares++;
    }
}

console.log(`Hay ${contadorPares} números pares en el arreglo`)

//Cuenten cuantos numeros impares hay en el arreglo
let contadorImpares = 0
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 !== 0) {
        contadorImpares++;
    }
}

console.log(`Hay ${contadorImpares} números impares en el arreglo`)

let numero;

do {
    numero = prompt("Ingresa un numero positivo");
    numero = Number(numero); // funcion para comvertir un numero en string a numero como tal
} while (numero <= 0 || isNaN(numero));

alert(`Ingresaste el número ${numero}`)

isNaN()// te valida si es un not a number y te devuelve un booleano


