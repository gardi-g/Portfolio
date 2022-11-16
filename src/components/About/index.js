import './index.scss';
import React from 'react'
import Loader from 'react-loaders';
import LogoTitle from '../../assets/images/portfolio_photo.png';
import Resume from '../../assets/images/Resume.pdf';
const About = () => {
    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Java', 'Node.js', 'AngularJS/CLI','SQL','C++',
                    'REST API','JSON','Jira','HTML & CSS'];
    return (
        <>
        <div className='container-about-page'>
            <div className='text-zone'>
                <h1>About me</h1>
                <div className ="left-side"> 
                    <p>
                    Hello! My name is Kerem. I am 23 years old from Newtown, Pennsylvania.<br />
                    Currently I am attending Penn State Harrisburg pursuing on Bachelors of Computer Science.
                    My expected graduation is December 2022.<br />
                    Since when I started my programming journey, 
                    I've been working so hard to improve my skills and become a better developer.<br /> 
                    I've finished numerous 
                    school projects and also a sponsored project for Penn State College of Medicine.<br />
                    I am confident and ambitious to grow and improve my skills to become the best developer I can be! <br />
                    Here are a few technologies I've been working with recently:
                    </p> 
                    <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            <div className = "btn-con">
                <a href={Resume} class="main-btn">
                    <span class="btn-text">Download CV</span>
                    <span class="btn-icon"><i class ="fas fa-download"></i></span>
                </a>
            </div>
          </ul>
                </div>
            </div>
            <div className='container-photo'>
                <div class="h-shape"></div>
                    <div class="image">
                        <img src={LogoTitle} alt="developer" className='about-img'></img>
                </div>
            </div>
        </div>
        
        <Loader type="ball-clip-rotate-pulse" />
     </>
    )
    
}



export default About