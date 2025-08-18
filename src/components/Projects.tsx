import '../styles/projects.css'
import pikacordImage from '../assets/pikacord.png';
import unosialImage from '../assets/unosial.png';
import inoxtagImage from '../assets/inoxtag.png';
import raidprotectImage from '../assets/raidprotect.png';
import neopolisImage from '../assets/neopolis.png';
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

const projects = [
    {
        title: "Pikacord",
        description: "Fondateur",
        link: "projets/pikacord",
        image: pikacordImage,
        date: "2018-2024"
    },
    {
        title: "Neopolis",
        description: "Développeur",
        link: "projets/neopolis",
        image: neopolisImage,
        date: "2022-2023"
    },
    {
        title: "Inoxtag",
        description: "Responsable et développeur",
        link: "projets/inoxtag",
        image: inoxtagImage,
        date: "2021-2023"
    },
    {
        title: "Unosial",
        description: "Responsable et développeur",
        link: "projets/unosial",
        image: unosialImage,
        date: "2018-2023"
    },
    {
        title: "RaidProtect",
        description: "Responsable Staff",
        link: "projets/raidprotect",
        image: raidprotectImage,
        date: "2019"
    }
];

export default function Projects() {
    const navigate = useNavigate();

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
                        onClick={() => {
                            navigate(project.link);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />

                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>

                        <div className="project-footer">
                            <span className="project-date">{project.date}</span>
                            <Link to={project.link} className="project-link">
                                Voir le projet
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}