import logo from './logo.svg';
import './App.css';
import Encabezado from './componentes/encabezado';
import Contenido from './componentes/contenido';
import Footer from './componentes/pieDePagina';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://mujeresconciencia.com/app/uploads/2015/11/lamar1.png',
  imageSize: 250,
};

function App() {
  return (
    <>
      <Encabezado/>
      <Contenido 
        saludo={'Hola mundo'} 
        contenido={'El contenido de la página'}
        usuario={user}
        />
      <Footer></Footer>
    </>
  );
}

export default App;
