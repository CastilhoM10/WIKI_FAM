import { faAdd } from '@fortawesome/free-solid-svg-icons'
import './stories.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UserStorie() {
  return (
    <div className='story userStory'>
        <div className="user">
            <img src="" alt="" />
        </div>
        <img src="" alt="" />
        <label htmlFor="storyFiles">
            <FontAwesomeIcon icon={faAdd}/>
            <input type="file" id='storyFiles' />
        </label>
        <h5>Adicionar Stories</h5>
    </div>
  )
}
