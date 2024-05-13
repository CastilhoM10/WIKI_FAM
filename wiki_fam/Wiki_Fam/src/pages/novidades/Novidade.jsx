import './novidades.css'
import testeimg from '../../assets/img/FeedProfile11.jpg'
import testeimg2 from '../../assets/img/feed6.jpg'
import testeimg3 from '../../assets/img/FeedProfile5.jpg'
import testeimg4 from '../../assets/img/feed9.png'

export default function Novidade() {
  return (
    <div className='card-container'>
      <div className="card-novidades">
        <img src={testeimg} alt="" />
        <div className="info">
          <h1>Instalção dos Ares</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quibusdam! Excepturi incidunt, quo vero necessitatibus.</p>
          <button className='btn btn-primary'>Saiba Mais!</button>
        </div>
      </div>
      <div className="card-novidades">
        <img src={testeimg2} alt="" />
        <div className="info">
          <h1>Instalção dos Ares</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quibusdam! Excepturi incidunt, quo vero necessitatibus.</p>
          <button className='btn btn-primary'>Saiba Mais!</button>
        </div>
      </div>
      <div className="card-novidades">
        <img src={testeimg3} alt="" />
        <div className="info">
          <h1>Instalção dos Ares</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quibusdam! Excepturi incidunt, quo vero necessitatibus.</p>
          <button className='btn btn-primary'>Saiba Mais!</button>
        </div>
      </div>
      <div className="card-novidades">
        <img src={testeimg4} alt="" />
        <div className="info">
          <h1>Instalção dos Ares</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quibusdam! Excepturi incidunt, quo vero necessitatibus.</p>
          <button className='btn btn-primary'>Saiba Mais!</button>
        </div>
      </div>
    </div>
  )
}
