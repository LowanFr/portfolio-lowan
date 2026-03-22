import '../../styles/navbar.css';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/profile.jpg";
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/index";

export default function Navbar() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
    const [lang, setLang] = useState<"fr" | "en">(
        (localStorage.getItem("lang") as "fr" | "en") || "fr"
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 820);
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
        if (isMobile) setOpen(false);
    };

    const toggleLang = () => {
        const next = lang === "fr" ? "en" : "fr";
        setLang(next);
        i18n.changeLanguage(next);
        localStorage.setItem("lang", next);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="nav-logo" onClick={() => handleClick("hero")}>
                <img src={logo} alt="Logo" className="nav-logo-img" />
                <span>Esteban DOUILLET</span>
            </div>

            {/* Hamburger */}
            {isMobile && (
                <button
                    className={`nav-hamburger ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            )}

            {/* Links */}
            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a onClick={() => handleClick("hero")}>{t("nav.home")}</a></li>
                <li><a onClick={() => handleClick("about")}>{t("nav.about")}</a></li>
                <li><a onClick={() => handleClick("experience")}>{t("nav.experience")}</a></li>
                <li><a onClick={() => handleClick("skills")}>{t("nav.skills")}</a></li>
                <li><a onClick={() => handleClick("projects")}>{t("nav.projects")}</a></li>
                <li><a onClick={() => handleClick("contact")}>{t("nav.contact")}</a></li>
            </ul>

            {/* Controls */}
            <div className="nav-controls">
                <button className="nav-lang-btn" onClick={toggleLang} aria-label="Changer de langue">
                    {lang === "fr" ? "EN" : "FR"}
                </button>
                <button className="nav-theme-btn" onClick={toggleTheme} aria-label="Changer de thème">
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}
