import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8080/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, senha })
      });

      if (response.ok) {
        navigate('/home'); // Supondo que essa seja a rota da página inicial
      } else {
        const data = await response.json();
        setErrorMessage(data.mensagem || 'Login ou senha incorretos');
      }
    } catch (error) {
      setErrorMessage('Erro de conexão. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
