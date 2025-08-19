import Navbar from "../utils/Navbar.tsx";
import Footer from "../utils/Footer.tsx";
import "../../styles/privacy.css";

export default function PrivacyPage() {
    return (
        <div id="root">
            <Navbar />

            <main className="privacy-page">
                <h1>Politique de confidentialité</h1>

                <p>
                    Votre vie privée est importante pour moi. Ce site ne collecte aucune donnée
                    personnelle identifiable et n’utilise aucun cookie.
                </p>

                <h2>Informations collectées</h2>
                <p>
                    Seules des statistiques anonymes et techniques sont enregistrées via Cloudflare,
                    telles que le pays d'origine des visiteurs, le nombre de visites et les pages consultées.
                    Ces données ne permettent en aucun cas d'identifier un utilisateur individuellement.
                </p>

                <h2>Cookies</h2>
                <p>
                    Aucune donnée personnelle n’est stockée via des cookies sur ce site. Les outils
                    utilisés pour le suivi (Cloudflare) ne déposent pas de cookie.
                </p>

                <h2>Utilisation des données</h2>
                <p>
                    Les informations collectées sont uniquement utilisées pour analyser le trafic du site
                    et améliorer l’expérience utilisateur. Elles restent anonymes et ne sont jamais partagées.
                </p>

                <h2>Vos droits</h2>
                <p>
                    Comme aucune donnée personnelle n’est collectée, il n’y a pas de données à accéder,
                    corriger ou supprimer. Vous pouvez naviguer librement et en toute sécurité.
                </p>

                <h2>Contact</h2>
                <p>
                    Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter via la page Contact du site.
                </p>
            </main>

            <Footer />
        </div>
    );
}