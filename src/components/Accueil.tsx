import '../styles/accueil.css'
import { motion } from "framer-motion";

export default function Accueil() {
    return (
        <motion.section
            id="hero"
            className="hero-section"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="hero-text"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Bonjour, je suis Esteban</h1>
                <p>Développeur full-stack passionné par les technologies web, je m’oriente vers la cybersécurité pour construire et protéger des systèmes fiables et innovants.</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                    En savoir plus
                </motion.button>
            </motion.div>
        </motion.section>
    );
}