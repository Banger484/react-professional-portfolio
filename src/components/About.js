import './About.css'

export default function About () {
    return (
        <div className='about-container'>
            <h1 className='about-heading'>About The Developer</h1>
            <hr />
            <div className='about-current'>
                <h3 className='about-sub-heading'>Currently</h3>
                <p className='about-text'>
                I'm a new and aspiring web developer with experience working with
                both front-end and back-end development. I am currently
                finishing up a boot camp program at the University of Minnesota, and I
                will be looking forward to starting my new career!
                </p>
            </div>
            <div className='about-goal'>
                <h3 className='about-sub-heading'>My Goal</h3>
                <p className='about-text'>
                Focused on expanding knowledge and abilities in website design,
                programming and quality assurance. Trained in HTML, CSS, JavaScript,
                React, Redux, Node JS, MongoDB, and SQL. Motivated to meet customer and user
                expectations with high-quality and effective website layouts.
                Skilled in validating, debugging and correcting code. To seek and
                maintain a full-time position that offers professional challenges
                utilizing interpersonal skills, excellent time management and
                problem-solving skills.
                </p>
            </div>            
        </div>
    )
}