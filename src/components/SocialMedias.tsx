import React from "react";
import instagramLogo from '../assets/instagram-logo.webp'
import beatstarsLogo from '../assets/beatstars-logo.png'
import beatplaceLogo from '../assets/beatplace-logo.webp'
import youtubeLogo from '../assets/youtube-logo.png'

export const SocialMedias: React.FC = () => {
    return (
        <>
            <div className="social-medias">
                <a href="https://www.youtube.com/@prodhypelost" target="_blank">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/hypelostbeats/" target="_blank">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                <a href="https://www.beatstars.com/hypelost" target="_blank">
                    <img src={beatstarsLogo} alt="BeatStars" />
                </a>
                <a href="https://beatplace.co/hypelost-hl" target="_blank">
                    <img src={beatplaceLogo} alt="BeatPlace" />
                </a>
            </div>
        </>
    )
}

export default SocialMedias;