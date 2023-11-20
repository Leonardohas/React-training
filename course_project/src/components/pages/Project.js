import styles from './Project.module.css'
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import { useParams} from 'react-router-dom'
import { useState, useEffect} from 'react'

function Project() {

    const {id} = useParams(); 
    const [project, setproject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => { // Uma função sem parametros é chamada de função anonima
        setTimeout(() =>{
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
        }, 2000) // loading para simulação do projeto.
    }, [id]) // É sempre bom ter um parametro nesse caso, pois é a nossa referencia, então nesse caso podemos dizer que estamos monitorando o ID do projeto

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    };
    
    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        <div className={styles.details_container}>
                            <h1>Project: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Edit project' : 'Close'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Category:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total Budget:</span> {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Used:</span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <p>Form</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ): (<Loading />)}
        </>
    )
};

export default Project