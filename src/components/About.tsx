import '../styles/about.css';
import { motion } from "framer-motion";
import profileImage from "../assets/logo.png";

export default function About() {
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
              <h2>À propos de moi</h2>
              <p>
                  Je m’appelle <strong>Esteban Douillet</strong> et je suis en dernière année de Master en
                  <strong> Sécurité Informatique, Réseaux et Architectures Virtuelles (SIRAV)</strong>.
                  Développeur full-stack passionné, j’ai acquis une solide maîtrise de technologies modernes telles que
                  <strong>JavaScript, TypeScript, React, Node.js, Tailwind CSS, Python</strong>, ainsi que des compétences avancées en bases de données SQL et NoSQL.
              </p>

              <p>
                  Au cours de mes projets académiques et personnels, j’ai conçu et déployé des applications web complètes,
                  des API REST et des solutions frontend/backend robustes. Ces expériences m’ont permis de renforcer mes compétences techniques,
                  tout en développant mon <strong>autonomie</strong>, ma <strong>rigueur</strong> et ma capacité à collaborer efficacement en équipe.
              </p>

              <p>
                  Ma spécialisation en cybersécurité m’oriente désormais vers la création de systèmes performants et sécurisés,
                  capables de résister aux menaces numériques actuelles. Je cherche à combiner mon expertise en développement full-stack avec
                  une compréhension approfondie des enjeux de <strong>sécurité, réseaux et infrastructures virtuelles</strong>.
              </p>

              <p>
                  Curieux et motivé par l’apprentissage continu, je suis toujours à l’affût des nouvelles technologies et bonnes pratiques
                  pour concevoir des solutions fiables, innovantes et sécurisées.
              </p>
          </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={profileImage} alt="Esteban DOUILLET" />
        </motion.div>
      </div>
    </motion.section>
  );
}