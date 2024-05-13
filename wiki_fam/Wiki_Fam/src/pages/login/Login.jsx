// Login.jsx

import  { useState } from 'react';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [ra, setRA] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email.trim() === '' || ra.trim() === '' || password.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3003/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, ra, password, role: 'admin' }) // Ou 'aluno', dependendo do papel do usuário
            });

            const data = await response.json();

            if (response.ok) {
                // Login bem-sucedido, armazenar o token JWT
                localStorage.setItem('token', data.token); // Armazenando o token no localStorage
                console.log('Login bem-sucedido! Token JWT armazenado.');
                window.location.href = '/'; // Redirecionar para a página inicial após o login bem-sucedido
            } else {
                alert(data.Error);
            }
        } catch (error) {
            console.error('Erro ao enviar solicitação de login:', error);
            alert('Erro ao enviar solicitação de login. Por favor, tente novamente.');
        }
    };

    return (
        <div className="login">
            <div className='card-login'>
                <div className="left">
                    <h2>-<br/>Bem Vindo!<br/>-</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptas magni optio quisquam dicta suscipit enim, </p>
                    <span>Não está conseguindo acessar sua conta??</span>
                    <span>Encaminhe um email para <strong>wiki_fam@fam.br!</strong></span>
                </div>
                <form className="right" onSubmit={handleSubmit}>
                    <input type="text" required placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" required placeholder='RA' value={ra} onChange={(e) => setRA(e.target.value)} />
                    <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className='btn'>Login</button>
                </form>
            </div>
        </div>
    );
}
