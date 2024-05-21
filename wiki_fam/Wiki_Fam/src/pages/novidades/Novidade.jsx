import './novidades.css'
import testeimg from '../../assets/img/Novidades/ar-condicionado.jpg'
import testeimg2 from '../../assets/img/Novidades/Laboratorio.jpeg'
import testeimg3 from '../../assets/img/Novidades/odontologia.jpeg'
import testeimg4 from '../../assets/img/Novidades/arquitetura.jpg'

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
          <h1>Troca de Maquinas</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quibusdam! Excepturi incidunt, quo vero necessitatibus.</p>
          <button className='btn btn-primary'>Saiba Mais!</button>
        </div>
      </div>
      <div className="card-novidades">
        <img src={testeimg3} alt="" />
        <div className="info">
          <h1>Odontoloia na Fam</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quibusdam! Excepturi incidunt, quo vero necessitatibus.</p>
          <button className='btn btn-primary'>Saiba Mais!</button>
        </div>
      </div>
      <div className="card-novidades">
        <img src={testeimg4} alt="" />
        <div className="info">
          <h1>Arquitetura na Fam</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quibusdam! Excepturi incidunt, quo vero necessitatibus.</p>
          <button className='btn btn-primary'>Saiba Mais!</button>
        </div>
      </div>
    </div>
  )
}
