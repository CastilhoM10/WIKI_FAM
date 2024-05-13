import './message.css'



//Apis......................



//icons......................
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Message() {
  return (
    <div className='Messages'>
        <div className="message-top">
            <h4>Message</h4>
            <FontAwesomeIcon icon={faEdit}/>
        </div>
        <div className="message-search">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="search" placeholder='Procurar Menssagem'/>
        </div>
        <div className="border-div"></div>

        <div className='message'>
            <div className="user">
                <img src="" alt="" />
                    <div className='green-active'></div>
                </div>
                    <div className="message-body">
                        <h5>Nome do usuario</h5>
                        <p>message text</p>
             </div>
         </div>

    </div>
  )
}
