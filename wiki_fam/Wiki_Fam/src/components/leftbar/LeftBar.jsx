import './leftbar.css'
import { Link } from 'react-router-dom'
import profilefoto from '../../assets/img/CurentProfile.jpeg'

export default function LeftBar() {
  const handleClickPortal = (url) => {
    window.open(url, '_blank');
  };

  return (
    
    <div className='leftbar'>
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
            <div className="user">
              <img src={profilefoto} alt="" />
              <h4>Matheus Castilho</h4>
            </div>
          </Link>

          <Link to='/'> 
            <div className="item">
              <i className='bi bi-person-square'></i>
              <h4>Perfil</h4>
            </div>
          </Link>

          <Link to='/novidade'> 
            <div className="item">
            <i className='bi bi-lightbulb-fill'></i>
              <h4>Novidades</h4>
            </div>
          </Link>

          <Link to='/Manual'> 
            <div className="item">
            <i className='bi bi-book-fill'></i>
              <h4>Manual do calouro</h4>
            </div>
          </Link>

          <Link to='/Eventos'> 
            <div className="item">
            <i className='bi bi-megaphone-fill'></i>
              <h4>Eventos</h4>
            </div>
          </Link>
        </div>

        <hr />

        <div className="menu">
          <h4 className='outhers'>Outros Serviços</h4>

          <Link to='/Departamentos'> 
            <div className="item">
            <i className='bi bi-briefcase-fill'></i>
              <h4>Departamentos</h4>
            </div>
          </Link>

          <Link to='#' onClick={() => handleClickPortal('https:/famportal.com.br')}> 
            <div className="item">
            <i className='bi bi-laptop-fill'></i>
              <h4>Portal Academico</h4>
            </div>
          </Link>

          <Link to='/MapaFam'> 
            <div className="item">
            <i className='bi bi-map-fill'></i>
              <h4>Mapa Fam</h4>
            </div>
          </Link>

          <Link to='/TodoList'> 
            <div className="item">
            <i className='bi bi-calendar2-plus-fill'></i>
              <h4>Lista de tarefas</h4>
            </div>
          </Link>

          <Link to='/Sugestoes'> 
            <div className="item">
            <i className='bi bi-patch-question-fill'></i>
              <h4>Sugestões</h4>
            </div>
          </Link>

          <Link to='/AtendimentoGeral'> 
            <div className="item">
            <i className='bi bi-calendar-check-fill'></i>
              <h4>Atendimento</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
