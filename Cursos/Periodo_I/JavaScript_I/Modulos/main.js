//importacion nombrada
import { suma } from "./utils.js"; 

//agregar evento al boton
document.getElementById("calcularBtn").addEventListener("click", () => {
    const numero1 = parseInt(document.getElementById("numero1").value);//para capturar el valor dentro del input y parse para convertir el valor en entero.
    const numero2 = parseInt(document.getElementById("numero2").value);

    //validar que ambos numeros sean numeros
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = suma(numero1, numero2);
        alert(`la suma de ${numero1} y ${numero2} es ${resultado}`)
    } else {
        alert ("Por favor ingrese números validos en ambos campos");
    }
});