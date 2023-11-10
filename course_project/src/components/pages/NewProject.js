import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.new_project_container}>
            <h1>Create your project</h1>
            <p>Create your project and then add your services</p>
            <ProjectForm buttonText='Create project'/>
        </div>
    )
};

export default NewProject