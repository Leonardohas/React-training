import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"

function Projects() {
    const [projects, setProjects] = useState([]);

    const location = useLocation();
    let message = ''
    if (location.state) {
        message = location.state.message
    };

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
               'content-type': 'application/json' 
            },
        }).then((resp) => resp.json()).then((data) => {
            console.log(data);
            setProjects(data);
        }).catch((error) => console.log(error))
    }, [])

    return (
        <div className={styles.projects_container}>
            <div className={styles.titile_container}> 
            <h1>My projects</h1>
            <LinkButton to="/newproject" text='Create project'/>
            </div>
            {message && <Message type="success" messageText={message} />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => 
                    <ProjectCard 
                        id={project.id}
                        projectName={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}                        
                    />
                )}
            </Container>
        </div>
    )
};

export default Projects