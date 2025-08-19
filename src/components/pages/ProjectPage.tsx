import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import "../../styles/project.css";
import Navbar from "../Navbar.tsx";
import pikacordImage from '../../assets/pikacord.png';
import unosialImage from '../../assets/unosial.png';
import inoxtagImage from '../../assets/inoxtag.png';
import raidprotectImage from '../../assets/raidprotect.png';
import neopolisImage from '../../assets/neopolis.png';

const projectDetails = {
    unosial: {
        title: "Unosial",
        description: `
**Unosial** a débuté comme un bot Discord, puis est devenu un collectif spécialisé dans la création d’outils pour communautés en ligne.

Nous avons collaboré avec des personnalités comme **Inoxtag**, en développant des bots Discord et des fonctionnalités interactives pour ses lives.

- Conception d’un site web pour présenter les services et projets.
- Missions pour d’autres influenceurs et participation à des événements majeurs comme le **ZEvent**.
- Partenariats avec des entreprises telles que **Coca-Cola**.

**Mon rôle :** maintenance de tous les bots et outils créés et gestion de la communauté pour assurer leur bon fonctionnement.
        `,
        image: unosialImage,
        technologies: [
            "TypeScript", "JavaScript", "Node.js", "MariaDB", "PostgreSQL", "Java", "Linux", "Git",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    pikacord: {
        title: "Pikacord",
        description: `
**Pikacord** est un bot Discord que j'ai fondé en 2018, conçu pour permettre aux utilisateurs de collectionner des créatures virtuelles en faisant preuve d’attention et de réactivité.  

- **Développement de mécanismes interactifs** pour stimuler l’engagement des utilisateurs, avec des défis et récompenses basés sur la rapidité et la stratégie.  
- **Optimisation de l’expérience utilisateur**, en améliorant la fluidité des interactions et la lisibilité des informations présentées par le bot.  
- **Maintenance et mises à jour régulières**, pour garantir la compatibilité avec les évolutions de Discord et l’ajout de nouvelles fonctionnalités stimulantes.  
- **Gestion de la communauté** : suivi des retours, adaptation des fonctionnalités et amélioration constante du bot selon les besoins des utilisateurs.  
- **Apprentissage et innovation** : ce projet m’a permis de consolider mes compétences en JavaScript, Node.js, architecture serveur et gestion de bases de données tout en développant ma créativité et ma capacité à résoudre des problèmes.
- **Collaboration avec un graphiste** pour créer des visuels attrayants et engageants, renforçant l'identité du bot et améliorant l'expérience utilisateur.
        `,
        image: pikacordImage,
        technologies: [
            "Git", "Linux", "Node.js", "JavaScript", "PostgreSQL",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    inoxtag: {
        title: "Inoxtag",
        description: `
Avec Unosial, j'ai eu l'opportunité de travailler avec **Inoxtag**, un influenceur majeur sur YouTube et Twitch. Avec le temps, avec deux amis, nous étions chargés de la gestion de sa communauté et du développement de ses outils interactifs. Il était donc nécessaire de réaliser des recrutements ainsi que des outils performants et efficaces pour sécuriser la communauté.

- **Développement de bots Discord** pour automatiser la modération et améliorer l'interaction avec la communauté.
- **Gestion de la communauté** : modération, gestion des permissions et protection contre les comportements indésirables.
        `,
        image: inoxtagImage,
        technologies: [
            "Git", "Linux", "Node.js", "JavaScript", "PostgreSQL",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    neopolis: {
        title: "Neopolis",
        description: `
Neopolis est un jeu mobile de simulation de monopoly avec des mécaniques de jeu similaire à Pokémon Go. Mon rôle était d'aider bénévolement en créant des outils sur Discord pour aider l'équipe du jeu à porter assistance aux joueurs. Je participais aussi au développement de mécanismes pour les événements afin de fidéliser la communauté.

- **Développement d'outils Discord** pour la gestion de la communauté.
- **Création de mécanismes de jeu** pour les événements sur les réseaux, visant à renforcer l'engagement des joueurs.
        `,
        image: neopolisImage,
        technologies: [
            "Git", "Node.js", "JavaScript", "PostgreSQL", "Linux",
            "Autonomie et initiative", "Travail en équipe", "Communication", "Gestion du temps",
            "Résolution de problèmes", "Adaptabilité"
        ],
    },
    raidprotect: {
        title: "RaidProtect",
        description: `
**RaidProtect** vise à sécuriser et gérer des communautés en ligne sur Discord.

Mon rôle était de modérer la communauté puis dans un second temps, de gérer l'équipe de modération. Je n'ai pas participé au développement du bot, mais j'ai contribué à la gestion de la communauté.
        `,
        image: raidprotectImage,
        technologies: [
            "Travail en équipe", "Communication"
        ],
    }
};

export default function ProjectPage() {
    const { projectId } = useParams();
    const project = projectDetails[projectId as keyof typeof projectDetails];
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById("projects");
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    if (!project) return <p>Projet introuvable</p>;

    return (
        <div id="root">
            <Navbar />

            <motion.div
                className="project-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <button onClick={handleBack} className="btn-back">
                    ← Retour aux projets
                </button>

                <div className="project-content flex flex-col md:flex-row gap-8">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg shadow-lg w-full md:w-1/2"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.div
                        className="project-text w-full md:w-1/2"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>{project.title}</h1>
                        <ReactMarkdown
                            components={{
                                p: ({ node, ...props }) => <p {...props} />,
                                li: ({ node, ...props }) => <li {...props} />,
                                strong: ({ node, ...props }) => <strong {...props} />,
                            }}
                        >
                            {project.description}
                        </ReactMarkdown>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies?.map((tech) => (
                                <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <footer className="footer">
                <p>
                    © {new Date().getFullYear()} Esteban DOUILLET —
                    <a href="https://github.com/lowanfr" target="_blank" rel="noreferrer">GitHub</a> |
                    <a href="https://www.linkedin.com/in/estebandouillet" target="_blank" rel="noreferrer">LinkedIn</a>
                </p>
            </footer>
        </div>
    );
}