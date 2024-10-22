
import {mostrarPrecio} from "./mostrarPrecio.js"

export function pedirDatos () {
    const btn = document.getElementById("btn"); 
    const menu = document.querySelector("#menu"); 
    
    btn.addEventListener("click", (event) => {
        event.preventDefault();
    
        console.log(menu.selectedIndex);
         
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
}
