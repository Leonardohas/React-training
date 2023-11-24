import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item brand='Lambo' yearRelease={2020} />
                <Item brand='Ferrari' yearRelease={2019} />
                <Item brand='Fusca' yearRelease={1960} />
            </ul>
        </>
    )
}

export default List