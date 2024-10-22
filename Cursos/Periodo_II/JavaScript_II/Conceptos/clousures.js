//Funcion padre
function crearContdor() {
    let contador = 0;

    //Funcion hija o interna
    function sumar(){
        contador += 1;
    }

    function valorActual(){
        return contador;
    }

    //retorna a traves de un objeto clave: valor
    return{
        sumar,
        valorActual,
    }
}

//crear un instancia con la funcion
let miContador = crearContdor();

/*accedo a la variable contador por fuera de el scope a traves de la funcion hija. 
Es como emular una variuable privada*/
miContador.sumar();
miContador.sumar();
miContador.sumar();

console.log(miContador.valorActual());

miContador.sumar();

console.log(miContador.valorActual());
//se crean varias instancias de la misma funcion y c/u tiene su propia memoria
let miContador2 = crearContdor();
console.log(miContador2.valorActual());
