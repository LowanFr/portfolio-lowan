import '../styles/projects.css'
import { motion } from "framer-motion";

const projects = [
    {
        title: "Pikacord",
        description: "Fondateur",
        link: "projets/pikacord",
        image: "/src/assets/pikacord.png",
        date: "2018-2024"
    },
    {
        title: "Neopolis",
        description: "Développeur",
        link: "projets/neopolis",
        image: "/src/assets/neopolis.png",
        date: "2022-2023"
    },
    {
        title: "Inoxtag",
        description: "Responsable et développeur",
        link: "projets/inoxtag",
        image: "/src/assets/inoxtag.png",
        date: "2021-2023"
    },
    {
        title: "Unosial",
        description: "Responsable et développeur",
        link: "projets/unosial",
        image: "/src/assets/unosial.png",
        date: "2018-2023"
    },
    {
        title: "RaidProtect",
        description: "Responsable Staff",
        link: "projets/raidprotect",
        image: "/src/assets/raidprotect.png",
        date: "2019"
    }
];

export default function Projects() {
    return (
        <motion.section
            id="projects"
            className="projects-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2>Mes Projets</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />

                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>

                        <div className="project-footer">
                            <span className="project-date">{project.date}</span>
                            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                                Voir le projet
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}