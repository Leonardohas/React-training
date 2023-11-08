import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Foter.module.css'

function Foter() {
    return(
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>Rodapé</p>
        </footer>
    )
};

export default Foter