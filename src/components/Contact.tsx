import { motion } from "framer-motion";
import '../styles/contact.css';

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="contact-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <h2>Contactez-moi</h2>

            <motion.div
                className="contact-info"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p>
                    Vous pouvez me contacter directement par e-mail à :
                    <br />
                    <a href="mailto:contact@lowan.fr" className="email-link">
                        contact@lowan.fr
                    </a>
                </p>
            </motion.div>
        </motion.section>
    );
}