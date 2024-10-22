
export function mostrarPrecio(rutaImagen, nombre, precio) {
    let item = document.getElementById("item");
    item.innerHTML = "";

    const img = document.createElement("img");
    img.src = rutaImagen;
    img.alt = nombre;

    const container = document.createElement("div");
    container.className = "container";

    const nombreItem = document.createElement("h4"); 
    nombreItem.textContent = nombre;

    const precioItem = document.createElement("p");
    precioItem.textContent = `Precio: $ ${precio} COP`;

    container.appendChild(nombreItem);
    container.appendChild(precioItem);

    item.appendChild(img); 
    item.appendChild(container);
}