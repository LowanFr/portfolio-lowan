import '../../styles/skillpage.css';
import Navbar from "../Navbar.tsx";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const skillDetails: Record<string, { title: string; description: string; examples?: string[] }> = {
    "HTML-CSS": {
        title: "HTML-CSS",
        description: "J’ai acquis une solide maîtrise de HTML, le langage fondamental du web, ce qui me permet de structurer des pages web de manière sémantique, accessible et optimisée pour le référencement. Grâce à HTML, je suis capable de créer des formulaires interactifs, des tableaux complexes, et d’organiser le contenu pour une navigation fluide et intuitive. Parmi mes projets, j’ai utilisé HTML pour :",
        examples: [
            "Construire le portfolio personnel avec une structure claire et responsive.",
            "Construire un site d'économie circulaire complet avec un système d'authentification, des formulaires de contact ainsi que les objets inhérents au projet de licence.",
            "Construire un site d'agenda complet avec un système de gestion des événements, des formulaires de création et d'édition d'événements, ainsi que des fonctionnalités de recherche et de filtrage en master.",
            "Diverses d'autres projets mineures que ça soit au cours des études ou dans le cadre personnel."
            ]
    },
    "Java": {
        title: "Java",
        description: "J’ai acquis une solide maîtrise de Java, un langage orienté objet très utilisé pour le développement d’applications robustes et évolutives. Grâce à Java, je suis capable de concevoir des programmes modulaires, de gérer des collections de données complexes, de manipuler des fichiers et d’interagir avec des bases de données. J’ai également développé des applications console et des projets académiques avec une logique métier claire et maintenable. Parmi mes projets, j’ai utilisé Java pour :",
        examples: [
            "Créer un jeu de Uno avec gestion des règles, des joueurs humains et IA dans un terminal.",
            "Faire une application mobile avec gestion de permissions, de notifications et d'interactions utilisateur.",
            "Réaliser d'une interface graphique avec JavaFX avec des multiples interactions utilisateur.",
            "Créer un jeu basique avec une interface graphique en utilisant JavaFX avec un pingouin qui se déplace sur une banquise qui s'amoindrie.",
            "Implémenter des structures de données avancées pour des projets académiques, comme des arbres et des graphes.",
            "Réaliser des petits jeux et exercices d’algorithmique pour renforcer ma compréhension de la programmation orientée objet.",
            "Comprendre et réaliser les 'Design Patterns' comme le Singleton, le Factory, etc."
        ]
    }
};

export default function SkillPage() {
    const { skillId } = useParams();
    const navigate = useNavigate();

    const skillKeys = Object.keys(skillDetails);
    const currentIndex = skillKeys.indexOf(skillId as string);
    const skill = skillDetails[skillId as keyof typeof skillDetails];

    if (!skill) return <p>Compétence introuvable</p>;

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + skillKeys.length) % skillKeys.length;
        navigate(`/competences/${skillKeys[prevIndex]}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % skillKeys.length;
        navigate(`/competences/${skillKeys[nextIndex]}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="root">
            <Navbar />

            <motion.div
                className="skill-page max-w-4xl mx-auto p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Navigation entre compétences */}
                <div className="skill-nav flex justify-between mb-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-skill-nav"
                        onClick={handlePrev}
                    >
                        ← Précédent
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-skill-nav"
                        onClick={handleNext}
                    >
                        Suivant →
                    </motion.button>
                </div>

                <h1 className="text-4xl font-bold mb-4">{skill.title}</h1>
                <p className="mb-4">{skill.description}</p>

                {skill.examples && (
                    <ul className="skill-examples list-disc pl-6">
                        {skill.examples.map((ex) => (
                            <motion.li
                                key={ex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {ex}
                            </motion.li>
                        ))}
                    </ul>
                )}
            </motion.div>

            {/* Pied de page simple */}
            <footer className="footer">
                <p>
                    © {new Date().getFullYear()} Esteban DOUILLET —
                    <a href="https://github.com/lowanfr" target="_blank" rel="noreferrer">
                        GitHub
                    </a> |
                    <a href="https://www.linkedin.com/in/estebandouillet" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </p>
            </footer>
        </div>
    );
}