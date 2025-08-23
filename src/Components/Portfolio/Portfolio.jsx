import React, { useContext, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ThemeContext } from "../../Context/ThemeContext";
import './Portfolio.css'
import { useNavigate } from "react-router-dom";
import img1 from "../../Assets/portfolio1.jpg";
import img2 from "../../Assets/portfolio-2.jpg";
import img3 from "../../Assets/portfolio-3.jpg";

const cards = [
  {
    id: 1,
    title: "App Landing Design",
    subtitle: "Branding, UI/UX",
    img: img1,
    alt: "App Landing",
    category: "design"
  },
  {
    id: 2,
    title: "Medical Platform",
    subtitle: "Design, Development",
    img: img2,
    alt: "Medical Concept",
    category: "development"
  },
  {
    id: 3,
    title: "Marketing Analytics",
    subtitle: "Marketing, Analytics",
    img: img3,
    alt: "Marketing Dashboard",
    category: "marketing"
  },
  {
    id: 4,
    title: "E-commerce Solution",
    subtitle: "UI/UX, Development",
    img: img1,
    alt: "E-commerce Platform",
    category: "development"
  },
  {
    id: 5,
    title: "Brand Identity",
    subtitle: "Branding, Design",
    img: img2,
    alt: "Brand Identity",
    category: "design"
  },
  {
    id: 6,
    title: "Social Campaign",
    subtitle: "Marketing, Strategy",
    img: img3,
    alt: "Social Media Campaign",
    category: "marketing"
  },
];

export default function Portfolio() {
  const { theme } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState("all");
   const navigate = useNavigate(); 
  
  const filteredCards = activeFilter === "all" 
    ? cards 
    : cards.filter(card => card.category === activeFilter);
  
  const categories = [...new Set(cards.map(card => card.category))];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className={`portfolio-section ${theme}-theme`}>
      <div className="section-headerp text-center">
        <h5 className="section-subtitlep">Featured Work</h5>
        <h2 className="section-titlep">My Portfolio</h2>
        <p className="section-descriptionp">
          Explore my latest projects showcasing my expertise in design, development, and marketing.
        </p>
      </div>
      
      <div className="portfolio-filters">
        <button 
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All Projects
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${activeFilter === category ? "active" : ""}`}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <Container style={{maxWidth: '1675px'}}>
        <Row className="portfolio-grid">
          {filteredCards.map((c) => (
            <Col key={c.id} xs={12} md={6} lg={4} className="portfolio-item">
              <div className="portfolio-card-wrapper">
                <div className="card-media">
                  <img src={c.img} alt={c.alt} className="card-media-img" />
                  <div className="media-overlay" />
                  <div className="category-badge">{c.category}</div>
                </div>

                <Card className="info-cardP">
                  <Card.Body className="card-bodyP">
                    <small className="card-subtitleP">{c.subtitle}</small>
                    <Card.Title className={`card-titleP ${theme === "dark" ? "black" : "white"}`}>{c.title}</Card.Title>
                    <button 
                      className="view-project-btn"
                      onClick={() => handleProjectClick(c.id)}
                    >
                      View Project
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}