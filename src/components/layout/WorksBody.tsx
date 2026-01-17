import React from "react";
import Card from "../cards/Card";
import '../../styles/App.css';
import CardSpotify from "../cards/CardSpotify";
import { scrollReveal } from "../../hooks/scrollReveal";
import { beats } from "../../data/works";
import { mixMaster } from "../../data/works";
import { fullProduction } from "../../data/works";

const WorksBody: React.FC = () => {
    scrollReveal();

    return (
        <>
            <section className="works" id="works">
      
            <div className="works-section">
                <h2>🎧 Beats</h2>
                <h5>Instrumentais autorais</h5>
                <div className="cards-grid">
                    {beats.map((work) => (
                        work.media === "youtube" ?
                        <Card src={work.src} title={work.title} /> :
                        <CardSpotify src={work.src} title={work.title} />
                    ))}
                </div>
            </div>

            <div className="works-section">
                <h2>🎚 Mix / Master</h2>
                <h5>Projetos onde fiz a Mixagem e Masterização de alguma parte ou de toda a música</h5>
                <div className="cards-grid">
                    {mixMaster.map((work) => (
                        work.media === "youtube" ?
                        <Card src={work.src} title={work.title} /> :
                        <CardSpotify src={work.src} title={work.title} />
                    ))}
                </div>
            </div>

            <div className="works-section">
                <h2>🔥 Beatmake + Mix/Master</h2>
                <h5>Projetos onde diz toda a produção (Beat + Mixagem + Masterização)</h5>
                <div className="cards-grid">
                  {fullProduction.map((work) => (
                    work.media === "youtube" ?
                    <Card src={work.src} title={work.title} /> :
                    <CardSpotify src={work.src} title={work.title} />
                  ))}
                </div>
            </div>

            </section>
        </>
    )
}

export default WorksBody;