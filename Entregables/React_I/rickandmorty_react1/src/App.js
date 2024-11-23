import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Main from './componentes/main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
