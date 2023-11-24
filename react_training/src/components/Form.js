import { useState } from 'react'

function Form() {
    function registerUser(event) {
        event.preventDefault();
        console.log(`Usuario = ${name} e Senha = ${password}`);
    };

    const [name, setName] = useState()
    const [password, setpassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="name"></label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome" 
                        onChange={(event) => setName(event.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha" 
                        onChange={(event) => setpassword(event.target.value)} 
                    />
                </div>
                <div>            
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

};

export default Form