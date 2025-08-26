import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ThemeContext } from "../../Context/ThemeContext";
import './Portfolio.css'
import { useNavigate } from "react-router-dom";
import hadafMain from "../../Assets/Hadaf/hadaf-main.jpg"
import cctvMian from "../../Assets/CCTV/CCTV-MAIN.jpg"
import telvasMain from "../../Assets/telvas-library/telvasMain.jpg"
import vsMain from "../../Assets/vs-capital/vsMain.jpg"
import team from "../../Assets/team-24/team.jpg"
import zupzap from "../../Assets/Zup-zap/zupzap.jpg"
import callbuddy from "../../Assets/call-buddy/callbuddy.jpg"
import ps from "../../Assets/P&S/ps.jpg"
import A1 from "../../Assets/A One Zone/A1.jpg"
import A3 from "../../Assets/A one zone footwear/A3.jpg"


const cards = [
  {
    id: 1,
    title: "Hadaf Green Energy",
    subtitle: "Design, Development",
    img: hadafMain,
    alt: "App Landing",
    category: "web development"
  },
  {
    id: 2,
    title: "Xconnect",
    subtitle: "Design, Development",
    img: cctvMian,
    alt: "Medical Concept",
    category: "web development"
  },
  {
    id: 3,
    title: "Telvas Library",
    subtitle: "Design, Development",
    img: telvasMain,
    alt: "Marketing Dashboard",
    category: "web development"
  },
  {
    id: 4,
    title: "VS Capital",
    subtitle: "Design, Development",
    img: vsMain,
    alt: "E-commerce Platform",
    category: "web development"
  },
  {
    id: 5,
    title: "Team 24",
    subtitle: "Design, Development",
    img: team,
    alt: "Brand Identity",
    category: "web development"
  },
  {
    id: 6,
    title: "ZupZap",
    subtitle: "Design, Development",
    img: zupzap,
    alt: "Social Media Campaign",
    category: "app development"
  },
   {
    id: 7,
    title: "Call Buddy",
    subtitle: "Design, Development",
    img: callbuddy,
    alt: "Social Media Campaign",
    category: "app development"
  },
   {
    id: 8,
    title: "P&S",
    subtitle: "Design, Development",
    img: ps,
    alt: "Social Media Campaign",
    category: "app development"
  },
   {
    id: 9,
    title: "A One Zone",
    subtitle: "Design, Development",
    img: A1,
    alt: "Social Media Campaign",
    category: "app development"
  },
   {
    id: 10,
    title: "A One Zone Footwear",
    subtitle: "Design, Development",
    img: A3,
    alt: "Social Media Campaign",
    category: "app development"
  },
  
];

export default function Portfolio() {
  const { theme } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  // --- load more / view more settings ---
  const initialCount = 3;   // how many to show initially
  // const increment = 3;      // how many to add per "Load more" click
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [expanded, setExpanded] = useState(false);

  // Filtered array based on active filter
  const filteredCards = activeFilter === "all"
    ? cards
    : cards.filter(card => card.category === activeFilter);

  // Slice to only the visible ones
  const visibleCards = filteredCards.slice(0, visibleCount);

  // categories list
  const categories = [...new Set(cards.map(card => card.category))];

 const handleProjectClick = (projectId) => {
  // scroll to top of window first, then navigate
  window.scrollTo({ top: 0, behavior: 'auto' });
  navigate(`/project/${projectId}`);
};

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(initialCount);
    setExpanded(false);
  }, [activeFilter]);


  function handleToggleAll() {
    if (expanded) {
      setVisibleCount(initialCount);
      setExpanded(false);
    } else {
      setVisibleCount(filteredCards.length);
      setExpanded(true);
    }
  }

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

      <Container style={{ maxWidth: '1675px' }}>
        <Row className="portfolio-grid" >
          {visibleCards.map((c) => (
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
                        <path d="M3.33301 8H12.6663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* Controls: Load more / View more */}
        <div className="gap-2" style={{paddingBottom:'90px'}}>
         
          <button
            type="button"
            className={`btn ${expanded ? 'btn-secondary' : 'btn-dark'}`}
            style={{background:"#0e7490" ,color:'white'}}
            onClick={handleToggleAll}
            aria-pressed={expanded}
          >
            {expanded ? 'Show less' : 'View more'}
          </button>

        
        </div>
      </Container>
    </section>
  );
}
