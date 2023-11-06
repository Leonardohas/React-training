import styles from './Phrase.module.css'

function Phrase() {
    return (
        <div className={styles.phraseContainer}>
            <p className={styles.phraseContent}>Um componente com uma farse!</p>
        </div>
    )
};

export default Phrase