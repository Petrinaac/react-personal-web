import { Link } from "react-scroll";
import data from "../../data/index.json"

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-link-container">
        <div>
          <img src="/img/logo.png" alt="logo" className="footer-logo"/>
        </div>
        <div className="footer-items">
          <ul>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
              >
              Domů
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
              >
              Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
              >
              O mně
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
              >
              Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          {data?.socials?.map((item,index) => (
            <div key={index} className="footer-social-icon">
              <a href={item.href}><i className={item.class}></i></a>
            </div>
          ))}
        </div>
      </div>
      <hr className="line" />
      <div>
        <p>@MartinPetřina</p>
      </div>
    </footer>
  );
}

export default Footer;
