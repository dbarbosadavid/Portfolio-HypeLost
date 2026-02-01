import '../../styles/App.css';
import SocialMedias from "../SocialMedias";
import hypelostLogo from '../../assets/hypelost.png'

const Nav: React.FC = () => {
    return (
      <>
        <nav className="navbar">
        <div className="nav-left">
          <img
            src={hypelostLogo}
            alt="HypeLost"
            className="nav-logo"
          />
          <div className="nav-text">
            <h1>HypeLost</h1>
            <span>Músico/Produtor</span>
            
          </div>
          <a
                    href="/">
                <i className="fa fa-home" aria-hidden="true"></i>
          </a>
        </div>

        <SocialMedias />
      </nav>
      </>
    )
}

export default Nav;
