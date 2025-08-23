import React from "react";
import { useParams } from "react-router-dom";
import { cards } from '../Portfolio/portfolioData'; // Import from shared file

export default function PortfolioDetail() {
  const { id } = useParams();
  const project = cards.find(card => card.id === parseInt(id));
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.img} alt={project.alt} />
      <p>{project.subtitle}</p>
      {/* Add more project details here */}
    </div>
  );
}