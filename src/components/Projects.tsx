import '../styles/projects.css';
import pikacordImage from '../assets/pikacord.png';
import unosialImage from '../assets/unosial.png';
import inoxtagImage from '../assets/inoxtag.png';
import raidprotectImage from '../assets/raidprotect.png';
import neopolisImage from '../assets/neopolis.png';
import infraImage from '../assets/diagramme_reseau_bravo.png';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Tag = "all" | "security" | "infra" | "dev" | "ctf";

interface Project {
    title: string;
    description: string;
    descEn?: string;
    link: string;
    image?: string;
    emoji?: string;
    gradientFrom?: string;
    gradientTo?: string;
    date: string;
    tags: Exclude<Tag, "all">[];
}

const projects: Project[] = [
    // ── Nouveaux projets ─────────────────────────────────────────
    {
        title: "RGPDScan",
        description: "Outil d'audit RGPD automatisé — analyse de sites web via Playwright, rapport PDF via WeasyPrint.",
        descEn: "Automated GDPR audit tool — website analysis with Playwright, PDF report with WeasyPrint.",
        link: "projets/rgpdscan",
        emoji: "🔍",
        gradientFrom: "#1e3a5f",
        gradientTo: "#0e1a2e",
        date: "2025",
        tags: ["security", "dev"],
    },
    {
        title: "Infrastructure Complexe",
        description: "PfSense, VyOS, Teleport PAM, VLANs, Grafana, PKI maison — infrastructure réseau complète.",
        descEn: "PfSense, VyOS, Teleport PAM, VLANs, Grafana, custom PKI — full network infrastructure.",
        link: "projets/infrastructure",
        image: infraImage,
        date: "2025",
        tags: ["infra", "security"],
    },
    {
        title: "VPS Sécurisé",
        description: "Durcissement d'un VPS : CrowdSec, Fail2ban, psad, Nginx, Docker, Grafana + Loki.",
        descEn: "VPS hardening: CrowdSec, Fail2ban, psad, Nginx, Docker, Grafana + Loki.",
        link: "projets/vps-securise",
        emoji: "🛡️",
        gradientFrom: "#2e1a1a",
        gradientTo: "#1a0e0e",
        date: "2024-2025",
        tags: ["infra", "security"],
    },
    {
        title: "Cyber Humanum Est 2026",
        description: "Lieutenant offensif — équipe Cryptanga. 🏆 Meilleure équipe · 🛡️ LID · 📡 LII",
        descEn: "Offensive Lieutenant — team Cryptanga. 🏆 Best team · 🛡️ Defensive · 📡 Influence",
        link: "projets/che2026",
        emoji: "⚔️",
        gradientFrom: "#2e1a3a",
        gradientTo: "#1a0e2e",
        date: "2026",
        tags: ["ctf", "security"],
    },
    // ── Projets universitaires ────────────────────────────────────
    {
        title: "Compilateur Zoot",
        description: "Compilateur complet d'un langage inventé — analyse lexicale, syntaxique, sémantique et génération de code.",
        descEn: "Full compiler for a custom language — lexical, syntactic, semantic analysis and code generation.",
        link: "projets/compilateur-zoot",
        emoji: "⚙️",
        gradientFrom: "#1a1a2e",
        gradientTo: "#0e0e1a",
        date: "2023",
        tags: ["dev"],
    },
    {
        title: "Malware & Forensics",
        description: "Développement d'un malware Windows XP en contexte académique, puis rétro-ingénierie d'un malware adverse — code auto-modifiant, anti-debug, IDA Pro, Ghidra.",
        descEn: "Academic malware development for Windows XP, then reverse engineering of an adversary malware — self-modifying code, anti-debug, IDA Pro, Ghidra.",
        link: "projets/malware-forensics",
        emoji: "🦠",
        gradientFrom: "#1a0e0e",
        gradientTo: "#2e1010",
        date: "2025",
        tags: ["security"],
    },
    {
        title: "ProVerif — EAP-PSK",
        description: "Modélisation formelle du protocole EAP-PSK avec ProVerif — vérification des propriétés de sécurité (confidentialité, authentification).",
        descEn: "Formal modelling of the EAP-PSK protocol with ProVerif — verification of security properties (confidentiality, authentication).",
        link: "projets/proverif-eap-psk",
        emoji: "🔐",
        gradientFrom: "#0e1a2e",
        gradientTo: "#1a2e3a",
        date: "2025",
        tags: ["security"],
    },

    // ── Anciens projets ──────────────────────────────────────────
    {
        title: "Pikacord",
        description: "Fondateur — bot Discord communautaire.",
        descEn: "Founder — community Discord bot.",
        link: "projets/pikacord",
        image: pikacordImage,
        date: "2018-2024",
        tags: ["dev"],
    },
    {
        title: "Neopolis",
        description: "Développeur — jeu Discord urbain stratégique.",
        descEn: "Developer — strategic urban Discord game.",
        link: "projets/neopolis",
        image: neopolisImage,
        date: "2022-2023",
        tags: ["dev"],
    },
    {
        title: "Inoxtag",
        description: "Responsable & développeur — outils communautaires.",
        descEn: "Lead developer — community tools.",
        link: "projets/inoxtag",
        image: inoxtagImage,
        date: "2021-2023",
        tags: ["dev"],
    },
    {
        title: "Unosial",
        description: "Responsable & développeur — bot Discord multifonction.",
        descEn: "Lead developer — multipurpose Discord bot.",
        link: "projets/unosial",
        image: unosialImage,
        date: "2018-2023",
        tags: ["dev"],
    },
    {
        title: "RaidProtect",
        description: "Responsable Staff — bot anti-raid Discord.",
        descEn: "Staff Lead — Discord anti-raid bot.",
        link: "projets/raidprotect",
        image: raidprotectImage,
        date: "2019",
        tags: ["dev"],
    },
];

const tagColors: Record<Exclude<Tag, "all">, string> = {
    security: "tag-security",
    infra: "tag-infra",
    dev: "tag-dev",
    ctf: "tag-ctf",
};

export default function Projects() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [activeFilter, setActiveFilter] = useState<Tag>("all");

    const filtered = activeFilter === "all"
        ? projects
        : projects.filter((p) => p.tags.includes(activeFilter));

    return (
        <motion.section
            id="projects"
            className="projects-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2>{t("projects.title")}</h2>

            {/* Filtres */}
            <div className="projects-filters">
                {(["all", "security", "infra", "dev", "ctf"] as Tag[]).map((f) => (
                    <button
                        key={f}
                        className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                        onClick={() => setActiveFilter(f)}
                    >
                        {f === "all" ? "Tous" : t(`projects.tags.${f}`)}
                    </button>
                ))}
            </div>

            {/* Grille */}
            <div className="projects-grid">
                <AnimatePresence>
                    {filtered.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            onClick={() => {
                                navigate(project.link);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        >
                            {/* Image ou placeholder emoji */}
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            ) : (
                                <div
                                    className="project-image-placeholder"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                                    }}
                                >
                                    {project.emoji}
                                </div>
                            )}

                            {/* Contenu */}
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="project-description">
                                    {i18n.language === "en" && project.descEn
                                        ? project.descEn
                                        : project.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`project-tag ${tagColors[tag]}`}
                                    >
                                        {t(`projects.tags.${tag}`)}
                                    </span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="project-footer">
                                <span className="project-date">{project.date}</span>
                                <Link
                                    to={project.link}
                                    className="project-link"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {t("projects.see")} →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.section>
    );
}
