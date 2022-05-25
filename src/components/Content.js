import "./Content.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Welcome from "./Welcome";
import Resume from "./Resume";
import Projects from "./Projects";

export default function Content() {
  return (
    <div className="content-main">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}
