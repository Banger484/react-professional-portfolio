import "./Content.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Welcome from "./Welcome";
import Resume from "./Resume";
import Projects from "./Projects";

export default function Content() {
  return (
    <div className="content-main">
    <Router>
      <Routes>
        <Route path="#/" exact component={<Welcome />} />
        <Route path="#/about" exact component={<About />} />
        <Route
          path="#/skills"
          exact component={<Skills />}
        />
        <Route
          path="#/projects"
          exact component={<Projects />}
        />
        <Route
          path="#/resume"
          exact component={<Resume />}
        />
      </Routes>
    </Router>
    </div>
  );
}
