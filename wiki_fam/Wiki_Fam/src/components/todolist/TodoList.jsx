import { useState, useEffect } from 'react';
import axios from 'axios';
import './todoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClipboardCheck, faClipboardList} from '@fortawesome/free-solid-svg-icons';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    fetchTodos();
    fetchCompletedTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('http://localhost:3003/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as tarefas:', error);
      });
  };

  const fetchCompletedTodos = () => {
    axios.get('http://localhost:3003/todos/completed')
      .then(response => {
        setCompletedTodos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar as tarefas concluídas:', error);
      });
  };

  const addTodo = () => {
    axios.post('http://localhost:3003/todos', {
      title,
      description,
      due_date: dueDate
    })
    .then(response => {
      setTodos([...todos, response.data]);
      setTitle('');
      setDescription('');
      setDueDate('');
    })
    .catch(error => {
      console.error('Erro ao adicionar a tarefa:', error);
    });
  };

  const completeTodo = (id) => {
    axios.put(`http://localhost:3003/todos/${id}/complete`)
      .then(() => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        const completedTodo = todos.find(todo => todo.id === id);
        setTodos(updatedTodos);
        setCompletedTodos([...completedTodos, { ...completedTodo, is_completed: true }]);
      })
      .catch(error => {
        console.error('Erro ao finalizar a tarefa:', error);
      });
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tarefas</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='descrição'
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className='data'
        />
        <button onClick={addTodo}>Adicionar Tarefa</button>
      </div>
      
      <h2>Tarefas Pendentes</h2>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <div>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>{todo.due_date}</p>
            </div>
            <button onClick={() => completeTodo(todo.id)}><FontAwesomeIcon  icon={faCheck} id='check'/></button>
          </li>
        ))}
      </ul>
      
      <div className="toggle-completed-btn" onClick={() => setShowCompleted(!showCompleted)}>
        <FontAwesomeIcon icon={showCompleted ? faClipboardCheck : faClipboardList} id='tarefas'/>
      </div>
      {showCompleted && (
        <div>
          <h2>Tarefas Concluídas</h2>
          <ul className="completed-todo-list">
            {completedTodos.map(todo => (
              <li key={todo.id} className="todo-item completed">
                <div>
                  <h2>{todo.title}</h2>
                  <p>{todo.description}</p>
                  <p>{todo.due_date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
