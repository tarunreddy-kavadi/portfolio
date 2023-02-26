import {Link,NavLink} from 'react-router-dom'
import './index.scss'
 import  logoS from '../../assets/images/logo-T.png'
 import LogoSubtitle from '../../assets/images/logo-sub.png'
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import {faEnvelope, faHome, faUser,faCertificate}from '@fortawesome/free-solid-svg-icons'
 import{faGithub, faLinkedin}from '@fortawesome/free-brands-svg-icons'

const Sidebar =()=>(
    <div className= "nav-bar">
        <Link className="logo" to="/">
            <img src={logoS} alt="logo" />
            <img src={LogoSubtitle} alt="sublogo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon= {faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon= {faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Contact">
                <FontAwesomeIcon icon= {faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="certificate-link" to="/Certification">
                <FontAwesomeIcon icon= { faCertificate} color="#4d4d4e"/>
            </NavLink>

        </nav> 
        <ul>
            <li>
                <a target= "_blank" rel='noreferrer'  href='https://www.linkedin.com/in/tarunreddy-kavadi-90593719b/'>
                <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target= "_blank" rel='noreferrer'  href='https://github.com/tarunreddy-kavadi'>
                <FontAwesomeIcon icon = {faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>

    </div>
        )

export default Sidebar;