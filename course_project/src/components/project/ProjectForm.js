import {useEffect, useState} from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButtom from '../form/SubmitButtom'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, buttonText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

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

    const submit = (event) => {
        event.preventDefault(); // Não deixa o formulario ser executado como page reload, que envia o metodo depois retorna a pagina que é o comportamento padrão do html
        handleSubmit(project) // Executa o metodo que for passado pela prop e passo o projeto que está cadastrado no formulario como argumento
    };

    function handleChange(event) {
        setProject({...project, [event.target.name]: event.target.value})
    };
    
    function handleCategory(event) {
        setProject({...project, category: {
            id: event.target.value,
            name: event.target.options[event.target.selectedIndex].text,
        }})
    };

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text' 
                text='Project name' 
                name='name' 
                placeholder='Enter the project name' 
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type='number' 
                text='Project budget' 
                name='budget' 
                placeholder='Enter the total budget' 
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name='category_id' 
                text='Select the category' 
                options={categories} 
                handleOnChange={handleCategory} 
                value={project.category ? project.category.id : ''}
            />
            <SubmitButtom text={buttonText}/>
        </form>
    )
};

export default ProjectForm
