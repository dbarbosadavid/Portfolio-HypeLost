import { artist } from "../../data/works";
import DigitalPlatforms from "../DigitalPlatforms";
import SpotifyLogo from '../../assets/spotify-logo.svg';
import InstagramLogo from '../../assets/instagram-logo.webp';
import '../../styles/SpotifyProfile.css';

const SpotifyProfile: React.FC = () => {
    return (
        <>
            <h2>{artist.name}</h2>
            <DigitalPlatforms
                name='Spotify'
                logo={SpotifyLogo}
                url={artist.linkSpotify}
            />
            <DigitalPlatforms
                name='Instagram'
                logo={InstagramLogo}
                url={artist.linkIg}
            />


            <div style={{marginTop: '2rem'}} id="home-page-button">
                <a
                    href="/"
                    className="btn secondary"
                >
                    Voltar à Home Page
                </a>
            </div>


            <p style={{marginTop: '3rem'}} id='tracklist-text'>
                Spotify TrackList
            </p>


            <div className="embed-wrapper">
                <iframe
                    data-testid="embed-iframe" 
                    src={artist.linkEmbed} 
                    width="100%" 
                    height="700"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    style={{border: 'none', background:'none'}}>
                </iframe>
            </div>
        </>
        );
}

export default SpotifyProfile;
