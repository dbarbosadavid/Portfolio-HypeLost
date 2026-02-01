import DigitalPlatforms from "../components/DigitalPlatforms";
import BeatplaceLogo from "../assets/beatplace-logo.webp";
import BeatstarLogo from "../assets/beatstars-logo.png";
import '../styles/BuyBeatPage.css';

export const BuyBeatPage: React.FC = () => {
    return (
        <>
            <title>Adquira Beats</title>
            <div className="buy-beat-page">
                <h1>Adquira a licença parcial ou exclusiva de um dos beats dos catálogos:</h1>
                
                <br />
                <DigitalPlatforms 
                    name="Beatplace" 
                    logo={BeatplaceLogo}
                    url="https://beatplace.co/hypelost-hl"
                    />
                <DigitalPlatforms 
                    name="Beatstars" 
                    logo={BeatstarLogo}
                    url="https://www.beatstars.com/hypelost"
                    />
                    
                <h1>
                    OU
                </h1>

                <h1>
                    Entre em contato diretamente comigo para um beat personalizado!
                </h1>

                <h2>
                    <a href="https://ig.me/m/hypelostbeats" target="_blank" className="btn primary">
                        Obter Beat Personalizado
                    </a>
                    <p style={{fontSize: '0.75rem', marginTop: '1rem'}}>Você será redirecionado à DM (Instagram)</p>
                </h2>
            </div>
        </>
    )
}

export default BuyBeatPage;

