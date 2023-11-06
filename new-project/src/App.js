import './App.css';
import SayMyName from './components/SayMyName'
import Person from './components/Person'
import Phrase from './components/Phrase'

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
    </div>
  );
}

export default App;
