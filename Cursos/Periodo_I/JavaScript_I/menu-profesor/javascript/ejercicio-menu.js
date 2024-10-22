const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");

btn.onclick = (event) => {
  event.preventDefault();
  switch (menu.selectedIndex) {
    case 1:
      mostrarPrecio("../img/helado.png", "imagen de helado", "Helado", "5.000");
      break;

    case 2:
      mostrarPrecio(
        "../img/hamburguesa.png",
        "imagen de hamburguesa",
        "Hamburguesa",
        "15.000"
      );
      break;

    case 3:
      mostrarPrecio(
        "../img/perro.png",
        "imagen de perro caliente",
        "Perro caliente",
        "10.000"
      );
      break;

    case 4:
      mostrarPrecio(
        "../img/ensalada.png",
        "imagen de ensalada",
        "Ensalada",
        "8.000"
      );
      break;

    default:
      alert("Debes seleccionar una opción del menú");
      break;
  }
};

function mostrarPrecio(src, alt, nombreItem, precioItem) {
  let item = document.getElementById("item");
  item.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const container = document.createElement("div");
  container.className = "container";

  const nombre = document.createElement("h4");
  nombre.textContent = nombreItem;

  const precio = document.createElement("p");
  precio.textContent = `Precio: $ ${precioItem} COP`;

  container.appendChild(nombre);
  container.appendChild(precio);
  card.appendChild(img);
  card.appendChild(container);

  item.appendChild(card);
}
