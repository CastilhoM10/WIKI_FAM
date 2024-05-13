import  { useState } from 'react';
import './comments.css';

export default function Comments({ postId }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3003/auth/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId, userId: 1, text: commentText }),
      });
      if (response.ok) {
        setCommentText('');
        alert('Comentário enviado com sucesso!');
        // pode adicionar aqui alguma lógica para atualizar a lista de comentários após o envio bem-sucedido
      } else {
        alert('Erro ao enviar o comentário.');
      }
    } catch (error) {
      console.error('Erro ao enviar o comentário:', error);
      alert('Erro ao enviar o comentário.');
    }
  };

  return (
    <div className='comments'>
      <div className="writebox">
        <form onSubmit={handleSubmit}>
          <div className="user">
            <img src="" alt="" />
            <input type="text" placeholder='Digite seu comentário..' value={commentText} onChange={(e) => setCommentText(e.target.value)} />
            <button type='submit' className='btn btn-primary'>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}