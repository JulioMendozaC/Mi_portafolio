import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


const NavBar = () => {

  const [activeLink, setActiveLink] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           <h3 className="text-white">Julio Mendoza</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#inicio" className={activeLink === 'inicio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('inicio')}>Inicio</Nav.Link>
              <Nav.Link href="#Habilidades" className={activeLink === 'Habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Habilidades')}>Habilidades</Nav.Link>
              <Nav.Link href="#Proyectos" className={activeLink === 'Proyectos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Proyectos')}>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/julio-cesar-medoza-colin-41320126b/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/JulioMendozaC"><img src={navIcon3} alt="" /></a>
              </div>
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
}
export default NavBar