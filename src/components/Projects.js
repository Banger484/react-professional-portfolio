import './Projects.css'

export default function Projects () {
    const projects = [
        {
            title: 'Weather Dashboard',
            deployed: 'https://banger484.github.io/weather-dashboard/',
            repo: 'https://github.com/Banger484/weather-dashboard',
            img: 'imgs/projects/Screenshot (50).png'
        },
        {
            title: 'Note Master',
            deployed: 'https://fierce-oasis-24379.herokuapp.com/',
            repo: 'https://github.com/Banger484/note-master',
            img: 'imgs/projects/Screenshot (41).png'
        },
        {
            title: 'Password Generator',
            deployed: 'https://banger484.github.io/password-generator/',
            repo: 'https://github.com/Banger484/password-generator',
            img: 'imgs/projects/Screenshot (53).png'
        },
        {
            title: 'Cocktail Menu',
            deployed: 'https://banger484.github.io/cocktail-menu/',
            repo: 'https://github.com/Banger484/cocktail-menu',
            img: 'imgs/projects/Screenshot (54).png'
        }

    ] 
    return (
        <div className='projects-container'>
            <div className='project-header'>
                <h1>Projects</h1>
                <hr />
                <select className='project-dropdown'>
                    <option>-- Select a Project you would like to view --</option>
            {projects.map((project) => <option key={project.title}>{project.title}</option>)}
                </select>

            </div>
            <div className='project-content'>
            </div>
        </div>
    )
}

