import { useState, useEffect } from "react";
import SpotifyLogo from '../assets/spotify-logo.svg'
import AppleMusicLogo from '../assets/apple-music-logo.svg'
import AmazonMusicLogo from '../assets/amazon-music-logo.png'
import DeezerLogo from '../assets/deezer-logo.png'
import YtMusicLogo from '../assets/yt-music-logo.svg'

import DigitalPlatforms from '../components/DigitalPlatforms'
import '../SmartLingPage.css'

interface SmartLinkBodyProps {
  musicTitle: string;
  artistName: string;
  coverImageUrl: string;
  spotifyLink: string;
  appleMusicLink: string;
  amazonMusicLink: string;
  deezerLink: string;
  youtubeMusicLink: string;
  themeColor?: string;
}

const SmartLinkBody: React.FC<SmartLinkBodyProps> = (props) => {
    const [coverVar, setCoverVar] = useState<string | null>(null);

    useEffect(() => {
    let mounted = true;

    async function generateBlurDataUrl(url: string, size = 32, blurPx = 2) {
        return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            try {
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error('Canvas context unavailable');

            try { ctx.filter = `blur(${blurPx}px) saturate(1.1)`; } catch (e) { /* ignore */ }

            ctx.drawImage(img, 0, 0, size, size);

            const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
            resolve(dataUrl);
            } catch (err) {
            reject(err);
            }
        };
        img.onerror = () => reject(new Error('Imagem não carregou'));
        img.src = url;
        if (img.complete && img.naturalWidth) {
            img.onload = img.onload!;
        }
        });
    }

    (async () => {
        try {
        const dataUrl = await generateBlurDataUrl(props.coverImageUrl, 40, 3);
        if (!mounted) return;
        setCoverVar(`url("${dataUrl}")`);
        } catch (err) {
        setCoverVar(`url("${props.coverImageUrl}")`);
        }
    })();

    return () => { mounted = false; };
    }, [props.coverImageUrl]);

    useEffect(() => {
    if (props.themeColor) {
        document.documentElement.style.setProperty('--accent', props.themeColor);
    }
    }, [props.themeColor]);

    const containerStyle = coverVar ? { ['--cover-url' as any]: coverVar } : undefined;

    return (
        <div className="smartlink-container bg-from-cover" style={containerStyle}>

            <div className="smartlink-header">
                <div className="glow-wrapper">
                    <img src={props.coverImageUrl} className="cover" alt={`${props.musicTitle} capa`} />
                <div className="glow" />
            </div>

            <h2>{props.musicTitle}</h2>
            <p className="artist">{props.artistName}</p>
        </div>

        <div className="links">
            <DigitalPlatforms name="Spotify" url={props.spotifyLink} logo={SpotifyLogo}/>
            <DigitalPlatforms name="Apple Music" url={props.appleMusicLink} logo={AppleMusicLogo}/>
            <DigitalPlatforms name="Deezer" url={props.deezerLink} logo={DeezerLogo}/>
            <DigitalPlatforms name="Amazon Music" url={props.amazonMusicLink} logo={AmazonMusicLogo}/>
            <DigitalPlatforms name="YouTube Music" url={props.youtubeMusicLink} logo={YtMusicLogo}/>
            </div>
        </div>
    );
}

export default SmartLinkBody;
