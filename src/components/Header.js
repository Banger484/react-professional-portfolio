import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <img
          src={require("../assets/imgs/my-avatar.jpg")}
          alt="Picture of Bret"
        />
        <h1 className="header-name">
          Bret Banger <br />
          <h3 className="header-title">Junior Full-Stack Developer</h3>
        </h1>
      </div>
      <div className="header-right">
          <nav className="header-nav">
            <a href="/">
            <button>Home</button>
            </a>
            <a href="/about">
            <button>About</button>
            </a>
            <a href="/skills">
            <button>Skills</button>
            </a>
            <a href="/projects">
            <button>Projects</button>
            </a>
            <a href="/resume">
            <button>Resume</button>
            </a>
          </nav>
      </div>
    </header>
  );
}
