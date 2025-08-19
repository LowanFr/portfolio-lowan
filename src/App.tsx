import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import ProjectPage from "./components/pages/ProjectPage.tsx";
import SkillPage from "./components/pages/SkillPage.tsx";
import PrivacyPage from "./components/pages/PrivacyPage.tsx";
import CGUPage from "./components/pages/CGUPage.tsx";
import LegalPage from "./components/pages/LegalPage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/projets/:projectId" element={<ProjectPage />} />
                <Route path="/competences/:skillId" element={<SkillPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/cgu" element={<CGUPage />} />
                <Route path="/legal" element={<LegalPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;