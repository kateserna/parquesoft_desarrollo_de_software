let numero;

numero = prompt("Menú: \n 1. Hamburguesa \n 2. Perro Caliente \n 3. Pizza \n 4. Helado \n Ingrese el número de su pedido:");

if (numero === null) {
    alert("Gracias por su visita");
} else {
    numero = Number(numero)
    switch (numero) {
        case 1:
            alert("Tu pedido fue Hamburguesa y tiene un costo de $18.000");
            break;
        case 2:
            alert("Tu pedido fue Perro Caliente y tiene un costo de $15.000");
            break;
        case 3:
            alert("Tu pedido fue Pizza y tiene un costo de $20.000");
            break;
        case 4:
            alert("Tu pedido fue Helado y tiene un costo de $10.000");
            break;
        default:
            alert("El número seleccionado no esta en el menú");
    }
}

