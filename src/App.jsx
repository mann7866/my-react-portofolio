import Certificate from "./components/pages/page1/Certificate";
import Contact from "./components/pages/page1/Contact";
import Experiences from "./components/pages/page1/Experiences";
import Project from "./components/pages/page1/Project";
import RadarParticles from "./components/pages/page1/RadarParticles";
import ToolsSection from "./components/pages/page1/ToolsSection";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import "../src/App.css";
import Galleries from "./components/pages/page1/Galleries";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SlidePage from "./SlidePage";
import Page1 from "./page1";
import Page2 from "./page2";

function App() {
   const location = useLocation();
  return (
    <>
     <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SlidePage direction="right"><Page1 /></SlidePage>} />
        <Route path="/mann_art" element={<SlidePage direction="left"><Page2 /></SlidePage>} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
