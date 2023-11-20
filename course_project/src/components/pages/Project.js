import styles from './Project.module.css'
import { useParams} from 'react-router-dom'
import { useState, useEffect} from 'react'

function Project() {

    const {id} = useParams(); 
    const [project, setproject] = useState([]);

    useEffect(() => { // Uma função sem parametros é chamada de função anonima
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }).then(resp => resp.json()) // Pegamos a resposta e a transformamos em JSON 
        .then((data) => { // pegamos esse dado e utilizamos para algum fim 
            setproject(data);
        }) 
        .catch(error => console.log(error))
    }, [id]) // É sempre bom ter um parametro nesse caso, pois é a nossa referencia, então nesse caso podemos dizer que estamos monitorando o ID do projeto
    
    
    return(
        <div>
            <p>{project.name}</p>
        </div>
    )
};

export default Project