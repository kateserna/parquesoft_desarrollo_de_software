import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: '#000000',
  bgcolor: '#f3e4fb',
  border: '3px solid #d304d7',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({character, open, onClose}) {
    if (!character) return null;

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={character.image} width="100%"/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {character.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Tipo: {character.type}
            <br/>
            Genero: {character.gender}
            <br/>
            Origen: {character.origin.name}
            <br/>
            Ubicación: {character.location.name}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}