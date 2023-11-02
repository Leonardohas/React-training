import './App.css';
import SayMyName from './components/SayMyName'
import Person from './components/Person'

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
    </div>
  );
}

export default App;
