import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cards } from './portfolioData'; // Import your cards data

export default function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = cards.find(card => card.id === parseInt(id));
  
  const goBack = () => {
    navigate(-1); // Go back to previous page
  };
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div className="portfolio-detail-container">
      <button onClick={goBack} className="back-button">
        &larr; Back to Portfolio
      </button>
      
      <div className="project-detail">
        <h1>{project.title}</h1>
        <h2>{project.subtitle}</h2>
        <img src={project.img} alt={project.alt} className="project-image" />
        <p>Category: {project.category}</p>
        {/* Add more project details here */}
      </div>
    </div>
  );
}