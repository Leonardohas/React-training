import './App.css';
import SayMyName from './components/SayMyName'
import Person from './components/Person'
import Phrase from './components/Phrase'
import List from './components/List'

function App() {
  const name = "Silva"
  return (
    <div className="App">
      <SayMyName name="Leonardo" />
      <SayMyName name={name} />
      <Person 
        name={name}
        age='28'
        profession='Developer'
      />
      <Phrase />
      <Phrase />
      <List />
    </div>
  );
}

export default App;
