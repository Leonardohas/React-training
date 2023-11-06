import './App.css';
import SayMyName from './components/SayMyName'
import Person from './components/Person'
import Phrase from './components/Phrase'
import List from './components/List'
import Event from './components/Event'
import Form from './components/Form'

function App() {
  const name = "Silva"
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Event number='1' />
      <Event number='2' />
      <Form />
    </div>
  );
}

export default App;
