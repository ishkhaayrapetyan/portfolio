import './index.scss'
import {Link, NavLink} from "react-router-dom"
import LogoS from '../../assets/images/logo-prince-2.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/portfolio' >
            <img src={LogoS} alt="logo" />
            <h4>Little Prince</h4>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to='/portfolio'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="about-link" to='/portfolio/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className='contact-link' to='/portfolio/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            
        </nav>

    </div>
)

export default Sidebar