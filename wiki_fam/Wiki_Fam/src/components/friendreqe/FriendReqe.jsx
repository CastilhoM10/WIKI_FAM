import './friendReqe.css'
import fotofeed from '../../assets/img/feed12.jpg'

export default function FriendReqe() {
  return (
    <div className='Firend-Requests'>
      <h4>Solicitações</h4>


      <div className="request">
        <div className="info">
          <div className="user">
            <img src={fotofeed} alt="" />
          </div>
          <div className="info-name">
            <h5>Nome do usuario</h5>
            <p>Text message</p>
          </div>
        </div>

        <div className="action">
          <div className="btn btn-primary">Aceitar</div>
          <div className="btn btn-red">Deletar</div>
        </div>
      </div>
    </div>


  )
}
