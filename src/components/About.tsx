import '../styles/about.css';
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <motion.section
            id="about"
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2>{t("about.title")}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
                    <p dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
                    <p dangerouslySetInnerHTML={{ __html: t("about.p3") }} />
                </motion.div>

                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Remplace logo.png par ta vraie photo de profil */}
                    <img src={profileImage} alt="Esteban DOUILLET" />
                </motion.div>
            </div>
        </motion.section>
    );
}
