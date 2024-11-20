import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Input(){

    useEffect( () => {
        console.log("Componente Input montado correctamente")
    
        return () =>{
          console.log("Componente Input desmontado correctamente.")
        }
    
      }, [])

    const [mensaje, setMensaje] = useState("");
    const [contador, setContador] = useState(0);
    const handleClick = () => {
        setContador(contador + 1);
    }


    return(
        <div>
            <h1>Clicker</h1>
            <button onClick={handleClick}>Click</button>
            <p>Contador: {contador}</p>
            <h3>Ingrese un mensaje</h3>
            <input 
                type="text" 
                value={mensaje}
                placeholder="Escribe un mensaje"
                onChange={evento => {setMensaje(evento.target.value)}}
            />
            <p>{mensaje}</p>
            <h3>Retornar al Home</h3>
            <Link to="/">Inicio</Link>
        </div>
        
    )
}