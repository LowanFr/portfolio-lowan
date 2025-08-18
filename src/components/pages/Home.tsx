import '../../styles/Home.css';
import Hero from '../Accueil.tsx';
import Navbar from "../Navbar.tsx";
import About from '../About.tsx';
import Skills from '../Skills.tsx';
import Projects from "../Projects.tsx";
import Contact from '../Contact.tsx';

function Home() {
    return (
        <div id="root">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />


            {/* Pied de page simple */}
            <footer className="footer">
                <p>
                    © {new Date().getFullYear()} Esteban DOUILLET —
                    <a href="https://github.com/lowanfr" target="_blank" rel="noreferrer">
                        GitHub
                    </a> |
                    <a href="https://www.linkedin.com/in/estebandouillet" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default Home;