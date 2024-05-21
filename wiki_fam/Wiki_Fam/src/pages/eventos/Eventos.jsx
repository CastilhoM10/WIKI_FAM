import './eventos.css'
import testeimg from '../../assets/img/eventos/img1.jpg'
import testeimg2 from '../../assets/img/eventos/trotesolidario.png'
import testeimg3 from '../../assets/img/eventos/img3.jpg'
import testeimg4 from '../../assets/img/eventos/img4.jpg'

export default function Eventos() {
  return (
    
    <div className='card-container'>
      <div className="card">
        <img src={testeimg} alt="" />
        <div className="card-content">
          <h1>Semana de Medicina Veterinaria</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure similique animi sed debitis consequatur excepturi at natus id? Cumque doloribus cum provident voluptates incidunt consequuntur fugiat ducimus nesciunt libero deserunt!</p>
          <button className='btn btn-primary'>Inscrever</button>
        </div>
      </div>
      <div className="card">
        <img src={testeimg2} alt="" />
        <div className="card-content">
          <h1>Trote Solidario</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure similique animi sed debitis consequatur excepturi at natus id? Cumque doloribus cum provident voluptates incidunt consequuntur fugiat ducimus nesciunt libero deserunt!</p>
          <button className='btn btn-primary'>Inscrever</button>
        </div>
      </div>
      <div className="card">
        <img src={testeimg3} alt="" />
        <div className="card-content">
          <h1>Semana de Tecnologia</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure similique animi sed debitis consequatur excepturi at natus id? Cumque doloribus cum provident voluptates incidunt consequuntur fugiat ducimus nesciunt libero deserunt!</p>
          <button className='btn btn-primary'>Inscrever</button>
        </div>
      </div>
      <div className="card">
        <img src={testeimg4} alt="" />
        <div className="card-content">
          <h1>Semana da Saude</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure similique animi sed debitis consequatur excepturi at natus id? Cumque doloribus cum provident voluptates incidunt consequuntur fugiat ducimus nesciunt libero deserunt!</p>
          <button className='btn btn-primary'>Inscrever</button>
        </div>
      </div>

    </div>
  )
}
