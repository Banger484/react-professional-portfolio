import "./Header.css";

export default function Header() {
  return (
    <header>
      {/* <div className="header-top">
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
      </div> */}
      <nav class="navbar bg-navbar navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav links-right">
          <li class="nav-item">
            <a class="nav-link" href="/about">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#my-goal">My Goal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#my-technical-skills">Technical Skills</a>
          </li>    
          <li class="nav-item">
            <a class="nav-link" href="#my-projects">My Projects</a>
          </li> 
        </ul>
      </div>
    </div>
  </nav>
    </header>
  );
}
