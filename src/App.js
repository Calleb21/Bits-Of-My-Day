import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';

function App() {
  const [showTopics, setShowTopics] = useState(false);

  const toggleTopics = () => {
    setShowTopics(!showTopics);
  };

  useEffect(() => {
    // Adicionar event listener para o evento de scroll quando o componente for montado
    window.addEventListener('scroll', handleScroll);

    // Remover event listener quando o componente for desmontado para evitar vazamentos de memória
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Verificar se a modal está aberta e fechá-la automaticamente quando o usuário rolar a página para baixo
    if (showTopics) {
      setShowTopics(false);
    }
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
        <div className="header-content">
          {/* Logo e nome */}
          <div className="header-left">
            <img
              src="https://honeysucklecreek.net/images/images_Apollo_11/Apollo_11_patch_vectorised_transp_sm.png"
              alt="Logo"
              className="logo"
            />
            <h1>Apollo's Legacy</h1>
          </div>
        </div>

        {/* Botão para mostrar/ocultar os tópicos */}
        <button onClick={toggleTopics} className="show-topics-button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/463/463292.png"
            alt="Mostrar Tópicos"
          />
        </button>
      </header>

      {/* Novo elemento com a imagem de fundo */}
      <div className="background-image">
        {/* Contêiner para o botão "O começo" */}
        <div className="start-button-container">
          <button className="start-button">O sonho</button>
        </div>
      </div>
      <div className="background-image1">
        <div className="start-button1-container">
          <button className="start-button1">O começo</button>
        </div>
      </div>
      <div className="background-image2">
        <div className="start-button2-container">
          <button className="start-button2">A missão</button>
        </div>
      </div>
      <div className="background-image3">
        <div className="start-button3-container">
          <button className="start-button3">Armstrong</button>
        </div>
      </div>
      <div className="background-image4">
        <div className="start-button4-container">
          <button className="start-button4">Um pequeno passo</button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showTopics}
        onRequestClose={() => setShowTopics(false)}
        className="modal"
        overlayClassName="overlay"
      >
        {/* Conteúdo da modal */}
        <ul className="modal-topics">
          <li>Tópico 1</li>
          <li>Tópico 2</li>
          <li>Tópico 3</li>
        </ul>
      </Modal>

      {/* Footer */}
      <footer className="footer">
        <p>Apollo's Legacy © 2023 | by Calleb Camargo</p>
        <div className="social-buttons">
          <a href="https://instagram.com/calleb_camargo_01?igshid=NTc4MTIwNjQ2YQ==" rel="noopener noreferrer">
            <button className="social-button instagram">Instagram</button>
          </a>
          <a href="https://www.linkedin.com/in/calleb-camargo-682321237" target="_blank" rel="noopener noreferrer">
            <button className="social-button linkedin">LinkedIn</button>
          </a>
          <a href="https://github.com/Calleb21" target="_blank" rel="noopener noreferrer">
            <button className="social-button github">GitHub</button>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
