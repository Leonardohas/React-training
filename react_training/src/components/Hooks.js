import {useState, useEffect} from 'react' 
import MuiButton from './eventsComponents/MuiButton'

// useState é um hook do react que nós permite gerencira valores e também renderizar o componente quando precisarmos que é quando muda o valor de alguma coisa.
// useEffect ele basicamente pode executar alguma coisa quando quiser, baseado em algum dado, quando o usuario entra em alguma pagina etc.

const Hooks = () => { //Uma outra maneira de criar uma função jsx.

    let age = 30
    const [newAge, setNewAge] = useState(20) // Aqui invocamos o hook para gerenciar 2 coisas, o acesso que o valor da variavel (newAge) e a alteração do valor da variavel (setNewAge)

    const changeAge = () => {
        age = 35
        console.log(age);
    };

    const changeNewAge = () => {
        setNewAge(45)
    };

    useEffect(() => {
        // Ele aceita uma função anonima comoo argumento.
        // Podemos usar o useEffect para carregar dados de um servidor por exemplo.
        console.log('Testing');
    })

    return (
        <div>
            <p>Age: {age}</p>
            <MuiButton buttonText='Change age' primaryColor='#7093DB' handleclick={changeAge}/>
            <p>Age: {newAge}</p>
            <MuiButton buttonText='Change new age' primaryColor='#7093DB' handleclick={changeNewAge}/>
        </div>
    )
};

export default Hooks;