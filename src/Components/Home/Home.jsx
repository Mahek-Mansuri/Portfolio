// Home.jsx
import React, { useContext } from 'react';
import './Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../Context/ThemeContext';


export default function Home() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });

    if (id === 'contact') {
      // tiny timeout so scroll has started and to reduce race with IntersectionObserver
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('contact:retype'));
      }, 40);
    }


  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    
    <div className={`${theme === 'dark' ? "DevPic" : "DevPic1"}`}
    >
      <Navbar expand="md" variant="dark" className={`${theme === 'dark' ? "custom-navbar" : "custom-navbar1"}`} collapseOnSelect>
        <Container fluid="lg" className="px-4 hamburgr">
          {/* optional brand placeholder - kept visually hidden for accessibility */}
          <Navbar.Brand href="#" className="visually-hidden">Sohel Pinjari</Navbar.Brand>

          {/* Toggle / hamburger */}
          <Navbar.Toggle aria-controls="main-navbar" className="custom-toggler" />

          {/* Collapsible nav */}
          <Navbar.Collapse id="main-navbar" className="justify-content-end" style={{backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}}>
            <Nav className="align-items-center">
              <Nav.Item className="Nav-items">
                <Nav.Link onClick={() => scrollToSection('portfolio')} className={`${theme === 'dark' ? "Nav-link" : "Nav-link1"}`}>Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link onClick={() => scrollToSection('about')} className={`${theme === 'dark' ? "Nav-link" : "Nav-link1"}`}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link onClick={() => scrollToSection('contact')} className={`${theme === 'dark' ? "Nav-link" : "Nav-link1"}`}>Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items d-flex gap-1">
                <button
                  onClick={() => {
                    toggleTheme();
                    // let the theme change take effect, then ask ContactPage to restart typing
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('contact:retype'));
                    }, 60);
                  }}
                  style={{ color: theme === "dark" ? "white" : "orange", paddingLeft: '10px' }}
                >
                  {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}