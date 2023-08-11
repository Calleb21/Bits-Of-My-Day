import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AMissao.css'

function AMissao() {
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

            {/* Modal */}
            <Modal
                isOpen={showTopics}
                onRequestClose={() => setShowTopics(false)}
                className="modal3"
                overlayClassName="overlay"
            >
                {/* Conteúdo da modal */}
                <ul className="modal-topics3">
                    <li>
                        <button onClick={() => openLinkInNewTab('/OSonho')}>O sonho</button>
                    </li>
                    <li>
                        <button onClick={() => openLinkInNewTab('/OComeco')}>O começo</button>
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

export default AMissao;