import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'
import styles from './TodoList.module.css'

const API = "http://localhost:5000";


function TodoList() {

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    //Carrega os TODOS antes da pagina terminar de carregar.
    useEffect(() => {
        const loadData = async() => {
            setLoading(true)
            const respost = await fetch(API + "/todos")
                .then((respost) => respost.json())
                .then((data) => data)
                .catch((error)=> console.log(error))
            setLoading(false);
            setTodos(respost);
        };
        loadData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const todo = {
            id: Math.random(),
            title,
            time,
            done: false,
        }

        await fetch(API + "/todos", {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                'content-type': 'application/json'
            }
        })

        setTodos((prevState) => [...prevState, todo]);
        setTitle("");
        setTime("");
        
    };

    const handleDelete = async (id) => {
        await fetch(API + "/todos/" + id, {
            method: "DELETE",
        });
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    };

    const handleEdit = async (todo) => {

        todo.done = !todo.done;

        const data = await fetch(API + "/todos/" + todo.id, {
            method: "PUT",
            body: JSON.stringify(todo),
            headers: {
                'content-type': 'application/json'
            },
        });
        setTodos((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : t)));
    };

    if (loading) {
        return <p>Loading...</p>
    };

    return (
        <div className={styles.todo_body}>
            <div className={styles.todo_header}>
                <h1>React todo</h1>
            </div>
            <div className={styles.form_todo}>
                <h2>Enter your next task</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor='title'>What will you do?</label>
                        <input 
                            type='text'
                            name='title'
                            placeholder='Task title'
                            onChange={(event) => setTitle(event.target.value)}
                            value={title || ""}
                            required
                        />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor='time'>Duration:</label>
                        <input 
                            type='text'
                            name='time'
                            placeholder='Estimated time (in hours)'
                            onChange={(event) => setTime(event.target.value)}
                            value={time || ""}
                            required
                        />
                    </div>
                    <input type='submit' value='Create task' />
                </form>
            </div>
            <div className={styles.list_todo}>
                <h2>TODO list:</h2>
                {todos.length === 0 && <p>There are no tasks!!!</p>}
                {todos.map((todo) => (
                    <div className={styles.todo} key={todo.id}>
                        <h3 className={todo.done ? styles.todo_done : ""}>{todo.title}</h3>
                        <p>Duration: {todo.time}</p>
                        <div className={styles.actions}>
                            <span onClick={() => handleEdit(todo)}>
                                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
                            </span>
                            <BsTrash onClick={() => handleDelete(todo.id)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TodoList;