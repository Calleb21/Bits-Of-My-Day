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
            <button onClick={() => openLinkInNewTab('/Apollo')}>Apollo</button>
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

      <div className='imagem1-container2'>
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

      <div className='titulo-central2'>
        <h2>A Reação dos EUA à Supremacia Soviética na Corrida Espacial</h2>
      </div>

      <div className='imagem3-container2'>
        <img src={require('../img/R (1).jpg')} alt='Primeiro lançamento da NASA' className='firstRocketNasa' />
      </div>

      <div className='conteudo-ocomeco1'>
        <p>A ascensão surpreendente da União Soviética ao lançar o Sputnik 1, lançou os Estados Unidos em um redemoinho de choque e determinação. Este foi um momento crucial da Guerra Fria, que acendeu uma fogueira de competição que impulsionou a América a acelerar sua presença na corrida espacial. As primeiras atitudes dos EUA após a surpreendente demonstração de tecnologia da União Soviética envolveram uma série de programas pioneiros, bem como a superação de falhas e desafios iniciais.</p>
        <h4>O Choque Inicial e o Programa Vanguard:</h4>
        <ul>
          <li>O Programa Vanguard foi criado em resposta direta ao Sputnik, com o objetivo de desenvolver um veículo lançador capaz de colocar um satélite americano em órbita.</li>
          <li>O programa foi liderado pela Marinha dos Estados Unidos em parceria com várias instituições científicas e de pesquisa.</li>
        </ul>
      </div>

      <div className='imagem4-container2'>
        <img src={require('../img/Shutterstock_6652863d.jpg')} alt='Explosão do foguete do programa Vanguard' className='explosionRocketNasa' />
      </div>
      <div className='conteudo-ocomeco1'>
      </div>

      <div className='conteudo-ocomeco1'>
        <h4>O Fracasso do Vanguard TV3:</h4>
        <ul>
          <li>O lançamento do primeiro satélite americano, o Vanguard TV3, ocorreu em dezembro de 1957. No entanto, poucos segundos após a decolagem, o foguete explodiu em uma falha espetacular e frustrante.</li>
          <li>A falha do Vanguard TV3 foi transmitida ao vivo na televisão, ampliando ainda mais o impacto negativo e a pressão sobre os Estados Unidos.</li>
        </ul>
        <h4>Lições Aprendidas e Progresso:</h4>
        <ul>
          <li>O fracasso do Vanguard TV3 foi uma lição difícil para os Estados Unidos, destacando as complexidades e desafios da exploração espacial.</li>
          <li>Apesar dessa falha, o Programa Vanguard continuou, e em fevereiro de 1958, o Vanguard 1 foi lançado com sucesso, tornando-se o segundo satélite artificial colocado em órbita.</li>
        </ul>
        <h4>Legado e Impacto:</h4>
        <ul>
          <li>O Programa Vanguard, apesar de suas dificuldades iniciais, contribuiu para o desenvolvimento de tecnologias e conhecimentos que seriam valiosos para os programas espaciais subsequentes.</li>
          <li>A experiência com o Vanguard também incentivou os Estados Unidos a intensificar seus esforços na exploração espacial e a acelerar o desenvolvimento de programas mais ambiciosos.</li>
        </ul>
        <p>O choque causado pelo lançamento do Sputnik 1 levou à criação do Programa Vanguard como a primeira resposta americana à corrida espacial. Embora tenha enfrentado falhas e desafios, o programa proporcionou lições cruciais que contribuíram para o avanço da exploração espacial e para o eventual sucesso dos programas espaciais dos Estados Unidos.</p>
      </div>

      <div className='titulo-central2'>
        <h2>Programa Mercury: O Primeiro Passo Humano na Corrida Espacial</h2>
      </div>

      <div className='imagem5-container2'>
        <img src={require('../img/351259a68beeb7ed0434f3a8ec7a820f.jpg')} alt='Projeto Mercury Nasa' className='mercuryNasa' />
      </div>
      <div className='conteudo-ocomeco1'>
      </div>

      <div className='conteudo-ocomeco1'>
        <p>O Programa Mercury foi o pioneiro que levou o homem ao espaço, representando o primeiro passo da América na corrida espacial e inaugurando uma nova era de exploração humana além da atmosfera terrestre. Concebido como resposta ao desafio lançado pela União Soviética com o lançamento do Sputnik, o Programa Mercury buscou enviar astronautas americanos em órbita ao redor da Terra, não apenas como um feito tecnológico, mas também como um símbolo de determinação e liderança.</p>
        <h4>Objetivos e Desenvolvimento:</h4>
        <ul>
          <li>Lançado pela NASA em 1958, o Programa Mercury visava desenvolver a tecnologia e os veículos necessários para transportar um astronauta em órbita da Terr</li>
          <li>O principal objetivo era demonstrar a capacidade dos Estados Unidos de competir na corrida espacial e reafirmar a presença americana no cenário global.</li>
        </ul>
        <h4>Os Sete Astronautas Originais: Os "Mercury Seven":</h4>
        <ul>
          <li>Sete astronautas pioneiros, apelidados de "Mercury Seven", foram selecionados para fazer parte do programa. Eles eram Scott Carpenter, Gordon Cooper, John Glenn, Gus Grissom, Wally Schirra, Alan Shepard e Deke Slayton.</li>
          <li>Esses astronautas foram escolhidos por suas habilidades, experiência militar e aptidão física e mental para enfrentar os desafios do espaço.</li>
        </ul>
      </div>

      <div className='imagem6-container2'>
        <img src={require('../img/1200x0.jpg')} alt='Mercury Seven' className='mercurySeven' />
      </div>
      <div className='conteudo-ocomeco1'>
      </div>

      <div className='conteudo-ocomeco1'>
        <h4>Os Voos do Programa Mercury:</h4>
        <ul>
          <li>O Programa Mercury incluiu uma série de voos suborbitais e orbitais, cada um com objetivos específicos.</li>
          <li>O primeiro voo suborbital, o Mercury-Redstone 3 (MR-3), foi realizado por Alan Shepard em 5 de maio de 1961. Este voo histórico tornou Shepard o primeiro americano no espaço.</li>
          <li>O voo seguinte, Mercury-Redstone 4 (MR-4), também conhecido como Liberty Bell 7, foi realizado por Gus Grissom.</li>
          <li>O voo orbital tripulado de John Glenn, Mercury-Atlas 6 (MA-6), em 20 de fevereiro de 1962, foi um marco significativo, tornando-o o primeiro americano a orbitar a Terra.</li>
        </ul>
        <h4>Desafios e Conquistas:</h4>
        <ul>
          <li>O Programa Mercury enfrentou uma série de desafios tecnológicos e científicos, incluindo o desenvolvimento de sistemas de suporte de vida, sistemas de controle de temperatura e orientação, e projetos de veículos seguros o suficiente para transportar seres humanos ao espaço.</li>
          <li>A necessidade de realizar experimentos científicos durante os voos também foi uma prioridade, contribuindo para o avanço da pesquisa espacial.</li>
        </ul>
        <h4>Legado e Impacto:</h4>
        <ul>
          <li>O Programa Mercury estabeleceu as bases para a exploração espacial humana, demonstrando a capacidade dos EUA de realizar voos tripulados em órbita.</li>
          <li>Além de seu significado tecnológico, o programa também inspirou gerações futuras a sonhar com o espaço e a perseguir carreiras em ciência e tecnologia.</li>
        </ul>
        <p>O Programa Mercury representou um marco fundamental na jornada espacial dos Estados Unidos, culminando no pioneiro voo orbital de John Glenn. Ele pavimentou o caminho para futuras conquistas e programas, abrindo a porta para a exploração mais profunda do espaço e redefinindo os limites do que a humanidade poderia alcançar.</p>
      </div>

      <div className='titulo-central2'>
        <h2>O Programa Gemini e a Dança Cósmica da Exploração Espacial</h2>
      </div>

      <div className='imagem7-container2'>
        <img src={require('../img/bd1dda2173e13acc6fa1ed70ac9e1657.jpg')} alt='Capsula do programa Gemini' className='capsulaGemini' />
      </div>

      <div className='conteudo-ocomeco1'>
        <p>O Programa Gemini, um capítulo crucial na história da exploração espacial dos Estados Unidos, estabeleceu as bases para as futuras missões Apollo, capacitando astronautas a dominar técnicas complexas e a superar desafios que seriam vitais para a exploração lunar. Entre 1962 e 1966, este programa lançou as bases para a dança cósmica da exploração espacial, aprimorando a tecnologia e as habilidades humanas necessárias para conquistar o espaço.</p>
        <h4>Desenvolvimento Tecnológico e Voos Bem-Sucedidos:</h4>
        <ul>
          <li>O programa Gemini envolveu 10 missões tripuladas, cada uma com suas próprias metas e conquistas notáveis.</li>
          <li>Gemini 3, com Gus Grissom e John Young em 1965, foi o primeiro voo tripulado do programa e realizou manobras orbitais.</li>
          <li>Gemini 4, também em 1965, marcou um marco com Ed White se tornando o primeiro americano a realizar uma caminhada espacial.</li>
        </ul>
        <h4>Gemini 6A e 7: O Encontro Espacial:</h4>
        <ul>
          <li>Gemini 6A, com Wally Schirra e Thomas Stafford em 1965, foi memorável por seu encontro cuidadosamente coordenado com a Gemini 7 em órbita, uma dança espacial pioneira.</li>
        </ul>
        <h4>Gemini 8: Sucesso e Risco:</h4>
        <ul>
          <li>Gemini 8, com Neil Armstrong e David Scott em 1966, realizou o primeiro acoplamento de duas naves espaciais em órbita, mas um mau funcionamento no sistema de propulsão resultou em uma rápida separação de emergência.</li>
        </ul>
        <h4>Gemini 9A: Desafios com Caminhadas Espaciais:</h4>
        <ul>
          <li>Gemini 9A, em 1966, teve Tom Stafford e Gene Cernan enfrentando dificuldades quando o alvo Agena não se desprendeu corretamente, impossibilitando uma caminhada espacial planejada.</li>
        </ul>
        <h4>Gemini 10 e 11: Voos Bem-Sucedidos:</h4>
        <ul>
          <li>Gemini 10, com John Young e Michael Collins em 1966, realizou duas acoplagens bem-sucedidas com alvos Agena em órbita.</li>
          <li>Gemini 11, também em 1966, sob o comando de Charles Conrad e Richard Gordon, alcançou uma órbita muito alta e realizou experimentos e manobras de elevação orbital.</li>
        </ul>
      </div>

      <div className='imagem8-container2'>
        <img src={require('../img/255px-GeminiPatch.png')} alt='Simbolo Gemini' className='simboloGemini' />
      </div>

      <div className='conteudo-ocomeco1'>
        <h4>Legado e Impacto:</h4>
        <ul>
          <li>O Programa Gemini demonstrou a viabilidade de voos mais longos, manobras precisas, acoplagens complexas e caminhadas espaciais, preparando o terreno para as missões Apollo.</li>
          <li>As habilidades e tecnologias desenvolvidas durante o Gemini foram fundamentais para o sucesso das missões Apollo, que finalmente levaram os humanos à Lua.</li>
        </ul>
        <p>O Programa Gemini, um capítulo emocionante na história da exploração espacial, foi uma dança cósmica de desafios superados e triunfos conquistados. Com astronautas como parceiros de dança, o programa dominou a arte de operar no espaço, preparando o caminho para a Apollo 11 e o inesquecível pouso lunar. Esse passo de dança espacial preparou o palco para a humanidade dançar com as estrelas.</p>
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

export default PaginaComeco;

