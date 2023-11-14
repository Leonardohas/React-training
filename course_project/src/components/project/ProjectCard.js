import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({id, projectName, budget, category, handleRemove}) {
    return (
        <div className={styles.project_card}>
            <h4>{projectName}</h4>
            <p>
                <span>Budget:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to='/'>
                    <BsPencil />Edit
                </Link>
                <button>
                    <BsFillTrashFill />Remove
                </button>
            </div>
        </div>
    )
};

export default ProjectCard