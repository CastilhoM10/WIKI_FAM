// AddPost.jsx
import  { useState } from 'react';
import { faImage, faPaperPlane, faTags, faVideo } from '@fortawesome/free-solid-svg-icons';
import './addPost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilefoto from '../../assets/img/CurentProfile.jpeg'

export default function AddPost() {
  const [postText, setPostText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/auth/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: postText }), // Alterado para enviar 'content' no corpo da solicitação
      });
      if (response.ok) {
        setPostText('');
        alert('Post criado com sucesso!');
      } else {
        alert('Erro ao criar o post.');
      }
    } catch (error) {
      console.error('Erro ao criar o post:', error);
      alert('Erro ao criar o post.');
    }
  };

  return (
    <form className='postForm' onSubmit={handleSubmit}>
      <div className="user form-top">
        <img src={profilefoto} alt="" />
        <input type="text" placeholder='Digite algo' value={postText} onChange={(e) => setPostText(e.target.value)} />
        <button type='submit' className='btn btn-primary'><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id='file' />
          <span><FontAwesomeIcon icon={faImage}/>Imagens</span>
        </label>
        <label htmlFor="file">
          <input type="file" id='file' />
          <span><FontAwesomeIcon icon={faVideo}/>Videos</span>
        </label>
        <span><FontAwesomeIcon icon={faTags}/>Tags</span>
      </div>
    </form>
  );
}