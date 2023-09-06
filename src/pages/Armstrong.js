import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Armstrong.css";

function Armstrong() {
  const [showTopics, setShowTopics] = useState(false);

  const toggleTopics = () => {
    setShowTopics(!showTopics);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (showTopics) {
      setShowTopics(false);
    }
  };

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
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
        className="modal4"
        overlayClassName="overlay"
      >
        {/* Conteúdo da modal */}
        <ul className="modal-topics4">
          <li>
            <button onClick={() => openLinkInNewTab("/OSonho")}>O sonho</button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab("/OComeco")}>
              O começo
            </button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab("/Apollo")}>Apollo</button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab("/UmPequenoPasso")}>
              Um pequeno passo
            </button>
          </li>
        </ul>
      </Modal>

      <div className="titulo-central4">
        <h2>Neil Armstrong: O Homem que Deu Cor a uma Nação</h2>
        <p>Apollo's Legacy © 2023</p>
      </div>

      <div className="imagem1-container4">
        <img
          src={require("../img/Armstrong.jpg")}
          alt="Imagem de Neil Armstrong"
          className="neilArmstrong"
        />
      </div>

      <div className="conteudo-armstrong">
        <h4>Infância e Paixão Pelo Céu</h4>
        <p>
          No dia 5 de agosto de 1930, um futuro pioneiro nasceu em uma fazenda
          pitoresca nas proximidades da cidade de Wapakoneta, Ohio, nos Estados
          Unidos. Este pequeno grande homem era Neil Alden Armstrong, o
          primogênito de Stephen Koenig Armstrong e Viola Louise Engel. Vindo de
          uma linhagem de ascendência alemã e escocesa, Neil cresceu em um
          ambiente familiar que logo seria marcado pela sua extraordinária
          jornada.
        </p>
        <p>
          A família Armstrong não era imóvel; eles eram nômades dentro do
          próprio estado de Ohio. Stephen Koenig Armstrong, o pai, era um
          dedicado auditor do governo estadual, o que resultou em numerosas
          mudanças de residência ao longo dos anos. Durante um período de
          catorze anos, eles trocaram de endereço dezesseis vezes, descobrindo o
          vasto território de Ohio como poucos. Enquanto os outros membros da
          família se adaptavam a essas mudanças, o jovem Neil encontrou sua
          paixão nos céus.
        </p>
        <p>
          A chama do amor de Neil Armstrong pela aviação foi acesa desde tenra
          idade. Com apenas dois anos, seu pai o levou para assistir à
          empolgante Corrida Aérea de Cleveland, um evento que se tornou o marco
          zero de sua fascinação pela aviação. Aos cinco ou seis anos, ele
          experimentou a emoção de voar pela primeira vez, em um inesquecível
          passeio a bordo de um Ford Trimotor, pilotado por seu próprio pai.
          Essas experiências iniciais moldaram o destino do jovem Neil e o
          prepararam para um futuro incrivelmente audacioso.
        </p>
        <p>
          As mudanças constantes de residência da família finalmente chegaram ao
          fim em 1944, quando eles retornaram à cidade de Wapakoneta. Foi nessa
          cidade que Neil começou a seguir seu sonho. Matriculado no Colégio
          Blume, ele mergulhou de cabeça em suas paixões, não apenas estudando,
          mas também aprendendo a voar no aeródromo local. Aos dezesseis anos,
          ele recebeu seu certificado de estudante de voo como presente de
          aniversário e, no mesmo mês, realizou seu primeiro voo solo, uma
          realização notável que precedeu até mesmo a obtenção de sua carteira
          de motorista.
        </p>
        <p>
          Neil também era membro ativo dos Escoteiros, e seu comprometimento o
          levou ao prestigioso nível de Águia Escoteira. Essa dedicação à
          organização escoteira nunca o deixou, mesmo quando ele alcançou as
          estrelas. Enquanto viajava para a Lua em 18 de julho de 1969, Neil
          Armstrong dedicou palavras especiais aos escoteiros, lembrando-os de
          que, de alguma forma, eles estavam lá com ele naquele momento
          singular. Um gesto simbólico desse compromisso foi a insígnia dos
          escoteiros que ele levou e trouxe de volta da Lua, uma lembrança
          tangível de suas raízes terrestres.
        </p>
      </div>

      <div className="imagem2-container4">
        <img
          src={require("../img/armstrongInfancia.jpg")}
          alt="Imagem de Neil Armstrong Jovem"
          className="Escudeiro"
        />
      </div>

      <div className="conteudo-armstrong">
        <p>
          Com dezenove anos, em 1947, Neil deu o próximo passo em sua notável
          jornada. Ele ingressou na Universidade Purdue para estudar engenharia
          aeroespacial, uma escolha que moldaria seu destino de maneira
          profunda. Tornou-se a segunda pessoa de sua família a frequentar uma
          universidade, e embora também tenha sido aceito no prestigioso
          Instituto Tecnológico de Massachusetts, uma conversa com um tio
          influente mudou seu rumo. Seu tio, um ex-aluno do MIT, convenceu Neil
          de que uma educação de qualidade poderia ser encontrada em casa, em
          Purdue, sem a necessidade de viajar até Cambridge, Massachusetts.
        </p>
        <p>
          As mensalidades de Neil na universidade foram financiadas pelo Plano
          Holloway da Marinha dos Estados Unidos. Esse plano único exigia que os
          alunos passassem dois anos estudando, seguidos por dois anos de
          treinamento de voo. Então, eles se dedicariam a um ano de serviço na
          Marinha como aviadores, antes de completar os últimos dois anos do
          bacharelado. A jornada acadêmica de Neil não incluiu disciplinas sobre
          ciência naval, e ele optou por não entrar no Corpo de Treinamento de
          Oficiais da Reserva Naval em Purdue.
        </p>
        <p>
          Essa fase inicial da vida de Neil Armstrong lançou as bases de sua
          extraordinária trajetória, marcada por um amor inabalável pelos céus e
          uma determinação imparável em alcançar as estrelas. Poucos poderiam
          prever naqueles dias que o jovem rapaz de Wapakoneta se tornaria o
          primeiro ser humano a caminhar na superfície da Lua e conquistar o
          inimaginável.
        </p>
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
          <a
            href="https://github.com/Calleb21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-button github">GitHub</button>
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Armstrong;
