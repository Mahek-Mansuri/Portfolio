// Home.jsx
import React from 'react';
import './Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className="DevPic">
      <Navbar expand="md" variant="dark" className="custom-navbar" collapseOnSelect>
        <Container fluid="lg" className="px-4 hamburgr">
          {/* optional brand placeholder - kept visually hidden for accessibility */}
          <Navbar.Brand href="#" className="visually-hidden">Sohel Pinjari</Navbar.Brand>

          {/* Toggle / hamburger */}
          <Navbar.Toggle aria-controls="main-navbar" className="custom-toggler" />

          {/* Collapsible nav */}
          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav className="align-items-center">
              <Nav.Item className="Nav-items">
                <Nav.Link onClick={() => scrollToSection('portfolio')} className="Nav-link">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link onClick={() => scrollToSection('about')} className="Nav-link">About</Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link onClick={() => scrollToSection('contact')} className="Nav-link">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item className="Nav-items">
                <Nav.Link className="Nav-link-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSquareLinkedin} className="linkedin-icon" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

