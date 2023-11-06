function Form() {

    function registerUser(event) {
        event.preventDefault();
        console.log("Usuario cadastrado!");
    };

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={registerUser}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )

};

export default Form