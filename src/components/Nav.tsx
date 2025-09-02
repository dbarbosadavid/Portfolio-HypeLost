import React from "react";
import '../App.css';
import SocialMedias from "./SocialMedias";
import hypelostLogo from '../assets/hypelost.png'

const Nav: React.FC = () => {
    return (
      <>
        <p><img width={100} style={{borderRadius: "20px"}} src={hypelostLogo} alt="HypeLost" /></p>
        <SocialMedias />
        <h1>Portfolio</h1>
      </>
    )
}

export default Nav;
