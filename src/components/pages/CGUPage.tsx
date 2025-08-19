import Navbar from "../utils/Navbar.tsx";
import Footer from "../utils/Footer.tsx";
import "../../styles/cgu.css";

export default function CGUPage() {
    return (
        <div id="root">
            <Navbar />

            <main className="cgu-page">
                <h1>Conditions Générales d’Utilisation</h1>

                <p>
                    Bienvenue sur mon site portfolio. En accédant et utilisant ce site, vous acceptez
                    de respecter les présentes conditions générales d’utilisation (CGU).
                </p>

                <h2>1. Accès au site</h2>
                <p>
                    L'accès au site est gratuit et libre. Le site est fourni "tel quel" et je m'efforce
                    de garantir sa disponibilité, mais je ne peux garantir une absence totale d'interruptions
                    ou d'erreurs.
                </p>

                <h2>2. Propriété intellectuelle</h2>
                <p>
                    Tous les contenus présents sur ce site, y compris textes, images, logos, et codes,
                    sont protégés par le droit d’auteur et appartiennent à leur propriétaire respectif.
                    Toute reproduction ou utilisation sans autorisation est interdite.
                </p>

                <h2>3. Responsabilité</h2>
                <p>
                    Je ne suis pas responsable des dommages directs ou indirects pouvant résulter
                    de l'utilisation de ce site. L’utilisateur utilise le site à ses propres risques.
                </p>

                <h2>4. Liens externes</h2>
                <p>
                    Ce site peut contenir des liens vers d’autres sites web. Je ne suis pas responsable
                    du contenu de ces sites externes et l’inclusion de liens ne constitue pas une approbation.
                </p>

                <h2>5. Données personnelles</h2>
                <p>
                    Comme indiqué dans la politique de confidentialité, aucune donnée personnelle n’est collectée
                    via ce site, et aucune action de suivi individuelle n’est effectuée.
                </p>

                <h2>6. Modification des CGU</h2>
                <p>
                    Ces conditions peuvent être mises à jour à tout moment. L'utilisation continue du site
                    vaut acceptation des nouvelles conditions.
                </p>

                <h2>Contact</h2>
                <p>
                    Pour toute question concernant ces CGU, vous pouvez me contacter via la page Contact du site.
                </p>
            </main>

            <Footer />
        </div>
    );
}