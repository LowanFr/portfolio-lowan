import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/project.css";
import Navbar from "../Navbar.tsx";

const projectDetails = {
    unosial: {
        title: "Unosial",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/src/assets/Unosial.png",
        technologies: ["React", "Tailwind", "Node.js"],
    },
    pikacord: {
        title: "Pikacord",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/src/assets/pikacord.png",
        technologies: ["React", "Framer Motion", "Express"],
    },
    inoxtag: {
        title: "Inoxtag",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/src/assets/inoxtag.png",
        technologies: ["Next.js", "Tailwind", "Node.js"],
    },
    neopolis: {
        title: "Neopolis",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/src/assets/neopolis.png",
        technologies: ["React", "Vite", "Framer Motion"],
    },
    raidprotect: {
        title: "RaidProtect",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/src/assets/raidprotect.png",
        technologies: ["React", "Node.js", "Express"],
    }
};

export default function ProjectPage() {
    const { projectId } = useParams();
    const project = projectDetails[projectId as keyof typeof projectDetails];

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/"); // Retourne à Home

        // Scroll vers la section #projects après un petit délai
        setTimeout(() => {
            const section = document.getElementById("projects");
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    if (!project) return <p>Projet introuvable</p>;

    return (
        <div id="root">
            <Navbar />

            {/* Animation de la page de projet */}
            <motion.div
                className="project-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Bouton de retour */}
                <button onClick={handleBack} className="btn-back">
                    ← Retour aux projets
                </button>

                {/* Contenu principal */}
                <div className="project-content flex flex-col md:flex-row items-center gap-8">
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
                        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                        <p className="mb-4">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech) => (
                                <span key={tech} className="tech-badge">
                {tech}
              </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
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