import { useEffect, useState } from "react";
import ActionAreaCard from "./card";
import { getAllCharacters } from "../servicios/rymService";

export default function RickAndMorty(){
    const [data, setData] = useState([]);//guarda results de la api
    const [selectedCharacter, setSelectedCharacter] = useState(null);//seleccion de personaje
    const apiUrl = "https://rickandmortyapi.com/api"

    useEffect( () => {
        async function fetchData() {
            const response = await getAllCharacters(`${apiUrl}/character`);
            setData(response.results);
            console.log(data);
        }
        fetchData();
    }, [] )

    return(
        <div>
            {
                data.map( (element) => (
                    <>
                        <ActionAreaCard 
                        image= {element.image} 
                        title={element.name} 
                        body={`Status: ${element.status} Especie: ${element.species}`}
                        />
                        <br></br>
                    </>
                    
                ))
            }
        </div>
    )
}