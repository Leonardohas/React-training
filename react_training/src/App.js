import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Company from './pages/Company';
import Contact from './pages/Contact';
import NavBar from './components/layout/NavBar';
import Foter from './components/layout/Foter';


function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
