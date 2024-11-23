import { useEffect, useState } from "react";
import ActionAreaCard from "./card";
import { getAllCharacters } from "../servicios/rymService";
import BasicModal from "./modal";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function RickAndMorty(){
    const [data, setData] = useState([]);//guarda results de la api
    const [selectedCharacter, setSelectedCharacter] = useState(null);//seleccion de personaje
    const [info, setInfo] = useState(null);
    const apiUrl = "https://rickandmortyapi.com/api"

    const fetchMoreData = async (url) => {
        const response = await getAllCharacters(url);
        console.log(response);
        setData(response.results);
        setInfo(response.info);
    };

    useEffect( () => {
        async function fetchData() {
            const response = await getAllCharacters(`${apiUrl}/character`);
            console.log(response);
            setData(response.results);
            setInfo(response.info);
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
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {data.map( (element) => (
                        <Grid size="auto">
                            <Item>
                                <ActionAreaCard 
                                    image= {element.image} 
                                    title={element.name} 
                                    body={`Status: ${element.status} Especie: ${element.species}`}
                                    onClick = { () => handleOpenModal(element)}
                                />
                           </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <br></br>
            <div>
                <Stack sx={{justifyContent: "center"}} spacing={4} direction="row">
                    <Button variant="contained" color="secondary" onClick={ () => fetchMoreData(info.prev) }>Página Anterior</Button>
                    <Button variant="contained" color="secondary" onClick={ () => fetchMoreData(info.next) }>Siguiente Página</Button>
                </Stack>
            </div>
            <BasicModal
                character={selectedCharacter}
                open={!!selectedCharacter}
                onClose={handleCloseModal}
            />  
        </>
    )
}