import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Company from './pages/Company';
import Contact from './pages/Contact';
import NavBar from './components/layout/NavBar';
import Foter from './components/layout/Foter';


// Algo errado com os imports, olhar o que aconteeu futuramente

function App() {
  return (
    // TODO Verificar qual é o problema que aconteceu com o pacote react-router-dom 
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route exact path="/" element={<Home/>}/>
    //     <Route path="/company" element={<Company/>}/>
    //     <Route path="/contact" element={<Contact/>}/>
    //   </Routes>
    //   <Foter />
    // </Router>
    <div className='App'>
      <h1>React Training</h1>
    </div>
  );
}

export default App;
