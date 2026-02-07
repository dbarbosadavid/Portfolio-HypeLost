import "../styles/ServicosPage.css";

const ServicosPage: React.FC = () => {
    return (
        <>
            <title>Como posso ajudar?</title>
            <section>

                <h1>
                    Como posso ajudar na sua música?
                </h1>
                <h5>Processo colaborativo com o artista</h5>
                <div className="grid-div">
                    <div>
                        <h2><i className="fa-solid fa-sliders"></i> Mixagem</h2>
                        <div>
                            <p>- Voz limpa, presente e afinada</p>
                            <p>- Música com clareza e impacto profissional</p>
                            <p>- Mixagem artística</p>
                        </div>

                        <span>
                            <p><i className="fa-regular fa-calendar"></i> Entrega em até <u>7 Dias</u></p>
                            <p><i className="fa-solid fa-sack-dollar"></i> A partir de R$300</p>
                        </span>
                    </div>

                    <div>
                        <h2><i className="fa-solid fa-volume-high"></i> Masterização</h2>
                        <div>
                            <p>- Correções finais</p>
                            <p>- Volume competitivo sem distorção</p>
                            <p>- Ideal para Spotify, YouTube e plataformas digitais</p>
                        </div>
                        
                        <span>
                            <p><i className="fa-regular fa-calendar"></i> Entrega em até <u>5 Dias</u></p>
                            <p><i className="fa-solid fa-sack-dollar"></i> A partir de R$250</p>
                        </span>
                    </div>

                        
                    <div>
                        <h2><i className="fa-solid fa-drum"></i> Beats</h2>

                        <div>
                            <p>- Beats exclusivos ou licenciamento</p>
                            <p>- Produção sob medida para o artista</p>
                            <p>- Trap / BoomBap / Club / Jersey / RnB</p>
                        </div>

                        <span>
                            <p><i className="fa-regular fa-calendar"></i> Entrega em até <u>7 Dias</u></p>
                            <p><i className="fa-solid fa-sack-dollar"></i> Sob Consulta</p>
                        </span>
                    </div>

                    <div className="pacotes">
                        <h2>Pacote Lançamento</h2>
                        <p>Mix + Master — <i className="fa-solid fa-sack-dollar"></i> A partir de R$400</p>
                        <p><i className="fa-regular fa-calendar"></i> Prazos Sob Consulta</p>
                    </div>
                    <div className="pacotes">
                        <h2>Pacote Completo</h2>
                        <p>Beat + Mix + Master — <i className="fa-solid fa-sack-dollar"></i> A partir de R$600</p>
                        <p><i className="fa-regular fa-calendar"></i> Prazos Sob Consulta</p>
                    </div>
                </div>

                <p>Valores e prazos podem variar de acordo com a complexidade do projeto. Para mais informações, pacotes, entre em contato!</p>
                <h2>Agenda aberta para novos projetos!</h2>

                <h2>
                    <a href="https://ig.me/m/prodhypelost" target="_blank" className="btn primary">
                        Levar meu som pro próximo nível
                    </a>
                    <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>Você será redirecionado à DM (Instagram)</p>
                </h2>
            </section>
        </>
    );
}
export default ServicosPage;