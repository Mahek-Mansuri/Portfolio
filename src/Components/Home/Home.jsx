import React, { useContext, useState } from 'react';
import './Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../Context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import navLogo from '../../Assets/nav-logo.png'
import navLogo1 from '../../Assets/nav-logo1.png'

export default function Home() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    if (id === 'contact') {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('contact:retype'));
      }, 40);
    }
    setExpanded(false);
  };

  const [expanded, setExpanded] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'dark' ? "DevPic" : "DevPic1"}`}>
      <Navbar
        expand="md"
        variant="dark"
        className={`${theme === 'dark' ? "custom-navbar" : "custom-navbar1"}`}
        collapseOnSelect
        expanded={expanded}
      >

        <Navbar.Brand
          href="#"
          onClick={() => navigate('/')}
          className='logo-sohel'
        >
          <img src={theme === "dark" ? navLogo : navLogo1} alt='logo' />

        </Navbar.Brand>
        <Container fluid="lg" className="px-4 hamburgr">

          <Navbar.Toggle
            aria-controls="main-navbar"
            className="custom-toggler"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />

          <Navbar.Collapse
            id="main-navbar"
            className="justify-content-end"
            style={{ backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)" }}
          >
            <Nav className="align-items-center">
              <Nav.Item className="Nav-items">
                <Nav.Link
                  onClick={() => scrollToSection('home')}
                  className={`${theme === 'dark' ? "Nav-link" : "Nav-link1"}`}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link
                  onClick={() => scrollToSection('portfolio')}
                  className={`${theme === 'dark' ? "Nav-link" : "Nav-link1"}`}
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link
                  onClick={() => scrollToSection('about')}
                  className={`${theme === 'dark' ? "Nav-link" : "Nav-link1"}`}
                >
                  About Me
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link
                  onClick={() => scrollToSection('contact')}
                  className={`${theme === 'dark' ? "Nav-link" : "Nav-link1"}`}
                >
                  Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="Nav-items d-flex gap-1">
                <button
                  onClick={() => {
                    toggleTheme();
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