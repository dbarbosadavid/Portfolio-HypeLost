interface DigitalPlatformsProps {
    name: string;
    url: string;
    logo: string;
}

const DigitalPlatforms: React.FC<DigitalPlatformsProps> = (props) => {
    return (
        <div>
            <a 
                href={props.url} 
                style={{textDecoration: "none"}}
                target='_blank'
                className='link-button'>
                <img src={props.logo} width={50}/>
                {props.name}
            </a>
        </div>
    )
}
export default DigitalPlatforms;