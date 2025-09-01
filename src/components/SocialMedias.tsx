import React from "react";
import instagramLogo from '../assets/instagram-logo.webp'
import beatstarsLogo from '../assets/beatstars-logo.png'
import beatplaceLogo from '../assets/beatplace-logo.webp'
import youtubeLogo from '../assets/youtube-logo.png'

export const SocialMedias: React.FC = () => {
    return (
        <>
            <h2>HypeLost Beats - Social Medias</h2>
            <div id="social-medias">
                <a href="https://www.youtube.com/@prodhypelost" target="_blank">
                <img src={youtubeLogo} className="logo" alt="IG Profile"/>
                </a>
                <a href="https://www.instagram.com/hypelostbeats/" target="_blank" >
                <img src={instagramLogo} className="logo" alt="IG Profile" />
                </a>
                <a href="https://www.beatstars.com/hypelost" target="_blank">
                <img src={beatstarsLogo} className="logo" alt="BeatStars Profile"/>
                </a>
                <a href="https://beatplace.co/hypelost-hl" target="_blank">
                <img src={beatplaceLogo} className="logo" alt="BeatPlace Profile"/>
                </a>
            </div>
        </>
    )
}