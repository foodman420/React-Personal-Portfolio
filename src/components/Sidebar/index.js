import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/logo-j.png';
import LogoSubtitle from '../../assets/images/generatedtext.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoJ} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="Jack Goodman" />
        </Link>
        <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active about-link' : 'about-link')}>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active contact-link' : 'contact-link')}>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/jack-goodman-51138126b/">
                    <FontAwesomeIcon icon={faLinkedinIn} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                    rel="noreferrer"
                    href="https://github.com/foodman420/">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCt4gkSwBaWdDpv8mAoA8BNA">
                    <FontAwesomeIcon icon={faYoutube} color="4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
