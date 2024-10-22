function dividir() {
   let numero1 = prompt("Ingresa el primer número"); 
   let numero2 = prompt("Ingresa el segundo número"); 

   //if valida si no es un numero la funcion isNaN me devuelve verdadero si le paso como parametro algo que no es un numero 
   try {
        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("Ambos valores deben ser números");
        }

        if (numero1 === null || numero2 === null) {
            throw new Error("Debes ingresar ambos números");
        }

        numero1 = parseFloat(numero1); //Transforma el string del numero a un numero float.
        numero2 = parseFloat(numero2);

        if (numero2 === 0) {
            throw new Error("No se puede dividir entre 0");
        }

        let resultado = numero1/numero2;
        console.log(`El resultado de la division es: ${resultado}`);
   } catch (error) {
    console.error(error.message);
   } finally {
    console.log("Proceso completado");
   }
}

dividir();