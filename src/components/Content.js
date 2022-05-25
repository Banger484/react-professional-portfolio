import './Content.css'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Welcome from './Welcome'
import Resume from './Resume'
import Projects from './Projects'


export default function Content () {
    return (
        <div className='content-main'>
                <Routes>
                    <Route path='/react-professional-portfolio' element={ <Welcome /> } />
                    <Route path='/react-professional-portfolio/about' element={ <About /> } />
                    <Route path='/react-professional-portfolio/skills' element={ <Skills /> } />
                    <Route path='/react-professional-portfolio/projects' element={ <Projects /> } />
                    <Route path='/react-professional-portfolio/resume' element={ <Resume /> } />
                </Routes>
        </div>
    )
}