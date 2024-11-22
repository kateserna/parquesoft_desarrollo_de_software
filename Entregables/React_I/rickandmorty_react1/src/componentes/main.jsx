import Encabezado from "./encabezado";
import Contenido from "./contenido";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import RickAndMorty from "./rick_and_morty";


function Main(){

    useEffect( () => {
        console.log("Componente Main montado correctamente")

        return () => {
            console.log("Componente Main desmontado correctamente")
        }
    }, [])

    return (
        <>
            <Encabezado/>
            <Contenido 
                subtitle={'Listado de personajes:'} 
                contenido={'Contenido de pagina'}/>
                <Link to="/modal">Ejemplo de Modal</Link>
            <RickAndMorty/>
        </>
    );
}
export default Main;