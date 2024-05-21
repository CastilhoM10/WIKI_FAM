import './sugestoes.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faClipboardList } from '@fortawesome/free-solid-svg-icons';

export default function Sugestoes() {
  const [nome, setNome] = useState('');
  const [sugestao, setSugestao] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  const fetchSuggestions = () => {
    axios.get('http://localhost:3003/auth/sugestoes')
      .then(response => {
        setSuggestions(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as sugestões:', error);
      });
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const suggestion = {
      nome: nome,
      sugestao: sugestao,
    };

    axios.post('http://localhost:3003/auth/sugestoes', suggestion)
      .then(response => {
        alert('Sugestão enviada com sucesso!');
        setNome('');
        setSugestao('');
        fetchSuggestions(); // Recarrega a lista de sugestões
      })
      .catch(error => {
        console.error('Erro ao enviar sugestão:', error);
        alert('Erro ao enviar sugestão.');
      });
  };

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="sugestoes-container">
      <h1>Sistema de Sugestões</h1>
      <form className="form-sugestoes" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome do Aluno:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sugestao">Sugestão:</label>
          <textarea
            id="sugestao"
            value={sugestao}
            onChange={(e) => setSugestao(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar Sugestão</button>
      </form>
      <div className="toggle-button" onClick={toggleCompleted}>
        <FontAwesomeIcon icon={showCompleted ? faClipboardCheck : faClipboardList}/>
      </div>
      {showCompleted && (
        <div className="sugestoes-list">
          <h2>Sugestões dos Alunos</h2>
          {suggestions.map(suggestion => (
            <div key={suggestion.id} className="suggestion">
              <h3>{suggestion.nome_aluno}</h3>
              <p>{suggestion.sugestao}</p>
              <small>{new Date(suggestion.data_criacao).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}