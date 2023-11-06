import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='Lambo'/>
                <Item marca='Ferrari'/>
                <Item marca='Fusca'/>
            </ul>
        </>
    )
}

export default List