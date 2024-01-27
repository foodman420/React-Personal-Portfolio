import { Link } from 'react-router-dom'
import './index.scss'
import LgogS from '../../assets/images/logo-s.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt />
        </Link>
    </div>
)

export default Sidebar