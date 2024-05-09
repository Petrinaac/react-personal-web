import { useState, useEffect } from 'react'
import {Link} from 'react-scroll'

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closeMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if(window.innerWidth <= 1200) {
      closeMenu();
    }
  }, [])

  return (
    <nav className={`navbar ${navActive? "active" : ""}`}>
      <div>
        <img src="/img/logo.png" alt="logo" className="logo"/>
      </div>
      <a className={`nav-hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav-hamburger-line">

        </span>
        <span className="nav-hamburger-line">

        </span>
        <span className="nav-hamburger-line">

        </span>
      </a>
      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link 
            onClick={closeMenu} 
            activeClass="navbar-active-content" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            to="heroSection" 
            className="navbar-content"
            >
            Domů
            </Link>
          </li>
          <li>
            <Link 
            onClick={closeMenu} 
            activeClass="navbar-active-content" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            to="projects" 
            className="navbar-content"
            >
            Portfolio
            </Link>
          </li>
          <li>
            <Link 
            onClick={closeMenu} 
            activeClass="navbar-active-content" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            to="about" 
            className="navbar-content"
            >
            O mně
            </Link>
          </li>
          <li>
          <Link
          onClick={closeMenu} 
          activeClass="navbar-active-content" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          to="Contact" 
          className="navbar-content"
          >
          Kontakt
          </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar;