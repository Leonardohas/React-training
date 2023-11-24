import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './pages/Home'
// import Company from './pages/Company';
// import Contact from './pages/Contact';
// import NavBar from './components/layout/NavBar';
// import Foter from './components/layout/Foter';
import MuiButton from './components/eventsComponents/MuiButton';

function App() {
  const buttonText = 'Material UI button'
  return (
    <div className='App'>
      <MuiButton variant='contained' buttonText={buttonText} primaryColor='#FF33FF'/>
    </div>
  );
}

export default App;
