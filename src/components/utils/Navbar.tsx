import '../../styles/navbar.css';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Met à jour isMobile quand la taille de l'écran change
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

        if (isMobile) setOpen(false); // ferme le menu sur mobile après clic
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" className="nav-logo-img" />
                <span>Esteban DOUILLET</span>
            </div>

            {/* Hamburger pour mobile */}
            {isMobile && (
                <div className={`nav-hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}

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