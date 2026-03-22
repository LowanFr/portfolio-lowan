import '../styles/skills.css';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HardSkill {
    name: string;
    level: number;
}

interface SkillGroup {
    label: string;
    icon: string;
    skills: HardSkill[];
}

const skillGroups: SkillGroup[] = [
    {
        label: "Langages",
        icon: "💻",
        skills: [
            { name: "JavaScript", level: 85 },
            { name: "TypeScript", level: 70 },
            { name: "Python", level: 70 },
            { name: "Java", level: 70 },
            { name: "PHP", level: 75 },
            { name: "C", level: 65 },
        ],
    },
    {
        label: "Web & Frameworks",
        icon: "🌐",
        skills: [
            { name: "React", level: 80 },
            { name: "Next.js", level: 60 },
            { name: "Node.js", level: 90 },
            { name: "FastAPI", level: 65 },
            { name: "HTML / CSS", level: 85 },
        ],
    },
    {
        label: "Bases de données",
        icon: "🗄️",
        skills: [
            { name: "SQL", level: 90 },
            { name: "MongoDB", level: 60 },
            { name: "Redis", level: 55 },
        ],
    },
    {
        label: "Sécurité & Infrastructure",
        icon: "🔒",
        skills: [
            { name: "Linux", level: 80 },
            { name: "Docker", level: 70 },
            { name: "Nginx", level: 65 },
            { name: "CrowdSec", level: 60 },
            { name: "PfSense", level: 65 },
            { name: "PKI / TLS", level: 60 },
            { name: "Grafana", level: 60 },
            { name: "Git", level: 85 },
        ],
    },
    {
        label: "Analyse & Cryptographie",
        icon: "🔬",
        skills: [
            { name: "Reverse Engineering", level: 65 },
            { name: "Assembleur x86", level: 60 },
            { name: "IDA Pro / Ghidra", level: 65 },
            { name: "Cryptographie", level: 65 },
            { name: "Vérification formelle", level: 60 },
        ],
    },
];

const softSkills = [
    { name: "Autonomie & initiative", emoji: "🧭" },
    { name: "Travail en équipe", emoji: "🤝" },
    { name: "Communication", emoji: "💬" },
    { name: "Gestion du temps", emoji: "⏰" },
    { name: "Résolution de problèmes", emoji: "🧩" },
    { name: "Adaptabilité", emoji: "🔄" },
];

export default function Skills() {
    const { t } = useTranslation();

    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2>{t("skills.title")}</h2>

            {/* Hard skills par groupe */}
            <div className="skills-groups">
                {skillGroups.map((group, gi) => (
                    <motion.div
                        key={group.label}
                        className="skill-group"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: gi * 0.1 }}
                    >
                        <p className="skill-group-label">
                            <span>{group.icon}</span> {group.label}
                        </p>
                        <div className="skill-group-list">
                            {group.skills.map((skill, si) => (
                                <div key={skill.name} className="skill-row">
                                    <div className="skill-row-header">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-pct">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <motion.div
                                            className="skill-bar-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.9, delay: 0.1 + si * 0.06 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Soft skills */}
            <div className="soft-skills-section">
                <p className="skill-group-label">
                    <span>🧠</span> {t("skills.soft")}
                </p>
                <div className="soft-skills-grid">
                    {softSkills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            className="soft-pill"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                        >
                            <span className="soft-pill-emoji">{skill.emoji}</span>
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
