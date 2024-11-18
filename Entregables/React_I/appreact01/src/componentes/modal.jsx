//importaciones:
import {useEffect, useState}from 'react';
import Box from '@mui/material/Box'; //caja sobre la que se dibuja el modal
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import SimpleSnackbar from './snackbar';
import ActionAreaCard from './card';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const imagenParaCard =  "https://mujeresconciencia.com/app/uploads/2015/11/lamar1.png"
  const cuerpoParaCard = "Hedwig Eva Maria Kiesler, conocida como Hedy Lamarr (Viena, 9 de noviembre de 1914n Casselberry, Florida, 19 de enero de 2000), fue una actriz de cine e inventora austríaca. Inventó la primera versión del espectro ensanchado que permitiría las comunicaciones inalámbricas de largas distancias."

  useEffect( () => {
    console.log("Componente Modal montado correctamente")

    return () =>{
      console.log("Componente Modal desmontado correctamente.")
    }

  }, [])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Titulo del modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, est facilisi 
          vivamus magna potenti malesuada, feugiat etiam aliquam tincidunt 
          tempus quam. Nulla ornare blandit volutpat leo interdum aliquet 
          parturient porttitor, eu velit taciti bibendum fames diam dignissim 
          himenaeos, magna proin ut urna cum quam dapibus. Inceptos duis 
          fermentum sollicitudin ultrices rutrum congue nullam fringilla, 
          leo aptent scelerisque mus praesent hendrerit eget volutpat, 
          lacinia vel dui class posuere tempus curabitur. Ullamcorper 
          scelerisque vitae fermentum parturient id rutrum nulla luctus 
          ligula laoreet porttitor, tristique sociis libero mollis diam habitant
           commodo platea mi nostra, nullam dui massa velit etiam tellus ornare 
           pharetra fusce integer.
          </Typography>
        </Box>
      </Modal>
      <Link to="/">Inicio</Link>
      <p></p>
      <br>
      </br>
      <SimpleSnackbar duracion={5000} mensaje = "Mensaje del snackbar enviado desde el componente modal"/>
      <br></br>
      <ActionAreaCard imagen={imagenParaCard} titulo={"Hedy Lamarr"} cuerpo={cuerpoParaCard}/>

    </div>
  );
}