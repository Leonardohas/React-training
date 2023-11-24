import Button from './eventsComponents/Button'

function Event({number}) {

    function myEvent() {
        console.log(`Ativando primeiro evento!!!!`);
    };

    function secondEvent() {
        console.log('Ativando o segundo evento!!!!');
    };

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={myEvent} text="Fist Event" />
            <Button event={secondEvent} text="second Event" />
        </div>
    )
}; 

export default Event