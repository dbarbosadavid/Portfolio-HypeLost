import React from "react";
import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <title>Home Page</title>
      <section className="home-page">
        <div className="home-page-content">
          <h1>
            HypeLost/Barbosa
            <span> Produtor Musical </span>
          </h1>

          <p>
            Produção musical, mixagem e masterização para artistas independentes:
            <br />
            Transformando ideias em sons prontos para lançar.
            <br />
            <br />
            <h1>Agenda aberta para novos projetos!</h1>
          </p>
          

          <div className="home-page-actions">
            <div>
              <a
                href="/contratar-mix-master"
                className="btn primary"
              >
                Contratar Mix / Master
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                Serviços de Mixagem e Masterização
              </p>
            </div>

            <div>
              <a
                href="/comprar-beat"
                target="_blank"
                className="btn primary"
              >
                Comprar Beats
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
              <a href="https://ig.me/m/hypelostbeats" 
                target="_blank" 
                className="btn secondary">
                Entrar em contato
              </a>
              <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>
                DM
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;