import '../../styles/home.css';
import Home from '../Accueil.tsx';
import Navbar from "../utils/Navbar.tsx";
import About from '../About.tsx';
import Skills from '../Skills.tsx';
import Projects from "../Projects.tsx";
import Contact from '../Contact.tsx';
import Footer from '../utils/Footer.tsx';

function HomePage() {
    return (
        <div id="root">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomePage;