interface Props {
    name: string
    folder: string
    idx: number
    onPlayFunction: () => void
}

const BeforeAfter: React.FC<Props> = ({ name, folder, idx, onPlayFunction }) => {
    const rawPath = `audios/comparativo-mix/${folder}/raw.mp3`;
    const mixPath = `audios/comparativo-mix/${folder}/mix.mp3`;

    return (
        <>
            <div className="slide" id={`slide-${idx}`}>
                    <h3>{name}</h3>
                    Raw (Antes)
                    <audio controls onPlay={onPlayFunction}>
                    <source src={rawPath} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                    </audio>
                    Mix (Depois)
                    <audio controls onPlay={onPlayFunction}>
                    <source src={mixPath} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                    </audio>
                </div>
        </>
    );
};

export default BeforeAfter;