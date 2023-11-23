import { parse, v4 as uuidv4} from 'uuid'
import styles from './Project.module.css';
import ProjectForm from '../project/ProjectForm';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import Message from '../layout/Message';
import ServiceForm from '../service/ServiceForm'
import { json, useParams} from 'react-router-dom';
import { useState, useEffect} from 'react';

function Project() {

    const {id} = useParams(); 
    const [project, setproject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

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
    
    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    };

    function editPost(project) {
        setMessage('');
        if (project.budget < project.cost ) {
           setMessage("Budget cannot be less than the project cost");
           setType("error");
           return false
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: { // headers serve para se comunicar em JSON a APi
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then((data) => {
            setproject(data);
            setShowProjectForm(false);
            setMessage("Updated project");
           setType("success");
        })
        .catch((error) => console.log(error))
    };

    function createService() {
        setMessage('');
        const lastService = project.services[project.services.length - 1] // pegar o ultimo servico
        lastService.id = uuidv4(); // coloca um ID unico para ele.
        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);
        
        // validação para ver ser o valor novo ultrapassa o valor do orçamento do projeto
        if (newCost > parseFloat(project.budget)) {
            setMessage('Exceeded budget, check service budget');
            setType('error');
            project.services.pop();
            return false;
        }
        // adicionar o custo do serviço ao custo total do projeto
        project.cost = newCost;

        // atualizar projeto
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH', // PATCH pois atualizaremos apenas dados parciais do projeto, ou seja, o que for mandado novamente.
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            // exibir os serviços
            console.log(data);
        }).catch((error) => console.log(error))
    };
    
    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} messageText={message}/>}
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
                                    <ProjectForm 
                                        handleSubmit={editPost} 
                                        buttonText="Finish editing"
                                        projectData={project} 
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Added a service</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Add service' : 'Close'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm && 
                                    <ServiceForm
                                        handleSubmit={createService}
                                        buttonText="Add service"
                                        projectData={project}
                                    />
                                }
                            </div>
                        </div>
                        <h2>Services</h2>
                        <Container customClass="start">
                            <p>Servive Itens</p>
                        </Container>   
                    </Container>
                </div>
            ): (<Loading />)}
        </>
    )
};

export default Project