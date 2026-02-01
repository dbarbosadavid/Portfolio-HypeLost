import '../styles/ContratarMixMasterPage.css'
import BeforeAfter from '../components/cards/BeforeAfter'
import beforeAfterData from '../data/beforeAfter'

const ContratarMixMasterPage: React.FC = () => {
    function stopAudios(){
            const audios = document.querySelectorAll('audio');

            audios.forEach(audio => {
                audio.addEventListener('play', function() {
                    audios.forEach(outroAudio => {
                        if (outroAudio !== audio) {
                            outroAudio.pause();
                        }
                    });
                });
            });
    }

  return (
        <>
            <title>Contratar Mix e Master</title>
            <div className="main-container">
                Antes e Depois da Mix/Master:
                <div className="carousel">
                    {beforeAfterData.map((item, index) => (
                        <BeforeAfter name={item.name} folder={item.folder} idx={index + 1} onPlayFunction={stopAudios}/>
                    )) } 
                </div>

                <div className="carousel-nav">
                    {beforeAfterData.map((_item, index) => (
                        <a key={index} href={`#slide-${index + 1}`} target='_self'>
                            {index + 1}
                        </a>
                    ))}
                </div>
            </div>
            <section className='info-section'>
                <h1>
                    Contrate Mixagem e Masterização Profissional
                </h1>
                <p>Processo colaborativo com o artista, para entregar uma música limpa, com punch e indentidade: pronta para lançamento.</p>
                <h1>
                    O serviço inclui:
                </h1>
                <ul>
                    <li>Mixagem e/ou Masterização artística e técnica</li>
                    <li>Ajustes finos de dinâmica, EQ, espacialidade</li>
                    <li>Revisões conforme necessário</li>
                    <li>Arquivo final pronto para plataformas digitais</li>
                </ul>
                <h1>
                    Valores e prazos:
                </h1>
                <ul>
                    <li>Mixagem: A partir de R$300 - Entrega em até 7 dias</li>
                    <li>Masterização: A partir de R$250 - Entrega em até 5 dias</li>
                    <li>Pacote Mix + Master: A partir de R$400</li>
                </ul>
                <p>Valores e prazos podem variar de acordo com a complexidade do projeto. Para mais informações, pacotes, entre em contato!</p>
                <h2>Agenda aberta para novos projetos!</h2>
                <a href="https://ig.me/m/hypelostbeats" target="_blank" className="btn primary">
                        Contratar serviço
                </a>
                <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>Você será redirecionado à DM (Instagram)</p>

                <h1>
                    Antes de contratar tenha em mãos:
                </h1>
                <ul>
                    <li>Pistas em WAV ou AIFF (24bit/44.1kHz ou superior)</li>
                    <li>BPM e Referências sonoras (links ou arquivos)</li>
                    <li>Prazo para lançamento</li>
                </ul>
            </section>
        </>
    );
}

export default ContratarMixMasterPage;