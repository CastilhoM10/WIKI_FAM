import './Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faSearch, faXmark, faBookOpen, faBullhorn, faBriefcase, faLaptop, faMap, faList, faQuestion, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
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
                        <Link to='/'><FontAwesomeIcon icon={faHome} id='icon'/><span>Home</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/profile/:id'><FontAwesomeIcon icon={faUser} id='icon'/><span>Perfil</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/Manual'><FontAwesomeIcon icon={faBookOpen} id='icon'/><span>Manual do Calouro</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/eventos'><FontAwesomeIcon icon={faBullhorn} id='icon'/><span>Eventos</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/Departamentos'><FontAwesomeIcon icon={faBriefcase} id='icon'/><span>Departamentos</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/'><FontAwesomeIcon icon={faLaptop} id='icon'/><span>Portal Academico</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/MapaFam'><FontAwesomeIcon icon={faMap} id='icon'/><span>Mapa Fam</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/TodoList'><FontAwesomeIcon icon={faList} id='icon'/><span>Lista de Tarefas</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/Sugestoes'><FontAwesomeIcon icon={faQuestion} id='icon'/><span>Sugestões</span></Link>
                        </div>
                        <div className="menu">
                        <Link to='/AtendimentoGeral'><FontAwesomeIcon icon={faCalendarCheck} id='icon'/><span>Atendimento</span></Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
