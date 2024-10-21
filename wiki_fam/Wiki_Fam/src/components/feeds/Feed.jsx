import './feeds.css'
import {Link} from 'react-router-dom'
import Comments from '../comments/Comments'
import fotofeed from '../../assets/img/feed12.jpg'
import fotofeed2 from '../../assets/img/feed4.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faFaceLaughSquint, faGraduationCap, faHeart, faListDots, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

export default function Feed() {

    let [openComment, setOpenComment] = useState(false);
    const CommentHandeler =()=>{
        setOpenComment(!openComment)
    }


  return (
    <div className='feed'>
        <div className="top-content">
            <Link to='/profile/id'>
                <div className="user">
                    <img src={fotofeed} alt="" />
                    <div>
                    <h5>Gabriela</h5>
                    <small>10/04/2024</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon icon={faListDots}/></span>
        </div>
        <div className="mid-content">
            <p>descrição..........................</p>
            <img src={fotofeed} alt="" />
        </div>
        <div className="bottom-content">
  <div className="action-item">
    <FontAwesomeIcon icon={faHeart} className="icon" />
    <span className="text">14 Ameis</span>
  </div>
  <div className="action-item" >
    <FontAwesomeIcon icon={faThumbsUp} className="icon" />
    <span className="text">14 Likes</span>
  </div>
  <div className="action-item" >
    <FontAwesomeIcon icon={faGraduationCap} className="icon" />
    <span className="text">14 Graduations</span>
  </div>
  <div className="action-item" >
    <FontAwesomeIcon icon={faFaceLaughSquint} className="icon" />
    <span className="text">14 HaHa</span>
  </div>
  <div className="action-item" onClick={CommentHandeler}>
    <FontAwesomeIcon icon={faComment} className="icon" />
    <span className="text">5 comments</span>
  </div>
</div>
        {openComment && <Comments/>}
        
        <div className="top-content">
            <Link to='/profile/id'>
                <div className="user">
                    <img src={fotofeed} alt="" />
                    <div>
                    <h5>Julia</h5>
                    <small>09/04/2024</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon icon={faListDots}/></span>
        </div>
        <div className="mid-content">
            <p>descrição..........................</p>
            <img src={fotofeed2} alt="" />
        </div>
        <div className="bottom-content">
  <div className="action-item">
    <FontAwesomeIcon icon={faHeart} className="icon" />
    <span className="text">14 Ameis</span>
  </div>
  <div className="action-item" >
    <FontAwesomeIcon icon={faThumbsUp} className="icon" />
    <span className="text">14 Likes</span>
  </div>
  <div className="action-item" >
    <FontAwesomeIcon icon={faGraduationCap} className="icon" />
    <span className="text">14 Graduations</span>
  </div>
  <div className="action-item" >
    <FontAwesomeIcon icon={faFaceLaughSquint} className="icon" />
    <span className="text">14 HaHa</span>
  </div>
  <div className="action-item" onClick={CommentHandeler}>
    <FontAwesomeIcon icon={faComment} className="icon" />
    <span className="text">5 comments</span>
  </div>
</div>
        {openComment && <Comments/>}

    </div>
    
  )
}
