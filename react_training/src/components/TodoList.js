import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'
import styles from './TodoList.module.css'
// import MuiInput from './eventsComponents/MuiInput';

const API = "http://localhost:5000";


function TodoList () {

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <div className={styles.todo_body}>
            <div className={styles.todo_header}>
                <h1>React todo</h1>
            </div>
            <div className='form_todo'>
                <h2>Enter your next task</h2>
                <form onSubmit={handleSubmit}>
                    <p>teste</p>
                </form>
            </div>
            <div className='list_todo'>
                <h2>TODO list:</h2>
                {todos.length === 0 && <p>There are no tasks!!!</p>}
            </div>
        </div>
    )
};

export default TodoList;