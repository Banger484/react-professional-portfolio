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
        <Route path="/react-professional-portfolio/" exact component={<Welcome />} />
        <Route path="/react-professional-portfolio/about" exact component={<About />} />
        <Route
          path="/react-professional-portfolio/skills"
          exact component={<Skills />}
        />
        <Route
          path="/react-professional-portfolio/projects"
          exact component={<Projects />}
        />
        <Route
          path="/react-professional-portfolio/resume"
          exact component={<Resume />}
        />
      </Routes>
    </div>
  );
}
