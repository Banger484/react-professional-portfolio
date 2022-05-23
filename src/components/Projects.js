import './Projects.css'

export default function Projects () {
    const projects = [
        {
            title: 'Weather Dashboard',
            deployed: 'https://banger484.github.io/weather-dashboard/',
            repo: 'https://github.com/Banger484/weather-dashboard',
            img: 'weather-dashboard'
        },
        {
            title: 'Note Master',
            deployed: 'https://fierce-oasis-24379.herokuapp.com/',
            repo: 'https://github.com/Banger484/note-master',
            img: 'note-master'
        },
        {
            title: 'Password Generator',
            deployed: 'https://banger484.github.io/password-generator/',
            repo: 'https://github.com/Banger484/password-generator',
            img: 'password-generator'
        },
        {
            title: 'Cocktail Menu',
            deployed: 'https://banger484.github.io/cocktail-menu/',
            repo: 'https://github.com/Banger484/cocktail-menu',
            img: 'cocktail-menu'
        }

    ]

    return (
        <div className='projects-container'>
            <div className='project-header'>
                <h1>Projects</h1>
                <hr />
            </div>
            <div className='project-content'>
            {projects.map((project) => 
            <div className='project-card' key={project.title}>
                <h1>{project.title}</h1>
                <img alt='screenshot of application' src={`images/projects/${project.img}.png`} />
                <div className='project-card-links-container'>
                <a href={project.deployed}>Visit Deployed Application</a>
                <a href={project.repo}>Visit GitHub Repository</a>
                </div>
                <hr />
            </div>
            )}
            </div>
        </div>
    )
}

