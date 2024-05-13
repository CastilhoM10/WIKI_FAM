import './Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faSearch, faXmark, faBookOpen, faBullhorn, faBriefcase, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
import DarkMoode from '../darkmoode/DarkMoode';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to='/'>
                        <h3 className='logo'>WikiFam</h3>
                    </Link>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                    <Link to='/profile/id'>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <div className="Nav-Searchbar">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="search" />
                    </div>
                </div>
                <div className="nav-right">
                    <DarkMoode/>
                    <div className="toggle_btn" onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} id='iconBar'/>
                    </div>
                    <ul className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
                        <div className="menu">
                        <Link><FontAwesomeIcon icon={faHome} id='icon'/><span>Home</span></Link>
                        </div>
                        <div className="menu">
                        <Link><FontAwesomeIcon icon={faUser} id='icon'/><span>Perfil</span></Link>
                        </div>
                        <div className="menu">
                        <Link><FontAwesomeIcon icon={faBookOpen} id='icon'/><span>Manual do Calouro</span></Link>
                        </div>
                        <div className="menu">
                        <Link><FontAwesomeIcon icon={faBullhorn} id='icon'/><span>Eventos</span></Link>
                        </div>
                        <div className="menu">
                        <Link><FontAwesomeIcon icon={faBriefcase} id='icon'/><span>Departamentos</span></Link>
                        </div>
                        <div className="menu">
                        <Link><FontAwesomeIcon icon={faLaptop} id='icon'/><span>Portal Academico</span></Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
