import React from "react";

interface CardProps {
    src?: string;
    title?: string;
}

                  


const CardSpotify: React.FC<CardProps> = (props) => {
    return (
        <>
            <tr>
                <p style={{marginBottom: "2rem", textAlign: "center"}}>
                    <iframe id="ytplayer" width="100%" height="80rem" src={props.src}></iframe>
                    <div>
                        {props.title}
                    </div>                    
                </p>
            </tr>
            
        </>
    )
}

export default CardSpotify;