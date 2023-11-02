function Person({picture, name, age, profession}) {
    return (
        <div>
            <img src={picture} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>

        </div>
    )
};

export default Person