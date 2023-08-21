import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Apollo.css'

function Apollo() {
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

            <div className='titulo-central3'>
                <h2>Alcançando o Inalcançável: O Legado Heróico do Programa Apollo</h2>
                <p>Apollo's Legacy © 2023</p>
            </div>

            <div className='imagem1-container3'>
                <img src={require('../img/1d18663527ec36f0a6a3a5faee075b7d.jpg')} alt='Imagem do logo do Programa Apollo'
                    className='logoApollo' />
            </div>

            <div className='conteudo-apollo1'>
                <p> O Programa Apollo foi um ambicioso esforço espacial conduzido pelos Estados Unidos durante a década de 1960 e início dos anos 1970. Criado como resposta à corrida espacial com a União Soviética, seu objetivo principal era levar seres humanos à Lua e trazê-los de volta com segurança à Terra.</p>
                <p>O programa abrangeu diversas etapas e tecnologias inovadoras, desde a criação de naves espaciais capazes de suportar viagens de longa duração até o desenvolvimento de sistemas de navegação precisa. Além disso, o programa Apollo envolveu o projeto e construção de foguetes poderosos, como o Saturn V, que seriam capazes de lançar as naves espaciais tripuladas em direção à Lua.</p>
                <p>O sucesso do Programa Apollo dependia de uma colaboração multifacetada entre a NASA (Agência Espacial Americana), equipes de engenheiros, cientistas, astronautas e fornecedores de tecnologia. Cada missão foi meticulosamente planejada e testada para garantir que cada componente funcionasse perfeitamente durante a jornada espacial.</p>
                <p>O programa também teve impactos significativos fora do âmbito da exploração espacial. Ele estimulou o desenvolvimento de tecnologias que encontraram aplicações em campos como medicina, eletrônica e comunicações. Além disso, a exploração lunar fez com que a humanidade adquirisse uma nova perspectiva sobre nosso próprio planeta e nosso lugar no universo.</p>
            </div>

            <div className='titulo-central3'>
                <h2>Titan do Espaço: A Saga do Foguete Saturn V e a Jornada Lunar</h2>
            </div>

            <div className='imagem2-container3'>
                <img src={require('../img/SaturnV.jpg')} alt='Imagem do Saturn V'
                    className='saturnV' />
            </div>

            <div className='conteudo-apollo1'>
                <p>O Saturn V foi um dos feitos mais notáveis da engenharia espacial, um foguete colossal que desempenhou um papel crucial no sucesso do Programa Apollo. Projetado e desenvolvido pela NASA, juntamente com suas empresas contratadas, o Saturn V foi uma conquista técnica de proporções épicas.</p>
                <h4>Projeto e Importância:</h4>
                <p>O desenvolvimento do Saturn V começou nos primeiros anos da década de 1960, como resposta ao desafio lançado pelo presidente John F. Kennedy de enviar humanos à Lua. Ele foi projetado para transportar as naves espaciais Apollo, que levariam os astronautas à órbita lunar e depois de volta à Terra. Sua principal função era fornecer a potência necessária para escapar da gravidade terrestre e impulsionar as missões Apollo em direção à Lua.</p>
                <h4>Características e Funcionamento:</h4>
                <p>O Saturn V era um foguete de múltiplos estágios, composto por três partes principais: o primeiro estágio S-IC, o segundo estágio S-II e o terceiro estágio S-IVB. Cada estágio tinha seus próprios motores de foguete e sistemas de propulsão.</p>
            </div>

            <div className='imagem3-container3'>
                <img src={require('../img/SaturnVStages.jpg')} alt='Imagem dos estágios Saturn V'
                    className='saturnVStage' />
            </div>

            <div className='conteudo-apollo1'>
                <h4>Primeiro Estágio (S-IC):</h4>
                <ul>
                    <li>O S-IC era o maior estágio e continha cinco motores F-1, que eram os maiores motores de foguete já construídos.</li>
                    <li>Seu papel era fornecer a potência inicial para lançar todo o foguete do solo e superar a gravidade terrestre.</li>
                    <li>Após esgotar seu combustível, o S-IC era descartado e caía no oceano.</li>
                </ul>
                <h4>Segundo Estágio (S-II):</h4>
                <ul>
                    <li>O S-II tinha cinco motores J-2, que eram alimentados por hidrogênio líquido e oxigênio líquido.</li>
                    <li>Sua função era continuar a aceleração após a separação do S-IC, levando o foguete a altitudes ainda mais elevadas.</li>
                </ul>
                <h4>Terceiro Estágio (S-IVB):</h4>
                <ul>
                    <li>O S-IVB também usava motores J-2 e era responsável por inserir a nave Apollo em órbita lunar.</li>
                    <li>Após cumprir sua função, o S-IVB era frequentemente usado como plataforma para liberar a nave em direção à Lua.</li>
                </ul>
                <h4>Legado e Impacto:</h4>
                <p>O Saturn V foi fundamental para o sucesso das missões Apollo. Sua capacidade de levar grandes cargas úteis em trajetórias interplanetárias permitiu que as naves Apollo alcançassem a Lua. Além disso, o desenvolvimento do Saturn V levou a avanços significativos em tecnologia de foguetes e propulsão, que continuaram a influenciar o campo da exploração espacial e além.</p>
                <p>O Saturn V é um ícone da exploração espacial, simbolizando o triunfo da engenharia, da ciência e da inovação humana. Cada lançamento do Saturn V representou um passo em direção a um objetivo audacioso, culminando com as missões Apollo que levaram seres humanos à Lua e deixaram uma marca indelével na história da humanidade.</p>
            </div>

            <div className='imagem4-container3'>
                <img src={require('../img/0e8fd88fd4732f45be1576fcad366b6d.jpg')} alt='Imagem do Modulo Lunar e de Comando'
                    className='saturnVModules' />
            </div>

            <div className='conteudo-apollo1'>
                <h4>Módulo de Comando e Serviço (CSM):</h4>
                <p>O Módulo de Comando e Serviço era a parte da nave que abrigava os astronautas durante todo o voo, desde o lançamento até o retorno à Terra. Era composto por duas seções:</p>
                <ol>
                    <li><strong>Módulo de Comando (CM):</strong> O CM era a "cabine" dos astronautas. Ele continha sistemas de controle, comunicação, navegação e suporte à vida. Além disso, foi onde os astronautas permaneceram durante a fase de lançamento, a órbita terrestre e a viagem de retorno. Durante o lançamento, o CM estava protegido pelo escudo térmico, que o protegia do calor gerado durante a reentrada na atmosfera terrestre.</li>
                    <li><strong>Módulo de Serviço (SM):</strong> O SM ficava abaixo do CM e continha os sistemas de propulsão e suprimentos necessários para a missão. Ele também continha painéis solares que forneciam energia à nave durante a jornada.</li>
                </ol>
                <h4>Módulo Lunar (LM):</h4>
                <p>O Módulo Lunar, também conhecido como "Lunar Excursion Module" (LEM), foi o veículo que permitiu que os astronautas pousassem e explorassem a superfície lunar. O LM tinha duas partes principais:</p>
                <ol>
                    <li><strong>Módulo de Pouso (Descent Stage):</strong> Essa parte do LM continha os motores e sistemas necessários para pousar suavemente na superfície lunar. Ele também abrigava equipamentos e suprimentos para a exploração lunar, como instrumentos científicos e amostras de solo.</li>
                    <li><strong>Módulo de Ascensão (Ascent Stage): </strong> Após a exploração lunar, os astronautas retornavam ao Módulo de Ascensão, que tinha um motor que os impulsionava de volta à órbita lunar para se reencontrar com o Módulo de Comando e Serviço.</li>
                </ol>
                <p>O Módulo de Comando e Serviço permanecia em órbita lunar enquanto os astronautas exploravam a superfície com o Módulo Lunar. Após a reunião, os astronautas transferiam para o Módulo de Comando e Serviço para o retorno à Terra.</p>
                <p>Essa combinação de módulos permitiu que os astronautas viajassem para a Lua, explorassem sua superfície e retornassem em segurança. Cada módulo desempenhou um papel crítico, trabalhando em conjunto para realizar uma das maiores conquistas da exploração espacial: levar seres humanos à Lua e trazê-los de volta à Terra.</p>
            </div>

            <div className='titulo-central3'>
                <h2>Conquistando o Espaço Profundo: As Épicas Missões Apollo para a Lua</h2>
            </div>

            <div className='imagem5-container3'>
                <img src={require('../img/588915b3ca5ed.image.jpg')} alt='Tripulantes da missão Apollo 1'
                    className='Apollo1' />
            </div>

            <div className='conteudo-apollo1'>
                <p>A missão Apollo 1 foi a primeira designação dada a uma missão tripulada do Programa Apollo da NASA. No entanto, a Apollo 1 é mais lembrada pela tragédia que a envolveu do que por qualquer realização espacial. Aqui está o que aconteceu:</p>
                <h4>Tripulação:</h4>
                <ul>
                    <li>A tripulação da Apollo 1 era composta por três astronautas: Virgil "Gus" Grissom, Edward H. White II e Roger B. Chaffee.</li>
                </ul>
                <h4>Objetivos:</h4>
                <ul>
                    <li>A Apollo 1 estava programada para ser uma missão não tripulada que testaria a espaçonave Apollo em órbita terrestre baixa.</li>
                    <li>Os objetivos incluíam testar sistemas de suporte de vida, sistemas de propulsão e comunicações em preparação para as missões subsequentes.</li>
                    <h4>A Tragédia:</h4>
                    <li>Em 27 de janeiro de 1967, durante um teste de pré-lançamento na Plataforma de Lançamento 34 do Centro Espacial Kennedy na Flórida, um incêndio violento eclodiu no módulo de comando da Apollo 1.</li>
                    <li>Os astronautas estavam dentro do módulo na época, e o incêndio se espalhou rapidamente, impedindo sua evacuação. A tragédia resultou na perda trágica das vidas dos três astronautas.</li>
                </ul>
            </div>

            <div className='imagem6-container3'>
                <img src={require('../img/OIP.jpg')} alt='Capsula queimada da missão Apollo 1'
                    className='Apollo1Explosion' />
            </div>

            <div className='conteudo-apollo1'>
                <h4>Causas e Lições Aprendidas:</h4>
                <ul>
                    <li>A investigação subsequente revelou que o incêndio foi causado por uma combinação de falhas elétricas, sistemas de pressurização de oxigênio puro e materiais inflamáveis no interior da cápsula.</li>
                    <li>A tragédia da Apollo 1 levou a uma revisão completa dos procedimentos de segurança e design da espaçonave Apollo.</li>
                    <li>Foram implementadas melhorias significativas, como a substituição do oxigênio puro por uma mistura mais segura de oxigênio e nitrogênio, sistemas de proteção contra incêndios aprimorados e revisões de procedimentos de teste.</li>
                </ul>
                <h4>Impacto: </h4>
                <ul>
                    <li>Embora a Apollo 1 tenha sido uma tragédia devastadora, suas lições ajudaram a aprimorar a segurança das missões Apollo subsequentes.</li>
                    <li>O programa espacial dos Estados Unidos continuou após a tragédia, e a Apollo 7 se tornou a primeira missão tripulada da série em outubro de 1968.</li>
                </ul>
                <p>A Apollo 1 é lembrada como um lembrete doloroso dos riscos e desafios da exploração espacial. As vidas perdidas na tragédia nunca serão esquecidas, e suas contribuições para a exploração espacial continuam a ser lembradas à medida que a humanidade avança em direção às estrelas.</p>
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

export default Apollo;