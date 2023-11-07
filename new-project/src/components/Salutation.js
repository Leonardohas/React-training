function Salutation({name}) {

    function generateSalutation(somename) {
        return `Olá ${somename}, tudo bem?`
    };


    return(
        <>
            {name && <p>{generateSalutation(name)}</p>}
        </>
    )
};

export default Salutation