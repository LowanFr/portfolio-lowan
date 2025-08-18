import React, { useState } from "react";
import { motion } from "framer-motion";
import '../styles/contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                alert("Message envoyé !");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Erreur lors de l'envoi");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du message :", error);
            alert("Erreur lors de l'envoi du message. Veuillez réessayer plus tard.");
        }
    };
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
            <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                />
                <motion.button
                    type="submit"
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Envoyer
                </motion.button>
            </motion.form>
            <div className="contact-info">
                <p>Email : <a href="mailto:contact@lowan.fr">contact@lowan.fr</a></p>
            </div>
        </motion.section>
    );
}