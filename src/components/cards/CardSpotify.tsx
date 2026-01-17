import React from "react";

interface CardProps {
    src?: string;
    title?: string;
}

                  


const CardSpotify: React.FC<CardProps> = (props) => {
    return (
        <>
            <div className="card reveal">
                <p style={{marginBottom: "2rem", textAlign: "center"}}>
                    <iframe src={props.src} width="100%" height="80"></iframe>
                    <p>
                        {props.title}
                    </p>
                </p>
            </div>
            
        </>
    )
}

export default CardSpotify;