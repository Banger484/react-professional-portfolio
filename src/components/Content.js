import './Content.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'


export default function Content () {
    return (
        <div className='content-main'>
            <Router>
                <Routes>
                    <Route path='/about' element={ <About /> } />
                </Routes>
            </Router> 
        </div>
    )
}