import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { Navigate, useNavigate } from 'react-router-dom'


function NewProject() {

    const history = useNavigate();
    function createPost(project) {
        // initialize cost and serve
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: 'POST', // fazer um envio de formulario.
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project), // Mandando os dados do projeto por POST na rota "http://localhost:5000/projects" para adicionar um projeto.
        })
        .then((resp) => resp.json()) // then iramos receber uma resposta e transforma-la em JSON.
        .then((data) => { // O segundo then fara algo com os dados ou apenas realizara algo que eu queira no sistemas 
            console.log(data) // console.log(data) para ver os dados que estão vindo pelo back end
            // redirect
            history("/projects", {state:{message: 'project successfully created'}})
        }).catch((error) => console.log(error)) // catch para receber um possivel error que pode acontecer no servidor.
    };

    return (
        <div className={styles.new_project_container}>
            <h1>Create your project</h1>
            <p>Create your project and then add your services</p>
            <ProjectForm handleSubmit={createPost} buttonText='Create project'/>
        </div>
    )
};

export default NewProject