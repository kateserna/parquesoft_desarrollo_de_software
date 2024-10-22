const newElement = () => {
  // Crear un nuevo elemento de lista al hacer clic en el botón "Agregar"
  let li = document.createElement("li");
  let inputValue = document.getElementById("miInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Ingresa un nombre para la tarea!");
  } else {
    document.getElementById("miUL").appendChild(li);
  }

  document.getElementById("miInput").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.onclick = function () {
    let element = this.parentElement;
    element.style.display = "none";
  };
  li.appendChild(span);

  // Borramos el texto del input
  document.getElementById("miInput").value = "";
};

// Se asigna la funcion newElement al boton con id btn en nuestro HTML
const asignButton = () => {
  document.querySelector("#btn").addEventListener("click", newElement);
};

export default asignButton;
