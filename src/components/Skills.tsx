import '../styles/skills.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const skills = [
    { name: "HTML-CSS", level: 80, soft_skill: false },
    { name: "Java", level: 75, soft_skill: false },
    { name: "C", level: 65, soft_skill: false },
    { name: "PHP", level: 80, soft_skill: false },
    { name: "SQL", level: 95, soft_skill: false },
    { name: "MongoDB", level: 40, soft_skill: false },
    { name: "Node.js", level: 90, soft_skill: false },
    { name: "Express.js", level: 45, soft_skill: false },
    { name: "Python", level: 70, soft_skill: false },
    { name: "JavaScript", level: 85, soft_skill: false },
    { name: "TypeScript", level: 70, soft_skill: false },
    { name: "Git", level: 80, soft_skill: false },
    { name: "Linux", level: 50, soft_skill: false },
    { name: "Autonomie et initiative", level: "🧭", soft_skill: true },
    { name: "Travail en équipe", level: "🤝", soft_skill: true },
    { name: "Communication", level: "💬", soft_skill: true },
    { name: "Gestion du temps", level: "⏰", soft_skill: true },
    { name: "Résolution de problèmes", level: "🧩", soft_skill: true },
    { name: "Adaptabilité", level: "🔄", soft_skill: true },
];

export default function Skills() {
    const navigate = useNavigate();

    const handleClick = (skillName: string) => {
        navigate(`/competences/${skillName}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2>Mes compétences</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className={`skill-card ${skill.soft_skill ? 'soft-skill' : 'hard-skill'}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        onClick={() => handleClick(skill.name
                            .normalize("NFD")        // sépare les caractères et les accents
                            .replace(/[\u0300-\u036f]/g, "") // enlève tous les accents
                            .replace(/\s+/g, "")     // enlève tous les espaces
                        )}
                        style={{ cursor: "pointer" }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                            backgroundColor: skill.soft_skill ? "#535bf2" : undefined
                        }}
                    >
                        <h3>{skill.name}</h3>

                        {!skill.soft_skill ? (
                            <>
                                <div className="skill-bar-background">
                                    <motion.div
                                        className="skill-bar"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                    />
                                </div>
                                <span className="skill-level">{skill.level}%</span>
                            </>
                        ) : (
                            <div className="soft-skill-badge">
                                {skill.level}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}