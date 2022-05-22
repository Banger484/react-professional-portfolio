import './Header.css'

export default function Header () {
    return (
        <header>
            <div className='header-left'>
                <img src={require('../assets/imgs/my-avatar.jpg')} alt='Picture of Bret'/>
                <h1 className='header-name'>Bret Banger <br/><h3 className='header-title'>Junior Full-Stack Developer</h3></h1>
                
            </div>
            <div className='header-right'>
                <nav>

                </nav>
            </div>
        </header>
    )
}

