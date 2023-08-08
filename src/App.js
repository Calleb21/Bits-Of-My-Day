import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import OSonho from './pages/OSonho';
import OComeco from './pages/OComeco';
import AMissao from './pages/AMissao';
import Armstrong from './pages/Armstrong';
import UmPequenoPasso from './pages/UmPequenoPasso';

function App() {
  const [showTopics, setShowTopics] = useState(false);

  const toggleTopics = () => {
    setShowTopics(!showTopics);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (showTopics) {
      setShowTopics(false);
    }
  };

  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
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

      {/* Novo link para a nova página */}
      <div className="background-image">
        <div className="start-button-container">
          <Link to="/OSonho" target='_blank'>
            <button className="start-button">O sonho</button>
          </Link>
        </div>
      </div>
      <div className="background-image1">
        <div className="start-button1-container">
          <Link to="/OComeco" target='_blank'>
            <button className="start-button1">O começo</button>
          </Link>
        </div>
      </div>
      <div className="background-image2">
        <div className="start-button2-container">
          <Link to="/AMissao" target='_blank'>
            <button className="start-button2">A missão</button>
          </Link>
        </div>
      </div>
      <div className="background-image3">
        <div className="start-button3-container">
          <Link to="/Armstrong" target='_blank'>
            <button className="start-button3">Armstrong</button>
          </Link>
        </div>
      </div>
      <div className="background-image4">
        <div className="start-button4-container">
          <Link to="/UmPequenoPasso" target='_blank'>
            <button className="start-button4">Um pequeno passo</button>
          </Link>
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
          <li>
            <button onClick={() => openLinkInNewTab('/OSonho')}>O sonho</button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab('/OComeco')}>O começo</button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab('/AMissao')}>A missão</button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab('/Armstrong')}>Armstrong</button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab('/UmPequenoPasso')}>Um pequeno passo</button>
          </li>
        </ul>
      </Modal>

      {/* Footer */}
      <footer className="footer">
        <p>Apollo's Legacy © 2023 | by Calleb Camargo</p>
        <div className="social-buttons">
          <a
            href="https://instagram.com/calleb_camargo_01?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-button instagram">Instagram</button>
          </a>
          <a
            href="https://www.linkedin.com/in/calleb-camargo-682321237"
            target="_blank"
            rel="noopener noreferrer"
          >
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

export default function RootComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/OSonho" element={<OSonho />} />
        <Route path="/OComeco" element={<OComeco />} />
        <Route path="/AMissao" element={<AMissao />} />
        <Route path="/Armstrong" element={<Armstrong />} />
        <Route path="/UmPequenoPasso" element={<UmPequenoPasso />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}
