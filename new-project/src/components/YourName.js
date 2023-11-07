function YourName({ setName }) {
    return (
        <div>
            <p>Digite seu nome:</p>
            <input
                type="text" 
                placeholder="Qual é o seu nome?" 
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    )
};

export default YourName