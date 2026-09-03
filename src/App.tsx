import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Hire from "./pages/Hire";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Achievements from "./pages/Achievements";
import AchievementDetail from "./pages/AchievementDetail";
import KinderSystem from "./pages/KinderSystem";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/works" element={<Navigate to="/portfolio" replace />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/achievements/kinder-system" element={<KinderSystem />} />
        <Route path="/achievements/:slug" element={<AchievementDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
