import '../../styles/home.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} Esteban DOUILLET —
                <a href="https://github.com/lowanfr" target="_blank" rel="noreferrer">
                    GitHub
                </a> |
                <a href="https://www.linkedin.com/in/estebandouillet" target="_blank" rel="noreferrer">
                    LinkedIn
                </a> |
                <Link to="/privacy">Politique de confidentialité</Link> |
                <Link to="/cgu">CGU</Link> |
                <Link to="/legal">Mentions légales</Link>
            </p>
        </footer>
    );
}