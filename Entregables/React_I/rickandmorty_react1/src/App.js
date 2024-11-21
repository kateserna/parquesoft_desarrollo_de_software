import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Main from './componentes/main';
import BasicModal from './componentes/modal';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<Main/>}/>
          <Route path="/modal" element = {<BasicModal/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
