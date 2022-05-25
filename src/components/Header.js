import "./Header.css";
import { Link }  from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <img
          src={require("../assets/imgs/my-avatar.jpg")}
          alt="Bret"
        />
        <div>
          <h1 className="header-name">Bret Banger</h1>
          <h3 className="header-title">Junior Full-Stack Developer</h3>
        </div>
      </div>
      <div className="header-bottom">
        <nav className="header-nav">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/skills">
            <button>Skills</button>
          </Link>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <Link to="/resume">
            <button>Resume</button>
          </Link>
        </nav>
      </div>
 
    </header>
  );
}
