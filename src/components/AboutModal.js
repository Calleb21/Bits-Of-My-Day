import React from 'react';
import '../styles/AboutModal.css'; // Importe o arquivo de estilos para o modal

const AboutModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Sobre o Projeto</h2>
        <p>
          Este projeto foi criado com a intenção de colocar em prática o conhecimento adquirido durante minha jornada de estudos. O projeto consiste em um simples site para busca de empresas na cidade de Caldas Novas e suas informações para fins empresariais. O site permite interação com o usuário e possui um banco de dados que armazena as informações das empresas.
        </p>
        <p>
          Funcionalidades do projeto:
          - Página inicial com um layout simples, apresentando uma mensagem de boas-vindas e botões para navegação.
          - Ao clicar no botão "Iniciar", o usuário é redirecionado para uma nova página que exibe um formulário para busca de empresas.
          - O usuário pode preencher o formulário com critérios de busca, como nome da empresa, CNPJ, ou outros detalhes relevantes.
          - Com base nos critérios de busca, o site consulta o banco de dados e exibe uma lista de empresas que correspondem às informações inseridas.
          - Para cada empresa listada, são exibidos o nome, o CNPJ e a situação cadastral.
          - O usuário pode clicar em uma empresa específica para visualizar mais informações detalhadas.
          - Além disso, o projeto possui uma página "Sobre" que fornece informações adicionais sobre o propósito do site e seu desenvolvimento.
        </p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default AboutModal;
