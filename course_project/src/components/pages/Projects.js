import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton"

function Projects() {

    const location = useLocation();
    let message = ''
    if (location.state) {
        message = location.state.message
    };

    return (
        <div className={styles.projects_container}>
            <div className={styles.titile_container}> 
            <h1>My projects</h1>
            <LinkButton to="/newproject" text='Create project'/>
            </div>
            {message && <Message type="success" messageText={message} />}
            <Container customClass="start">
                <p>Projects...</p>
            </Container>
        </div>
    )
};

export default Projects