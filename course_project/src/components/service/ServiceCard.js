import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
function ServiceCard({ id, name, cost, description, key, handleRemove}) {

    const remove = (event) => {

    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Total cost</span> R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Delete
                </button>
            </div>
        </div>
    )
};

export default ServiceCard