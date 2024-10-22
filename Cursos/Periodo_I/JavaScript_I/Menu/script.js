const btn = document.getElementById("btn"); //para seleccionar el boton por medio del id
const menu = document.querySelector("#menu"); //para seleccionar el menu por medio de css por medio del id.

//funcion que se encargue de mostrar en el div vacio, la tarjeta que armamos del producto cuando le demos click para ver el precio. 
function mostrarPrecio(rutaImagen, nombre, precio) {
    let item = document.getElementById("item");//seleccionar div donde se va a agregar la info
    item.innerHTML = "";//borra lo que estaba en el div. para que no se agregue las tarjetas anteriores.

    //crea un elemento, recibe el nombre del elemento que quiero crear, en este caso una imagen.
    const img = document.createElement("img");
    img.src = rutaImagen;
    img.alt = nombre;

    //crea un elemento en este caso un div para el nombre y precio del producto 
    const container = document.createElement("div");
    container.className = "container";//darle una clase al div

    const nombreItem = document.createElement("h4"); //crea el h4
    nombreItem.textContent = nombre; // le da un texto a ese h4.

    const precioItem = document.createElement("p");//crea el parrafo
    precioItem.textContent = `Precio: $ ${precio} COP`;//le coloca un texto al parrafo

    container.appendChild(nombreItem);//se agrega nombreItem el h4 al div
    container.appendChild(precioItem);// se agrega precioItem parrafo al div

    item.appendChild(img); //dentro del div se agrega la imagen
    item.appendChild(container);// dentro del div se agrega el container que es el div que contiene el h4 y el precio
}

//se agrega un evento al boton y una funcion.
btn.addEventListener("click", (event) => {
    event.preventDefault();//se quita el comportamiento por defecto del boton, de recarga de pagina cuando lo oprimes.

    console.log(menu.selectedIndex);// me muestra por consola el indice que escogi en el menu al dar clic en el boton

    //para validar la opcion escogida en el menu, valida cada caso de acuerdo a lo que escoja y se generan los parametros de ruta de imagen y precio esta info se pasa a la funcion mostrarPrecio. 
    switch (menu.selectedIndex) {
        case 1:
            mostrarPrecio("img/helado.png", "Helado", "5.000");
            break;
        case 2:
            mostrarPrecio("img/hamburguesa.png", "Hamburguesa", "15.000");
            break;
        case 3:
            mostrarPrecio("img/perro.png", "Perro Caliente", "10.000");
            break;
        case 4:
            mostrarPrecio("img/ensalada.png", "Ensalada", "8.000");
            break;
        default:
            alert("Debes seleccionar una opcion del menú")
            
    }
});