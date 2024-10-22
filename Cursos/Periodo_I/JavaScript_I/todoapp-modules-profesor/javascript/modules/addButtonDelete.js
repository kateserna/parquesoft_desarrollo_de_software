const createButtonDelete = () => {
  // Creamos un boton cerrar y lo agregamos a cada elemento de la lista
  let miLista = document.getElementsByTagName("li");

  for (let i = 0; i < miLista.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function () {
      let element = this.parentElement;
      element.style.display = "none";
    };
    miLista[i].appendChild(span);
  }
};

export default createButtonDelete;
