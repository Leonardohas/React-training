import {useState} from 'react'

function ConditionalRender() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(event) {
        event.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    };

    function clearEmail() {
        setUserEmail('');
    };

    return (
        <div>
            <h2>Escreva seu email:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder='Digite seu email' 
                    onChange={(event) => setEmail(event.target.value)} 
                />
                <button onClick={sendEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={clearEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
};

export default ConditionalRender