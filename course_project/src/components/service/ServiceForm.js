import styles from '../project/ProjectForm.module.css'
import Input from '../form/Input';
import SubmitButtom from '../form/SubmitButtom';
import { useState } from 'react';

function ServiceForm({ handleSubmit, buttonText, projectData }) {

    const [service, setService] = useState({}) // useState({}) quer dizer que ela inicia com um objeto vazio.

    function submit(event) {
        event.preventDefault();
        projectData.services.push(service); // nessa linha ela joga os serviços dentro do serviço ou seja, ela altera o objeto original do projeto.
        handleSubmit(projectData);
    };

    function handleChange(event) {
        setService({...service, [event.target.name]: event.target.value}) // (...service) para pegar o objeto atual, (event.target.name) é o nome do input que sera a chave da propriedade do objeto, com o valor que é o(event.target.value)
        // Ou seja, esse comando acima pega tudo que tem no objeto e inserindo o valor da propriedade que vai vir dentro do evento
    };  

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
               type="text"
               text="Service name"
               name="name"
               placeholder="Insert service name"
               handleOnChange={handleChange}
            />
            <Input 
               type="number"
               text="Service cost"
               name="cost"
               placeholder="Insert total value"
               handleOnChange={handleChange}
            />
            <Input 
               type="text"
               text="Service description"
               name="description"
               placeholder="Write the service"
               handleOnChange={handleChange}
            />
            <SubmitButtom text={buttonText}/>
        </form>
    )
};

export default ServiceForm