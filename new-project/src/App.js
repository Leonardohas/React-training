import './App.css';
import FirstComponents from './components/FirstComponents'

function App() {
  const name = 'Leonardo';
  const neeName = name.toUpperCase();

  function sum(a,b) {
    return a + b;
  };

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {neeName}</p>
      <p>soma: {sum(2 , 2)}</p>
      <img src={url} alt='Imagem' />
      <FirstComponents />
    </div>
  );
}

export default App;
