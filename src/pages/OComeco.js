import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './OComeco.css';

function PaginaComeco() {
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
        className="modal2"
        overlayClassName="overlay"
      >
        {/* Conteúdo da modal */}
        <ul className="modal-topics2">
          <li>
            <button onClick={() => openLinkInNewTab('/OSonho')}>O sonho</button>
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

      <div className='titulo-central2'>
        <h2>Do Sonho à Realidade: A NASA e o Salto para a Lua</h2>
        <p>Apollo's Legacy © 2023</p>
      </div>

      <div className='imagem2-container1'>
        <img src={require('../img/flat,1000x1000,075,f.u2.jpg')} alt='Imagem do logo da NASA' className='logoNasa' />
      </div>

      <div className='conteudo-ocomeco1'>
        <p>A fundação da NASA (Administração Nacional da Aeronáutica e Espaço) marcou um ponto crucial na história da exploração espacial e na pesquisa científica nos Estados Unidos. Foi Criada em 29 de julho de 1958 pelo presidente Dwight D. Eisenhower.</p>
        <p>O nascimento da NASA e o subsequente lançamento dos programas Apollo para alcançar a Lua representaram uma jornada de ambição, engenhosidade e cooperação humana sem precedentes. Em meio à complexidade geopolítica da Guerra Fria, esse período de conquista espacial desvendou novas dimensões de nossa existência, transformando sonhos em realizações concretas e catapultando a humanidade para uma nova era de exploração cósmica.</p>
        <h4>Contexto Histórico:</h4>
        <p>Na sequência do lançamento do Sputnik 1 pela União Soviética em 1957, os Estados Unidos se viram atrás na corrida espacial. Esse evento levou à percepção de que a capacidade tecnológica e científica dos Estados Unidos estava sendo desafiada. Em resposta, houve uma crescente pressão para centralizar os esforços e recursos em um órgão governamental que liderasse a exploração espacial.</p>
      </div>

      <div className='imagem2-container2'>
        <img src={require('../img/R.jpg')} alt='Imagem do Sputnik' className='sputnik' />
      </div>

      <div className='conteudo-ocomeco1'>
        <p>O Sputnik foi o primeiro satélite artificial lançado com sucesso na órbita da Terra, marcando o início da era espacial. Ele foi lançado pela União Soviética em 4 de outubro de 1957. O termo "Sputnik" significa "companheiro de viagem" em russo.</p>
        <h4>Detalhes Técnicos:</h4>
        <ul>
          <li>O Sputnik tinha cerca de 58 centímetros de diâmetro e pesava cerca de 83,6 kg.</li>
          <li>Ele era esférico e feito de alumínio, com quatro longas antenas.</li>
          <li>O satélite era equipado com rádios que transmitiam sinais de rádio em frequências que podiam ser recebidas em todo o mund</li>
        </ul>
        <h4>Significado Histórico:</h4>
        <ul>
          <li>O lançamento do Sputnik foi um marco significativo na Guerra Fria, acentuando a rivalidade entre os Estados Unidos e a União Soviética.</li>
          <li>Ele demonstrou a capacidade da União Soviética de colocar um objeto em órbita, sinalizando um avanço tecnológico importante.
          </li>
          <li>O Sputnik também desencadeou preocupações nos Estados Unidos, levando à intensificação dos esforços espaciais norte-americanos.</li>
        </ul>
        <h4>Impacto:</h4>
        <ul>
          <li>O Sputnik iniciou a corrida espacial entre os Estados Unidos e a União Soviética, com os dois países competindo para desenvolver tecnologias espaciais superiores.</li>
          <li>O evento impulsionou o investimento em educação em ciência e tecnologia nos Estados Unidos, culminando na criação da NASA.</li>
          <li>Ele também levou à rápida evolução das tecnologias de foguetes e à exploração espacial subsequente.</li>
        </ul>
        <p>Em resumo, o lançamento do Sputnik marcou um ponto de virada na exploração espacial, acendendo a competição entre superpotências e pavimentando o caminho para a exploração do cosmos que se seguiria nas décadas seguintes.</p>
      </div>

      <div className='segundo-titulo2'>
        <h2>A Reação dos EUA à Supremacia Soviética na Corrida Espacial</h2>
      </div>

      <div className='imagem3-container2'>
        <img src={require('../img/R (1).jpg')} alt='Primeiro lançamento da NASA' className='firstRocketNasa'/>
      </div>

      <div className='conteudo-ocomeco1'>
        <p>A ascensão surpreendente da União Soviética ao lançar o Sputnik 1, o primeiro satélite artificial, lançou os Estados Unidos em um redemoinho de choque e determinação. Este foi um momento crucial da Guerra Fria, que acendeu uma fogueira de competição que impulsionou a América a acelerar sua presença na corrida espacial. As primeiras atitudes dos EUA após a surpreendente demonstração de tecnologia da União Soviética envolveram uma série de programas pioneiros, bem como a superação de falhas e desafios iniciais.</p>
        <h4>O Choque Inicial e o Programa Vanguard:</h4>
        <ul>
          <li>O lançamento do Sputnik 1 causou alarme nos Estados Unidos, uma vez que representava um avanço soviético considerável na exploração espacial.</li>
          <li>Como resposta, os EUA aceleraram o Programa Vanguard, que visava colocar um satélite em órbita. No entanto, o lançamento do primeiro satélite dos EUA, o Vanguard TV3, resultou em uma falha catastrófica, explodindo segundos após a decolagem em dezembro de 1957.</li>
        </ul>
      </div>

      <div className='imagem4-container2'>
        <img src={require('../img/Shutterstock_6652863d.jpg')} alt='Explosão do foguete do programa Vanguard' className='explosionRocketNasa'/>
      </div>

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

export default PaginaComeco;

