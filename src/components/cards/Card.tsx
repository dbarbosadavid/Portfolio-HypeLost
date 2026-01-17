import React from "react";

interface CardProps {
    src?: string;
    title?: string;
}



const Card: React.FC<CardProps> = ({src, title}) => {
    return (
        <>
            <div className="card reveal">
            <iframe
                src={`https://www.youtube.com/embed/${src}`}
                loading="lazy"
                allowFullScreen
            ></iframe>

            <p className="card-title">{title}</p>
    </div>
        </>
    )
}

export default Card;