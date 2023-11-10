import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                text={text}
                name={name}
                id={name}
                placeholder={placeholder}
                handleOnChange={handleOnChange}
                value={value}
            />
        </div>
    )
};

export default Input