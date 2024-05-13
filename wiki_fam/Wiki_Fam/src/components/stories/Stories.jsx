
import UserStorie from './UserStorie'
import './stories.css'
import fotoperfil from '../../assets/img/StoryProfile1.jpg'
import story1 from '../../assets/img/story1.jpg'



export default function Stories() {
  return (
    <div className='stories'>
        <UserStorie/>
                <div className="story">
                    <div className="user">
                        <img src={fotoperfil} alt="" />
                    </div>
                    <img src={story1} alt="" />
                    <h5>Nome do usuario</h5>
                </div>
                
                
            
    </div>
  )
}
