import Encabezado from "./encabezado";
import Contenido from "./contenido";
import { Link } from "react-router-dom";
import { useEffect } from "react";


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
                saludo={'Hola mundo'} 
                contenido={'Contenido de pagina'}/>
                <Link to="/modal">Ejemplo de Modal</Link>
        </>
    );
}
export default Main;