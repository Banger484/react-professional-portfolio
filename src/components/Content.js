import './Content.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Welcome from './Welcome'


export default function Content () {
    return (
        <div className='content-main'>
            {/* <Router> */}
                <Routes>
                    <Route path='/' element={ <Welcome /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/skills' element={ <Skills /> } />
                </Routes>
            {/* </Router>  */}
        </div>
    )
}