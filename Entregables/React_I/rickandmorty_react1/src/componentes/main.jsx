import Encabezado from "./encabezado";
import Contenido from "./contenido";
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
                subtitle={'Listado de personajes y sus características'} 
                contenido={'Hacer click en la tarjeta para más información'}/>
            <RickAndMorty/>
        </>
    );
}
export default Main;