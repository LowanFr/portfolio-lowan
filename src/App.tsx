import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.tsx";
import ProjectPage from "./components/pages/ProjectPage.tsx";
import SkillPage from "./components/pages/SkillPage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projets/:projectId" element={<ProjectPage />} />
                <Route path="/competences/:skillId" element={<SkillPage />} />
            </Routes>
        </Router>
    );
}

export default App;