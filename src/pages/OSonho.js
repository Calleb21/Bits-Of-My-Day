import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './OSonho.css'


function OSonho() {
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
        className="modal1"
        overlayClassName="overlay"
      >
        {/* Conteúdo da modal */}
        <ul className="modal-topics1">
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

      <div className='titulo-central1'>
        <h2>Estrelas e Lendas: A Inspiração para Alcançar a Lua</h2>
        <p>Apollo's Legacy © 2023</p>
      </div>

      <div className='imagem1-container1'>
        <img src={require('../img/luna_galileo_lune.png')} alt='Imagem da Lua' className='imagemLua' />
      </div>

      <div className='conteudo-osonho1'>
        <p>A história da exploração lunar é intrinsecamente entrelaçada com a imaginação humana e a profundidade mítica que sempre cercou a Lua. Desde tempos ancestrais, quando a humanidade começou a erguer os olhos para os céus noturnos, a Lua emergiu como um enigma celeste, um farol de esperança, e um portal para o desconhecido. Os primórdios das ideias de explorar a Lua não somente transcendem o tecido do tempo, mas também transcendem a própria natureza física do mundo, incorporando-se aos mitos, lendas e visões que os povos têm nutrido ao longo dos séculos.</p>
        <p>Na obscuridade das noites antigas, a Lua assumiu muitas formas e significados. Culturas diversas dotaram-na de personalidades mitológicas, incorporando-a em suas narrativas cósmicas. Seja como a benevolente guardiã dos sonhos noturnos, como a testemunha silenciosa de amores trágicos ou como a senhora da magia, a Lua ocupou um espaço central nas concepções humanas sobre o cosmos. Essas crenças não apenas personificaram o céu noturno, mas também desempenharam um papel vital na orientação das sociedades, marcando as estações, auxiliando na navegação e ligando a humanidade ao ciclo infinito da existência.</p>
      </div>

      <div className='imagem1-container2'>
        <img src={require('../img/bbb3aa9e2f82ee4de7c50115b331e8c8.jpg')} alt='OHomem e um telescopio' className='imagemTelescopio' />
      </div>

      <div className='conteudo-osonho1'>
        <p>Entretanto, as primeiras sementes das ideias de explorar a Lua não foram plantadas por meras fantasias ou lendas. Elas surgiram em um momento de convergência entre a imaginação humana e os avanços tecnológicos. À medida que o século XX se desdobrava, as fronteiras do conhecimento científico eram ampliadas, a física celestial estava sendo decifrada e a perspectiva de uma jornada além da Terra começou a se tornar uma possibilidade tangível. A fusão entre o domínio da ciência e o eco das antigas narrativas resultou em uma concepção inédita: a exploração da Lua não era mais uma quimera inalcançável, mas uma meta que poderia ser traçada nas páginas da história humana.</p>
        <p>A influência dessas lendas ancestrais e a curiosidade científica se entrelaçaram, criando um caldeirão de inspiração e motivação. O desejo de conhecer o inatingível, de pisar onde somente os sonhos e mitos permitiam antes, ganhou força. Foi nesse cenário carregado de potencial que as primeiras concepções e projetos para a exploração lunar começaram a tomar forma, gerando um movimento que culminaria na audaciosa declaração de um líder visionário e no esforço coletivo de uma nação: "Apoiaremos o homem na Lua antes do final desta década."</p>
        <p>Assim, "Estrelas e Lendas: A Inspiração para Alcançar a Lua" captura a essência do elo profundo entre a imaginação humana, a herança mitológica e o impulso científico que moldou o caminho em direção à concretização da jornada lunar. É uma exploração do espaço interior e exterior, onde as histórias do passado se entrelaçam com a busca pela conquista do espaço, convergindo em uma narrativa de exploração, esperança e realização.</p>
      </div>

      <div className='titulo-central1'>
        <h2>Impulso Cósmico: Explorando as Origens do Discurso Visionário de Kennedy</h2>
      </div>

      <div className='imagem1-container3'>
        <img src={require('../img/guerra-fria.jpg')} alt='Imagem da Guerra' className='imgGuerraFria' />
      </div>

      <div className='conteudo-osonho1'>
        <p>No cenário tumultuado da Guerra Fria, em que as nações travavam uma batalha pelo domínio tecnológico e político, emergiu uma figura que compreendeu a importância de direcionar as aspirações humanas para o cosmos. Foi nesse contexto altamente competitivo e permeado por uma corrida silenciosa que o presidente dos Estados Unidos, John F. Kennedy, proferiu um discurso que ecoaria através das décadas como um chamado visionário para a exploração espacial.</p>
        <h4>A Guerra Fria e a Competição Espacial:</h4>
        <ul>
          <li>O mundo estava mergulhado em uma rivalidade intensa entre os Estados Unidos e a União Soviética, denominada Guerra Fria. Cada nação estava empenhada em provar sua supremacia, tanto no aspecto tecnológico quanto político.</li>
          <li>A União Soviética alcançou um marco impressionante com o lançamento do Sputnik 1, o primeiro satélite artificial da Terra, que enviou ondas de choque através dos Estados Unidos. A América se viu atrás na corrida espacial, enfrentando a percepção de estar ficando para trás em termos de conquistas científicas e tecnológicas.</li>
        </ul>
        <h4>O Discurso que Mudou o Rumo da Exploração Espacial:</h4>
        <ul>
          <li>Em 25 de maio de 1961, John F. Kennedy proferiu um discurso perante o Congresso dos Estados Unidos, delineando uma visão que transcendia os limites terrestres. Ele apresentou uma proposta audaciosa e desafiadora: enviar um homem à Lua e trazê-lo de volta à Terra com segurança até o final da década.</li>
          <li>Kennedy reconheceu a necessidade de um impulso cósmico para reverter o sentimento de atraso e insuficiência que pairava sobre os Estados Unidos. Ele entendeu que essa meta ousada poderia catalisar uma onda de inovação e engenhosidade, promovendo o desenvolvimento tecnológico em várias áreas.</li>
        </ul>
      </div>


      <div className='imagem1-container4'>
        <img src={require('../img/Kennedy1.jpg')} alt='Imagem do discurso do Kennedy' className='KennedyDiscurso' />
      </div>

      <div className='conteudo-osonho1'>
        <h4>Os pilares do Discurso de Kennedy</h4>
        <ul>
          <li><b>Competição e Orgulho Nacional:</b> Kennedy percebeu que a exploração lunar serviria como um campo de batalha pacífico para competir com a União Soviética, demonstrando a liderança dos Estados Unidos em tecnologia e engenhosidade.</li>
          <li><b>Futuro e Inspiração:</b> Ao propor a conquista lunar, Kennedy investiu no futuro da nação e inspirou as gerações vindouras a olhar para as estrelas em busca de oportunidades inexploradas.</li>
          <li><b>Potencial Científico e Tecnológico:</b> O presidente acreditava que a exploração lunar levaria a avanços científicos e tecnológicos significativos, beneficiando não apenas a exploração espacial, mas também a sociedade como um todo.</li>
        </ul>
        <h4>O Legado do Discurso:</h4>
        <ul>
          <li>O discurso de Kennedy marcou um ponto de inflexão na exploração espacial, catalisando o compromisso dos Estados Unidos em alcançar a Lua e influenciando profundamente a política espacial do país.
          </li>
          <li>Ele deixou um legado duradouro ao enfatizar que a exploração espacial não era apenas um feito científico, mas uma demonstração de coragem, determinação e visão compartilhada para a humanidade.</li>
        </ul>
      </div>

      <div className='imagem1-container5'>
        <img src={require('../img/h-nasa-exei-pyriniko-antidrastira-se-troxia.jpg')} alt='Foguete dos EUA com seu primeiro sátelite' className='firstRocket' />
      </div>

      <div className='conteudo-osonho1'>
        <p>Assim, "Impulso Cósmico: Explorando as Origens do Discurso Visionário de Kennedy" mergulha nas raízes e motivações profundas que deram origem a um discurso que transcendeu o tempo, moldando o curso da exploração espacial e da busca incansável pelo desconhecido.</p>
      </div>

      <div className='despedida'>
        <p>Obrigado, volte sempre!</p>
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

export default OSonho;

