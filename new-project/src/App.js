import { useState } from 'react'

import './App.css';
// import SayMyName from './components/SayMyName'
// import Person from './components/Person'
// import Phrase from './components/Phrase'
// import List from './components/List'
// import Event from './components/Event'
// import Form from './components/Form'
// import ConditionalRender from './components/ConditionalRender';
// import OtherList from './components/OtherList';
import YourName from './components/YourName';
import Salutation from './components/Salutation';

function App() {

  const [name, setName] = useState();

  return (
    <div className="App">
      <h1>State Lift</h1>
      <YourName setName={setName} />
      <Salutation name={name}/>
      {name}
    </div>
  );
}

export default App;
