const addEventFinally = () => {
  // Agregamos un símbolo de "marcado" al hacer clic en un elemento de la lista
  let list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
};

export default addEventFinally;
