import Navbar from "../utils/Navbar.tsx";
import Footer from "../utils/Footer.tsx";
import "../../styles/legal.css";

export default function LegalPage() {
    return (
        <div id="root">
            <Navbar />

            <main className="legal-page">
                <h1>Mentions légales</h1>

                <h2>Éditeur du site</h2>
                <p>
                    Ce site est édité par <strong>Esteban DOUILLET</strong>, étudiant et développeur indépendant.
                </p>

                <h2>Coordonnées</h2>
                <p>
                    Email : <a href="mailto:contact@lowan.fr">contact@lowan.fr</a><br />
                    Site web : <a href="https://lowan.fr">https://lowan.fr</a>
                </p>

                <h2>Hébergement</h2>
                <p>
                    Le site est hébergé sur <a href="https://pages.github.com">GitHub Pages</a> pour le contenu statique.
                </p>

                <h2>Propriété intellectuelle</h2>
                <p>
                    L’ensemble du contenu présent sur ce site (textes, images, logos, icônes) est la propriété de
                    Esteban DOUILLET ou de ses partenaires. Toute reproduction, totale ou partielle, est interdite
                    sans autorisation préalable.
                </p>

                <h2>Responsabilité</h2>
                <p>
                    L’éditeur ne peut être tenu responsable des dommages directs ou indirects résultant de l’accès
                    ou de l’utilisation de ce site.
                </p>

                <h2>Liens externes</h2>
                <p>
                    Les liens vers d’autres sites sont fournis à titre informatif. L’éditeur n’assume aucune responsabilité
                    concernant leur contenu ou leur politique de confidentialité.
                </p>
            </main>

            <Footer />
        </div>
    );
}