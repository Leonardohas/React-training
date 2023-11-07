import './App.css';
import SayMyName from './components/SayMyName'
import Person from './components/Person'
import Phrase from './components/Phrase'
import List from './components/List'
import Event from './components/Event'
import Form from './components/Form'
import ConditionalRender from './components/ConditionalRender';

function App() {
  const name = "Silva"
  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <ConditionalRender />
    </div>
  );
}

export default App;
