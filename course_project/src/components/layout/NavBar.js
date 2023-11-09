import { Link } from "react-router-dom";
import Container from "./Container";
import logo from '../../img/costs_logo.png'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>                        
                    </li>
                    <li class={styles.item}>
                        <Link to="/Company">Company</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </Container>        
        </nav>
    )
};

export default NavBar