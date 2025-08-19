import '../styles/navbar.css';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = (id: string) => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                const yOffset = -70;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }, 100);
        setOpen(false); // ferme le menu sur mobile après clic
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" className="nav-logo-img" />
                <span>Esteban DOUILLET</span>
            </div>

            {/* Hamburger pour mobile */}
            <div className="nav-hamburger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a onClick={() => handleClick("hero")}>Accueil</a></li>
                <li><a onClick={() => handleClick("about")}>À propos</a></li>
                <li><a onClick={() => handleClick("skills")}>Compétences</a></li>
                <li><a onClick={() => handleClick("projects")}>Projets</a></li>
                <li><a onClick={() => handleClick("contact")}>Contact</a></li>
            </ul>
        </nav>
    );
}