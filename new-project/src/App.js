import './App.css';
import SayMyName from './components/SayMyName'
import Person from './components/Person'
import Phrase from './components/Phrase'
import List from './components/List'
import Event from './components/Event'
import Form from './components/Form'
import ConditionalRender from './components/ConditionalRender';
import OtherList from './components/OtherList';

function App() {

  const myItens = ['React', 'Vue', 'Angular'];

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OtherList itens={myItens} />
      <OtherList itens={[]} />
    </div>
  );
}

export default App;
