import Encabezado from "./encabezado";
import Contenido from "./contenido";


function Main(){
    return (
        <>
            <Encabezado/>
            <Contenido 
                saludo={'Hola mundo'} 
                contenido={'Contenido de pagina'}/>
        </>
    );
}
export default Main;