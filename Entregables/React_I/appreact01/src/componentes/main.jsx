import Encabezado from './encabezado';
import Contenido from './contenido';
import Footer from './pieDePagina';
import { Link } from 'react-router-dom';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://mujeresconciencia.com/app/uploads/2015/11/lamar1.png',
  imageSize: 250,
};

function Main() {
  return (
    <>
      <Encabezado/>
      <Contenido 
        saludo={'Hola mundo'} 
        contenido={'El contenido de la página'}
        usuario={user}
        />
        <h1>Lista de componentes navegables</h1>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/input">Ejemplo Input</Link></li>
        </ul>
      <Footer></Footer>
    </>
  );
}

export default Main;