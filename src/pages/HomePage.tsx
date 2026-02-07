import React from "react";
import "../styles/HomePage.css";
import '../styles/ContratarMixMasterPage.css';

const HomePage: React.FC = () => {
  return (
    <>
      <title>Home Page</title>
      <section className="home-page">
        <div className="home-page-content">
          <h1>
            HypeLost/Barbosa
          </h1>

          <h1>
            Produção musical, mixagem e masterização para artistas independentes:
            <br />
            Transformando ideias em sons prontos para lançar.
            <br />
            <br />
            <p>Agenda aberta para novos projetos!</p>
          </h1>
          

          <div className="home-page-actions">
            <div>
              <a
                href="/contratar-mix-master"
                className="btn primary"
              >
                Quero um som profissional
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                Serviços de Mixagem e Masterização
              </p>
            </div>

            <div>
              <a
                href="/comprar-beat"
                className="btn primary"
              >
                Quero um Beat
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                Encomendar/Comprar Instrumentais
              </p>
            </div>

            <div>
              <a href="/servicos" className="btn primary">
                Como posso ajudar?
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                Escopo de Serviços
              </p>
            </div>

            <div>
              <a href="#works" className="btn secondary">
                Ver Produções
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                Trabalhos como Produtor Musical
              </p>
            </div>

            <div>
              <a href="/spotify-profile" className="btn secondary">
                Sons Autorais
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                Perfil: Barbxsa no Spotify
              </p>
            </div>

            <div>
              <a href="https://ig.me/m/prodhypelost" 
                target="_blank" 
                className="btn secondary">
                Entrar em contato
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                DM
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-down fa-bounce"></i>
        </div>

      </section>
      <div className="main-container">
              
                <div className="carousel">

            {Array.from({ length: 4 }, (_, i) => (
              <div className="slide" id={`slide-${i+1}`}>
                            <img src={`src/assets/depoimento-${i+1}.PNG`} width={'75%'}/>
              </div>
            ))}
                </div>
                <div className="carousel-nav">
            {Array.from({ length: 4 }, (_, i) => (
              <a key={i} href={`#slide-${i+1}`} target='_self'>
                                {i + 1}
              </a>
            ))}
                </div>
                <h2>Alguns feedbacks de artistas e clientes</h2>

        </div>
    </>
  );
};

export default HomePage;