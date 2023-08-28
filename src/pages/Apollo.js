import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Apollo.css";

function Apollo() {
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
        className="modal3"
        overlayClassName="overlay"
      >
        {/* Conteúdo da modal */}
        <ul className="modal-topics3">
          <li>
            <button onClick={() => openLinkInNewTab("/OSonho")}>O sonho</button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab("/OComeco")}>
              O começo
            </button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab("/Armstrong")}>
              Armstrong
            </button>
          </li>
          <li>
            <button onClick={() => openLinkInNewTab("/UmPequenoPasso")}>
              Um pequeno passo
            </button>
          </li>
        </ul>
      </Modal>

      <div className="titulo-central3">
        <h2>Alcançando o Inalcançável: O Legado Heróico do Programa Apollo</h2>
        <p>Apollo's Legacy © 2023</p>
      </div>

      <div className="imagem1-container3">
        <img
          src={require("../img/1d18663527ec36f0a6a3a5faee075b7d.jpg")}
          alt="Imagem do logo do Programa Apollo"
          className="logoApollo"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          {" "}
          O Programa Apollo foi um ambicioso esforço espacial conduzido pelos
          Estados Unidos durante a década de 1960 e início dos anos 1970. Criado
          como resposta à corrida espacial com a União Soviética, seu objetivo
          principal era levar seres humanos à Lua e trazê-los de volta com
          segurança à Terra.
        </p>
        <p>
          O programa abrangeu diversas etapas e tecnologias inovadoras, desde a
          criação de naves espaciais capazes de suportar viagens de longa
          duração até o desenvolvimento de sistemas de navegação precisa. Além
          disso, o programa Apollo envolveu o projeto e construção de foguetes
          poderosos, como o Saturn V, que seriam capazes de lançar as naves
          espaciais tripuladas em direção à Lua.
        </p>
        <p>
          O sucesso do Programa Apollo dependia de uma colaboração multifacetada
          entre a NASA (Agência Espacial Americana), equipes de engenheiros,
          cientistas, astronautas e fornecedores de tecnologia. Cada missão foi
          meticulosamente planejada e testada para garantir que cada componente
          funcionasse perfeitamente durante a jornada espacial.
        </p>
        <p>
          O programa também teve impactos significativos fora do âmbito da
          exploração espacial. Ele estimulou o desenvolvimento de tecnologias
          que encontraram aplicações em campos como medicina, eletrônica e
          comunicações. Além disso, a exploração lunar fez com que a humanidade
          adquirisse uma nova perspectiva sobre nosso próprio planeta e nosso
          lugar no universo.
        </p>
      </div>

      <div className="titulo-central3">
        <h2>Titan do Espaço: A Saga do Foguete Saturn V e a Jornada Lunar</h2>
      </div>

      <div className="imagem2-container3">
        <img
          src={require("../img/SaturnV.jpg")}
          alt="Imagem do Saturn V"
          className="saturnV"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          O Saturn V foi um dos feitos mais notáveis da engenharia espacial, um
          foguete colossal que desempenhou um papel crucial no sucesso do
          Programa Apollo. Projetado e desenvolvido pela NASA, juntamente com
          suas empresas contratadas, o Saturn V foi uma conquista técnica de
          proporções épicas.
        </p>
        <h4>Projeto e Importância:</h4>
        <p>
          O desenvolvimento do Saturn V começou nos primeiros anos da década de
          1960, como resposta ao desafio lançado pelo presidente John F. Kennedy
          de enviar humanos à Lua. Ele foi projetado para transportar as naves
          espaciais Apollo, que levariam os astronautas à órbita lunar e depois
          de volta à Terra. Sua principal função era fornecer a potência
          necessária para escapar da gravidade terrestre e impulsionar as
          missões Apollo em direção à Lua.
        </p>
        <h4>Características e Funcionamento:</h4>
        <p>
          O Saturn V era um foguete de múltiplos estágios, composto por três
          partes principais: o primeiro estágio S-IC, o segundo estágio S-II e o
          terceiro estágio S-IVB. Cada estágio tinha seus próprios motores de
          foguete e sistemas de propulsão.
        </p>
      </div>

      <div className="imagem3-container3">
        <img
          src={require("../img/SaturnVStages.jpg")}
          alt="Imagem dos estágios Saturn V"
          className="saturnVStage"
        />
      </div>

      <div className="conteudo-apollo1">
        <h4>Primeiro Estágio (S-IC):</h4>
        <ul>
          <li>
            O S-IC era o maior estágio e continha cinco motores F-1, que eram os
            maiores motores de foguete já construídos.
          </li>
          <li>
            Seu papel era fornecer a potência inicial para lançar todo o foguete
            do solo e superar a gravidade terrestre.
          </li>
          <li>
            Após esgotar seu combustível, o S-IC era descartado e caía no
            oceano.
          </li>
        </ul>
        <h4>Segundo Estágio (S-II):</h4>
        <ul>
          <li>
            O S-II tinha cinco motores J-2, que eram alimentados por hidrogênio
            líquido e oxigênio líquido.
          </li>
          <li>
            Sua função era continuar a aceleração após a separação do S-IC,
            levando o foguete a altitudes ainda mais elevadas.
          </li>
        </ul>
        <h4>Terceiro Estágio (S-IVB):</h4>
        <ul>
          <li>
            O S-IVB também usava motores J-2 e era responsável por inserir a
            nave Apollo em órbita lunar.
          </li>
          <li>
            Após cumprir sua função, o S-IVB era frequentemente usado como
            plataforma para liberar a nave em direção à Lua.
          </li>
        </ul>
        <h4>Legado e Impacto:</h4>
        <p>
          O Saturn V foi fundamental para o sucesso das missões Apollo. Sua
          capacidade de levar grandes cargas úteis em trajetórias
          interplanetárias permitiu que as naves Apollo alcançassem a Lua. Além
          disso, o desenvolvimento do Saturn V levou a avanços significativos em
          tecnologia de foguetes e propulsão, que continuaram a influenciar o
          campo da exploração espacial e além.
        </p>
        <p>
          O Saturn V é um ícone da exploração espacial, simbolizando o triunfo
          da engenharia, da ciência e da inovação humana. Cada lançamento do
          Saturn V representou um passo em direção a um objetivo audacioso,
          culminando com as missões Apollo que levaram seres humanos à Lua e
          deixaram uma marca indelével na história da humanidade.
        </p>
      </div>

      <div className="imagem4-container3">
        <img
          src={require("../img/0e8fd88fd4732f45be1576fcad366b6d.jpg")}
          alt="Imagem do Modulo Lunar e de Comando"
          className="saturnVModules"
        />
      </div>

      <div className="conteudo-apollo1">
        <h4>Módulo de Comando e Serviço (CSM):</h4>
        <p>
          O Módulo de Comando e Serviço era a parte da nave que abrigava os
          astronautas durante todo o voo, desde o lançamento até o retorno à
          Terra. Era composto por duas seções:
        </p>
        <ol>
          <li>
            <strong>Módulo de Comando (CM):</strong> O CM era a "cabine" dos
            astronautas. Ele continha sistemas de controle, comunicação,
            navegação e suporte à vida. Além disso, foi onde os astronautas
            permaneceram durante a fase de lançamento, a órbita terrestre e a
            viagem de retorno. Durante o lançamento, o CM estava protegido pelo
            escudo térmico, que o protegia do calor gerado durante a reentrada
            na atmosfera terrestre.
          </li>
          <li>
            <strong>Módulo de Serviço (SM):</strong> O SM ficava abaixo do CM e
            continha os sistemas de propulsão e suprimentos necessários para a
            missão. Ele também continha painéis solares que forneciam energia à
            nave durante a jornada.
          </li>
        </ol>
        <h4>Módulo Lunar (LM):</h4>
        <p>
          O Módulo Lunar, também conhecido como "Lunar Excursion Module" (LEM),
          foi o veículo que permitiu que os astronautas pousassem e explorassem
          a superfície lunar. O LM tinha duas partes principais:
        </p>
        <ol>
          <li>
            <strong>Módulo de Pouso (Descent Stage):</strong> Essa parte do LM
            continha os motores e sistemas necessários para pousar suavemente na
            superfície lunar. Ele também abrigava equipamentos e suprimentos
            para a exploração lunar, como instrumentos científicos e amostras de
            solo.
          </li>
          <li>
            <strong>Módulo de Ascensão (Ascent Stage): </strong> Após a
            exploração lunar, os astronautas retornavam ao Módulo de Ascensão,
            que tinha um motor que os impulsionava de volta à órbita lunar para
            se reencontrar com o Módulo de Comando e Serviço.
          </li>
        </ol>
        <p>
          O Módulo de Comando e Serviço permanecia em órbita lunar enquanto os
          astronautas exploravam a superfície com o Módulo Lunar. Após a
          reunião, os astronautas transferiam para o Módulo de Comando e Serviço
          para o retorno à Terra.
        </p>
        <p>
          Essa combinação de módulos permitiu que os astronautas viajassem para
          a Lua, explorassem sua superfície e retornassem em segurança. Cada
          módulo desempenhou um papel crítico, trabalhando em conjunto para
          realizar uma das maiores conquistas da exploração espacial: levar
          seres humanos à Lua e trazê-los de volta à Terra.
        </p>
      </div>

      <div className="titulo-central3">
        <h2>
          Conquistando o Espaço Profundo: As Épicas Missões Apollo para a Lua
        </h2>
      </div>

      <div className="imagem5-container3">
        <img
          src={require("../img/588915b3ca5ed.image.jpg")}
          alt="Tripulantes da missão Apollo 1"
          className="Apollo1"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 1 foi a primeira designação dada a uma missão
          tripulada do Programa Apollo da NASA. No entanto, a Apollo 1 é mais
          lembrada pela tragédia que a envolveu do que por qualquer realização
          espacial. Aqui está o que aconteceu:
        </p>
        <h4>Tripulação:</h4>
        <ul>
          <li>
            A tripulação da Apollo 1 era composta por três astronautas: Virgil
            "Gus" Grissom, Edward H. White II e Roger B. Chaffee.
          </li>
        </ul>
        <h4>Objetivos:</h4>
        <ul>
          <li>
            A Apollo 1 estava programada para ser uma missão não tripulada que
            testaria a espaçonave Apollo em órbita terrestre baixa.
          </li>
          <li>
            Os objetivos incluíam testar sistemas de suporte de vida, sistemas
            de propulsão e comunicações em preparação para as missões
            subsequentes.
          </li>
          <h4>A Tragédia:</h4>
          <li>
            Em 27 de janeiro de 1967, durante um teste de pré-lançamento na
            Plataforma de Lançamento 34 do Centro Espacial Kennedy na Flórida,
            um incêndio violento eclodiu no módulo de comando da Apollo 1.
          </li>
          <li>
            Os astronautas estavam dentro do módulo na época, e o incêndio se
            espalhou rapidamente, impedindo sua evacuação. A tragédia resultou
            na perda trágica das vidas dos três astronautas.
          </li>
        </ul>
      </div>

      <div className="imagem6-container3">
        <img
          src={require("../img/OIP.jpg")}
          alt="Capsula queimada da missão Apollo 1"
          className="Apollo1Explosion"
        />
      </div>

      <div className="conteudo-apollo1">
        <h4>Causas e Lições Aprendidas:</h4>
        <ul>
          <li>
            A investigação subsequente revelou que o incêndio foi causado por
            uma combinação de falhas elétricas, sistemas de pressurização de
            oxigênio puro e materiais inflamáveis no interior da cápsula.
          </li>
          <li>
            A tragédia da Apollo 1 levou a uma revisão completa dos
            procedimentos de segurança e design da espaçonave Apollo.
          </li>
          <li>
            Foram implementadas melhorias significativas, como a substituição do
            oxigênio puro por uma mistura mais segura de oxigênio e nitrogênio,
            sistemas de proteção contra incêndios aprimorados e revisões de
            procedimentos de teste.
          </li>
        </ul>
        <h4>Impacto: </h4>
        <ul>
          <li>
            Embora a Apollo 1 tenha sido uma tragédia devastadora, suas lições
            ajudaram a aprimorar a segurança das missões Apollo subsequentes.
          </li>
          <li>
            O programa espacial dos Estados Unidos continuou após a tragédia, e
            a Apollo 7 se tornou a primeira missão tripulada da série em outubro
            de 1968.
          </li>
        </ul>
        <p>
          A Apollo 1 é lembrada como um lembrete doloroso dos riscos e desafios
          da exploração espacial. As vidas perdidas na tragédia nunca serão
          esquecidas, e suas contribuições para a exploração espacial continuam
          a ser lembradas à medida que a humanidade avança em direção às
          estrelas.
        </p>
      </div>

      <div className="titulo-central3">
        <h2>O Renascimento do Programa Apollo</h2>
      </div>

      <div className="imagem7-container3">
        <img
          src={require("../img/375px-Apollo7.png")}
          alt="Emblema da Apollo 7"
          className="Apollo7"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 7, lançada em 11 de outubro de 1968, marcou um ponto
          de viragem crucial no Programa Apollo da NASA e na exploração espacial
          como um todo. Após a tragédia da Apollo 1, que resultou na perda de
          três astronautas em um incêndio durante um teste em solo, a Apollo 7
          foi a primeira missão tripulada do programa e um teste crítico de
          sistemas que estavam sendo aprimorados após as lições dolorosas da
          Apollo 1.
        </p>
        <h4>Objetivos Complexos:</h4>
        <ol>
          <li>
            <strong>Testar o Módulo de Comando e Serviço (CSM):</strong> O
            principal objetivo da Apollo 7 era verificar a funcionalidade e a
            segurança do Módulo de Comando e Serviço (CSM) em órbita terrestre.
            Era imperativo garantir que o CSM estivesse em condições de levar
            astronautas em futuras missões lunares.
          </li>
          <li>
            <strong>Realizar Experimentos Científicos:</strong> A missão também
            tinha um componente científico, com experimentos planejados para
            coletar dados sobre a radiação no espaço, a física do ambiente lunar
            e outros fenômenos.
          </li>
          <li>
            <strong>Testar Novos Sistemas:</strong> A Apollo 7 foi uma
            oportunidade para testar sistemas de suporte de vida, sistemas de
            propulsão, sistemas de comunicação e sistemas de controle de
            navegação em órbita.
          </li>
        </ol>
        <h4>Tripulação Destemida:</h4>
        <ul>
          <li>
            A tripulação da Apollo 7 era composta por três astronautas
            corajosos: Walter Schirra, Donn Eisele e Walter Cunningham. Schirra
            era um veterano de missões anteriores, enquanto Eisele e Cunningham
            estavam voando ao espaço pela primeira vez.
          </li>
        </ul>
        <h4>Realizações Notáveis:</h4>
        <ul>
          <li>
            A Apollo 7 foi a primeira missão a transmitir ao vivo na televisão a
            partir do espaço. Isso permitiu que o público em todo o mundo
            acompanhasse as atividades da tripulação e testemunhasse a vida no
            espaço.
          </li>
          <li>
            A missão testou o CSM em uma órbita circular baixa da Terra,
            realizando uma série de manobras para avaliar o desempenho do
            sistema.
          </li>
          <li>
            Os astronautas conduziram uma série de experimentos científicos,
            incluindo medições de radiação solar e observações da Terra.
          </li>
        </ul>
        <h4>Legado e Impacto:</h4>
        <ul>
          <li>
            A Apollo 7 foi um sucesso notável e vital. Ela demonstrou que as
            correções de segurança após a Apollo 1 haviam sido eficazes e que a
            NASA estava pronta para continuar com missões tripuladas em direção
            à Lua.
          </li>
          <li>
            O lançamento bem-sucedido da Apollo 7 abriu caminho para o
            lançamento do poderoso foguete Saturn V e para as missões lunares
            subsequentes, que culminaram com o histórico pouso da Apollo 11 na
            Lua em 1969.
          </li>
        </ul>
        <p>
          A Apollo 7 não só provou a resiliência do programa Apollo, mas também
          foi um marco na história da exploração espacial. Ela preparou o
          terreno para as missões que viriam a seguir e solidificou a
          determinação da NASA de alcançar o objetivo ambicioso de pousar seres
          humanos na Lua e trazê-los em segurança de volta à Terra.
        </p>
        <h4>Curiosidades: </h4>
        <p>
          A razão pela qual a missão Apollo 1 foi seguida pela Apollo 7, em vez
          de uma sequência numérica direta, é devido a uma série de fatores
          relacionados à tragédia da Apollo 1 e ao processo de investigação e
          reformulação do programa.
        </p>
        <p>
          As investigações revelaram falhas de segurança, incluindo problemas
          com os sistemas de cabos elétricos e uma atmosfera rica em oxigênio
          puro, que contribuíram para a rápida propagação do fogo. Como
          resultado, uma série de revisões e melhorias foram feitas no projeto e
          na preparação de futuras missões.
        </p>
        <p>
          A decisão de renomear a próxima missão tripulada como Apollo 7
          refletiu a necessidade de reiniciar o programa com um novo começo após
          a tragédia. As missões subsequentes foram numeradas de forma
          consecutiva, começando com a Apollo 7, para continuar a progressão do
          programa e honrar a memória dos astronautas perdidos na Apollo 1. A
          Apollo 7 foi bem-sucedida e marcou o retorno das missões tripuladas,
          pavimentando o caminho para o programa Apollo seguir em frente em
          direção à conquista lunar.
        </p>
      </div>

      <div className="imagem8-container3">
        <img
          src={require("../img/Apollo-8-patch.png")}
          alt="Emblema da Apollo 8"
          className="Apollo8"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 8, lançada em 21 de dezembro de 1968, representou um
          dos momentos mais notáveis e históricos da exploração espacial. Esta
          missão não apenas desempenhou um papel crucial na corrida espacial,
          mas também abriu caminho para a realização do sonho humano de chegar à
          Lua. Vamos explorar em detalhes os principais aspectos da Apollo 8:
        </p>
        <h4>Objetivos Visionários:</h4>
        <p>
          A Apollo 8 tinha um objetivo ambicioso e visionário: orbitar a Lua,
          mas não pousar nela. Isso representou um grande salto em relação às
          missões anteriores, que se limitaram à órbita terrestre. O objetivo
          era testar os sistemas da espaçonave em um ambiente lunar e preparar o
          terreno para missões futuras de pouso lunar, como a Apollo 11.
        </p>
        <h4>A Coragem da Tripulação:</h4>
        <p>
          A tripulação da Apollo 8 era composta por três astronautas notáveis.
          Frank Borman era o comandante, James Lovell atuava como piloto do
          módulo de comando, e William Anders ocupava o posto de piloto do
          módulo lunar. Eles se tornaram os primeiros seres humanos a viajar
          para além da órbita terrestre e entrar em órbita lunar. Sua coragem e
          dedicação à exploração espacial eram evidentes.
        </p>
        <h4>Orbitando a Lua:</h4>
        <p>
          A Apollo 8 realizou uma série de órbitas bem-sucedidas ao redor da
          Lua. Durante essas órbitas, os astronautas tiveram a oportunidade
          única de observar a superfície lunar de perto e capturar imagens
          impressionantes. Eles também se tornaram os primeiros a testemunhar o
          nascer da Terra a partir do espaço profundo, uma visão que deixou uma
          impressão duradoura na consciência humana.
        </p>
        <h4>A Leitura do Livro do Gênesis:</h4>
        <p>
          Em um momento emocionante, durante uma transmissão ao vivo da órbita
          lunar, a tripulação leu o Livro do Gênesis da Bíblia. Suas palavras
          ressoaram em todo o mundo e capturaram a natureza única da jornada da
          Apollo 8, que uniu a ciência e a exploração com a espiritualidade e a
          contemplação.
        </p>
        <h4>Legado Duradouro:</h4>
        <p>
          A Apollo 8 não apenas teve sucesso em seus objetivos técnicos, mas
          também deixou um legado profundo. A famosa "Foto do Nascer da Terra,"
          tirada por William Anders, destacou a beleza e fragilidade do nosso
          planeta azul em meio ao vazio do espaço. Isso contribuiu para a
          conscientização ambiental e a compreensão da Terra como um ecossistema
          frágil.
        </p>
        <p>
          Além disso, a missão Apollo 8 abriu o caminho para a histórica Apollo
          11, que realizou o primeiro pouso lunar em julho de 1969. A Apollo 8
          permanece como um marco na história da exploração espacial e na
          jornada humana em direção às estrelas, lembrando-nos de nossa
          capacidade de alcançar o inatingível e de compreender nosso lugar
          único no cosmos.
        </p>
        <h4>Curiosidade:</h4>
        <ol>
          <li>
            <strong>Navegação por Estrelas:</strong> Durante a missão, os
            astronautas usaram estrelas para navegação, como guias celestiais.
            Eles tinham um sistema de navegação de estrelas a bordo para
            calcular sua posição com precisão.
          </li>
          <li>
            <strong>O Primeiro Natal no Espaço:</strong> A Apollo 8 foi a
            primeira missão a levar humanos à órbita lunar, e ela coincidiu com
            a época do Natal. Como resultado, a tripulação fez uma transmissão
            especial de Natal que foi assistida por milhões de pessoas na Terra.
          </li>
          <li>
            <strong>A Decisão Arriscada de Orbitar a Lua:</strong> Antes da
            missão, havia uma grande incerteza sobre se a Apollo 8 seria capaz
            de realizar a órbita lunar com segurança, pois muitos testes
            críticos ainda não haviam sido concluídos. A decisão de prosseguir
            foi ousada e arriscada.
          </li>
          <li>
            <strong>A Relação com o Módulo Lunar:</strong> Devido a atrasos no
            desenvolvimento do módulo lunar, a decisão de deixá-lo em terra foi
            tomada. Isso significava que a Apollo 8 não tinha a capacidade de
            pousar na Lua, mas ainda assim conseguiu orbitá-la.
          </li>
          <li>
            <strong>Retorno no Dia de Ano Novo:</strong> A missão retornou à
            Terra no dia de Ano Novo, em 27 de dezembro de 1968. A cápsula
            pousou com segurança no Oceano Pacífico, marcando o fim de um ano
            notável na exploração espacial.
          </li>
          <li>
            <strong>Uma Mensagem de Esperança:</strong> Além da leitura do Livro
            do Gênesis, a tripulação da Apollo 8 enviou uma mensagem de
            esperança à humanidade. Eles destacaram a unidade da raça humana e a
            importância da preservação do planeta Terra.
          </li>
          <li>
            <strong>O Papel do Público:</strong> A Apollo 8 atraiu a atenção
            global, com milhões de pessoas acompanhando as transmissões ao vivo.
            Foi uma das primeiras vezes em que a exploração espacial se tornou
            um evento verdadeiramente global, unindo pessoas em todo o mundo.
          </li>
        </ol>
        <p>
          Esses detalhes adicionais ressaltam ainda mais o caráter único e
          inspirador da missão Apollo 8, que desafiou fronteiras e ampliou nossa
          compreensão do espaço e de nosso próprio lugar no universo.
        </p>
      </div>

      <div className="imagem9-container3">
        <img
          src={require("../img/375px-Apollo_9_mission_patch.png")}
          alt="Emblema da Apollo 9"
          className="Apollo9"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 9, lançada em 3 de março de 1969, foi uma missão
          fundamental no programa Apollo da NASA. Ela teve como objetivo testar
          o Módulo de Comando e Serviço (CSM) e o Módulo Lunar (LM) em órbita
          terrestre, preparando o terreno para as futuras missões de pouso
          lunar. Vamos explorar em detalhes essa missão crucial:
        </p>
        <h4>Objetivos da Missão:</h4>
        <p>
          A Apollo 9 foi uma missão semelhante à Apollo 8 em termos de
          importância técnica, mas com objetivos diferentes. Seus principais
          objetivos eram:
        </p>
        <ol>
          <li>
            <strong>Testar o Módulo Lunar (LM):</strong> O LM era a nave que
            pousaria na Lua, e era crucial garantir que ele funcionasse
            perfeitamente em órbita terrestre. A Apollo 9 foi a primeira missão
            a testar o LM em órbita.
          </li>
          <li>
            <strong>Testar a Acoplagem e Desacoplagem:</strong> A missão
            envolveu a separação e a posterior acoplagem do Módulo Lunar e do
            Módulo de Comando e Serviço em órbita, testando a capacidade de
            conectar e desconectar as duas naves.
          </li>
          <li>
            <strong>Testar o Módulo de Comando e Serviço (CSM): </strong> O CSM
            era a nave que levaria os astronautas à Lua e de volta à Terra. A
            Apollo 9 testou sua funcionalidade em órbita terrestre.
          </li>
        </ol>
        <h4>Tripulação de Pioneiros:</h4>
        <p>
          A tripulação da Apollo 9 era composta por três astronautas notáveis:
        </p>
        <ul>
          <li>James McDivitt: Comandante</li>
          <li>David Scott: Piloto do Módulo de Comando</li>
          <li>Russell Schweickart: Piloto do Módulo Lunar</li>
        </ul>
        <h4>Etapas da Missão:</h4>
        <p>A Apollo 9 foi dividida em várias etapas essenciais:</p>
        <ol>
          <li>
            <strong>Fase de Lançamento:</strong> A espaçonave Apollo 9 foi
            lançada do Centro Espacial Kennedy na Flórida em 3 de março de 1969,
            usando um foguete Saturno V.
          </li>
          <li>
            <strong>Testes em Órbita Terrestre:</strong> Em órbita, a tripulação
            realizou testes extensos do LM e do CSM. Eles também conduziram
            atividades extraveiculares (EVA) no espaço, com Schweickart saindo
            do módulo para testar seu traje espacial.
          </li>
          <li>
            <strong>Acoplagem e Desacoplagem:</strong> Uma das tarefas mais
            críticas da missão foi a acoplagem e desacoplagem do LM e do CSM.
            Isso foi feito com sucesso várias vezes, provando que as duas naves
            poderiam funcionar juntas durante as futuras missões lunares.
          </li>
          <li>
            <strong>Retorno à Terra: </strong> Após completar todos os
            objetivos, a Apollo 9 retornou à Terra, pousando no Oceano Atlântico
            em 13 de março de 1969. Os astronautas foram recuperados com
            segurança.
          </li>
        </ol>
        <h4>Legado e Significado:</h4>
        <p>
          A Apollo 9 foi um marco importante, preparando o caminho para as
          missões Apollo subsequentes que pousariam na Lua. Seu sucesso
          demonstrou que os módulos lunar e de comando estavam prontos para a
          jornada lunar, contribuindo para a confiança na capacidade dos EUA de
          alcançar seu objetivo de pousar na Lua até o final da década. A Apollo
          9 foi uma missão técnica de grande importância e contribuiu
          significativamente para o sucesso do programa Apollo como um todo.
        </p>
        <h4>Curiosidades:</h4>
        <ol>
          <li>
            <strong>
              Primeira Atividade Espacial Extraveicular (EVA) com Módulo Lunar:{" "}
            </strong>{" "}
            Durante a missão, o piloto do Módulo Lunar, Russell Schweickart,
            realizou uma EVA. Ele saiu do Módulo de Comando e Serviço e testou
            seu traje espacial na ausência de gravidade. Isso foi um passo
            importante para a preparação das futuras caminhadas lunares.
          </li>
          <li>
            <strong>Uso do "Spider" e "Gumdrop":</strong> Os astronautas deram
            nomes carinhosos às duas partes da espaçonave. O Módulo Lunar era
            apelidado de "Spider" (aranha) devido à sua aparência e pernas de
            pouso. O Módulo de Comando e Serviço era chamado de "Gumdrop" (bala
            de goma) devido à sua forma arredondada.
          </li>
          <li>
            <strong>Desvio de Rota Planejado:</strong> A missão originalmente
            planejava uma órbita que levaria a Apollo 9 a cerca de 400 milhas da
            Terra. No entanto, a decisão foi tomada para permanecer a uma
            distância mais segura, devido a preocupações com a saúde dos
            astronautas em caso de falha nos sistemas.
          </li>
          <li>
            <strong>Fotografia Espacial:</strong> A Apollo 9 foi a primeira
            missão Apollo a usar uma câmera Hasselblad para tirar fotos no
            espaço. As imagens capturadas durante a missão não apenas
            documentaram o teste dos sistemas, mas também forneceram vistas
            espetaculares da Terra a partir do espaço.
          </li>
          <li>
            <strong>Equipamento de Sobrevivência:</strong> Em preparação para um
            possível pouso forçado, os astronautas carregavam equipamento de
            sobrevivência, incluindo uma pistola de sinalização e comida
            embalada a vácuo. Felizmente, essa contingência nunca foi
            necessária.
          </li>
          <li>
            <strong>Primeira EVA Sem "Umbilical":</strong> Durante a EVA de
            Schweickart, ele estava conectado à espaçonave apenas por um cordão
            umbilical que fornecia oxigênio e comunicação. Essa foi a primeira
            vez que um astronauta realizou uma EVA sem estar fisicamente
            conectado à espaçonave.
          </li>
          <li>
            <strong>Pousou na Água Gélida:</strong> A Apollo 9 pousou no Oceano
            Atlântico, mas as condições não foram ideais. A cápsula pousou a
            apenas 6 km de um navio de recuperação, mas ventos fortes a
            empurraram para a água gélida, tornando a recuperação dos
            astronautas um desafio.
          </li>
        </ol>
        <p>
          Esses detalhes adicionais destacam a complexidade e a importância da
          missão Apollo 9, bem como as inovações técnicas e as experiências
          únicas que os astronautas enfrentaram durante a preparação para a
          exploração lunar.
        </p>
      </div>

      <div className="imagem10-container3">
        <img
          src={require("../img/Apollo-10-LOGO.png")}
          alt="Emblema da Apollo 10"
          className="Apollo10"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 10, lançada em 18 de maio de 1969, foi uma missão
          fundamental no programa Apollo da NASA que representou um ensaio geral
          completo para a futura missão Apollo 11 de pouso lunar. Embora não
          tenha pousado na Lua, a Apollo 10 desempenhou um papel crucial na
          preparação para o histórico pouso lunar. Vamos explorar em detalhes
          essa missão pioneira:
        </p>
        <h4>Objetivos da Missão:</h4>
        <p>A Apollo 10 tinha uma série de objetivos complexos e críticos:</p>
        <ol>
          <li>
            <strong>Reconhecimento Lunar:</strong> A principal tarefa da missão
            era voar até a Lua, entrar em órbita lunar e testar todos os
            sistemas, exceto o pouso. Isso incluía a avaliação das condições de
            pouso e a escolha do local de pouso para a Apollo 11.
          </li>
          <li>
            <strong>Testar os Sistemas do Módulo Lunar:</strong> A missão testou
            o Módulo Lunar (LM) em órbita lunar, incluindo a separação e a
            acoplagem com o Módulo de Comando e Serviço (CSM). Os astronautas
            também voaram o LM até a superfície lunar e depois voltaram ao CSM.
          </li>
          <li>
            <strong>Navegação Lunar Precisa:</strong> A Apollo 10 demonstrou a
            capacidade de navegação lunar precisa, crucial para o sucesso das
            futuras missões de pouso lunar.
          </li>
        </ol>
        <h4>Tripulação Competente:</h4>
        <p>
          A tripulação da Apollo 10 era composta por três astronautas altamente
          qualificados:
        </p>
        <ul>
          <li>Thomas P. Stafford: Comandante</li>
          <li>John W. Young: Piloto do Módulo de Comando</li>
          <li>Eugene A. Cernan: Piloto do Módulo Lunar</li>
        </ul>
        <h4>Etapas da Missão:</h4>
        <p>A missão Apollo 10 consistiu em várias etapas complexas:</p>
        <ol>
          <li>
            <strong>Lançamento e Trajetória para a Lua:</strong> A Apollo 10 foi
            lançada da Flórida usando o poderoso foguete Saturno V. Após entrar
            em órbita terrestre, a espaçonave seguiu em direção à Lua.
          </li>
          <li>
            <strong>Entrada em Órbita Lunar:</strong> Após chegar à Lua, a
            espaçonave entrou em órbita lunar, onde os astronautas puderam
            observar e fotografar possíveis locais de pouso para a Apollo 11.
          </li>
          <li>
            <strong>Testes com o Módulo Lunar:</strong> Cernan e Stafford
            desceram no LM, apelidado de "Snoopy", até cerca de 15 quilômetros
            da superfície lunar antes de retornar ao CSM, apelidado de "Charlie
            Brown".
          </li>
          <li>
            <strong>Retorno à Terra:</strong> Após completar os testes e a
            observação lunar, a Apollo 10 iniciou a viagem de volta à Terra. A
            cápsula pousou no Oceano Pacífico em 26 de maio de 1969, sendo
            recuperada com segurança.
          </li>
        </ol>
        <h4>Significado e Legado:</h4>
        <p>
          A Apollo 10 foi uma missão crítica que testou e aperfeiçoou todos os
          elementos necessários para um pouso lunar bem-sucedido. O piloto do
          LM, Eugene Cernan, chegou a apenas 15 quilômetros da superfície lunar,
          o que foi uma prova de que o pouso era possível.
        </p>
        <p>
          O sucesso da Apollo 10 pavimentou o caminho para a histórica missão
          Apollo 11, que realizou o primeiro pouso lunar em julho de 1969. Os
          dados e as experiências da Apollo 10 foram fundamentais para a escolha
          do local de pouso e para garantir que a Apollo 11 pudesse ser
          concluída com segurança.
        </p>
        <p>
          Em resumo, a Apollo 10 desempenhou um papel crucial na corrida
          espacial, levando a humanidade mais perto do objetivo final de colocar
          astronautas na Lua e trazê-los de volta com sucesso. Foi uma missão de
          ensaio geral que ajudou a tornar possível o icônico pouso lunar da
          Apollo 11.
        </p>
        <h4>Curiosidades:</h4>
        <ol>
          <li>
            <strong>Problema com o Relógio Lunar:</strong> Durante a descida do
            Módulo Lunar (LM) em direção à Lua, houve um problema com o relógio
            lunar. Se não fosse resolvido, poderia ter resultado em um erro de
            navegação crítico. A equipe de controle de missão trabalhou
            rapidamente para resolver o problema e garantir que a missão
            continuasse sem percalços.
          </li>
          <li>
            <strong>Sons Estranhos no Espaço:</strong> Enquanto estavam no lado
            escuro da Lua, os astronautas relataram ouvir sons estranhos em seus
            fones de ouvido, semelhantes a assobios e apitos. Esses sons
            intrigaram a equipe de controle de missão, mas eles nunca foram
            completamente explicados.
          </li>
          <li>
            <strong>Brincadeira Espacial:</strong> Durante a viagem de retorno à
            Terra, os astronautas fizeram uma brincadeira divertida com o
            controle de missão. Eles começaram a transmitir uma gravação de
            "Louie, Louie," uma música popular da época, fingindo que estava
            acontecendo um incidente no espaço. Isso causou risos e alívio de
            tensão no controle de missão.
          </li>
          <li>
            <strong>Missão de Pouso Não Planejada:</strong> Em um ponto durante
            a descida do LM, houve uma mudança na trajetória que poderia ter
            levado a uma missão de pouso não planejada na superfície lunar.
            Felizmente, a equipe de controle de missão resolveu o problema a
            tempo e a missão continuou conforme o planejado.
          </li>
          <li>
            <strong>Despedida da Etapa de Descida:</strong> Após completar os
            testes do LM e iniciar a subida de volta ao Módulo de Comando, a
            etapa de descida do LM foi descartada na órbita lunar. Os
            astronautas se despediram dela com um comando humorístico: "Diga olá
            para a mãe para nós."
          </li>
          <li>
            <strong>Gravidade Lunar Baixa:</strong> A Apollo 10 chegou a uma
            altitude de apenas cerca de 15 quilômetros acima da superfície
            lunar. Neste ponto, a gravidade lunar teve um impacto perceptível na
            trajetória da espaçonave, confirmada pelos astronautas que sentiram
            a atração gravitacional aumentar.
          </li>
          <li>
            <strong>Recorde de Velocidade:</strong> Durante a reentrada na
            atmosfera da Terra, a Apollo 10 estabeleceu um recorde de velocidade
            para uma espaçonave tripulada, atingindo aproximadamente 39.897
            quilômetros por hora (24.791 milhas por hora).
          </li>
        </ol>
        <p>
          Esses eventos e curiosidades adicionais destacam a complexidade e a
          natureza exploratória da missão Apollo 10, que testou os limites da
          tecnologia e preparou o terreno para o momento histórico que seria a
          Apollo 11.
        </p>
      </div>

      <div className="titulo-central3">
        <h2>O Eagle Possou: A missão que Mudou a História da Humanidade</h2>
      </div>

      <div className="imagem11-container3">
        <img
          src={require("../img/Apollo11.jpg")}
          alt="Apollo 11"
          className="Apollo11"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 11 da NASA é um dos eventos mais notáveis da história
          da humanidade. Lançada em 16 de julho de 1969, ela foi uma jornada
          extraordinária que culminou com o primeiro pouso humano bem-sucedido
          na superfície lunar. Vamos explorar em detalhes essa missão histórica,
          seus objetivos, conquistas e o impacto duradouro que teve no mundo:
        </p>
        <h4>Objetivos da Missão:</h4>
        <p>A Apollo 11 tinha uma série de objetivos complexos:</p>
        <ol>
          <li>
            <strong>Pouso Lunar:</strong> O objetivo principal era realizar o
            primeiro pouso lunar tripulado. Neil Armstrong e Buzz Aldrin
            desceriam até a superfície lunar enquanto Michael Collins
            permaneceria em órbita lunar na Apollo 11.
          </li>
          <li>
            <strong>Coleta de Amostras:</strong> A missão tinha a tarefa de
            coletar amostras de solo lunar e rochas. Essas amostras forneceriam
            informações cruciais sobre a composição da Lua e a história do
            sistema solar.
          </li>
          <li>
            <strong>Experimentos Científicos:</strong> Além das amostras, a
            Apollo 11 realizou uma série de experimentos científicos na
            superfície lunar, incluindo um sismômetro para estudar terremotos
            lunares.
          </li>
          <li>
            <strong>Retorno Seguro:</strong> Garantir o retorno seguro dos
            astronautas à Terra era uma preocupação crítica, dada a complexidade
            da missão.
          </li>
        </ol>
        <h4>O Pouso Histórico:</h4>
        <p>
          Em 20 de julho de 1969, a Apollo 11 alcançou a Lua. Neil Armstrong e
          Buzz Aldrin desceram no Módulo Lunar, apelidado de "Eagle", enquanto
          Michael Collins permaneceu em órbita na Apollo 11. Foi um momento de
          suspense, com Armstrong pilotando manualmente a espaçonave para evitar
          uma área rochosa e pousando com segurança.
        </p>
        <p>
          Após Neil Armstrong ter pronunciado a icônica frase "Este é um pequeno
          passo para um homem, um salto gigantesco para a humanidade" e a equipe
          da Apollo 11 confirmar o pouso seguro na superfície lunar, ele e Buzz
          Aldrin iniciaram suas atividades na Lua.
        </p>
        <p>
          Armstrong começou a sair do Módulo Lunar "Eagle" e a descer a escada
          com cuidado, enquanto Aldrin aguardava sua vez. Ao pisar na superfície
          lunar, Armstrong notou que a poeira lunar era mais densa do que eles
          esperavam e que ele podia ver suas próprias pegadas com clareza. Ele
          descreveu a paisagem lunar como "uma fina camada, quase como um pó
          fino".
        </p>
        <p>
          Durante a permanência na superfície lunar, Armstrong e Aldrin
          demonstraram grande profissionalismo e dedicação à missão, cumprindo
          todas as tarefas com precisão e eficiência. Suas atividades na Lua
          foram acompanhadas com grande interesse e admiração por milhões de
          pessoas na Terra.
        </p>
        <p>
          Após cerca de duas horas e meia explorando a superfície lunar,
          Armstrong e Aldrin retornaram ao Módulo Lunar, onde passaram a noite.
          Michael Collins, que estava em órbita lunar na Apollo 11, continuou a
          monitorar e apoiar a missão.
        </p>
        <p>
          Neil Armstrong e Buzz Aldrin passaram um total de aproximadamente 21
          horas na superfície lunar antes de decolar e se reunir com Michael
          Collins na órbita lunar. Seu retorno seguro à Terra marcou o sucesso
          histórico da missão Apollo 11 e sua contribuição duradoura para a
          exploração espacial.
        </p>
        <h4>Objetos Deixados na Lua:</h4>
        <p>
          Durante sua estadia na Lua, Armstrong e Aldrin implantaram uma série
          de objetos e equipamentos, incluindo a bandeira dos Estados Unidos, um
          sismômetro, um experimento de retroreflexão a laser e uma placa
          comemorativa com mensagens da Terra. O "Eagle" permanece na superfície
          lunar.
        </p>
        <h4>Amostras e Coleta de Dados:</h4>
        <p>
          Os astronautas coletaram cerca de 21,5 quilos de amostras de solo
          lunar e rochas durante sua estadia na superfície. Essas amostras foram
          cruciais para a compreensão da história lunar e do sistema solar. Eles
          também tiraram milhares de fotos e conduziram experimentos que
          forneceram valiosos dados científicos.
        </p>
        <h4>Retorno Triunfal e Impacto Global:</h4>
        <p>
          A Apollo 11 retornou com sucesso à Terra em 24 de julho de 1969, com a
          cápsula pousando no Oceano Pacífico. Os astronautas foram resgatados
          com segurança. O impacto da missão foi profundo:
        </p>
        <ul>
          <li>
            <strong>Inspirou Gerações:</strong> O sucesso da Apollo 11 inspirou
            gerações de cientistas, engenheiros e sonhadores a alcançar o
            impossível.
          </li>
          <li>
            <strong>Competição Espacial:</strong> A conquista lunar demonstrou a
            supremacia tecnológica dos EUA sobre a União Soviética na corrida
            espacial durante a Guerra Fria.
          </li>
          <li>
            <strong>Progresso Científico:</strong> Os dados científicos e as
            amostras lunares coletados abriram novas perspectivas sobre a Lua e
            a formação do sistema solar.
          </li>
          <li>
            <strong>Mensagem de Unidade:</strong> A imagem da Terra vista da Lua
            ajudou a promover uma mensagem de unidade e preservação do planeta
            Terra.
          </li>
        </ul>
        <p>
          A Apollo 11 foi muito mais do que uma missão espacial; foi um marco na
          história da humanidade, mostrando que, com determinação e colaboração,
          podemos alcançar o aparentemente inatingível. Ela continua sendo um
          símbolo do potencial humano e da busca pelo conhecimento além dos
          limites da Terra.
        </p>
      </div>

      <div className="imagem12-container3">
        <img
          src={require("../img/E8n6XunhjmYLTdG8Vf8b55.jpg")}
          alt="Apollo 11 Aldrin"
          className="Apollo11Aldrin"
        />
      </div>

      <div className="conteudo-apollo1">
        <h4>Curiosidades:</h4>
        <ol>
          <li>
            <strong>Telefone para Outro Mundo:</strong> Após o pouso na Lua,
            Richard Nixon, o presidente dos Estados Unidos na época, conversou
            com Neil Armstrong e Buzz Aldrin por telefone. Nixon disse que
            estava fazendo "a chamada telefônica mais importante da história"
            para os astronautas na superfície lunar.
          </li>
          <li>
            <strong>Objetos Pessoais Deixados:</strong> Além dos equipamentos
            científicos, Armstrong e Aldrin deixaram alguns objetos pessoais na
            Lua. Entre eles, uma medalha em homenagem aos astronautas soviéticos
            que morreram em missões espaciais e uma placa comemorativa em
            memória de astronautas americanos que haviam falecido.
          </li>
          <li>
            <strong>Alimentos na Lua:</strong> Os astronautas não consumiram
            alimentos na Lua, mas trouxeram comida liofilizada, como bifes,
            frango e maçãs, para consumo na espaçonave durante o retorno à
            Terra.
          </li>
          <li>
            <strong>Mistério da Bandeira Lunar:</strong> A bandeira dos EUA que
            Armstrong e Aldrin implantaram na Lua provavelmente não existe mais.
            A exposição constante à radiação solar provavelmente desbotou suas
            cores e a deteriorou ao longo dos anos.
          </li>
          <li>
            <strong>O Público Cético:</strong> Antes do pouso lunar, alguns
            cientistas e o público em geral estavam preocupados com a
            possibilidade de que a espaçonave pudesse afundar na poeira lunar ou
            ser atacada por seres extraterrestres. A NASA até mesmo preparou uma
            mensagem de contingência a ser transmitida caso algo inesperado
            acontecesse.
          </li>
          <li>
            <strong>Os Primeiros Passos de Armstrong:</strong> Neil Armstrong
            planejava fazer seu primeiro passo histórico de forma mais
            cuidadosa, mas quando ele desceu a escada do Módulo Lunar, seu pé
            bateu na superfície lunar de forma inesperada, fazendo com que ele
            dissesse sua famosa frase antes do planejado
          </li>
          <li>
            <strong>Sinais de Esgotamento:</strong> Durante o pouso, o
            computador de bordo da Apollo 11 emitiu alarmes de sobrecarga, o que
            preocupou os controladores de missão. No entanto, esses alarmes
            foram causados por uma sobrecarga do sistema de orientação e não
            eram uma ameaça iminente à segurança da missão.
          </li>
        </ol>
        <p>
          Esses detalhes curiosos adicionais ajudam a pintar um quadro mais
          completo e fascinante da missão Apollo 11 e da experiência dos
          astronautas na Lua.
        </p>
      </div>

      <div className="imagem13-container3">
        <img
          src={require("../img/Apollo_12_insignia.png")}
          alt="Apollo 12 Emblema"
          className="Apollo12"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 12, lançada em 14 de novembro de 1969, foi a sexta
          missão tripulada do programa Apollo da NASA e a segunda a pousar na
          Lua. Esta missão foi notável por várias razões:
        </p>
        <h4>Objetivos da Missão:</h4>
        <p>
          Os objetivos da Apollo 12 eram semelhantes aos da Apollo 11, com foco
          em explorar a superfície lunar, coletar amostras de solo e rochas,
          implantar experimentos científicos e demonstrar habilidades de pouso
          precisas. No entanto, a Apollo 12 tinha uma ênfase adicional na
          exploração geológica.
        </p>
        <h4>Tripulação:</h4>
        <p>A tripulação da Apollo 12 era composta por três astronautas:</p>
        <ol>
          <li>
            <strong>Charles "Pete" Conrad:</strong> Comandante da missão e o
            terceiro ser humano a caminhar na Lua.
          </li>
          <li>
            <strong>Alan L. Bean:</strong> Piloto do Módulo Lunar, que também
            caminhou na Lua.
          </li>
          <li>
            <strong>Richard F. Gordon:</strong> Piloto do Módulo de Comando, que
            permaneceu em órbita lunar.
          </li>
        </ol>
        <h4>O Relâmpago e o Incidente do Saturn V:</h4>
        <p>
          A Apollo 12 enfrentou desafios notáveis durante o lançamento. 36
          segundos após a decolagem, um raio atingiu a espaçonave, causando uma
          falha temporária nos sistemas elétricos e de comunicação. Graças à
          calma e habilidade da equipe de controle de missão, os sistemas foram
          restaurados e a missão prosseguiu.
        </p>
        <h4>Precisão de Pouso:</h4>
        <p>
          A Apollo 12 pousou com extrema precisão perto do local de pouso da
          sonda Surveyor 3, uma missão não tripulada anterior. Isso permitiu que
          os astronautas visitassem e trouxessem de volta peças da sonda para
          análise na Terra.
        </p>
        <h4>Descobertas Geológicas:</h4>
        <p>
          Durante suas atividades na Lua, Conrad e Bean exploraram a região
          conhecida como "Planalto Descartes". Eles coletaram amostras de rochas
          e solo lunar e implantaram experimentos científicos, incluindo um
          sismômetro.
        </p>
        <h4>A Caminhada Lunar de "Pete" Conrad:</h4>
        <p>
          O comandante da missão, "Pete" Conrad, era conhecido por seu senso de
          humor e entusiasmo. Quando ele fez sua primeira caminhada na Lua, ele
          brincou dizendo que "isso pode ser um pequeno passo para Neil, mas é
          um grande salto para mim". Sua personalidade cativante ajudou a tornar
          a missão memorável.
        </p>
        <h4>Retorno Bem-Sucedido:</h4>
        <p>
          A Apollo 12 retornou à Terra em 24 de novembro de 1969, completando
          com sucesso sua missão lunar. Os astronautas trouxeram valiosas
          amostras de solo e rochas, contribuindo significativamente para a
          compreensão da geologia lunar.
        </p>
        <p>
          A Apollo 12, apesar dos desafios iniciais, foi uma missão que
          demonstrou a capacidade de realizar pousos precisos na Lua e a
          importância da exploração geológica lunar. Ela solidificou ainda mais
          o compromisso da NASA em explorar nosso vizinho cósmico e expandir
          nosso conhecimento sobre o universo.
        </p>
        <h4>Curiosidades:</h4>
        <ol>
          <li>
            <strong>Peças da Surveyor 3:</strong> Como mencionado anteriormente,
            a Apollo 12 pousou perto da sonda Surveyor 3, que havia sido enviada
            à Lua em 1967. Os astronautas coletaram várias peças da Surveyor 3 e
            as trouxeram de volta à Terra, proporcionando uma oportunidade única
            de estudar os efeitos do ambiente lunar em materiais expostos por um
            longo período.
          </li>
          <li>
            <strong>Uma Corrida com o Jogo de Golfe:</strong> Alan Bean, o
            piloto do Módulo Lunar, realizou uma ação inusitada na superfície
            lunar. Ele trouxe consigo um taco de golfe e uma bola de golfe
            especialmente projetados pela NASA para testar como os objetos se
            comportariam na baixa gravidade lunar. Bean tirou algumas tacadas e,
            de acordo com ele mesmo, a bola voou "miles and miles" (milhas e
            milhas) devido à falta de resistência do ar.
          </li>
          <li>
            <strong>Um Robô em Miniatura na Lua:</strong> Além de coletar
            amostras da Surveyor 3, os astronautas também trouxeram um pequeno
            robô de controle remoto chamado "Snoopy" para a Lua. Este robô,
            oficialmente conhecido como o "Orbital Snoopy Lunar Module Descent
            Stage," foi usado para testar as comunicações na superfície lunar e
            sua mobilidade.
          </li>
          <li>
            <strong>Gostinho de Casa:</strong> A Apollo 12 foi a primeira missão
            a levar comida enlatada para a Lua. Os astronautas tiveram a
            oportunidade de desfrutar de alimentos como peru enlatado e carne de
            porco durante a missão.
          </li>
          <li>
            <strong>Missão do Fim do Ano:</strong> A Apollo 12 foi a última
            missão Apollo a ser lançada em 1969, o que marcou um fechamento
            notável para um ano de conquistas espaciais memoráveis, incluindo a
            Apollo 11.
          </li>
          <li>
            <strong>A Placa Lunar de "Pete" Conrad:</strong> "Pete" Conrad, o
            comandante da missão, deixou para trás uma placa de alumínio na Lua.
            Ela tinha a inscrição: "Aqui homens do planeta Terra pisaram na Lua
            em julho de 1969, Nós viemos em paz, com fins científicos e por
            causa de toda a humanidade."
          </li>
          <li>
            <strong>O Caso das Chaves Perdidas:</strong> Antes do lançamento, o
            astronauta Alan Bean acidentalmente deixou sua câmera de televisão
            no Módulo Lunar, o que poderia ter sido um problema. No entanto, com
            alguma improvisação, as chaves de um veículo lunar foram usadas para
            ligar a câmera e transmitir imagens históricas de sua caminhada
            lunar.
          </li>
        </ol>
        <p>
          Essas curiosidades adicionais ajudam a destacar o caráter único e
          diversificado da missão Apollo 12, com seus momentos de humor e
          engenhosidade que contribuíram para o sucesso da missão.
        </p>
      </div>

      <div className="imagem14-container3">
        <img
          src={require("../img/Apollo_13-insignia.png")}
          alt="Apollo 13 Emblema"
          className="Apollo13"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 13 é uma das histórias mais notáveis e emocionantes da
          exploração espacial da NASA. Lançada em 11 de abril de 1970, essa
          missão estava programada para ser a terceira a pousar na Lua, mas se
          tornou um exemplo impressionante de resiliência e engenhosidade
          humana. Aqui estão os principais pontos sobre a Apollo 13:
        </p>
        <h4>Objetivos Iniciais:</h4>
        <p>
          O principal objetivo da Apollo 13 era realizar um pouso lunar na
          região conhecida como Fra Mauro. Os astronautas planejavam conduzir
          experimentos científicos, coletar amostras de solo lunar e explorar a
          superfície.
        </p>
        <h4>Tripulação:</h4>
        <p>A tripulação da Apollo 13 era composta por três astronautas:</p>
        <ul>
          <li>
            <strong>James A. Lovell Jr.:</strong> Comandante da missão, veterano
            de voos anteriores.
          </li>
          <li>
            <strong>John L. Swigert Jr.:</strong> Piloto do Módulo de Comando,
            substituindo o astronauta Ken Mattingly devido a preocupações com
            exposição ao sarampo.
          </li>
          <li>
            <strong>Fred W. Haise Jr.:</strong> Piloto do Módulo Lunar.
          </li>
        </ul>
        <h4>O Incidente no Espaço:</h4>
        <p>
          Dois dias após o lançamento, a Apollo 13 encontrou um sério problema.
          Um tanque de oxigênio no Módulo de Serviço explodiu, causando uma
          perda significativa de energia e suprimentos vitais. Isso forçou o
          cancelamento dos planos de pouso lunar.
        </p>
        <h4>"Aquela Famosa Frase":</h4>
        <p>
          A frase "Houston, we've had a problem" ("Houston, tivemos um
          problema") foi pronunciada por Jack Swigert quando a explosão ocorreu.
          Essa comunicação foi o primeiro sinal de que algo estava seriamente
          errado na espaçonave.
        </p>
        <h4>Retorno à Terra:</h4>
        <p>
          A prioridade tornou-se a segurança da tripulação. Com recursos
          limitados e um Módulo Lunar não utilizado, os astronautas e a equipe
          de controle de missão em Houston trabalharam juntos para traçar um
          plano para retornar com segurança à Terra. Eles precisaram usar a Lua
          como uma "catapulta" gravitacional para direcionar a Apollo 13 de
          volta à Terra.
        </p>
        <h4>Desafios e Soluções:</h4>
        <p>
          Durante a jornada de volta, a tripulação enfrentou vários desafios,
          incluindo temperaturas extremas e escassez de suprimentos. Eles também
          tiveram que lidar com altos níveis de dióxido de carbono na
          espaçonave, o que os obrigou a improvisar um filtro com materiais
          disponíveis.
        </p>
        <h4>O Retorno Triunfal:</h4>
        <p>
          Após uma missão de seis dias, a Apollo 13 retornou com segurança à
          Terra em 17 de abril de 1970, pousando no Oceano Pacífico. A
          tripulação foi resgatada por helicópteros da Marinha dos EUA.
        </p>
        <h4>Impacto e Lições Aprendidas:</h4>
        <p>
          A Apollo 13 demonstrou a capacidade da NASA de enfrentar situações de
          emergência no espaço. Ela também destacou a importância da colaboração
          e criatividade da equipe de controle de missão e dos astronautas em
          situações de crise. A frase "Houston, we've had a problem" tornou-se
          um símbolo da resolução de problemas no espaço.
        </p>
        <p>
          A missão Apollo 13 é um testemunho da coragem e determinação dos
          astronautas e da equipe de controle de missão, mostrando que, mesmo
          diante das adversidades, a exploração espacial pode ser uma história
          de triunfo humano.
        </p>
        <h4>Curiosidades: </h4>
        <ol>
          <li>
            <strong>Adaptação Criativa:</strong> Devido à necessidade de
            improvisar um filtro de dióxido de carbono na Apollo 13, a equipe da
            NASA usou peças disponíveis nas espaçonaves, incluindo uma capa de
            manual, fita adesiva, tubos e um saco de plástico. Essa solução
            engenhosa permitiu a remoção do excesso de dióxido de carbono da
            cabine.
          </li>
          <li>
            <strong>Medo da Explosão do Tanque de Hidrogênio:</strong> Depois da
            explosão do tanque de oxigênio, a equipe de controle de missão
            estava preocupada com o possível risco de uma explosão similar
            ocorrer com o tanque de hidrogênio restante no Módulo de Serviço.
            Felizmente, isso não aconteceu, mas a preocupação persistiu durante
            toda a missão.
          </li>
          <li>
            <strong>Uma Rota Alternativa para Casa:</strong> A Apollo 13 usou a
            Lua como uma "catapulta" gravitacional para retornar à Terra. Isso
            exigiu um preciso cálculo de trajetória, e os astronautas precisaram
            executar uma queima de propulsores no momento exato para seguir o
            caminho correto de volta.
          </li>
          <li>
            <strong>Mais Giroscópios, Por Favor:</strong> Durante a missão, os
            astronautas tiveram que economizar a energia elétrica da espaçonave.
            Isso significava que eles só podiam usar dois dos três giroscópios
            disponíveis para controlar a orientação da Apollo 13. Essa manobra
            foi crítica para economizar energia.
          </li>
          <li>
            <strong>Viagem na Escuridão:</strong> Durante o retorno à Terra, a
            Apollo 13 ficou na sombra da Terra por um longo período, perdendo a
            energia solar necessária para as baterias. Isso significava que a
            espaçonave ficou em completa escuridão, com as luzes apagadas e a
            temperatura caindo significativamente dentro dela.
          </li>
          <li>
            <strong>Vigilância Ininterrupta:</strong> A missão Apollo 13 foi
            acompanhada por um número impressionante de telespectadores na
            Terra. O controle de missão em Houston recebeu milhares de
            telefonemas de apoio e encorajamento de pessoas em todo o mundo,
            torcendo pelo retorno seguro dos astronautas.
          </li>
          <li>
            <strong>Um Pioneirismo na Telemetria:</strong> A Apollo 13 marcou a
            primeira vez que a telemetria de uma missão espacial foi transmitida
            ao vivo para as salas de aula nos Estados Unidos. Isso permitiu que
            os alunos acompanhassem em tempo real a situação da missão.
          </li>
        </ol>
        <p>
          A Apollo 13 é verdadeiramente uma história de sobrevivência e
          resolução de problemas, com a equipe da NASA e os astronautas
          superando desafios extraordinários para garantir o retorno seguro dos
          tripulantes à Terra. Sua história continua a inspirar pessoas em todo
          o mundo.
        </p>
      </div>

      <div className="imagem15-container3">
        <img
          src={require("../img/Apollo_14-insignia.png")}
          alt="Apollo 14 Emblema"
          className="Apollo14"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 14 foi a oitava missão tripulada do programa Apollo e
          a terceira a pousar na Lua. Lançada em 31 de janeiro de 1971, a Apollo
          14 tinha como objetivo explorar a região lunar conhecida como Fra
          Mauro e conduzir uma série de experimentos científicos. Aqui estão os
          principais pontos sobre a Apollo 14:
        </p>
        <h4>Tripulação:</h4>
        <p>A tripulação da Apollo 14 era composta por três astronautas:</p>
        <ul>
          <li>
            <strong>Alan B. Shepard Jr.:</strong> Comandante da missão e o
            quinto ser humano a caminhar na Lua.
          </li>
          <li>
            <strong>Edgar D. Mitchell:</strong> Piloto do Módulo Lunar, que
            também caminhou na Lua.
          </li>
          <li>
            <strong>Stuart A. Roosa:</strong> Piloto do Módulo de Comando.
          </li>
        </ul>
        <h4>Objetivos da Missão:</h4>
        <p>Os principais objetivos da Apollo 14 incluíam:</p>
        <ul>
          <li>Coleta de amostras de solo lunar e rochas.</li>
          <li>
            Implantação de experimentos científicos, incluindo sismômetros.
          </li>
          <li>Teste de equipamentos e sistemas de pouso lunar aprimorados.</li>
          <li>
            Realização de caminhadas lunares para coleta de dados geológicos.
          </li>
        </ul>
        <h4>O Desafio do Pouso:</h4>
        <p>
          A Apollo 14 enfrentou desafios durante a descida para a Lua, incluindo
          problemas com o sistema de orientação que fizeram com que a espaçonave
          pousasse a cerca de 163 metros do local planejado. No entanto, a
          tripulação conseguiu fazer uma caminhada até o local planejado.
        </p>
        <h4>As Caminhadas Lunares:</h4>
        <p>
          Durante as duas caminhadas lunares, Shepard e Mitchell coletaram
          amostras de solo e rochas e implantaram experimentos científicos.
          Shepard até jogou uma partida de golfe lunar, usando um taco
          modificado e uma bola de golfe que foram deixados na Lua.
        </p>
        <h4>Recorde de Distância Percorrida:</h4>
        <p>
          Durante a segunda caminhada lunar, Shepard e Mitchell percorreram uma
          distância recorde de aproximadamente 3,6 quilômetros na superfície
          lunar.
        </p>
        <h4>Retorno Bem-Sucedido:</h4>
        <p>
          A Apollo 14 retornou à Terra em 9 de fevereiro de 1971, pousando no
          Oceano Pacífico. A tripulação foi resgatada pela equipe de recuperação
          da Marinha dos EUA.
        </p>
        <h4>Contribuição Científica:</h4>
        <p>
          A missão Apollo 14 trouxe de volta uma quantidade significativa de
          amostras de solo lunar e rochas, incluindo uma rocha notável conhecida
          como "Big Bertha." Essas amostras foram cruciais para o estudo da
          geologia lunar e para nossa compreensão da história da Lua.
        </p>
        <p>
          A Apollo 14 foi mais um passo importante no programa Apollo,
          contribuindo para o acúmulo de conhecimento científico sobre a Lua e
          demonstrando melhorias nos sistemas de pouso lunar. Ela também
          destacou a habilidade da NASA e dos astronautas em enfrentar desafios
          inesperados durante uma missão espacial.
        </p>
        <h4>Curiosidades:</h4>
        <ol>
          <li>
            <strong>O Primeiro Comandante da Apollo 14:</strong> Alan Shepard, o
            comandante da Apollo 14, já havia feito história como o primeiro
            americano no espaço em 1961, quando voou na missão Freedom 7 da
            Mercury. Sua participação na Apollo 14 fez dele o quinto ser humano
            a caminhar na Lua, e ele é até hoje o único astronauta a ter
            caminhado na Lua e no espaço profundo.
          </li>
          <li>
            <strong>O Bastão de Golfe Lunar:</strong> Alan Shepard trouxe um
            taco de golfe modificado e uma bola de golfe para a Lua. Durante a
            segunda caminhada lunar, ele deu dois "swings" na bola e a enviou
            voando pela superfície lunar, brincando que a bola foi "à milhas e
            milhas e milhas".
          </li>
          <li>
            <strong>A Rochedo "Big Bertha":</strong> A Apollo 14 trouxe de volta
            uma das maiores amostras de rocha lunar já coletadas, apelidada de
            "Big Bertha". Ela pesava cerca de 9 quilos e é uma das amostras mais
            antigas já coletadas da Lua, com aproximadamente 4 bilhões de anos.
          </li>
          <li>
            <strong>Uma Missão com Foco na Geologia:</strong> A Apollo 14 teve
            um foco significativo na exploração geológica lunar. Alan Shepard e
            Edgar Mitchell passaram horas estudando e coletando amostras de solo
            e rochas, ajudando os cientistas a entender melhor a história
            geológica da Lua.
          </li>
          <li>
            <strong>Primeiro Astronauta sem Treinamento em Geologia:</strong>{" "}
            Edgar Mitchell foi o primeiro astronauta a caminhar na Lua sem um
            treinamento formal em geologia. No entanto, ele rapidamente se
            tornou um autodidata em geologia lunar antes da missão.
          </li>
          <li>
            <strong>O Problema do Punho Travado:</strong> Durante a primeira
            caminhada lunar, Shepard teve problemas com um dos punhos de sua
            roupa espacial, que ficou travado devido à poeira lunar. Ele
            conseguiu destravá-lo com uma caneta especial que estava em seu
            traje.
          </li>
          <li>
            <strong>A Missão das Medalhas:</strong> Cada astronauta da Apollo 14
            trouxe consigo medalhas comemorativas que foram deixadas na
            superfície lunar como tributo aos astronautas da Apollo 1, que
            perderam a vida em um incêndio durante um teste de solo.
          </li>
        </ol>
        <p>
          A Apollo 14 não apenas contribuiu significativamente para a exploração
          lunar e o avanço da ciência, mas também trouxe à tona momentos
          memoráveis e curiosos que ajudam a tornar a história da exploração
          espacial ainda mais cativante.
        </p>
      </div>

      <div className="imagem16-container3">
        <img
          src={require("../img/Apollo_15-insignia.png")}
          alt="Apollo 15 Emblema"
          className="Apollo15"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 15 foi a nona missão tripulada do programa Apollo e a
          quarta a pousar na Lua. Ela foi lançada em 26 de julho de 1971 e foi
          notável por várias razões. Vamos explorar os principais aspectos da
          Apollo 15:
        </p>
        <h4>Tripulação:</h4>
        <p>A tripulação da Apollo 15 era composta por três astronautas:</p>
        <ul>
          <li>
            <strong>David R. Scott:</strong> Comandante da missão e o sétimo ser
            humano a caminhar na Lua.
          </li>
          <li>
            <strong>James B. Irwin:</strong> Piloto do Módulo Lunar e também
            caminhou na Lua.
          </li>
          <li>
            <strong>Alfred M. Worden:</strong> Piloto do Módulo de Comando, que
            permaneceu em órbita lunar.
          </li>
        </ul>

        <h4>Objetivos da Missão:</h4>
        <p>
          A Apollo 15 teve uma ênfase especial na exploração geológica lunar.
          Seus principais objetivos incluíam:
        </p>
        <ul>
          <li>
            Coleta de amostras de solo e rochas lunares em locais geologicamente
            diversos.
          </li>
          <li>
            Testes de veículos lunares, incluindo o Lunar Roving Vehicle (LRV),
            um veículo elétrico que permitiu que os astronautas viajassem
            distâncias maiores na superfície lunar.
          </li>
          <li>
            Implantação de experimentos científicos, incluindo sismômetros e
            câmeras de alta resolução.
          </li>
          <li>
            Observações do ambiente lunar e da Terra a partir da órbita lunar.
          </li>
        </ul>
        <h4>Atividades na Lua:</h4>
        <p>
          Durante sua estadia na superfície lunar, Scott e Irwin conduziram três
          caminhadas lunares, durante as quais exploraram a paisagem lunar,
          coletaram amostras de rochas e instalaram experimentos científicos. A
          Apollo 15 também foi a primeira missão a pousar perto das Montanhas
          Apennine, proporcionando aos astronautas uma visão impressionante das
          paisagens montanhosas da Lua.
        </p>
        <h4>O Veículo Lunar Elétrico (LRV):</h4>
        <p>
          O Lunar Roving Vehicle (LRV) foi usado pela primeira vez na Apollo 15.
          Este veículo elétrico permitiu que os astronautas viajassem distâncias
          maiores na superfície lunar e coletassem amostras de áreas mais
          remotas. O LRV também foi utilizado em missões subsequentes.
        </p>
        <h4>Fotos da Terra:</h4>
        <p>
          A Apollo 15 tirou fotos notáveis da Terra a partir da órbita lunar.
          Uma das imagens mais icônicas mostra a Terra surgindo no horizonte
          lunar, revelando nosso planeta azul e frágil no vazio do espaço.
        </p>
        <h4>Retorno e Sucesso:</h4>
        <p>
          A Apollo 15 retornou à Terra em 7 de agosto de 1971, pousando no
          Oceano Pacífico. A missão foi um sucesso científico e técnico,
          proporcionando uma riqueza de informações sobre a geologia lunar.
        </p>
        <p>
          A Apollo 15 é lembrada como uma missão pioneira em exploração
          geológica lunar e uma demonstração do uso eficaz de veículos lunares.
          Ela também contribuiu significativamente para nossa compreensão da
          formação e evolução da Lua e do sistema solar como um todo.
        </p>
        <h4>Curiosidades:</h4>
        <ol>
          <li>
            <strong>A Primeira Moeda Lunar:</strong> O comandante David Scott
            deixou uma moeda especial na superfície lunar como uma homenagem ao
            astronauta falecido Gus Grissom, da missão Apollo 1. Esta moeda era
            parte de uma coleção de moedas de ouro que Grissom havia escondido
            em sua espaçonave.
          </li>
          <li>
            <strong>O Registro de EVA Mais Longa:</strong> Durante a terceira
            caminhada lunar, Scott e Irwin estabeleceram um novo recorde de EVA
            (Atividade Extraveicular) com uma duração de 6 horas e 33 minutos.
            Eles realizaram várias atividades científicas e exploratórias
            durante esse tempo.
          </li>
          <li>
            <strong>Um Salto de Fé Lunar:</strong> James Irwin, durante sua
            caminhada lunar, experimentou um momento espiritual profundo e
            inesperado. Ele chamou isso de "um salto de fé lunar" e ficou
            emocionado com a visão da Terra e do espaço.
          </li>
          <li>
            <strong>Montanhas Apennine:</strong> A Apollo 15 pousou perto das
            Montanhas Apennine, que atingem alturas de até 4.800 metros na Lua.
            Isso proporcionou aos astronautas a oportunidade de explorar uma
            paisagem lunar montanhosa e coletar amostras de rochas que eram
            diferentes das amostras coletadas em missões anteriores.
          </li>
          <li>
            <strong>A Última Decolagem do Módulo Lunar:</strong> A Apollo 15 foi
            a última missão a realizar uma decolagem bem-sucedida do Módulo
            Lunar da superfície lunar. As missões posteriores, como a Apollo 16
            e a Apollo 17, utilizaram um estágio de subida abandonado para
            retornar à órbita lunar.
          </li>
          <li>
            <strong>Experiência no Espaço Profundo:</strong> Alfred Worden, o
            piloto do Módulo de Comando, realizou uma caminhada espacial no
            espaço profundo para recuperar experimentos científicos que foram
            colocados na órbita lunar antes da partida da Apollo 15.
          </li>
          <li>
            <strong>Experimentos de Sismologia:</strong> A Apollo 15 implantou
            sismômetros na superfície lunar para estudar a atividade sísmica.
            Esses instrumentos foram deixados na Lua e continuaram a transmitir
            dados até serem desligados em 1977, proporcionando informações
            valiosas sobre a estrutura interna da Lua.
          </li>
        </ol>
        <p>
          A Apollo 15 não apenas expandiu nosso conhecimento científico sobre a
          Lua, mas também trouxe à tona momentos únicos e emocionantes durante a
          exploração lunar. A missão foi uma continuação do compromisso da NASA
          com a exploração espacial e a busca por descobertas científicas
          significativas.
        </p>
      </div>

      <div className="imagem17-container3">
        <img
          src={require("../img/Apollo-16-LOGO.png")}
          alt="Apollo 16 Emblema"
          className="Apollo16"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 16 foi a décima missão tripulada do programa Apollo e
          a quinta a pousar na Lua. Lançada em 16 de abril de 1972, essa missão
          teve como objetivo explorar a região lunar conhecida como Descartes
          Highlands. Aqui estão os principais aspectos da Apollo 16:
        </p>
        <h4>Tripulação:</h4>
        <p>A tripulação da Apollo 16 era composta por três astronautas:</p>
        <ul>
          <li>
            <strong>John W. Young:</strong> Comandante da missão e o nono ser
            humano a caminhar na Lua.
          </li>
          <li>
            <strong>Charles M. Duke:</strong> Piloto do Módulo Lunar e o décimo
            homem a caminhar na Lua.
          </li>
          <li>
            <strong>Thomas K. Mattingly II:</strong> Piloto do Módulo de
            Comando.
          </li>
        </ul>

        <h4>Objetivos da Missão:</h4>
        <p>Os principais objetivos da Apollo 16 incluíam:</p>
        <ul>
          <li>
            Coleta de amostras de solo e rochas lunares em uma região
            montanhosa, geologicamente interessante.
          </li>
          <li>
            Realização de experimentos científicos, incluindo análises da
            composição do solo lunar.
          </li>
          <li>
            Implantação de instrumentos geofísicos, como um sismômetro lunar.
          </li>
        </ul>
        <h4>Atividades na Lua:</h4>
        <p>
          Durante sua estadia na Lua, Young e Duke conduziram três caminhadas
          lunares, durante as quais exploraram a paisagem lunar, coletaram
          amostras de rochas e implantaram experimentos científicos. Eles
          viajaram longas distâncias na superfície lunar usando o Lunar Roving
          Vehicle (LRV).
        </p>
        <h4>Problemas com o Módulo Lunar:</h4>
        <p>
          A missão teve um susto quando o Módulo Lunar Orion, que transportaria
          Young e Duke de volta à órbita lunar, teve dificuldades técnicas no
          motor de partida. No entanto, os astronautas conseguiram fazer os
          reparos necessários e a missão continuou conforme planejado.
        </p>
        <h4>O Último Voo do Saturn V:</h4>
        <p>
          A Apollo 16 foi a penúltima missão a usar o foguete Saturn V para
          lançamento. O Saturn V é um dos maiores e mais poderosos foguetes já
          construídos e desempenhou um papel crucial nas missões Apollo.
        </p>
        <h4>Retorno e Sucesso:</h4>
        <p>
          A Apollo 16 retornou à Terra em 27 de abril de 1972, pousando no
          Oceano Pacífico. A missão foi considerada um sucesso científico, com
          uma riqueza de informações coletadas sobre a geologia lunar.
        </p>
        <p>
          A Apollo 16 continuou a tradição de exploração lunar e contribuiu
          significativamente para a compreensão científica da Lua. Ela também
          demonstrou a capacidade da NASA de superar desafios técnicos no espaço
          e manter o sucesso das missões Apollo.
        </p>
        <h4>Curiosidades:</h4>
        <ol>
          <li>
            <strong>A Segunda Mochila Lunar:</strong> Charles Duke, o piloto do
            Módulo Lunar, se tornou o membro mais jovem da equipe Apollo a
            caminhar na Lua, com apenas 36 anos. Durante sua caminhada, ele usou
            a "mochila lunar", um dispositivo de suporte de vida que permitia
            aos astronautas caminharem e explorarem a superfície lunar.
          </li>
          <li>
            <strong>O Prêmio Pulitzer Lunar:</strong> A equipe da Apollo 16
            trouxe de volta uma grande quantidade de rochas lunares, incluindo
            uma conhecida como "Big Muley." Esta rocha lunar acabou sendo tão
            valiosa que ganhou um prêmio Pulitzer em 1974, concedido ao
            jornalista William J. Kole, que escreveu sobre sua importância.
          </li>
          <li>
            <strong>Um Salto de Alegria Lunar:</strong> John Young, o comandante
            da missão, ficou tão empolgado durante a caminhada lunar que pulou
            para cima e para baixo, realizando um salto notável que ficou
            registrado em vídeo. Esse salto é conhecido como o "Salto de Alegria
            Lunar."
          </li>
          <li>
            <strong>O Último Homem na Lua:</strong> John Young é frequentemente
            lembrado como o último ser humano a caminhar na Lua, uma vez que a
            Apollo 17 foi a última missão lunar tripulada. Young também voou em
            missões Gemini e na Apollo 10, tornando-se um dos astronautas mais
            experientes da NASA.
          </li>
          <li>
            <strong>Experimentos Geofísicos:</strong> A Apollo 16 implantou um
            sismômetro lunar para estudar a atividade sísmica na Lua. Esse
            experimento ajudou a revelar informações sobre a estrutura interna
            do nosso satélite natural.
          </li>
          <li>
            <strong>Retorno de Mattingly:</strong> Thomas Mattingly, o piloto do
            Módulo de Comando, foi originalmente programado para a Apollo 13,
            mas foi substituído devido a preocupações com a exposição ao
            sarampo. Ele finalmente teve a chance de voar na Apollo 16 e
            retornou em segurança à Terra.
          </li>
          <li>
            <strong>Fotografias da Terra:</strong> Como muitas missões Apollo, a
            Apollo 16 tirou fotos notáveis da Terra a partir da órbita lunar.
            Essas imagens proporcionaram uma visão única do nosso planeta e seu
            lugar no espaço.
          </li>
        </ol>
        <p>
          A Apollo 16 trouxe consigo momentos memoráveis, conquistas científicas
          e uma coleção valiosa de amostras lunares. Ela contribuiu para nossa
          compreensão da Lua e continuou a tradição de exploração espacial das
          missões Apollo.
        </p>
      </div>

      <div className="imagem18-container3">
        <img
          src={require("../img/500px-Apollo_17-insignia.png")}
          alt="Apollo 17 Emblema"
          className="Apollo17"
        />
      </div>

      <div className="conteudo-apollo1">
        <p>
          A missão Apollo 17 foi a última missão tripulada do programa Apollo da
          NASA e a sexta a pousar na Lua. Lançada em 7 de dezembro de 1972, essa
          missão foi notável por várias razões. Vamos explorar os principais
          aspectos da Apollo 17:
        </p>
        <h4>Tripulação:</h4>
        <p>A tripulação da Apollo 17 era composta por três astronautas:</p>
        <ul>
          <li>
            <strong>Eugene A. Cernan:</strong> Comandante da missão e o último
            ser humano a caminhar na Lua.
          </li>
          <li>
            <strong>Harrison H. Schmitt:</strong> Piloto do Módulo Lunar e o
            primeiro e único geólogo a caminhar na Lua.
          </li>
          <li>
            <strong>Ronald E. Evans:</strong> Piloto do Módulo de Comando.
          </li>
        </ul>
        <h4>Objetivos da Missão:</h4>
        <p>
          A Apollo 17 teve uma ênfase especial na exploração científica lunar.
          Seus principais objetivos incluíam:
        </p>
        <ul>
          <li>
            Coleta de amostras de solo e rochas lunares em uma região
            geologicamente diversa, o Vale Taurus-Littrow.
          </li>
          <li>
            Realização de experimentos científicos, incluindo análises da
            composição do solo lunar.
          </li>
          <li>
            Implantação de instrumentos geofísicos, como sismômetros e um
            experimento para medir a atividade sísmica.
          </li>
        </ul>
        <h4>Atividades na Lua:</h4>
        <p>
          Durante sua estadia na Lua, Cernan e Schmitt conduziram três
          caminhadas lunares, durante as quais exploraram a paisagem lunar,
          coletaram amostras de rochas e implantaram experimentos científicos.
          Schmitt, sendo um geólogo, desempenhou um papel fundamental na
          interpretação das características geológicas da Lua.
        </p>
        <h4>O Último Passo:</h4>
        <p>
          Eugene Cernan ficou famoso por ser o último ser humano a deixar a Lua.
          Antes de subir a escada do Módulo Lunar para retornar à órbita lunar,
          ele deixou a famosa mensagem: "Nós partimos da Lua como viemos, e,
          como tal, que a paz e a esperança da humanidade sigam conosco para o
          futuro."
        </p>
        <h4>Retorno e Sucesso:</h4>
        <p>
          A Apollo 17 retornou à Terra em 19 de dezembro de 1972, pousando no
          Oceano Pacífico. A missão foi considerada um sucesso científico, com
          uma grande quantidade de amostras valiosas trazidas de volta da Lua.
        </p>
        <p>
          A Apollo 17 encerrou a era das missões Apollo com uma nota alta,
          contribuindo significativamente para a compreensão da geologia lunar.
          Ela também representou o último passo de seres humanos na Lua até o
          momento, embora a exploração lunar tenha continuado através de missões
          não tripuladas e planejamentos futuros para retornar à Lua.
        </p>
        <h4>Curiosidades: </h4>
        <ol>
          <li>
            <strong>O Recorde de Tempo Lunar:</strong> Eugene Cernan e Harrison
            Schmitt detêm o recorde de tempo passado na superfície lunar. Eles
            passaram cerca de 75 horas na Lua, muito mais tempo do que as
            missões anteriores.
          </li>
          <li>
            <strong>O Veículo Lunar Duradouro:</strong> O Lunar Roving Vehicle
            (LRV) utilizado na Apollo 17 continuou a funcionar mesmo após o
            término da missão. Isso permitiu que os astronautas o utilizassem
            para explorar maiores distâncias e coletar mais amostras. O LRV foi
            deliberadamente deixado na Lua após a missão.
          </li>
          <li>
            <strong>Um Geólogo na Lua:</strong> Harrison Schmitt é o único
            geólogo a caminhar na Lua. Sua experiência como cientista trouxe uma
            perspectiva única para a exploração geológica lunar.
          </li>
          <li>
            <strong>A Primeira Noite Lunar:</strong> A Apollo 17 foi a única
            missão Apollo que incluiu uma caminhada lunar noturna. Durante esse
            período, a Terra estava visível no céu lunar, proporcionando uma
            vista espetacular.
          </li>
          <li>
            <strong>Rochas Lunares Valiosas:</strong> A Apollo 17 trouxe de
            volta uma das maiores quantidades de amostras de rochas lunares de
            todas as missões Apollo, totalizando cerca de 111 quilos. Essas
            amostras continuam a ser estudadas por cientistas em todo o mundo.
          </li>
          <li>
            <strong>Experimentos Geofísicos:</strong> A missão implantou uma
            série de experimentos geofísicos na superfície lunar, incluindo um
            sismômetro e um experimento para medir a temperatura do subsolo
            lunar. Esses instrumentos ajudaram a expandir nossa compreensão da
            Lua
          </li>
          <li>
            <strong>Câmeras Lunares:</strong> A Apollo 17 estava equipada com
            uma câmera especial de alta resolução que capturou imagens
            espetaculares da Lua. As imagens da superfície lunar e do espaço são
            algumas das mais icônicas da exploração lunar.
          </li>
        </ol>
        <p>
          A Apollo 17 foi uma missão notável que encerrou o programa Apollo em
          grande estilo, proporcionando uma abundância de informações
          científicas e imagens memoráveis da Lua. Ela também representa o
          último passo humano na superfície lunar até o momento, mas a
          exploração lunar continua sendo um objetivo futuro para a humanidade.
        </p>
      </div>

      <div className="despedida">
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

export default Apollo;
