import { Link } from 'react-router-dom'
import './userProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed, faLink, faMessage } from '@fortawesome/free-solid-svg-icons'
import profilefoto from '../../assets/img/CurentProfile.jpeg'
import fotofundo from '../../assets/img/CoverPhotos.jpg'

export default function UserProfile() {
  return (
    <div className='userProfile'>
        <div className="cover-photos">
            <img src={fotofundo} alt="" />
        </div>
        <div className="profile-info">
            <img src={profilefoto} alt="" />
            <div className="user-name">
                <h3>Matheus Castilho</h3>
                <h5>20222521</h5>
            </div>
            <div className="profile-button">
                <Link to='/chatbox/id'>
                <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faMessage}/>
                </button>
                </Link>
                <button className='btn btn-primary'>
                    <FontAwesomeIcon icon={faFeed}/>
                </button>
                <button className='btn'>
                    <FontAwesomeIcon icon={faLink}/>
                </button>
            </div>
            <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, adipisci veniam numquam officia repellat tempora ab, inventore eaque, quibusdam rerum nulla? Quam eos porro corrupti dolorum accusantium ea nesciunt enim.
            </p>
        </div>
    </div>
  )
}
