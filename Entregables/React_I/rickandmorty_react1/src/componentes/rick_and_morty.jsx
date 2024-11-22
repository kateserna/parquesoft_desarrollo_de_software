import { useEffect, useState } from "react";
import ActionAreaCard from "./card";
import { getAllCharacters } from "../servicios/rymService";
import BasicModal from "./modal";

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

    const handleOpenModal = (character) => {
        setSelectedCharacter(character);
    }

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    }

    return(
        <div>
            {
                data.map( (element) => (
                    <>
                        <ActionAreaCard 
                        image= {element.image} 
                        title={element.name} 
                        body={`Status: ${element.status} Especie: ${element.species}`}
                        onClick = { () => handleOpenModal(element)}
                        />
                        <br></br>
                    </>
                ))
            }
            <BasicModal
                character={selectedCharacter}
                open={!!selectedCharacter}
                onClose={handleCloseModal}
            />  
        </div>
    )
}