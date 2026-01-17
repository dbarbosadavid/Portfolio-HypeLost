import React from "react";
import "../../styles/InicialPage.css";

const InicialPage: React.FC = () => {
  return (
    <section className="inicial-page">
      <div className="inicial-page-content">
        <h1>
          HypeLost/Barbosa
          <span> Producer & Developer</span>
        </h1>

        <p>
          Produtor musical e desenvolvedor. Este site é um portfólio musical para apresentar alguns trabalhos voltados para produção.
        </p>

        <div className="inicial-page-actions">
          <div>
            <a href="#works" className="btn primary">
              Ver Produções
            </a>
            <p style={{fontSize: '0.5rem', marginTop: '1rem'}}>
              Trabalhos como Produtor Musical
            </p>
          </div>
          <div>
            <a
              href="https://github.com/dbarbosadavid"
              target="_blank"
              className="btn secondary"
            >
              GitHub
            </a>
            <p style={{fontSize: '0.5rem', marginTop: '1rem'}}>
              Repositórios de Desenvolvimento
            </p>
          </div>
          <div>
            <a href="/spotify-profile" className="btn primary" target="_blank">
              Sons Autorais
            </a>
            <p style={{fontSize: '0.5rem', marginTop: '1rem'}}>
              Perfil: Barbxsa no Spotify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InicialPage;