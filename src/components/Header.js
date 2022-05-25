import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <img
          src={require("../assets/imgs/my-avatar.jpg")}
          alt="Picture of Bret"
        />
        <div>
          <h1 className="header-name">Bret Banger</h1>
          <h3 className="header-title">Junior Full-Stack Developer</h3>
        </div>
      </div>
      <div className="header-bottom">
        <nav className="header-nav">
          <a href="/react-professional-portfolio/">
            <button>Home</button>
          </a>
          <a href="/react-professional-portfolio/about">
            <button>About</button>
          </a>
          <a href="/react-professional-portfolio/skills">
            <button>Skills</button>
          </a>
          <a href="/react-professional-portfolio/projects">
            <button>Projects</button>
          </a>
          <a href="/react-professional-portfolio/resume">
            <button>Resume</button>
          </a>
        </nav>
      </div>
 
    </header>
  );
}
