import {useEffect, useState} from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButtom from '../form/SubmitButtom'
import styles from './ProjectForm.module.css'

function ProjectForm({ buttonText }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <form className={styles.form}>
            <Input type='text' text='Project name' name='name' placeholder='Enter the project name'/>
            <Input type='number' text='Project budget' name='budget' placeholder='Enter the total budget'/>
            <Select  name='category_id' text='Select the category' options={categories}/>
            <SubmitButtom text={buttonText}/>
        </form>
    )
};

export default ProjectForm
