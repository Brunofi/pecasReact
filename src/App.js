
/*
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  const peca = {
    id: 0,
    nome: '',
    partnumber: '',
    peso: '',
    ncm: '',
    estado: 'NOVA',
    modelocarro: '',
    subsistema: '',
    fabricante: '',
    qtdmin: '',
    qtdmed: '',
    qtdmax: '',
    preco: '',
    ptnumberSimilar: ''
  };

  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [pecas, setPecas] = useState([]);
  const [objPeca, setObjPecas] = useState(peca);

  //listar peças
  useEffect(() => {
    fetch("http://127.0.0.1:8080/pecas/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setPecas(retorno_convertido));
  }, []);

  //Obtem dados do formulario
  const aoDigitar = (e) => {
    setObjPecas({...objPeca, [e.target.name]: e.target.value});
  }

  // Cadastrar peça
const cadastrar = () => {
  fetch('http://127.0.0.1:8080/pecas/cadastrar', {
    method: 'post',
    body: JSON.stringify(objPeca),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) { // Verifica se o status da resposta não é 200-299 (erro)
      return response.json().then(error => { throw new Error(error.mensagem || 'Erro ao cadastrar peça'); });
    }
    return response.json(); // Retorna o JSON se a resposta for bem-sucedida
  })
  .then(retorno_convertido => {
    setPecas([...pecas, retorno_convertido]);
    alert('Peça cadastrada com sucesso');
    limpaFormulario()
  })
  .catch(error => {
    alert(error.message); // Mostra a mensagem de erro se houver
  });
};


//Limpar formulario
const limpaFormulario = () => {
  setObjPecas(peca);
}



//Retorno
  return (
    <div>
       <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} dados={objPeca} cadastrar={cadastrar} obj={objPeca} />
      <Tabela vetor={pecas} />
    </div>
  );
}

export default App;
*/

// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Ajuste conforme seu método de autenticação
};

// Rota protegida
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota de Login */}
        <Route path="/login" element={<Login />} />

        {/* Rota Protegida */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        {/* Redirecionamento para login se a rota não for reconhecida */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
