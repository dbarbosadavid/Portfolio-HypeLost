import React from "react";

interface CardProps {
    src?: string;
    title?: string;
}



const Nome: React.FC<CardProps> = (props) => {
    return (
        <>
            <tr>
                <p style={{marginBottom: "2rem", textAlign: "center"}}>
                    <iframe width="100%" src={"https://www.youtube.com/embed/" + props.src}></iframe>
                    <div>
                        {props.title}
                    </div>                    
                </p>
            </tr>
            
        </>
    )
}

export default Nome;