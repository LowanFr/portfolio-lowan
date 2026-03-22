import '../styles/experience.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Tab = "experience" | "formation";

interface TimelineEntry {
    titleKey: string;
    companyKey: string;
    descKey: string;
    date: string;
    tags?: string[];
    awards?: string[];
    type: Tab;
}

const entries: TimelineEntry[] = [
    // ── Expériences ──────────────────────────────────────────────────
    {
        type: "experience",
        titleKey: "thales_title",
        companyKey: "thales_company",
        descKey: "thales_desc",
        date: "Mars 2026 – Août 2026",
        tags: ["Cybersécurité", "Thales"],
    },
    {
        type: "experience",
        titleKey: "che_title",
        companyKey: "che_company",
        descKey: "che_desc",
        date: "2026",
        tags: ["CTF", "Offensif", "Red Team"],
        awards: [
            "🏆 Meilleure équipe",
            "🛡️ Meilleure équipe LID",
            "📡 Meilleure équipe LII",
        ],
    },
    {
        type: "experience",
        titleKey: "cnfpt_title",
        companyKey: "cnfpt_company",
        descKey: "cnfpt_desc",
        date: "Avr. 2024 – Juil. 2024",
        tags: ["Active Directory", "GPO", "Provisioning", "Support"],
    },

    // ── Formation ────────────────────────────────────────────────────
    {
        type: "formation",
        titleKey: "m2_title",
        companyKey: "m2_company",
        descKey: "m2_desc",
        date: "2024 – 2026",
        tags: ["Sécurité", "Réseaux", "Virtualisation"],
    },
    {
        type: "formation",
        titleKey: "licence_title",
        companyKey: "licence_company",
        descKey: "licence_desc",
        date: "2021 – 2024",
        tags: ["Algorithmique", "Systèmes", "Développement"],
    },
    {
        type: "formation",
        titleKey: "bac_title",
        companyKey: "bac_company",
        descKey: "bac_desc",
        date: "2021",
        tags: ["NSI", "Mathématiques"],
    },
];

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, delay: i * 0.1 },
    }),
};

export default function Experience() {
    const { t } = useTranslation();
    const [tab, setTab] = useState<Tab>("experience");

    const filtered = entries.filter((e) => e.type === tab);

    return (
        <motion.section
            id="experience"
            className="experience-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2>{t("experience.title")}</h2>

            {/* Tabs */}
            <div className="exp-tabs">
                <button
                    className={`exp-tab ${tab === "experience" ? "active" : ""}`}
                    onClick={() => setTab("experience")}
                >
                    💼 Expériences
                </button>
                <button
                    className={`exp-tab ${tab === "formation" ? "active" : ""}`}
                    onClick={() => setTab("formation")}
                >
                    🎓 Formation
                </button>
            </div>

            {/* Timeline */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={tab}
                    className="timeline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {filtered.map((entry, i) => (
                        <motion.div
                            key={entry.titleKey}
                            className="timeline-item"
                            custom={i}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot" />

                            <div className="timeline-card">
                                <div className="timeline-header">
                                    <div className="timeline-title-block">
                                        <span className="timeline-title">
                                            {t(`experience.roles.${entry.titleKey}`)}
                                        </span>
                                        <span className="timeline-company">
                                            {t(`experience.roles.${entry.companyKey}`)}
                                        </span>
                                    </div>
                                    <span className="timeline-date">{entry.date}</span>
                                </div>

                                <p className="timeline-desc">
                                    {t(`experience.roles.${entry.descKey}`)}
                                </p>

                                {/* Distinctions CHE */}
                                {entry.awards && entry.awards.length > 0 && (
                                    <div className="timeline-awards">
                                        {entry.awards.map((award) => (
                                            <span key={award} className="award-badge">
                                                {award}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Tags tech */}
                                {entry.tags && entry.tags.length > 0 && (
                                    <div className="timeline-tags">
                                        {entry.tags.map((tag) => (
                                            <span key={tag} className="timeline-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.section>
    );
}
