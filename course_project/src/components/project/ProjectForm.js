import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButtom from '../form/SubmitButtom'
import styles from './ProjectForm.module.css'

function ProjectForm({ buttonText }) {
    return (
        <form className={styles.form}>
            <Input type='text' text='Project name' name='name' placeholder='Enter the project name'/>
            <Input type='number' text='Project budget' name='budget' placeholder='Enter the total budget'/>
            <Select  name='category_id' text='Select the category' />
            <SubmitButtom text={buttonText}/>
        </form>
    )
};

export default ProjectForm
