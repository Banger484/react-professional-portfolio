import './Content.css'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Welcome from './Welcome'
import Resume from './Resume'


export default function Content () {
    return (
        <div className='content-main'>
                <Routes>
                    <Route path='/' element={ <Welcome /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/skills' element={ <Skills /> } />
                    <Route path='/projects' element={ <Skills /> } />
                    <Route path='/resume' element={ <Resume /> } />
                </Routes>
        </div>
    )
}