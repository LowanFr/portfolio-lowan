import '../../styles/skillpage.css';
import Navbar from "../utils/Navbar.tsx";
import Footer from "../utils/Footer";
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
            "Création d'un compilateur d'un langage de programmation fictif, avec gestion des erreurs et des optimisations.",
            "Créer un jeu de Uno avec gestion des règles, des joueurs humains et IA dans un terminal.",
            "Faire une application mobile avec gestion de permissions, de notifications et d'interactions utilisateur.",
            "Réaliser d'une interface graphique avec JavaFX avec des multiples interactions utilisateur.",
            "Créer un jeu basique avec une interface graphique en utilisant JavaFX avec un pingouin qui se déplace sur une banquise qui s'amoindrie.",
            "Implémenter des structures de données avancées pour des projets académiques, comme des arbres et des graphes.",
            "Réaliser des petits jeux et exercices d’algorithmique pour renforcer ma compréhension de la programmation orientée objet.",
            "Comprendre et réaliser les 'Design Patterns' comme le Singleton, le Factory, etc."
        ]
    },
    "C": {
        title: "C",
        description: "J’ai développé une bonne maîtrise du langage C, qui m’a permis de comprendre en profondeur les concepts fondamentaux de la programmation, tels que la gestion de la mémoire, les pointeurs et les structures de données. Avec C, j’ai pu concevoir des programmes efficaces et optimiser leur performance, tout en appliquant des notions de programmation bas-niveau essentielles pour la compréhension des systèmes informatiques. Parmi mes projets, j’ai utilisé C pour :",
        examples: [
            "Développer des algorithmes de tri et de recherche pour des projets académiques.",
            "Implémenter des structures de données comme des listes chaînées, des piles et des files d’attente.",
            "Créer des programmes pour manipuler les pointeurs, gérer la mémoire dynamique et les entrées/sorties.",
            "Gérer des processus et des threads dans le cadre de projets universitaires.",
            "Analyser et optimiser la complexité algorithmique de plusieurs algorithmes.",
            "Identifier et corriger des fuites de mémoire dans des applications C."
        ]
    },
    "PHP": {
        title: "PHP",
        description: "J’ai acquis une solide expérience en PHP, le langage côté serveur qui me permet de créer des applications web dynamiques et interactives. Grâce à PHP, je peux gérer efficacement les données, sécuriser les interactions utilisateur et intégrer des fonctionnalités avancées via des API externes. J’ai utilisé PHP pour concevoir des systèmes robustes et fiables qui répondent aux besoins spécifiques de chaque projet. Parmi mes projets, j’ai utilisé PHP pour :",
        examples: [
            "Développer des applications web dynamiques avec PHP, en intégrant des bases de données MySQL pour la gestion des données.",
            "Mettre en place des formulaires de contact et d'inscription avec validation côté serveur.",
            "Intégrer des API tierces pour enrichir les fonctionnalités des applications web.",
            "Gérer les sessions utilisateur et l'authentification pour sécuriser les applications."
        ]
    },
    "SQL": {
        title: "SQL",
        description: "J’ai développé une solide maîtrise du langage SQL et des bases de données relationnelles, me permettant de concevoir, gérer et optimiser des systèmes de stockage de données fiables. Grâce à SQL, je suis capable de manipuler efficacement les données, sécuriser l’accès et améliorer les performances des requêtes pour répondre aux besoins des projets. Parmi mes expériences, j’ai utilisé SQL pour :",
        examples: [
            "Concevoir et gérer des bases de données relationnelles pour des projets académiques.",
            "Écrire des requêtes SQL complexes pour extraire, insérer, mettre à jour et supprimer des données.",
            "Optimiser les performances des requêtes en utilisant des index et des jointures.",
            "Gérer les permissions d'accès aux données et assurer la sécurité des bases de données.",
            "Créer des vues et des procédures stockées pour simplifier les opérations courantes sur les données.",
            "Intégrer des bases de données SQL dans des applications web pour la gestion des données."
        ]
    },
    "MongoDB": {
        title: "MongoDB",
        description: "J’ai acquis une bonne maîtrise de MongoDB, une base de données NoSQL orientée documents, qui me permet de gérer des données non structurées et semi-structurées de manière flexible et évolutive. Grâce à MongoDB, je peux concevoir des schémas de données adaptés aux besoins spécifiques des projets, tout en assurant une performance optimale pour les opérations de lecture et d’écriture. Parmi mes projets, j’ai utilisé MongoDB pour :",
        examples: [
            "Interroger des bases de données MongoDB pour des projets académiques, en utilisant des requêtes complexes pour extraire des données pertinentes.",
            "Gérer des collections de données non structurées, en utilisant des agrégations pour analyser les données."
        ]
    },
    "Node.js": {
        title: "Node.js",
        description: "J’ai acquis une expertise en Node.js pour développer des applications backend performantes et évolutives. Cette compétence me permet de créer des serveurs, gérer des bases de données et mettre en place des API REST, tout en assurant la communication en temps réel entre clients et serveurs. Parmi mes expériences avec Node.js, j’ai réalisé :",
        examples: [
            "Concevoir des dizaines de bots Discord pour automatiser des tâches, gérer des interactions utilisateur et intégrer des API externes.",
            "Utilisation de base de données SQL (MariaDB, PostgreSQL) et NoSQL (MongoDB) pour stocker et gérer les données des bots.",
        ]
    },
    "Express.js": {
        title: "Express.js",
        description: "J’ai acquis une solide maîtrise d’Express.js, un framework minimaliste pour Node.js, qui me permet de créer des applications web et des API REST de manière rapide et efficace. Grâce à Express.js, je peux gérer les requêtes HTTP, définir des routes et des middlewares, tout en assurant une structure claire et maintenable pour les projets. Parmi mes projets, j’ai utilisé Express.js pour :",
        examples: [
            "Développer des applications web avec Express.js, en créant des routes et des middlewares pour gérer les requêtes HTTP.",
            "Intégrer des bases de données SQL et NoSQL pour la gestion des données dans les applications Express.",
            "Mettre en place des systèmes d'authentification et de gestion des sessions utilisateur."
        ]
    },
    "Python": {
        title: "Python",
        description: "J’ai acquis une solide maîtrise de Python, un langage polyvalent et puissant, qui me permet de développer des applications web, des scripts d’automatisation et des analyses de données. Grâce à Python, je peux concevoir des programmes clairs et maintenables, tout en utilisant des bibliothèques tierces pour enrichir les fonctionnalités des projets. Parmi mes projets, j’ai utilisé Python pour :",
        examples: [
            "Développer des scripts d'automatisation pour simplifier les tâches répétitives.",
            "Utiliser des bibliothèques comme Pandas et NumPy pour l'analyse de données.",
            "Réaliser des programmes d'apprentissage automatique avec des bibliothèques externes.",
        ]
    },
    "JavaScript": {
        title: "JavaScript",
        description: "JavaScript est au cœur de mes compétences frontend et backend, me permettant de créer des applications interactives et dynamiques. Grâce à JavaScript, je peux manipuler le DOM, gérer les événements utilisateur, et orchestrer la communication entre client et serveur. Parmi mes réalisations avec JavaScript, j’ai :",
        examples: [
            "Réalisation des bots Discord (avec Node.js) pour automatiser des tâches, gérer des interactions utilisateur et intégrer des API externes.",
            "Intégrer des API tierces pour enrichir les fonctionnalités des applications web.",
            "Créer des animations et des transitions fluides pour améliorer l'expérience utilisateur.",
            "Utiliser des bibliothèques comme Axios pour gérer les requêtes HTTP et les interactions avec les serveurs.",
            "Gérer des WebSockets pour des communications en temps réel dans les applications web."
        ]
    },
    "TypeScript": {
        title: "TypeScript",
        description: "TypeScript me permet d’écrire du JavaScript plus sûr et plus structuré grâce à son typage statique. Même si je l’utilise principalement pour des projets personnels ou pour renforcer mes applications JavaScript, cela me permet de prévenir des erreurs courantes et de rendre le code plus maintenable.",
        examples: [
            "Renforcer des projets JavaScript existants avec des types pour éviter des erreurs d’exécution.",
            "Utiliser TypeScript avec React pour bénéficier de l’auto-complétion et de la vérification de type.",
            "Améliorer la lisibilité et la maintenabilité du code sur des projets personnels ou académiques."
        ]
    },
    "Git": {
        title: "Git",
        description: "Git est l’outil que j’utilise pour gérer le versionnage de tous mes projets, qu’ils soient personnels ou académiques. Il me permet de suivre l’évolution du code, de collaborer efficacement et d’assurer la stabilité de mes applications.",
        examples: [
            "Gérer le versionnage de mes projets personnels et académiques avec Git.",
            "Collaborer sur des projets via des branches, pull requests et merges pour maintenir un workflow organisé.",
            "Suivre les modifications du code, résoudre les conflits et maintenir un historique clair et structuré."
        ]
    },
    "Linux": {
        title: "Linux",
        description: "J’ai acquis une bonne maîtrise de Linux, un système d’exploitation open source, qui me permet de travailler efficacement en ligne de commande, de gérer des serveurs et d’automatiser des tâches. Grâce à Linux, je peux configurer des environnements de développement, déployer des applications et assurer la sécurité des systèmes. Parmi mes projets, j’ai utilisé Linux pour :",
        examples: [
            "Configurer des serveurs web pour héberger des applications et des sites web.",
            "Gérer les permissions et la sécurité des fichiers et des processus.",
            "Utiliser des outils en ligne de commande pour le développement et la gestion des systèmes."
        ]
    },
    "Autonomieetinitiative": {
        title: "Autonomie et initiative",
        description: "Je sais travailler de manière indépendante, prendre des décisions et anticiper les besoins d’un projet sans supervision constante.",
        examples: [
            "Prendre en charge des projets personnels de bout en bout.",
            "Proposer des améliorations ou des optimisations sur des projets existants.",
            "Gérer efficacement les tâches sans dépendre constamment des directives externes."
        ]
    },
    "Travailenequipe": {
        title: "Travail en équipe",
        description: "Je collabore efficacement avec différents profils, en partageant les responsabilités et en contribuant à un objectif commun.",
        examples: [
            "Participer à des projets académiques en répartissant les tâches selon les compétences de chacun.",
            "Collaborer sur des projets open-source ou personnels en coordination avec d’autres développeurs.",
            "Communiquer régulièrement pour garantir la cohérence et la qualité du travail collectif."
        ]
    },

    "Communication": {
        title: "Communication",
        description: "Je sais transmettre clairement mes idées, écouter les autres et adapter mon discours selon le contexte et l’audience.",
        examples: [
            "Présenter des projets techniques à un public non technique.",
            "Rédiger de la documentation claire et compréhensible.",
            "Participer activement aux réunions pour partager l’avancement et les problématiques rencontrées."
        ]
    },

    "Gestiondutemps": {
        title: "Gestion du temps",
        description: "Je sais organiser mon travail efficacement, prioriser les tâches et respecter les délais impartis.",
        examples: [
            "Planifier les étapes d’un projet et estimer les temps nécessaires.",
            "Équilibrer plusieurs projets ou missions simultanément sans perte de qualité.",
            "Utiliser des outils et méthodes pour optimiser ma productivité."
        ]
    },

    "Resolutiondeproblemes": {
        title: "Résolution de problèmes",
        description: "J’ai l’habitude d’analyser rapidement les situations complexes et de proposer des solutions efficaces et pertinentes.",
        examples: [
            "Identifier les bugs et problèmes dans le code et les corriger de manière structurée.",
            "Proposer des solutions alternatives face à des contraintes techniques ou de temps.",
            "Optimiser des processus ou des algorithmes pour améliorer les performances."
        ]
    },
    "Adaptabilite": {
        title: "Adaptabilité",
        description: "Je m’adapte facilement à de nouveaux environnements, technologies ou méthodes de travail.",
        examples: [
            "Passer d’un projet front-end à un projet back-end sans difficulté.",
            "Apprendre rapidement de nouvelles technologies selon les besoins du projet.",
            "S’adapter aux changements de priorités ou aux contraintes imprévues dans un projet."
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

            <Footer />
        </div>
    );
}