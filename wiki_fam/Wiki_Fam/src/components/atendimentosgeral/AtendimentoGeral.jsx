
import './atendimentoGeral.css';
import { useEffect, useState } from 'react';

export default function AtendimentoGeral() {
  const [atendimentos, setAtendimentos] = useState([]);
  const [alunos, setAlunos] = useState([]);
  const [formData, setFormData] = useState({
    aluno_id: '',
    curso: '',
    data_atendimento: '',
    descricao: '',
    telefone_paciente: '',
    nome_paciente: '',
    link_reuniao: ''
  });

  useEffect(() => {
    fetch('http://localhost:3003/auth/atendimentos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setAtendimentos(data);
      })
      .catch(error => {
        console.error('Erro ao buscar atendimentos:', error);
      });

    fetch('http://localhost:3003/auth/alunos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setAlunos(data);
      })
      .catch(error => {
        console.error('Erro ao buscar alunos:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3003/auth/atendimentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Adicionar o nome do aluno ao novo atendimento
          const aluno = alunos.find(aluno => aluno.id === parseInt(formData.aluno_id));
          const newAtendimento = { ...formData, nome_aluno: aluno ? aluno.nome : '' };
          setAtendimentos([...atendimentos, newAtendimento]);
          setFormData({
            aluno_id: '',
            curso: '',
            data_atendimento: '',
            descricao: '',
            telefone_paciente: '',
            nome_paciente: '',
            link_reuniao: ''
          });
        } else {
          console.error('Erro ao criar atendimento:', data.message);
        }
      })
      .catch(error => {
        console.error('Erro ao criar atendimento:', error);
      });
  };

  return (
    <div className='atendimento-container'>
      <h1>Atendimentos</h1>
      <form className='atendimento' onSubmit={handleSubmit}>
        <select name="aluno_id" value={formData.aluno_id} onChange={handleChange} required>
          <option value="">Aluno</option>
          {alunos.map(aluno => (
            <option key={aluno.id} value={aluno.id}>{aluno.nome}</option>
          ))}
        </select>
        <input type="text" name="curso" value={formData.curso} onChange={handleChange} placeholder="Curso" required />
        <input type="datetime-local" name="data_atendimento" value={formData.data_atendimento} onChange={handleChange} placeholder="Data do Atendimento" required />
        <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descrição" required></textarea>
        <input type="text" name="telefone_paciente" value={formData.telefone_paciente} onChange={handleChange} placeholder="Telefone do Paciente" required />
        <input type="text" name="nome_paciente" value={formData.nome_paciente} onChange={handleChange} placeholder="Nome do Paciente" required />
        <input type="text" name="link_reuniao" value={formData.link_reuniao} onChange={handleChange} placeholder="Link da Reunião" required />
        <button type="submit">Criar Atendimento</button>
      </form>
      <ul className='atendimento-check'>
        {atendimentos.map(atendimento => (
          <li key={atendimento.id}>
            <p><strong>Nome do Aluno:</strong> {atendimento.nome_aluno}</p>
            <p><strong>Curso:</strong> {atendimento.curso}</p>
            <p><strong>Data do Atendimento:</strong> {new Date(atendimento.data_atendimento).toLocaleString()}</p>
            <p><strong>Descrição:</strong> {atendimento.descricao}</p>
            <p><strong>Telefone do Paciente:</strong> {atendimento.telefone_paciente}</p>
            <p><strong>Nome do Paciente:</strong> {atendimento.nome_paciente}</p>
            <p><strong>Link da Reunião:</strong> {atendimento.link_reuniao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
