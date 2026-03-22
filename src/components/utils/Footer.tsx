import '../../styles/home.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <span>© {new Date().getFullYear()} Esteban DOUILLET</span>
            <span className="footer-sep">·</span>
            <a href="https://github.com/lowanfr" target="_blank" rel="noreferrer">GitHub</a>
            <span className="footer-sep">·</span>
            <a href="https://www.linkedin.com/in/estebandouillet" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="footer-sep">·</span>
            <Link to="/privacy">{t("footer.privacy")}</Link>
            <span className="footer-sep">·</span>
            <Link to="/cgu">{t("footer.cgu")}</Link>
            <span className="footer-sep">·</span>
            <Link to="/legal">{t("footer.legal")}</Link>
        </footer>
    );
}
