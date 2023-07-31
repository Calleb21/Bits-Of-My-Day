import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Corrigido o caminho do arquivo de estilo

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="home">
      <div className="header">
        <h1>Bem-vindo(a)!</h1>
        <div className="buttons">
          <button onClick={handleModalToggle}>Sobre</button>
          <a href="/content" target="_blank" rel="noopener noreferrer">Começar</a>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sobre o Projeto</h2>
            <p>
            Este projeto foi criado com a intenção de colocar em prática o conhecimento adquirido durante minha jornada de estudos.
    O projeto consiste em um site para busca de empresas na cidade de Caldas Novas e suas informações para fins empresariais.
    O site permite interação com o usuário e possui um banco de dados que armazena as informações das empresas.
  </p>

  <h2>Funcionalidades do projeto:</h2>
  <ul>
    <li>Página inicial com um layout simples, apresentando uma mensagem de boas-vindas e botões para navegação.</li>
    <li>Ao clicar no botão "Iniciar", o usuário é redirecionado para uma nova página que exibe um formulário para busca de empresas.</li>
    <li>O usuário pode preencher o formulário com critérios de busca, como nome da empresa, CNPJ, ou outros detalhes relevantes.</li>
    <li>Com base nos critérios de busca, o site consulta o banco de dados e exibe uma lista de empresas que correspondem às informações inseridas.</li>
    <li>Para cada empresa listada, são exibidos o nome, o CNPJ e a situação cadastral.</li>
    <li>O usuário pode clicar em uma empresa específica para visualizar mais informações detalhadas.</li>
    <li>Além disso, o projeto possui uma página "Sobre" que fornece informações adicionais sobre o propósito do site e seu desenvolvimento.</li>
  </ul>

  <p>
    O projeto foi desenvolvido utilizando as seguintes tecnologias:
    Frontend: HTML, CSS e JavaScript (React)
    Backend: Node.js (ou outra tecnologia de sua escolha) para a interação com o banco de dados e processamento das requisições do usuário.
    Banco de Dados: MySQL (ou outro banco de dados relacional) para armazenar as informações das empresas.
  </p>

  <p>
    Com esse projeto, busquei consolidar os conhecimentos de desenvolvimento web, frontend e backend,
    e demonstrar a capacidade de criar uma aplicação com funcionalidades interativas e acesso a um banco de dados
    para oferecer informações relevantes ao usuário.
            </p>
            <button onClick={handleModalToggle}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
