import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo_50.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className='signature' to='/'>
            <img src={LogoS} alt="signature" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a  target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/kerem-acar-942503174/">
                    <FontAwesomeIcon icon= {faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a  target="_blank" rel='noreferrer' href="https://github.com/gardi-g">
                    <FontAwesomeIcon icon= {faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar