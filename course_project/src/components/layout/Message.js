import { useState, useEffect } from 'react'
import styles from './Message.module.css'

function Message({ type, messageText }) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!messageText) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)            
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [messageText])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{messageText}</div>
            )}
        </>
    )
};

export default Message