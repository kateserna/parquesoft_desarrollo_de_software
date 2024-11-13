import { useState } from "react";
import { Link } from "react-router-dom";

export default function Input(){
    const [mensaje, setMensaje] = useState("");

    return(
        <div>
            <h3>Ingrese un mensaje</h3>
            <p>{mensaje}</p>
            <h3>Retornar al Home</h3>
            <Link to="/">Inicio</Link>
        </div>
        
    )
}